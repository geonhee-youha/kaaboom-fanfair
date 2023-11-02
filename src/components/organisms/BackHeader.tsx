import { useRouter } from "next/router";
import { AppBar, Box, Container } from "@mui/material";
import { isIOS } from "react-device-detect";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { theme } from "../../themes/theme";
import IconButton from "../atoms/IconButton";
import { SlideProps, useNavigation } from "../../hooks/useNavigation";
import youhaInverseGrey from "../../constants/youhaInverseGrey";
type Props = {
  item: SlideProps;
  noBack?: boolean;
  iconName?: IconName;
  children?: React.ReactNode;
  color?: string;
  backIconShow: boolean;
  handleMouseDown: (e: any) => void;
  handleClickBack?: () => void;
};
export default function BackHeader({
  item,
  noBack,
  children,
  backIconShow,
  handleClickBack,
}: Props) {
  const { navigation } = useNavigation();
  const onClick = () => {
    if (noBack) {
    } else {
      navigation.goBack(item);
    }
    if (handleClickBack) {
      handleClickBack();
    }
  };
  return (
    <AppBar
      elevation={0}
      sx={{
        position: isIOS ? "absolute" : "fixed",
        top: 0,
        left: 0,
        zIndex: 99999999,
        width: "100%",
        opacity: 1,
        height: "calc(56px + var(--sait))",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          height: "calc(56px + var(--sait))",
          transition: "all 0.35s ease",
        }}
        className="HomeHeaderBack"
      />
      <Box
        sx={{
          borderRadius: 0,
        }}
      >
        <Container
          sx={{
            // backgroundColor: "#101013",
            transition: "all 0.5s ease",
            p: theme.spacing("var(--sait)", 3, 0, 3),
            position: "relative",
            display: "flex",
            alignItems: "center",
            height: 56,
          }}
        >
          <Box sx={{ m: theme.spacing(0, 0, 0, -1.5) }}>
            <IconButton
              name="chevron-left"
              onClick={onClick}
              sx={{ display: backIconShow ? "flex" : "none" }}
              size={20}
            />
          </Box>
          {children}
        </Container>
      </Box>
    </AppBar>
  );
}
BackHeader.defaultProps = {
  transHeight: 48,
  backIconShow: true,
  handleMouseDown: () => {},
};

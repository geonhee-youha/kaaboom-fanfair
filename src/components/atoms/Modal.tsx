import _ from "lodash";
import { Box, Fade, SxProps, alpha } from "@mui/material";
import { memo, useEffect, useState } from "react";
import { SlideProps, NavigationProps } from "../../hooks/useNavigation";
import { theme } from "../../themes/theme";
type Props = {
  item: SlideProps | SlideProps;
  navigation: NavigationProps;
  children?: React.ReactNode;
  nav?: React.ReactNode;
  header?: React.ReactNode;
  viewportTriggers?: any[];
  fixViewPort?: boolean;
  sx?: SxProps;
  backgroundColor?: string;
  direction?: "left" | "right" | "up" | "down" | undefined;
  headerTrans?: boolean;
};
export default function Modal({
  item,
  navigation,
  children,
  header,
  nav,
  fixViewPort,
  viewportTriggers,
  sx,
  backgroundColor,
  direction,
  headerTrans,
}: Props) {
  //   const [tempShow, setTempShow] = useState<boolean>(false);
  //   useEffect(() => {
  //     if (item.show) {
  //       setTempShow(true);
  //     }
  //   }, [item.show]);
  //   useEffect(() => {
  //     if (!tempShow) {
  //       setTimeout(() => {
  //         navigation.goBack(item);
  //       }, 300);
  //     }
  //   }, [tempShow]);
  const onClose = () => {
    navigation.goBack(item);
  };
  return (
    <Fade
      appear={item.nav === "main" && item.name === "home" ? false : true}
      in={item.nav === "main" && item.name === "home" ? true : item.show}
      mountOnEnter
      unmountOnExit
      onExited={() => navigation.handleExited(item.key)}
      timeout={200}
      className={`Slider`}
    >
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex:
            (item.index + 1) * 2 +
            (item.nav !== "main" ? (item.name === "food" ? 95 : 93) : 3),
          overflow: "hidden",
        }}
        className={`Slider`}
      >
        <Box
          sx={{
            position: "absolute",
            transition: "all 0.5s ease",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: alpha("#101013", 0.98),
          }}
          onClick={onClose}
        />
        <Box
          sx={{
            height: "100%",
            overflow: `hidden auto`,
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              maxWidth: `444px`,
              m: theme.spacing(3),
              display: "inline-block",
              verticalAlign: "middle",
              position: 'relative',
              overflowY: 'auto',
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </Fade>
  );
}

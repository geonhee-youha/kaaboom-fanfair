import _ from "lodash";
import { Toolbar, AppBar, Box, Container, Typography } from "@mui/material";
import { memo } from "react";
import { NavigationProps, SlideProps } from "../../hooks/useNavigation";
import { useRecoilValue } from "recoil";
import { userState } from "../../recoil/users";
import youhaGrey from "../../constants/youhaGrey";
import { theme } from "../../themes/theme";
import { bottomTabs } from "../../constants";
import IconButton from "../atoms/IconButton";
import Visual from "../atoms/Visual";
import youhaInverseGrey from "../../constants/youhaInverseGrey";
type Props = {
  slides: SlideProps[];
  navigation: NavigationProps;
};
export default memo(MainHeader);
function MainHeader({ slides, navigation }: Props) {
  const user = useRecoilValue(userState);
  const lastSlide =
    slides[
      _.findLastIndex(slides, (el) => el.show === true && el.name === "home")
    ];
  const currentStack = lastSlide.stack;
  const onClickSearch = () => {};
  const onClickBell = () => {};
  return (
    <AppBar
      component="div"
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: lastSlide ? (lastSlide.index + 1) * 2 + 3 : 2,
      }}
      elevation={0}
      className="Header"
    >
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
          className="MainHeaderContainer"
        >
          <Box
            sx={{
              flex: 1,
            }}
          >
            <Visual
              src="/logos/logo-colored.png"
              sx={{
                "& img": {
                  width: "auto !important",
                  height: `20px !important`,
                },
              }}
            />
          </Box>
          <Box sx={{ m: theme.spacing(0, -1.5, 0, 0) }}>
            <IconButton
              name="search"
              color={youhaInverseGrey[400]}
              onClick={onClickSearch}
            />
            <IconButton
              name="bell"
              color={youhaInverseGrey[400]}
              onClick={onClickBell}
            />
            {/* <IconButton sx={{ mr: -1.5 }} onClick={handleClickActivity}>
                <Icon name="user-plus" />
              </IconButton> */}
            {/* <IconButton sx={{ mr: -1 }} onClick={handleClickActivity}>
                <Icon name="bell" />
              </IconButton>
              <IconButton sx={{ mr: -1 }} onClick={handleClickMessages}>
                <Icon name="paper-plane" />
              </IconButton>
              {lastSlide.stack === "user" && (
                <IconButton sx={{ mr: -1 }} onClick={handleClickOptions}>
                  <Icon name="cog" />
                </IconButton>
              )} */}
          </Box>
        </Container>
      </Box>
    </AppBar>
  );
}

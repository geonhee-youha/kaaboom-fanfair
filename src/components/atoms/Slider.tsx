import _ from "lodash";
import { Box, Slide, SxProps } from "@mui/material";
import { memo, useEffect } from "react";
import { SlideProps, NavigationProps } from "../../hooks/useNavigation";
import { useViewportSize } from "../../hooks/useViewportSize";
import { isIOS } from "react-device-detect";
import {
  changeViewport,
  useChangeContainer,
} from "../../hooks/useChangeContainer";
import youhaGrey from "../../constants/youhaGrey";
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
};
export default memo(Slider);
function Slider({
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
}: Props) {
  const homeSlide = item.nav === "main" && item.name === "home";
  const { viewportHeight, offsetTop, pb } = useViewportSize();
  const { containerHeight, innerHeight } = useChangeContainer(item, [
    viewportTriggers,
    viewportHeight,
  ]);
  useEffect(() => {
    changeViewport(item, {
      containerHeight: containerHeight,
      innerHeight: innerHeight,
    });
  }, []);
  useEffect(() => {
    changeViewport(item, {
      containerHeight: containerHeight,
      innerHeight: innerHeight,
    });
  }, [viewportTriggers, viewportHeight]);
  return (
    <Slide
      appear={item.nav === "main" && item.name === "home" ? false : true}
      direction={direction ? direction : "left"}
      in={item.nav === "main" && item.name === "home" ? true : item.show}
      mountOnEnter
      unmountOnExit
      onExited={() => navigation.handleExited(item.key)}
      timeout={200}
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
        {/* <Box
          sx={{
            position: "fixed",
            top: 56,
            right: 24,
            p: 1,
            backgroundColor: "rgba(0,0,0,0.6)",
            color: youhaGrey[900],
            zIndex: 999,
          }}
          className={`Test ${item.key}`}
        >
          {viewportHeight},{`calc(${pb} + ${homeSlide ? 64 : 0}px)`},{offsetTop}
        </Box> */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height:
              fixViewPort !== true && viewportHeight !== 0 && isIOS
                ? `${viewportHeight}px`
                : "100%",
            transform:
              fixViewPort !== true && viewportHeight !== 0 && isIOS
                ? `translateY(${offsetTop}px)`
                : "none",
            touchAction: "none",
            overflow: "hidden",
            m: "0 auto",
            maxWidth: "444px",
            backgroundColor: backgroundColor ?? `#101013`,
          }}
        >
          {!(item.nav === "main" && homeSlide) && header && header}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              pt: "calc(var(--sait) + 56px)",
              pb: `calc(${pb} + ${homeSlide ? 64 : 0}px)`,
              // pb: `calc(${pb} + ${homeSlide ? 0 : 0}px)`,
            }}
            className={`Slider ${item.key}`}
          >
            <Box
              sx={{
                display: "flex",
                width: "100%",
                height: "100%",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    width: "100%",
                    height: "100%",
                    flexDirection: "column",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      //
                      // position: !scrollable ? "absolute" : "relative",
                      // top: !scrollable ? 0 : "initial",
                      // left: !scrollable ? 0 : "initial",
                      // bottom: !scrollable ? 0 : "initial",
                      // right: !scrollable ? 0 : "initial",
                      // zIndex: !scrollable ? 2 : "initial",
                      // overflowY: !scrollable ? "visible" : "scroll",
                      // touchAction: !scrollable ? "none" : "initial",
                      //
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      zIndex: 2,
                      overflowY: "visible",
                      touchAction: "none",
                      //
                      // position: "relative",
                      // overflowY: "scroll",
                      // height: "100%",
                      //
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      ...sx,
                    }}
                    className={`Container ${item.key}`}
                  >
                    <Box
                      sx={
                        {
                          // flex: 1,
                        }
                      }
                      className={`Inner ${item.key}`}
                    >
                      {children}
                    </Box>
                  </Box>
                </Box>
              </Box>
              {nav && nav}
            </Box>
          </Box>
        </Box>
      </Box>
    </Slide>
  );
}

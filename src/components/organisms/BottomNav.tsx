import _ from "lodash";
import { memo } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../../recoil/users";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Container,
  Typography,
} from "@mui/material";
import { bottomTabs } from "../../constants";
import { NavigationProps, SlideProps } from "../../hooks/useNavigation";
import Icon from "../atoms/Icon";
import youhaGrey from "../../constants/youhaGrey";
import User from "../atoms/User";
import { theme } from "../../themes/theme";
import youhaInverseGrey from "../../constants/youhaInverseGrey";

type Props = {
  slides: SlideProps[];
  navigation: NavigationProps;
};

export default memo(BottomNav);
function BottomNav({ slides, navigation }: Props) {
  const user = useRecoilValue(userState);
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    navigation.stackTo(
      newValue,
      newValue === "user" ? user.user.nickname : undefined
    );
  };
  const lastSlide =
    slides[
      _.findLastIndex(slides, (el) => el.show === true && el.name === "home")
    ];
  return (
    <Box
      sx={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: lastSlide ? (lastSlide.index + 1) * 2 + 3 : 2,
      }}
      className="Nav"
    >
      <Container
        sx={{
          transition: "all 0.5s ease",
          p: `0 !important`,
        }}
        className="BottomNavContainer"
      >
        <BottomNavigation
          showLabels
          onChange={handleChange}
          sx={{
            minHeight: 64,
            borderTop: `1px solid ${youhaInverseGrey[100]}`,
            borderLeft: `1px solid ${youhaInverseGrey[100]}`,
            borderRight: `1px solid ${youhaInverseGrey[100]}`,
            backgroundColor: `#17171c`,
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            p: theme.spacing(0, 0, `calc(var(--saib))`, 0),
            overflow: "hidden",
          }}
        >
          {bottomTabs.map((item, index) => {
            const active = lastSlide.stack === item.value;
            const color = active ? "#ffffff" : youhaInverseGrey[400];
            return (
              <BottomNavigationAction
                key={index}
                disableRipple={item.value === "upload"}
                label={
                  <Typography
                    sx={{
                      fontSize: 10,
                      lineHeight: "14px",
                      fontWeight: "500 !important",
                      color: color,
                      display: item.value === "upload" ? "none" : "initial",
                    }}
                  >
                    {item.label}
                  </Typography>
                }
                value={item.value}
                icon={
                  <Box
                    sx={{
                      m: theme.spacing(
                        0,
                        0,
                        item.value === "upload" ? 0 : 0.25,
                        0
                      ),
                    }}
                  >
                    {item.name === "users" ? (
                      <Box
                        sx={{
                          borderRadius: "50% !important",
                          overflow: "hidden",
                          width: 28,
                          height: 28,
                          border: `2px solid ${color}`,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <User item={user} size={20} />
                      </Box>
                    ) : (
                      <Icon
                        // prefix={active ? "fas" : "far"}
                        prefix="fas"
                        name={item.name}
                        size={item.value === "upload" ? 40 : 20}
                        color={color}
                      />
                    )}
                  </Box>
                }
                sx={{
                  minHeight: 56,
                  minWidth: 0,
                  transition: `all 0.5s ease`,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
            );
          })}
        </BottomNavigation>
      </Container>
    </Box>
  );
}

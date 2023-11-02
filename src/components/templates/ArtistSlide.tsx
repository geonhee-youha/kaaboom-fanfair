import _ from "lodash";
import {
  Box,
  Container,
  IconButton,
  Tabs,
  Tab,
  alpha,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import PullToRefresh from "react-simple-pull-to-refresh";
import { useScrollY } from "../../hooks/useScrollY";
import { NavigationProps, SlideProps } from "../../hooks/useNavigation";
import { scrollToEl } from "../../utils";
import youhaInverseGrey from "../../constants/youhaInverseGrey";
import Typo from "../atoms/Typo";
import Slider from "../atoms/Slider";
import { theme } from "../../themes/theme";
import BackHeader from "../organisms/BackHeader";
import Visual from "../atoms/Visual";
import { artists, missions } from "../../pages/main/home/home/home";
import MissionItem from "../organisms/MissionItem";

export const userTabs = [
  { id: 1, label: "진행중인 미션" },
  { id: 2, label: "완료된 미션" },
];

type Props = {
  item: SlideProps;
  navigation: NavigationProps;
};

export function ArtistSlide({ item, navigation }: Props) {
  //   const { feedsData } = useCustomSWRInfinite(
  //     setInfiniteKey(`/feed`, 5),
  //     "feedsData"
  //   );
  //   const isLoading = feedsData.isLoading;
  //   const error = feedsData.error;
  const render = item.id !== null || item.id !== "";
  return (
    <Slider
      item={item}
      navigation={navigation}
      sx={{
        overflowY: "hidden",
      }}
      header={
        <BackHeader item={item}>
          <Header item={item} navigation={navigation} />
        </BackHeader>
      }
      //   headerTrans
    >
      <Page item={item} navigation={navigation} />
    </Slider>
  );
}

function Page({ item, navigation }: Props) {
  // const { navigation } = useNavigation();
  const slide = item;
  const artist = artists[_.findIndex(artists, (el) => el.id === item?.id)];
  const { ref: feedsRef, inView: feedsInView } = useInView({
    threshold: 0.5,
  });
  const { ref: missionsRef, inView: missionsInView } = useInView({
    threshold: 0.5,
  });
  const { scrollY } = useScrollY(item);
  const [prevent, setPrevent] = useState<boolean>(false);
  const [tab0ScrollY, setTab0ScrollY] = useState<number>(0);
  const [tab1ScrollY, setTab1ScrollY] = useState<number>(0);
  const [value, setValue] = useState<number>(item.tab);
  const [swiper, setSwiper] = useState<any>(null);
  const handleSlideChange = (swiper: any) => {
    setValue(swiper.realIndex);
  };
  useEffect(() => {
    if (swiper) swiper.slideTo(value);
  }, [value, swiper]);
  useEffect(() => {
    if (!prevent) {
      if (value === 0) {
        setTab0ScrollY(scrollY);
      } else {
        setTab1ScrollY(scrollY);
      }
    }
  }, [scrollY]);
  const onChange = (event: React.SyntheticEvent, newValue: number) => {
    setPrevent(true);
    setValue(newValue);
    scrollToEl(
      item.key,
      newValue === 0 ? tab0ScrollY : tab1ScrollY,
      () => setPrevent(false),
      undefined,
      true
    );
  };
  const onRefresh = (): Promise<void> => {
    return new Promise((res) => {
      setTimeout(() => {
        // res();
      }, 0);
    });
  };
  return (
    <>
      <Container>
        <Box
          sx={{
            m: theme.spacing(0, -3),
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              aspectRatio: "1",
            }}
          >
            {artist && (
              <>
                <Visual
                  src={artist.thumbnail}
                  absolute
                  coverBgColor={`linear-gradient(${alpha(
                    `#101013`,
                    1
                  )}, ${alpha(`#101013`, 0)}, ${alpha(`#101013`, 0)}, ${alpha(
                    `#101013`,
                    1
                  )})`}
                />
                <Box
                  sx={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    p: theme.spacing(2, 3),
                  }}
                >
                  <Typo
                    sx={{
                      fontSize: 40,
                      lineHeight: "52px",
                    }}
                  >
                    {artist.name}
                  </Typo>
                  {/* <Typography
                    sx={{
                      fontSize: 14,
                      lineHeight: "20px",
                      // color: youhaInverseGrey[400],
                      // m: theme.spacing(0.5, 0, 0, 0),
                    }}
                  >
                    총 48개의 미션 진행중
                  </Typography> */}
                </Box>
              </>
            )}
          </Box>
        </Box>
      </Container>
      <Container
        sx={{
          mt: 1,
          position: "sticky",
          //   top: `calc(var(--sait) + 56px)`,
          top: 0,
          zIndex: 9,
          backgroundColor: `#101013`,
          "&:after": {
            position: "absolute",
            content: '""',
            left: 24,
            right: 24,
            bottom: 0,
            height: "1px",
            backgroundColor: youhaInverseGrey[200],
          },
        }}
        className="TabBar"
      >
        <Tabs
          value={value}
          onChange={onChange}
          aria-label="basic tabs example"
          sx={{
            backgroundColor: "transparent",
            "& .MuiTabs-indicator": {
              backgroundColor: youhaInverseGrey[900],
            },
          }}
        >
          {userTabs.map((item, index) => (
            <Tab
              key={index}
              label={`${item.label} ${20}`}
              sx={{
                flex: 1,
                p: theme.spacing(0, 1),
                color: `${youhaInverseGrey[900]} !important`,
                opacity: 0.3,
                fontSize: 14,
                lineHeight: "20px",
                fontWeight: "700",
                "&.Mui-selected": {
                  opacity: 1,
                },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            />
          ))}
        </Tabs>
      </Container>
      <PullToRefresh
        onRefresh={onRefresh}
        // isPullable={!feedsData.isLoading && !feedsData.isLoadingMore && !feedsData.isValidating}
      >
        <Box
          sx={
            {
              // "&.absolute": {
              //   position: "absolute",
              //   top: 0,
              //   left: 0,
              //   right: 0,
              //   bottom: 0,
              //   "& .swiper": {
              //     position: "absolute",
              //     top: 0,
              //     left: 0,
              //     right: 0,
              //     bottom: 0,
              //   },
              //   "& .swiper-slide": {
              //     // position: "absolute",
              //     // top: 0,
              //     // left: 0,
              //     // right: 0,
              //     // bottom: 0,
              //     overflowY: "scroll",
              //   },
              // },
            }
          }
          className="Swiper"
        >
          <Swiper
            onSwiper={setSwiper}
            onSlideChange={handleSlideChange}
            style={{ width: "100%", touchAction: "manipulation" }}
          >
            <SwiperSlide>
              <Container>
                <Box
                  sx={{
                    m: theme.spacing(2, 0, 0, 0),
                    "& > *:not(:nth-of-type(1))": {
                      m: theme.spacing(1, 0, 0, 0),
                    },
                  }}
                >
                  {missions.map((item, index) => {
                    return (
                      <MissionItem
                        key={index}
                        type="inArtist"
                        item={item}
                        slide={slide}
                      />
                    );
                  })}
                </Box>
              </Container>
            </SwiperSlide>
            <SwiperSlide></SwiperSlide>
          </Swiper>
        </Box>
      </PullToRefresh>
    </>
  );
}
export function Header({ item, navigation }: Props) {
  return (
    <>
      <Typo sx={{ flex: 1, fontWeight: "700" }}>{item.title}</Typo>
      <IconButton name="paper-plane" sx={{ mr: -1 }} />
      <IconButton name="ellipsis-v" sx={{ mr: -1 }} />
    </>
  );
}

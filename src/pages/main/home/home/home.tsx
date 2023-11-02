import _ from "lodash";
import { useRouter } from "next/router";
import { Box, ButtonBase, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {
  NavigationProps,
  SlideProps,
  useNavigation,
} from "../../../../hooks/useNavigation";
import Slider from "../../../../components/atoms/Slider";
import { theme } from "../../../../themes/theme";
import { blue, cyan, orange, purple, yellow } from "@mui/material/colors";
import youhaInverseGrey from "../../../../constants/youhaInverseGrey";
import MissionItem, {
  MissionProps,
} from "../../../../components/organisms/MissionItem";
import CategoryItem, {
  CategoryProps,
} from "../../../../components/organisms/CategoryItem";
import ArtistItem, {
  ArtistProps,
} from "../../../../components/organisms/ArtistItem";

export const categories: CategoryProps[] = [
  {
    label: "아이돌",
    value: "idol",
    icon: "stars",
    color: purple[500],
  },
  {
    label: "배우",
    value: "actor",
    icon: "user-tie-hair",
    color: orange[500],
  },
  {
    label: "가수",
    value: "singer",
    icon: "microphone-stand",
    color: cyan[500],
  },
  {
    label: "인플루언서",
    value: "influencer",
    icon: "circle-nodes",
    color: blue[500],
  },
  {
    label: "스포츠",
    value: "athlete",
    icon: "medal",
    color: yellow[500],
  },
];

export const artists: ArtistProps[] = [
  {
    id: "1",
    name: "D.O.",
    thumbnail: "/temp/artists/do.webp",
  },
  {
    id: "2",
    name: "ZICO",
    thumbnail: "/temp/artists/zico.webp",
  },
  {
    id: "3",
    name: "CHEN",
    thumbnail: "/temp/artists/chen.webp",
  },
  {
    id: "4",
    name: "BAEKHYUN",
    thumbnail: "/temp/artists/baekhyun.webp",
  },
  {
    id: "5",
    name: "XIUMIN",
    thumbnail: "/temp/artists/xiumin.webp",
  },
];

export const missions: MissionProps[] = [
  {
    id: "1",
    state: "opened",
    artist: artists[0],
    user: {
      id: "1",
      name: "Jinho You",
      thumbnail: "/temp/user/you.webp",
    },
    title: "팔레스타인 하마스 난민 기부 미션",
    amount: {
      goal: 30000000,
      current: 8000000,
    },
    dueDate: new Date("2023-12-01"),
  },
  {
    id: "2",
    state: "opened",
    artist: artists[1],
    user: {
      id: "1",
      name: "Jinho You",
      thumbnail: "/temp/user/you.webp",
    },
    title: "팔레스타인 하마스 난민 기부 미션",
    amount: {
      goal: 30000000,
      current: 6000000,
    },
    dueDate: new Date("2023-12-01"),
  },
  {
    id: "3",
    state: "opened",
    artist: artists[2],
    user: {
      id: "1",
      name: "Jinho You",
      thumbnail: "/temp/user/you.webp",
    },
    title: "팔레스타인 하마스 난민 기부 미션",
    amount: {
      goal: 30000000,
      current: 6000000,
    },
    dueDate: new Date("2023-12-01"),
  },
  {
    id: "4",
    state: "completed",
    artist: artists[0],
    user: {
      id: "1",
      name: "Jinho You",
      thumbnail: "/temp/user/1.webp",
    },
    title: "군장병 맹호부대 황금마차 지원 프로젝트",
    amount: {
      goal: 10000000,
      current: 24638000,
    },
    dueDate: new Date("2023-10-24"),
    src: `/temp/videos/1.mp4`,
  },
];

let comingVideo: any;
let comingVideoElement: any;
let comingElement: any;

export default function App() {
  const router = useRouter();
  useEffect(() => {
    router.push(`/main`);
  }, []);
  return null;
}
type Props = {
  item: SlideProps;
  navigation: NavigationProps;
};

export function HomeSlide({ item, navigation }: Props) {
  const { slides } = useNavigation();
  const currentSlide =
    slides[
      _.findLastIndex(slides, (el) => el.show === true && el.name === "home")
    ];
  const active = currentSlide.stack === "home" && currentSlide.name === "home";
  const slide = item;
  const [loaded, setLoaded] = useState<string[]>([]);
  const [focusedIndex, setFocusedIndex] = useState<number>(0);
  const [focused, setFocused] = useState<boolean>(false);
  useEffect(() => {
    if (active) {
      setFocused(true);
    } else {
      setFocused(false);
    }
  }, [active]);
  useEffect(() => {
    setFocusedIndex(loaded.indexOf("true"));
  }, [
    loaded,
    // , length
  ]);
  useEffect(() => {
    comingVideo = document.querySelectorAll(".ComingLine");
    comingVideoElement = document.querySelectorAll(".ComingVideo video");
    comingElement = document.querySelectorAll(".Coming");
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry: any) => {
        if (!focused) return null;
        if (entry.intersectionRatio > 0) {
          const index = entry.target.className.split(" ")[1];
          if (loaded[index] === "true") return null;
          setLoaded((prevState) => {
            prevState[index] = "true";
            return [...prevState];
          });
          return;
        } else {
          const index = entry.target.className.split(" ")[1];
          if (loaded[index] === "false") return null;
          setLoaded((prevState) => {
            prevState[index] = "false";
            return [...prevState];
          });
        }
      });
    });
    comingVideo.forEach((comingVideo: any) => io.observe(comingVideo));
    return () => {
      comingVideo.forEach((comingVideo: any) => io.unobserve(comingVideo));
    };
  }, [loaded, focused]);
  return (
    <Slider item={item} navigation={navigation}>
      <Container>
        <Box
          sx={{
            p: theme.spacing(2, 0),
          }}
        >
          <BannerItem />
        </Box>
        <Box
          sx={{
            p: theme.spacing(2, 0),
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                flex: 1,
                fontSize: 16,
                lineHeight: "24px",
                fontWeight: "700",
              }}
            >
              아티스트 찾기
            </Typography>
            <ButtonBase disableRipple>
              <Typography
                sx={{
                  fontSize: 12,
                  lineHeight: "16px",
                  fontWeight: "500",
                  color: youhaInverseGrey[400],
                }}
              >
                전체보기
              </Typography>
            </ButtonBase>
          </Box>
          <Box
            sx={{
              m: theme.spacing(0, -3),
            }}
          >
            <Box
              sx={{
                width: "100%",
                overflowX: "scroll",
                whiteSpace: "nowrap",
              }}
            >
              <Box
                sx={{
                  p: theme.spacing(2, 3),
                  display: "flex",
                  alignItems: "center",
                  "& > *:not(:nth-of-type(1))": {
                    m: theme.spacing(0, 0, 0, 1),
                  },
                }}
              >
                {categories.map((item, index) => {
                  return <CategoryItem key={index} item={item} />;
                })}
                <Box
                  sx={{
                    minWidth: 16,
                    height: 24,
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            p: theme.spacing(2, 0),
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                flex: 1,
                fontSize: 16,
                lineHeight: "24px",
                fontWeight: "700",
              }}
            >
              실시간 인기 미션
            </Typography>
            <ButtonBase disableRipple>
              <Typography
                sx={{
                  fontSize: 12,
                  lineHeight: "16px",
                  fontWeight: "500",
                  color: youhaInverseGrey[400],
                }}
              >
                전체보기
              </Typography>
            </ButtonBase>
          </Box>
          <Box
            sx={{
              m: theme.spacing(0, -3),
            }}
          >
            <Box
              sx={{
                width: "100%",
                overflowX: "scroll",
                whiteSpace: "nowrap",
              }}
            >
              <Box
                sx={{
                  p: theme.spacing(2, 3),
                  display: "flex",
                  alignItems: "center",
                  "& > *:not(:nth-of-type(1))": {
                    m: theme.spacing(0, 0, 0, 1),
                  },
                }}
              >
                {_.filter(missions, (el) => el.state === "opened").map(
                  (item, index) => {
                    return (
                      <MissionItem key={index} item={item} slide={slide} />
                    );
                  }
                )}
                <Box
                  sx={{
                    minWidth: 16,
                    height: 24,
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            p: theme.spacing(2, 0),
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                flex: 1,
                fontSize: 16,
                lineHeight: "24px",
                fontWeight: "700",
              }}
            >
              화제의 신규 아티스트
            </Typography>
            <ButtonBase disableRipple>
              <Typography
                sx={{
                  fontSize: 12,
                  lineHeight: "16px",
                  fontWeight: "500",
                  color: youhaInverseGrey[400],
                }}
              >
                전체보기
              </Typography>
            </ButtonBase>
          </Box>
          <Box
            sx={{
              m: theme.spacing(0, -3),
            }}
          >
            <Box
              sx={{
                width: "100%",
                overflowX: "scroll",
                whiteSpace: "nowrap",
              }}
            >
              <Box
                sx={{
                  p: theme.spacing(2, 3),
                  display: "flex",
                  alignItems: "center",
                  "& > *:not(:nth-of-type(1))": {
                    m: theme.spacing(0, 0, 0, 1),
                  },
                }}
              >
                {artists.map((item, index) => {
                  return <ArtistItem key={index} item={item} />;
                })}
                <Box
                  sx={{
                    minWidth: 16,
                    height: 24,
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            p: theme.spacing(2, 0),
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                flex: 1,
                fontSize: 16,
                lineHeight: "24px",
                fontWeight: "700",
              }}
            >
              최근 성공한 미션
            </Typography>
            <ButtonBase disableRipple>
              <Typography
                sx={{
                  fontSize: 12,
                  lineHeight: "16px",
                  fontWeight: "500",
                  color: youhaInverseGrey[400],
                }}
              >
                전체보기
              </Typography>
            </ButtonBase>
          </Box>
          <Box
            sx={{
              p: theme.spacing(2, 0),
              width: "100%",
            }}
          >
            {_.filter(missions, (el) => el.state === "completed").map(
              (item, index) => (
                <MissionItem
                  key={index}
                  item={item}
                  index={index}
                  focusedIndex={focusedIndex}
                  focused={focused}
                />
              )
            )}
          </Box>
        </Box>
      </Container>
    </Slider>
  );
}

function BannerItem() {
  return (
    <ButtonBase
      sx={{
        width: "100%",
        borderRadius: 2,
        backgroundColor: `#17171c`,
        height: 200,
      }}
    ></ButtonBase>
  );
}

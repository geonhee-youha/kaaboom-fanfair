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
import ArtistItem, { ArtistProps } from "../../../../components/organisms/ArtistItem";

const categories: CategoryProps[] = [
  {
    label: "Idol",
    value: "idol",
    icon: "stars",
    color: purple[500],
  },
  {
    label: "Actor",
    value: "actor",
    icon: "user-tie-hair",
    color: orange[500],
  },
  {
    label: "Singer",
    value: "singer",
    icon: "microphone-stand",
    color: cyan[500],
  },
  {
    label: "Influencer",
    value: "influencer",
    icon: "circle-nodes",
    color: blue[500],
  },
  {
    label: "Athlete",
    value: "athlete",
    icon: "medal",
    color: yellow[500],
  },
];

const artists: ArtistProps[] = [
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

const missions: MissionProps[] = [
  {
    id: "1",
    artist: artists[0],
    user: {
      id: "1",
      name: "Jinho You",
      thumbnail: "/temp/user/you.webp",
    },
    title: "Cook Kimchi-jigae for me please",
    amount: {
      goal: 30000,
      current: 8000,
    },
    dueDate: new Date("2023-12-01"),
  },
  {
    id: "2",
    artist: artists[1],
    user: {
      id: "1",
      name: "Jinho You",
      thumbnail: "/temp/user/you.webp",
    },
    title: "Cook Kimchi-jigae for me please",
    amount: {
      goal: 30000,
      current: 12000,
    },
    dueDate: new Date("2023-12-01"),
  },
  {
    id: "3",
    artist: artists[2],
    user: {
      id: "1",
      name: "Jinho You",
      thumbnail: "/temp/user/you.webp",
    },
    title: "Cook Kimchi-jigae for me please",
    amount: {
      goal: 30000,
      current: 12000,
    },
    dueDate: new Date("2023-12-01"),
  },
];

const completedMissions: MissionProps[] = [
  {
    id: "4",
    artist: artists[0],
    user: {
      id: "1",
      name: "Jinho You",
      thumbnail: "/temp/user/1.webp",
    },
    title: "Cook Kimchi-jigae for me please",
    amount: {
      goal: 30000,
      current: 30000,
    },
    dueDate: new Date("2023-10-24"),
    src: `/temp/videos/1.mp4`,
  },
  {
    id: "5",
    artist: artists[1],
    user: {
      id: "1",
      name: "Jinho You",
      thumbnail: "/temp/user/1.webp",
    },
    title: "Cook Kimchi-jigae for me please",
    amount: {
      goal: 30000,
      current: 30000,
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
                fontSize: 18,
                lineHeight: "28px",
                fontWeight: "700",
              }}
            >
              Discover Artist
            </Typography>
            <Typography
              sx={{
                fontSize: 12,
                lineHeight: "16px",
                fontWeight: "500",
                color: youhaInverseGrey[400],
              }}
            >
              View all
            </Typography>
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
                    minWidth: 24,
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
                fontSize: 18,
                lineHeight: "28px",
                fontWeight: "700",
              }}
            >
              Urgent Fundraising
            </Typography>
            <Typography
              sx={{
                fontSize: 12,
                lineHeight: "16px",
                fontWeight: "500",
                color: youhaInverseGrey[400],
              }}
            >
              View all
            </Typography>
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
                {missions.map((item, index) => {
                  return <MissionItem key={index} item={item} />;
                })}
                <Box
                  sx={{
                    minWidth: 24,
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
                fontSize: 18,
                lineHeight: "28px",
                fontWeight: "700",
              }}
            >
              Hot Artists
            </Typography>
            <Typography
              sx={{
                fontSize: 12,
                lineHeight: "16px",
                fontWeight: "500",
                color: youhaInverseGrey[400],
              }}
            >
              View all
            </Typography>
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
                    minWidth: 24,
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
                fontSize: 18,
                lineHeight: "28px",
                fontWeight: "700",
              }}
            >
              Completed Missions
            </Typography>
            <Typography
              sx={{
                fontSize: 12,
                lineHeight: "16px",
                fontWeight: "500",
                color: youhaInverseGrey[400],
              }}
            >
              View all
            </Typography>
          </Box>
          <Box
            sx={{
              p: theme.spacing(2, 0),
              width: "100%",
            }}
          >
            {completedMissions.map((item, index) => (
              <MissionItem
                type="completed"
                key={index}
                item={item}
                index={index}
                focusedIndex={focusedIndex}
                focused={focused}
              />
            ))}
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

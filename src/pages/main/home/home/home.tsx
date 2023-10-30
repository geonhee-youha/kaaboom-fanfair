import _ from "lodash";
import { useRouter } from "next/router";
import { Box, ButtonBase, Container, Typography, alpha } from "@mui/material";
import { useEffect } from "react";
import { NavigationProps, SlideProps } from "../../../../hooks/useNavigation";
import Slider from "../../../../components/atoms/Slider";
import youhaGrey from "../../../../constants/youhaGrey";
import { theme } from "../../../../themes/theme";
import Icon from "../../../../components/atoms/Icon";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { blue, cyan, orange, pink, purple, yellow } from "@mui/material/colors";
import Visual from "../../../../components/atoms/Visual";
import youhaInverseGrey from "../../../../constants/youhaInverseGrey";
import { comma } from "../../../../utils";
import User from "../../../../components/atoms/User";
import Typo from "../../../../components/atoms/Typo";
import Button from "../../../../components/atoms/Button";

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
  const render = true;
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
                {projects.map((item, index) => {
                  return <ProjectItem key={index} item={item} />;
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
          <Box>

          </Box>
        </Box>
        <Box sx={{ height: 1000 }} />
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

type CategoryProps = {
  label: string;
  value: string;
  icon: IconName;
  color: string;
};

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

function CategoryItem({ item }: { item: CategoryProps }) {
  const grid = 4;
  return (
    <Box
      sx={{
        "@media(max-width: 280px)": {
          minWidth: `calc((280px - 48px - ${
            (grid - 1) * 8
          }px) / ${grid}) !important`,
        },
        minWidth: `calc((100vw - 48px - ${
          (grid - 1) * 8
        }px) / ${grid}) !important`,
        "@media(min-width: 444px)": {
          minWidth: `calc((444px - 48px - ${
            (grid - 1) * 8
          }px) / ${grid}) !important`,
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ButtonBase
        sx={{
          "@media(max-width: 280px)": {
            minWidth: `calc((280px - 48px - ${
              (grid - 1) * 8
            }px) / ${grid}) !important`,
          },
          minWidth: `calc((100vw - 48px - ${
            (grid - 1) * 8
          }px) / ${grid}) !important`,
          "@media(min-width: 444px)": {
            minWidth: `calc((444px - 48px - ${
              (grid - 1) * 8
            }px) / ${grid}) !important`,
          },
          borderRadius: 1.5,
          backgroundColor: `#17171c`,
          aspectRatio: `1`,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Icon name={item.icon} prefix="fad" color={item.color} size={28} />
      </ButtonBase>
      <Typography
        sx={{
          fontSize: 12,
          lineHeight: "16px",
          textAlign: "center",
          m: theme.spacing(1.5, 0, 0, 0),
          fontWeight: "500",
        }}
      >
        {item.label}
      </Typography>
    </Box>
  );
}

type ProjectProps = {
  id: string;
  artist: {
    id: string;
    thumbnail: string;
  };
  user: {
    id: string;
    name: string;
    thumbnail: string;
  };
  title: string;
  amount: {
    goal: number;
    current: number;
  };
  dueDate: Date;
};

const projects: ProjectProps[] = [
  {
    id: "1",
    artist: {
      id: "1",
      thumbnail: "/temp/artists/do.webp",
    },
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
    id: "1",
    artist: {
      id: "1",
      thumbnail: "/temp/artists/do.webp",
    },
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
    id: "1",
    artist: {
      id: "1",
      thumbnail: "/temp/artists/do.webp",
    },
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

function ProjectItem({ item }: { item: ProjectProps }) {
  function diffDay(date: Date) {
    const todayTime = new Date();
    const diff = date.getTime() - todayTime.getTime();
    const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));
    const diffHour = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const diffMin = Math.floor((diff / (1000 * 60)) % 60);
    const diffSec = Math.floor((diff / 1000) % 60);
    return diffDay;
  }
  const grid = 2;
  return (
    <Box
      sx={{
        "@media(max-width: 280px)": {
          minWidth: `calc((280px - 48px - ${
            (grid - 1) * 8
          }px) / ${grid}) !important`,
        },
        minWidth: `calc((100vw - 48px - ${
          (grid - 1) * 8
        }px) / ${grid}) !important`,
        "@media(min-width: 444px)": {
          minWidth: `calc((444px - 48px - ${
            (grid - 1) * 8
          }px) / ${grid}) !important`,
        },
      }}
    >
      <ButtonBase
        sx={{
          borderRadius: 1.5,
          backgroundColor: `#17171c`,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            aspectRatio: `16 / 9`,
            overflow: "hidden",
            borderRadius: 1.5,
          }}
        >
          <Visual
            src={item.artist.thumbnail}
            //   coverBgColor={`linear-gradient(${alpha(`#17171c`, 0)} 40%, ${alpha(
            //     `#17171c`,
            //     1
            //   )})`}
            absolute
            forceShow
          />
        </Box>
        <Box
          sx={{
            p: theme.spacing(2, 2, 0, 2),
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: 12,
              lineHeight: "16px",
              color: youhaInverseGrey[400],
            }}
          >
            By
          </Typography>
          {/* <User
            item={item.user}
            size={16}
            sx={{
              m: theme.spacing(0, 0.5),
            }}
          /> */}
          <Typography
            sx={{
              fontSize: 12,
              lineHeight: "16px",
              m: theme.spacing(0, 0, 0, 0.5),
              color: youhaInverseGrey[400],
            }}
          >
            {item.user.name}
          </Typography>
        </Box>
        <Box
          sx={{
            p: theme.spacing(1, 2),
          }}
        >
          <Typo
            lines={2}
            sx={{
              fontSize: 14,
              lineHeight: "20px",
              fontWeight: "500",
              wordBreak: "break-all",
            }}
          >
            {item.title}
          </Typo>
        </Box>
        <Box
          sx={{
            p: theme.spacing(2, 2, 2, 2),
            width: "100%",
          }}
        >
          <Box
            sx={{
              position: "relative",
              borderRadius: 2,
              overflow: "hidden",
              backgroundColor: youhaInverseGrey[100],
              height: 6,
              width: "100%",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                width: `${(item.amount.current / item.amount.goal) * 100}%`,
                backgroundColor: pink[500],
                borderRadius: 2,
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              m: theme.spacing(1, 0, 0, 0),
            }}
          >
            <Typography
              sx={{
                fontSize: 12,
                lineHeight: "16px",
                color: pink[500],
              }}
            >
              {`$${comma(item.amount.current)}`}
            </Typography>
            <Typography
              sx={{
                fontSize: 12,
                lineHeight: "16px",
                color: youhaInverseGrey[500],
              }}
            >
              D-{diffDay(item.dueDate)}
            </Typography>
          </Box>
        </Box>
      </ButtonBase>
    </Box>
  );
}

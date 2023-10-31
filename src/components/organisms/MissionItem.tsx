import { Box, ButtonBase, Typography } from "@mui/material";
import Visual from "../atoms/Visual";
import { theme } from "../../themes/theme";
import youhaInverseGrey from "../../constants/youhaInverseGrey";
import { pink } from "@mui/material/colors";
import { comma, getDiffDay } from "../../utils";
import Typo from "../atoms/Typo";
import VideoPlayer from "./VideoPlayer";
import { ArtistProps } from "./ArtistItem";
import User from "../atoms/User";

export type MissionProps = {
  id: string;
  artist: ArtistProps;
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
  src?: string;
};

export default function MissionItem({
  type,
  index,
  focused,
  focusedIndex,
  item,
}: {
  type?: string;
  index?: number;
  focused?: boolean;
  focusedIndex?: number;
  item: MissionProps;
}) {
  const grid = 2;
  return (
    <Box
      sx={
        type === "completed"
          ? {
              width: "100%",
              m: theme.spacing(0, 0, 2, 0),
            }
          : {
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
            }
      }
    >
      <ButtonBase
        sx={{
          position: "relative",
          borderRadius: 1.5,
          backgroundColor: `#17171c`,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "100%",
        }}
      >
        {type === "completed" ? (
          <VideoPlayer
            index={index}
            focusedIndex={focusedIndex}
            focused={focused}
            src={item.src ?? ""}
          />
        ) : (
          <Box
            sx={{
              position: "relative",
              width: "100%",
              // aspectRatio: `16 / 9`,
              aspectRatio: `1`,
              overflow: "hidden",
              borderRadius: 1.5,
            }}
          >
            <Visual src={item.artist.thumbnail} absolute forceShow />
          </Box>
        )}
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
              {getDiffDay(item.dueDate)}
            </Typography>
          </Box>
        </Box>
        {type === "completed" && (
          <Box
            sx={{
              p: theme.spacing(2, 2, 4, 2),
              width: "100%",
            }}
          >
            <Typography
              sx={{
                fontSize: 14,
                lineHeight: "20px",
                fontWeight: "700",
                textAlign: "center",
              }}
            >
              Contributers
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                m: theme.spacing(2, 0, 0, -1),
              }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                return (
                  <User
                    key={index}
                    item={{
                      thumbnail: `https://source.unsplash.com/random/?${index}`,
                    }}
                    sx={{
                      m: theme.spacing(0, -1, 0, 0),
                    }}
                    size={32}
                  />
                );
              })}
            </Box>
            <Typography
              sx={{
                fontSize: 12,
                lineHeight: "16px",
                color: youhaInverseGrey[400],
                textAlign: "center",
                m: theme.spacing(2, 0, 0, 0),
              }}
            >
              Thanks for all donations!
            </Typography>
          </Box>
        )}
      </ButtonBase>
    </Box>
  );
}

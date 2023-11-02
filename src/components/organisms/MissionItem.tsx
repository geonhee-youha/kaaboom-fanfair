import { Box, ButtonBase, Typography, alpha } from "@mui/material";
import Visual from "../atoms/Visual";
import { theme } from "../../themes/theme";
import youhaInverseGrey from "../../constants/youhaInverseGrey";
import { pink, yellow } from "@mui/material/colors";
import { comma, getDiffDay } from "../../utils";
import Typo from "../atoms/Typo";
import VideoPlayer from "./VideoPlayer";
import { ArtistProps } from "./ArtistItem";
import User from "../atoms/User";
import moment from "moment";
import Icon from "../atoms/Icon";
import { useRecoilState } from "recoil";
import { missionModalState } from "../../recoil/modal";
import Button from "../atoms/Button";
import IconButton from "../atoms/IconButton";
import { SlideProps, useNavigation } from "../../hooks/useNavigation";

export type MissionProps = {
  id: string;
  state: string;
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
  slide,
}: {
  type?: string;
  index?: number;
  focused?: boolean;
  focusedIndex?: number;
  item: MissionProps;
  slide?: SlideProps;
}) {
  const { navigation } = useNavigation();
  const [missionModal, setMissionModal] = useRecoilState(missionModalState);
  const grid = 2;
  const onClick = () => {
    navigation.goTo({
      name: "mission",
      id: item.id,
      //   slideTo: "comment",
      mode: type,
    });
  };
  return (
    <Box
      sx={
        item.state === "completed" || type === "modal"
          ? {
              position: "relative",
              width: "100%",
              m: theme.spacing(0, 0, 2, 0),
              borderRadius: 1.5,
              backgroundColor: type === "modal" ? `none` : `#17171c`,
              overflow: "hidden",
            }
          : {
              position: "relative",
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
              overflow: "hidden",
            }
      }
    >
      {item.state === "completed" && type !== "inArtist" && (
        <>
          <Box
            sx={{
              width: "100%",
              aspectRatio: `16 / 9`,
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              zIndex: 9,
              borderRadius: 1.5,
            }}
          >
            <VideoPlayer
              index={index}
              focusedIndex={focusedIndex}
              focused={focused}
              src={item.src ?? ""}
            />
          </Box>
        </>
      )}
      <ButtonBase
        disableRipple={type === "modal"}
        sx={
          type === "modal"
            ? {
                position: "relative",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                width: "100%",
                borderRadius: 1.5,
                backgroundColor: `#17171c`,
                cursor: "default !important",
                "& *": {
                  cursor: "default !important",
                },
              }
            : {
                position: "relative",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                width: "100%",
                m:
                  item.state === "completed"
                    ? theme.spacing(-1.5, 0, 0, 0)
                    : "initial",
                p:
                  item.state === "completed"
                    ? theme.spacing(1.5, 0, 0, 0)
                    : "initial",
              }
        }
        onClick={onClick}
      >
        {item.state !== "completed" &&
          type !== "modal" &&
          type !== "inArtist" && (
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
            width: "100%",
            p: theme.spacing(2),
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent:
                item.state === "completed" ? "center" : "flex-start",
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
              m: theme.spacing(1, 0, 0, 0),
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typo
              lines={2}
              sx={
                item.state === "completed"
                  ? {
                      width: "100%",
                      fontSize: 16,
                      lineHeight: "24px",
                      fontWeight: "500",
                      // wordBreak: "break-all",
                      textAlign: "center",
                    }
                  : {
                      width: "100%",
                      fontSize: 14,
                      lineHeight: "20px",
                      fontWeight: "500",
                      // wordBreak: "break-all",
                    }
              }
            >
              {item.title}
            </Typo>
            {type === "modal" && (
              <Typography
                sx={{
                  width: "100%",
                  fontSize: 12,
                  lineHeight: "16px",
                  m: theme.spacing(2, 0, 1, 0),
                  color: youhaInverseGrey[600],
                }}
              >
                혼인과 가족생활은 개인의 존엄과 양성의 평등을 기초로 성립되고
                유지되어야 하며, 국가는 이를 보장한다. 정부는 예산에 변경을 가할
                필요가 있을 때에는 추가경정예산안을 편성하여 국회에 제출할 수
                있다.
              </Typography>
            )}
            {item.state === "completed" && (
              <>
                <Box
                  sx={{
                    height: "24px",
                    p: theme.spacing(0, 1),
                    border: `1px solid ${pink[500]}`,
                    backgroundColor: alpha(pink[500], 0.2),
                    display: "flex",
                    alignItems: "center",
                    borderRadius: 2,
                    m: theme.spacing(2, 0, 0, 0),
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 12,
                      lineHeight: "16px",
                      color: pink[500],
                    }}
                  >
                    Completed
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: 14,
                    lineHeight: "20px",
                    color: pink[500],
                    m: theme.spacing(1, 0, 0, 0),
                  }}
                >
                  {`₩${comma(item.amount.current)}`}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 12,
                    lineHeight: "16px",
                    m: theme.spacing(1, 0, 0, 0),
                    color: youhaInverseGrey[200],
                    textAlign: "center",
                  }}
                >
                  {moment(new Date(`2023-10-31`)).format(`MM/DD/YYYY`)} 미션에
                  성공하셨습니다.
                </Typography>
              </>
            )}
          </Box>
          {item.state !== "completed" && (
            <Box
              sx={{
                m: theme.spacing(2, 0, 0, 0),
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
                  {`₩${comma(item.amount.current)}`}
                  {type === "modal" && ` / ${comma(item.amount.goal)}`}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 12,
                    lineHeight: "16px",
                    color: youhaInverseGrey[500],
                  }}
                >
                  {type === "modal" &&
                    ` ~ ${moment(item.dueDate).format("MM/DD/YYYY")} : `}
                  {getDiffDay(item.dueDate)}
                </Typography>
              </Box>
            </Box>
          )}
        </Box>
        {item.state === "completed" && (
          <Box
            sx={{
              p: theme.spacing(3, 2),
              width: "100%",
              borderTop: `1px solid ${youhaInverseGrey[200]}`,
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
              참여한 서포터
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                m: theme.spacing(2, 0, 0, -1),
              }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
                // 최대 8명만
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
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  overflow: "hidden",
                  backgroundColor: `#17171c`,
                  border: `1px solid ${youhaInverseGrey[200]}`,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  m: theme.spacing(0, -1, 0, 0),
                  zIndex: 99,
                }}
              >
                <Icon
                  name="ellipsis-h"
                  color={youhaInverseGrey[400]}
                  size={14}
                  prefix={"fas"}
                />
              </Box>
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
              모든 서포터분들께 감사드립니다!
            </Typography>
          </Box>
        )}
      </ButtonBase>
      {type === "modal" && item.state !== "completed" && (
        <Box
          sx={{
            width: "100%",
            m: theme.spacing(2, 0, 0, 0),
            display: "flex",
            // borderBottomLeftRadius: 20,
            // borderBottomRightRadius: 20,
            // borderRadius: 1.5,
            // overflow: "hidden",
            "& > *:not(:nth-of-type(1))": {
              m: theme.spacing(0, 0, 0, 1),
            },
          }}
        >
          {/* <Button
              size="md"
              backgroundColor={youhaInverseGrey[100]}
              fullWidth
              sx={{
                // borderRadius: 0,
              }}
            >
              <Icon
                name="share-alt"
                size={14}
                prefix="fas"
                sx={{ m: theme.spacing(0, 1, 0, 0) }}
              />
              공유하기
            </Button> */}

          <IconButton
            name="heart"
            backgroundColor={youhaInverseGrey[100]}
            prefix="far"
          />
          <IconButton
            name="share-alt"
            backgroundColor={youhaInverseGrey[100]}
            prefix="far"
          />
          <Button
            size="md"
            fullWidth
            sx={{
              flex: 1,
              // borderRadius: 0,
            }}
          >
            <Icon
              name="seedling"
              size={14}
              prefix="fas"
              sx={{ m: theme.spacing(0, 1, 0, 0) }}
            />
            펀딩하기
          </Button>
        </Box>
      )}
    </Box>
  );
}

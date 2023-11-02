import {
  Box,
  ButtonBase,
  Dialog,
  Paper,
  Typography,
  alpha,
} from "@mui/material";
import { useRecoilState } from "recoil";
import { missionModalState } from "../../recoil/modal";
import { theme } from "../../themes/theme";
import youhaInverseGrey from "../../constants/youhaInverseGrey";
import _ from "lodash";
import { artists, missions } from "../../pages/main/home/home/home";
import MissionItem from "../organisms/MissionItem";
import User from "../atoms/User";
import Typo from "../atoms/Typo";
import Icon from "../atoms/Icon";
import {
  NavigationProps,
  SlideProps,
  useNavigation,
} from "../../hooks/useNavigation";
import Modal from "../atoms/Modal";

type Props = {
  item: SlideProps;
  navigation: NavigationProps;
};

export default function MissionModal({ item, navigation }: Props) {
  const mission = missions[_.findIndex(missions, (el) => el.id === item.id)];
  const artist =
    artists[_.findIndex(artists, (el) => el.id === mission?.artist?.id)];
  const onClose = () => {
    navigation.goBack(item);
  };
  const onClickArtist = (e: any) => {
    e.stopPropagation();
    navigation.goTo({
      name: "artist",
      id: artist.id,
      //   slideTo: "comment",
    });
  };
  return (
    <Modal item={item} navigation={navigation}>
      {artist && item.mode !== "inArtist" && (
        <ButtonBase
          sx={{
            width: "100%",
            // m: theme.spacing(0, 0, 2, 0),
            display: "flex",
            alignItems: "center",
          }}
          disableRipple
          onClick={onClose}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
            onClick={onClickArtist}
          >
            <User item={artist} size={80} sx={{ borderRadius: 1.5 }} />
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                p: theme.spacing(2),
              }}
            >
              <Typo
                sx={{
                  fontSize: 20,
                  lineHeight: "32px",
                }}
              >
                {artist.name}
              </Typo>
              <Typography
                sx={{
                  fontSize: 14,
                  lineHeight: "20px",
                  // color: youhaInverseGrey[400],
                  // m: theme.spacing(0.5, 0, 0, 0),
                }}
              >
                총 48개의 미션 진행중
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  m: theme.spacing(1, 0, 0, 0),
                  alignItems: "center",
                }}
                onClick={onClickArtist}
              >
                <Typography
                  sx={{
                    fontSize: 12,
                    lineHeight: "16px",
                    color: youhaInverseGrey[400],
                  }}
                >
                  다른 미션 보기
                </Typography>
                <Icon
                  name="angle-right"
                  prefix="fas"
                  size={8}
                  color={youhaInverseGrey[400]}
                />
              </Box>
            </Box>
          </Box>
          {/* <IconButton
            prefix="fas"
            name="heart"
            size={16}
            color={youhaInverseGrey[400]}
            sx={{
              border: `1px solid ${youhaInverseGrey[100]}`,
            }}
          /> */}
        </ButtonBase>
      )}
      {mission && <MissionItem type="modal" item={mission} />}
    </Modal>
  );
}

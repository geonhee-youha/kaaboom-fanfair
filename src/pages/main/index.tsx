import _ from "lodash";
import { useRouter } from "next/router";
import {
  bottomNavItems,
  bottomTabs,
  PUSHER_APP_CLUSTER,
  PUSHER_APP_KEY,
} from "../../constants";
import { memo, useEffect, useRef, useState } from "react";
import {
  NavigationProps,
  SlideProps,
  useNavigation,
} from "../../hooks/useNavigation";
import { Box, Button } from "@mui/material";
import { atom, useRecoilState } from "recoil";
import {
  dialogState,
  drawerState,
  uploadDrawerState,
} from "../../recoil/modal";
import { isIOS } from "react-device-detect";
import { sendMessage } from "../../utils/sendMessage";
import BottomNav from "../../components/organisms/BottomNav";
import MainHeader from "../../components/organisms/MainHeader";
import Pusher from "pusher-js";
import { meState } from "../../recoil/user";
import useAxios, { useCustomSWR } from "../../hooks/swrs";
import { HomeSlide } from "./home/home/home";
import { ExploreSlide } from "./home/explore/home";
import { FavoriteSlide } from "./home/favorite/home";
import { AccountSlide } from "./home/account/home";
import { ArtistSlide } from "../../components/templates/ArtistSlide";
import MissionModal from "../../components/templates/MissionModal";

export default function Main() {
  const [me, setMe] = useRecoilState(meState);
  const { navigation, slides } = useNavigation();
  const { meData } = useCustomSWR(`/user/me`, "meData");
  const isLoading = meData.isLoading;
  const error = meData.error;
  const render = !error && !isLoading;
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  // useEffect(() => {
  //   if (render) {
  //     setMe(meData.data);
  //     if (meData.data.nickname === null || meData.data.birth === null) {
  //       navigation.goTo({
  //         nav: "info",
  //         title: "닉네임 입력",
  //       });
  //     }
  //   }
  // }, [render]);
  useEffect(() => {
    if (slides.length === 0)
      navigation.goTo({ nav: "main", stack: "home", name: "home" });
  }, []);
  return mounted && slides.length !== 0 ? (
    <Stack slides={slides} navigation={navigation} />
  ) : null;
}
type MainProps = {
  slides: SlideProps[];
  navigation: NavigationProps;
};
// const MemoizedMain = memo(Stack);
function Stack({ slides, navigation }: MainProps) {
  const mainSlides = _.filter(slides, (el) => el.nav === "main");
  const navs = [
    "search",
    "filter",
    "activity",
    "messages",
    "info",
    "upload",
    "start",
  ];
  const [drawer, setDrawer] = useRecoilState(drawerState);
  const [dialog, setDialog] = useRecoilState(dialogState);
  const [uploadDrawer, setUploadDrawer] = useRecoilState(uploadDrawerState);
  useEffect(() => {
    if (!isIOS) {
      sendMessage({ name: "backEnable", body: "" });
      const finish = () => {
        if (dialog.open) {
          setDialog((prev) => {
            return { ...prev, open: false };
          });
        } else if (drawer.open) {
          setDrawer((prev) => {
            return { ...prev, open: false };
          });
        } else if (uploadDrawer.open) {
          setUploadDrawer((prev) => {
            return { ...prev, open: false };
          });
        } else
          navigation.goBack(
            slides[_.findLastIndex(slides, (el) => el.show === true)]
          );
      };
      window.addEventListener("androidBackhandle", finish);
      return () => {
        sendMessage({ name: "backAble", body: "" });
        window.removeEventListener("androidBackhandle", finish);
      };
    } else {
      sendMessage({ name: "backEnable", body: "" });
    }
  }, [slides]);
  return (
    <>
      {bottomNavItems.map((item, index) => {
        return (
          <MemoizedSlides
            key={index}
            nav={item.nav}
            stack={item.stack}
            slides={mainSlides}
            navigation={navigation}
          />
        );
      })}
      <MainHeader slides={mainSlides} navigation={navigation} />
      <BottomNav slides={mainSlides} navigation={navigation} />
      {navs.map((item, index) => {
        const navSlides = _.filter(slides, (el) => el.nav === item);
        return (
          navSlides.length > 0 && (
            <MemoizedSlides
              key={index}
              nav={item}
              slides={navSlides}
              navigation={navigation}
            />
          )
        );
      })}
    </>
  );
}
type SlidesProps = {
  nav: string;
  stack?: string;
  slides: SlideProps[];
  navigation: NavigationProps;
};
const MemoizedSlides = memo(Slides);
function Slides({ nav, stack, slides, navigation }: SlidesProps) {
  const router = useRouter();
  const pusher = useRef<Pusher>();
  const [connected, setConnected] = useState(false);
  const currentSlide =
    slides[
      _.findLastIndex(slides, (el) => el.show === true && el.name === "home")
    ];
  const active = currentSlide && currentSlide.stack === stack;
  const currentSlides =
    stack !== undefined ? _.filter(slides, (el) => el.stack === stack) : slides;
  useEffect(() => {
    pusher.current = new Pusher(PUSHER_APP_KEY, {
      cluster: PUSHER_APP_CLUSTER,
      forceTLS: true,
    });
    pusher.current.connection.bind("connected", () => setConnected(true));
    return () => {
      pusher.current?.disconnect();
    };
  }, []);
  if (!connected) return null;
  return (
    <Box
      sx={{
        "&.main": {
          "&:not(.active)": { zIndex: "-1 !important" },
          // "&:not(.active) .Nav": { zIndex: "-1 !important" },
          "&:not(.active) .Slider": { zIndex: "-1 !important" },
          // "&:not(.active) .Header": { zIndex: "-1 !important" },
        },
      }}
      className={`${nav}${active ? " active" : ""}`}
    >
      {currentSlides.map((item, index) => {
        return item.name === "home" ? (
          item.nav === "search" ? (
            <></>
          ) : item.nav === "upload" ? (
            <></>
          ) : item.nav === "main" ? (
            item.stack === "home" ? (
              <HomeSlide key={index} item={item} navigation={navigation} />
            ) : item.stack === "explore" ? (
              <ExploreSlide key={index} item={item} navigation={navigation} />
            ) : item.stack === "favorite" ? (
              <FavoriteSlide key={index} item={item} navigation={navigation} />
            ) : item.stack === "account" ? (
              <AccountSlide key={index} item={item} navigation={navigation} />
            ) : (
              <></>
            )
          ) : null
        ) : item.name === "artist" ? (
          <ArtistSlide key={index} item={item} navigation={navigation} />
        ) : item.name === "mission" ? (
          <MissionModal key={index} item={item} navigation={navigation} />
        ) : null;
      })}
    </Box>
  );
}

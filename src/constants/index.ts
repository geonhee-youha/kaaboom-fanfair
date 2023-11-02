import { amber, indigo, purple, red } from "@mui/material/colors";
import { SlideProps } from "../hooks/useNavigation";
import { IconName } from "@fortawesome/fontawesome-svg-core";

export const PUSHER_APP_KEY = "5e3e807338568cf72295";
export const PUSHER_APP_CLUSTER = "ap3";

export const bottomTabs: BottomTabsProps[] = [
  {
    label: "홈",
    value: "home",
    name: "house-heart",
  },
  {
    label: "둘러보기",
    value: "explore",
    name: "rocket-launch",
  },
  {
    label: "업로드",
    value: "upload",
    name: "plus-circle",
  },
  {
    label: "즐겨찾기",
    value: "favorite",
    name: "heart",
  },
  {
    label: "마이카붐",
    value: "account",
    name: "user",
  },
];

export const bottomNavItems: SlideProps[] = [
  {
    key: `main_${bottomTabs[0].value}_home`,
    nav: "main",
    stack: bottomTabs[0].value,
    name: "home",
    title: "",
    show: true,
    index: 0,
    id: -1,
    tab: 0,
    slideTo: -1,
    targetUser: null,
  },
  {
    key: `main_${bottomTabs[1].value}_home`,
    nav: "main",
    stack: bottomTabs[1].value,
    name: "home",
    title: "",
    show: true,
    index: 0,
    id: -1,
    tab: 0,
    slideTo: -1,
    targetUser: null,
  },
  {
    key: `main_${bottomTabs[3].value}_home`,
    nav: "main",
    stack: bottomTabs[3].value,
    title: "",
    name: "home",
    show: true,
    index: -1,
    id: -1,
    tab: 0,
    slideTo: -1,
    targetUser: null,
  },
  {
    key: `main_${bottomTabs[4].value}_home`,
    nav: "main",
    stack: bottomTabs[4].value,
    name: "home",
    title: "",
    show: true,
    index: -1,
    id: -1,
    tab: 0,
    slideTo: -1,
    targetUser: null,
  },
];

export type BottomTabsProps = {
  value: string;
  name: IconName;
  label: string;
};
import {
  CoachingModalProps,
  coachingModalDefaultProps,
  intimacyModalDefaultProps,
  FilterDrawerProps,
  filterDrawerDefaultProps,
  DateModalProps,
  dateModalDefaultProps,
  IntimacyModalProps,
} from "../types/modal";
import { atom } from "recoil";
import { DialogProps, dialogDefaultProps, DrawerProps, drawerDefaultProps } from "../types/index";
export const dialogState = atom<DialogProps>({
  key: "modal/dialog",
  default: dialogDefaultProps,
});
export const loaderState = atom<{ open: boolean }>({
  key: "modal/loader",
  default: {
    open: false,
  },
});
export const drawerState = atom<DrawerProps>({
  key: "modal/drawer",
  default: drawerDefaultProps,
});
export const uploadDrawerState = atom<DrawerProps>({
  key: "modal/uploadDrawerState",
  default: drawerDefaultProps,
});
export const commentDrawerState = atom<DrawerProps>({
  key: "modal/commentDrawer",
  default: drawerDefaultProps,
});
export const termsState = atom<{ open: boolean; title: string; children?: React.ReactNode }>({
  key: "modal/terms",
  default: {
    open: false,
    title: "",
  },
});
export const formState = atom<DialogProps>({
  key: "modal/formState",
  default: dialogDefaultProps,
});
export const postCodeState = atom<DialogProps>({
  key: "modal/postCodeState",
  default: dialogDefaultProps,
});
export const signupModalState = atom<DialogProps>({
  key: "modal/signupModalState",
  default: dialogDefaultProps,
});

//위 검증 필요
export const coachingModalState = atom<CoachingModalProps>({
  key: "modal/coachingModalState",
  default: coachingModalDefaultProps,
});
export const intimacyModalState = atom<IntimacyModalProps>({
  key: "modal/intimacyModalState",
  default: intimacyModalDefaultProps,
});
export const filterDrawerState = atom<FilterDrawerProps>({
  key: "modal/filterDrawerState",
  default: filterDrawerDefaultProps,
});
export const dateModalState = atom<DateModalProps>({
  key: "modal/dateModalState",
  default: dateModalDefaultProps,
});

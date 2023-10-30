import router from "next/router";
import { useEffect } from "react";
import useAxios from "../hooks/swrs";

export default function App() {
  useEffect(() => {
    // useAxios(`/user/me`).then((res) => {
    //   if (res) {
    //     if (res.status === 200) {
    //       router.push(`/main`);
    //     } else {
    //       router.push(`/auth`);
    //     }
    //   }
    // });
    router.push(`/main`); // TEMP (앱인만큼 로그인 체크 필요)
  }, []);
  return <></>;
}

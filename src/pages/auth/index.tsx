import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { loaderState } from "../../recoil/modal";
import Auth from "../../components/templates/auth/Auth";
import { useRouter } from "next/router";
export default function Page() {
  const router = useRouter();
  const setLoader = useSetRecoilState(loaderState);
  useEffect(() => {
    setLoader({ open: false });
  });
  return <Auth />;
}

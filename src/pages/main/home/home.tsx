
import { useNavigation } from "../../../hooks/useNavigation";
import { useEffect } from "react";
import { useRouter } from "next/router";
export default function App() {
  const router = useRouter();
  const pathname = router.pathname;
  const pathnames = pathname.split("/");
  const nav = pathnames[1];
  const stack = pathnames[2];
  const slide = pathnames[3];
  const { id, tab, slideTo } = router.query;
  const { navigation } = useNavigation();
  useEffect(() => {
    navigation.goTo({
      nav: nav,
      stack: stack,
      name: slide,
      id: !isNaN(Number(id)) ? Number(id) : undefined,
      tab: !isNaN(Number(tab)) ? Number(tab) : undefined,
      slideTo: !isNaN(Number(slideTo)) ? Number(slideTo) : undefined,
    });
    router.push(`/main`);
  }, []);
  return null;
}


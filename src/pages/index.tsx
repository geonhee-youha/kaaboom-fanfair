import { useRouter } from "next/router";
import { useEffect } from "react";
import useAxios from "../hooks/swrs";
import { Container } from "@mui/material";
import Button from "../components/atoms/Button";

export default function App() {
  const router = useRouter();
  // useEffect(() => {
  //   // useAxios(`/user/me`).then((res) => {
  //   //   if (res) {
  //   //     if (res.status === 200) {
  //   //       router.push(`/main`);
  //   //     } else {
  //   //       router.push(`/auth`);
  //   //     }
  //   //   }
  //   // });
  //   router.push(`/main`); // TEMP (앱인만큼 로그인 체크 필요)
  // }, []);
  return (
    <Container
      sx={{
        width: "100%",
        height: "100vh",
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button size='lg' onClick={() => router.push(`/main`)}>메인으로</Button>
    </Container>
  );
}

import _ from "lodash";
import { useRouter } from "next/router";
import { Container } from "@mui/material";
import { useEffect } from "react";
import { NavigationProps, SlideProps } from "../../../../hooks/useNavigation";
import Slider from "../../../../components/atoms/Slider";

export default function App() {
  const router = useRouter();
  useEffect(() => {
    router.push(`/main`);
  }, []);
  return null;
}
type Props = {
  item: SlideProps;
  navigation: NavigationProps;
};

export function ExploreSlide({ item, navigation }: Props) {
  return (
    <Slider item={item} navigation={navigation}>
      <Container></Container>
    </Slider>
  );
}

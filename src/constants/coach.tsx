import { amber, indigo, purple, red } from "@mui/material/colors";

export const coachs = [
  {
    id: 1,
    type: "신체",
    icon: "weight",
    name: "제이크",
    mission: "신체정보를 기록하고 변화를 체크합니다.",
    position: "총괄코치",
    profile: "/characters/images/PNG/Sports/he_listening_to_music_100w.png",
    full_image: "/characters/images/PNG/coachs/he_running-1.png",
    animations: ["/characters/anims/listening-to-music.mp4", "/characters/anims/victory.mp4"],
    background_color: red[700],
    desc: "맨해튼 출신 제이크는 월가에서 근무하며 30kg이나 체중이 늘어 건강의 중요성을 알게 된 후, 전문 다이어트 코치로 전향했습니다.",
    promotion: (
      <>
        안녕 친구?
        <br />
        지금 바로 나 제이크와 함께 다이어트를 시작해 보지 않겠어?
      </>
    ),
    benefit: (
      <>
        <b>제이크</b>와의 친밀도가 높아질수록, 회원님께 더 상세한 미션 수행 및 일상 가이드를 제공해요!
      </>
    ),
    like: (
      <>
        금융업계에서 일했던 <b>제이크</b>는, 무엇보다 <b>약속</b>을 잘 지키는 것을 좋아해요!
      </>
    ),
    likes: ["매일매일 주어진 칼로리와 미션을 달성하기", "제이크가 보낸 미션을 바로바로 수행하기"],
    dislikes: ["바쁘다는 핑계로 접속하지 않기", "미션을 보고도 읽씹하기"],
  },
  {
    id: 2,
    type: "식단",
    icon: "utensils-alt",
    name: "존",
    mission: "섭취 칼로리와 영양소에 대해 알려줍니다.",
    position: "식단코치",
    profile: "/characters/images/PNG/Digital/he_texting_100w.png",
    full_image: "/characters/images/PNG/coachs/he_standing_with_notebook.png",
    animations: ["/characters/anims/texting.mp4", "/characters/anims/victory.mp4"],
    background_color: purple[700],
    desc: "실리콘밸리 출신 존은 컴퓨터공학과 영양학을 복수전공한 후 전문 스타트업에서 개발자로 일하다 식단코치로까지 일하는 엘리트 코치입니다.",
    promotion: "식단 때문에 고민이셨죠? 제가 해결해 드릴게요.",
    benefit: (
      <>
        <b>존</b>과의 친밀도가 높아질수록, 회원님이 좋아할만한 식단을 더 정확하게 추천해 드려요!
      </>
    ),
    like: (
      <>
        개발자 출신의 <b>제이미</b>는, <b>주어진 칼로리와 영양소</b>를 정확히 지키는 것을 좋아해요!
      </>
    ),
    likes: ["매일매일 섭취해야 하는 칼로리를 넘지 않기", "균형있게 영양소 섭취하기"],
    dislikes: ["한끼에 과도하게 폭식하기", "다이어트를 위해 무작정 굶기"],
  },
  {
    id: 3,
    type: "운동",
    icon: "dumbbell",
    name: "제이미",
    mission: "소비 칼로리와 운동 방법을 알려줍니다.",
    position: "운동코치",
    profile: "/characters/images/PNG/Sports/she_boxing_100w.png",
    full_image: "/characters/images/PNG/coachs/she_boxing.png",
    animations: ["/characters/anims/boxer.mp4", "/characters/anims/victory.mp4"],
    background_color: amber[700],
    desc: "필라델피아 출신 제이미는 16세부터 복싱장을 운영하며 다양한 운동을 섭렵해 왔으며 특히 요요 없는 다이어트를 할 수 있도록 도와줍니다.",
    promotion: "반가워요! 저와 함께 요요 없는 건강한 다이어트를 시작해 봐요!",
    benefit: (
      <>
        <b>제이미</b>와의 친밀도가 높아질수록, 더 쉽고 재미있는 운동 가이드와 커리큘럼이 제공되어요!
      </>
    ),
    like: (
      <>
        어릴적부터 활동적인 삶을 살아온 <b>제이미</b>는, <b>활기찬 행동</b>을 좋아해요!
      </>
    ),
    likes: ["하루 최소 걸어야 하는 양 채우기", "운동 미션 빼먹지 않고 달성하기"],
    dislikes: ["어떻게든 움직이지 않으려 하기", "오직 식단으로만 다이어트하려 하기"],
  },
  {
    id: 4,
    type: "습관",
    icon: "glass",
    name: "필리",
    mission: "써클러님의 일상을 변화시킵니다.",
    position: "습관코치",
    profile: "/characters/images/PNG/Skater/skater_3_100w.png",
    full_image: "/characters/images/PNG/coachs/skater_2.png",
    animations: ["/characters/anims/skating.mp4", "/characters/anims/victory.mp4"],
    background_color: indigo[700],
    desc: "마이애미 출신 필리는 한때 우울증을 겪으며 살다 멘토를 만난 후 수면, 정서관리 등 습관의 중요성을 깨닫고 습관 코치로 활동 중입니다.",
    promotion: "저와 함께라면 이제 우울한 하루는 없을 거에요!",
    benefit: (
      <>
        <b>필리</b>와의 친밀도가 높아질수록, 일상에서 습관을 지키고 건강해지는 꿀팁들을 더 많이 전수해줘요!
      </>
    ),
    like: (
      <>
        비규칙적인 생활로 우울증을 겪은 <b>필리</b>는, <b>규칙적이고 긍정적인 생활습관</b>을 좋아해요!
      </>
    ),
    likes: ["매일 같은 시간에 잠들고 충분히 수면하기", "잊지 않고 제때 물마시기", "긍정적인 마음가짐을 주변과 나누기"],
    dislikes: ["늦게 자고 늦게 일어나기", "다른 사람들에게 부정적인 감정 표출하기"],
  },
];

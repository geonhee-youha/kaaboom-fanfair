import { Avatar, Box, CircularProgress, Paper } from "@mui/material";
import { deepOrange, grey } from "@mui/material/colors";
import { UserProps } from "../../types/user";
import Visual from "./Visual";
type Props = {
  item: UserProps;
  size: number;
  inView?: boolean;
  onClick?: (e: any) => void;
};
export default function Profile({ item, size, inView, onClick }: Props) {
  return (
    <Paper elevation={0} sx={{ position: "relative", width: size, height: size, borderRadius: "50%" }} onClick={onClick} >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 2,
          borderRadius: "50%",
          border: `1px solid ${item.circlin ? deepOrange[500] : grey[500]}`,
          // border: `${item.circlin ? 2 : }px solid ${deepOrange[500]}`,
        }}
      />
      <Box
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: "50% !important",
          // border: `2px solid #ffffff`,
        }}
      >
        <Avatar
          sx={{
            width: "100%",
            height: "100%",
            "& *": {
              borderRadius: "50% !important",
              overflow: "hidden",
            },
            borderRadius: "50% !important",
            overflow: "hidden",
            // border: `2px solid #ffffff`,
          }}
        >
          {item.profile !== null && item.profile !== "" && item.profile !== "https://www.circlin.co.kr/SNS/assets/img/user-who.jpg" ? (
            <Visual src={item.profile} sx={{ display: inView === false ? "none" : "block" }} absolute/>
          ) : null}
        </Avatar>
      </Box>
    </Paper>
  );
}
Profile.defaultProps = {
  size: 44,
};

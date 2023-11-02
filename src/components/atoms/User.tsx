import { Box, ButtonBase, SxProps } from "@mui/material";
import { MouseEventHandler } from "react";
import Visual from "./Visual";
import youhaGrey from "../../constants/youhaGrey";
import { deepPurple, indigo, pink } from "@mui/material/colors";
import Icon from "./Icon";
import youhaInverseGrey from "../../constants/youhaInverseGrey";

export default function User({
  item,
  onClick,
  size = 40,
  sx,
}: {
  item: any;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
  size?: number;
  sx?: SxProps;
}) {
  return item.thumbnail ? (
    <Box
      onClick={onClick}
      sx={{
        position: "relative",
        width: size,
        height: size,
        borderRadius: "50%",
        overflow: "hidden",
        backgroundColor: `#17171c`,
        border: `1px solid ${youhaInverseGrey[100]}`,
        ...sx,
      }}
    >
      <Visual src={item.thumbnail} absolute />
    </Box>
  ) : (
    <Box
      sx={{
        width: size,
        height: size,
        borderRadius: "50%",
        overflow: "hidden",
        backgroundColor:
          item.gender === "M"
            ? indigo["A400"]
            : item.gender === "M"
            ? pink["A400"]
            : deepPurple["A400"],
        border: `1px solid ${youhaInverseGrey[100]}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...sx,
      }}
      onClick={onClick}
    >
      <Icon
        name="user"
        prefix="fas"
        color={youhaGrey[100]}
        size={(size / 5) * 3}
      />
    </Box>
  );
}

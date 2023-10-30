import { MouseEventHandler } from "react";
import { InputProps } from "../../types";
import youhaBlue from "../../constants/youhaBlue";
import { Box, ButtonBase, alpha } from "@mui/material";
import youhaGrey from "../../constants/youhaGrey";
import { theme } from "../../themes/theme";

export type FilterProps = {
  value: string;
  label: string;
};

export default function FilterItem({
  focused,
  shown,
  item,
  onClick,
}: {
  focused?: boolean;
  shown?: boolean;
  item: FilterProps;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}) {
  const borderColor = focused ? youhaBlue[500] : "transparent";
  const backgroundColor = focused ? alpha(youhaBlue[500], 0.4) : youhaGrey[700];
  return (
    <Box
      sx={{
        maxWidth: shown ? 120 : 0,
        opacity: shown ? 1 : 0,
        transition: "all 0.5s ease",
        overflow: "visible",
      }}
    >
      <Box
        sx={{
          p: theme.spacing(0, 0, 0, 1.5),
        }}
      >
        <ButtonBase
          onClick={onClick}
          sx={{
            border: `1px solid ${borderColor}`,
            backgroundColor: backgroundColor,
            borderRadius: 1,
            height: 32,
            p: theme.spacing(0, 1.5),
            alignItems: "center",
          }}
          disableRipple
        >
          {item.label}
        </ButtonBase>
      </Box>
    </Box>
  );
}

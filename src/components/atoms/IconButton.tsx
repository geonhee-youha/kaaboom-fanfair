import { ButtonBase } from "@mui/material";
import Icon, { IconProps } from "./Icon";
import { MouseEventHandler } from "react";

type IconButtonProps = {
  backgroundColor?: string;
  borderColor?: string;
  disableRipple?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
} & IconProps;

export default function IconButton({
  disableRipple = false,
  backgroundColor = "transparent",
  borderColor = "transparent",
  onClick,
  name = "circle",
  prefix = "fas",
  size = 20,
  color = "#ffffff",
  sx,
}: IconButtonProps) {
  return (
    <ButtonBase
      sx={{
        borderRadius: 1.5,
        width: 44,
        height: 44,
        justifyContent: "center",
        alignItems: "center",
        border: `1px solid ${borderColor}`,
        backgroundColor: backgroundColor,
        transition: "none",
        ...sx,
      }}
      disableRipple={disableRipple}
      onClick={onClick}
    >
      <Icon name={name} color={color} prefix={prefix} size={size} />
    </ButtonBase>
  );
}

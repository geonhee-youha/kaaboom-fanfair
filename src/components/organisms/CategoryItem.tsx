import { IconName } from "@fortawesome/fontawesome-svg-core";
import { Box, ButtonBase, Typography } from "@mui/material";
import Icon from "../atoms/Icon";
import { theme } from "../../themes/theme";

export type CategoryProps = {
  label: string;
  value: string;
  icon: IconName;
  color: string;
};

export default function CategoryItem({ item }: { item: CategoryProps }) {
  const grid = 4;
  return (
    <Box
      sx={{
        "@media(max-width: 280px)": {
          minWidth: `calc((280px - 48px - ${
            (grid - 1) * 8
          }px) / ${grid}) !important`,
        },
        minWidth: `calc((100vw - 48px - ${
          (grid - 1) * 8
        }px) / ${grid}) !important`,
        "@media(min-width: 444px)": {
          minWidth: `calc((444px - 48px - ${
            (grid - 1) * 8
          }px) / ${grid}) !important`,
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ButtonBase
        sx={{
          "@media(max-width: 280px)": {
            minWidth: `calc((280px - 48px - ${
              (grid - 1) * 8
            }px) / ${grid}) !important`,
          },
          minWidth: `calc((100vw - 48px - ${
            (grid - 1) * 8
          }px) / ${grid}) !important`,
          "@media(min-width: 444px)": {
            minWidth: `calc((444px - 48px - ${
              (grid - 1) * 8
            }px) / ${grid}) !important`,
          },
          borderRadius: 1.5,
          backgroundColor: `#17171c`,
          aspectRatio: `1`,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Icon name={item.icon} prefix="fad" color={item.color} size={28} />
      </ButtonBase>
      <Typography
        sx={{
          fontSize: 12,
          lineHeight: "16px",
          textAlign: "center",
          m: theme.spacing(1.5, 0, 0, 0),
          fontWeight: "500",
        }}
      >
        {item.label}
      </Typography>
    </Box>
  );
}

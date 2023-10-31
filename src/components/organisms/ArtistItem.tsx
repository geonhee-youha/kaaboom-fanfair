import { Box, ButtonBase, Typography } from "@mui/material";
import { theme } from "../../themes/theme";
import Visual from "../atoms/Visual";

export type ArtistProps = {
  id: string;
  name: string;
  thumbnail: string;
};

export default function ArtistItem({ item }: { item: ArtistProps }) {
  const grid = 3;
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
          width: "100%",
          borderRadius: "50%",
          backgroundColor: `#17171c`,
          aspectRatio: `1`,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Visual absolute src={item.thumbnail} />
      </ButtonBase>
      <Typography
        sx={{
          fontSize: 14,
          lineHeight: "20px",
          textAlign: "center",
          m: theme.spacing(1.5, 0, 0, 0),
          fontWeight: "500",
        }}
      >
        {item.name}
      </Typography>
    </Box>
  );
}

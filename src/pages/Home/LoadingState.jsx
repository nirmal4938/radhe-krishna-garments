import { useContext } from "react";

import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import StorefrontContext from "../../context/StorefrontContext";

export default function LoadingState() {
  const theme = useTheme();
  const {
    business,
    home,
    products,
    collections,
    offers,
    reviews,
    theme: currentTheme,
  } = useContext(StorefrontContext);

  const loadingConfig = theme.custom?.loading || {};

  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        px: 2,
      }}
    >
      <Stack spacing={2} alignItems="center" textAlign="center" maxWidth={420}>
        <CircularProgress
          color="primary"
          size={loadingConfig.indicatorSize || theme.spacing(7)}
          thickness={4}
        />
        <Typography variant="h5" fontWeight={800}>
          {currentTheme?.loading?.title ||
            `Loading ${business?.name || "Storefront"}`}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
          {home?.loading?.subtitle ||
            `Preparing ${products?.length || collections?.length || offers?.length || reviews?.length || "your"} storefront details.`}
        </Typography>
      </Stack>
    </Box>
  );
}

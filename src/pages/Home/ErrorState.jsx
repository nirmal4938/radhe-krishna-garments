import { useContext } from "react";

import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import { alpha, useTheme } from "@mui/material/styles";

import StorefrontContext from "../../context/StorefrontContext";

export default function ErrorState({ error, onRetry }) {
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

  const errorConfig = theme.custom?.error || {};

  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        bgcolor: "background.default",
        py: 6,
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={errorConfig.elevation || 6}
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: errorConfig.radius || 3,
            textAlign: "center",
            bgcolor: "background.paper",
          }}
        >
          <Stack spacing={3} alignItems="center">
            <Box
              sx={{
                width: theme.spacing(10),
                height: theme.spacing(10),
                display: "grid",
                placeItems: "center",
                borderRadius: "50%",
                bgcolor: alpha(theme.palette.error.main, 0.12),
                color: "error.main",
              }}
            >
              <ErrorOutlineRoundedIcon sx={{ fontSize: theme.spacing(5.25) }} />
            </Box>
            <Typography variant="h4" fontWeight={900}>
              {currentTheme?.error?.title ||
                `We couldn't load ${business?.name || "this storefront"}`}
            </Typography>
            <Typography variant="body1" color="text.secondary" maxWidth={430}>
              {error ||
                home?.error?.subtitle ||
                `Please retry while we reconnect ${products?.length || collections?.length || offers?.length || reviews?.length || "the"} storefront data.`}
            </Typography>
            <Button variant="contained" color="primary" size="large" onClick={onRetry}>
              Retry
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}

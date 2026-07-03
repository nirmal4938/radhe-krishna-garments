import { useContext } from "react";

import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import { alpha, useTheme } from "@mui/material/styles";

import StorefrontContext from "../../context/StorefrontContext";

export default function NewsletterSection() {
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

  const newsletterConfig = theme.custom?.newsletter || {};
  const runtimeNewsletter = currentTheme?.newsletter || {};
  const darkVariant =
    runtimeNewsletter.variant || newsletterConfig.variant || "dark";
  const isDark = darkVariant === "dark";

  return (
    <Box
      component="section"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.default" }}
    >
      <Container maxWidth="lg">
        <Paper
          elevation={newsletterConfig.elevation || 0}
          sx={{
            position: "relative",
            overflow: "hidden",
            p: { xs: 4, md: 8 },
            textAlign: "center",
            borderRadius: newsletterConfig.radius || 4,
            color: isDark ? "primary.contrastText" : "text.primary",
            bgcolor: isDark ? "primary.main" : "background.paper",
            border: 1,
            borderColor: "divider",
            background: isDark
              ? `linear-gradient(135deg, ${theme.palette.primary.main}, ${
                  theme.palette.primary.dark || theme.palette.primary.main
                })`
              : undefined,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background: `radial-gradient(circle at 90% 18%, ${alpha(
                theme.palette.secondary.main,
                0.32,
              )}, transparent 30%)`,
              pointerEvents: "none",
            }}
          />

          <Stack spacing={3} alignItems="center" sx={{ position: "relative" }}>
            <Box
              sx={{
                width: theme.spacing(7),
                height: theme.spacing(7),
                borderRadius: "50%",
                display: "grid",
                placeItems: "center",
                bgcolor: alpha(theme.palette.common.white, isDark ? 0.16 : 0.8),
                color: isDark ? "inherit" : "primary.main",
              }}
            >
              <MailOutlineRoundedIcon />
            </Box>

            <Typography variant="overline" fontWeight={800} sx={{ opacity: 0.8 }}>
              Stay Updated
            </Typography>
            <Typography variant="h2" fontWeight={900}>
              {home?.newsletter?.title || "Never miss a new arrival"}
            </Typography>
            <Typography
              variant="body1"
              sx={{ opacity: 0.86, maxWidth: 700, lineHeight: 1.8 }}
            >
              {home?.newsletter?.subtitle ||
                `Get launches, offers and collection notes from ${
                  business?.name || "our store"
                } across ${
                  products?.length || collections?.length || "new"
                } picks${
                  offers?.length || reviews?.length
                    ? `, including ${offers?.length || 0} offers and ${
                        reviews?.length || 0
                      } customer notes`
                    : ""
                }.`}
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ width: "100%", maxWidth: 680, pt: 1 }}
            >
              <TextField
                fullWidth
                placeholder="Enter your email"
                variant="outlined"
                InputProps={{
                  sx: {
                    bgcolor: "background.paper",
                    borderRadius: newsletterConfig.inputRadius || 2,
                  },
                }}
              />
              <Button
                variant={runtimeNewsletter.buttonVariant || "contained"}
                color="secondary"
                size="large"
                sx={{ minWidth: { sm: theme.spacing(20) } }}
              >
                Subscribe
              </Button>
            </Stack>
          </Stack>

        </Paper>
      </Container>
    </Box>
  );
}

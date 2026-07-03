import { useContext } from "react";

import { Box, Button, Container, Divider, Stack, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { useTheme } from "@mui/material/styles";

import StorefrontContext from "../../context/StorefrontContext";

export default function FooterCTA() {
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

  const footerConfig = theme.custom?.footerCta || {};
  const runtimeFooter = currentTheme?.footerCta || {};
  const storeName = business?.name || "SyncWare Store";

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 5, md: 7 },
        borderTop: 1,
        borderColor: "divider",
        bgcolor: "background.paper",
      }}
    >
      <Container maxWidth="xl">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", md: "center" }}
        >
          <Box>
            <Typography variant="h4" fontWeight={900}>
              {runtimeFooter.title || home?.footerCta?.title || storeName}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mt: 1.5, maxWidth: 620, lineHeight: 1.8 }}
            >
              {runtimeFooter.subtitle ||
                home?.footerCta?.subtitle ||
                `Explore ${products?.length || "premium"} products, ${
                  collections?.length || "curated"
                } collections and ${offers?.length || "exclusive"} storefront offers.`}
            </Typography>
          </Box>
          <Button
            variant={footerConfig.buttonVariant || "contained"}
            color="primary"
            size="large"
            endIcon={<ArrowForwardRoundedIcon />}
            sx={{ whiteSpace: "nowrap" }}
          >
            Start Shopping
          </Button>
        </Stack>
        <Divider sx={{ my: 4 }} />
        <Typography variant="body2" color="text.secondary">
          {reviews?.length || 0} customer stories help shape this storefront.
        </Typography>
      </Container>
    </Box>
  );
}

import { useContext } from "react";

import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { alpha, useTheme } from "@mui/material/styles";

import StorefrontContext from "../../context/StorefrontContext";

export default function OffersSection() {
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

  const offersConfig = theme.custom?.offers || {};
  const runtimeOffers = currentTheme?.offers || {};
  const items = offers || [];

  if (!items.length && runtimeOffers.hideWhenEmpty !== false) {
    return null;
  }

  const displayOffers = items.length
    ? items
    : [
        {
          id: "preview-offer",
          title: "A special edit is coming soon",
          description: `Watch this space for limited-time offers from ${
            business?.name || "our store"
          }.`,
        },
      ];

  return (
    <Box
      component="section"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.default" }}
    >
      <Container maxWidth="xl">
        <Stack spacing={2} alignItems="center" textAlign="center" mb={6}>
          <Typography variant="overline" color="primary" fontWeight={800}>
            Offers
          </Typography>
          <Typography variant="h2" fontWeight={800}>
            {home?.offers?.title || "Deals worth pausing for"}
          </Typography>
          <Typography variant="body1" color="text.secondary" maxWidth={680}>
            {home?.offers?.subtitle ||
              `Limited-time promotions across ${
                products?.length || collections?.length || "selected"
              } storefront favorites${
                reviews?.length ? `, backed by ${reviews.length} reviews` : ""
              }.`}
          </Typography>
        </Stack>

        <Grid container spacing={{ xs: 2, md: 3 }}>
          {displayOffers.map((offer, index) => {
            const useSecondary = index % 2 === 1;
            const start = useSecondary
              ? theme.palette.secondary.main
              : theme.palette.primary.main;
            const end = useSecondary
              ? theme.palette.primary.dark || theme.palette.primary.main
              : theme.palette.secondary.main;

            return (
              <Grid item xs={12} md={6} key={offer.id || offer.title}>
                <Card
                  elevation={offersConfig.cardElevation || 0}
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    minHeight: theme.spacing(38),
                    borderRadius: offersConfig.cardRadius || 4,
                    color: "primary.contrastText",
                    background:
                      offersConfig.variant === "solid"
                        ? start
                        : `linear-gradient(135deg, ${start}, ${end})`,
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background: `radial-gradient(circle at 84% 12%, ${alpha(
                        theme.palette.common.white,
                        0.24,
                      )}, transparent 28%)`,
                    }}
                  />
                  <CardContent sx={{ position: "relative", p: { xs: 4, md: 5 } }}>
                    <Stack spacing={3} alignItems="flex-start">
                      <Box
                        sx={{
                          width: theme.spacing(7),
                          height: theme.spacing(7),
                          borderRadius: "50%",
                          display: "grid",
                          placeItems: "center",
                          bgcolor: alpha(theme.palette.common.white, 0.18),
                        }}
                      >
                        <LocalOfferRoundedIcon />
                      </Box>

                      <Chip
                        label={offer.couponCode || "Exclusive"}
                        sx={{
                          color: "inherit",
                          borderColor: alpha(theme.palette.common.white, 0.36),
                        }}
                        variant="outlined"
                      />

                      <Box>
                        <Typography variant="h3" fontWeight={900}>
                          {offer.title}
                        </Typography>
                        <Typography sx={{ mt: 2, maxWidth: 520, opacity: 0.86 }}>
                          {offer.description ||
                            "A premium promotion crafted for this storefront."}
                        </Typography>
                      </Box>

                      <Button
                        variant={runtimeOffers.buttonVariant || "contained"}
                        color="secondary"
                        endIcon={<ArrowForwardRoundedIcon />}
                      >
                        Shop Offer
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>

      </Container>
    </Box>
  );
}

import { useContext } from "react";

import {
  Avatar,
  Box,
  Container,
  Grid,
  Paper,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import { alpha, useTheme } from "@mui/material/styles";

import StorefrontContext from "../../context/StorefrontContext";

export default function ReviewsSection() {
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

  const reviewsConfig = theme.custom?.reviews || {};
  const runtimeReviews = currentTheme?.reviews || {};
  const items = reviews || [];
  const averageRating =
    items.length > 0
      ? items.reduce((total, review) => total + (review.rating || 5), 0) /
        items.length
      : 5;

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: alpha(theme.palette.primary.main, 0.035),
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={2} alignItems="center" textAlign="center" mb={6}>
          <Typography variant="overline" color="primary" fontWeight={800}>
            Testimonials
          </Typography>
          <Typography variant="h2" fontWeight={800}>
            {home?.reviews?.title || "Loved by customers"}
          </Typography>
          <Typography variant="body1" color="text.secondary" maxWidth={680}>
            {home?.reviews?.subtitle ||
              `Real feedback from shoppers exploring ${
                business?.name || "our store"
              } across ${
                products?.length || collections?.length || "curated"
              } products${offers?.length ? ` and ${offers.length} offers` : ""}.`}
          </Typography>
        </Stack>

        {!items.length ? (
          <Paper
            elevation={0}
            sx={{
              py: 9,
              textAlign: "center",
              border: 1,
              borderStyle: "dashed",
              borderColor: "divider",
              borderRadius: reviewsConfig.emptyRadius || 3,
              bgcolor: "background.paper",
            }}
          >
            <Typography variant="h6" color="text.secondary">
              Customer stories will appear here soon.
            </Typography>
          </Paper>
        ) : (
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {items.map((review) => (
              <Grid
                item
                xs={12}
                md={6}
                lg={4}
                key={review.id || review.customerName}
              >
                <Paper
                  elevation={reviewsConfig.cardElevation || 2}
                  sx={{
                    height: "100%",
                    p: { xs: 3, md: 4 },
                    borderRadius: reviewsConfig.cardRadius || 3,
                    border: 1,
                    borderColor: "divider",
                    bgcolor: "background.paper",
                    transition: theme.transitions.create(
                      ["transform", "box-shadow", "border-color"],
                      { duration: theme.transitions.duration.short },
                    ),
                    "&:hover": {
                      transform: "translateY(-6px)",
                      borderColor: alpha(theme.palette.primary.main, 0.24),
                      boxShadow: theme.shadows[reviewsConfig.hoverShadow || 8],
                    },
                  }}
                >
                  <Stack spacing={3} height="100%">
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      spacing={2}
                    >
                      <Rating
                        value={review.rating || averageRating}
                        precision={0.5}
                        readOnly
                      />
                      <FormatQuoteRoundedIcon
                        sx={{ color: alpha(theme.palette.primary.main, 0.18) }}
                        fontSize="large"
                      />
                    </Stack>

                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ flexGrow: 1, lineHeight: 1.85 }}
                    >
                      {review.review ||
                        "A thoughtful shopping experience from discovery to delivery."}
                    </Typography>

                    <Stack direction="row" spacing={2} alignItems="center">
                      <Avatar
                        src={review.avatar || review.customerImage}
                        sx={{
                          width: theme.spacing(6.5),
                          height: theme.spacing(6.5),
                          bgcolor: "primary.main",
                          color: "primary.contrastText",
                          fontWeight: 800,
                        }}
                      >
                        {review.customerName?.charAt(0)?.toUpperCase() || "C"}
                      </Avatar>
                      <Box>
                        <Typography variant="subtitle1" fontWeight={800}>
                          {review.customerName || "Verified Customer"}
                        </Typography>
                        <Typography variant="body2" color="success.main">
                          {runtimeReviews.badge || "Verified purchase"}
                        </Typography>
                      </Box>
                    </Stack>
                  </Stack>
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}

      </Container>
    </Box>
  );
}

import { useContext } from "react";

import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { alpha, useTheme } from "@mui/material/styles";

import StorefrontContext from "../../context/StorefrontContext";

const fallbackImage =
  "https://images.unsplash.com/photo-1481437156560-3205f6a55735?w=900&q=80";

export default function CollectionsSection() {
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

  const collectionsConfig = theme.custom?.collections || {};
  const runtimeCollections = currentTheme?.collections || {};
  const items = collections || [];
  const featuredProductCount = products?.length || 0;
  const offerCount = offers?.length || 0;
  const reviewCount = reviews?.length || 0;

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="xl">
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", md: "flex-end" }}
          spacing={3}
          mb={6}
        >
          <Box>
            <Typography variant="overline" color="primary" fontWeight={800}>
              Collections
            </Typography>
            <Typography variant="h2" fontWeight={800} sx={{ mt: 1 }}>
              {home?.collections?.title || "Shop by collection"}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mt: 2, maxWidth: 680 }}
            >
              {home?.collections?.subtitle ||
                `Curated edits from ${
                  business?.name || "our store"
                }, shaped around what customers love most.`}
            </Typography>
          </Box>
          <Button
            variant="outlined"
            size="large"
            endIcon={<ArrowForwardRoundedIcon />}
          >
            View All
          </Button>
        </Stack>

        {!items.length ? (
          <Box
            sx={{
              py: 9,
              border: 1,
              borderStyle: "dashed",
              borderColor: "divider",
              borderRadius: collectionsConfig.emptyRadius || 3,
              textAlign: "center",
              bgcolor: alpha(theme.palette.primary.main, 0.03),
            }}
          >
            <Typography variant="h6" color="text.secondary">
              Collections are being curated.
            </Typography>
          </Box>
        ) : (
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {items.map((collection, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                lg={3}
                key={collection.id || collection.name}
              >
                <Card
                  elevation={collectionsConfig.cardElevation || 0}
                  sx={{
                    height: "100%",
                    overflow: "hidden",
                    border: 1,
                    borderColor: "divider",
                    borderRadius: collectionsConfig.cardRadius || 3,
                    bgcolor: "background.paper",
                    transition: theme.transitions.create(
                      ["transform", "box-shadow", "border-color"],
                      { duration: theme.transitions.duration.short },
                    ),
                    "&:hover": {
                      transform: "translateY(-8px)",
                      borderColor: alpha(theme.palette.primary.main, 0.24),
                      boxShadow:
                        theme.shadows[collectionsConfig.hoverShadow || 10],
                    },
                    "&:hover img": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <CardActionArea>
                    <Box sx={{ position: "relative", overflow: "hidden" }}>
                      <CardMedia
                        component="img"
                        image={collection.image || fallbackImage}
                        alt={collection.name}
                        sx={{
                          height: {
                            xs: 300,
                            md:
                              index === 0 && runtimeCollections.featureFirst
                                ? 420
                                : 340,
                          },
                          objectFit: "cover",
                          transition: theme.transitions.create("transform", {
                            duration: theme.transitions.duration.standard,
                          }),
                        }}
                      />
                      <Chip
                        label={
                          collection.productCount
                            ? `${collection.productCount} items`
                            : `${featuredProductCount || offerCount || reviewCount || "New"} picks`
                        }
                        size="small"
                        color="primary"
                        sx={{ position: "absolute", left: 16, top: 16 }}
                      />
                    </Box>
                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h6" fontWeight={800} gutterBottom>
                        {collection.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          minHeight: theme.spacing(5.5),
                          display: "-webkit-box",
                          overflow: "hidden",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {collection.description ||
                          "A focused selection designed for effortless discovery."}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions sx={{ px: 3, pb: 3, pt: 0 }}>
                    <Button fullWidth variant="outlined">
                      Explore Collection
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
}

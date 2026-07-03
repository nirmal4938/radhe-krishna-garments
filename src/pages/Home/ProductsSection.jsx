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
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { alpha, useTheme } from "@mui/material/styles";

import StorefrontContext from "../../context/StorefrontContext";

const fallbackImage =
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&q=80";

const formatPrice = (value, currency = "₹") => {
  if (value === undefined || value === null || value === "") {
    return "";
  }

  return `${currency}${Number(value).toLocaleString("en-IN")}`;
};

export default function ProductsSection() {
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

  const productsConfig = theme.custom?.products || {};
  const runtimeProducts = currentTheme?.products || {};
  const items = products || [];
  const currency = business?.currencySymbol || business?.currency || "₹";
  const showWishlist =
    runtimeProducts.showWishlist ?? productsConfig.showWishlist ?? true;
  const activeOfferCount = offers?.length || 0;
  const averageRating =
    reviews?.length > 0
      ? reviews.reduce((total, review) => total + (review.rating || 5), 0) /
        reviews.length
      : 4.8;

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: alpha(theme.palette.primary.main, 0.035),
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
              Featured Products
            </Typography>
            <Typography variant="h2" fontWeight={800} sx={{ mt: 1 }}>
              {home?.products?.title || "Best sellers"}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mt: 2, maxWidth: 680 }}
            >
              {home?.products?.subtitle ||
                `Customer-loved products from ${
                  collections?.length || "our"
                } curated collections${
                  activeOfferCount ? ` with ${activeOfferCount} active offers` : ""
                }.`}
            </Typography>
          </Box>
          <Button variant="outlined" size="large">
            Browse All
          </Button>
        </Stack>

        {!items.length ? (
          <Box
            sx={{
              py: 9,
              textAlign: "center",
              border: 1,
              borderStyle: "dashed",
              borderColor: "divider",
              borderRadius: productsConfig.emptyRadius || 3,
              bgcolor: "background.paper",
            }}
          >
            <Typography variant="h6" color="text.secondary">
              Featured products will appear here soon.
            </Typography>
          </Box>
        ) : (
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {items.map((product) => {
              const price = Number(product.price || 0);
              const originalPrice = Number(
                product.originalPrice ||
                  product.mrp ||
                  product.compareAtPrice ||
                  0,
              );
              const discount =
                originalPrice > price && price > 0
                  ? Math.round(((originalPrice - price) / originalPrice) * 100)
                  : 0;
              const productRating = product.rating || averageRating;

              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  lg={3}
                  key={product.id || product.name}
                >
                  <Card
                    elevation={productsConfig.cardElevation || 0}
                    sx={{
                      height: "100%",
                      overflow: "hidden",
                      border: 1,
                      borderColor: "divider",
                      borderRadius: productsConfig.cardRadius || 3,
                      bgcolor: "background.paper",
                      transition: theme.transitions.create(
                        ["transform", "box-shadow", "border-color"],
                        { duration: theme.transitions.duration.short },
                      ),
                      "&:hover": {
                        transform: "translateY(-8px)",
                        borderColor: alpha(theme.palette.primary.main, 0.24),
                        boxShadow: theme.shadows[productsConfig.hoverShadow || 10],
                      },
                      "&:hover img": {
                        transform: "scale(1.06)",
                      },
                    }}
                  >
                    <CardActionArea>
                      <Box
                        sx={{
                          position: "relative",
                          overflow: "hidden",
                          bgcolor: alpha(theme.palette.primary.main, 0.04),
                        }}
                      >
                        <CardMedia
                          component="img"
                          image={product.image || fallbackImage}
                          alt={product.name}
                          sx={{
                            height: { xs: 320, md: 340 },
                            objectFit: "cover",
                            transition: theme.transitions.create("transform", {
                              duration: theme.transitions.duration.standard,
                            }),
                          }}
                        />

                        {discount > 0 && (
                          <Chip
                            label={`${discount}% OFF`}
                            color="error"
                            size="small"
                            sx={{
                              position: "absolute",
                              top: 16,
                              left: 16,
                              fontWeight: 800,
                            }}
                          />
                        )}

                        {showWishlist && (
                          <IconButton
                            aria-label={`Add ${product.name} to wishlist`}
                            sx={{
                              position: "absolute",
                              top: 12,
                              right: 12,
                              bgcolor: alpha(theme.palette.background.paper, 0.88),
                              backdropFilter: "blur(10px)",
                              "&:hover": { bgcolor: "background.paper" },
                            }}
                          >
                            <FavoriteBorderRoundedIcon />
                          </IconButton>
                        )}
                      </Box>

                      <CardContent sx={{ p: 3 }}>
                        <Typography
                          variant="h6"
                          fontWeight={800}
                          sx={{
                            minHeight: theme.spacing(7),
                            display: "-webkit-box",
                            overflow: "hidden",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                          }}
                        >
                          {product.name}
                        </Typography>

                        <Stack
                          direction="row"
                          spacing={1}
                          alignItems="baseline"
                          mt={1.5}
                        >
                          <Typography
                            variant="h6"
                            color="primary"
                            fontWeight={900}
                          >
                            {formatPrice(price, currency)}
                          </Typography>
                          {originalPrice > price && (
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              sx={{ textDecoration: "line-through" }}
                            >
                              {formatPrice(originalPrice, currency)}
                            </Typography>
                          )}
                        </Stack>

                        <Stack
                          direction="row"
                          spacing={1}
                          alignItems="center"
                          mt={1.5}
                        >
                          <Rating
                            value={productRating}
                            precision={0.5}
                            readOnly
                            size="small"
                          />
                          <Typography variant="body2" color="text.secondary">
                            ({productRating.toFixed(1)})
                          </Typography>
                        </Stack>
                      </CardContent>
                    </CardActionArea>

                    <CardActions sx={{ px: 3, pb: 3, pt: 0 }}>
                      <Button
                        fullWidth
                        variant={runtimeProducts.buttonVariant || "contained"}
                        startIcon={<AddShoppingCartRoundedIcon />}
                      >
                        Add to Cart
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        )}

      </Container>
    </Box>
  );
}

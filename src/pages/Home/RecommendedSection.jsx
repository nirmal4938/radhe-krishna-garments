// src/components/Home/RecommendedSection.jsx

import { useContext } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";

import StorefrontContext from "../../context/StorefrontContext";

export const RecommendedSection = () => {
  const theme = useTheme();

  const { products = [] } = useContext(StorefrontContext);

  const productTheme = theme.custom?.products ?? {};

  const displayProducts =
    products.length > 0
      ? products.slice(0, 4)
      : Array.from({ length: 4 }, (_, index) => ({
          _id: `placeholder-${index}`,
          name: "Coming Soon",
          image: null,
          price: "",
          isPlaceholder: true,
        }));

  return (
    <Box
      sx={{
        py: { xs: 5, md: 8 },
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          {displayProducts.map((product) => (
            <Grid
              key={product._id}
              size={{
                xs: 12,
                sm: 6,
                md: 4,
                lg: 3,
              }}
            >
              <Card
                elevation={productTheme.cardElevation ?? 0}
                sx={{
                  height: "100%",
                  overflow: "hidden",
                  borderRadius:
                    productTheme.cardRadius ?? theme.shape.borderRadius,
                  border: 1,
                  borderColor: "divider",
                  transition: theme.transitions.create(
                    ["transform", "box-shadow"],
                    {
                      duration: theme.transitions.duration.short,
                    },
                  ),

                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: productTheme.hoverShadow ?? 8,
                  },

                  "&:hover .product-image": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                {product.image ? (
                  <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.name}
                    className="product-image"
                    sx={{
                      height: 260,
                      objectFit: "cover",
                      transition: theme.transitions.create("transform", {
                        duration: 500,
                      }),
                    }}
                  />
                ) : (
                  <Box
                    className="product-image"
                    sx={{
                      height: 260,
                      bgcolor: "grey.100",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: theme.transitions.create("transform", {
                        duration: 500,
                      }),
                    }}
                  >
                    <ImageOutlinedIcon
                      sx={{
                        fontSize: 80,
                        color: "text.disabled",
                      }}
                    />
                  </Box>
                )}

                <CardContent>
                  <Typography variant="subtitle1" fontWeight={600} noWrap>
                    {product.name}
                  </Typography>

                  <Typography
                    variant="h6"
                    color="primary.main"
                    sx={{
                      mt: 1,
                      mb: 2,
                    }}
                  >
                    {product.price ? `₹${product.price}` : "--"}
                  </Typography>

                  <Button
                    fullWidth
                    variant="contained"
                    disabled={product.isPlaceholder}
                  >
                    {product.isPlaceholder ? "Coming Soon" : "Buy Now"}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

// src/pages/Home/HeroSection.jsx

import { useContext, useMemo } from "react";

import {
  Avatar,
  Box,
  Button,
  Chip,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";

import { alpha, useTheme } from "@mui/material/styles";

import StorefrontContext from "../../context/StorefrontContext";

/* ==========================================================
   Default Hero Images
========================================================== */

const HERO_IMAGES = {
  mobile:
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1800&q=90",

  fashion:
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1800&q=90",

  restaurant:
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1800&q=90",

  pharmacy:
    "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1800&q=90",

  furniture:
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1800&q=90",

  jewellery:
    "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1800&q=90",

  luxury:
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1800&q=90",

  default:
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1800&q=90",
};

/* ==========================================================
   Hero Section
========================================================== */

export default function HeroSection() {
  const theme = useTheme();

  const {
    business,
    home,
    products,
    collections,
    offers,
    reviews,
    theme: storefrontTheme,
  } = useContext(StorefrontContext);

  /* ==========================================================
     Theme Configuration
  ========================================================== */

  const heroTheme = theme.custom?.hero || {};

  const runtimeHero = storefrontTheme?.hero || {};

  const category = business?.category?.key || theme.name || "default";

  /* ==========================================================
     Hero Content
  ========================================================== */

  const hero = home?.hero || {};

  const title = hero.title || `Discover ${business?.name || "Our Store"}`;

  const subtitle =
    hero.subtitle ||
    business?.description ||
    "Premium products, curated collections and a beautiful shopping experience.";

  const image = hero.image || HERO_IMAGES[category] || HERO_IMAGES.default;

  const logo = business?.logoUrl || business?.logo || undefined;

  const featuredOffer = offers?.[0];

  /* ==========================================================
     Average Rating
  ========================================================== */

  const rating = useMemo(() => {
    if (!reviews?.length) return 4.9;

    return (
      reviews.reduce((sum, review) => sum + (review.rating || 5), 0) /
      reviews.length
    );
  }, [reviews]);

  /* ==========================================================
     Statistics
  ========================================================== */

  const stats = useMemo(
    () => [
      {
        icon: <TrendingUpRoundedIcon fontSize="small" />,
        label: "Products",
        value: products?.length || 120,
      },
      {
        icon: <LocalOfferRoundedIcon fontSize="small" />,
        label: "Collections",
        value: collections?.length || 24,
      },
      {
        icon: <StarRoundedIcon fontSize="small" />,
        label: "Rating",
        value: rating.toFixed(1),
      },
    ],
    [products, collections, rating],
  );

  /* ==========================================================
     Hero Options
  ========================================================== */

  const layout = runtimeHero.layout || heroTheme.layout || "split";

  const reverse = layout === "image-left";

  const showStats = runtimeHero.showStats ?? heroTheme.showStats ?? true;

  const showVerifiedCard =
    runtimeHero.showVerifiedCard ?? heroTheme.showVerifiedCard ?? true;

  const showOfferCard =
    runtimeHero.showOfferCard ?? heroTheme.showOfferCard ?? true;

  /* ==========================================================
     Render
  ========================================================== */

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        bgcolor: "background.default",
      }}
    >
      {/* Background gradients */}
      {/* Part 2 */}

      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",

            gridTemplateColumns: {
              xs: "1fr",
              lg: "1fr 1fr",
            },

            alignItems: "center",

            gap: {
              xs: 8,
              lg: 10,
            },

            minHeight: {
              md: "92vh",
            },

            py: {
              xs: 8,
              md: 12,
            },
          }}
        >
          <Stack
            spacing={4}
            sx={{
              position: "relative",
              zIndex: 2,

              order: {
                xs: 1,
                lg: reverse ? 2 : 1,
              },
            }}
          >
            {/* Premium Store Badge */}

            <Chip
              avatar={
                <Avatar src={logo}>{!logo && business?.name?.charAt(0)}</Avatar>
              }
              icon={!logo ? <AutoAwesomeRoundedIcon /> : undefined}
              label={business?.name || "SyncWare Store"}
              variant="outlined"
              sx={{
                alignSelf: "flex-start",

                px: 1.5,

                py: 3,

                fontWeight: 700,

                borderRadius: 999,

                bgcolor: alpha(theme.palette.background.paper, 0.75),

                backdropFilter: "blur(18px)",

                borderColor: alpha(theme.palette.primary.main, 0.18),

                boxShadow: `0 12px 32px ${alpha(
                  theme.palette.primary.main,
                  0.12,
                )}`,
              }}
            />

            {/* Heading */}

            <Typography
              variant="h1"
              sx={{
                maxWidth: 760,

                fontWeight: 900,

                lineHeight: 0.92,

                letterSpacing: "-0.05em",

                color: "text.primary",

                fontSize: {
                  xs: "3rem",
                  sm: "4rem",
                  md: "5rem",
                  lg: "6rem",
                },
              }}
            >
              {title}
            </Typography>

            {/* Subtitle */}

            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                maxWidth: 640,

                lineHeight: 1.9,

                fontWeight: 400,
              }}
            >
              {subtitle}
            </Typography>

            {/* CTA */}

            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}
              spacing={2}
              sx={{
                pt: 1,
              }}
            >
              <Button
                size="large"
                endIcon={<ArrowForwardRoundedIcon />}
                variant={heroTheme.primaryButtonVariant || "contained"}
                sx={{
                  px: 5,
                  py: 1.8,

                  fontWeight: 700,

                  borderRadius: 999,

                  boxShadow: `0 16px 36px ${alpha(
                    theme.palette.primary.main,
                    0.35,
                  )}`,

                  "&:hover": {
                    transform: "translateY(-2px)",

                    boxShadow: `0 22px 46px ${alpha(
                      theme.palette.primary.main,
                      0.45,
                    )}`,
                  },

                  transition: "all .25s ease",
                }}
              >
                Shop Now
              </Button>

              <Button
                size="large"
                variant={heroTheme.secondaryButtonVariant || "outlined"}
                sx={{
                  px: 5,

                  py: 1.8,

                  fontWeight: 700,

                  borderRadius: 999,

                  bgcolor: alpha(theme.palette.background.paper, 0.45),

                  backdropFilter: "blur(12px)",

                  "&:hover": {
                    bgcolor: alpha(theme.palette.background.paper, 0.75),
                  },
                }}
              >
                Explore Collections
              </Button>
            </Stack>

            {/* Social Proof */}

            <Stack
              direction="row"
              spacing={3}
              alignItems="center"
              flexWrap="wrap"
              sx={{
                pt: 1,
              }}
            >
              <Stack direction="row" spacing={-1}>
                {[1, 2, 3, 4].map((item) => (
                  <Avatar
                    key={item}
                    sx={{
                      width: 42,
                      height: 42,

                      border: "3px solid",

                      borderColor: "background.paper",

                      bgcolor: "primary.main",

                      fontWeight: 700,
                    }}
                  >
                    {item}
                  </Avatar>
                ))}
              </Stack>

              <Box>
                <Stack direction="row" spacing={0.5} alignItems="center">
                  <StarRoundedIcon
                    sx={{
                      color: "#FFC107",
                    }}
                  />

                  <Typography variant="subtitle1" fontWeight={800}>
                    {rating.toFixed(1)}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    ({reviews?.length || 2500}+ Reviews)
                  </Typography>
                </Stack>

                <Typography variant="body2" color="text.secondary">
                  Trusted by thousands of happy customers.
                </Typography>
              </Box>
            </Stack>

            {/* Stats */}

            {showStats && (
              <Stack
                direction={{
                  xs: "column",
                  sm: "row",
                }}
                spacing={3}
                sx={{
                  pt: 2,
                }}
              >
                {stats.map((item) => (
                  <Paper
                    key={item.label}
                    elevation={0}
                    sx={{
                      flex: 1,

                      p: 3,

                      borderRadius: 4,

                      bgcolor: alpha(theme.palette.background.paper, 0.72),

                      backdropFilter: "blur(18px)",

                      border: `1px solid ${alpha(
                        theme.palette.primary.main,
                        0.08,
                      )}`,

                      transition: ".25s",

                      "&:hover": {
                        transform: "translateY(-6px)",

                        boxShadow: `0 18px 40px ${alpha(
                          theme.palette.primary.main,
                          0.15,
                        )}`,
                      },
                    }}
                  >
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Avatar
                        sx={{
                          bgcolor: alpha(theme.palette.primary.main, 0.12),

                          color: "primary.main",
                        }}
                      >
                        {item.icon}
                      </Avatar>

                      <Box>
                        <Typography variant="h5" fontWeight={900}>
                          {item.value}
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                          {item.label}
                        </Typography>
                      </Box>
                    </Stack>
                  </Paper>
                ))}
              </Stack>
            )}

            {/* Trust Line */}

            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{
                pt: 1,
              }}
            >
              <VerifiedRoundedIcon color="success" fontSize="small" />

              <Typography variant="body2" color="text.secondary">
                Secure payments • Fast delivery • Verified storefront
              </Typography>
            </Stack>
          </Stack>

          <Stack
            spacing={4}
            sx={{
              order: {
                xs: 1,
                lg: reverse ? 2 : 1,
              },
            }}
          ></Stack>

          <Box
            sx={{
              position: "relative",

              minHeight: {
                xs: 520,
                md: 760,
              },

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              order: {
                xs: 2,
                lg: reverse ? 1 : 2,
              },
            }}
          >
            {/* Background Glow */}

            <Box
              sx={{
                position: "absolute",

                width: {
                  xs: 340,
                  md: 560,
                },

                height: {
                  xs: 340,
                  md: 560,
                },

                borderRadius: "50%",

                background: `radial-gradient(circle,
        ${alpha(theme.palette.primary.main, 0.28)} 0%,
        transparent 72%)`,

                filter: "blur(70px)",

                animation: "pulse 8s ease-in-out infinite",

                "@keyframes pulse": {
                  "0%": {
                    transform: "scale(.92)",
                    opacity: 0.55,
                  },
                  "50%": {
                    transform: "scale(1.05)",
                    opacity: 1,
                  },
                  "100%": {
                    transform: "scale(.92)",
                    opacity: 0.55,
                  },
                },
              }}
            />

            {/* Decorative Ring */}

            <Box
              sx={{
                position: "absolute",

                width: {
                  xs: 320,
                  md: 520,
                },

                height: {
                  xs: 320,
                  md: 520,
                },

                borderRadius: "50%",

                border: `1px solid ${alpha(theme.palette.primary.main, 0.08)}`,
              }}
            />

            {/* Main Image */}

            <Paper
              elevation={0}
              sx={{
                position: "relative",

                overflow: "hidden",

                width: {
                  xs: "100%",
                  md: 520,
                },

                height: {
                  xs: 460,
                  md: 680,
                },

                borderRadius: heroTheme.imageRadius || 8,

                bgcolor: "background.paper",

                border: `1px solid ${alpha(theme.palette.primary.main, 0.08)}`,

                boxShadow: `
        0 40px 80px ${alpha(theme.palette.common.black, 0.16)},
        0 8px 24px ${alpha(theme.palette.primary.main, 0.12)}`,

                transition: ".45s",

                "&:hover": {
                  transform: "translateY(-10px) scale(1.02)",
                },
              }}
            >
              {/* Gradient */}

              <Box
                sx={{
                  position: "absolute",
                  inset: 0,

                  background: `linear-gradient(
          180deg,
          transparent,
          transparent,
          ${alpha(theme.palette.common.black, 0.22)}
        )`,

                  zIndex: 2,
                }}
              />

              <Box
                component="img"
                src={image}
                alt={title}
                sx={{
                  width: "100%",
                  height: "100%",

                  objectFit: "cover",

                  transition: "1.2s",

                  "&:hover": {
                    transform: "scale(1.06)",
                  },
                }}
              />
            </Paper>

            {/* VERIFIED */}

            {showVerifiedCard && (
              <Paper
                elevation={0}
                sx={{
                  position: "absolute",

                  left: {
                    xs: 12,
                    md: -20,
                  },

                  top: {
                    xs: 18,
                    md: 70,
                  },

                  px: 2.5,
                  py: 2,

                  borderRadius: 4,

                  backdropFilter: "blur(24px)",

                  bgcolor: alpha(theme.palette.background.paper, 0.78),

                  border: `1px solid ${alpha(
                    theme.palette.primary.main,
                    0.08,
                  )}`,

                  boxShadow: `0 18px 45px ${alpha(
                    theme.palette.common.black,
                    0.12,
                  )}`,
                }}
              >
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Avatar
                    sx={{
                      bgcolor: "success.main",
                      width: 42,
                      height: 42,
                    }}
                  >
                    <VerifiedRoundedIcon />
                  </Avatar>

                  <Box>
                    <Typography variant="caption" color="text.secondary">
                      Verified Store
                    </Typography>

                    <Typography variant="subtitle2" fontWeight={800}>
                      Secure Checkout
                    </Typography>
                  </Box>
                </Stack>
              </Paper>
            )}

            {/* OFFER */}

            {showOfferCard && (
              <Paper
                elevation={0}
                sx={{
                  position: "absolute",

                  right: {
                    xs: 12,
                    md: -10,
                  },

                  bottom: {
                    xs: 22,
                    md: 75,
                  },

                  width: 270,

                  p: 3,

                  borderRadius: 5,

                  color: "primary.contrastText",

                  background: `linear-gradient(
          135deg,
          ${theme.palette.primary.main},
          ${theme.palette.secondary.main}
        )`,

                  boxShadow: `0 25px 60px ${alpha(
                    theme.palette.primary.main,
                    0.4,
                  )}`,
                }}
              >
                <Stack direction="row" spacing={1} alignItems="center">
                  <LocalOfferRoundedIcon />

                  <Typography variant="subtitle2" sx={{ opacity: 0.92 }}>
                    Exclusive Deal
                  </Typography>
                </Stack>

                <Typography
                  variant="h5"
                  fontWeight={900}
                  sx={{
                    mt: 2,
                  }}
                >
                  {featuredOffer?.title || "Up to 40% OFF"}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    mt: 1,
                    opacity: 0.88,
                  }}
                >
                  {featuredOffer?.couponCode
                    ? `Use ${featuredOffer.couponCode}`
                    : "Limited-time premium offers."}
                </Typography>
              </Paper>
            )}

            {/* RATING */}

            <Paper
              elevation={0}
              sx={{
                position: "absolute",

                left: {
                  xs: 16,
                  md: 40,
                },

                bottom: {
                  xs: 130,
                  md: 140,
                },

                px: 2.5,
                py: 2,

                borderRadius: 4,

                bgcolor: alpha(theme.palette.background.paper, 0.82),

                backdropFilter: "blur(24px)",

                border: `1px solid ${alpha(theme.palette.primary.main, 0.08)}`,

                boxShadow: `0 18px 40px ${alpha(
                  theme.palette.common.black,
                  0.12,
                )}`,
              }}
            >
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Avatar
                  sx={{
                    bgcolor: "#FFF8E1",
                    color: "#F9A825",
                  }}
                >
                  <StarRoundedIcon />
                </Avatar>

                <Box>
                  <Typography fontWeight={900}>
                    {rating.toFixed(1)} / 5
                  </Typography>

                  <Typography variant="caption" color="text.secondary">
                    {reviews?.length || 2500}+ Reviews
                  </Typography>
                </Box>
              </Stack>
            </Paper>

            {/* FLOATING PRODUCT */}

            <Paper
              elevation={0}
              sx={{
                position: "absolute",

                right: {
                  xs: 18,
                  md: 40,
                },

                top: {
                  xs: 130,
                  md: 150,
                },

                px: 2.5,
                py: 2,

                borderRadius: 4,

                bgcolor: alpha(theme.palette.background.paper, 0.78),

                backdropFilter: "blur(22px)",

                border: `1px solid ${alpha(theme.palette.primary.main, 0.08)}`,

                boxShadow: `0 18px 42px ${alpha(
                  theme.palette.common.black,
                  0.12,
                )}`,
              }}
            >
              <Typography variant="caption" color="text.secondary">
                Featured Collection
              </Typography>

              <Typography fontWeight={800}>
                {collections?.[0]?.name || "Premium Picks"}
              </Typography>
            </Paper>
          </Box>

          <Box
            sx={{
              position: "relative",

              minHeight: {
                xs: 500,
                md: 760,
              },

              order: {
                xs: 2,
                lg: reverse ? 1 : 2,
              },
            }}
          ></Box>
        </Box>
      </Container>
    </Box>
  );
}

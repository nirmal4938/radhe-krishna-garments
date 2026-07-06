// src/components/Home/CategoryShowcaseSection.jsx

import { useContext } from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import StorefrontContext from "../../context/StorefrontContext";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1600&q=80";

export default function CategoryShowcaseSection() {
  const theme = useTheme();

  const { home } = useContext(StorefrontContext);

  const showcase = theme.custom?.showcase ?? {};

  // Priority:
  // 1. Storefront API
  // 2. Theme
  // 3. Default fallback
  const bannerImage =
    home?.showcase?.image ||
    home?.showcaseImage ||
    showcase.image ||
    FALLBACK_IMAGE;

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 3, md: 5 },
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            borderRadius: showcase.imageRadius ?? theme.shape.borderRadius * 2,
            boxShadow: showcase.imageElevation ?? theme.shadows[2],
          }}
        >
          <Box
            component="img"
            src={bannerImage}
            alt="Featured Banner"
            sx={{
              width: "100%",
              height: {
                xs: 340,
                sm: 300,
                md: 360,
                lg: 820,
              },
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
              bgcolor: "background.paper",
            }}
          />

          {/* Overlay */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(0,0,0,.45), rgba(0,0,0,.05))",
            }}
          />

          {/* CTA */}
          <Stack
            direction="row"
            spacing={2}
            sx={{
              position: "absolute",
              left: "50%",
              bottom: {
                xs: 16,
                md: 24,
              },
              transform: "translateX(-50%)",
            }}
          >
            <Button
              variant={showcase.secondaryButtonVariant ?? "outlined"}
              color="inherit"
              sx={{
                color: "#fff",
                borderColor: "rgba(255,255,255,.75)",
                bgcolor: "rgba(255,255,255,.08)",
                backdropFilter: "blur(8px)",

                "&:hover": {
                  bgcolor: "rgba(255,255,255,.18)",
                  borderColor: "#fff",
                },
              }}
            >
              Learn More
            </Button>

            <Button variant={showcase.primaryButtonVariant ?? "contained"}>
              Buy Now
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

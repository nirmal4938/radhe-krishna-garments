import { useContext } from "react";

import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import { alpha, useTheme } from "@mui/material/styles";

import StorefrontContext from "../../context/StorefrontContext";

const DEFAULT_ITEMS = [
  {
    title: "Premium Quality",
    description: "Carefully selected products from trusted brands.",
    icon: WorkspacePremiumRoundedIcon,
  },
  {
    title: "Fast Delivery",
    description: "Reliable shipping with secure packaging.",
    icon: LocalShippingRoundedIcon,
  },
  {
    title: "Secure Payments",
    description: "Protected checkout with trusted payment flows.",
    icon: SecurityRoundedIcon,
  },
  {
    title: "Customer Support",
    description: "Helpful assistance before and after every order.",
    icon: SupportAgentRoundedIcon,
  },
];

export default function TrustSection() {
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

  const trustConfig = theme.custom?.trust || {};
  const runtimeTrust = currentTheme?.trust || {};
  const items = home?.trust?.items || runtimeTrust.items || DEFAULT_ITEMS;
  const heading =
    home?.trust?.title ||
    runtimeTrust.title ||
    `Why shoppers choose ${business?.name || "us"}`;
  const inventoryCount = products?.length || collections?.length || 0;
  const socialProofCount = reviews?.length || offers?.length || 0;
  const description =
    home?.trust?.subtitle ||
    runtimeTrust.subtitle ||
    `A premium storefront experience built around ${
      inventoryCount || "curated"
    } products, ${socialProofCount || "trusted"} signals and thoughtful service.`;

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 7, md: 11 },
        bgcolor: alpha(theme.palette.primary.main, 0.035),
        borderBlock: 1,
        borderColor: "divider",
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={2} alignItems="center" textAlign="center" mb={6}>
          <Typography variant="overline" color="primary" fontWeight={800}>
            Store Standards
          </Typography>
          <Typography variant="h2" fontWeight={800}>
            {heading}
          </Typography>
          <Typography variant="body1" color="text.secondary" maxWidth={720}>
            {description}
          </Typography>
        </Stack>

        <Grid container spacing={{ xs: 2, md: 3 }}>
          {items.map((item, index) => {
            const Icon = item.icon || DEFAULT_ITEMS[index]?.icon;

            return (
              <Grid item xs={12} sm={6} lg={3} key={item.title}>
                <Card
                  elevation={trustConfig.cardElevation || 0}
                  sx={{
                    height: "100%",
                    border: 1,
                    borderColor: "divider",
                    borderRadius: trustConfig.cardRadius || 3,
                    bgcolor: "background.paper",
                    transition: theme.transitions.create(
                      ["transform", "box-shadow", "border-color"],
                      { duration: theme.transitions.duration.short },
                    ),
                    "&:hover": {
                      transform: "translateY(-6px)",
                      borderColor: alpha(theme.palette.primary.main, 0.28),
                      boxShadow: theme.shadows[trustConfig.hoverShadow || 8],
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                    <Stack spacing={2.5}>
                      <Box
                        sx={{
                          width: theme.spacing(7),
                          height: theme.spacing(7),
                          borderRadius: "50%",
                          display: "grid",
                          placeItems: "center",
                          color: "primary.main",
                          bgcolor: alpha(theme.palette.primary.main, 0.1),
                        }}
                      >
                        <Icon fontSize="medium" />
                      </Box>
                      <Box>
                        <Typography variant="h6" fontWeight={800}>
                          {item.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ mt: 1, lineHeight: 1.8 }}
                        >
                          {item.description}
                        </Typography>
                      </Box>
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

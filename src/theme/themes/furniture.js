export default {
  name: "furniture",
  palette: {
    primary: { main: "#5d4037" },
    secondary: { main: "#8d6e63" },
    background: { default: "#fafafa" },
    text: { primary: "#3e2723" },
  },
  typography: {
    fontFamily: '"Merriweather", Georgia, serif',
    h1: { fontSize: "4.75rem", fontWeight: 800 },
    h2: { fontSize: "3rem", fontWeight: 800 },
  },
  shape: {
    borderRadius: 4,
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 4,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 4px 12px rgba(93, 64, 55, 0.15)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: "#fafafa",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "#5d4037",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 2,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 2,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        maxWidth: "none",
      },
    },
  },
  custom: {
    hero: {
      imageRadius: 3,
      imageElevation: 10,
      floatingCardRadius: 3,
      primaryButtonVariant: "contained",
      secondaryButtonVariant: "outlined",
      layout: "image-left",
      showStats: true,
      showOfferCard: true,
      showVerifiedCard: true,
    },
    trust: { cardRadius: 3, cardElevation: 0, hoverShadow: 8 },
    products: {
      cardRadius: 3,
      imageRadius: 2,
      cardElevation: 0,
      hoverShadow: 10,
      showWishlist: true,
      cardStyle: "interior",
    },
    collections: {
      cardRadius: 3,
      cardElevation: 0,
      hoverShadow: 10,
      featureFirst: true,
    },
    offers: { cardRadius: 3, cardElevation: 0, variant: "gradient" },
    reviews: { cardRadius: 3, cardElevation: 2, hoverShadow: 8 },
    newsletter: { radius: 3, elevation: 0, variant: "dark", inputRadius: 2 },
    footerCta: { buttonVariant: "contained" },
    loading: { indicatorSize: 56 },
    error: { radius: 3, elevation: 6 },
  },
};

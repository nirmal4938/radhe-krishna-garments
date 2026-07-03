export default {
  name: "pharmacy",
  palette: {
    primary: { main: "#4caf50" },
    secondary: { main: "#9e9e9e" },
    background: { default: "#f5f5f5" },
    text: { primary: "#212121" },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: { fontSize: "4.5rem", fontWeight: 800 },
    h2: { fontSize: "2.875rem", fontWeight: 800 },
  },
  shape: {
    borderRadius: 4,
  },
  spacing: 6,
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
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: "#ffffff",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "#4caf50",
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
      imageElevation: 8,
      floatingCardRadius: 3,
      primaryButtonVariant: "contained",
      secondaryButtonVariant: "outlined",
      layout: "split",
      showStats: true,
      showOfferCard: true,
      showVerifiedCard: true,
    },
    trust: { cardRadius: 3, cardElevation: 0, hoverShadow: 6 },
    products: {
      cardRadius: 3,
      imageRadius: 2,
      cardElevation: 0,
      hoverShadow: 8,
      showWishlist: true,
      cardStyle: "clinical",
    },
    collections: {
      cardRadius: 3,
      cardElevation: 0,
      hoverShadow: 8,
      featureFirst: false,
    },
    offers: { cardRadius: 3, cardElevation: 0, variant: "gradient" },
    reviews: { cardRadius: 3, cardElevation: 1, hoverShadow: 6 },
    newsletter: { radius: 3, elevation: 0, variant: "dark", inputRadius: 2 },
    footerCta: { buttonVariant: "contained" },
    loading: { indicatorSize: 56 },
    error: { radius: 3, elevation: 6 },
  },
};

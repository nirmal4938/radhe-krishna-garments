export default {
  name: "default",
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#607d8b" },
    background: { default: "#fafafa" },
    text: { primary: "#212121" },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: { fontSize: "4.75rem", fontWeight: 800 },
    h2: { fontSize: "3rem", fontWeight: 800 },
  },
  shape: {
    borderRadius: 0,
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: "transparent",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "#1976d2",
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
      imageRadius: 4,
      imageElevation: 10,
      floatingCardRadius: 3,
      primaryButtonVariant: "contained",
      secondaryButtonVariant: "outlined",
      layout: "split",
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
      cardStyle: "commerce",
    },
    collections: {
      cardRadius: 3,
      cardElevation: 0,
      hoverShadow: 10,
      featureFirst: false,
    },
    offers: { cardRadius: 4, cardElevation: 0, variant: "gradient" },
    reviews: { cardRadius: 3, cardElevation: 2, hoverShadow: 8 },
    newsletter: { radius: 4, elevation: 0, variant: "dark", inputRadius: 2 },
    footerCta: { buttonVariant: "contained" },
    loading: { indicatorSize: 56 },
    error: { radius: 3, elevation: 6 },
  },
};

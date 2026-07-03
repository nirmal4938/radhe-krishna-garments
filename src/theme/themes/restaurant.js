export default {
  name: "restaurant",
  palette: {
    primary: { main: "#ff9800" },
    secondary: { main: "#757575" },
    background: { default: "#fff8f0" },
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
          background: "#fff8f0",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "#ff9800",
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
      showWishlist: false,
      cardStyle: "menu",
    },
    collections: {
      cardRadius: 3,
      cardElevation: 0,
      hoverShadow: 10,
      featureFirst: true,
    },
    offers: { cardRadius: 4, cardElevation: 0, variant: "gradient" },
    reviews: { cardRadius: 3, cardElevation: 2, hoverShadow: 8 },
    newsletter: { radius: 4, elevation: 0, variant: "dark", inputRadius: 2 },
    footerCta: { buttonVariant: "contained" },
    loading: { indicatorSize: 56 },
    error: { radius: 3, elevation: 6 },
  },
};

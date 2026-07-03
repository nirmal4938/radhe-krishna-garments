export default {
  name: "fashion",
  palette: {
    primary: { main: "#212121" },
    secondary: { main: "#757575" },
    background: { default: "#ffffff" },
    text: { primary: "#212121" },
  },
  typography: {
    fontFamily: '"Playfair Display", Georgia, serif',
    h1: { fontSize: "5rem", fontWeight: 800, letterSpacing: 0 },
    h2: { fontSize: "3rem", fontWeight: 800, letterSpacing: 0 },
  },
  shape: {
    borderRadius: 0,
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "uppercase",
          letterSpacing: 0,
          borderRadius: 0,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          border: "1px solid #e0e0e0",
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
          background: "#212121",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 0,
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
      imageRadius: 0,
      imageElevation: 8,
      floatingCardRadius: 0,
      primaryButtonVariant: "contained",
      secondaryButtonVariant: "outlined",
      layout: "split",
      showStats: true,
      showOfferCard: true,
      showVerifiedCard: true,
    },
    trust: { cardRadius: 0, cardElevation: 0, hoverShadow: 8 },
    products: {
      cardRadius: 0,
      imageRadius: 0,
      cardElevation: 0,
      hoverShadow: 10,
      showWishlist: true,
      cardStyle: "editorial",
    },
    collections: {
      cardRadius: 0,
      cardElevation: 0,
      hoverShadow: 10,
      featureFirst: true,
    },
    offers: { cardRadius: 0, cardElevation: 0, variant: "gradient" },
    reviews: { cardRadius: 0, cardElevation: 1, hoverShadow: 8 },
    newsletter: { radius: 0, elevation: 0, variant: "dark", inputRadius: 0 },
    footerCta: { buttonVariant: "contained" },
    loading: { indicatorSize: 56 },
    error: { radius: 0, elevation: 6 },
  },
};

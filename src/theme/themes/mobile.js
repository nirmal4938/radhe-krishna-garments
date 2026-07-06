export default {
  name: "mobile",
  palette: {
    primary: { main: "#2196f3" },
    secondary: { main: "#ff9800" },
    background: { default: "#ffffff" },
    text: { primary: "#333333" },
  },
  typography: {
    fontFamily: "system-ui, -apple-system, sans-serif",
    h1: { fontSize: "4.75rem", fontWeight: 800 },
    h2: { fontSize: "3rem", fontWeight: 800 },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 4,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
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
          background: "#2196f3",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 4,
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
    showcase: {
      badge: "Latest Collection",
      title: "Latest Smartphones for Every Lifestyle",
      subtitle:
        "Explore flagship devices, budget smartphones, accessories and smart gadgets from trusted brands.",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=80",
      primaryButtonText: "Explore Phones",
      secondaryButtonText: "Latest Offers",
      primaryButtonVariant: "contained",
      secondaryButtonVariant: "outlined",
      imagePosition: "right",
      imageRadius: 4,
      imageElevation: "0 20px 60px rgba(33,150,243,.18)",
      showSecondaryButton: true,
    },
    hero: {
      imageRadius: 5,
      imageElevation: 12,
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
      cardStyle: "device",
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

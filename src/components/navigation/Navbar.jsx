import { useContext, useMemo, useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Container,
  Box,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  Avatar,
  Typography,
  Stack,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import StorefrontContext from "../../context/StorefrontContext";
import ThemeContext from "../../context/ThemeContext";

import Brand from "./Brand";
import SearchBar from "./SearchBar";
import CartButton from "./CartButton";
import DesktopNavigation from "./DesktopNavigation";

const DEFAULT_NAVIGATION = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "Collections", path: "/collections" },
  { label: "Offers", path: "/offers" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const {
    business,
    navigation,
    theme: currentTheme,
  } = useContext(StorefrontContext);

  const navItems = useMemo(() => {
    if (Array.isArray(navigation?.header) && navigation.header.length) {
      return navigation.header;
    }

    return DEFAULT_NAVIGATION;
  }, [navigation]);

  const drawerWidth = 240;

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      sx={{
        bgcolor: "background.paper",
        borderBottom: 1,
        borderColor: "divider",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            minHeight: 72,
            gap: 3,
          }}
        >
          <Brand business={business} />

          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              flex: 1,
              justifyContent: "center",
            }}
          >
            <SearchBar
              placeholder={`Search in ${business?.name || "Store"}...`}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <CartButton />

            <IconButton
              onClick={() => setMobileOpen(!mobileOpen)}
              sx={{
                display: {
                  xs: "flex",
                  md: "none",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>

        <DesktopNavigation items={navItems} />
      </Container>

      <Drawer
        container={window.document.body}
        variant="temporary"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        <Box onClick={() => setMobileOpen(false)} sx={{ textAlign: "center" }}>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: 2,
            }}
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <Avatar
                alt={business?.name}
                src={business?.logo}
                sx={{ width: 32, height: 32 }}
              />
              <Typography variant="h6">{business?.name}</Typography>
            </Stack>
            <IconButton color="inherit" aria-label="close drawer">
              <CloseIcon />
            </IconButton>
          </Toolbar>

          <Divider />

          <Box sx={{ p: 2 }}>
            <SearchBar
              placeholder={`Search in ${business?.name || "Store"}...`}
            />
          </Box>

          <List>
            {navItems.map((item) => {
              const active = location.pathname === item.path;
              return (
                <ListItemButton
                  key={item.path}
                  component={RouterLink}
                  to={item.path}
                  sx={{
                    color: active ? "primary.main" : "text.primary",
                    fontWeight: active ? 700 : 500,
                  }}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              );
            })}
          </List>

          <Divider />

          <Box sx={{ p: 2, textAlign: "left" }}>
            <Typography variant="body2" color="text.secondary">
              {business?.category?.name} - {business?.address?.city}
            </Typography>
            <Typography variant="caption" color="text.disabled">
              Theme: {currentTheme?.name}
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
}

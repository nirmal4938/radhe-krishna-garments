import { Box, Button } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";

import SearchBar from "./SearchBar";

export default function MobileNavigation({
  open,
  onClose,
  items,
  placeholder,
}) {
  const location = useLocation();

  if (!open) return null;

  return (
    <Box
      sx={{
        display: {
          xs: "block",
          md: "none",
        },
        p: 2,
        borderTop: 1,
        borderColor: "divider",
      }}
    >
      <SearchBar placeholder={placeholder} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          mt: 2,
          gap: 1,
        }}
      >
        {items.map((item) => {
          const active = location.pathname === item.path;

          return (
            <Button
              key={item.path}
              component={RouterLink}
              to={item.path}
              fullWidth
              color="inherit"
              onClick={onClose}
              sx={{
                justifyContent: "flex-start",
                color: active ? "primary.main" : "text.primary",
                fontWeight: active ? 700 : 500,
              }}
            >
              {item.label}
            </Button>
          );
        })}
      </Box>
    </Box>
  );
}

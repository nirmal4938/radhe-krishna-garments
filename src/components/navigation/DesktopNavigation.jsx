import { Box, Button } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";

export default function DesktopNavigation({ items }) {
  const location = useLocation();

  return (
    <Box
      component="nav"
      sx={{
        display: {
          xs: "none",
          md: "flex",
        },
        gap: 4,
        py: 1.5,
        borderTop: 1,
        borderColor: "divider",
      }}
    >
      {items.map((item) => {
        const active = location.pathname === item.path;

        return (
          <Button
            key={item.path}
            component={RouterLink}
            to={item.path}
            disableRipple
            color="inherit"
            sx={{
              borderRadius: 0,
              px: 0,
              pb: 0.5,
              fontWeight: active ? 700 : 500,
              borderBottom: 2,
              borderColor: active ? "primary.main" : "transparent",
              color: active ? "primary.main" : "text.secondary",

              "&:hover": {
                bgcolor: "transparent",
                borderColor: "primary.main",
                color: "primary.main",
              },
            }}
          >
            {item.label}
          </Button>
        );
      })}
    </Box>
  );
}

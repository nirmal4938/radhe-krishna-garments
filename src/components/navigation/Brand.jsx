import { Avatar, Box, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Brand({ business }) {
  const displayName = business?.name || "Store";
  const logoUrl = business?.logoUrl;

  return (
    <Box
      component={RouterLink}
      to="/"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        textDecoration: "none",
        color: "inherit",
        flexShrink: 0,
      }}
    >
      <Avatar
        src={logoUrl || undefined}
        variant="rounded"
        sx={(theme) => ({
          width: theme.custom?.logo?.size || 44,
          height: theme.custom?.logo?.size || 44,
          bgcolor: "primary.main",
        })}
      >
        {!logoUrl && displayName.charAt(0)}
      </Avatar>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
        }}
      >
        {displayName}
      </Typography>
    </Box>
  );
}

// src/components/Home/NewsletterSection.jsx

import { useContext } from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import StorefrontContext from "../../context/StorefrontContext";

export default function NewsletterSection() {
  const theme = useTheme();

  const { business, home } = useContext(StorefrontContext);

  const newsletter = theme.custom?.newsletter ?? {};

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={newsletter.elevation ?? 0}
          sx={{
            borderRadius: newsletter.radius ?? theme.shape.borderRadius * 2,
            bgcolor: "background.paper",
            border: 1,
            borderColor: "divider",
            p: {
              xs: 3,
              md: 5,
            },
            textAlign: "center",
          }}
        >
          <Typography variant="h4" fontWeight={700} gutterBottom>
            {home?.newsletter?.title ??
              `Stay connected with ${business?.name || "our store"}`}
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              mb: 4,
              maxWidth: 560,
              mx: "auto",
            }}
          >
            {home?.newsletter?.subtitle ??
              "Subscribe to receive product launches, offers and exclusive updates."}
          </Typography>

          <Stack
            direction={{
              xs: "column",
              md: "row",
            }}
            sx={{
              maxWidth: 650,
              mx: "auto",
              border: 1,
              borderColor: "divider",
              borderRadius: 999,
              overflow: "hidden",
              bgcolor: "background.default",
            }}
          >
            <TextField
              fullWidth
              placeholder="Enter your email address"
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}
              sx={{
                px: 3,

                "& .MuiInputBase-root": {
                  height: 56,
                },

                "& input": {
                  py: 0,
                },
              }}
            />

            <Button
              variant="contained"
              sx={{
                minWidth: {
                  xs: "100%",
                  md: 180,
                },

                borderRadius: 0,

                px: 5,

                height: 56,

                flexShrink: 0,
              }}
            >
              Subscribe
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}

// src/components/CollectionSection.jsx

import { useContext } from "react";
import { Box, Button, Card, CardMedia, Container, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";

import StorefrontContext from "../../context/StorefrontContext";

export const CollectionSection = () => {
  const theme = useTheme();
  const { collections = [] } = useContext(StorefrontContext);

  const collectionTheme = theme.custom?.collections ?? {};

  const displayCollections =
    collections.length > 0
      ? collections
      : Array.from({ length: 4 }, (_, index) => ({
          _id: `placeholder-${index}`,
          name: "Coming Soon",
          image: null,
          isPlaceholder: true,
        }));

  return (
    <Box
      sx={{
        py: { xs: 5, md: 8 },
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          {displayCollections.map((collection) => (
            <Grid
              key={collection.id || collection._id}
              size={{
                xs: 12,
                sm: 6,
                md: 4,
                lg: 3,
              }}
            >
              <Card
                elevation={collectionTheme.cardElevation ?? 0}
                sx={{
                  position: "relative",
                  height: 320,
                  borderRadius:
                    collectionTheme.cardRadius ?? theme.shape.borderRadius,
                  overflow: "hidden",
                  cursor: "pointer",
                  bgcolor: "background.paper",
                  border: 1,
                  borderColor: "divider",

                  transition: theme.transitions.create(
                    ["transform", "box-shadow"],
                    {
                      duration: theme.transitions.duration.short,
                    },
                  ),

                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: collectionTheme.hoverShadow ?? 8,
                  },

                  "&:hover .collection-image": {
                    transform: "scale(1.06)",
                  },

                  "&:hover .collection-overlay": {
                    opacity: 1,
                  },

                  "&:hover .collection-button": {
                    opacity: 1,
                    transform: "translateY(0)",
                  },
                }}
              >
                {collection.image ? (
                  <CardMedia
                    component="img"
                    image={collection.image}
                    alt={collection.name}
                    className="collection-image"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: theme.transitions.create("transform", {
                        duration: 500,
                      }),
                    }}
                  />
                ) : (
                  <Box
                    className="collection-image"
                    sx={{
                      width: "100%",
                      height: "100%",
                      bgcolor: "grey.100",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: theme.transitions.create("transform", {
                        duration: 500,
                      }),
                    }}
                  >
                    <CollectionsOutlinedIcon
                      sx={{
                        fontSize: 88,
                        color: "text.disabled",
                      }}
                    />
                  </Box>
                )}

                <Box
                  className="collection-overlay"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,.65), rgba(0,0,0,.08))",
                    opacity: 0,
                    transition: theme.transitions.create("opacity"),
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    bottom: 24,
                    left: 0,
                    right: 0,
                    display: "flex",
                    justifyContent: "center",
                    px: 3,
                  }}
                >
                  <Button
                    className="collection-button"
                    variant="contained"
                    color="primary"
                    disabled={collection.isPlaceholder}
                    sx={{
                      minWidth: 180,
                      fontWeight: 600,
                      opacity: 0,
                      transform: "translateY(24px)",
                      transition: theme.transitions.create(
                        ["opacity", "transform"],
                        {
                          duration: theme.transitions.duration.short,
                        },
                      ),
                    }}
                  >
                    {collection.isPlaceholder
                      ? "Coming Soon"
                      : "Shop Collection"}
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

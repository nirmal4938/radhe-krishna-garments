import { useContext } from "react";
import { Box } from "@mui/material";

import StorefrontContext from "../../context/StorefrontContext";

import ErrorState from "./ErrorState";
import LoadingState from "./LoadingState";
import HeroSection from "./HeroSection";
import TrustSection from "./TrustSection";
import CollectionsSection from "./CollectionsSection";
import ProductsSection from "./ProductsSection";
import OffersSection from "./OffersSection";
import ReviewsSection from "./ReviewsSection";
import NewsletterSection from "./NewsletterSection";
import FooterCTA from "./FooterCTA";

export default function Home() {
  const { error, storeStatus, refreshStorefront } =
    useContext(StorefrontContext);

  if (storeStatus === "booting") {
    return <LoadingState />;
  }

  if (storeStatus === "bootstrap-error") {
    return <ErrorState error={error} onRetry={refreshStorefront} />;
  }

  return (
    <Box component="main" sx={{ bgcolor: "background.default" }}>
      <HeroSection />
      <TrustSection />
      <CollectionsSection />
      <ProductsSection />
      <OffersSection />
      <ReviewsSection />
      <NewsletterSection />
      <FooterCTA />
    </Box>
  );
}

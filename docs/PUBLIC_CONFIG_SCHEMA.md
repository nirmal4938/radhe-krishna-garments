# SyncWare Storefront Engine

# Public Configuration Schema

Version: 1.0

Status: Approved

---

# Purpose

This document defines the public configuration contract between the SyncWare Storefront Engine and the SyncWare Public API.

The Storefront Engine never contains hardcoded business information.

Instead, it requests a public configuration for the tenant and renders the storefront dynamically.

Example

```
https://rkgarments.syncware.fun

↓

GET /public/business/rkgarments

↓

Business Configuration

↓

Render Storefront
```

This schema acts as the single source of truth for every storefront.

---

# Root Schema

```json
{
  "business": {},
  "theme": {},
  "seo": {},
  "pages": {},
  "modules": {},
  "contact": {},
  "socialLinks": {},
  "navigation": {},
  "footer": {}
}
```

---

# Business

```json
{
  "id": 101,
  "slug": "rkgarments",
  "businessName": "RK Garments",
  "category": "garments",
  "tagline": "Fashion for Every Occasion",
  "description": "",
  "logo": "",
  "favicon": "",
  "banner": "",
  "status": "active"
}
```

---

# Theme

```json
{
  "primaryColor": "#2563eb",
  "secondaryColor": "#f97316",
  "accentColor": "#22c55e",
  "backgroundColor": "#ffffff",
  "textColor": "#111827",
  "fontFamily": "Inter",
  "borderRadius": "12px",
  "buttonStyle": "rounded",
  "darkMode": false
}
```

---

# SEO

```json
{
  "title": "",
  "description": "",
  "keywords": [],
  "canonicalUrl": "",
  "robots": "index,follow",
  "openGraph": {
    "title": "",
    "description": "",
    "image": ""
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "",
    "description": "",
    "image": ""
  }
}
```

---

# Navigation

```json
{
  "logoPosition": "left",
  "sticky": true,
  "items": [
    {
      "title": "Home",
      "url": "/"
    },
    {
      "title": "Shop",
      "url": "/shop"
    },
    {
      "title": "Collections",
      "url": "/collections"
    },
    {
      "title": "Contact",
      "url": "/contact"
    }
  ]
}
```

---

# Footer

```json
{
  "copyright": "",
  "description": "",
  "quickLinks": [],
  "showNewsletter": true,
  "showSocialLinks": true
}
```

---

# Contact

```json
{
  "phone": "",
  "whatsapp": "",
  "email": "",
  "website": "",
  "address": "",
  "city": "",
  "state": "",
  "country": "",
  "postalCode": "",
  "googleMapsUrl": "",
  "businessHours": []
}
```

---

# Social Links

```json
{
  "facebook": "",
  "instagram": "",
  "youtube": "",
  "linkedin": "",
  "twitter": "",
  "pinterest": ""
}
```

---

# Home Page Configuration

```json
{
  "hero": {
    "enabled": true
  },
  "collections": {
    "enabled": true
  },
  "featuredProducts": {
    "enabled": true
  },
  "offers": {
    "enabled": true
  },
  "testimonials": {
    "enabled": true
  },
  "gallery": {
    "enabled": true
  },
  "faq": {
    "enabled": true
  },
  "newsletter": {
    "enabled": true
  }
}
```

---

# Modules

Every storefront feature is configurable.

```json
{
  "wishlist": false,
  "cart": false,
  "checkout": false,
  "reviews": true,
  "blog": true,
  "gallery": true,
  "faq": true,
  "newsletter": true,
  "appointments": false,
  "giftCards": false,
  "loyalty": false,
  "customerLogin": false
}
```

---

# Branding Assets

```json
{
  "logo": "",
  "favicon": "",
  "heroImages": [],
  "galleryImages": [],
  "defaultProductImage": ""
}
```

---

# Business Statistics

```json
{
  "yearsInBusiness": 10,
  "happyCustomers": 2500,
  "products": 850,
  "stores": 2
}
```

---

# Store Settings

```json
{
  "currency": "INR",
  "currencySymbol": "₹",
  "language": "en",
  "timezone": "Asia/Kolkata",
  "dateFormat": "DD/MM/YYYY",
  "enableSearch": true,
  "enableShare": true
}
```

---

# Public API Response

```json
{
  "success": true,
  "message": "Business loaded successfully",
  "data": {
    "business": {},
    "theme": {},
    "seo": {},
    "navigation": {},
    "pages": {},
    "modules": {},
    "contact": {},
    "socialLinks": {},
    "footer": {}
  }
}
```

---

# Frontend Responsibilities

The Storefront Engine must:

- Resolve tenant from subdomain.
- Request the public configuration.
- Store configuration in Business Context.
- Apply the theme.
- Configure SEO.
- Render pages dynamically.
- Hide disabled modules.
- Never hardcode business information.

---

# Backend Responsibilities

The Public API must:

- Validate tenant slug.
- Return only public information.
- Never expose ERP data.
- Support caching.
- Support CDN delivery.
- Return consistent schema for every business.

---

# Future Extensions

The schema is designed to grow without breaking compatibility.

Future additions may include:

- AI Configuration
- PWA Settings
- Customer Authentication
- Checkout Configuration
- Payment Methods
- Shipping Rules
- Marketplace Integration
- Mobile App Configuration
- Push Notification Settings
- Analytics Configuration

---

# Success Criteria

The schema is complete when:

- Every storefront can be rendered using only API responses.
- No business-specific values exist in frontend code.
- The same React build works for every tenant.
- Backend and frontend evolve independently without breaking the contract.

---

End of Document

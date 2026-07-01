# SyncWare Storefront Engine

# Master Frontend Architecture

Version: 1.0

Status: Approved

---

# Vision

The SyncWare Storefront Engine is a reusable React application that powers every public business website on the SyncWare platform.

Examples

```
rkgarments.syncware.fun

fashionworld.syncware.fun

rajmobile.syncware.fun

abcfurniture.syncware.fun

pharmacyplus.syncware.fun
```

Every storefront uses the same React application.

Only the business configuration and public data change.

The Storefront Engine is responsible for rendering public-facing websites.

It never performs ERP operations.

---

# Core Principles

The Storefront Engine follows these architectural principles.

- Multi-Tenant First
- API First
- Configuration Driven
- Theme Driven
- Component First
- Layout First
- Mobile First
- SEO First
- Performance First
- Production Ready

---

# High-Level Architecture

```
Visitor

↓

DNS

↓

Tenant Subdomain

↓

Storefront Engine

↓

Tenant Resolution

↓

Business Configuration

↓

Theme

↓

Page Composition

↓

API Requests

↓

Render UI
```

---

# Application Bootstrap

When the application starts, it follows this lifecycle.

```
main.jsx

↓

App.jsx

↓

Global Providers

↓

Router

↓

Resolve Tenant

↓

Load Business Configuration

↓

Load Theme

↓

Initialize SEO

↓

Render Layout

↓

Render Pages
```

---

# Provider Hierarchy

```
<App>

    <ErrorBoundary>

        <ConfigProvider>

            <BusinessProvider>

                <ThemeProvider>

                    <SEOProvider>

                        <RouterProvider>

                            <MainLayout>

                                Pages

                            </MainLayout>

                        </RouterProvider>

                </ThemeProvider>

        </BusinessProvider>

    </ConfigProvider>

</App>
```

Every provider has one responsibility.

---

# Tenant Resolution Flow

```
Visitor

↓

https://rkgarments.syncware.fun

↓

window.location.hostname

↓

Extract Slug

↓

rkgarments

↓

GET /public/business/rkgarments

↓

Business Configuration

↓

Store Context Ready
```

The tenant is resolved automatically.

Users never select a tenant.

---

# Business Configuration

Business configuration contains only public information.

Example

```
{
    id,
    slug,
    businessName,
    category,
    logo,
    favicon,
    theme,
    seo,
    contact,
    socialLinks,
    pages,
    modules,
    settings
}
```

No private ERP information is exposed.

---

# Theme Engine

Themes are loaded after the business configuration.

The frontend never hardcodes branding.

Example

```
Theme

↓

Primary Color

↓

Secondary Color

↓

Typography

↓

Border Radius

↓

Buttons

↓

Cards

↓

Icons
```

All components consume theme variables.

---

# Routing

Routes are generic.

```
/

/shop

/product/:slug

/category/:slug

/collection/:slug

/about

/contact

/blog

/search

/reviews

/404
```

The business configuration controls which routes are visible.

---

# Page Composition

Pages are built from reusable sections.

Example

```
Home

↓

Hero

↓

Collections

↓

Products

↓

Offers

↓

Testimonials

↓

Newsletter

↓

Footer
```

Sections are reusable across every tenant.

---

# Data Loading

Pages never access APIs directly.

Instead they use Services.

```
Page

↓

Hook

↓

Service

↓

Axios Client

↓

API
```

Example

```
Home

↓

useHome()

↓

homeService.js

↓

apiClient.js

↓

GET /public/home
```

---

# API Layer

The frontend communicates only with public endpoints.

Examples

```
GET /public/business

GET /public/products

GET /public/categories

GET /public/offers

GET /public/reviews

POST /public/contact

POST /public/newsletter
```

All requests automatically include tenant information.

---

# State Management

The Storefront Engine separates state into four categories.

## Global State

Business

Theme

SEO

Language

Configuration

## Page State

Filters

Pagination

Search

Sorting

## Component State

Modal

Dropdown

Accordion

Tabs

Carousel

## Server State

Products

Collections

Reviews

Offers

Blogs

---

# Folder Responsibilities

```
config/

Application configuration

context/

Global Providers

layouts/

Application layouts

pages/

Route pages

components/

Reusable UI

hooks/

Reusable logic

services/

API communication

api/

Axios client

constants/

Static values

utils/

Utilities

assets/

Images

styles/

CSS
```

---

# Error Handling

The application supports

```
Business Not Found

↓

404

↓

Maintenance

↓

API Error

↓

Network Error

↓

Retry
```

Errors never crash the application.

---

# Loading Strategy

Every request supports

```
Loading

↓

Skeleton

↓

Success

↓

Empty State

↓

Error State
```

---

# Performance Strategy

The Storefront Engine uses

- Lazy Routes
- Lazy Images
- Memoization
- Code Splitting
- Bundle Splitting
- Dynamic Imports
- Optimized Assets
- Prefetching
- Caching

---

# SEO Strategy

Every page supports

- Meta Title
- Meta Description
- Canonical URL
- Open Graph
- Twitter Cards
- Structured Data
- Breadcrumb Schema
- Sitemap
- Robots

SEO values come from the Business Configuration API.

---

# Security

The storefront exposes only public APIs.

The frontend never accesses

- Inventory
- Orders
- Employees
- Finance
- CRM
- Accounting
- Billing

ERP functionality belongs exclusively to

```
garments.syncware.fun
```

---

# Integration with ERP

The storefront consumes public data from the ERP.

Examples

```
Products

Categories

Collections

Offers

Business Information

Reviews

Blogs
```

Inventory synchronization happens through backend APIs.

The storefront never writes directly to ERP tables.

---

# Deployment Architecture

One React build serves every tenant.

```
syncware-storefront

↓

CDN

↓

Cloudflare

↓

*.syncware.fun

↓

Tenant Resolution

↓

Business Configuration

↓

Render
```

No separate React deployments exist for individual businesses.

---

# Future Modules

The architecture supports future expansion.

Examples

- Customer Authentication
- Shopping Cart
- Checkout
- Order Tracking
- Wishlist
- Loyalty Program
- Gift Cards
- AI Search
- AI Product Recommendations
- Marketplace Integration
- Mobile App
- Progressive Web App
- Live Chat
- Virtual Try-On

These modules plug into the existing architecture without structural changes.

---

# Success Criteria

The Storefront Engine architecture is complete when:

- One React application serves all tenants.
- No business-specific code exists.
- Tenant resolution is automatic.
- Business configuration is API-driven.
- Theme is configuration-driven.
- Pages are composed from reusable sections.
- Components are reusable.
- APIs are centralized.
- Routing is generic.
- Deployment requires only one frontend build.

---

End of Document

# SyncWare Storefront Engine

# API Architecture

Version: 1.0
Status: Architecture Approved

---

# Purpose

This document defines the API communication architecture for the SyncWare Storefront Engine.

The Storefront Engine never communicates directly with the database.

All communication happens through the SyncWare API Platform.

```
Storefront

↓

API Layer

↓

api.syncware.fun

↓

Business Services

↓

PostgreSQL
```

This document is the source of truth for every API call.

---

# Architecture Principles

The API architecture follows these principles.

- API First
- Service First
- Multi-Tenant
- Stateless
- Secure
- Scalable
- Reusable
- Production Ready

Components never communicate directly with APIs.

Components only communicate with Hooks.

Hooks communicate with Services.

Services communicate with Axios.

Axios communicates with the backend.

---

# Request Flow

```
Component

↓

Hook

↓

Service

↓

Axios Instance

↓

Request Interceptor

↓

api.syncware.fun

↓

Response Interceptor

↓

Service

↓

Hook

↓

Component
```

---

# Folder Structure

```
src/

api/

axios.js

apiClient.js

interceptors.js

services/

business.service.js

product.service.js

category.service.js

collection.service.js

offer.service.js

review.service.js

contact.service.js

blog.service.js
```

---

# Axios Instance

Only one Axios instance should exist.

```
src/api/axios.js
```

Responsibilities

- Base URL
- Timeout
- JSON headers
- Credentials
- Error transformation

Never create Axios instances inside services.

---

# Base URL

Development

```
http://localhost:5000/api
```

Production

```
https://api.syncware.fun/api
```

Use environment variables only.

Never hardcode URLs.

Example

```
VITE_API_BASE_URL
```

---

# Request Interceptor

Every request passes through a Request Interceptor.

Responsibilities

- Attach Tenant Slug
- Attach Authorization Token (future)
- Attach Locale (future)
- Attach Request ID
- Attach Correlation ID (future)

Example

Headers

```
X-Tenant-Slug

rkgarments
```

---

# Response Interceptor

Responsibilities

- Normalize responses
- Handle HTTP errors
- Handle Unauthorized
- Handle Maintenance Mode
- Handle Subscription Expired
- Handle Tenant Disabled

Return consistent error objects.

Never expose raw Axios errors to components.

---

# Standard API Response

Success

```
{
  success: true,
  message: "",
  data: {}
}
```

Failure

```
{
  success: false,
  message: "Product not found",
  errors: [],
  code: "PRODUCT_NOT_FOUND"
}
```

Every endpoint must follow the same response structure.

---

# Tenant Resolution

The Storefront determines the tenant from the current subdomain.

Example

```
rkgarments.syncware.fun

↓

Slug

rkgarments

↓

Header

X-Tenant-Slug

↓

API

↓

Business

↓

Business ID
```

Components never know Business IDs.

Only Slugs.

---

# Service Layer

Every resource has its own service.

Example

```
BusinessService

ProductService

CategoryService

CollectionService

OfferService

ReviewService

ContactService

SeoService

BlogService
```

Services return plain JavaScript objects.

Never return Axios responses.

---

# Public Endpoints

Business

```
GET

/business
```

Collections

```
GET

/collections
```

Products

```
GET

/products
```

Product Details

```
GET

/products/:slug
```

Categories

```
GET

/categories
```

Offers

```
GET

/offers
```

Reviews

```
GET

/reviews
```

Blogs

```
GET

/blogs
```

Contact

```
POST

/contact
```

Newsletter

```
POST

/newsletter
```

Search

```
GET

/search
```

SEO

```
GET

/seo
```

---

# Authentication

Phase 1

Public only.

No authentication.

Future

Customer Login

```
POST

/auth/login
```

Customer Register

```
POST

/auth/register
```

Customer Logout

```
POST

/auth/logout
```

Order Tracking

```
GET

/orders
```

Wishlist

```
GET

/wishlist
```

---

# Error Handling

Never use

```
alert()
```

Instead

Global Error Handler

↓

Toast

↓

Retry

↓

Fallback UI

Common Errors

400

Bad Request

401

Unauthorized

403

Forbidden

404

Not Found

409

Conflict

422

Validation Error

429

Rate Limit

500

Server Error

503

Maintenance

---

# Loading Strategy

Every API request has

Loading

↓

Success

↓

Empty

↓

Failure

Every page must support all four states.

---

# Retry Strategy

GET

Retry Automatically

POST

No Retry

PUT

Manual Retry

DELETE

Manual Retry

---

# Caching Strategy

Future

React Query

or

TanStack Query

Responsibilities

- Cache GET requests
- Background Refetch
- Request Deduplication
- Stale While Revalidate

Phase 1

No caching required.

---

# Pagination

Standard Query

```
?page=1

&limit=20
```

Response

```
{
  data:[],
  pagination:{
      page:1,
      limit:20,
      total:250,
      totalPages:13
  }
}
```

---

# Filtering

Example

```
/products

?category=shirts

&brand=nike

&priceMin=500

&priceMax=2500

&sort=price_asc
```

---

# Search

```
GET

/search?q=jeans
```

Future

AI Search

```
GET

/ai/search
```

---

# File Upload

Future

```
POST

/upload
```

Multipart only.

Never Base64.

---

# API Versioning

Every endpoint must support versioning.

```
/api/v1/
```

Future

```
/api/v2/
```

Frontend must never assume endpoint stability.

---

# Logging

Development

Console logging allowed.

Production

No console logs.

Future

Sentry

OpenTelemetry

---

# Security

Never expose

Business ID

Database IDs

Internal URLs

Secrets

JWT

API Keys

Frontend only receives public information.

---

# Business Rule

Components never call

axios.get()

Never.

Correct Flow

```
Component

↓

Hook

↓

Service

↓

Axios

↓

API
```

---

# Future Integrations

Stripe

Razorpay

WhatsApp

AI

Maps

Email

SMS

Analytics

Inventory

Order Tracking

Loyalty

Customer Login

PWA

Marketplace

---

# Success Criteria

The API architecture is complete when

- One Axios instance exists.
- One Service per Resource.
- Components never call APIs directly.
- Errors are standardized.
- Tenant resolution is automatic.
- No hardcoded URLs.
- Environment driven configuration.
- Ready for api.syncware.fun.
- Supports every future SyncWare business category.

---

End of Document

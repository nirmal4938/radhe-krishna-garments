# SyncWare Public API

# Backend API Contract

Version: 1.0

Status: Draft

---

# Purpose

This document defines every public API consumed by the SyncWare Storefront Engine.

It is the contract between

Storefront Engine

↓

api.syncware.fun

↓

ERP Systems

The frontend never communicates directly with ERP databases.

All communication happens through the Public API.

---

# API Principles

The API follows these principles.

- RESTful
- Versioned
- Stateless
- JSON Only
- HTTPS Only
- Cache Friendly
- Tenant Aware
- CDN Friendly

---

# Base URL

Production

```
https://api.syncware.fun/api/v1/public
```

Development

```
http://localhost:5000/api/v1/public
```

---

# API Response Format

Every endpoint returns

```json
{
  "success": true,
  "message": "",
  "data": {}
}
```

Errors

```json
{
  "success": false,
  "message": "",
  "errors": []
}
```

---

# Tenant Resolution

Every request contains

```
X-Tenant-Slug

or

Host Header
```

Example

```
Host

rkgarments.syncware.fun
```

or

```
X-Tenant-Slug

rkgarments
```

Backend resolves

Business

↓

Business ID

↓

Configuration

↓

Public Data

---

# Business APIs

## Get Business

GET

```
/business
```

Returns

- business
- branding
- contact
- navigation
- footer

---

# Home APIs

GET

```
/home
```

Returns

Hero

Collections

Featured Products

Offers

Testimonials

FAQ

Newsletter

---

# Product APIs

## List Products

GET

```
/products
```

Query

```
?page=1

&limit=20

&search=

&category=

&collection=

&sort=

&priceMin=

&priceMax=
```

---

## Product Details

GET

```
/products/{slug}
```

Returns

Product

Gallery

Variants

Related Products

Reviews

---

# Category APIs

GET

```
/categories
```

---

GET

```
/categories/{slug}
```

---

# Collection APIs

GET

```
/collections
```

---

GET

```
/collections/{slug}
```

---

# Offer APIs

GET

```
/offers
```

---

# Review APIs

GET

```
/reviews
```

Supports

Pagination

Sorting

Filtering

---

# Blog APIs

GET

```
/blogs
```

---

GET

```
/blogs/{slug}
```

---

# Search API

GET

```
/search
```

Query

```
?q=
```

Future

AI Search

---

# Contact API

POST

```
/contact
```

Request

```json
{
  "name": "",
  "phone": "",
  "email": "",
  "message": ""
}
```

---

# Newsletter API

POST

```
/newsletter
```

---

# FAQ API

GET

```
/faqs
```

---

# Gallery API

GET

```
/gallery
```

---

# Navigation API

GET

```
/navigation
```

---

# Footer API

GET

```
/footer
```

---

# Theme API

GET

```
/theme
```

---

# Error Codes

```
200

201

400

401

403

404

409

422

429

500

503
```

---

# Pagination

```json
{
  "page": 1,
  "limit": 20,
  "total": 180,
  "pages": 9
}
```

---

# Sorting

```
price

name

createdAt

popularity
```

---

# Filtering

```
category

brand

collection

availability

price

size

color
```

---

# Caching

Recommended

Business

24 Hours

Theme

24 Hours

Categories

12 Hours

Collections

12 Hours

Products

5 Minutes

Offers

5 Minutes

Reviews

10 Minutes

Blogs

30 Minutes

---

# Security

Only public APIs are exposed.

Never expose

Inventory

Orders

Employees

Finance

Accounting

CRM

Warehouse

Purchasing

RBAC

Users

Passwords

JWT

Sessions

---

# Rate Limiting

Recommended

```
100 Requests / Minute / IP
```

Search

```
30 Requests / Minute
```

Contact

```
10 Requests / Hour
```

Newsletter

```
20 Requests / Hour
```

---

# Versioning

Current

```
/api/v1/public
```

Future

```
/api/v2/public
```

Old versions remain supported until deprecated.

---

# Future APIs

Customer Login

Cart

Checkout

Wishlist

Orders

Payments

Gift Cards

Loyalty

AI Search

Recommendations

Appointments

Marketplace

PWA

Push Notifications

---

# Success Criteria

The API contract is complete when:

- Every Storefront Engine feature has a corresponding endpoint.
- Responses follow a consistent structure.
- Tenant resolution is automatic.
- APIs are versioned.
- Public data is isolated from ERP data.
- Frontend never requires business-specific logic.

---

End of Document

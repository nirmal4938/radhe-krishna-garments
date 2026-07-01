# SyncWare Storefront Engine

# Project Structure

Version: 1.0
Status: Architecture Approved

---

# Purpose

This document defines the official frontend project structure for the SyncWare Storefront Engine.

Every file, folder, component, service, hook, context, provider, and utility must follow this structure.

The goal is to keep the project:

- Scalable
- Maintainable
- Multi-tenant
- Theme-driven
- API-driven
- Production-ready

This structure is the source of truth for all future development.

---

# Architecture Philosophy

The Storefront Engine is **not** a garments website.

It is a reusable frontend platform capable of serving thousands of businesses across different industries.

Examples

- rkgarments.syncware.fun
- rajmobile.syncware.fun
- fashionworld.syncware.fun
- abcpharmacy.syncware.fun

Only business data changes.

The frontend codebase remains the same.

---

# High Level Structure

```

src/

assets/
api/
components/
config/
constants/
context/
hooks/
layouts/
pages/
providers/
routes/
services/
store/
styles/
themes/
utils/
App.jsx
main.jsx

```

Every folder has a single responsibility.

No folder should contain unrelated code.

---

# Folder Responsibilities

## assets/

Contains static resources.

Examples

- logos
- icons
- placeholder images
- fonts
- illustrations

Never place business-specific assets here.

Business assets come from APIs.

---

## api/

Contains API infrastructure.

Examples

```

api/
axios.js
interceptors.js
apiClient.js

```

Responsibilities

- Axios Instance
- Request Interceptor
- Response Interceptor
- Authorization Header
- Error Handler

No business logic belongs here.

---

## services/

Contains all API communication.

Examples

```

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

Responsibilities

- Call APIs
- Transform responses
- Return clean objects

Never contain UI code.

---

## config/

Contains runtime configuration.

Examples

```

config/

env.js
tenant.js
theme.js
routes.js
seo.js

```

Responsibilities

- Environment configuration
- Tenant configuration
- Theme defaults
- Runtime settings

---

## constants/

Contains application constants.

Examples

```

API_ENDPOINTS.js

ROUTES.js

COLORS.js

REGEX.js

VALIDATION.js

```

Never hardcode strings inside components.

---

## providers/

Application-wide providers.

Examples

```

providers/

AppProvider.jsx

BusinessProvider.jsx

ThemeProvider.jsx

SeoProvider.jsx

QueryProvider.jsx

```

Provider Order

```

<AppProvider>

<BusinessProvider>

<ThemeProvider>

<SeoProvider>

<App />

</SeoProvider>

</ThemeProvider>

</BusinessProvider>

</AppProvider>

```

---

## context/

Contains React Context only.

Examples

```

BusinessContext.jsx

ThemeContext.jsx

SeoContext.jsx

```

Business logic belongs inside providers.

---

## hooks/

Reusable custom hooks.

Examples

```

useBusiness.js

useProducts.js

useCollections.js

useSearch.js

useDebounce.js

usePagination.js

useInfiniteScroll.js

```

Hooks should never directly manipulate UI.

---

## layouts/

Reusable page layouts.

Examples

```

MainLayout.jsx

BlankLayout.jsx

StoreLayout.jsx

ErrorLayout.jsx

```

Every page uses one layout.

---

## pages/

Contains route-level pages.

Example

```

pages/

Home/

Shop/

Collection/

Product/

About/

Contact/

Reviews/

Blog/

NotFound/

```

Each page owns its UI composition.

---

## components/

Reusable UI components.

Example

```

components/

Button/

Card/

Badge/

Input/

Hero/

Navbar/

Footer/

ProductCard/

CollectionCard/

Rating/

Modal/

```

Components must be reusable.

Never embed business logic.

---

## routes/

Application routing.

Example

```

routes/

index.jsx

PublicRoutes.jsx

NotFound.jsx

```

No page should define routing internally.

---

## themes/

Theme system.

Example

```

themes/

default.js

dark.js

light.js

themeManager.js

```

Business themes are loaded dynamically.

---

## styles/

Global styles.

Examples

```

styles/

globals.css

variables.css

animations.css

tailwind.css

```

Avoid page-specific styles here.

---

## store/

Reserved for future global state.

Examples

```

store/

auth/

cart/

wishlist/

```

Phase 1 may remain empty.

---

## utils/

Pure utility functions.

Examples

```

formatCurrency.js

formatDate.js

slugify.js

debounce.js

storage.js

```

Utilities must remain framework-independent.

---

# Page Structure

Every page follows the same convention.

Example

```

pages/

Home/

Home.jsx

Home.sections.jsx

Home.constants.js

Home.styles.css

```

---

# Component Structure

Every complex component follows:

```

Hero/

Hero.jsx

Hero.css

Hero.constants.js

Hero.hooks.js

Hero.utils.js

index.js

```

Simple components may only contain:

```

Button/

Button.jsx

index.js

```

---

# Import Rules

Always import in this order.

1 React

2 Third-party libraries

3 Config

4 Services

5 Hooks

6 Components

7 Local files

Example

```javascript
import { useEffect } from "react";

import axios from "axios";

import { API } from "@/config";

import { getProducts } from "@/services/product.service";

import useProducts from "@/hooks/useProducts";

import ProductGrid from "@/components/ProductGrid";
```

---

# Dependency Rules

Allowed

```
Page

↓

Layout

↓

Component

↓

Hook

↓

Service

↓

API

```

Forbidden

```
Component

↓

API

```

Components must never call Axios directly.

---

# Naming Convention

Components

PascalCase

```
ProductCard.jsx
```

Hooks

camelCase

```
useProducts.js
```

Services

camelCase

```
product.service.js
```

Constants

UPPER_SNAKE_CASE

```
API_ENDPOINTS.js
```

Folders

PascalCase for feature folders.

camelCase for utility folders.

---

# Business Rules

Never hardcode

- Business Name
- Phone Number
- Email
- Address
- Colors
- Theme
- Products
- Collections
- Reviews

Everything must come from APIs or configuration.

---

# Future Expansion

The same project structure must support

- Garments
- Mobile
- Pharmacy
- Furniture
- Electronics
- Grocery
- Restaurant

without changing the architecture.

---

# Success Criteria

The project structure is considered complete when:

- Every file has a single responsibility.
- Components never call APIs directly.
- Pages only compose layouts and components.
- Services own all API communication.
- Providers own global state.
- Business data is configuration-driven.
- The same codebase serves multiple tenants.
- No tenant-specific information exists in the frontend source code.

---

End of Document

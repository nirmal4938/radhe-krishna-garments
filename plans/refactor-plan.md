# Refactoring Plan for Radhe Krishna Garments App

## Current Architecture Analysis

The existing `src/App.jsx` contains a monolithic component that handles:

- Navigation bar
- Hero carousel with GSAP animations
- Offer sections and collections
- Testimonials carousel
- Location/map information
- Dashboard with lead tracking
- Footer component
- State management for page navigation and lead forms

## Target Architecture

Create a feature-based structure under `src/pages/App/` with clear separation of concerns:

```
src/pages/App/
├── App.jsx              # Main orchestrator component
├── App.css              # Shared styles
├── components/          # Reusable UI components
│   ├── NavBar.jsx
│   ├── Hero.jsx
│   ├── CollectionGrid.jsx
│   ├── Testimonials.jsx
│   ├── LocationSection.jsx
│   └── Footer.jsx
├── hooks/               # Custom hooks for business logic
│   └── useLeads.js      # Lead tracking and localStorage management
├── utils/               # Utility functions
│   └── formatCurrency.js
└── pages/               # Page-level components
    ├── Home.jsx
    ├── Shop.jsx
    └── Dashboard.jsx
```

## Component Breakdown

### 1. NavBar.jsx

- Extracts the navigation bar from App.jsx
- Props: `page` (current page) and `setPage` (navigation setter)
- Maintains exact same styling and behavior

### 2. Hero.jsx

- Contains the hero section with carousel
- Manages slide index state and GSAP animations
- Uses `useRef` for DOM references
- Preserves all animation timing and effects

### 3. CollectionGrid.jsx

- Renders the collection showcase grid
- Maps over the `slides` array for individual collection items
- Maintains hover effects and responsive grid layout

### 4. Testimonials.jsx

- Handles testimonials carousel
- Maps over `testimonials` array
- Preserves quote styling and star rating visualization

### 5. LocationSection.jsx

- Contains location map information and contact details
- Maintains Google Maps link and location text

### 6. Footer.jsx

- Extracts the footer section
- Preserves all contact information and copyright text

## State Management

- Page navigation state (`page`) remains in App.jsx as it coordinates page-level routing
- Lead tracking state (`leads`, `leadForm`) moves to `hooks/useLeads.js`
- Form handling logic (`saveLead`, `trackLead`) moves to lead hook
- Slide index state (`slideIndex`) remains local to Hero component

## Custom Hook: useLeads.js

- Encapsulates all lead tracking functionality:
  - Load leads from localStorage on init
  - Save new leads to localStorage
  - Provide `addLead` function for tracking
  - Maintains lead form state management

## Utility: formatCurrency.js

- Format currency values for Indian numbering system
- Used in Dashboard KPI cards

## Implementation Order

1. Create folder structure
2. Implement NavBar component
3. Implement Hero component
4. Implement CollectionGrid component
5. Implement Testimonials component
6. Implement LocationSection component
7. Implement Footer component
8. Create useLeads.js hook
9. Create formatCurrency.js utility
10. Update App.jsx to import and compose components
11. Verify all functionality preserved
12. Test navigation and state management

## Success Criteria

- All existing UI elements rendered identically
- All GSAP animations work with same timing
- Lead tracking persists in localStorage
- Navigation between pages works correctly
- No breaking changes to existing behavior
- Code organization follows feature-based pattern

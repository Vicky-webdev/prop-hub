# Hiding Sticky SearchBar on Specific Pages in React Router (with TypeScript)

This guide explains how to conditionally hide the global sticky `SearchBar` (used in `Layout.tsx`) based on the current route. This helps avoid duplicate filters or UI clashes (like on `/results` where a separate filter bar exists).

---

## 🧠 Concept

Use `useLocation()` from `react-router-dom` to detect the current path, then conditionally render the `SearchBar` only if it's not in a list of excluded routes.

---

## 🛠️ Step-by-Step Implementation

### Step 1: Import `useLocation`

In your `Layout.tsx`, import `useLocation` along with `useNavigate`:

```tsx
import { useNavigate, useLocation } from 'react-router-dom';
```

### Step 2: Define the List of Pages to Hide `SearchBar`

Add a list of route paths where the sticky `SearchBar` should not appear:

```tsx
const HIDE_SEARCHBAR_ROUTES = ['/results', '/contact', '/blog'];
```

### Step 3: Get the Current Pathname

Call `useLocation()` inside the `Layout` component:

```tsx
const location = useLocation();
```

### Step 4: Check if Current Route is in the Exclusion List

```tsx
const shouldHideSearchBar = HIDE_SEARCHBAR_ROUTES.includes(location.pathname);
```

> Optionally use `.some()` if you want pattern matching (e.g., `/property/:id`)

### Step 5: Conditionally Render the Sticky SearchBar

Update the JSX in `Layout.tsx` like this:

```tsx
{!shouldHideSearchBar && (
  <div className="sticky top-16 z-40 bg-white shadow">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <SearchBar
        query={query}
        setQuery={setQuery}
        onSearch={handleSearch}
        onSubmit={handleSubmitSearch}
        suggestions={properties.slice(0, 5)}
      />
    </div>
  </div>
)}
```

---

## ✅ Example: Full Snippet

```tsx
import { useNavigate, useLocation } from 'react-router-dom';
...
const HIDE_SEARCHBAR_ROUTES = ['/results', '/contact', '/blog'];
const location = useLocation();
const shouldHideSearchBar = HIDE_SEARCHBAR_ROUTES.includes(location.pathname);
...
{!shouldHideSearchBar && (
  <div className="sticky top-16 z-40 bg-white shadow">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <SearchBar ... />
    </div>
  </div>
)}
```

---

## 🔮 Future Enhancements

- ✅ Use `pathname.startsWith('/property/')` for dynamic routes like detail pages.
- ✅ Store excluded routes in a config file (e.g. `config/constants.ts`).
- ✅ Apply same logic to other layout components if needed.

---

## 📌 Summary

| Task                           | Status ✅ |
| ------------------------------ | --------- |
| Hide SearchBar on `/results` | ✅        |
| Support more pages easily      | ✅        |
| Ready for future scale         | ✅        |

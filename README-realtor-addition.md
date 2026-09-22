# Realtor Dashboard — setup notes

This covers just the **new realtor section** added to the project. It lives entirely under `src/app/realtor/` and `src/components/.../realtor*`, and doesn't touch anything on the client side.

## 1. Requirements to run the project

- Node.js 18.18+ (Node 20 LTS recommended)
- npm

```bash
npm install
npm run dev
```

Then visit `http://localhost:3000/realtor/login`.

## 2. One thing you need to add before this runs

**`public/auth-background.jpg`** — the background photo behind the realtor login/signup card (same image the client login/signup already uses, so if that file already exists in your `public/` folder, nothing to do).

Every property photo (`property-1.jpg` through `property-6.jpg`) is expected in `public/` too, reused from the client catalog — if your client dashboard is already working, these are already in place.

No other setup, API keys, or packages are needed — the donut chart on the dashboard home is drawn with a plain CSS `conic-gradient` (no charting library), and the map on the Support page is the same key-free Google Maps `output=embed` iframe used elsewhere in the project.

## 3. Route structure — why it's shaped this way

```
src/app/realtor/
  login/page.tsx              ← outside the dashboard layout (no sidebar)
  signup/page.tsx              ← same
  forgot-password/page.tsx     ← same
  dashboard/
    layout.tsx                  ← adds the sidebar; wraps everything below
    page.tsx                     ← dashboard home
    browse-properties/page.tsx
    my-deals/page.tsx
    earnings/page.tsx
    clients/page.tsx
    notifications/page.tsx
    support/page.tsx
```

`login`/`signup`/`forgot-password` sit **outside** `realtor/dashboard/`, on purpose: a Next.js `layout.tsx` wraps every route nested underneath it with no way to opt out per-page. Since `realtor/dashboard/layout.tsx` renders the sidebar, anything nested inside `realtor/dashboard/` gets that sidebar automatically — so the auth pages, which shouldn't have a sidebar, have to live one level up. This is the exact same reasoning used for the client dashboard's `login`/`signup` pages.

This also satisfies "host it as a different folder" for access separation: the whole realtor experience lives under the `/realtor/*` URL namespace, entirely separate from `/dashboard/*` (the client area) — it isn't linked from anywhere in the client-facing site, so a client browsing the main site or their own dashboard has no path to it. That's namespace/discoverability separation, not authentication — there's no login gate wired up yet (same as the client side), so add real auth/authorization before this goes anywhere near production.

## 4. What's shared vs. what's new

**Reused as-is** (no realtor-specific copies were made of these):
- `ArrowLink`, `Modal`, `Pagination`, `KycBadge` — `src/components/ui/`
- `AuthShell`, `AuthField`, `AuthPasswordField`, `AuthTextarea` — `src/components/sections/auth/`
- `featuredProperties`, `propertyTypes`, `propertyStates`, `priceRanges`, `amenitiesList`, `contactUsInfo` — `src/lib/data.ts` (realtors browse the exact same property catalog as clients)

**New, generic, and usable by either dashboard going forward:**
- `PropertyFilterBar` + `PropertyGridCard` — `src/components/ui/` (the client dashboard's `DashboardFilterBar`/`DashboardPropertyCard` do the same job; if you want a single source of truth, these two can replace those)

**New, realtor-specific:**
- `src/lib/realtor-data.ts` — all realtor content (nav links, user info, scorecard, deal stats, deals, clients, notifications)
- `src/components/layout/RealtorSidebar.tsx`
- `src/components/sections/realtor-auth/` — `RealtorLoginForm.tsx`, `RealtorSignupForm.tsx`
- `src/components/sections/realtor/` — `Header.tsx`, `AnnualScoreCard.tsx`, `DealStatistics.tsx`, `MyDealsPreview.tsx`, `NotificationsPanel.tsx`, `BrowseProperties.tsx`, `MyDeals.tsx`, `DealDetailsModal.tsx`, `Earnings.tsx`, `Clients.tsx`, `Notifications.tsx`, `Support.tsx`

## 5. Things to double-check against your own screenshots

- **Login page's password field is labeled "Confirm Password"** in your screenshot — reproduced exactly as shown, but that reads like a leftover from the signup form. Flagged with a comment right in `RealtorLoginForm.tsx`; change the `label` prop to `"Password"` if that's what you actually want.
- **Earnings page has no mockup to match** — I built a reasonable placeholder (summary cards + a per-deal commission table at a flat 5% rate) rather than guessing at a specific design. Treat this one as a starting point, not a faithful reproduction.
- **Deal Statistics' three category labels** all read "Deals under Inspections" in your screenshot (likely a Figma copy-paste artifact) — used three distinct labels instead ("Deals under Inspection" / "Deals in Installment" / "Deals Completed") since identical labels wouldn't be very useful in a real breakdown.

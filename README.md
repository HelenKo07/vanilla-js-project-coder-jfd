# Meta News Layout

A responsive news web application built with Vanilla JS, TypeScript, SCSS, and Vite.

The project replicates the Meta-style news interface and includes key user scenarios:

- Adaptive header and bottom navigation
- Sidebar menu with theme switching
- Language switching between UA and RU
- Saving the selected theme and language to localStorage
- Profile drop-down menu
- More button with visual opening state
- News feed with additional card loading

## Stack

- TypeScript
- Vanilla JavaScript
- SCSS
- Vite

## Structure

- [src/templates/app.ts](/Users/alyona/Desktop/Собедование/vanilla-js-project-coder-jfd/src/templates/app.ts) — the main application markup
- [`src/modules/theme.ts`](/Users/alyona/Desktop/Советирование/vanilla-js-project-coder-jfd/src/modules/theme.ts) — theme logic
- [`src/modules/language.ts`](/Users/alyona/Desktop/Советирование/vanilla-js-project-coder-jfd/src/modules/language.ts) — language switching
- [`src/modules/menu.ts`](/Users/alyona/Desktop/Советирование/vanilla-js-project-coder-jfd/src/modules/menu.ts) — profile menu
- [`src/modules/burger.ts`](/Users/alyona/Desktop/Собедование/vanilla-js-project-coder-jfd/src/modules/burger.ts) — sidebar operation
- [`src/modules/news.ts`](/Users/alyona/Desktop/Собедование/vanilla-js-project-coder-jfd/src/modules/news.ts) — news loading
- [`src/modules/selectable-groups.ts`](/Users/alyona/Desktop/Собедование/vanilla-js-project-coder-jfd/src/modules/selectable-groups.ts) — group active states
- [`src/scss/main.scss`](/Users/alyona/Desktop/Собедование/vanilla-js-project-coder-jfd/src/scss/main.scss) — entry point for all styles

## Launch

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## What's already implemented

- Light and dark themes
- Adaptive support for desktop, tablet, and mobile
- Content localization into Ukrainian and Russian
- Interactive states of interface elements
- News cards and additional content blocks

## Additional work completed

- Refactored the project to a `mobile-first` approach
- Implemented the sidebar menu
- Added a close icon for the sidebar on mobile
- Added closing the sidebar by clicking outside the panel
- Added closing the profile menu by clicking outside the panel
- Implemented theme switching
- Implemented language switching
- Added pagination / progressive loading for extra news
- Added horizontal scrolling for additional news cards
- Added `hover` and `active` states for interactive UI elements
- Added arrow rotation for the `More` button open/close state

## Note

The project uses `Sass @import`, so warnings about deprecated syntax may appear during build. This does not affect the current operation of the application.

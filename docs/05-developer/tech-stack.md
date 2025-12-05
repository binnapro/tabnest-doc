---
sidebar_position: 2
title: Technology Stack
---

# Technology Stack

## Core Dependencies

### React Ecosystem
- **react@19.1.1** - UI framework
- **react-dom@19.1.1** - DOM rendering
- **react-i18next@16.3.5** - Internationalization

### State Management
- **zustand@5.0.8** - Lightweight global state

### UI & Styling
- **tailwindcss@4.1.17** - Utility CSS
- **antd@6.0.0** - Component library
- **@ant-design/icons@6.1.0** - Icon library
- **@emoji-mart/react@1.1.1** - Emoji picker

### Drag & Drop
- **@dnd-kit/core@6.3.1** - Base DnD
- **@dnd-kit/sortable@10.0.0** - Sortable lists

### Development Tools
- **wxt@0.20.6** - Extension framework
- **typescript@5.9.2** - Type checking
- **vite** - Build tool (via WXT)

### Internationalization
- **i18next@25.6.3** - i18n framework
- **react-i18next@16.3.5** - React integration

## Browser APIs Used

- Chrome Storage API
- Chrome Tabs API
- Chrome Tab Groups API
- Chrome Icons API
- Fetch API
- IndexedDB (optional)

## Build & Deploy

- **WXT**: Extension framework
- **Vite**: Module bundler
- **GitHub Actions**: CI/CD
- **GitHub Pages**: Documentation hosting

## Code Quality

- TypeScript for type safety
- ESLint for code style
- Prettier for formatting (optional)
- Pre-commit hooks for validation

## Testing

- Jest (configuration ready)
- React Testing Library
- Mock browser APIs

## Performance Optimizations

- Code splitting via WXT
- Lazy loading components
- Efficient state selectors
- Debounced operations

## Browser Support

- Chrome 90+
- Edge 90+
- Brave, Opera (Chromium-based)
- Firefox (future)

---
sidebar_position: 1
title: Architecture Overview
---

# TabNest Architecture

## System Overview

TabNest is a Chrome Extension built with modern web technologies following a modular, component-based architecture.

### Technology Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4 + Ant Design 6
- **State Management**: Zustand
- **Build Tool**: WXT (Web Extension Tools)
- **Internationalization**: i18next
- **Drag & Drop**: @dnd-kit

### Architecture Pattern

```
┌─────────────────────────────────────┐
│   Browser Extension Manifest        │
│  (Permissions, Content Security)    │
└────────┬────────────────────────────┘
         │
         ├──────────────────────────────────┐
         │                                  │
    ┌────▼─────┐                    ┌──────▼──────┐
    │ Dashboard│                    │  Background │
    │  Entry   │                    │ Service Wkr │
    │ (React)  │                    │   (Events)  │
    └────┬─────┘                    └─────────────┘
         │
         ├─────────────────────┐
         │                     │
    ┌────▼─────────┐   ┌──────▼──────────┐
    │   UI Layer   │   │ State Management│
    │ Components   │   │  (Zustand)     │
    │              │   │                 │
    │ - Dashboard  │   │ - appStore      │
    │ - Settings   │   │ - aiOptimize    │
    │ - SpaceSide  │   │                 │
    └──────┬───────┘   └────────┬────────┘
           │                    │
           └────────┬───────────┘
                    │
             ┌──────▼──────────┐
             │ Storage Layer   │
             │ (Chrome API)    │
             │                 │
             │ - Chrome.storage│
             │ - Cloud Sync    │
             └─────────────────┘
```

## Key Components

### 1. Dashboard Entry Point
- Main UI for managing Spaces and Tabs
- React component tree
- All user interactions

### 2. Zustand Store
- Global state management
- Persisted to Chrome Storage
- Middleware for auto-sync

### 3. AI Provider System
- Pluggable provider architecture
- Support for multiple LLMs
- Stream-based responses

### 4. Cloud Sync
- GitHub Gist integration
- WebDAV support
- Auto-sync middleware

### 5. UI Components
- Modular React components
- Dark mode support
- Responsive design

## Data Flow

```
User Interaction
      │
      ▼
UI Component
      │
      ▼
Zustand Action
      │
      ▼
State Update
      │
      ├──▶ UI Re-render
      │
      └──▶ Chrome Storage
            │
            ▼
         Cloud Sync
```

## Type System

Complete TypeScript definitions for:
- Spaces and TabGroups
- TabItems and Settings
- AI Provider configs
- Sync states

## Performance Considerations

- Lazy loading of heavy components
- Memoized selectors
- Efficient re-renders
- Debounced sync operations

## Extension Permissions

See wxt.config.ts for:
- storage: Local data persistence
- tabs: Tab management
- tabGroups: Native tab group support
- favicon: Website icons
- WebDAV host permissions

## Development Workflow

1. Run `npm dev` to start development server
2. Load .output/chrome-mv3-dev in `chrome://extensions`
3. Changes hot-reload automatically
4. Use `npm run compile` for type checking

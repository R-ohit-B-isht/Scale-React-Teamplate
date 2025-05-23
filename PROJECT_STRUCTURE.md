# Project Structure

This document outlines the architecture and organization of the My React App project.

## Table of Contents

- [Overview](#overview)
- [Directory Structure](#directory-structure)
- [Feature-Based Organization](#feature-based-organization)
- [Path Aliases](#path-aliases)
- [Component Organization](#component-organization)
- [State Management](#state-management)
- [API Integration](#api-integration)

## Overview

The project follows a feature-based architecture with a focus on modularity, scalability, and maintainability. This approach organizes code by feature rather than by technical role, making it easier to understand and extend the application.

## Directory Structure

```
my-react-app/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, fonts, and other assets
│   ├── components/      # Shared UI components
│   │   └── ErrorFallback.tsx # Error boundary fallback component
│   ├── constants/       # Application constants
│   │   ├── api.ts       # API endpoint constants
│   │   └── routes.ts    # Route path constants
│   ├── context/         # React context providers
│   ├── features/        # Feature-specific code
│   │   └── todos/
│   │       ├── components/
│   │       ├── hooks/
│   │       ├── services/
│   │       └── index.ts
│   ├── guards/          # Route guards
│   │   └── AuthGuard.tsx # Authentication route guard
│   ├── hooks/           # Shared custom hooks
│   ├── layouts/         # Layout components
│   ├── pages/           # Page components
│   │   ├── home/
│   │   │   ├── home.tsx
│   │   │   └── index.tsx
│   │   └── login/
│   │       ├── login.tsx
│   │       ├── login.module.css
│   │       └── index.tsx
│   ├── services/        # API services
│   │   ├── auth/
│   │   ├── todo/
│   │   ├── user/
│   │   └── index.ts
│   ├── store/           # Redux store
│   │   ├── slices/      # Redux slices
│   │   │   └── authSlice.ts
│   │   └── index.ts     # Store configuration
│   ├── styles/          # Global styles
│   │   ├── animations.css
│   │   ├── theme.css
│   │   └── scrollbar.css
│   ├── types/           # TypeScript type definitions
│   │   ├── api.ts       # API response types
│   │   └── auth.ts      # Authentication types
│   ├── utils/           # Utility functions
│   │   ├── axios.ts     # Axios instance with interceptors
│   │   ├── authInit.ts  # Authentication initialization
│   │   ├── queryClient.ts # React Query client configuration
│   │   └── sentry.ts    # Sentry error tracking setup
│   ├── App.tsx          # Main App component
│   ├── index.css        # Global CSS imports
│   └── main.tsx         # Application entry point
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Feature-Based Organization

Features are organized into self-contained modules in the `features/` directory. Each feature contains:

- **components/**: UI components specific to the feature
- **hooks/**: Custom hooks used by the feature
- **services/**: API services related to the feature
- **index.ts**: Public API of the feature

This approach:
- Improves code discoverability
- Reduces coupling between features
- Makes it easier to understand and modify a specific feature
- Facilitates code splitting and lazy loading

## Path Aliases

The project uses path aliases to avoid complex relative import paths:

```typescript
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@components/*": ["./src/components/*"],
      "@context/*": ["./src/context/*"],
      "@features/*": ["./src/features/*"],
      "@hooks/*": ["./src/hooks/*"],
      "@layouts/*": ["./src/layouts/*"],
      "@pages/*": ["./src/pages/*"],
      "@services/*": ["./src/services/*"],
      "@utils/*": ["./src/utils/*"],
      "@assets/*": ["./src/assets/*"]
    }
  }
}
```

This allows for clean imports:

```typescript
// Instead of
import Button from '../../../components/Button';

// Use
import Button from '@components/Button';
```

## Component Organization

Components are organized into several categories:

1. **Page Components** (`pages/`): Top-level components that represent routes in the application.

2. **Layout Components** (`layouts/`): Components that define the structure of pages, such as headers, footers, and navigation.

3. **Feature Components** (`features/*/components/`): Components specific to a feature.

4. **Shared Components** (`components/`): Reusable UI components used across multiple features.

Each component follows a consistent structure:
- Component file (`.tsx`)
- CSS Module file (`.module.css`) for component-specific styles
- Index file for re-exporting (when needed)

## State Management

The application uses a comprehensive approach to state management:

1. **Redux Toolkit**: For global application state that needs to be accessed by many components.
   - `authSlice`: Manages authentication state (user info, token, authentication status)
   - Provides predictable state updates with immutable update patterns
   - Enables time-travel debugging and state persistence

2. **React Context**: For UI-related state that doesn't require Redux complexity.
   - `ThemeContext`: Manages theme preferences
   - Provides simpler API for component-level state sharing

3. **React Query**: For server state management.
   - Handles caching, background updates, and stale data
   - Separates server state from client state
   - Provides loading and error states automatically

4. **Local Component State**: For component-specific state using React's `useState` and `useReducer`.

5. **Custom Hooks**: For encapsulating and reusing stateful logic.
   - `useAuth`: Provides authentication methods and state from Redux
   - `useTheme`: Manages theme state and toggle functionality

## API Integration

API services are organized in the `services/` directory, grouped by domain:

```
services/
├── auth/
│   └── index.ts
├── todo/
│   └── index.ts
├── user/
│   └── index.ts
└── index.ts
```

The application uses Axios for making HTTP requests, configured in `utils/axios.ts`, which handles:
- Base URL configuration
- Authentication headers via interceptors
- Error handling with Sentry integration
- Request/response interceptors

API endpoints are centralized in constants:

```typescript
// constants/api.ts
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    ME: '/auth/me'
  },
  TODOS: {
    BASE: '/todos',
    SINGLE: (id: number) => `/todos/${id}`
  },
  USERS: {
    PROFILE: '/users/profile'
  }
};
```

Example service:

```typescript
// services/auth/index.ts
import { axios } from '@utils/axios';
import { API_ENDPOINTS } from '@constants/api';
import { User, AuthResponse } from '@/types/auth';

export const authService = {
  login: (email: string, password: string) => 
    axios.post<AuthResponse>(API_ENDPOINTS.AUTH.LOGIN, { email, password }),
  
  logout: () => 
    axios.post<{ success: boolean }>(API_ENDPOINTS.AUTH.LOGOUT, {}),
  
  getCurrentUser: () => 
    axios.get<User>(API_ENDPOINTS.AUTH.ME),
};
```

This structure makes it easy to:
- Maintain consistent API endpoint references
- Handle authentication and error tracking automatically
- Integrate with React Query for advanced data fetching capabilities
- Type API responses for better TypeScript integration

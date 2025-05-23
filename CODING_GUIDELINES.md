# React Coding Guidelines

This document outlines the coding guidelines and best practices for React development in the My React App project.

## Table of Contents

- [Best Practices](#best-practices)
- [Separation of Concerns](#separation-of-concerns)
- [Design Patterns](#design-patterns)
- [Code Style](#code-style)
- [Performance Optimization](#performance-optimization)
- [Testing](#testing)

## Best Practices

### Small Components

- Keep components small and focused on a single responsibility
- Aim for components that are under 100 lines of code
- If a component grows too large, consider breaking it down into smaller sub-components
- Use composition to build complex UIs from simple components

### Pages and Presentational Components

- Separate page components from presentational components
- Page components should handle data fetching, state management, and routing
- Presentational components should focus on rendering UI based on props
- This separation makes components more reusable and easier to test

### DRY with Array Mapping

- Avoid repetitive JSX by using array mapping
- Use the map function to render lists of items
- Always provide a unique and stable key prop when mapping arrays
- Extract repeated logic into reusable components or utility functions

## Separation of Concerns

### Custom Hooks

- Extract complex stateful logic into custom hooks
- Follow the "use" prefix naming convention for all hooks
- Keep hooks focused on a specific concern
- Custom hooks should be reusable across multiple components
- Place hooks in a dedicated `/hooks` directory for better organization

### Services

- Isolate API calls and business logic in service modules
- Services should handle data fetching, transformation, and error handling
- Keep services independent of UI components
- Organize services by domain or feature
- Use dependency injection patterns to make services testable

## Design Patterns

### Higher-Order Components (HOC)

- Use HOCs to share behavior between components
- Follow the convention of prefixing HOC names with "with" (e.g., withAuth)
- Keep HOCs focused on a single responsibility
- Compose multiple HOCs using a compose utility function
- Document the props that HOCs inject into wrapped components

### Render Props

- Use render props for sharing code between components
- Prefer render props over HOCs when the shared functionality is more dynamic
- Keep render prop functions pure and focused
- Avoid nesting multiple render props to prevent "callback hell"

### Compound Components

- Use compound components to create flexible and expressive component APIs
- Implement using React.Children or Context API
- Maintain semantic relationship between parent and child components
- Provide clear documentation on how components should be composed

### Memo

- Use React.memo for performance optimization of functional components
- Only memoize components that render often with the same props
- Provide custom comparison functions when necessary
- Be aware of the trade-offs between memoization and re-rendering

### React.Lazy

- Implement code-splitting with React.lazy and Suspense
- Split code at the route level for optimal loading performance
- Use meaningful chunk names for better debugging
- Provide fallback UI during loading

### Context

- Use Context API for global state that many components need to access
- Create separate contexts for different domains (auth, theme, etc.)
- Keep context values focused and minimal
- Provide default values for all contexts
- Consider performance implications of context changes

### Redux Toolkit

- Use Redux Toolkit for global application state
- Create slices with `createSlice` for reducers, actions, and selectors
- Keep state normalized and minimal
- Use the Redux DevTools for debugging
- Implement selectors for accessing state
- Use TypeScript for type-safe actions and state
- Organize slices by domain or feature
- Use thunks or middleware for async operations

### React Query

- Use React Query for server state management
- Separate server state from client state
- Implement query keys following a consistent pattern
- Use query invalidation for data refetching
- Leverage built-in caching and background updates
- Handle loading and error states with React Query hooks
- Implement optimistic updates for better UX

### Keys

- Always use stable, unique keys for dynamic lists
- Avoid using array index as keys unless the list is static
- Use IDs from your data when available
- Generate stable keys when IDs are not available

## Code Style

### Naming Conventions

- Use PascalCase for component names
- Use camelCase for variables, functions, and props
- Use UPPER_SNAKE_CASE for constants
- Use descriptive names that convey purpose and intent
- Prefix boolean props with "is", "has", or "should"

### File Organization

- One component per file
- Name files the same as the component they contain
- Group related files in feature-based directories
- Use index files to simplify imports
- Maintain consistent file structure across the project

### Props

- Destructure props in function parameters
- Use prop-types or TypeScript for type checking
- Provide default props when appropriate
- Keep required props to a minimum
- Document complex props with comments

### State Management

- Keep state as local as possible
- Lift state up only when necessary
- Use Redux for global application state
- Use Context API for UI-related state
- Use React Query for server state
- Follow these guidelines for choosing state management:
  - **Redux**: For global state that affects multiple parts of the app (auth, user preferences)
  - **Context**: For theme, UI state, and component-level shared state
  - **React Query**: For all data fetching, caching, and server state
  - **Local State**: For component-specific state
- Document the state shape and update patterns

## Performance Optimization

### Rendering Optimization

- Use React.memo for pure functional components
### Error Handling

- Use Error Boundaries to catch and handle React component errors
- Implement fallback UI for graceful error recovery
- Integrate Sentry for error tracking and monitoring
- Add context to errors with additional metadata
- Log errors with appropriate severity levels
- Handle API errors consistently with proper user feedback
- Use toast notifications for user-friendly error messages
- Implement retry mechanisms for transient failures
- Test error scenarios thoroughly

- Implement shouldComponentUpdate for class components
- Use the useCallback hook for event handlers
- Use the useMemo hook for expensive calculations
- Avoid anonymous functions in render methods

### Code Splitting

- Split code at the route level
- Use dynamic imports for large dependencies
- Implement lazy loading for components not needed on initial render
- Monitor bundle size with tools like Webpack Bundle Analyzer

### Virtual List

- Use virtualization for long lists (react-window or react-virtualized)
- Only render items that are visible in the viewport
- Implement pagination for large data sets
- Use infinite scrolling for better user experience

## Testing

### Component Testing

- Write tests for all components
- Test component rendering and behavior
- Use React Testing Library for component tests
- Focus on testing from the user's perspective
- Test accessibility features

### Hook Testing

- Test custom hooks with renderHook
- Verify hook behavior and state updates
- Mock dependencies for isolated testing
- Test edge cases and error handling

### Integration Testing

- Write integration tests for component interactions
- Test user flows and feature functionality
- Use mock services for API calls
- Verify that components work together correctly

### End-to-End Testing

- Implement E2E tests for critical user journeys
- Use tools like Cypress or Playwright
- Test in environments that closely match production
- Include accessibility testing in E2E tests

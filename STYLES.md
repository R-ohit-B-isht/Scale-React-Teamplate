# Styling Guide

This document outlines the styling approach, theme system, and CSS organization used in the My React App project.

## Table of Contents

- [Theme System](#theme-system)
- [CSS Organization](#css-organization)
- [CSS Modules](#css-modules)
- [Animations](#animations)
- [Best Practices](#best-practices)

## Theme System

The application uses a CSS variables-based theme system that provides consistent styling across components. The theme variables are defined in `src/styles/theme.css`.

### Color Variables

```css
:root {
  /* Base colors */
  --background: #ffffff;
  --foreground: #1a1a1a;
  
  /* UI element colors */
  --card: #ffffff;
  --card-foreground: #1a1a1a;
  --primary: #0070f3;
  --primary-foreground: #ffffff;
  --secondary: #f5f5f5;
  --secondary-foreground: #1a1a1a;
  --muted: #f5f5f5;
  --muted-foreground: #737373;
  --accent: #f5f5f5;
  --accent-foreground: #1a1a1a;
  --destructive: #ff4d4f;
  --destructive-foreground: #ffffff;
  --border: #e5e5e5;
  
  /* Radius values */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 1rem;
}

/* Dark theme (to be implemented) */
.dark-theme {
  --background: #1a1a1a;
  --foreground: #ffffff;
  /* ... other dark theme variables */
}
```

### Using Theme Variables

Always use theme variables instead of hardcoded values to ensure consistency and support for future theming:

```css
.button {
  background-color: var(--primary);
  color: var(--primary-foreground);
  border-radius: var(--radius-md);
}
```

## CSS Organization

The project organizes CSS in the following structure:

```
src/
├── styles/
│   ├── theme.css       # Theme variables
│   ├── animations.css  # Global animations
│   ├── scrollbar.css   # Custom scrollbar styles
│   └── index.css       # Global styles and imports
├── pages/
│   ├── login/
│   │   └── login.module.css  # Page-specific styles
│   └── home/
│       └── home.module.css   # Page-specific styles
└── components/
    └── ComponentName/
        └── ComponentName.module.css  # Component-specific styles
```

Global styles are imported in `src/index.css`, which is then imported in the application entry point.

## CSS Modules

The project uses CSS Modules for component-specific styling to avoid style conflicts and provide better encapsulation.

### Example Usage

```tsx
// Component.tsx
import styles from './Component.module.css';

const Component = () => {
  return <div className={styles.container}>Content</div>;
};
```

```css
/* Component.module.css */
.container {
  padding: 1rem;
  background-color: var(--card);
}
```

## Animations

Global animations are defined in `src/styles/animations.css` and can be used throughout the application:

```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

To use animations in components:

```css
.element {
  animation: fadeIn 0.3s ease-out forwards;
}
```

## Best Practices

1. **Use Theme Variables**: Always use theme variables for colors, spacing, and other design tokens.

2. **Mobile-First Approach**: Start with mobile styles and use media queries to adapt for larger screens.

3. **Semantic Class Names**: Use meaningful class names based on the purpose rather than appearance.

4. **Avoid !important**: Avoid using `!important` as it breaks the natural cascading of CSS.

5. **Component Isolation**: Keep component styles isolated using CSS Modules.

6. **Consistent Units**: Use `rem` for font sizes and spacing to maintain consistency with user preferences.

7. **Limit Nesting**: Avoid deep nesting of selectors to improve specificity management.

8. **Performance Considerations**:
   - Prefer `transform` and `opacity` for animations
   - Use `will-change` sparingly
   - Avoid expensive properties like `box-shadow` on elements that animate frequently

# My React App

A modern, feature-rich React application built with TypeScript, Vite, and a modular architecture.

## Features

- **Modern Stack**: React 18, TypeScript, Vite for lightning-fast development
- **State Management**: Redux Toolkit for global state, Context API for component-level state
- **Data Fetching**: TanStack React Query for efficient API data management
- **API Integration**: Axios with interceptors for API requests
- **Error Handling**: Sentry integration and React Error Boundaries
- **Modular Architecture**: Feature-based organization for scalability
- **Path Aliases**: Clean imports with `@` prefixed paths
- **Theme System**: Consistent styling with CSS variables
- **Authentication**: Built-in authentication flow with Redux
- **Responsive Design**: Mobile-first approach for all screen sizes

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/my-react-app.git
cd my-react-app

# Install dependencies
npm install
# or
pnpm install

# Start development server
npm run dev
# or
pnpm dev
```

The application will be available at `http://localhost:5173`.

## Project Structure

The project follows a feature-based architecture for better scalability and maintainability. See [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) for detailed information.

## Styling

The application uses a custom theming system with CSS variables and modules. See [STYLES.md](./STYLES.md) for styling guidelines and theme documentation.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

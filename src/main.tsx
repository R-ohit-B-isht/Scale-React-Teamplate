import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import * as Sentry from '@sentry/react';

import './index.css';
import App from '@/App';
import { store } from '@store/index';
import { queryClient } from '@utils/queryClient';
import { initSentry } from '@utils/sentry';
import ErrorFallback from '@components/ErrorFallback';
import { initializeAuth } from '@utils/authInit';

initSentry();
initializeAuth();

const SentryErrorBoundary = Sentry.withErrorBoundary(App, {
  fallback: ({ error, resetError }) => (
    <ErrorFallback error={error as Error} resetErrorBoundary={resetError} />
  ),
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <SentryErrorBoundary />
        </ErrorBoundary>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);

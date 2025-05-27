import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Login from '../login';
import authReducer from '@store/slices/authSlice';

// Create a mock store with initial auth state
const createMockStore = (initialState = {}) => {
  return configureStore({
    reducer: {
      auth: authReducer
    },
    preloadedState: {
      auth: {
        user: null,
        isAuthenticated: false,
        token: null,
        ...initialState
      }
    }
  });
};

// Create a decorator that provides Redux context
const withReduxProvider = (initialState = {}) => (Story: React.ComponentType) => (
  <Provider store={createMockStore(initialState)}>
    <Story />
  </Provider>
);

const meta = {
  title: 'Pages/Login',
  component: Login,
  parameters: {
    layout: 'fullscreen',
    // Skip the global decorators since we're providing our own
    skipReduxProvider: true,
  },
  tags: ['autodocs'],
  decorators: [withReduxProvider()],
} satisfies Meta<typeof Login>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default State',
  parameters: {
    docs: {
      description: {
        story: 'The default state of the login form before any interaction.',
      },
    },
  },
};

export const WithError: Story = {
  name: 'Error State',
  decorators: [
    withReduxProvider({
      error: 'Invalid email or password. Please try again.'
    })
  ],
  parameters: {
    docs: {
      description: {
        story: 'The error state when authentication fails.',
      },
    },
  },
};

export const Loading: Story = {
  name: 'Loading State',
  decorators: [
    withReduxProvider({
      loading: true
    })
  ],
  parameters: {
    docs: {
      description: {
        story: 'The loading state when authentication is in progress.',
      },
    },
  },
};

export const Success: Story = {
  name: 'Success State',
  decorators: [
    withReduxProvider({
      user: { id: 1, email: 'user@example.com' },
      isAuthenticated: true,
      token: 'fake-token-12345'
    })
  ],
  parameters: {
    docs: {
      description: {
        story: 'The success state after successful authentication.',
      },
    },
  },
};

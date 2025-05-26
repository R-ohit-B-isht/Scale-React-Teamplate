import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

const MockHeader = () => (
  <header style={{ background: '#f0f0f0', padding: '1rem', display: 'flex', justifyContent: 'space-between' }}>
    <div>App Logo</div>
    <button>Logout</button>
  </header>
);

const MockLoginForm = () => (
  <div style={{ maxWidth: '400px', margin: '2rem auto', padding: '2rem', border: '1px solid #ddd', borderRadius: '8px' }}>
    <h2>Login</h2>
    <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <input type="email" placeholder="Email" style={{ padding: '0.5rem' }} />
      <input type="password" placeholder="Password" style={{ padding: '0.5rem' }} />
      <button type="submit" style={{ padding: '0.5rem', background: '#0066cc', color: 'white', border: 'none', borderRadius: '4px' }}>
        Login
      </button>
    </form>
  </div>
);

const AppAuthenticationDemo = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {isAuthenticated ? (
        <div className="authenticated-view">
          <MockHeader />
          <main style={{ padding: '2rem' }}>
            <h1>Dashboard</h1>
            <p>Welcome to your dashboard! You are logged in.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
              {[1, 2, 3, 4].map((item) => (
                <div key={item} style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
                  <h3>Card {item}</h3>
                  <p>This is a sample card in the authenticated view.</p>
                </div>
              ))}
            </div>
          </main>
        </div>
      ) : (
        <div className="unauthenticated-view">
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <h1>Welcome to Our App</h1>
            <p>Please login to continue</p>
          </div>
          <MockLoginForm />
        </div>
      )}
    </div>
  );
};

const createMockStore = (isAuthenticated: boolean) => {
  return configureStore({
    reducer: {
      auth: () => ({
        user: isAuthenticated ? { id: 1, email: 'user@example.com', name: 'Test User' } : null,
        isAuthenticated,
        token: isAuthenticated ? 'fake-token' : null
      })
    }
  });
};

const meta: Meta<typeof AppAuthenticationDemo> = {
  title: 'App/AuthenticationDemo',
  component: AppAuthenticationDemo,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Authenticated: Story = {
  decorators: [
    (Story) => (
      <Provider store={createMockStore(true)}>
        <Story />
      </Provider>
    )
  ],
  args: {
    isAuthenticated: true
  }
};

export const Unauthenticated: Story = {
  decorators: [
    (Story) => (
      <Provider store={createMockStore(false)}>
        <Story />
      </Provider>
    )
  ],
  args: {
    isAuthenticated: false
  }
};

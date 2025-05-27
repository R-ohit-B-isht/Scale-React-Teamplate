import React from 'react';
import type { Preview } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '../src/store/index';
import { BrowserRouter } from 'react-router-dom';

// Global Redux provider decorator
const withReduxProvider = (Story: React.ComponentType, context: any) => {
  // Skip Redux provider if explicitly requested
  if (context.parameters && context.parameters.skipReduxProvider === true) {
    console.log('Skipping Redux provider for this story');
    return <Story />;
  }
  
  return (
    <Provider store={store}>
      <Story />
    </Provider>
  );
};

// Global Router decorator
const withRouter = (Story: React.ComponentType, context: any) => {
  // Skip Router if explicitly requested
  if (context.parameters && context.parameters.skipRouter === true) {
    console.log('Skipping Router for this story');
    return <Story />;
  }
  
  return (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  );
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withReduxProvider, withRouter],
};

export default preview;

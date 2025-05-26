import React from 'react';
import type { Preview } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '../src/store/index';
import { BrowserRouter } from 'react-router-dom';

const withReduxProvider = (Story, context) => {
  if (context.parameters.skipReduxProvider) {
    return <Story />;
  }
  
  return (
    <Provider store={store}>
      <Story />
    </Provider>
  );
};

const withRouter = (Story, context) => {
  if (context.title === 'App' || context.parameters.skipRouter) {
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

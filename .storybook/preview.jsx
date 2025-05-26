import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../src/store/index/index';
import { BrowserRouter } from 'react-router-dom';

const withReduxProvider = (Story) => (
  <Provider store={store}>
    <Story />
  </Provider>
);

const withRouter = (Story) => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
);

const preview = {
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

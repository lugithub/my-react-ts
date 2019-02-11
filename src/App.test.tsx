import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './configure-store';
import App from './App';

it('renders without crashing', () => {
  const store = configureStore();
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App title="learn app" />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

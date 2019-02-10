import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App title="my react ts"/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

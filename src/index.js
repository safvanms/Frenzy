import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './features/store';

function Index() {
  return (
    <React.StrictMode>
      <Provider store={store} >
        <App />
      </Provider>
    </React.StrictMode>
  );

}

ReactDOM.render(<Index />, document.getElementById('root'));

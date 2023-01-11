import React from "react";
import { createRoot } from 'react-dom'
import App from './App.js';
import { Provider} from 'react-redux';
import {legacy_createStore as createStore ,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";
import reducers from './reducers'
import './styles.js';

const store= createStore(reducers,compose(applyMiddleware(thunk)));

const reactRoot = createRoot(document.getElementById('root'));

reactRoot.render(
  <Provider store={store}>
    <App />
  </Provider>
)

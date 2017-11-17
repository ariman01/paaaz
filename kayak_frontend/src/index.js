import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistStore } from 'redux-persist'
import { createStore,applyMiddleware } from 'redux';
import index from './reducers/index';
import { Provider } from 'react-redux';
const loggerMiddleware = createLogger();
const store = createStore(
   index,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware

    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('root')
);

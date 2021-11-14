import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";

import App from './App';
import usersReducer from './store/Reducers/usersReducer';
import main from './store/Reducers/mainReducer';
import {Router} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import {createTheme, MuiThemeProvider} from "@material-ui/core";
import history from './history';

import 'react-toastify/dist/ReactToastify.css';

const rootReducer = combineReducers({
    users: usersReducer,
    main: main,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));

const theme = createTheme({
    props: {
        MuiTextField: {
            variant: "outlined",
            fullWidth: true,
        },
    },
});

const app = (
  <Provider store={store}>
      <Router history={history}>
          <MuiThemeProvider theme={theme}>
              <ToastContainer/>
              <App/>
          </MuiThemeProvider>
      </Router>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
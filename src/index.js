import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { combineReducers, createStore , applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import myFirstReducer from "./reducer";
import mySaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({ myFirstReducer });
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);


// Create root and render app using React 18's createRoot API
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// Measure performance if needed
reportWebVitals();
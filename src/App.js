import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Provider, connect } from "react-redux";
import todos from "./components/todos";
import NotFound from "./components/notFound";
import userTodo from './reducers';
import { createStore } from "redux";

import "./App.css";
import 'antd/dist/antd.css';

const store = createStore(
  userTodo,
);

class RootContainerComponent extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ todos }/>
          <Route component={ NotFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}

let RootContainer = connect()(RootContainerComponent);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    )
  }
}

import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';
import Login from './routes/Login';
import { isLogin } from './utils';

function RouterConfig({ history, dispatch }) {
  function redirectToLogin(nextState, replace) {
    if (!isLogin()) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname, nextSearch: location.search },
      });
    }
  }

  function redirectToIndex(nextState, replace) {
    if (isLogin()) {
      replace('/');
    }
  }

  return (
    <Router history={history}>
      <Route path="/" onEnter={redirectToLogin}>
        <IndexRoute component={require("./routes/IndexPage")} />
        <Route path="products" component={require("./routes/Products")} />
        <Route path="products/edit" component={require("./routes/ProductDetail")} />
        <Route path="products/create" component={require("./routes/ProductDetail")} />
      </Route>
      <Route path="/login" component={Login} onEnter={redirectToIndex} />
    </Router>
  );
}

export default RouterConfig;

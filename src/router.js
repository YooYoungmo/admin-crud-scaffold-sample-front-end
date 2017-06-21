import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import Login from './routes/Login';
import { isLogin } from './utils';

function RouterConfig({ history }) {
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
      <Route path="/" component={IndexPage} onEnter={redirectToLogin} />
      <Route path="/login" component={Login} onEnter={redirectToIndex} />
      <Route path="/products" component={Products} />
    </Router>
  );
}

export default RouterConfig;

import React from 'react';
import { Route } from 'react-router';

import App from './components/app';

export default (
  <Route>
    <Route path="/" component={App} />
  </Route>
)

// function requireAuth(nextState, replace) {
//   if (!sessionStorage.jwt){
//     replace({
//       pathname: '/login',
//       // state: {
//       //   nextPathname: nextState.location.pathname
//       // }
//     })
//   }
}

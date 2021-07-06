import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import { Home, Login, Cart, Boss, Page404 } from '../pages';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Home} />
      <MyRoute exact path="/login" component={Login} />
      <MyRoute exact path="/cart" component={Cart} />
      <MyRoute exact path="/boss" component={Boss} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}

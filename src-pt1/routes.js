import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Dash from './components/dash/Dash';
import Wiz from './components/wizard/Wiz';

export default (
  <Switch>
    <Route exact path='/' component={Dash} />
    <Route path='/wizard' component={Wiz} />
  </Switch>
)
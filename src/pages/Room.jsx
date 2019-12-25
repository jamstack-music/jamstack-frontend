import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import Nav from '../components/Nav';

import CurrentPlaying from './CurrentPlaying';
import Members from './Members';
import Search from './Search';
import NotFound from './NotFound';
import Browse from './Browse';

const Room = () => {
  const match = useRouteMatch('/room/:id');

  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path={`${match.url}`} component={CurrentPlaying} />
        <Route path={`${match.url}/members`} component={Members} />
        <Route path={`${match.url}/search`} component={Search} />
        <Route path={`${match.url}/browse`} component={Browse} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default Room;

import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
import Components from './Components';
import Utilities from './Utilities';
import Layout from './UI/Layout';

const Routes = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/components/" component={Components}/>
      <Route path="/utilities/" component={Utilities}/>
      <Route path="*" component={NotFound} />
    </Switch>
  </Layout>
);

export default Routes;

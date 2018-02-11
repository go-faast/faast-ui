import 'faast-ui/style';

import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory'
import { Router } from 'react-router-dom';
import Routes from './routes';

const browserHistory = createHistory()

if (typeof document !== 'undefined') {
  const outlet = document.getElementById('app');

  let Holder;
  window.addEventListener('DOMContentLoaded', () => {
    Holder = require('holderjs');
  });

  const onRouteUpdate = () => {
    window.scrollTo(0, 0);

    if (Holder) {
      Holder.run();
    }
  }

  ReactDOM.render(
    <Router onUpdate={onRouteUpdate} history={browserHistory}>
      <Routes/>
    </Router>,
    outlet
  );
}

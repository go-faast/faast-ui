import React from 'react';
import Helmet from 'react-helmet';
import Footer from './Footer';
import Nav from './Nav';

export default (props) => {
  return (
    <div className="wrapper">
      <Helmet
        titleTemplate="faast-ui - %s"
        title="Custom Bootstrap 4 theme and React component library for faa.st"
        defaultTitle="Custom Bootstrap 4 theme and React component library for faa.st"
        meta={[
            { 'name': 'description', 'content': 'faast-ui - Custom Bootstrap 4 theme and React component library for faa.st' },
            { 'property': 'og:type', 'content': 'article' }
        ]}
      />
      <Nav />
      {props.children}
      <Footer />
    </div>
  );
};

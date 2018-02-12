import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

class Sandbox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container className="content">
        <h1>Sandbox</h1>
        <p>Use this page as a dumping ground while developing and debugging</p>
      </Container>
    );
  }
}
export default Sandbox;

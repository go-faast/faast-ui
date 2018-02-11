import React from 'react';
import { Route, Redirect, Switch, NavLink as RouterNavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';
import ClearfixPage from './ClearfixPage';
import ColorsPage from './ColorsPage';

const ComponentLink = (props) => {
  return (
    <NavItem>
      <NavLink tag={RouterNavLink} to={props.item.to} activeClassName="active">
        {props.item.name}
      </NavLink>
    </NavItem>
  );
};
const propTypes = {
  children: PropTypes.node
};

class Utilities extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navItems: [
        {
          name: 'Colors',
          to: '/utilities/colors/',
          component: ColorsPage
        },
        {
          name: 'Clearfix',
          to: '/utilities/clearfix/',
          component: ClearfixPage
        }
      ]
    };
  }
  render() {
    return (
      <Container className="content">
        <Row>
          <Col md={{ size: 3, order: 2 }}>
            <div className="docs-sidebar mb-3">
              <h5>Utilities</h5>
              <Nav className="flex-column">
                {this.state.navItems.map((item, i) => {
                  return <ComponentLink key={i} item={item} />;
                })}
              </Nav>
            </div>
          </Col>
          <Col md={{ size: 9, order: 1 }}>
            <Switch>
              <Redirect exact from="/utilities/" to="/utilities/colors/" />
              {this.state.navItems.map(({ to, component }, i) => (
                <Route key={i} path={to} component={component}/>
              ))}
            </Switch>
          </Col>
        </Row>
      </Container>
    );
  }
}
Utilities.propTypes = propTypes;
export default Utilities;

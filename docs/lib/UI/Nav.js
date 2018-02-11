import React from 'react';
import { Link, NavLink as RouterNavLink } from 'react-router-dom';
import { NavbarToggler, Container, Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


export default class UINav extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      showNavbar: false
    };
  }
  toggleNavbar(e) {
    e.preventDefault();
    this.setState({
      showNavbar: !this.state.showNavbar
    });
  }
  render() {
    return (
      <Navbar className="header" color="dark" dark expand="md">
        <Container>
          <NavbarBrand className="mr-auto" tag={Link} to="/">faast-ui</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} />
          <Collapse navbar isOpen={this.state.showNavbar}>
            <Nav navbar className="ml-sm-auto">
              <NavItem>
                <NavLink tag={RouterNavLink} to="/components/" activeClassName="active">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RouterNavLink} to="/utilities/">Utilities</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/go-faast/faast-ui">Github</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

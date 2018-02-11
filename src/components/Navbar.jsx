import React from 'react'
import PropTypes from 'prop-types'
import {
  Container, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav
} from 'reactstrap'

const FaastNavbar = ({ isOpen, toggleNavbar, children }) => (
  <Navbar dark color='dark' fixed='top' expand='sm'>
    <Container>
      <NavbarBrand href='/'>Faast UI</NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className='ml-auto' navbar>
          {children}
        </Nav>
      </Collapse>
    </Container>
  </Navbar>
)

FaastNavbar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleNavbar: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(PropTypes.any),
}

FaastNavbar.defaultProps = {
  children: [],
}

export default FaastNavbar

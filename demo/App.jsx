import React from 'react'
import { Navbar } from 'faast-ui'
import { 
  Container, Button,
  NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      isNavbarOpen: false
    }
    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  toggleNavbar() {
    this.setState({
      isNavbarOpen: !this.state.isNavbarOpen,
    })
  }

  render() {
    return (
      <div>
        <Navbar isOpen={this.state.isNavbarOpen} toggleNavbar={this.toggleNavbar}>
          <NavItem>
            <NavLink href='/components/'>Components</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='https://github.com/go-faast/faast-ui'>Github</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Options
            </DropdownToggle>
            <DropdownMenu >
              <DropdownItem>
                Option 1
              </DropdownItem>
              <DropdownItem>
                Option 2
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                Reset
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Navbar>
        <Container>
          <Button color='primary'>primary</Button>{' '}
          <Button color='secondary'>secondary</Button>{' '}
          <Button color='success'>success</Button>{' '}
          <Button color='info'>info</Button>{' '}
          <Button color='warning'>warning</Button>{' '}
          <Button color='danger'>danger</Button>{' '}
          <Button color='link'>link</Button>
        </Container>
      </div>
    )
  }
}

export default App

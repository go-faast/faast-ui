import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect, NavLink as RouterNavLink } from 'react-router-dom';
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';
import LayoutPage from './LayoutPage';
import NavsPage from './NavsPage';
import NavbarPage from './NavbarPage';
import BreadcrumbsPage from './BreadcrumbsPage';
import ButtonsPage from './ButtonsPage';
import ButtonGroupPage from './ButtonGroupPage';
import ButtonDropdownPage from './ButtonDropdownPage';
import DropdownsPage from './DropdownsPage';
import FadePage from './FadePage';
import FormPage from './FormPage';
import InputGroupPage from './InputGroupPage';
import PopoversPage from './PopoversPage';
import ProgressPage from './ProgressPage';
import TooltipsPage from './TooltipsPage';
import BadgePage from './BadgePage';
import MediaPage from './MediaPage';
import ModalsPage from './ModalsPage';
import CardPage from './CardPage';
import TablesPage from './TablesPage';
import PaginationPage from './PaginationPage';
import TabsPage from './TabsPage';
import JumbotronPage from './JumbotronPage';
import AlertsPage from './AlertsPage';
import CollapsePage from './CollapsePage';
import CarouselPage from './CarouselPage';
import ListGroupPage from './ListGroupPage';

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

class Components extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navItems: [
        {
          name: 'Alerts',
          to: '/components/alerts/',
          component: AlertsPage
        },
        {
          name: 'Badge',
          to: '/components/badge/',
          component: BadgePage
        },
        {
          name: 'Breadcrumbs',
          to: '/components/breadcrumbs/',
          component: BreadcrumbsPage
        },
        {
          name: 'Buttons',
          to: '/components/buttons/',
          component: ButtonsPage
        },
        {
          name: 'Button Dropdown',
          to: '/components/button-dropdown/',
          component: ButtonDropdownPage
        },
        {
          name: 'Button Group',
          to: '/components/button-group/',
          component: ButtonGroupPage
        },
        {
          name: 'Card',
          to: '/components/card/',
          component: CardPage
        },
        {
          name: 'Collapse',
          to: '/components/collapse/',
          component: CollapsePage
        },
        {
          name: 'Carousel',
          to: '/components/carousel/',
          component: CarouselPage
        },
        {
          name: 'Dropdowns',
          to: '/components/dropdowns/',
          component: DropdownsPage
        },
        {
          name: 'Fade',
          to: '/components/fade/',
          component: FadePage
        },
        {
          name: 'Form',
          to: '/components/form/',
          component: FormPage
        },
        {
          name: 'Input Group',
          to: '/components/input-group/',
          component: InputGroupPage
        },
        {
          name: 'Jumbotron',
          to: '/components/jumbotron/',
          component: JumbotronPage
        },
        {
          name: 'Layout',
          to: '/components/layout/',
          component: LayoutPage
        },
        {
          name: 'List Group',
          to: '/components/listgroup/',
          component: ListGroupPage
        },
        {
          name: 'Media',
          to: '/components/media/',
          component: MediaPage
        },
        {
          name: 'Modals',
          to: '/components/modals/',
          component: ModalsPage
        },
        {
          name: 'Navbar',
          to: '/components/navbar/',
          component: NavbarPage
        },
        {
          name: 'Navs',
          to: '/components/navs/',
          component: NavsPage
        },
        {
          name: 'Pagination',
          to: '/components/pagination/',
          component: PaginationPage
        },
        {
          name: 'Popovers',
          to: '/components/popovers/',
          component: PopoversPage
        },
        {
          name: 'Progress',
          to: '/components/progress/',
          component: ProgressPage
        },
        {
          name: 'Tables',
          to: '/components/tables/',
          component: TablesPage
        },
        {
          name: 'Tabs',
          to: '/components/tabs/',
          component: TabsPage
        },
        {
          name: 'Tooltips',
          to: '/components/tooltips/',
          component: TooltipsPage
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
              <h5>Components</h5>
              <Nav className="flex-column">
                {this.state.navItems.map((item, i) => {
                  return <ComponentLink key={i} item={item} />;
                })}
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap/issues/13"><small>Additional Components</small></NavLink>
                </NavItem>
              </Nav>
            </div>
          </Col>
          <Col md={{ size: 9, order: 1 }}>
            <Switch>
              <Redirect exact from="/components/" to="/components/alerts/" />
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
Components.propTypes = propTypes;
export default Components;

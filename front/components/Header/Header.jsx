/* jshint esnext: true */
import React from 'react';
import { Navbar, NavBrand, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
import { Grid, Col, Row } from 'react-bootstrap';


class Header extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    const subnav = (
      <Breadcrumb>
        <BreadcrumbItem href="#">
          Home
        </BreadcrumbItem>
        <BreadcrumbItem href="http://getbootstrap.com/components/#breadcrumbs">
          Library
        </BreadcrumbItem>
        <BreadcrumbItem active>
          Data
        </BreadcrumbItem>
      </Breadcrumb>
    );

    return (
      <nav>
        <Navbar inverse toggleNavKey={0}>
          <NavBrand><a href="#">React-Bootstrap</a></NavBrand>
          <Nav right eventKey={0}>
            <NavItem eventKey={1} href="#">Link</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
            <NavDropdown eventKey={3} title="Dropdown"
                        id="collapsible-navbar-dropdown">
              <MenuItem eventKey="1">Action</MenuItem>
              <MenuItem eventKey="2">Another action</MenuItem>
              <MenuItem eventKey="3">Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="4">Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
        <Grid>
          <Col className="container">{subnav}</Col>
        </Grid>
      </nav>
    );
  };
}

export default Header;

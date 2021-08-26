import React, { Component } from "react";
import {
  Collapse,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem
} from "reactstrap";
import { NavLink } from 'react-router-dom'

class Header extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isOpen: false,
  //   };
  // }

  

  render() {
    //destructuring props so we don't have to use this.props every time.
    const {toggle,isOpen} = this.props
    return (
        <Navbar color="success" dark>
          <Container>
            <NavbarBrand className="for-testing" href="/">
              Rock Tinder
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink onClick={toggle} className="nav-link" exact to="/">Home</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink onClick={toggle} className="nav-link" to="/rockindex">Rocks</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink onClick={toggle} className="nav-link" to="/rocknew">Create New Rock</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
    );
  }
}

export default Header;

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
import rockTinderBrand from '../assets/rock-tinder-brand.png'


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
      <header>
        <Navbar color="success" dark>
          <Container>
            <NavbarBrand className="tinder-brand for-testing" href="/">
              <img src={rockTinderBrand}/>
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
      </header>
    );
  }
}

export default Header;

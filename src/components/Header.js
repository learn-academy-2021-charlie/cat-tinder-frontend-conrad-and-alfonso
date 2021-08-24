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
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggle = () => {
    const newOpenState = !this.state.isOpen;
    this.setState({ isOpen: newOpenState });
  };

  render() {
    console.log("toggle state: ", this.state.isOpen);
    return (
      <div>
        <Navbar color="success" dark>
          <Container>
            <NavbarBrand className="for-testing" href="/">
              Rock Tinder
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink onClick={this.toggle} className="nav-link" exact to="/">Home</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink onClick={this.toggle} className="nav-link" to="/rockindex">Rocks</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink onClick={this.toggle} className="nav-link" to="/rocknew">Create New Rock</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Header;

import React, { Component } from "react";
import {
  Collapse,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from "reactstrap";

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
            <NavbarBrand href="/">Rock Tinder</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href="/rockindex">Rocks</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href="/rocknew">Create New Rock</NavLink>
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

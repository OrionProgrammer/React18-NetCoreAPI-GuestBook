import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink
} from "reactstrap";
import {  Link } from "react-router-dom";
import "./menu.css";

export class Menu extends Component {
  static displayName = Menu.name;

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <header>
        <Navbar
            className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
            container
            light
          >
            <NavbarBrand tag={Link} to="/">
              Guest List Book
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse
              className="d-sm-inline-flex flex-sm-row-reverse"
              isOpen={!this.state.collapsed}
              navbar
            >
              <nav className="navbar navbar-expand-sm bg-light navbar-dark">
                <ul className="navbar-nav flex-grow">
                  <NavItem>
                    <NavLink tag={Link} className="text-dark" to="./">
                      Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      tag={Link}
                      className="text-dark"
                      to="/guest-list"
                    >
                      Guest List
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      tag={Link}
                      className="text-dark"
                      to="/guest/add"
                    >
                      New Guest
                    </NavLink>
                  </NavItem>
                </ul>
              </nav>
            </Collapse>
          </Navbar>
      </header>
    );
  }
}

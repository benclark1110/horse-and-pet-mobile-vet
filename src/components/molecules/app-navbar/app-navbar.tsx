import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const NavBar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
      <Navbar color="faded" light>
        <NavbarBrand href="/horse-and-pet-mobile-vet" style={{fontSize: '1.6em'}}>
          Horse & Pet Mobile Vet
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">About Me</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/clients-page">My Clients</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
  );
}

export default NavBar
import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const links = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
];

const NavBar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <Navbar expand="md" className="site-nav sticky-top">
      <NavbarBrand href="#home">Horse & Pet Mobile Vet</NavbarBrand>
      <NavbarToggler onClick={() => setOpen(!open)} />
      <Collapse isOpen={open} navbar>
        <Nav navbar className="ms-auto">
          {links.map((l) => (
            <NavItem key={l.href}>
              <NavLink href={l.href} onClick={() => setOpen(false)}>{l.label}</NavLink>
            </NavItem>
          ))}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavBar;

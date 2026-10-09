import React, { useEffect, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import "./style.css";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

const NavBar: React.FC = () => {
  const [open, setOpen] = useState(false);

  // Keep the scroll offset in sync with the real navbar height.
  useEffect(() => {
    const el = document.querySelector<HTMLElement>(".site-nav");
    if (!el) return;
    const update = () =>
      document.documentElement.style.setProperty(
        "--nav-height",
        `${el.offsetHeight}px`,
      );
    update();
    if (typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Navbar expand="md" dark className="site-nav sticky-top">
      <NavbarBrand href="#home">Horse & Pet Mobile Vet</NavbarBrand>
      <NavbarToggler onClick={() => setOpen(!open)} />
      <Collapse isOpen={open} navbar>
        <Nav navbar className="ms-auto">
          {links.map((l) => (
            <NavItem key={l.href}>
              <NavLink href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavBar;

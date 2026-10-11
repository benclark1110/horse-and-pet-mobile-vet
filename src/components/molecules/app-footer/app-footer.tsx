import React from "react";
import {
  BsFacebook,
  BsTelephoneFill,
  BsFillChatTextFill,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Container } from "reactstrap";
import { contact } from "../../../data/content";
import "./style.css";

const Footer: React.FC = () => (
  <footer id="contact" className="footer">
    <Container>
      <h2>Contact</h2>
      <div className="contact-icons">
        <a href={`tel:${contact.phone}`} aria-label="Call">
          <BsTelephoneFill size={30} />
        </a>
        <a href={`sms:${contact.phone}`} aria-label="Text">
          <BsFillChatTextFill size={30} />
        </a>
        <a
          href={`mailto:${contact.email}?subject=Hi Dr. Sage!`}
          aria-label="Email"
        >
          <MdEmail size={37} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={contact.facebook}
          aria-label="Facebook"
        >
          <BsFacebook size={30} />
        </a>
      </div>
      <p>
        <strong>Hours:</strong> {contact.hours}
      </p>
      <small>© Horse & Pet Mobile Vet</small>
    </Container>
  </footer>
);

export default Footer;

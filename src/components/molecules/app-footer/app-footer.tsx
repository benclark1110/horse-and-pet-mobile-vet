import React from 'react';
import { BsFacebook, BsTelephoneFill, BsFillChatTextFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { contact } from '../../../data/content';

const Footer: React.FC = () => (
  <footer className="footer">
    <div>
      <a href={`tel:${contact.phone}`} aria-label="Call"><BsTelephoneFill size={28} /></a>
      <a href={`sms:${contact.phone}`} aria-label="Text"><BsFillChatTextFill size={28} /></a>
      <a href={`mailto:${contact.email}?subject=Hi Dr. Sage!`} aria-label="Email"><MdEmail size={32} /></a>
      <a target="_blank" href={contact.facebook} rel="noreferrer" aria-label="Facebook"><BsFacebook size={28} /></a>
    </div>
    <small>© Horse & Pet Mobile Vet</small>
  </footer>
);

export default Footer;

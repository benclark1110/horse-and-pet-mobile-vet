import React from 'react';
import { BsFacebook, BsTelephoneFill, BsFillChatTextFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
        <a href="tel:704-231-8993">
          <BsTelephoneFill size={30}/>
        </a>
        <a href="sms:704-231-8993">
          <BsFillChatTextFill size={30}/>
        </a>
        <a href="mailto:docsage@carolina.rr.com?subject=Hi Dr. Sage!">
          <MdEmail size={37}/>
        </a>  
        <a target="_blank" href="https://www.facebook.com/horseandpetmobilevet" rel="noreferrer">
          <BsFacebook size={30}/>
        </a>
    </footer>
  );
}

export default Footer
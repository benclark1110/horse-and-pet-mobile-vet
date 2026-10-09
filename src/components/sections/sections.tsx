import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { BsTelephoneFill, BsFillChatTextFill, BsFacebook } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { aboutImage, contact, gallery, heroImage, services } from '../../data/content';

export const Hero: React.FC = () => (
  <section id="home" className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
    <div className="hero-overlay">
      <h1>Horse & Pet Mobile Vet</h1>
      <p>Veterinary care that comes to you.</p>
      <div className="hero-buttons">
        <a className="btn btn-light btn-lg" href={`tel:${contact.phone}`}>Call</a>
        <a className="btn btn-outline-light btn-lg" href={`sms:${contact.phone}`}>Text</a>
      </div>
    </div>
  </section>
);

export const About: React.FC = () => (
  <section id="about" className="section">
    <Container>
      <h2>Meet Dr. Sage</h2>
      <Row className="align-items-center">
        <Col md={5}>
          <img className="rounded-img" alt="Horse" src={aboutImage} />
        </Col>
        <Col md={7}>
          <p>TODO: Short bio, credentials, and what drew Dr. Sage to mobile veterinary medicine.</p>
        </Col>
      </Row>
    </Container>
  </section>
);

export const Services: React.FC = () => (
  <section id="services" className="section section-alt">
    <Container>
      <h2>Services</h2>
      <Row>
        {services.map((s) => (
          <Col md={6} key={s.title} className="mb-3">
            <div className="card-box">
              <h3>{s.title}</h3>
              <ul>
                {s.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export const Gallery: React.FC = () => (
  <section id="gallery" className="section">
    <Container>
      <h2>Patients & Friends</h2>
      <div className="gallery-grid">
        {gallery.map((g) => (
          <img key={g.src} className="rounded-img" alt={g.alt} src={g.src} loading="lazy" />
        ))}
      </div>
    </Container>
  </section>
);

export const Contact: React.FC = () => (
  <section id="contact" className="section section-alt">
    <Container>
      <h2>Contact</h2>
      <ul className="contact-list">
        <li><BsTelephoneFill /> <a href={`tel:${contact.phone}`}>{contact.phone}</a></li>
        <li><BsFillChatTextFill /> <a href={`sms:${contact.phone}`}>Text us</a></li>
        <li><MdEmail /> <a href={`mailto:${contact.email}?subject=Hi Dr. Sage!`}>{contact.email}</a></li>
        <li><BsFacebook /> <a target="_blank" rel="noreferrer" href={contact.facebook}>Facebook</a></li>
      </ul>
      <p><strong>Service area:</strong> {contact.serviceArea}</p>
      <p><strong>Hours:</strong> {contact.hours}</p>
    </Container>
  </section>
);

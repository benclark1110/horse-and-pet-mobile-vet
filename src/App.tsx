import * as React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { AboutPage, ContactPage, HomePage } from "./pages";
import NavBar from './components/molecules/app-navbar/app-navbar';
import { Container, Row, Col } from "reactstrap";


const App: React.FC = () => {

  return (
    <div>
      <NavBar/>
      <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
      </Container>
    </div>
  );
}

export default App

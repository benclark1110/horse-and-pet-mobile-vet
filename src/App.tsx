import * as React from 'react';
import './App.css';
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";
import { 
  AboutPage, 
  ContactPage, 
  HomePage, 
  ClientsPage 
} from "./pages";
import NavBar from './components/molecules/app-navbar/app-navbar';
import { Container } from "reactstrap";

const App: React.FC = () => {

  return (
      <Container>
        <NavBar/>
        <HashRouter>
          <Routes>
            <Route path="/horse-and-pet-mobile-vet" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/clients-page" element={<ClientsPage />} />
          </Routes>
        </HashRouter>
      </Container>
  );
}

export default App

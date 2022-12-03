import * as React from 'react';
import './App.css';
import {
  BrowserRouter,
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
        <BrowserRouter>
          <Routes>
            <Route path="/horse-and-pet-mobile-vet" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/clients-page" element={<ClientsPage />} />
          </Routes>
        </BrowserRouter>
      </Container>
  );
}

export default App

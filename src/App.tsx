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
import Footer from './components/molecules/app-footer/app-footer';
import { Container } from "reactstrap";

const App: React.FC = () => {

  return (
    <div>
      <Container>
        <NavBar/>
        <BrowserRouter>
          <Routes>
            <Route path="/horse-and-pet-mobile-vet" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/clients" element={<ClientsPage />} />
          </Routes>
        </BrowserRouter>
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default App

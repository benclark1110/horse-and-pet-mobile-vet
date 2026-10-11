import * as React from "react";
import NavBar from "./components/molecules/app-navbar/app-navbar";
import Footer from "./components/molecules/app-footer/app-footer";
import { Hero, About, Services, Gallery } from "./components/sections";

const App: React.FC = () => (
  <>
    <NavBar />
    <main>
      <Hero />
      <About />
      <Services />
      <Gallery />
    </main>
    <Footer />
  </>
);

export default App;

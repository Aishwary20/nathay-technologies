import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hero from "./sections/Hero";
import Aboutp from "./sections/Aboutp";
import Servicesp from "./sections/Servicesp";
import FutureTalentp from "./sections/FutureTalentp";
import Contactp from "./sections/Contactp";

import Navbar from "./components/Navbar";
import Aboutus from "./pages/Aboutus";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";


function Home() {

  return (
    <>
      <Navbar />

      <main>

        <Hero />

        <Aboutp />

        <Servicesp />

        <FutureTalentp />

        <Contactp />

      </main>
    </>
  );
}


function App() {

  return (

    <BrowserRouter>

    <ScrollToTop />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<Aboutus />}
        />

        <Route path="/services" element={<Services />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>

    </BrowserRouter>

  );
}


export default App;
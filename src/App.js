import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

import Contact from "./components/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Services from "./pages/NosServices";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header small={window.location.pathname === "/contact"} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/Nos-Services" element={<Services />} />

          {/* <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/articles" element={<Articles />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

import Contact from "./components/Contact";
import { BrowserRouter, useLocation, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header small={window.location.pathname === "/contact"} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

import Contact from "./components/Contact";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import About from "./pages/About";
import Services from "./pages/Services";
import ChildTasks from "./pages/ChildTasks";
import PasswordPage from "./pages/PasswordPage";

function App() {
  const [password, setPassword] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <Header small={window.location.pathname === "/contact"} />
        <Routes>
          <Route path="*" element={<Main />} />
          <Route path="/" element={<Main />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/password"
            element={<PasswordPage setPassword={setPassword} />}
          />
          <Route
            path="/child-tasks"
            element={
              password === "12345" ? (
                <ChildTasks />
              ) : (
                <Navigate to="/password" />
              )
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

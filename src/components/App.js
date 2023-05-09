import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      {/* Ajoutez d'autres composants ici, par exemple <Section /> et <Footer /> */}
    </div>
  );
}

export default App;

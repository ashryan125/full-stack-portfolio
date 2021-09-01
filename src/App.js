import React from "react";
import "./App.css";
import "./style.css";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Landing></Landing>
      <Nav></Nav>
      <main>
        <About></About>
        <Portfolio></Portfolio>
      </main>
      <Contact></Contact>
    </div>
  );
}

export default App;

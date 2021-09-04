import React from "react";
import "./App.css";
import "./style.css";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from './components/Footer';

function App() {

  
  return (
    <div>
      <Landing/>
      <Nav/>
      <main>
        <About/>
        <Portfolio/>
      </main>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

import React from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Profile />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}

export default App;
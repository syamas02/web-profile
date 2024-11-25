import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>My Personal Website</h1>
      <nav>
        <a href="#profile">About Me</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <header>
    <nav className = "navbar">
        <div className = "max-width">
            <div className = "logo"><a href = "#">igloo </a></div>
            <ul className="menu"/>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Me</a></li>

        </div>
    </nav>
    </header>
  );
}
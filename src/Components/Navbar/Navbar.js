import React from "react";
import { navbarWrapper, navLinks } from "./Navbar.module.css";
import { Link } from "gatsby";

export default function Navbar() {
  return (
    <nav className={navbarWrapper}>
      <ul>
        <li>
          <Link to="/about" className={navLinks}>
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" className={navLinks}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/experience" className={navLinks}>
            Experience
          </Link>
        </li>
        <li>
          <Link to="/contact" className={navLinks}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

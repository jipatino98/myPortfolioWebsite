import React from "react";
import { headerWrapper, homeLogo } from "./Header.module.css";
import { Link } from "gatsby";
import Navbar from "../Navbar/Navbar";

export default function Header() {
  return (
    <header className={headerWrapper}>
      <Link className={homeLogo} to="/">
        jose patino
      </Link>
      <Navbar></Navbar>
    </header>
  );
}

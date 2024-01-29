import React from "react";
import {
  headPhotoImg,
  mainContentWrapper,
  mainTextContent,
  buttonWrapper,
  primaryBtn,
  secondaryBtn,
} from "./HomePage.module.css";
import headPhoto from "../../assets/porfolio-main.png";

export default function HomePage() {
  return (
    <div className={mainContentWrapper}>
      <img
        src={headPhoto}
        alt="Jose Patino sitting on a table, arms crossed and in front of a brown fence"
        className={headPhotoImg}
      />

      <div className={mainTextContent}>
        <h1>
          Hi There,
          <br /> My Name is Jose!
        </h1>

        <p>
          I'm a web developer who loves to build impactful software and running
          the occasional 5K!
        </p>

        <div className={buttonWrapper}>
          <button className={primaryBtn}>Projects</button>
          <button className={secondaryBtn}>Resume</button>
        </div>
      </div>
    </div>
  );
}

export const Head = () => <title>Home Page</title>;

import React from "react";
import {
  headPhotoImg,
  mainContentWrapper,
  mainTextContent,
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
        <h1>Hi There, My Name is Jose!</h1>

        <p>
          I'm a web developer who loves to buld impactful software and running
          the occasional 5K!
        </p>

        <div>
          <button>Projects</button>
          <button>Resume</button>
        </div>
      </div>
    </div>
  );
}

export const Head = () => <title>Home Page</title>;

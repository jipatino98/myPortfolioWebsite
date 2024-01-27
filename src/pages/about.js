import React from "react";
import Layout from "../Components/Layout/Layout";

export default function AboutPage() {
  return (
    <Layout>
      <main>
        <h1>About Me</h1>
        <p>
          Hi there! I'm the proud creator of this site, which I built with
          Gatsby.
        </p>
      </main>
    </Layout>
  );
}

export const Head = () => <title>About</title>;

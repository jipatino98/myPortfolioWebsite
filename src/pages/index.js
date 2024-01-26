import * as React from "react";
import HomePage from "../Components/HomePage/HomePage";
import Layout from "../Components/Layout/Layout";

export default function IndexPage() {
  return (
    <Layout>
      <HomePage></HomePage>
    </Layout>
  );
}
export const Head = () => <title>Home Page</title>;

import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { useState } from "react";
import Router from "next/router";
import { Loader } from "../components/uploadLoader";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const [loading, setloading] = useState(false);

  Router.events.on("routeChangeStart", () => {
    setloading(true);
  });

  Router.events.on("routeChangeComplete", () => {
    setloading(false);
  });

  return (
    <>
      <Head>
        <title>C-Blog (learn and create)</title>
        <link rel="shortcut icon" href="logo.png" type="image/x-icon" />
      </Head>
      {!loading ? (
        <div>
          <Navbar />
          <Component {...pageProps} />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default MyApp;

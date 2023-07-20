import Head from "next/head";
import tw from "twin.macro";
import styled from "styled-components";
import GlobalStyles from '../../styles/GlobalStyles';
import { css } from "styled-components/macro";
// import Hero from "../components/Hero";
import Navbar from "../components/helpers/Navbar";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyles />

      <Navbar />

      
    </div>
  );
}


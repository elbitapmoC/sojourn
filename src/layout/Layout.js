import React from "react";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Container, Background } from "./LayoutStyles";
import { flower } from "../constants/constants";

export const Layout = ({ children }) => {
  return (
    <>
      <Background src={flower.src} alt={flower.alt} />
      <Container>
        <Header />
        <main>{children}</main>
        <Footer />
      </Container>
    </>
  );
};

import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import ComingSoon from "../ComingSoon";
import { Container } from "react-bootstrap";

const PortableKitchen = () => {
  return (
    <>
      <Header />

      <Container
        style={{
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className="titleContainer">Portable Kitchens</div>
        <p>
          This division is involved in outside catering and events management.
          The Portable Kitchens Services include:
          <ul
            style={{
              listStyleType: "disc",
              marginLeft: "40px",
            }}
          >
            <li>Customized menu to preference audience.</li>
            <li>Customized bar</li>
            <li>Tents and décor</li>
          </ul>
        </p>
        <br />
      </Container>
      <Footer />
    </>
  );
};

export default PortableKitchen;

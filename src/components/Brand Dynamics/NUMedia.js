import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import ComingSoon from "../ComingSoon";
import { Container } from "react-bootstrap";

const NUMedia = () => {
  return (
    <>
      <Header />
      <Container
        style={{
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className="titleContainer">NU Media Services</div>
        <p>
          A media production company with mandate to keep the public abreast
          with the underground current affairs. We achieve this through our
          by-monthly magazine Dove Nairobi which was being distributed to more
          than 200 worship places until 2022 before we took a long hiatus to
          strategize. We embark on our news reporting with a digital presence
          across all social media platforms and google search, and an online
          Television in You tube. We also offer media related services to public
          in general media production thus video and photography, commercial
          content production for tv, radio, and social media.
        </p>
        <br />
      </Container>
      <Footer />
    </>
  );
};

export default NUMedia;

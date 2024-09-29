import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import ComingSoon from "../ComingSoon";
import { Container } from "react-bootstrap";

const Fika = () => {
  return (
    <>
      <Header />

      <Container
        style={{
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className="titleContainer">The Koduor Trust</div>
        <p>
          This division is involved in community development and social
          responsibilities.
        </p>
        <ul
          style={{
            listStyleType: "disc",
            marginLeft: "40px",
          }}
        >
          <li>
            Koduor Scholars – seeks to create access to quality and universal
            higher education to families from poor family backgrounds and
            underserved communities like slums and rural areas with priority
            being primary and secondary education. We have eye to opening our
            own educational centers in the very near future.
          </li>
          <li>
            Koduor Leaders - Seeks to offer transformative empowerment through
            holistic coaching and mentorship. Our priority being the most wanted
            youths who are engaging in crime and activities that are causing
            unrest, and prostitutes. Our programs aims to rehabilitate and then
            equip beneficiaries with professional skills to start over a fresh
            life. Our objective is to create leaders to continue our mission to
            the rest of the country.
          </li>
          <li>
            Koduor Health – Seeking to create measures and policies that makes
            it possible for every to have access to quality and universal health
            care services.
          </li>
        </ul>
        <br />
      </Container>

      <Footer />
    </>
  );
};

export default Fika;

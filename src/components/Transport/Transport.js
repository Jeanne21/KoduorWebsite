import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import ComingSoon from "../ComingSoon";
import { Container } from "react-bootstrap";

const Transport = () => {
  return (
    <>
      <Header />

      <Container
        style={{
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className="titleContainer">Transport and Logistics</div>
        <p>
          This division is involved in warehousing, transport, cargo transfer
          services.
          <ul
            style={{
              listStyleType: "disc",
              marginLeft: "40px",
            }}
          >
            <li>
              Fika Safaris – offering a public and adventure transport services.
            </li>
            <li>
              Fika Freight and Forwarding – A parcel delivery company. We offer
              within an hour delivery, same day delivery, and next day delivery.
              We pride of over 100 riders and vehicles within Nairobi.
            </li>
          </ul>
        </p>
        <br />
      </Container>
      <Footer />
    </>
  );
};

export default Transport;

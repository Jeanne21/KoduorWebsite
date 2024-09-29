import React from "react";
import { Container } from "react-bootstrap";

const ComingSoon = () => {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column", // Align items in a column (GIF on top, text below)
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center", // Center the text horizontally
      }}
    >
      <div>
        <iframe
          src="https://gifer.com/embed/G2EH"
          width="480"
          height="360"
          frameBorder="0"
          allowFullScreen
          title="coming-soon-gif"
        ></iframe>
      </div>
      <div>
        <h1>Coming Soon</h1>
      </div>
    </Container>
  );
};

export default ComingSoon;

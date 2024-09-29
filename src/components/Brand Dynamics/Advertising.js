import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Container } from "react-bootstrap";
import "../../styles/Event.css";

const Advertising = () => {
  return (
    <>
      <Header />

      <Container style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
        <div className="titleContainer">
          Brand Centric Dynamics Advertising & Marketing Agency
        </div>
        <div style={{ marginTop: "20px" }}>
          <p>
            At Brand Centric Dynamics, we nurture big ideas and the people who
            have them and then craft live, multi-sensorial brand experiences
            that connect. Authentic, strategic, and interactive, yet anchored in
            your brand. We get you to play and win big in the world of customer
            experience, consumer engagement, and sustainable sales. We pride
            ourselves in experiential marketing. We have a full team of
            communication strategists, creative designers, account managers,
            project managers, and dedicated support to deliver your marketing
            campaign with the care and passion it deserves. With us, you get
            direct sales as you get real-time customer and market insights based
            on your services within your industry.
          </p>
          <p>
            We employ diverse styles for every brand/product that is also
            affected by location and clients’ objectives. Our standard style is
            crowd/audience mobilization over fun.
          </p>
          <h3>Our Services</h3>
          <ol type="lower-roman" style={{ listStyleType: "lower-roman" }}>
            <li>
              <b>
                <i>Experiential Marketing.</i>
              </b>{" "}
              This includes an end to end below and through the line marketing
              strategy.
              <ol style={{ listStyleType: "lower-alpha" }}>
                <li>Product launches and sampling</li>
                <li> Sales and Merchandising</li>
                <li>Consumer promotion</li>
                <li>Road shows and street parades</li>
                <li>
                  SEO, SEM, & Google Ads, Email Marketing, and Social Media
                  Marketing
                </li>
              </ol>
            </li>

            <br />
            <li>
              <b>
                <i>Brand Strategy.</i>
              </b>{" "}
              This includes Discovery & Research, Art & Creative Direction,
              Content Strategy, Brand Positioning
              <ol style={{ listStyleType: "lower-alpha" }}>
                <li>IX/UI design </li>
                <li>Graphic Design & Branding </li>
                <li>Brand Positioning </li>
                <li>Web Development </li>
                <li>Email Marketing </li>
                <li>App Development & Design</li>
              </ol>
            </li>

            <br />
            <li>
              <b>
                <i>Communication.</i>
              </b>{" "}
              This includes Public and international relations, and general CSR
              management research, monitoring and evaluation.
              <ol style={{ listStyleType: "lower-alpha" }}>
                <li>Market Audit </li>
                <li>Analytics & Reporting </li>
                <li>Content Marketing </li>
                <li>Interpretation and translation services </li>
                <li>BPO Call center services</li>
              </ol>
            </li>
          </ol>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Advertising;

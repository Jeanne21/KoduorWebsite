import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import { Container, Col, Row, Card } from "react-bootstrap";
import "../styles/Home.css";
import logistics from "../assets/logistics.jpg";
import events from "../assets/events.jpg";
import investments from "../assets/investments2.png";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [expandedText, setExpandedText] = useState({
    media: false,
    community: false,
  });

  const navigate = useNavigate();

  const toggleText = (section) => {
    setExpandedText((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const handleCardClick = (path) => {
    navigate(path); // Navigate to the specified path when a card is clicked
  };

  return (
    <>
      <Header />
      <div>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={logistics} alt="First slide" />
            <Carousel.Caption>
              <h3>Logistics</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={investments}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Investments</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={events} alt="Third slide" />
            <Carousel.Caption>
              <h3>Events</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Container>
          <div className="centered-text">
            <h2>Koduor And Company Holding Limited</h2>
            <p>
              Koduor And Company Holding Limited is a private owned investment
              company with headquarters in Nairobi. Koduor is an investment
              channel providing investors access to a portfolio of inaccessible,
              quality, diversified investment. Koduor’s mission is to make
              investments in real and tangible business that seek to create a
              platform for nurturing and growing young skills through which
              needy and poor people access mentorship and support to create and
              build extraordinary enterprises. The Koduor and Company Limited’s
              investment are organized into four key verticals
            </p>
          </div>
          <Container className="mt-5">
            <h2 className="text-center mb-4">Our Businesses</h2>
            <Row>
              <Col md={4}>
                <Card
                  className="mb-4 clickable-card"
                  onClick={() => handleCardClick("/brand-dynamics-event")}
                >
                  <Card.Img variant="top" src={logistics} />
                  <Card.Body className="bg-primary text-white">
                    <Card.Title>01</Card.Title>
                    <Card.Text>Brand Centric Dynamics</Card.Text>
                    <Card.Link href="#" className="text-white">
                      Read More
                    </Card.Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card
                  className="mb-4 clickable-card"
                  onClick={() => handleCardClick("/nu-media")}
                >
                  <Card.Img variant="top" src={events} />
                  <Card.Body className="bg-primary text-white">
                    <Card.Title>02</Card.Title>
                    <Card.Text>NU Media</Card.Text>
                    <Card.Link href="#" className="text-white">
                      Read More
                    </Card.Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card
                  className="mb-4 clickable-card"
                  onClick={() => handleCardClick("/fika-innovation")}
                >
                  <Card.Img variant="top" src={investments} />
                  <Card.Body className="bg-primary text-white">
                    <Card.Title>03</Card.Title>
                    <Card.Text>Fika Innovations</Card.Text>
                    <Card.Link href="#" className="text-white">
                      Read More
                    </Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
          <br /> <br />
          <div className="text-columns">
            <div className="column">
              <div className="yellow-rectangle"></div>
              <div className="text-content">
                <h4>Media and Entertainment</h4>
                <p>
                  Koduor and Company Limited has strategically invested in an
                  advertising and marketing consultation agency through Brand
                  Centric Dynamics to enhance its portfolio of services. This
                  investment enables Koduor to offer comprehensive solutions in
                  general media production, ensuring high-quality content
                  creation for various platforms. The Brand Centric Dynamics
                  specializes in advertising and marketing, crafting targeted
                  campaigns that resonate with diverse audiences.
                </p>

                {expandedText.media && (
                  <div>
                    <p>
                      Furthermore, the Brand Centric Dynamics excels in events
                      production, delivering memorable and impactful events
                      tailored to client needs. Their expertise in brand
                      strategy helps businesses define and amplify their
                      identity, creating a strong market presence. Additionally,
                      the focus on business development strategy guides
                      companies in scaling and achieving sustainable growth.
                    </p>
                    <p>
                      By emphasizing a customer-centric approach, Brand Centric
                      Dynamics ensures that every service provided aligns with
                      client objectives, driving success and fostering long-term
                      partnerships. This investment positions Brand Dynamics as
                      a leader in delivering integrated marketing solutions.
                    </p>
                  </div>
                )}
                <a href="#" onClick={() => toggleText("media")}>
                  {expandedText.media ? "Read Less" : "Read More"}
                </a>
              </div>
              <hr />
            </div>

            <div className="column">
              <div className="yellow-rectangle"></div>
              <div className="text-content">
                <h4>Transport and Logistics</h4>
                <p>
                  Koduor recently invested in a diversified transport and
                  logistics portfolio, focusing on three key areas: Fika
                  Warehousing, which includes state-of-the-art storage
                  facilities, providing scalable solutions for businesses to
                  manage their inventory efficiently.Fika Cargo Transport covers
                  an extensive network of road, rail, and sea transport
                  services, ensuring reliable and timely delivery of goods
                  across local and international markets, and Fika Safaris.
                </p>

                {expandedText.transport && (
                  <div>
                    <p>
                      The Company has expanded into passenger transport,
                      offering efficient and safe mobility solutions through a
                      fleet of modern vehicles and transport infrastructure.
                    </p>
                    <p>
                      With the global logistics market growing rapidly, this
                      strategic investment positions Koduor through Fika
                      Innovations to capture substantial returns. The demand for
                      streamlined supply chains and reliable transportation
                      continues to rise, presenting strong revenue potential and
                      long-term growth opportunities.
                    </p>
                  </div>
                )}
                <a href="#" onClick={() => toggleText("transport")}>
                  {expandedText.transport ? "Read Less" : "Read More"}
                </a>
              </div>
              <hr />
            </div>
          </div>
          <div className="text-columns">
            <div className="column">
              <div className="text-content">
                <h4>Portable Kitchens</h4>
                <p>
                  Koduor and Company Limited has ventured into the hospitality
                  sector, focusing on providing top-notch services, innovative
                  production, and expert management. The company offers a wide
                  range of services, including luxurious accommodation, fine
                  dining, and event hosting, and specialized outside catering
                  for corporate and private events. Their outside catering
                  service ensures quality food and professional service,
                  extending their reach beyond the primary facility.
                </p>

                {expandedText.kitchens && (
                  <div>
                    <p>
                      The company’s management team brings years of experience,
                      ensuring efficient operations, excellent customer service,
                      and consistent quality. Koduor’s focus on high standards
                      in both production and service delivery positions it as a
                      leader in the hospitality industry.
                    </p>
                    <p>
                      For investors, this venture presents a promising
                      opportunity, with potential for substantial returns driven
                      by the growing demand for premium hospitality services.
                      The company’s strong brand, coupled with a strategic
                      market approach, ensures long-term profitability and
                      growth.
                    </p>
                  </div>
                )}
                <a href="#" onClick={() => toggleText("kitchens")}>
                  {expandedText.kitchens ? "Read Less" : "Read More"}
                </a>
              </div>
              <hr />
            </div>

            <div className="column">
              <div className="text-content">
                <h4>The Koduor Trust</h4>
                <p>
                  Our investment company is committed to making a positive
                  impact in the communities we serve. Over the years, we have
                  provided academic scholarships to hundreds of deserving
                  students, empowering the next generation through education. We
                  have also been instrumental in the rehabilitation and
                  reintegration of homeless families, helping them regain
                  stability and dignity.
                </p>
                {expandedText.community && (
                  <div>
                    <p>
                      Our leadership development programs have nurtured future
                      leaders, fostering skills that drive both personal and
                      community growth. Additionally, we focus on career
                      empowerment by offering employment opportunities, helping
                      individuals build sustainable futures. This latest CSR
                      initiative continues our tradition of investing in people
                      and creating lasting change.
                    </p>
                  </div>
                )}
                <a href="#" onClick={() => toggleText("community")}>
                  {expandedText.community ? "Read Less" : "Read More"}
                </a>
              </div>
              <hr />
            </div>
          </div>
        </Container>
      </div>

      <Footer />
    </>
  );
};

export default Home;

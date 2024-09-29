import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Container, Card, Carousel } from "react-bootstrap";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "../../styles/Event.css";
/* import image1 from "../../assets/Audio & Visuals/75553037_2664359313610121_4354949125628755968_n.jpg";
import image2 from "../../assets/Courtesy Team";
import image3 from "../../assets/Stage & Trussing";
import image4 from "../../assets/Stage Effects";
import image5 from "../../assets/Transport & Logistics"; */

//Utility function to import all images from a folder
const importAll = (r) => r.keys().map(r);

//Importing images from each folder
const audioVisualImages = importAll(
  require.context("../../assets/Audio & Visuals", false, /\.(png|jpe?g|svg)$/)
);
const stageTrussingImages = importAll(
  require.context("../../assets/Stage & Trussing", false, /\.(png|jpe?g|svg)$/)
);
const usheringImages = importAll(
  require.context("../../assets/Courtesy Team", false, /\.(png|jpe?g|svg)$/)
);
const tentsChairsDecorImages = importAll(
  require.context("../../assets/TentsAndChairs", false, /\.(png|jpe?g|svg)$/)
);

const Event = () => {
  const [openCards, setOpenCards] = useState({});

  const toggleCard = (key) => {
    setOpenCards((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const services = [
    {
      title: "Audio And Visual Equipment",
      description:
        "Are you looking for the best public address system and visual equipment for hire? Brand Dynamics Events is one of the leading Audio and visual service providers in Kenya. We focus on providing unmatched PA sound system and screens & projectors for hire services in Kenya to our clients.",
      images: audioVisualImages,
    },
    {
      title:
        "Stage, Trussing [regular & glass boards], Stage Effects [lights, pyros, smokers, fire machines]",
      description:
        "Brand Dynamics provides stage, trussing & rigging installation services for various venues in Greater Kenya, Uganda, Burundi, and throughout the E.A. Community. Our team has experience in deploying technical live performance solutions with 24/7 support and maintenance services. From small social venues through to arena sized installations, our team have a wealth of experience in the deployment of technical live performance solutions, that provide countless combinations for performance, light, screens, and effects setups, all backed by our 24 / 7 support and maintenance services.",
      images: stageTrussingImages,
    },
    {
      title: "Ushering, Cleaning & Hygiene",
      description:
        "Searching for a courtesy team to hire for an event in EA? Look no further, Brand Dynamics can arrange that for you. We offer affordable usher, security, and cleaning services in Kenya to ensure your guests feel at home.",
      images: usheringImages,
    },
    {
      title: "Tents, Chairs, and Décor",
      description:
        "Our business is to make today's moments memorable tomorrow by providing prime Event Accessories for hire, ranging from Tents, Chairs, Tables, Drapes, Floral arrangements, Cutlery, and Crockery.",
      images: tentsChairsDecorImages,
    },
  ];

  return (
    <>
      <Header />

      <Container style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
        <div style={{ marginBottom: "20px" }}>
          <h1>Brand Dynamics Event & Promotions</h1>
        </div>

        <div>
          <p>
            Brand Dynamics Events offers new event dynamics that creates
            lifetime memories. We provide our clients with the most efficient
            processing of Events Planning. Events Management. Media coverage and
            Production. What we do{" "}
          </p>
          <p>Event Management, We hire:-</p>

          {services.map((service, index) => (
            <Card key={index} style={{ width: "100%", marginBottom: "10px" }}>
              <Card.Body>
                <div
                  onClick={() => toggleCard(index)}
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Card.Title>{service.title}</Card.Title>
                  {openCards[index] ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {openCards[index] && (
                  <>
                    <Card.Text>{service.description}</Card.Text>
                    <Carousel>
                      {service.images.map((image, imgIndex) => (
                        <Carousel.Item key={imgIndex}>
                          <img
                            className="d-block w-100"
                            src={image}
                            alt={`Slide ${imgIndex + 1}`}
                            /* width="100px"
                            height="500px" */
                          />
                        </Carousel.Item>
                      ))}
                    </Carousel>
                  </>
                )}
              </Card.Body>
            </Card>
          ))}
          <p>
            Events Planning and Production. What we do:- We specialize in the
            production, strategic planning, and designing of in-person, virtual,
            and hybrid events.
          </p>
          <p>
            {" "}
            We create and produce conferences, Product Launches activations,
            exhibitions, awards shows, sales meetings, media events, galas,
            employee experiences, and consumer events.
          </p>
          <div style={{ display: "inline", float: "left", marginLeft: "20px" }}>
            <ul style={{ listStyle: "disc" }}>
              <li>Budgeting</li>
              <li>Services/vendor sourcing</li>
              <li>Communication & promotions</li>
              <li>Art & Creative Direction</li>
              <li>Logistics</li>
              <li>Media Production</li>
              <li>Video & photography</li>
            </ul>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default Event;

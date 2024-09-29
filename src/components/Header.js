import React from "react";
import "../styles/Header.css";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import Logo from "../assets/Koduor & Co. Ltd Logo White.png";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" fixed="top" className={`navbar`}>
        <Container>
          <Navbar.Brand href="/">
            <img
              src={Logo}
              width="70"
              height="70"
              className="d-inline-block align-top"
              alt="KC logo"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Item>
                <Dropdown alignRight="true">
                  <Dropdown.Toggle id="brand-dropdown">
                    <span>Media and Entertainment</span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/brand-dynamics-advertising">
                      Brand Centric Dynamics Advertising & Marketing Agency
                    </Dropdown.Item>
                    <Dropdown.Item href="/brand-dynamics-event">
                      Brand Dynamics Event & Promotions
                    </Dropdown.Item>
                    <Dropdown.Item href="/nu-media">NU Media</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Item>
              <div className="navbar-divider">|</div>
              <Nav.Link href="/transport">Transport and Logistics </Nav.Link>
              <div className="navbar-divider">|</div>
              <Nav.Link href="/portable-kitchens">Portable Kitchens</Nav.Link>
              <div className="navbar-divider">|</div>
              <Nav.Link href="/fika-innovation">The Koduor Trust</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

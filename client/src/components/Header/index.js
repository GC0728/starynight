import React from 'react';
import "./style.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/Navbar";
import Navigation from "../Nav";


const Header = () => {
  return (
    <>
      <Navbar className="" bg="warning" fixed="top">
        <Col>
        </Col>
        <Col>
          <Navbar.Text>
            Stary Night
          </Navbar.Text>
        </Col>
        <Col>
          <Navigation />
        </Col>

      </Navbar>
  </>
  );
};

export default Header;
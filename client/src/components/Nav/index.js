import React from "react";
import "./style.css";
import Nav from "react-bootstrap/Nav";

const Navigation = () => {
    return (
        <Nav className="justify-content-end" variant="tabs">
            <Nav.Item>
                <Nav.Link> 
                    Home
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>
                    Login
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>
                    Sign Up
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default Navigation;
import React, { useContext } from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { UserContext } from "../../App";
import "./Header.css";

const Header = () => {
  const { logInUser } = useContext(UserContext);
  const [loggedIn, setLoggedIn] = logInUser;
  const verifyEmail = loggedIn.email;

  const logOutUser = () => {
    const logOutCurrentUser = {
      email: "",
    };
    setLoggedIn(logOutCurrentUser);
  };

  return (
    <Container>
      <Navbar style={{ background: "transparent" }} expand="sm">
        <Navbar.Brand as={Link} to="/">
          BengalRide
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/orders">
              Orders
            </Nav.Link>
            <Nav.Link as={Link} to="/admin">
              Admin
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              Deals
            </Nav.Link>
            <Button
              style={{
                marginRight: "10px",
                padding: "2px",
                backgroundColor: "#FF6E40",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {verifyEmail ? (
                <Nav.Link
                  as={Link}
                  to="/"
                  style={{ color: "white", padding: "0%" }}
                >
                  {loggedIn.displayName}
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/login" style={{ color: "white" }}>
                  Login
                </Nav.Link>
              )}
            </Button>
            {verifyEmail && (
              <Button
                className="button-space-mobile"
                style={{
                  padding: "2px",
                  backgroundColor: "red",
                  border: "none",
                }}
              >
                <Nav.Link
                  onClick={logOutUser}
                  as={Link}
                  to="/"
                  style={{ color: "white" }}
                >
                  Logout
                </Nav.Link>
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;

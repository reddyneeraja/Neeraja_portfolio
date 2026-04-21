import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header_pf() {
  const expand = "sm";

  return (
    <Navbar
      key={expand}
      expand={expand}
      fixed="top"
      className="custom-navbar px-3 py-2 shadow-sm"
    >
      <Container fluid>
        
        <Navbar.Brand href="#home" className="fw-bold brand-text text-white">
          <span>NEERAJA .</span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls={`offcanvasNavbar-expand-${expand}`}
          // className="text-white"
        />

        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
          className="bg-dark text-white w-75 opacity-75"
        >
          <Offcanvas.Header closeButton closeVariant="white">
            <Offcanvas.Title
              id={`offcanvasNavbarLabel-expand-${expand}`}
            ></Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3 nav-links">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#education">Education</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>

             

              {/* <Nav.Link href="#contact" className="hire-btn">
                Hire Me
              </Nav.Link> */}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Header_pf;

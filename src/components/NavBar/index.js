import React, { useEffect, useState } from 'react';
import './styles.scss';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';


const NavBar = () => {

    const location = useLocation(); 
    const [url, setUrl] = useState(null);
    useEffect(() => {
      setUrl(location.pathname);
    }, [location]);

  return (


    <Navbar>
      <Container>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="navbar mx-auto">
            <Nav.Link className={url === "/" ? "navbar__link active" : "navbar__link"} href="/">Home</Nav.Link>
            <NavDropdown title={"Portfolio"} id="nav-dropdown">
              <NavDropdown.Item href="/portfolio/round_belly" id="nav-dropdown-link">Ventre rond</NavDropdown.Item>
              <NavDropdown.Item href="/portfolio/newborn" id="nav-dropdown-link">Nouveau né</NavDropdown.Item>
              <NavDropdown.Item href="/portfolio/baby_6_18_months" id="nav-dropdown-link">Bébé 6 / 18 mois</NavDropdown.Item>
              <NavDropdown.Item href="/portfolio/smash_the_cake" id="nav-dropdown-link">Smash The Cake</NavDropdown.Item>
              <NavDropdown.Item href="/portfolio/family" id="nav-dropdown-link">Famille</NavDropdown.Item>
              <NavDropdown.Item href="/portfolio/lifestyle" id="nav-dropdown-link">Lifestyle</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Les séances" id="nav-dropdown">
              <NavDropdown.Item href="/shooting/round_belly" id="nav-dropdown-link">Ventre rond</NavDropdown.Item>
              <NavDropdown.Item href="/shooting/newborn" id="nav-dropdown-link">Nouveau né</NavDropdown.Item>
              <NavDropdown.Item href="/shooting/baby_6_18_months" id="nav-dropdown-link">Bébé 6 / 18 mois</NavDropdown.Item>
              <NavDropdown.Item href="/shooting/smash_the_cake" id="nav-dropdown-link">Smash The Cake</NavDropdown.Item>
              <NavDropdown.Item href="/shooting/family" id="nav-dropdown-link">Famille</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className={url === "/its_me" ? "navbar__link active" : "navbar__link"} href="/its_me">C'est moi !</Nav.Link>
            <Nav.Link className={url === "/contact" ? "navbar__link active" : "navbar__link"} href="/contact">Contact</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

     

  )};


export default NavBar;

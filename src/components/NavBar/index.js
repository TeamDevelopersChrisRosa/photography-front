import React, { useEffect, useState } from 'react';
import './styles.scss';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { FETCH_ALL_PAGES_OF_PHOTOGRAPHER } from '../../store/actions/visitor';


const NavBar = ({
  FetchPages,
  pages,
}) => {

    const location = useLocation(); 
    const [url, setUrl] = useState(null);
    useEffect(() => {
      setUrl(location.pathname);
    }, [location]);

    const handleFetchPages = () => {
      console.log('fetching pages');
      FetchPages();
    }


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
            <NavDropdown title="Les séances" id="nav-dropdown" onClick={handleFetchPages}>
              {pages.map((page, index) => (
                <NavDropdown.Item key={index} href={`/shooting/${page.slug}`} id="nav-dropdown-link">{page.title}</NavDropdown.Item>
              ))}
            </NavDropdown>
            <Nav.Link className={url === "/its_me" ? "navbar__link active" : "navbar__link"} href="/its_me">C'est moi !</Nav.Link>
            <Nav.Link className={url === "/contact" ? "navbar__link active" : "navbar__link"} href="/contact">Contact</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

     

  )};


export default NavBar;

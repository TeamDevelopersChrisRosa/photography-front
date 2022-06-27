import React, { useEffect, useState } from 'react';
import './styles.scss';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';


const NavBar = ({
  FetchShootingPages,
  shootingPages,
  FetchPortfolioPages,
  portfolioPages,
  getSharedPictures,
  FetchItsMePage,
}) => {

    const location = useLocation(); 
    const [url, setUrl] = useState(null);
    useEffect(() => {
      setUrl(location.pathname);
    }, [location]);

    let navigate = useNavigate();


    const handleFetchShootingPages = () => {
      FetchShootingPages();
    }

    const handleFetchPortfolioPages = () => {
      FetchPortfolioPages();
      getSharedPictures();
    }

    const handleFetchItsMePage = (evt) => {
      evt.preventDefault();
      FetchItsMePage();
      navigate('/its_me');

    }


  return (

    <Navbar>
      <Container>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="navbar mx-auto">
            <Nav.Link className={url === "/" ? "navbar__link active" : "navbar__link"} href="/">Home</Nav.Link>
            <NavDropdown title={"Portfolio"} id="nav-dropdown" onClick={handleFetchPortfolioPages}>
              {portfolioPages.map((page, index) => (
                <NavDropdown.Item key={index} href={`/portfolio/${page.slug}`}>{page.title}</NavDropdown.Item>
              ))}
            </NavDropdown>
            <NavDropdown title="Les séances" id="nav-dropdown" onClick={handleFetchShootingPages}>
              {shootingPages.map((page, index) => (
                <NavDropdown.Item key={index} href={`/shooting/${page.slug}`} id="nav-dropdown-link">{page.nameInMenu}</NavDropdown.Item>
              ))}
            </NavDropdown>
            <Nav.Link className={url === "/its_me" ? "navbar__link active" : "navbar__link"} href="/its_me" onClick={handleFetchItsMePage}>C'est moi !</Nav.Link>
            <Nav.Link className={url === "/contact" ? "navbar__link active" : "navbar__link"} href="/contact">Contact</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

     

  )};


export default NavBar;

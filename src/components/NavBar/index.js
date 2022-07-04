import React, { useEffect, useState } from 'react';
import './styles.scss';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import MediaQuery from 'react-responsive'



const NavBar = ({
  FetchShootingPages,
  shootingPages,
  FetchPortfolioPages,
  portfolioPages,
  getSharedPictures,
  FetchItsMePage,
  isLogged,
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

    const showSettings = (event) => {
      event.preventDefault();
      console.log('coucour');
    }


  return (
    <>
      <MediaQuery minWidth={769}>
        <Navbar>
          <Container>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="navbar mx-auto">
                <Nav.Link className={url === "/" ? "navbar__link active" : "navbar__link"} href="/">Home</Nav.Link>
                <NavDropdown title={"Portfolio"} id="nav-dropdown" onClick={handleFetchPortfolioPages}>
                  {portfolioPages.map((page, index) => (
                    <NavDropdown.Item key={index} href={`/portfolio/${page.slug}`}  id="nav-dropdown-link">{page.nameInMenu}</NavDropdown.Item>
                  ))}
                </NavDropdown>
                <NavDropdown title="Les séances" id="nav-dropdown" onClick={handleFetchShootingPages}>
                  {shootingPages.map((page, index) => (
                    <NavDropdown.Item key={index} href={`/shooting/${page.slug}`} id="nav-dropdown-link">{page.nameInMenu}</NavDropdown.Item>
                  ))}
                </NavDropdown>
                <Nav.Link className={url === "/its_me" ? "navbar__link active" : "navbar__link"} href="/its_me" onClick={handleFetchItsMePage}>C'est moi !</Nav.Link>
                <Nav.Link className={url === "/contact" ? "navbar__link active" : "navbar__link"} href="/contact">Contact</Nav.Link>
                {isLogged &&
                  <Nav.Link className={url === "/dashboard" ? "navbar__link active" : "navbar__link"} href="/dashboard">Tableau de bord</Nav.Link> }
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </MediaQuery>
      
      <MediaQuery maxWidth={768}>
        <div class="dropdown">
          <a class="btn dropdown dropdown__icon" href="#" role="button" id="burgerMenu" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="bi bi-list"></i>
          </a>

          <ul class="dropdown-menu" id="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li><a class="dropdown-item" href="/">Home</a></li>
            <ul> Portfolio
              {portfolioPages.map((page, index) => (
                <li key={index}><a class="dropdown-item" href={`/portfolio/${page.slug}`}>{page.nameInMenu}</a></li>
              ))}
            </ul>
            <ul>
              Les séances
              {shootingPages.map((page, index) => (
                <li key={index}><a class="dropdown-item" href={`/shooting/${page.slug}`}>{page.nameInMenu}</a></li>
              ))}
            </ul>
            <li><a class="dropdown-item" href="/its_me">C'est moi</a></li>
            <li><a class="dropdown-item" href="/contact">Contact</a></li>
            {isLogged &&
                  <li><a class="dropdown-item" href="/dasboard">Tableau de bord</a></li> }
          </ul>
        </div>

        



      </MediaQuery>

    </>

     

  )};


export default NavBar;

import React, { useEffect } from 'react';
import './styles.scss';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import MediaQuery from 'react-responsive'
import { useNavigate } from "react-router-dom";



export const NavBar = ({
  FetchShootingPages,
  shootingPages,
  FetchPortfolioPages,
  portfolioPages,
  getSharedPictures,
  isLogged,
  pathName,
  FetchItsMePage,
  isPhotographer,
  isClient,
}) => {

  // fetch all shooting pages and portfolio pages on firts render
  useEffect(() => {
    FetchShootingPages();
    FetchPortfolioPages();
    getSharedPictures();
  }, [
    FetchShootingPages,
    FetchPortfolioPages,
    getSharedPictures,
  ]);

    let navigate = useNavigate();

    const handleFetchItsMePage = (evt) => {
      evt.preventDefault();
      FetchItsMePage();
      // wait for the page to be fetched
      setTimeout(() => {
        navigate('/its_me');
      }, 300);
    }


  return (
    <>
      <MediaQuery minWidth={769}>
        <Navbar>
          <Container>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="navbar mx-auto">
                <Nav.Link className={pathName === "/" ? "navbar__link active" : "navbar__link"} href="/">Home</Nav.Link>
                <NavDropdown title={"Portfolio"} id="nav-dropdown">
                  {portfolioPages && portfolioPages.map((page, index) => (
                    <NavDropdown.Item key={index} href={`/portfolio/${page.slug}`}  id="nav-dropdown-link">{page.nameInMenu}</NavDropdown.Item>
                  ))}
                </NavDropdown>
                <NavDropdown title="Les séances" id="nav-dropdown">
                  {shootingPages && shootingPages.map((page, index) => (
                    <NavDropdown.Item key={index} href={`/shooting/${page.slug}`} id="nav-dropdown-link">{page.nameInMenu}</NavDropdown.Item>
                  ))}
                </NavDropdown>
                <Nav.Link className={pathName === "/its_me" ? "navbar__link active" : "navbar__link"} onClick={handleFetchItsMePage} href="/its_me">C'est moi !</Nav.Link>
                <Nav.Link className={pathName === "/contact" ? "navbar__link active" : "navbar__link"} href="/contact">Contact</Nav.Link>
                {isLogged && isClient &&
                   <Nav.Link className={pathName === "/dashboard" ? "navbar__link active" : "navbar__link"} href="/dashboard">Tableau de bord</Nav.Link>  }
                {isLogged && isPhotographer &&
                    <Nav.Link className={pathName === "/admin" ? "navbar__link active" : "navbar__link"} href="/admin">Admin</Nav.Link>  }

                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </MediaQuery>
      
      <MediaQuery maxWidth={768}>
        <div className="dropdown">
          {<a className="btn dropdown dropdown__icon" href="/" role="button" id="burgerMenu" data-bs-toggle="dropdown" aria-expanded="false" >
          <i className="bi bi-list"></i>
          </a>}

          <ul className="dropdown-menu" id="dropdown-menu" aria-labelledby="dropdownMenuLink">

            <li><a className="dropdown-item" href="/">Home</a></li>

            <ul className="dropdown-item" > Portfolio
            {portfolioPages && portfolioPages.map((page, index) => (
                <li key={index}><a className="dropdown-item" href={`/portfolio/${page.slug}`}>{page.nameInMenu}</a></li>
              ))}
            </ul>
            
              <ul className="dropdown-item"> Les séances 
              { shootingPages && shootingPages.map((page, index) => (
                <li key={index}><a className="dropdown-item" href={`/shooting/${page.slug}`}>{page.nameInMenu}</a></li>
              ))}
              </ul>
            
            <li><a className="dropdown-item" href="/its_me" onClick={handleFetchItsMePage}>C'est moi</a></li>
            <li><a className="dropdown-item" href="/contact">Contact</a></li>
            {isLogged &&
                  <li><a className="dropdown-item" href="/dasboard">Tableau de bord</a></li> }
          </ul>
        </div>

      </MediaQuery>

    </>

     

  )};



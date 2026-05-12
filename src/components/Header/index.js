import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './index.css';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="portfolio-navbar">
      <div className="container-fluid p-3 header-inner">
        <Navbar.Brand href="#home" className="logo">
          <span className="logo-text">MV</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav p-3" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {['Home', 'About', 'Projects', 'Certificates', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link"
              >
                {item}
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;

import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { store } from './App';
import { Link } from 'react-router-dom';
import { GiWireframeGlobe } from 'react-icons/gi';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function NavScrollExample() {
  const [lang, setLang, menu, SetMenu, slugdata, SetslugData] = useContext(store)
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handleDropdownEnter = () => {
    setDropdownOpen(true);
  };
  const handleDropdownLeave = () => {
    setDropdownOpen(false);
  };
  const handleNavLinkClick = () => {
    // Close the Navbar's collapse when a NavLink is clicked
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse) {
      navbarCollapse.classList.remove('show');
    }
  };
  const handleDropdownSelect = (eventKey, event) => {
    // Close the dropdown when a child item is clicked
    setDropdownOpen(false);
  };
  useEffect(() => {
    axios.get('https://dev10.sbagh.com/api/getMenus')
      .then((response) => { SetMenu(response.data.data) })
  }, [])
  return (
    <>
      {menu &&
        <>
          <Navbar expand="lg" className="navbar-new" sticky='top' >
            <Container >
              {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
              <Navbar.Brand >
                <Link to={'/'}> <img src={"https://dev10.sbagh.com/public/images/site-settings/header-logo/large/" + menu.header_logo.header_logo} />
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0 navbar-scroll-nav" navbarScroll>
                  {menu.menus.map((item) => {
                    return (
                      Array.isArray(item.children) && item.children.length > 0 ? (
                        <NavDropdown
                          id="basic-nav-dropdown"
                          title={lang ? item.menu_name_ar : item.menu_name_en}
                          show={dropdownOpen}
                          onMouseEnter={handleDropdownEnter}
                          onMouseLeave={handleDropdownLeave}
                          onSelect={handleDropdownSelect}>
                          {item.children.map((childItem) => {
                            return (
                              <NavDropdown.Item><Link to={"vehicles/" + childItem.slug} onClick={handleNavLinkClick} >{lang ? childItem.menu_name_ar : childItem.menu_name_en}</Link></NavDropdown.Item>
                            );
                          })}
                        </NavDropdown>
                      ) : (
                        <Nav.Link><Link onClick={handleNavLinkClick} to={"/" + item.slug}>{lang ? item.menu_name_ar : item.menu_name_en}</Link></Nav.Link>
                      )
                    );
                  })}
                </Nav>
                {lang ?
                  <Navbar className='nav-langae-drop-down' >
                    <Nav style={{ display: 'flex', alignItems: 'center' }}>
                      <Nav.Link className='nav-link-glob '>   <GiWireframeGlobe /> </Nav.Link><NavDropdown style={{ padding: '18px 0px' }} title="عربي">
                        <NavDropdown.Item className='nav-links-submenu' onClick={() => { setLang(false); handleNavLinkClick() }} >English</NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                  </Navbar>
                  :
                  <Navbar className='nav-langae-drop-down'>
                    <Nav style={{ display: 'flex', alignItems: 'center' }}>
                      <Nav.Link className='nav-link-glob '>   <GiWireframeGlobe /> </Nav.Link><NavDropdown style={{ padding: '18px 0px' }} title="English">
                        <NavDropdown.Item className='nav-links-submenu' onClick={() => { setLang(true); handleNavLinkClick() }}>Arabic</NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                  </Navbar>
                }
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <ToastContainer />
        </>
      }
    </>
  );
}

export default NavScrollExample;

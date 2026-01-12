import { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { store, } from '../../App';
import { Col, Row } from 'react-bootstrap';
import { GiWireframeGlobe } from 'react-icons/gi'
import axios from 'axios';
import { Link } from 'react-router-dom';



function BasicExample() {
  const [lang, setLang, menu, SetMenu, slugdata, SetslugData] = useContext(store)
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownEnter = () => {
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    setDropdownOpen(false);
  };

  useEffect(() => {
    axios.get('https://dev10.sbagh.com/api/getMenus')
      .then((response) => { SetMenu(response.data.data) })
  }, [])
  return (
    <>
      {menu &&
        <Navbar expand="lg" className="navbar-new" sticky='top' >
          <Container fluid style={{ display: 'flex', justifyContent: 'center' }}>
            <Row style={{ display: 'flex', justifyContent: 'center' }} >
              <Col lg={11} xs={12}>
                <Row>
                  <Col lg={3} className='align-items-center-nav-brand' xs={6} style={{ display: 'flex', alignItems: 'center' }}>
                    <Navbar.Brand >
                      <Link to={'/'}> <img src={"https://dev10.sbagh.com/public/images/site-settings/header-logo/large/" + menu.header_logo.header_logo} />
                      </Link>
                    </Navbar.Brand>
                  </Col>
                  <Col lg={9} xs={4} className='navbar-menus' style={{ display: 'flex', alignItems: 'center', paddingLeft: '0px' }}>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Row>
                        <Col lg={10} className='me-auto-nav-col'>
                          <Nav className="me-auto">
                            {menu.menus.map((item) => {
                              return (
                                Array.isArray(item.children) && item.children.length > 0 ? (
                                  <NavDropdown
                                    id="basic-nav-dropdown"
                                    title={lang ? item.menu_name_ar : item.menu_name_en}
                                    show={dropdownOpen}
                                    onMouseEnter={handleDropdownEnter}
                                    onMouseLeave={handleDropdownLeave}
                                  >
                                    {item.children.map((childItem) => {
                                      return (
                                        <NavDropdown.Item><Link to={"vehicles/" + childItem.slug}>{lang ? childItem.menu_name_ar : childItem.menu_name_en}</Link></NavDropdown.Item>
                                      );
                                    })}
                                  </NavDropdown>
                                ) : (
                                  <Nav.Link><Link to={"/" + item.slug}>{lang ? item.menu_name_ar : item.menu_name_en}</Link></Nav.Link>
                                )
                              );
                            })}
                          </Nav>
                        </Col>
                        <Col  >
                          {lang ?
                            <Navbar style={{ display: 'flex', justifyContent: 'end' }}>
                              <Nav style={{ display: 'flex', alignItems: 'center' }}>
                                <Nav.Link className='nav-link-glob '>   <GiWireframeGlobe /> </Nav.Link><NavDropdown style={{ padding: '18px 0px' }} title="عربي">
                                  <NavDropdown.Item className='nav-links-submenu' onClick={() => setLang(false)} >English</NavDropdown.Item>
                                </NavDropdown>
                              </Nav>
                            </Navbar>
                            :
                            <Navbar style={{ display: 'flex', justifyContent: 'end' }}>
                              <Nav style={{ display: 'flex', alignItems: 'center' }}>
                                <Nav.Link className='nav-link-glob '>   <GiWireframeGlobe /> </Nav.Link><NavDropdown style={{ padding: '18px 0px' }} title="English">
                                  <NavDropdown.Item className='nav-links-submenu' onClick={() => setLang(true)} >Arabic</NavDropdown.Item>
                                </NavDropdown>
                              </Nav>
                            </Navbar>

                          }
                        </Col>
                      </Row>
                    </Navbar.Collapse>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Navbar>

      }



    </>


  )
}

export default BasicExample;
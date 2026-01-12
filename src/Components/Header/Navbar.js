// import { useContext, useEffect, useState } from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { store, } from '../../App';
// import { Col, Row } from 'react-bootstrap';
// import { GiWireframeGlobe } from 'react-icons/gi'
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// function BasicExample() {
//   const [lang, setLang, menu, SetMenu, slugdata, SetslugData] = useContext(store)
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const handleDropdownEnter = () => {
//     setDropdownOpen(true);
//   };

//   const handleDropdownLeave = () => {
//     setDropdownOpen(false);
//   };

//   useEffect(() => {
//     axios.get('https://dev10.sbagh.com/api/getMenus')
//       .then((response) => { SetMenu(response.data.data) })
//   }, [])
//   return (
//     <>
//       {menu &&
//         <Navbar expand="lg" className="navbar-new" sticky='top' >
//           <Container fluid style={{ display: 'flex', justifyContent: 'center' }}>
//             <Row style={{ display: 'flex', justifyContent: 'center' }} >
//               <Col lg={11} xs={12}>
//                 <Row>
//                   <Col lg={3} className='align-items-center-nav-brand' xs={6} style={{ display: 'flex', alignItems: 'center' }}>
//                     <Navbar.Brand >
//                       <Link to={'/'}> <img src={"https://dev10.sbagh.com/public/images/site-settings/header-logo/large/" + menu.header_logo.header_logo} />
//                       </Link>
//                     </Navbar.Brand>
//                   </Col>
//                   <Col lg={9} xs={4} className='navbar-menus' style={{ display: 'flex', alignItems: 'center', paddingLeft: '0px' }}>
//                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                     <Navbar.Collapse id="basic-navbar-nav">
//                       <Row>
//                         <Col lg={10} className='me-auto-nav-col'>
//                           <Nav className="me-auto">
//                             {menu.menus.map((item) => {
//                               return (
//                                 Array.isArray(item.children) && item.children.length > 0 ? (
//                                   <NavDropdown
//                                     id="basic-nav-dropdown"
//                                     title={lang ? item.menu_name_ar : item.menu_name_en}
//                                     show={dropdownOpen}
//                                     onMouseEnter={handleDropdownEnter}
//                                     onMouseLeave={handleDropdownLeave}
//                                   >
//                                     {item.children.map((childItem) => {
//                                       return (
//                                         <NavDropdown.Item><Link to={"vehicles/" + childItem.slug}>{lang ? childItem.menu_name_ar : childItem.menu_name_en}</Link></NavDropdown.Item>
//                                       );
//                                     })}
//                                   </NavDropdown>
//                                 ) : (
//                                   <Nav.Link><Link to={"/" + item.slug}>{lang ? item.menu_name_ar : item.menu_name_en}</Link></Nav.Link>
//                                 )
//                               );
//                             })}
//                           </Nav>
//                         </Col>
//                         <Col  >
//                           {lang ?
//                             <Navbar style={{ display: 'flex', justifyContent: 'end' }}>
//                               <Nav style={{ display: 'flex', alignItems: 'center' }}>
//                                 <Nav.Link className='nav-link-glob '>   <GiWireframeGlobe /> </Nav.Link><NavDropdown style={{ padding: '18px 0px' }} title="عربي">
//                                   <NavDropdown.Item className='nav-links-submenu' onClick={() => setLang(false)} >English</NavDropdown.Item>
//                                 </NavDropdown>
//                               </Nav>
//                             </Navbar>
//                             :
//                             <Navbar style={{ display: 'flex', justifyContent: 'end' }}>
//                               <Nav style={{ display: 'flex', alignItems: 'center' }}>
//                                 <Nav.Link className='nav-link-glob '>   <GiWireframeGlobe /> </Nav.Link><NavDropdown style={{ padding: '18px 0px' }} title="English">
//                                   <NavDropdown.Item className='nav-links-submenu' onClick={() => setLang(true)} >Arabic</NavDropdown.Item>
//                                 </NavDropdown>
//                               </Nav>
//                             </Navbar>

//                           }
//                         </Col>
//                       </Row>
//                     </Navbar.Collapse>
//                   </Col>
//                 </Row>
//               </Col>
//             </Row>
//           </Container>
//         </Navbar> 
//       }
//     </>
//   )
// }

// export default BasicExample;





import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { store, } from '../../App';
import { FaWhatsapp } from 'react-icons/fa'
import { ImMobile } from "react-icons/im";
import { FiMapPin } from "react-icons/fi";
import { GiSteeringWheel } from "react-icons/gi";
import { FaClipboardList } from "react-icons/fa";
import "../../css/Header.css";

export default function BasicExample() {
  // const [lang] = useContext(store);
  const [lang, setLang] = useContext(store);
  const [menuData, setMenuData] = useState(null);
  const [showModels, setShowModels] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileModelsOpen, setMobileModelsOpen] = useState(false);


  useEffect(() => {
    axios
      .get("https://dev10.sbagh.com/api/getMenus")
      .then((res) => setMenuData(res.data.data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100); // adjust threshold if needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  if (!menuData) return null;

  const { menus, header_logo } = menuData;
  const modelsMenu = menus.find((m) => m.id === 3);

  return (
    <header className="site-header">
      {/* ================= TOP BAR ================= */}

      <div className="header-top">
        <div className="container-fluid">
          <div className="top-flex">

            {/* LEFT LINKS (optional) */}
            <ul className="top-nav">
            </ul>

            {/* RIGHT SIDE */}
            <div className="top-right">

              {/* BLACK AREA (CTA) */}
              <ul className="cta-nav">
                <li className="cta">
                  <a href="/">
                    Request a quote
                    <img
                      src="https://www.bestune-oman.com/images/rquest-icon.png"
                      alt=""
                    />
                  </a>
                </li>

                <li className="cta">
                  <a href="/side">
                    Book a Test Drive
                    <GiSteeringWheel size={18} />
                  </a>
                </li>
              </ul>

              {/* GREY AREA (SOCIAL) */}
              <div className="nav-social">
                <a href="https://wa.me/" target="_blank" rel="noreferrer">
                  <FaWhatsapp size={'20px'} />
                </a>
                <a href="/contact-us">
                  <FiMapPin size={'20px'} />
                </a>
                <a href="tel:">
                  <ImMobile size={'20px'} />
                </a>
                <a className="lang-btn" onClick={() => setLang(!lang)}>
                  {lang ? "EN" : "عربي"}
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>


      {/* HEADER BOTTOM */}
      <div className={`header-bottom ${isSticky ? "sticky" : ""}`}>
        <div className="container-fluid header-flex">
          {/* LOGO */}
          <Link to="/" className="logo">
            <img
              src={`https://dev10.sbagh.com/public/images/site-settings/header-logo/large/${header_logo.header_logo}`}
              alt="Bestune"
            />
          </Link>
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span />
            <span />
            <span />
          </button>

          {/* MAIN NAV */}
          <ul className={`main-nav ${mobileMenuOpen ? "open" : ""}`}>
            {menus.map((item) => {
              const isModels = item.id === 3;

              return (
               <li
                  key={item.id}
                  className={isModels ? "mega-menu" : ""}
                  onMouseEnter={!mobileMenuOpen && isModels ? () => setShowModels(true) : undefined}
                  onMouseLeave={!mobileMenuOpen && isModels ? () => setShowModels(false) : undefined}
                >

                  <Link to={`${item.link || item.slug}`} onClick={(e) => {
                    if (isModels && mobileMenuOpen) {
                      e.preventDefault();
                      setMobileModelsOpen(!mobileModelsOpen);
                    }
                  }}>
                    {item.image ? (
                      <img
                        src={`https://dev10.sbagh.com/public/images/menus/large/${item.image}`}
                        alt={item.menu_name_en}
                        className="menu-image"
                      />
                    ) : (
                      lang ? item.menu_name_ar || item.menu_name_en : item.menu_name_en
                    )}
                  </Link>

                  {/* Desktop Mega Menu */}
                  {isModels && showModels && !mobileMenuOpen && (
                    <div className="mega-dropdown">
                      <ul className="model-grid">
                        {modelsMenu.children.map((child) => (
                          <li key={child.id} className="model-card">
                            <Link to={`/vehicles/${child.slug}`}>
                              <figure>
                                <img
                                  src={`https://dev10.sbagh.com/public/images/menus/large/${child.image}`}
                                  alt={child.menu_name_en}
                                />
                                <figcaption>
                                  {lang ? child.menu_name_ar : child.menu_name_en}
                                </figcaption>
                              </figure>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Mobile Collapsible Models */}
                  {isModels && mobileMenuOpen && mobileModelsOpen && (
                    <ul className="mobile-submenu">
                      {modelsMenu.children.map((child) => (
                        <li key={child.id} className="model-card">
                          <Link to={`/vehicles/${child.slug}`}>
                            <figure>
                              <img
                                src={`https://dev10.sbagh.com/public/images/menus/large/${child.image}`}
                                alt={child.menu_name_en}
                              />
                              <figcaption>
                                {lang ? child.menu_name_ar : child.menu_name_en}
                              </figcaption>
                            </figure>
                          </Link>
                        </li>
                      ))}

                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}

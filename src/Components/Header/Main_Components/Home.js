import React, { useContext, useEffect, useState } from 'react';
import { store } from '../../../App';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import Footer from '../../Footer';
import axios from 'axios';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function Home() {
  const [lang, setLang, data] = useContext(store)
  const [home, setHome] = useState()
  useEffect(() => {
    axios.get('https://dev10.sbagh.com/api/getHomePageDataBySlug/home')
      .then((response) => { setHome(response.data.data) })

  }, [])
  return (
    <>
      <Helmet>
        <title>{home && home.seo && home.seo.meta_title}</title>
        <meta name="description" content={home && home.seo && home.seo.meta_description}></meta>
        <meta name="keywords" content={home && home.seo && home.seo.meta_keywords}></meta>
        <link rel="canonical" href={home && home.seo && home.seo.canonical} />
      </Helmet>
      <Carousel>
        {home && home.home_banners.home_banners.map((img) => {
          return (
            <Carousel.Item >
              <img src={"https://dev10.sbagh.com/public/images/gallery/large/" + img.image} width={'100%'} />
            </Carousel.Item>
          )
        })}
      </Carousel>

      {home &&
        <Container fluid className="product-container" style={{ display: 'flex', justifyContent: 'center' }}>
          <Row style={{ display: 'flex', justifyContent: 'center' }}>
            <Col lg={11} >
              <Row style={{ display: 'flex', justifyContent: 'center', width: 'auto' }} >
                {home.foton_products.section_title.map((item) => {
                  return (
                    <>
                      <h3 className='text-center mt-5'>{lang ? item.category_title_ar : item.category_title_en}</h3>
                      <p className='text-center'> {(lang ? parse(item.highlight_ar) : parse(item.highlight_en))}</p>
                    </>
                  )
                })}

                {home.foton_products.products.map((item) => {
                  return (
                    <Col lg={3} md={6} className='testimotionals mb-5'>
                      <Link style={{ textDecoration: 'none' }} to={"vehicles/" + item.slug}>
                        <Card>
                          <div class="layer">
                          </div>
                          <div className='content'>
                            <img src={"https://dev10.sbagh.com/public/images/menus/large/" + item.image} width={'100%'} />

                            <div style={{ minHeight: '90px' }} >
                              {lang ?
                                <h4 className='text-center mt-4'>{item.menu_name_ar}</h4>
                                : item.menu_name_en == "Medium & Heavy Duty Trucks" ?
                                  <>
                                    <h4 className='text-center mt-3' style={{ fontSize: '22px' }}>Medium &</h4>
                                    <h4 className='text-center' style={{ fontSize: '22px' }}>Heavy Duty Trucks</h4>
                                  </>
                                  : <h4 className='text-center mt-3' style={{ fontSize: '22px' }}>{item.menu_name_en}</h4>
                              }
                            </div>
                            <div style={{ minHeight: '130px', padding: '5px' }} >
                              <p className='text-center'>{lang ? item.short_description_ar : item.short_description_en}</p>
                            </div>
                          </div>
                        </Card></Link>
                    </Col>

                  )
                })}
              </Row>
            </Col>
          </Row>
        </Container>

      }
      {home &&
        <Container fluid className='About-page ' style={{ display: 'flex', justifyContent: 'center' }}>

          <Row className='About-page-row ' style={{ display: 'flex', justifyContent: 'center' }}>
            <Col lg={11} style={{ display: 'flex', justifyContent: 'center' }}>
              <Row >

                {home.about_us.section_title.map((item) => {
                  return (
                    <>
                      <h3 className=' text-center mt-5 mb-4'>{lang ? item.category_title_ar : item.category_title_en}</h3>
                      <div className='mb-4'>
                        <p className='about-foton-text' style={{ padding: '0px 60px', fontSize: '14px' }}>{lang ? parse(item.description_ar) : parse(item.description_en)}</p>
                      </div>
                    </>
                  )
                })}
                <Col>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      }
      <Footer />

    </>

  )
}

export default Home

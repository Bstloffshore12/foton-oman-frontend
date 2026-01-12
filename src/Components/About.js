import React, { useContext, useEffect, useState } from 'react'
import { store } from '../App'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from './Footer'
import axios from 'axios'
import parse from 'html-react-parser';

function About() {
    const [lang, setLang, menu, SetMenu, slugdata, SetslugData] = useContext(store)
    const [service, setService] = useState()
    const [aboutpage, SetAboutPage] = useState()
    const [contactData, setContactData] = useState()
    useEffect(() => {
        axios.get('https://dev10.sbagh.com/api/getServicePageDataBySlug/about-us')
            .then(response => { SetAboutPage(response.data.data) })
    }, [])
  return (
    <div>


{aboutpage &&
                            <Container fluid>
                                <Row style={{ width: 'auto' }}>
                                    <Col lg={12} xs={12} style={{ padding: '0px' }}>
                                        <img src='/Images/logo/Medium-Heavy-Duty-Truck-2.jpg' width={'100%'} height={'100%'} />
                                    </Col>
                                </Row>
                                <h3 className='text-center mt-5 mb-5' >{lang ? aboutpage.What_will_i_get_from__foton_service.section_title.category_title_ar : aboutpage.What_will_i_get_from__foton_service.section_title.category_title_en}</h3>
                                <Row style={{ display: 'flex', justifyContent: 'center', width: 'auto' }}>
                                    <Col lg={10} xs={12} style={{ display: 'grid', justifyContent: 'center' }}>
                                        <p>Gulf Great Sands LLC is a reputed name in the Oman market for automotive and equipment trading company, serving as a trusted partner for individuals and businesses seeking quality vehicles and equipment solutions. Our commitment to excellence, a wide range of products, and a customer-centric approach have earned us a solid reputation in the market.</p>
                                        <p>Established in 2016, Gulf Great Sands LLC has a remarkable history of contributing to the growth and development of industries across the region. Our founders, driven by a passion for excellence and a vision for the future, laid the foundation for a company that continues to thrive and innovate.</p>
                                        {/* <p>{lang ?parse(aboutpage.What_will_i_get_from__foton_service.section_title.description_ar) : parse(aboutpage.What_will_i_get_from__foton_service.section_title.description_en)}</p> */}
                                    </Col>
                                    <Col lg={11} className='about-page-card'>
                                        <Row className='mt-5 mb-5 about-page-visoin-mission' >
                                            <Col lg={5} md={5} xs={11}>
                                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8ITpu8VFNEHmYyoEqekij_ktnrOwUcjn2A&usqp=CAU' width={'100%'} />
                                            </Col>
                                            <Col lg={5} md={5} xs={11}>
                                                <div>
                                                    <h6 className='text-center'>{lang ? parse(aboutpage.service_solution_matched_to_fleet_customer.section_title.category_title_ar) : parse(aboutpage.service_solution_matched_to_fleet_customer.section_title.category_title_en)}</h6>
                                                    <p>{lang ? parse(aboutpage.service_solution_matched_to_fleet_customer.section_title.description_ar) : parse(aboutpage.service_solution_matched_to_fleet_customer.section_title.description_en)}</p>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className='about-page-visoin-mission mb-5'>

                                            {lang ? <>
                                            
                                                <Col lg={5} md={5} xs={11} >
                                                <div>
                                                    <ul>
                                                        <h6>قيم</h6>
                                                        <li>نزاهة</li>
                                                        <li>ملكية</li>
                                                        <li>عاطفة</li>
                                                        <li>تفوق</li>
                                                    </ul>
                                                </div>
                                            </Col>
                                            
                                            
                                            
                                            </>
                                            
                                        :
                                        <>


                                            <Col lg={5} md={5} xs={11} >
                                                <div>
                                                    <ul>
                                                        <h6>Values</h6>
                                                        <li>Integrity</li>
                                                        <li>Ownership</li>
                                                        <li>Passion</li>
                                                        <li>Excellence</li>
                                                    </ul>
                                                </div>
                                            </Col>
                                            </>
                                        
                                        }
                                            <Col lg={5} md={5} xs={11}>
                                                <img src='/Images/Card-img/Media/download (1).jpg' />
                                            </Col>
                                        </Row>
                                    </Col>

                                </Row>
                                <h3 className='text-center'>Foton Overview</h3>
                                <p className='text-center'>Driving accelerated development in Commercial Vehicle industry</p>
                                <Row className="Foton-Overview-2" style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Col lg={11}>
                                        <Row className='mb-5 mt-4' style={{ minHeight: '360px' }}>
                                            <Col lg={6} md={6} xs={11}>
                                                <img src='/Images/Card-img/Media/AutoCare.webp' height={'100%'} width={'100%'} />
                                            </Col>
                                            <Col lg={6} md={6} xs={12} className='about-foton-page-down' style={{ display: 'grid', alignItems: 'center' }}>
                                                <div>
                                                    <h3>For Fossile Free Transportation</h3>
                                                    <p>Founded on 28th August, 1996, Foton Motor’s is headquartered in Beijing, China. With a business scope covering a full series of Commercial Vehicles including Light, Medium and Heavy Duty Trucks, as well as Mini Truck, Vans, Pickup, and Construction Vehicles. Foton Motor’s has become one of the leading Commercial Vehicle manufactures in the world. Foton Motor’s has leading new energy technology including electric and hydrogen vehicles.</p>
                                                </div>
                                            </Col>
                                        </Row>
                                        <h3 className='text-center'>Global Foton</h3>
                                        <p className='text-center mb-5'>Striving to be global leading Commercial Vehicle manufacturer</p>
                                        <img className='mb-5' src='/Images/Card-img/Media/globalization-1024x484.webp' width={'100%'} />
                                        <Row className='mb-4 about-page-row'>
                                            <Col lg={3} md={6}>
                                                <div>
                                                    <h5 className='text-center'>10,000,000+</h5>
                                                    <p className='text-center'>Accumulative Sales</p>
                                                </div>
                                            </Col>
                                            <Col lg={3} md={6}>
                                                <div>
                                                    <h5 className='text-center'>2,000+</h5>
                                                    <p className='text-center'>Overseas Network</p>
                                                </div>
                                            </Col>
                                            <Col lg={3} md={6}>
                                                <div>
                                                    <h5 className='text-center'>22+</h5>
                                                    <p className='text-center'>KD Factories</p>
                                                </div>
                                            </Col>
                                            <Col lg={3} md={6}>
                                                <div>
                                                    <h5 className='text-center'>110+</h5>
                                                    <p className='text-center'>Countries Covered </p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                        }
                        <Footer ></Footer>
      
    </div>
  )
}

export default About

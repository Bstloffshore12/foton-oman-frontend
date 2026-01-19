import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { AiOutlineRight, AiTwotoneMail } from 'react-icons/ai'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { IoLocation } from 'react-icons/io5'
import { store } from '../App'
import { Link } from 'react-router-dom'

function Footer() {
    const [lang, setLang] = useContext(store)

    const [footerdata, setFooterData] = useState()

    useEffect(() => {
        axios.get('https://dev10.sbagh.com/api/geFooterData')
            .then(response => { setFooterData(response.data.data) })
    }, [])

    return (
        <>
            {footerdata &&
                <Container fluid className='footer-page '>
                    <Row style={{ width: '100%' }} className='mt-5'>
                        <Col lg={11} md={12}>
                            <Row>
                                <Col lg={3} md={4}  sm={6} xs={12}>
                                    <div className='footer-image-width' style={{ minWidth: '200px' }}>
                                        <div style={{ width: '200px' }}>
                                            <img src='/Images/logo/toton-logo.png' width={'100%'} />
                                        </div>
                                        <div style={{ width: '200px' }}>
                                            <img src='/Images/logo/GGS_white.png' width={'100%'} />
                                        </div>
                                        <p className='mt-3'>{lang ? footerdata.about_foton.content.about_ar : footerdata.about_foton.content.about_en
                                        }</p>
                                    </div>
                                </Col>
                                <Col lg={3}  md={2}  sm={6} xs={12} className='uslink-col' style={{ display: "grid", justifyContent: 'center' }} >
                                    <h6>Useful Links</h6>
                                    <div className="divider mb-4"></div>
                                    {footerdata.usefull_links.content.map((item) => {
                                        return (
                                            <>
                                                <p> <Link style={{textDecoration:'none',color:'white'}} to={"/"+item.slug}><AiOutlineRight />&nbsp;{lang ? item.menu_name_ar : item.menu_name_en}</Link> </p>
                                            </>
                                        )
                                    })}

                                </Col>
                                <Col lg={3}  md={3}  sm={6} xs={12} className='information-col' style={{ display: "grid", justifyContent: 'start', position: 'reltive', left: '3%' }} >
                                    <h6>Contact Information</h6>
                                    <div className="divider mb-4 "></div>
                                    <p><IoLocation />&nbsp;Address pending</p>
                                    <p> <IoLocation />&nbsp;1432 street</p>
                                    <p><BsFillTelephoneFill />&nbsp; 000000000</p>
                                    <p><AiTwotoneMail />&nbsp; foto@gmail.com</p>
                                </Col>
                                <Col lg={3} sm={6}  md={3} xs={12}>
                                    <h6>Follow Us</h6>
                                    <div className="divider  " style={{ marginTop: '20px', marginBottom: '33px' }}></div>
                                    <Row className='footer-icon-row'>
                                        <Col lg={3} md={2} xs={3}>
                                            <FaFacebook size={'25px'} className='icon-footer' />
                                        </Col>
                                        <Col lg={3} md={2} xs={3}>
                                            <FaWhatsapp size={'25px'} className='icon-footer' />
                                        </Col>
                                        <Col lg={3} md={2} xs={3}>
                                            <FaInstagram size={'25px'} className='icon-footer' />
                                        </Col>
                                        <Col lg={3} md={2} xs={3}>
                                            <FaLinkedin size={'25px'} className='icon-footer' />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <hr className=' mt-3 mb-3'></hr>
                        <Col lg={11} className='mb-4' style={{ display: 'grid', justifyContent: 'start' }}>
                            <p className='text-end ' style={{ fontSize: '10px' }}>Copyright © All rights reserved</p>
                        </Col>
                    </Row>
                </Container>
            }

        </>
    )
}

export default Footer

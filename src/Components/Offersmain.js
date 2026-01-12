import React from 'react'
import { Col, Container, Row,Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import { FcCalendar } from 'react-icons/fc'

function Offersmain() {
  return (
    <div>

      
       <Container className='offer-page' fluid>
                            <Row style={{ display: 'flex', justifyContent: 'center' }}>
                                <Col lg={11}>
                                    <h3 className='mt-5  text-center'>OFFERS</h3>
                                    <p className='text-center'>Explore the latest offers on  Foton</p>
                                    <Row className='inside-page-card-row-offer'>
                                        <Col lg={4} className=' inside-page-card' >
                                            <Card>
                                                <img src='/Images/Card-img/Media/Get-Your-Business-Moving-with-the-FOTON-AUMARK-S-2022.webp' width={'100%'} />
                                                <h5 className='text-center mt-4 mb-4'>Get Your Business Moving with the FOTON AUMARK S 2022</h5>
                                                <div className='hr-div'>
                                                    <hr style={{ width: '80%' }}></hr>
                                                </div>
                                                <div className=' inside-p-div'>
                                                    <p >Are you ready to take your business to the next level? With the FOTON AUMARK S 2022, you’ll get reliable performance and top-notch quality backed by a 4-year or 300,000 km warranty</p>
                                                </div>
                                                <p className='text-center'><FcCalendar size={'20px'} />&nbsp; The offer validity is until stocks last</p>
                                                <div className='inside-detail-btn' >
                                                    <p > <Link to="/offer">VIEW OFFERS</Link></p>
                                                </div>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                        <Footer />
      
    </div>
  )
}

export default Offersmain

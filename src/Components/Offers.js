import React from 'react'
import { Container, Row ,Col} from 'react-bootstrap'
import SlideShow2 from '../Offercrousel'
import OfferEnquiryForm from './Offerform'
import { FcCalendar } from 'react-icons/fc'

function Offers() {
  return (
    <div>
        <h3 className='text-center mt-5 mb-5'>OUR OFFERS</h3>
        <Container fluid className='offer-page'>
            <Row className='mb-5' style={{width:'auto'}}>
                <Col lg={12} className='offer-page-col' >
                    <Row>
                        <Col lg={8}>
                            <SlideShow2/>
                        </Col>
                        <Col lg={4}>
                            <OfferEnquiryForm/>
                        </Col>
                        <Col lg={8}>
                        <div className='mt-5 mb-3'>
                                <p>Are you ready to take your business to the next level? With the FOTON AUMARK S 2022, you’ll get reliable performance and top-notch quality backed by a 4-year or 300,000 km warranty (whichever comes first) and free periodical maintenance services for the 10,000 km, 20,000 km & 30,000 km.
Don’t miss out on this limited time offer – get your business moving today with the FOTON AUMARK S 2022!</p>
<h3 className='text-start'><FcCalendar size={'20px'} />&nbsp; The offer validity is until stocks last</h3>

                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
      
    </div>
  )
}

export default Offers

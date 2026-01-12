import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaPhone } from 'react-icons/fa'
import Footer from './Footer'
import { IoLocationSharp } from 'react-icons/io5'
import { GrMail } from 'react-icons/gr'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        message: '',
        subject: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        let config = {
            method: 'post',
            url: 'https://dev10.sbagh.com/api/saveTheContactUsDetails',
            data: formData
        };
        axios.request(config)
            .then((response) => {
                toast.success("Your request has been submitted. we will contact you soon");
                setFormData({
                    first_name: '',
                    last_name: '',
                    email: '',
                    phone: '',
                    message: '',
                    subject: ''
                })
            })
            .catch((error) => {
                var response = error.response.data.data;
                Object.keys(response).forEach((field) => {
                    response[field].forEach((error) => {
                        toast.error(`${error}`);
                    });
                });
            });



    };
  return (
    <div>
         <Container fluid className='contact-page'>
                            <Row className='contact-page-first-row' style={{ display: 'flex', justifyContent: 'center' }}>
                                <Col lg={11} xs={11} >
                                    <h3 className='text-center mt-5' style={{ color: 'black', fontWeight: '600' }}>Contact Us</h3>
                                    <Row className='mt-5 contact-page-row' >
                                        <Col lg={8} xs={11}>
                                            <Form onSubmit={handleSubmit} className='contac-form-page'>
                                                <Row>
                                                    <Col lg={6}>
                                                        <Form.Group controlId="first_name">
                                                            <Form.Control
                                                                type="text"
                                                                name="first_name"
                                                                value={formData.first_name}
                                                                onChange={handleChange}
                                                                placeholder='First Name *'
                                                                className='mb-3 mt-3'
                                                            />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <Form.Group controlId="last_name">
                                                            <Form.Control
                                                                type="text"
                                                                name="last_name"
                                                                value={formData.last_name}
                                                                onChange={handleChange}
                                                                placeholder='Last Name '
                                                                className='mb-3 mt-3'
                                                            />
                                                        </Form.Group>
                                                    </Col>

                                                    <Col lg={6}>
                                                        <Form.Group controlId="email">
                                                            <Form.Control
                                                                type="text"
                                                                name="email"
                                                                value={formData.email}
                                                                onChange={handleChange}
                                                                placeholder='Email *'
                                                                className='mb-3 mt-3'
                                                            />
                                                        </Form.Group>
                                                    </Col>

                                                    <Col lg={6}>
                                                        <Form.Group controlId="phone">
                                                            <Form.Control
                                                                type="text"
                                                                name="phone"
                                                                value={formData.phone}
                                                                onChange={handleChange}
                                                                placeholder='Contact Nymber *'
                                                                className='mb-3 mt-3'
                                                            />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg={12}>
                                                        <Form.Group controlId="subject">
                                                            <Form.Control
                                                                type="text"
                                                                name="subject"
                                                                value={formData.subject}
                                                                onChange={handleChange}
                                                                placeholder='Subject'
                                                                className='mb-3 mt-3'
                                                            />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg={12}>
                                                        <Form.Group controlId="message">
                                                            <Form.Control
                                                                type="text"
                                                                name="message"
                                                                value={formData.message}
                                                                onChange={handleChange}
                                                                placeholder='Your Message'
                                                                className='mb-2 mt-2'
                                                            />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg={12} className='mt-3 mb-3'>
                                                        <Button variant="primary" type="submit" style={{ width: '100%', height: '40px' }}>
                                                            Submit
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </Col>
                                        <Col lg={4} xs={11} className='row-info-col-6'>
                                            <div style={{ position: 'relative', top: '5%' }}>
                                                <h5 className='text-center mb-5' style={{ color: 'black' }}>Contact-Info</h5>
                                                <Row style={{ width: 'auto' }}>
                                                    <Col lg={12} xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                                        <Row style={{ width: 'auto' }}>
                                                            <Col lg={3} xs={3} style={{ paddingLeft: '4px' }}>
                                                                <div className='icon-square'>
                                                                    <IoLocationSharp className='icon-square-icon' />
                                                                </div>
                                                            </Col>
                                                            <Col lg={9} xs={9} className=' mb-5'>
                                                                <div className='mt-3'>
                                                                    <p>000 -streets near </p>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Col>

                                                    <Col lg={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                                        <Row style={{ width: 'auto' }}>
                                                            <Col lg={3} xs={3} style={{ paddingLeft: '4px' }} >
                                                                <div className='icon-square'>
                                                                    <FaPhone className='icon-square-icon' />
                                                                </div>
                                                            </Col>
                                                            <Col lg={9} xs={9} className=' mb-5'>
                                                                <div className='mt-3'>

                                                                    <p >+968 234523455</p>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Col>

                                                    <Col lg={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                                        <Row style={{ width: 'auto' }}>
                                                            <Col lg={3} xs={3} style={{ paddingLeft: '4px' }} >
                                                                <div className='icon-square'>
                                                                    <GrMail className='icon-square-icon' />
                                                                </div>
                                                            </Col>
                                                            <Col lg={9} xs={9} className='mb-5'>
                                                                <div className='mt-3'>

                                                                    <p>foton@gmail.com</p>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>

                                    </Row>

                                    <iframe
                                        className='mt-5 mb-5'
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30447.23017960254!2d78.35578839004577!3d17.464319227680644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93d21890d033%3A0xf92b201716dc5861!2sKothaguda%2C%20Telangana!5e0!3m2!1sen!2sin!4v1699864897214!5m2!1sen!2sin"
                                        width="100%" height="450"
                                        allowfullscreen="" loading="lazy"
                                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </Col>
                            </Row>
                        </Container>
                        <Footer />

      
    </div>
  )
}

export default Contact

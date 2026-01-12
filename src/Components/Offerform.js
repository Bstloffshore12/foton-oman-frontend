import axios from 'axios';
import React, {useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'; // Import Bootstrap components
import { apiUrl } from './Constants';

const OfferEnquiryForm = () => {

  const[formData,setFormData]=useState({
    first_name:'',
    last_name:'',
    email:'',
    phone_number:'',
    message:''

  })

const[dataform,setDataform]=useState()
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

const handleSubmit = (event) =>{
  event.preventDefault();
    axios.post(apiUrl+'saveTheOfferEnquiryDetails',formData)
    .then(response => setDataform(response.data))
    .catch((error) => {
      console.error('Error submitting the form', error);
    });
}

console.log(dataform)
  return (
    <Container fluid style={{height:'100%'}}>
      <Row style={{width:'auto',height:'100%'}}>  
        <Col lg={12} style={{paddingBottom:'5px'}} >
          <Form onSubmit={handleSubmit} style={{height:'100%',paddingBottom:'10px'}}>
          <h3 style={{fontSize:'24px'}}>Offer enquiry</h3>
          <p>Please fill in your details below.</p>
            <Row style={{width:'auto'}}>
                <Col lg={12}>
            <Form.Group controlId="first_name">
              <Form.Control type="text" name="first_name" placeholder='First Name' className='mb-3'  value={formData.first_name} onChange={handleChange} />
            </Form.Group>
            </Col>
            <Col lg={12}>
            <Form.Group controlId="lastName">
              <Form.Control type="text" name="last_name" className='mb-3'  placeholder='Last Name' value={formData.last_name} onChange={handleChange} />
            </Form.Group>
            </Col>
            <Col lg={12}>
            <Form.Group controlId="email">
              <Form.Control type="email" name="email" className='mb-3'  placeholder='Email'  value={formData.email} onChange={handleChange} required />
            </Form.Group>
            </Col>
            <Col lg={12}>
            <Form.Group controlId="mobileNumber">
              <Form.Control type="text" name="phone_number" className='mb-3'  placeholder='Mobile Number' value={formData.phone_number} onChange={handleChange} required />
            </Form.Group>
            </Col>
            <Form.Group controlId="message">
              <Form.Control type='text' name="message" className='mb-3'  placeholder='Message' value={formData.message}  onChange={handleChange} />
            </Form.Group>
            <Col lg={12}>
            <button type='submit' className='submit-btn-offer' ><h6 style={{marginBottom:'0'}}>Submit</h6>
            </button></Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default OfferEnquiryForm;

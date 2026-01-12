import React, { useContext, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useLocation } from 'react-router'
import { AiTwotoneStar } from 'react-icons/ai'
import { FaTools, FaOilCan, FaMoneyBill, FaPhone, FaHands } from 'react-icons/fa'
import { RiTimer2Fill } from 'react-icons/ri'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { FcCalendar } from 'react-icons/fc'
import { IoLocationSharp } from 'react-icons/io5'
import { GrMail } from 'react-icons/gr'
import parse from 'html-react-parser';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { store } from '../App'
import { useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet'


function Service() {
    const [lang, setLang, menu, SetMenu, slugdata, SetslugData] = useContext(store)
    const [service, setService] = useState()
    const [aboutpage, SetAboutPage] = useState()
    const [contactData, setContactData] = useState()
    useEffect(() => {
        axios.get('https://dev10.sbagh.com/api/getServicePageDataBySlug/services')
            .then(reponse => { setService(reponse.data.data) })
        axios.get('https://dev10.sbagh.com/api/getServicePageDataBySlug/about-us')
            .then(response => { SetAboutPage(response.data.data) })
    }, [])

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

    const location = useLocation()
    const vechile = location.pathname.split('/').pop();
    console.log(contactData)
    {
        if (vechile == 'services') {
            return (
                <>
                <Helmet>
                <title>{service && service.seo && service.seo.meta_title}</title>
                <meta name="description" content={service && service.seo && service.seo.meta_description}></meta>
                <meta name="keywords" content={service && service.seo && service.seo.meta_keywords}></meta>  
                <link rel="canonical" href={service && service.seo && service.seo.canonical}/>
                </Helmet>
                    <Container fluid>
                        {service &&
                            <Row style={{ width: 'auto', justifyContent: 'center' }}>
                                <Col lg={11} style={{ display: 'grid', justifyContent: 'center' }}>
                                    <h3 className='text-center mt-5 mb-5'>{lang ? service.breif_summery.content.category_title_ar : service.breif_summery.content.category_title_en}</h3>
                                    {/* <p className='text-center'>At  – Foton , we strive to ensure our service is just as state-of-the-art as our vehicles. Our local technical staff offers you full support. To ensure that solutions are found quickly and efficiently to ensure our custoemrs keep moving.</p> */}
                                    <p className='text-center' >{lang ? parse(service.breif_summery.content.highlight_ar) : parse(service.breif_summery.content.highlight_en)}</p>
                                    <h3 className='text-center mt-3 mb-5'>{lang ? service.What_will_i_get_from__foton_service.section_title.category_title_ar : service.What_will_i_get_from__foton_service.section_title.category_title_en}</h3>
                                    <Row className='service-page-headings'>
                                     {lang ? <>


                                        <Col lg={6} md={6}>
                                            <Row>
                                            <Col lg={11} xs={10}>
                                                    <h3>قطع غيار فوتون الأصلية</h3>
                                                    <p>لا يوجد سوى قطع غيار فوتون الأصلية التي تلبي أعلى معايير الجودة من حيث السلامة والمتانة والأسعار التنافسية.</p>
                                                </Col>
                                                <Col lg={1} xs={2}>
                                                    <FaTools className='icon-size' />
                                                </Col>
                                            
                                            </Row>
                                        </Col>

                                        <Col lg={6} md={6}>
                                            <Row>

                                            <Col lg={11} xs={10}>
                                               <h3>نحن الخبراء</h3>
                                               <p>تتعاون فوتون بشكل حصري مع موظفي خدمة وصيانة مؤهلين. ولا يمكن لأحد سوى فريق عملنا المدرب أن يضمن حصولكم على أعلى مستوى من الخدمة والصيانة المضمونة والمعتمدة من جانب الشركة المُصنِّعة.</p>
                                             </Col>
                                            <Col lg={1} xs={2}>
                                            <AiTwotoneStar className='icon-size' />
                                            </Col>
                                            
                                          </Row>     
                                        </Col>

                                        <Col lg={6} md={6}>
                                            <Row>
                                            <Col lg={11} xs={10}>
                                                    <h3>الزيوت التي تنصح بها فوتون</h3>
                                                    <p>ينبغي الحرص دومًا على استخدام درجة ونوع الزيت الموصى بهما فقط لمركباتكم، وذلك من أجل ضمان الحفاظ على معاييرنا العالمية المتعلقة بالاقتصاد في استهلاك الوقود والمدة المحددة لمواعيد الخدمة (الصيانة). وقد يؤدي استخدام الزيت الخاطئ إلى تقليل مدة مواعيد الخدمة بنسبة تصل إلى 50%، ومن ثم التسبُب في تلف مركباتكم.</p>
                                                </Col>
                                                <Col lg={1} xs={2}>
                                                    <FaTools className='icon-size' />
                                                </Col>
                                                
                                            </Row>
                                        </Col>
                                        <Col lg={6} md={6} className='mt-3'>
                                            <Row>
                                            <Col lg={11} xs={10}>
                                                    <h3>تسعير شفاف</h3>
                                                    <p>بعد كل خدمة، يتلقى عملاؤنا فاتورة مفصلة تمنحهم نظرة عامة واضحة عن الخدمة التي يدفعون مقابلها. ولمزيد من راحة البال والتخطيط المالي، يمكنكم إبرام عقد خدمة.</p>
                                                </Col>
                                                <Col lg={1} xs={2}>
                                                    < FaMoneyBill className='icon-size' />
                                                </Col>
                                               
                                            </Row>
                                        </Col>
                                        <Col lg={6} md={6} className='mt-3'>
                                            <Row>
                                            
                                                <Col lg={1} xs={2}>
                                                    <RiTimer2Fill className='icon-size' />
                                                </Col>
                                                <Col lg={11} xs={10}>
                                                    <h3>متاحون دائمًا لخدمتكم</h3>
                                                    <p>نسعى دائمًا وبكل قوة لخدمة عملائنا أينما ومتى لزم الأمر</p>
                                                </Col>
                                               
                                            </Row>
                                        </Col>
                                     
                                     
                                     
                                     </> :  
                                     <>
                                        <Col lg={6} md={6}>
                                            <Row>
                                            <Col lg={1} xs={2}>
                                            <AiTwotoneStar className='icon-size' />
                                            </Col>
                                             <Col lg={11} xs={10}>
                                               <h3>We are the experts</h3>
                                               <p>Foton works exclusively with qualified service employees. Only our trained staff can ensure you receive the highest level of service and Manufacturer guaranteed and authorised service.</p>
                                             </Col>
                                          </Row>     
                                        </Col>
                                        
                                        <Col lg={6} md={6}>
                                            <Row>
                                                <Col lg={1} xs={2}>
                                                    <FaTools className='icon-size' />
                                                </Col>
                                                <Col lg={11} xs={10}>
                                                    <h3>Foton Genuine Parts</h3>
                                                    <p>Only genuine Foton parts meeting the highest quality standards in terms of safety and durability at competitive prices.</p>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col lg={6} md={6} className='mt-3'>
                                            <Row>
                                                <Col lg={1} xs={2}>
                                                    < FaMoneyBill className='icon-size' />
                                                </Col>
                                                <Col lg={11} xs={10}>
                                                    <h3>Transparent pricing</h3>
                                                    <p>After every service, our customers receive a detailed invoice giving a clear overview of what service you are paying for. For even further peace of mind and financial planning, consider a service contract.</p>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col lg={6} md={6}>
                                            <Row>
                                                <Col lg={1} xs={2}>
                                                    <FaOilCan className='icon-size' />
                                                </Col>
                                                <Col lg={11} xs={10}>
                                                    <h3>Foton Recommended Oils</h3>
                                                    <p>Only the recommended grade and type of oil will be used for your vehicle to ensure that our world class standards for fuel economy and length of service intervals are maintained. Using the wrong oil can reduce service intervals by up to 50% and cause damage to your vehicle.</p>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col lg={6} md={6} className='mt-3'>
                                            <Row>
                                                <Col lg={1} xs={2}>
                                                    <RiTimer2Fill className='icon-size' />
                                                </Col>
                                                <Col lg={11} xs={10}>
                                                    <h3>We are always available</h3>
                                                    <p>We strive to service our customer wherever and whenever needed</p>
                                                </Col>
                                            </Row>
                                        </Col>
                                        </>
        }
                                    </Row>
                        
                                    <Row>
                                        {lang ? 
                                        <>
                                           <Col lg={4} md={4}>
                                            <img src='/Images/Card-img/Media/Total-care.png' width={'100%'} />
                                        </Col>
                                        
                                        <Col lg={8} md={8} className='mt-3' >
                                            <h4>حلول خدمة تلبي تطلعات عملائنا:</h4>
                                            <ul>
                                                <li>منتجات خدمة مرنة ومخصصة.</li>
                                                <li>السماح للعميل بحرية الاختيار من بين مجموعة الخدمات التي يغطيها العقد.</li>
                                                <li>نغطي النطاق المحدد من الخدمات على مدى فترة زمنية محددة أو حسب الكيلومترات أو الأميال المقطوعة.</li>
                                                <li>نقدم أسعارًا ثابتة بناءً على رسوم التكلفة لكل كيلومتر (CPK)، حيث يتم تحديدها بشكل فردي لكل عميل وفقًا لمعايير تشغيل المركبات التي يشير إليها العميل.</li>
                                            </ul>
                                        </Col>
                                        </>
                                        
                                   :<>
                                        <Col lg={8} md={8} className='mt-3' >
                                            <h4>Service solution matched to fleet customer</h4>
                                            <ul>
                                                <li>Flexible and customised service products.</li>
                                                <li>Allowing the customer to select from the range of contractually covered services.</li>
                                                <li>Covers the selected range of services over a defined period or mileage.</li>
                                                <li>Fixed price based on Cost Per Kilometer(CPK) fee, individually determined for each customer according to fleet operational parameters indicated by the customer.</li>
                                            </ul>
                                        </Col>
                                        <Col lg={4} md={4}>
                                            <img src='/Images/Card-img/Media/Total-care.png' width={'100%'} />
                                        </Col>
                                        </> }
                                    </Row>
                                    <Row className='mt-4'>
                                        
                                        <Col lg={6} md={6}>
                                            <img src='/Images/Card-img/Media/PE_Olayah-41-1536x1024-1.webp' width={'100%'} />
                                        </Col>
                                        <Col lg={6} md={6}>
                                            <h3> Foton Commercial Vehicle Care</h3>
                                            <p>Foton Commercial Vehicle Care is a maintenance solution designed
                                                keeping the needs of commercial fleets in mind. It encompasses all
                                                the service and repair needs of commercial vehicles including Engine repair,
                                                Suspension service, Transmission repair, AC service, Engine Oil, Tires and Brakes, etc.
                                                It gives commercial vehicles a single stop for all of their maintenance and spare parts’ requirements.
                                                We have a skilled and committed maintenance staff ensures that every task is finished on schedule and to the
                                                satisfaction of the client.</p>

                                            <div className='inside-detail-btn' style={{ marginTop: '6%' }}>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className='mb-5 mt-5' style={{ minHeight: '360px' }}>

                                        <Col lg={6} md={6} style={{ display: 'grid', alignItems: 'center' }}>
                                            <div>
                                                <h3>Foton Auto Care</h3>
                                                <p> Autocare is differentiated from other aftersales service brands
                                                    for providing electrical and mechanical jobs to all variants in a
                                                    timely manner, using the latest available technologies. With 14 branches
                                                    across the Sultanate of Oman, Autocare is currently bridging the gap
                                                    and offering the products and the services that are tailored to the specific
                                                    needs of customers.</p>
                                                <div className='inside-detail-btn' style={{ marginTop: '6%' }}>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6} md={6}>
                                            <img src='/Images/Card-img/Media/AutoCare.webp' height={'100%'} width={'100%'} />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                        }
                    </Container>
                    <Footer />


                </>

            )
        }



        //Serivces-page --ending-----------------------------------------------------------------------------

        //About page ----------------------------------- starting
        {
            if (vechile == 'about-us') {
                return (
                    <>
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
                    </>
                )

            }
        }
        //about-page ending ----------------------------------------------------------------------------------


        //Offers-page -------------------------- starting ------------------
        {
            if (vechile === 'offers') {
                return (
                    <>
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

                    </>
                )

            }
        }


        //Offer-page ---------------ending------------------------------------


        //Contact-page ---------------------starting =============================================
        {
            if (vechile == 'contact-us') {

                return (
                    <>
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

                    </>
                )

            }
        }






    }


}


export default Service

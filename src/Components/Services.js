import React, { useContext, useState } from 'react'
import {  Col, Container, Row } from 'react-bootstrap'
import { AiTwotoneStar } from 'react-icons/ai'
import { FaTools, FaOilCan, FaMoneyBill, FaPhone, FaHands } from 'react-icons/fa'
import { RiTimer2Fill } from 'react-icons/ri'
import Footer from './Footer'
import parse from 'html-react-parser';
import { store } from '../App'
import { useEffect } from 'react'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet'


function Services() {
    const [lang, setLang, menu, SetMenu, slugdata, SetslugData] = useContext(store)
    const [service, setService] = useState()
    useEffect(() => {
        axios.get('https://dev10.sbagh.com/api/getServicePageDataBySlug/services')
            .then(reponse => { setService(reponse.data.data) })
    }, [])

  return (
    <div>
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


    </div>
  )
}

export default Services

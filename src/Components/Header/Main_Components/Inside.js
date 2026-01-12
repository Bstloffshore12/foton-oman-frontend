import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Table, Carousel } from 'react-bootstrap';
import Footer from '../../Footer';
import { store } from '../../../App';
import { useLocation } from 'react-router';
import axios from 'axios';
import parse from 'html-react-parser';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import LoaderComponent from '../../Loader';


function Inside() {
    const [lang] = useContext(store);
    const [detailsData, setDetailsData] = useState();
    const location = useLocation();
    const vechilepath = location.pathname.split('/').pop();
    const [open, setOpen] = useState(false);
    // const [slideIndex, setSlideIndex] = useState();
    const [loading, setLoading] = useState(true); // State to handle loading status
    const [slideIndex, setSlideIndex] = useState(0);
    const showSlide = (id) => {
        setSlideIndex(id);
    };

    useEffect(() => {
        axios.get('https://dev10.sbagh.com/api/getSingleProductDetailsByProductSlug/' + vechilepath)
            .then((response) => {
                setDetailsData(response.data.data);
                setLoading(false); // Set loading to false when data is fetched
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
                setLoading(false); // Handle error case, set loading to false
            });
    }, [location]);

    const handleButtonClick = (e, targetId) => {
        e.preventDefault();
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    };


    const slides = [
        { src: 'https://cdn-hjbap.nitrocdn.com/cCFFiGthRhkRKNFLiSUrCkMEjrkDXOJa/assets/images/optimized/rev-c110d14/petromin-foton.com/wp-content/uploads/2022/10/a79d4b972.jpg', alt: 'The Woods' },
        { src: 'https://cdn-hjbap.nitrocdn.com/cCFFiGthRhkRKNFLiSUrCkMEjrkDXOJa/assets/images/optimized/rev-c110d14/petromin-foton.com/wp-content/uploads/2022/10/a79d4b972.jpg', alt: 'Cinque Terre' },
        { src: 'https://petromin-foton.com/wp-content/uploads/2022/10/3-2.jpg', alt: 'Mountains and fjords' },
        { src: 'https://cdn-hjbap.nitrocdn.com/cCFFiGthRhkRKNFLiSUrCkMEjrkDXOJa/assets/images/optimized/rev-c110d14/petromin-foton.com/wp-content/uploads/2022/10/2-3.jpg', alt: 'Northern Lights' },
       
      ];
    
    const plusSlides = (n) => {
        setSlideIndex((prevIndex) => (prevIndex + n + slides.length) % slides.length);
    };

    const currentSlide = (index) => {
        setSlideIndex(index);
    };

    return (
        <>
            {loading ? (
                <LoaderComponent />
            ) :
                detailsData && (
                    <>
                        <Container fluid className='mb-5' >
                            <Row className='details-page-row' style={{ width: 'auto' }}>
                                <h3 className='mt-5 text-center mb-5'>{lang ? detailsData.title.product_name_ar : detailsData.title.product_name_en}</h3>
                                <Col lg={11} xs={11} style={{ display: 'flex', justifyContent: 'center', padding: '0px', boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' }} >
                                    <Row style={{minHeight:'414px'}}>
                                        <Col lg={6} md={6} xs={10} style={{ display: 'grid', alignItems: 'center', padding: '0px' }}>
                                           
                                            <Container fluid style={{padding:'0px'}}>
                                                <Carousel activeIndex={slideIndex} onSelect={(index) => currentSlide(index)}>
                                                    {detailsData.product_galleries.map((slide, index) => (
                                                        <Carousel.Item key={slide.id} >
                                                            <img className="d-block w-100" src={"https://dev10.sbagh.com/public/images/product-gallery/large/" + slide.image} width={'100%'} />   
                                                        </Carousel.Item>
                                                    ))}
                                                </Carousel>

                                                {/* Thumbnails */}
                                                <Row  style={{position:'relative',left:'2%'}}>
                                                    {detailsData.product_galleries.map((slide, index) => (
                                                        <Col key={index}  lg={2} xs={3} style={{height:'80px',padding:'2px'}}>
                                                            <img
                                                                className={`d-block w-100 ${index === slideIndex ? 'active' : ''}`}
                                                                src={"https://dev10.sbagh.com/public/images/product-gallery/large/" + slide.image} width={'100%'} height={'100%'}
                                                                onClick={() => currentSlide(index) }
                                                                style={{ opacity: index === slideIndex ? 1 : 0.5 }} 
                                                            />
                                                        </Col>
                                                    ))}
                                                </Row>
                                            </Container>
                                        </Col>
                                        <Col lg={6}  md={6} xs={10} className='Product-config-col' style={{ paddingLeft: '44px', paddingRight: '0px', marginBottom: '0px' }}>
                                            <div style={{height:'100%'}}>
                                            <div style={{ width: '100%',height:'20%' }}>
                                                    <h5 className='text-start ' style={{paddingTop:'10px'}}>Product Configuration</h5>
                                                    <p className='text-start' style={{marginBottom:'0'}}>Normal transportation</p>
                                                </div>
                                            <Table bordered hover  style={{ height: '80%' }} >
                                                <tbody style={{ height: '100%' }} >
                                                {detailsData.product_configurations.map((item) => {
                                                    return (
                                                            <tr>
                                                                <td  >
                                                                    <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
                                                                        <span style={{ position: 'relative', left: '10%' }} data-contrast="none">{item.label_name_en}</span>
                                                                    </div></td>
                                                                <td><div style={{ height: '100%', display: 'flex', alignItems: 'center' }}><span style={{ position: 'relative', left: '10%', }} > {item.value_en}</span></div></td>
                                                            </tr>    

                                                    )
                                                })}
                                                 </tbody>
                                            </Table>
                                            </div>

                                        </Col>
                                    </Row>
                                </Col>

                                <h3 className='text-center  mt-5 '>{lang ? detailsData.features_title.category_title_ar : detailsData.features_title.category_title_en}</h3>
                                <Col lg={11} xs={12} className='sticky-top-1'>
                                    <Row className='mb-3 mt-3' style={{ width: 'auto', display: 'flex', justifyContent: 'center' }}>
                                        <Col lg={8} style={{ display: 'flex', justifyContent: 'center' }}>
                                            <Row className='featers-row' style={{ display: 'flex', justifyContent: 'center' }}>
                                                {detailsData.features.map((item, index) => (
                                                    <Col key={index}>
                                                        <p>
                                                            <a href={`#${item.slug}`}
                                                                onClick={(e) => handleButtonClick(e, item.slug)}
                                                                style={{ textDecoration: 'none', color: 'white' }}>
                                                                {lang ? item.display_name_ar : item.display_name_en}
                                                            </a>
                                                        </p>
                                                    </Col>
                                                ))}
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>

                                {detailsData.Exterior.map((item) => {
                                    return (
                                        <Col lg={11} id='exterior'  >
                                            <h3 className='text-center mb-5'>{lang ? item.feature_title_ar : item.feature_title_en}</h3>
                                            <img src={"https://dev10.sbagh.com/public/images/products/" + item.products_id + "/" + item.master_features_id + "/" + "large/" + item.vehicle_image} width={'100%'} />
                                            <div className="container-fluid" style={{ padding: '0px' }}>
                                                <OwlCarousel items={4} className="owl-theme" loop nav margin={2}>
                                                    {item.product_feature_gallery.map((item) => {
                                                        return (
                                                            <div>
                                                                <img src={"https://dev10.sbagh.com/public/images/product-gallery/large/" + item.image} />
                                                                <p className='owl-text'>{lang ? item.title_ar : item.title_en}</p>
                                                            </div>
                                                        )
                                                    })}
                                                </OwlCarousel>
                                            </div>
                                        </Col>

                                    )
                                })}

                                {detailsData.Interior.map((item) => {
                                    return (
                                        <Col lg={11} className='mt-3 mb-4' id='interior'>
                                            <h3 className='text-center mb-5'>{lang ? item.feature_title_ar : item.feature_title_en}</h3>
                                            <div className="container-fluid" style={{ padding: '0px' }}>
                                                <OwlCarousel items={2} className="owl-theme-2" loop nav margin={2}>
                                                    {item.product_feature_gallery.map((item) => {
                                                        return (
                                                            <div>
                                                                <img src={"https://dev10.sbagh.com/public/images/product-gallery/large/" + item.image} />
                                                            </div>
                                                        )
                                                    })}
                                                </OwlCarousel>
                                            </div>
                                        </Col>
                                    )
                                })}


                                {detailsData.Power.map((item) => {
                                    return (
                                        <Col lg={11} id='power' >
                                            <h3 className='text-center mb-5 mt-3'>{lang ? item.feature_title_ar : item.feature_title_en}</h3>
                                            <img src={"https://dev10.sbagh.com/public/images/products/" + item.products_id + "/" + item.master_features_id + "/" + "large/" + item.vehicle_image} width={'100%'} />
                                            <Row className='mt-4'>
                                                {item.summery1_en ?
                                                    <Col lg={6}>
                                                        <p style={{ fontFamily: 'Montserrat, sans-serif ' }}>{lang ? parse(item.summery1_ar) : parse(item.summery1_en)}</p>
                                                    </Col>
                                                    : null}
                                                {item.summery2_en ?
                                                    <Col lg={6}>
                                                        <p style={{ fontFamily: 'Montserrat, sans-serif ' }}>{lang ? parse(item.summery2_ar) : parse(item.summery2_en)}</p>
                                                    </Col>
                                                    : null}
                                                {item.summery3_en ?
                                                    <Col lg={6}>
                                                        <p style={{ fontFamily: 'Montserrat, sans-serif ' }}>{lang ? parse(item.summery3_ar) : parse(item.summery3_en)}</p>

                                                    </Col>
                                                    : null}
                                                {item.summery4_en ?
                                                    <Col lg={6}>
                                                        <p style={{ fontFamily: 'Montserrat, sans-serif ' }}>{lang ? parse(item.summery4_ar) : parse(item.summery4_en)}</p>

                                                    </Col> : null}
                                            </Row>
                                        </Col>

                                    )
                                })}

                                {detailsData.Safety.map((item) => {

                                    return (
                                        <Col lg={11} id='safety' style={{ display: 'grid', justifyContent: 'center' }} >
                                            <h3 className='mt-3 mb-5 text-center' >Safer</h3>
                                            <Row style={{ display: 'flex', justifyContent: 'center', padding: '0px' }}>
                                                {item.product_feature_gallery.map((item, index) => {
                                                    return (
                                                        <>
                                                            <Col lg={3} md={3} className='safer-col-image' >
                                                                <img className='safer-image' src={"https://dev10.sbagh.com/public/images/product-gallery/large/" + item.image} width={'100%'} />
                                                                <div className='safer-tile'>
                                                                    <p>{item.title_en}</p>
                                                                </div>
                                                            </Col>
                                                        </>
                                                    )
                                                })}
                                            </Row>
                                        </Col>
                                    )
                                })}

                                {detailsData.Performance.map((item) => {
                                    return (
                                        <Col lg={11} id='performance' style={{ display: 'grid', justifyContent: 'center' }} >
                                            <h3 className='mt-5 mb-5 text-center' >Reliable</h3>
                                               <Row style={{ display: 'flex', justifyContent: 'center', padding: '0px' }}>
                                                {item.product_feature_gallery.map((item, index) => {
                                                    return (
                                                        <>
                                                            {index % 2 === 0 ?
                                                                <>
                                                                    <Col lg={6}  md={6} >
                                                                        <img src={'https://dev10.sbagh.com/public/images/product-gallery/large/' + item.image} width={'100%'} />
                                                                    </Col>
                                                                    <Col className='performance-para-content' lg={6}  md={6} xs={11} style={{ padding: '0px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                        <p  style={{ padding: '0px 50px' }}>{lang ? parse(item.title_ar) : parse(item.title_en)}</p>
                                                                    </Col>
                                                                </>
                                                                :
                                                                <>

                                                                    <Col lg={6}  md={6} xs={11} className='performance-para-content' style={{ padding: '0px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                        <p style={{ padding: '0px 50px' }}>{lang ? parse(item.title_ar) : parse(item.title_en)}</p>
                                                                    </Col>
                                                                    <Col lg={6}  md={6} xs={11} className='performance-col-img' >
                                                                        <img src={'https://dev10.sbagh.com/public/images/product-gallery/large/' + item.image} width={'100%'} />
                                                                    </Col>
                                                                </>

                                                            }
                                                        </>
                                                    )
                                                })}
                                            </Row>
                                        </Col>
                                    )
                                })}
                            </Row>
                        </Container>
                        <Footer />
                    </>
                )}
        </>
    );
}

export default Inside;




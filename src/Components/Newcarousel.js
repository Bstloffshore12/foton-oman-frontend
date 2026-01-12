import React, { useState, useEffect } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';

const SlideshowGallery = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => (prevIndex + n + slides.length) % slides.length);
  };

  const currentSlide = (index) => {
    setSlideIndex(index);
  };

  const slides = [
    { src: 'https://cdn-hjbap.nitrocdn.com/cCFFiGthRhkRKNFLiSUrCkMEjrkDXOJa/assets/images/optimized/rev-c110d14/petromin-foton.com/wp-content/uploads/2022/10/a79d4b972.jpg', alt: 'The Woods' },
    { src: 'https://cdn-hjbap.nitrocdn.com/cCFFiGthRhkRKNFLiSUrCkMEjrkDXOJa/assets/images/optimized/rev-c110d14/petromin-foton.com/wp-content/uploads/2022/10/a79d4b972.jpg', alt: 'Cinque Terre' },
    { src: 'https://petromin-foton.com/wp-content/uploads/2022/10/3-2.jpg', alt: 'Mountains and fjords' },
    { src: 'https://cdn-hjbap.nitrocdn.com/cCFFiGthRhkRKNFLiSUrCkMEjrkDXOJa/assets/images/optimized/rev-c110d14/petromin-foton.com/wp-content/uploads/2022/10/2-3.jpg', alt: 'Northern Lights' },
   
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      plusSlides(1);
    }, 5000); // Auto slide every 5 seconds
    return () => clearInterval(interval);
  }, []); // Run once on mount

  return (
    <Container>
      <h2 style={{ textAlign: 'center' }}>Slideshow Gallery</h2>
      <Carousel activeIndex={slideIndex} onSelect={(index) => currentSlide(index)}>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={slide.src} alt={slide.alt} />
            <Carousel.Caption>
              <h3>{slide.alt}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Thumbnails */}
      <Row className="mt-3">
        {slides.map((slide, index) => (
          <Col key={index} xs={2} className="mb-2">
            <img
              className={`d-block w-100 ${index === slideIndex ? 'active' : ''}`}
              src={slide.src}
              alt={slide.alt}
              onClick={() => currentSlide(index)}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SlideshowGallery;

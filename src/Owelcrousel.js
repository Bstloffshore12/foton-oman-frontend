import React, { useState } from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';

function SlideShow() {
  const [slideIndex, setSlideIndex] = useState();
  const [open, setOpen] = useState(false)

  const slides = [
    { img: 'https://petromin-foton.com/wp-content/uploads/2022/10/a79d4b972.jpg', id: 1 },
    { img: 'https://petromin-foton.com/wp-content/uploads/2022/10/1-3.jpg', id: 2 },
    { img: 'https://petromin-foton.com/wp-content/uploads/2022/10/3-2.jpg', id: 3 },
    { img: 'https://petromin-foton.com/wp-content/uploads/2022/10/2-3.jpg', id: 4 }
  ];
  const showSlide = (id) => {
    setSlideIndex(id);
  };

  return (
    <div>
      <Carousel>
        {slides.map((slide) => (
          open ?
            <Carousel.Item key={slide.id} className={slide.id == slideIndex ? "active" : "notactive"} >
              <img src={slide.img} width={'100%'} height={'100%'} />
            </Carousel.Item>
            :
            <Carousel.Item
              key={slide.id} >
              <img src={slide.img} width={'100%'} height={'100%'} />
            </Carousel.Item>
        ))}
      </Carousel>

      <Container>
        <Row style={{ minHeight: '90px', width: 'auto' }}>
          {slides.map((item, index) => {
            return (
              <Col lg={3} style={{ minHeight: '90px', padding: '0px' }}>
                <img src={item.img} height={'100%'} className={item.id == slideIndex ? "active-2" : "not"} onClick={() => { showSlide(item.id); setOpen(true) }} width={'100%'} />
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  );
}

export default SlideShow;

import React, { useState } from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';

function SlideShow2() {
  const [slideIndex, setSlideIndex] = useState();
  const [open, setOpen] = useState(false)

  const slides = [
    { img: 'https://petromin-foton.com/beta/wp-content/uploads/2023/06/Get-Your-Business-Moving-with-the-FOTON-AUMARK-S-2022.jpg', id: 1 },
    { img: 'https://petromin-foton.com/beta/wp-content/uploads/2023/06/FOTON-AUMARK-S-2022-Full-view.jpg', id: 2 },
    { img: 'https://petromin-foton.com/beta/wp-content/uploads/2023/06/FOTON-AUMARK-S-2022-Side-View.jpg', id: 3 },
    { img: 'https://petromin-foton.com/beta/wp-content/uploads/2023/06/FOTON-AUMARK-S-2022-Front-view.jpg', id: 4 }
  ];

  const showSlide = (id) => {
    setSlideIndex(id);
  };

  return (
    <div>
      <Carousel>
        {slides.map((slide) => (
          open ?
            <Carousel.Item
              key={slide.id}
              // style={{ display: slide.id  == slideIndex ? 'block' : 'none'  }}
              className={slide.id == slideIndex ? "active" : "notactive"} style={{ padding: '5px' }}>
              <img src={slide.img} width={'100%'} height={'100%'} /> </Carousel.Item>
            :
            <Carousel.Item key={slide.id} style={{ padding: '5px' }}>
              <img src={slide.img} width={'100%'} height={'100%'} />
            </Carousel.Item>
        ))}
      </Carousel>
      <Container >
        <Row style={{ minHeight: '90px', width: 'auto' }}>
          {slides.map((item, index) => {
            return (
              <Col lg={3} style={{ minHeight: '90px', padding: '5px' }}>
                <img src={item.img} height={'100%'} className={item.id == slideIndex ? "active-2" : "not"} onClick={() => { showSlide(item.id); setOpen(true) }} width={'100%'} />
              </Col>
            )
          })}

        </Row>
      </Container>



    </div>
  );
}

export default SlideShow2;

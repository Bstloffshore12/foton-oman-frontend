import React, { useEffect } from 'react';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const SlideshowGallery = () => {
  
    let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = $(".mySlides");
  let dots = $(".demo");
  let captionText = $("#caption");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  slides.hide();
  dots.removeClass("active");

  $(slides[slideIndex - 1]).show();
  $(dots[slideIndex - 1]).addClass("active");
  captionText.html($(dots[slideIndex - 1]).attr("alt"));
}

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Slideshow Gallery</h2>
      <div class="container">
  <div class="mySlides">
    <div class="numbertext">1 / 6</div>
    <img src="img_woods_wide.jpg" style="width:100%" />
  </div>

  {/* <!-- Add more slides as needed, each in the structure of the first slide --> */}

  <a class="prev" onclick={plusSlides(-1)}>❮</a>
  <a class="next" onclick={plusSlides(1)}>❯</a>

  <div class="caption-container">
    <p id="caption"></p>
  </div>
  <div class="row">
    <div class="column">
      <img class="demo cursor" src="img_woods.jpg" style="width:100%" onclick="currentSlide(1)" alt="The Woods" />
    </div>
    {/* <!-- Add more thumbnails as needed, each in the structure of the first thumbnail --> */}
  </div>
</div>

    </div>
  );
};

export default SlideshowGallery;

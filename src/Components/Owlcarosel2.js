import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Owldemo2() {
    const Images = [
        {img :'https://cdn-hjbap.nitrocdn.com/cCFFiGthRhkRKNFLiSUrCkMEjrkDXOJa/assets/images/optimized/rev-c110d14/petromin-foton.com/wp-content/uploads/2022/07/i1.jpg',text:"Light"},
        {img:'https://cdn-hjbap.nitrocdn.com/cCFFiGthRhkRKNFLiSUrCkMEjrkDXOJa/assets/images/optimized/rev-c110d14/petromin-foton.com/wp-content/uploads/2022/07/i2-1.jpg',text:'Central'},
        {img:'https://cdn-hjbap.nitrocdn.com/cCFFiGthRhkRKNFLiSUrCkMEjrkDXOJa/assets/images/optimized/rev-c110d14/petromin-foton.com/wp-content/uploads/2022/07/i3.jpg',text:'Traillight'},
        {img :'https://cdn-hjbap.nitrocdn.com/cCFFiGthRhkRKNFLiSUrCkMEjrkDXOJa/assets/images/optimized/rev-c110d14/petromin-foton.com/wp-content/uploads/2022/07/i5.jpg',text:'car'},
    ]
  return (
    <div >
      <div className="container-fluid" style={{padding:'0px'}}>
        <OwlCarousel items={2} className="owl-theme-2"  >
            {Images.map((item)=>{
                return(
                    <div>
                        <img src={item.img} width={'100%'}/>
                    </div>
                )
            })}
        </OwlCarousel>
      </div>
    </div>
  );
}

export default Owldemo2;

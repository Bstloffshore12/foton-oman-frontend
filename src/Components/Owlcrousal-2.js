import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Owldemo1() {


    const Images = [
        {img :'https://cdn-hjbap.nitrocdn.com/cCFFiGthRhkRKNFLiSUrCkMEjrkDXOJa/assets/images/optimized/rev-c110d14/petromin-foton.com/wp-content/uploads/2022/07/4-300x237.jpg',text:"Light"},
        {img:'https://cdn-hjbap.nitrocdn.com/cCFFiGthRhkRKNFLiSUrCkMEjrkDXOJa/assets/images/optimized/rev-c110d14/petromin-foton.com/wp-content/uploads/2022/09/2-300x237.jpg' ,text:'Central'},
        {img:'https://cdn-hjbap.nitrocdn.com/cCFFiGthRhkRKNFLiSUrCkMEjrkDXOJa/assets/images/optimized/rev-c110d14/petromin-foton.com/wp-content/uploads/2022/09/3-300x237.jpg' ,text:'Traillight'},
        {img:'https://cdn-hjbap.nitrocdn.com/cCFFiGthRhkRKNFLiSUrCkMEjrkDXOJa/assets/images/optimized/rev-c110d14/petromin-foton.com/wp-content/uploads/2022/07/4-300x237.jpg' ,text:'car'},
    
    
    ]
        
    

  return (
    <div>
     
      <div className="container-fluid" style={{padding:'0px'}}>
        <OwlCarousel items={4} className="owl-theme" loop nav margin={2}>
            {Images.map((item)=>{
                return(

                    <div>
                        <img src={item.img}/>
                        <p className='owl-text'>{item.text}</p>

                    </div>
                )
            })}
          
          
        </OwlCarousel>
      </div>
    </div>
  );
}

export default Owldemo1;

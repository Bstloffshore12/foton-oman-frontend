import React, { createContext, useContext, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import BasicExample from './Components/Header/Navbar'
import Home from './Components/Header/Main_Components/Home'
import Subcomponents from './Components/Header/Main_Components/Subcomponents'
import Inside from './Components/Header/Main_Components/Inside'
import Service from './Components/Service-2'
import Sideform from './Components/Sideform'
import { RiRoadsterFill } from 'react-icons/ri'
import Offers from './Components/Offers'
import NavScrollExample from './NewNavbar'
import About from './Components/About'
import Services from './Components/Services'
import Offersmain from './Components/Offersmain'
import Contact from './Components/Contact'

export const store = createContext()




const MyContext = createContext();

export const useMyContext = () => {
  return useContext(MyContext);
};


function App() {

  // const[data,setData]=useState()
  // const[slugdata,setSlugData]=useState()

  const data = {
    "data": [

      {
        "navbar": {
          "brand": "/Images/logo/foton-logo-black.png",
          "menus": [
            { "label": "about us", "slug": "about", "arabic": "arabic" },
            {
              "label": "vechile", "sub_menus": [
                { "label": "Medium & Heavy Duty Trucks", "slug_name": "/Medium", "slug": "Medium", "id": 1 },
                { "label": "Light Duty Trucks", "slug_name": "light", "slug": "/light", "id": 2 },
                { "label": "Van & Pickup", "slug_name": "van", "slug": "/van", "id": 2 },
                { "label": "Special Vehicles", "slug_name": "special", "slug": "/special", "id": 2 }
              ]
            },
            { "label": "services", "slug": "service" },
            { "label": "offers", "slug": "offers" },
            { "label": "contact us", "slug": "contact" }
          ]

        }
      },


      {
        "banners": [
          { "image": "/Images/Banners/MicrosoftTeams-image (9).png" },
          { "image": "/Images/Banners/MicrosoftTeams-image (10).png" },
          { "image": "/Images/Banners/MicrosoftTeams-image (7).png" },
          { "image": "/Images/Banners/four.jpg" }


        ]
      },
      {
        "Products":
        {
          "heading": " Foton Products", "sub_heading": "With all series Commercial Vehicle business, Foton Motor is one of the leading Commercial Vehicle manufactures in the world.",
          "Vehicles_info": [
            { "image": "/Images/Card-img/AUMAN-EST-A-ICON.webp", "title": "Medium & Heavy Duty Trucks", "desc": "AUMAN, a wide range choices covering medium and long haul transportation and infrastructure" },
            { "image": "/Images/Card-img/AUMARK-S-ICON.webp", "title": "Light Duty Trucks", "desc": "AUMARK, urban transportation expert with European standard" },
            { "image": "/Images/Card-img/TUNLAND-ICON0.webp", "title": "Van & Pickup", "desc": "Pickup and Van for lifestyle and business" },
            { "image": "/Images/Card-img/sp.png", "title": "Special Vehicles", "desc": "Fossile and New Energy solutions tailored to your needs" }

          ]
        }


      },
      {
        "Vehicle": [
          { "Medium": { "heading": "Medium & Heavy Duty Trucks" } },


          { "light": { "heading": "Light Duty Trucks" } }
        ]

      }



    ]
  }


  const [lang, setLang] = useState(false)
  const [menu, SetMenu] = useState()

  const [slugdata, SetslugData] = useState()



  return (
    <>
      {data &&
        <store.Provider value={[lang, setLang, menu, SetMenu, slugdata, SetslugData]}>
          <BrowserRouter>
            {/* <BasicExample /> */}
            <NavScrollExample/>

            <ul id="MiniLeftNav">
              <li>
                <Link to={'/side'}> <a >
                <div className='rotating-image-div'>
                  <img  className='rotating-image' src="/Images/logo/steering-wheel-icon-template-black-color-editable-steering-wheel-icon-symbol-flat-illustration-for-graphic-and-web-design-free-vect.png" alt="" width="50px" height="50px" srcset="" />
                  </div>
                  <span>Book a Text Drive</span>
                </a>
                </Link>
              </li>
            </ul>


            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/services' element={<Services />} />
              <Route path='/side' element={<Sideform />} />
              <Route path='/offer' element={<Offers />} />
              <Route path='/vehicles/:slug' element={<Subcomponents />} />
              <Route path='/vechile-details/:slug' element={<Inside/>} />
              <Route path='/about-us'  element={<About/>}/>
              <Route path='/offers' element={<Offersmain/>}/>
              <Route path='/contact-us' element={<Contact/>}/>

            </Routes>
          </BrowserRouter>
        </store.Provider>
      }
    </>
  )
}

export default App

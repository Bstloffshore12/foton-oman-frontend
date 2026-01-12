import React, { useContext, useEffect } from 'react'
import { Container, Row, Col, Card, Nav } from 'react-bootstrap'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import Footer from '../../Footer'
import { useState } from 'react'
import  axios from 'axios'
import { store } from '../../../App'
import { apiUrl } from '../../Constants'
import LoaderComponent from '../../Loader'

function Subcomponents() {
  const [lang] = useContext(store)
  const [pageData, setPageData] = useState();
  const location = useLocation()
  const vehicle_slug = location.pathname.split('/').pop();

  useEffect(() => {
    axios.get(apiUrl+'getProductsDataByProductCategorySlug/' + vehicle_slug)
      .then((response) => { setPageData(response.data.data) })
  }, [location])

  return (
    <>
      {pageData ?
        <Container fluid className='inside-page-container'>
          <Row style={{ display: 'flex', justifyContent: 'center', width: 'auto' }}>
            <Col lg={11} >
              <h3 className='mt-5 text-center mb-5'>{lang ? pageData.title.menu_name_ar : pageData.title.menu_name_en}</h3>
              <Row style={{  width: 'auto',display:'flex',justifyContent:'center' }} className='mb-5'>
                {pageData.content.map((item, index) => (
                  <Col lg={4} sm={6} md={6} xs={12} className='inside-page-card testimotionals' >
                    <Card  className='inside-reponsive-div' >
                    <div class="layer"></div>
                      <div className='content'>
                      <img src={'https://dev10.sbagh.com/public/images/products/large/'+item.product_image} width={'100%'} />
                     <div style={{minHeight:'96px',display:'flex',justifyContent:'center',alignItems:'center'}}>
                      <h5 className='text-center' style={{marginBottom:'0px'}}>{lang ? item.product_name_ar : item.product_name_en}</h5>
                      </div>
                      <div className='hr-div'>
                        <hr style={{ width: '80%' }}></hr>
                      </div>
                      <div className=' inside-p-div'>
                        <p >{lang ? item.short_description_ar : item.short_description_en}</p>
                      </div>
                      <div className='inside-detail-btn' >
                        {lang ?
                                                <p > <Link to={"/vechile-details/"+item.product_name_slug}>التفاصيل</Link></p>

                        :                        <p > <Link to={"/vechile-details/"+item.product_name_slug}> DETAILS</Link></p>

                        }
                      </div>
                      </div>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
        :
        <LoaderComponent/>
      }
      <Footer />
    </>
  )
}

export default Subcomponents


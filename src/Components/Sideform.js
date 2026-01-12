import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';

function Sideform() {
  return (
   <Container fluid className='mb-5'>
     <Row style={{width:'auto',display:'flex',justifyContent:'center'}}>
        <div className="col-10">
          <h2 className='mt-5 mb-5 text-center'>Book a Test Drive by filling the form below.</h2>
          <form>
            <Row style={{width:'auto'}}>
                <Col lg={4}>
            <div className="mb-3" >
              <select className="form-select" id="Title" style={{height:'50px'}} required>
                <option value="">- Select from list -</option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
              </select>
            </div>
            </Col>
            <Col lg={4}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="First Name"
                placeholder="First Name"
              />
            </div>
            </Col>
            <Col lg={4}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="Last Name"
                placeholder="Last Name"
              />
            </div>
            </Col>
            <Col lg={6}>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="Email"
                placeholder="Email Address"
                required
              />
            </div>
            </Col>
            <Col lg={6}>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                id="Phone Number"
                placeholder="+966"
                required
              />
            </div>
            </Col>
            <Col lg={6}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="Company"
                placeholder="Company"
                required
              />
            </div>
            </Col>
            <Col lg={6}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="Designation"
                placeholder="Designation"
              />
            </div>
            </Col>
            <Col lg={6}>
            <div className="mb-3">
              <select className="form-select" id="Preferred Model" required>
                <option value="">- Select Model -</option>
                <option value="Tunland G7 4x2 and 4x4 MT">Tunland G7 4x2 and 4x4 MT</option>
                <option value="View Cargo Van">View Cargo Van</option>
                <option value="LDT with Dry box and Freezer box">LDT with Dry box and Freezer box</option>
                <option value="HDT Tractor head">HDT Tractor head</option>
              </select>
            </div>
            </Col>
            <Col lg={6}>
            <div className="mb-3">
              <select className="form-select" id="Select Region" required>
                <option value="">- Select Region -</option>
                <option value="Central Region">Central Region</option>
                <option value="Eastern Region">Eastern Region</option>
                <option value="Western Region">Western Region</option>
              </select>
            </div>
            </Col>
            <Col lg={6}>
            <div className="mb-3">
              <select className="form-select" id="Central Region City" required>
                <option value="">- Select City -</option>
                <option value="Riyadh - الرياض">Riyadh - الرياض</option>
                <option value="Al Kharj - الخرج">Al Kharj - الخرج</option>
                <option value="Al Quway'iyah - القويعية">Al Quway'iyah - القويعية</option>
                <option value="Al Qassim">Al Qassim</option>
                <option value="Buraydah - بريدة">Buraydah - بريدة</option>
                <option value="Hail - حائل">Hail - حائل</option>
                <option value="Arar">Arar</option>
                <option value="Sakaka - سكاكا">Sakaka - سكاكا</option>
                <option value="Al Majma'ah - المجمعة">Al Majma'ah - المجمعة</option>
              </select>
            </div>
            </Col>
            <Col lg={6}>
            <div className="mb-3">
              <select className="form-select" id="Eastern Region City" required>
                <option value="">- Select City -</option>
                <option value="Dammam - الدمام">Dammam - الدمام</option>
                <option value="Al Ahsa - الاحساء">Al Ahsa - الاحساء</option>
                <option value="Al Jubail - الجبيل">Al Jubail - الجبيل</option>
                <option value="Al Khobar - الخبر">Al Khobar - الخبر</option>
                <option value="Al Jubail - الجبيل">Al Jubail - الجبيل</option>
                <option value="Al Qatif - القطيف">Al Qatif - القطيف</option>
                <option value="Dhahran - الظهران">Dhahran - الظهران</option>
                <option value="Al Hufuf - الهفوف">Al Hufuf - الهفوف</option>
                <option value="Al Mubarraz - المبرز">Al Mubarraz - المبرز</option>
              </select>
            </div>
            </Col>

            <div className="mb-3">
              <select className="form-select" id="Western Region City" required>
                <option value="">- Select City -</option>
                <option value="Jeddah - جدة">Jeddah - جدة</option>
                <option value="Makkah Al Mukarramah - مكة المكرمة">Makkah Al Mukarramah - مكة المكرمة</option>
                <option value="At Taif - الطائف">At Taif - الطائف</option>
                <option value="Al Madinah Al Munawwarah - المدينة المنورة">Al Madinah Al Munawwarah - المدينة المنورة</option>
                <option value="Yanbu - ينبع">Yanbu - ينبع</option>
                <option value="Al Hada">Al Hada</option>
                <option value="Rabigh - رابغ">Rabigh - رابغ</option>
                <option value="Al Lith">Al Lith</option>
                <option value="Badr - بدر">Badr - بدر</option>
                <option value="Tabuk">Tabuk</option>
                <option value="Abha - ابها">Abha - ابها</option>
                <option value="Khamis Mushayt - خميس مشيط">Khamis Mushayt - خميس مشيط</option>
                <option value="Al Bahah">Al Bahah</option>
                <option value="An Namas (Tanumah) - النماص">An Namas (Tanumah) - النماص</option>
              </select>
            </div>
            <div className="mb-3">
            
              <textarea
                className="form-control"
                id="Comments"
                placeholder="Comments"
                rows="3"
              />
            </div>
            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="TermsAndConditions"
                required
              />
              <label className="form-check-label" htmlFor="TermsAndConditions">
                I understand that all my personal data will be handled in accordance with the relevant privacy protection regulations.
              </label>
            </div>
            <button type='submit'  className='submit-btn-offer' ><h6 style={{marginBottom:'0'}}>Submit</h6></button>
            </Row>
          </form>
        </div>
      </Row>
    </Container>
  );
}

export default Sideform;

import React from 'react'
import { Col, Row } from 'antd';
import Imagehome from './Imagehome'
import HeaderContent from './HeaderContent';
import ReactLanding from './ReactLanding';
import LandingLeft from './LandingLeft';
import LandingRight from './LandingRight';
import PageLeft from './PageLeft';
import PageRight from './PageRight';
import CenterContent from './CenterContent';
import ContentLeftRight from './ContentLeftRight';
import CenterContentPricing from './CenterContentPricing';
import Footer from './Footer';
 
function Home() {
  return (
   <>
<Row>
      <Col span={12}   > 
      <HeaderContent/>
      </Col>


      <Col span={12}   >
  <Imagehome/>
      </Col>
    </Row>
    <br /><br /><br /><br /><br />
 <ReactLanding/>
 <br /><br /><br /><br /><br />

 <Row>
      <Col span={12}  > 
       <LandingLeft/>
      </Col>


      <Col  >
 <LandingRight/>
      </Col>
    </Row>
<br /><br /><br /><br /><br />

    <Row>
      <Col span={12}  > 
       <PageLeft/>
      </Col>


      <Col span={12}  >
 <PageRight/>
      </Col>
    </Row>
    <br /><br /><br /><br /><br />

<Col>
    <CenterContent/>
</Col>

 <ContentLeftRight/>

<CenterContentPricing/>

<Footer/> 
   </>
  )
}

export default Home
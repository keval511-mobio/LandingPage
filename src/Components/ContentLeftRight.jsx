import React from 'react'
import { Col, Row ,Button, Flex, Segmented ,Typography,Space } from 'antd';
const { Title,Paragraph } = Typography;
 
export default function ContentLeftRight() {
  return (
    <>
    <br /><br /><br /><br />
    <Row>
      <Col span={12} style={{padding:"50PX"}}  > 
       
       <Flex >
       <img src="../public/images/react.png" style={{height:'40px'}} alt="" />
         <Paragraph strong>React.js</Paragraph>  
        
      </Flex>
      <Paragraph style={{marginLeft:'40PX',marginTop:"0PX"}}>
      React is a free and open-source front-end JavaScript library for building user interfaces or UI components.
      </Paragraph> 

      <br /><br />
      <Flex >
       <img src="../public/images/nextjs.svg" style={{height:'40px'}} alt="" />
         <Paragraph strong>Next.js</Paragraph>  
        
      </Flex>
      <Paragraph style={{marginLeft:'40PX',marginTop:"0PX"}}>
      Next.js is a framework for server-rendered React applications using Next.js.
      </Paragraph>
      </Col>


      <Col span={12} style={{padding:"50PX"}}  >
      <Flex >
       <img src="../public/images/tcss.svg" style={{height:'40px'}} alt="" />
         <Paragraph strong>Tailwind</Paragraph>  
        
      </Flex>
      <Paragraph style={{marginLeft:'40PX',marginTop:"0PX"}}>
      Tailwind CSS is a highly customizable, low-level CSS framework for quickly creating beautiful designs without any annoying opinionated stylesheet nonsense.
      </Paragraph>
<br /><br />

 
      <Flex >
       <img src="../public/images/ts.png" style={{height:'40px'}} alt="" />
         <Paragraph strong>Typescript</Paragraph>  
        
      </Flex>
      <Paragraph style={{marginLeft:'40PX',marginTop:"0PX"}}>
      TypeScript is a programming language developed and maintained by Microsoft.
      </Paragraph>
      </Col>
    </Row>
    </>
  )
}

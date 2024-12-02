 import React from 'react'
 import { Col, Row ,Button, Flex, Segmented ,Typography,Space,Card } from 'antd';
const { Title,Paragraph } = Typography;

 export default function CenterContentPricing() {
   return (
     <>
      <Title  align="middle">Pricing</Title>
     <Row  align="middle" style={{textAlign:'center',marginLeft:"380px"}} gutter={16}>
    <Col align="middle"  span={4}>
      <Card title="Free" bordered={false}>
        <Paragraph>1 user</Paragraph>
        <Paragraph>Basic Support</Paragraph>
        <Paragraph>1 GB of storage </Paragraph>
        <Paragraph>Email support</Paragraph>
        <br /> 
        <Title level={5}>$0 for one user</Title>
      </Card>
    </Col>
    <Col span={4}>
      <Card title="Pro" bordered={false}>
      <Paragraph>5 users</Paragraph>
        <Paragraph>Priority Support</Paragraph>
        <Paragraph>10 GB of storage </Paragraph>
        <Paragraph>Phone and Email support</Paragraph>
        <br /> 
        <Title level={5}>$15 per user</Title>
      </Card>
    </Col>
    <Col span={4}>
      <Card title="Enterprise" bordered={false}>
      <Paragraph>50 users</Paragraph>
        <Paragraph>24/7 Support</Paragraph>
        <Paragraph>100 GB of storage </Paragraph>
        <Paragraph>Phone and Email support</Paragraph>
        <br /> 
        <Title level={5}>$29 per user</Title>
      </Card>
    </Col>
  </Row>
     <br /><br /><br /><br />
     </>
   )
 }
 
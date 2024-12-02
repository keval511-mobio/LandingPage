import React from 'react'
import { Button, Flex,Typography } from 'antd';
const { Title,Paragraph } = Typography;

function Footer() {
  return (
    <>
    <center>
        <img  style={{height:'70px'}}  src="../public/images/logo.png" alt="" /> 
        <br /><br />
      <Button type="text">Something</Button>
      <Button type="text">Something</Button>
      <Button type="text">Something</Button>
      <Button type="text">Something</Button>
      <Button type="text">Something</Button>
   <br /><br />
   <Paragraph> © 2024 designed by Issaaf Kattan</Paragraph>
    </center>

    </>
  )
}

export default Footer
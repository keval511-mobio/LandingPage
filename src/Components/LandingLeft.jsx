import React from 'react'
import { Button, Divider, Typography } from 'antd';
const { Title,Paragraph } = Typography;

export default function LandingLeft() {
  return (
     <>
     <br /><br /><br />
       <Title strong style={{textAlign:'center'}} >A plug n play template </Title>
       <Paragraph  style={{textAlign:'center'}} >Just edit the config.json file with details about your company and voila your beautiful state of the art landing page is ready to go live! Remember to also update your assets, add any images you want to show to /assets/images and link them in the config.json
</Paragraph>
     </>
  )
}

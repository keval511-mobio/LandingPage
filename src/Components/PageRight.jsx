import React from 'react'
import { Button, Divider, Typography } from 'antd';
const { Title,Paragraph } = Typography;
export default function PageRight() {
  return (
     <>
      <br /><br /><br />
       <Title strong style={{textAlign:'center'}} >Make it your own! </Title>
       <Paragraph  style={{textAlign:'center'}} >Play around with the theme.ts file and configure the color palette to match the branding of your company! If you're feeling wild, maybe change some tailwind css as well!
</Paragraph>
     </>
  )
}

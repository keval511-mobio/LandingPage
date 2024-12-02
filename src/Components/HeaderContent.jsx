import React from 'react'
import { Button, Divider, Typography } from 'antd';
 
const { Title,Paragraph } = Typography;

export default function HeaderContent() {
    const justifyOptions = [
        'flex-start',
        'center',
        'flex-end',
        'space-between',
        'space-around',
        'space-evenly',
      ];
  return (
  <>
  <Title strong>Use me as your <br /></Title>
  <Title strong style={{margin:'0px'}}> landing page. </Title>
  <br /><br />

  <Paragraph options={justifyOptions}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</Paragraph>

  <Button type="primary" danger  style={{padding:'25px'}}>
  Get started
    </Button>
    <Button type=" " danger  style={{padding:'25px',marginLeft:'10px'}}>
  Email us
    </Button>
    
  </>
  )
}

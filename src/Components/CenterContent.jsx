 
import React from 'react'
import { Button, Divider, Typography } from 'antd';
const { Title,Paragraph } = Typography;

export default function CenterContent() {
  return (
     <>
     <center>
        <Paragraph>
        Latest & greatest
        </Paragraph>
        <Title style={{margin:'0px'}} strong>
        All the best technologies out there!
        </Title>
        <Typography  editable level={5} style={{ margin: 0 ,fontSize:'20px' }}>
        It is a long established fact that a reader will be distracted by the readable
        </Typography >
        
        
        <Typography  editable level={5} style={{ margin: 0 ,fontSize:'20px' }}>       content of a page when looking at its layout. The point of using Lorem  </Typography >
         
        <Typography  editable level={5} style={{ margin: 0 ,fontSize:'20px' }}>    Ipsum is that it has a more-or-less normal distribution of letters, as opposed   </Typography >
         
        <Typography  editable level={5} style={{ margin: 0 ,fontSize:'20px' }}>    to using 'Content here, content here', making it look like readable English. </Typography >
      
     </center>
     </>
  )
}

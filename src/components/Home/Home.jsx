import React from 'react';
import { Col, Row, Carousel } from 'antd';


const contentStyle: React.CSSProperties = {
  height: '40%',
  color: '#fff',
  lineHeight: '50px',
  textAlign: 'center',
  background: '#364d79',
  
};


function Home() {
  return (
    <div>
      <Row>
      <Col span={6}></Col>
      <Col span={12}>
        <img src="../assets/logotipo.png" alt="" />
      </Col>
      <Col span={6}></Col>
    </Row>

    <Row>
      <Col span={6}></Col>
      <Col span={12}>
      <Carousel autoplay>
    
        <img style={contentStyle} src="https://images.pexels.com/photos/8794858/pexels-photo-8794858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <img style={contentStyle} src="https://images.pexels.com/photos/10806583/pexels-photo-10806583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <img style={contentStyle} src="https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <img style={contentStyle} src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
    
      </Carousel>
      </Col>
      <Col span={6}></Col>
    </Row>
    
    </div>
  )
}

export default Home
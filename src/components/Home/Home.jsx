import React from 'react';
import { Col, Row, Carousel } from 'antd';
import logo from '../../assets/logotipo.png';
import titulo from '../../assets/titulo.png'
import './Home.css'


const contentStyle = {
  height: '40%',
  lineHeight: '50px',
  textAlign: 'center',

};


function Home() {
  return (
    <div>
      
      

    <Row>
      <Col span={6}><img style={contentStyle}  src={logo} alt="" /></Col>
      <Col span={2}></Col>
      <Col span={10}>
      <img className='titulo'  src={titulo} alt="" />

      <Carousel autoplay>
    
        <img style={contentStyle} src="https://images.pexels.com/photos/8794858/pexels-photo-8794858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <img style={contentStyle} src="https://images.pexels.com/photos/10806583/pexels-photo-10806583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <img style={contentStyle} src="https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <img style={contentStyle} src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
    
      </Carousel>
      </Col>
      <Col span={2}></Col>
      <Col span={6}>
        
      </Col>
    </Row>
    
    </div>
  )
}

export default Home
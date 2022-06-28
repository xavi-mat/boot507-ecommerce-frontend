import React from 'react';
import { Carousel } from 'antd';
import logo from '../../assets/logotipo.png';
import titulo from '../../assets/titulo.png'

function Home() {
  return (
    <div className='home'>
      <img className='logo' src={logo} alt="" />
      <div className='container'>
        <img className='titulo' src={titulo} alt="" />
        <div className='paco'>
          <Carousel className='carousel' autoplay >
            <img src="https://images.pexels.com/photos/8794858/pexels-photo-8794858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <img src="https://images.pexels.com/photos/10806583/pexels-photo-10806583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <img src="https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <img src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Home
import React from 'react'
import './testonomials.css'
import avr from '../../assets/avr.jpg'
import {  Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


const Testonomials = () => {
  const data=
  [
    {
      avatar:avr,
      name:'tina dabbi',
      review:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam dolore nesciunt odio nulla perferendis nam expedita excepturi ullam fugiat tempore! '
    },
    {
      avatar:avr,
      name:'tina dabbi',
      review:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam dolore nesciunt odio nulla perferendis nam expedita excepturi ullam fugiat tempore! '
    },
    {
      avatar:avr,
      name:'tina dabbi',
      review:'lorem10 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam dolore nesciunt odio nulla perferendis nam expedita excepturi ullam fugiat tempore! '
    },
    {
      avatar:avr,
      name:'tina dabbi',
      review:'lorem10 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam dolore nesciunt odio nulla perferendis nam expedita excepturi ullam fugiat tempore!'
    }
  ]
 
  return (
    <section id="Certificate">
    <h5>proud to achieve</h5>
    <h2>Certificates</h2>
    <Swiper
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      className='container Certificates__container'
    >
      {data.map(({ avatar,name }, i) => (
        <SwiperSlide className='Certificate' key={i}>
          <div className='Certificate-head'>
            <h3>{name}</h3>
         
          </div>
          <div className='Certificate-img'>
          
              <img src={avatar} alt='cartificate' />
          
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
  )
}

export default Testonomials
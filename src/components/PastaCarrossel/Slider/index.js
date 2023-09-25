import React from 'react';
import './Slider.css'

import {Swiper,SwiperSlide} from 'swiper/react'


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const Slider = ()=>{

 const data = [
  {id: '1',nome:'after para sempre', image: '/imagens/afterparasempre.jpg'},
  {id: '2',nome: 'mega tubarao', image: '/imagens/megatubarao2.jpg'},
  {id: '3', nome: 'missao sobrevivencia', image: '/imagens/missaoSobrevivencia.jpg'},
  {id: '4',nome:'velozes e furiosos', image: '/imagens/velozesefuriosos10.jpg'},
 ]

  return(
  <>
  <div className='slider'>


    <Swiper
    slidesPerView={3}
    pagination={{clickable:true}}
    
    
    >
           
      {data.map( (item) => (
    <>
    
        <SwiperSlide id={item.id}>
        
         <img 
         className='slide-item'
         src={item.image}
         alt={item.nome}
         />
        </SwiperSlide>
    
    </>
      ))}
    </Swiper>
  </div>
  
  
  </>


  )
}

export default Slider
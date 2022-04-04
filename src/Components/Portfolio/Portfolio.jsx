import React from 'react'
import './Portfolio.css'
import 'swiper/css'
// import ShoesApp from '../../img/Works1.png'
// import ChatApp from '../../img/Works2.png'
// import MovieApp from '../../img/Works3.png'
import {Swiper, SwiperSlide} from 'swiper/react'
const Portfolio = () => {
  return (
    <div className="portfolio">
        <span>Recent Projects</span>
        <span>Portfolio</span>

        <Swiper spaceBetween={30} slidesPerView={3} grabCursor={true} className='portfolio-slider' >
            <SwiperSlide>
                <p>Work</p>
            </SwiperSlide>
            <SwiperSlide>
                <p>Work</p>
            </SwiperSlide>
            <SwiperSlide>
                <p>Work</p>
            </SwiperSlide>
            <SwiperSlide>
                <p>Work</p>
            </SwiperSlide>
            <SwiperSlide>
                <p>Work</p>
            </SwiperSlide>
            <SwiperSlide>
                <p>Work</p>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio
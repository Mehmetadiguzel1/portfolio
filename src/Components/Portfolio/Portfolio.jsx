import React, { useContext } from "react";
import './Portfolio.css'
import 'swiper/css'
import { themeContext } from "../../Context";

// import ShoesApp from '../../img/Works1.png'
// import ChatApp from '../../img/Works2.png'
// import MovieApp from '../../img/Works3.png'
import {Swiper, SwiperSlide} from 'swiper/react'
const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio">
        <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
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
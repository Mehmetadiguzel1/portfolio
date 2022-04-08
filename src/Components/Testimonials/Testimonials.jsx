import React, { useContext } from "react";
import './Testimonials.css'
import Man1 from '../../img/Man1.jpg'
import Man2 from '../../img/Man2.jpg'
import Girl1 from '../../img/Girl1.jpg'
import Girl2 from '../../img/Girl2.jpg'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination } from 'swiper'
import "swiper/css/pagination"
import "swiper/css"
import { themeContext } from "../../Context";

const Testimonials = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const clients =[

    {
      img: Man1,
      review: "Exellent customer service, their team responds in a very timely manner. Excellent designs tops for the internet without a doubt! ! highly recommend. So many great themes from them - you won't be disappointed!",
    },
    {
      img: Man2,
      review: "Mehmet was very helpful and friendly. Post purchase support is 100% friendly and professional. We never had to wait for a reply to our emails or ask again. Every answer was percise and top class.",
    },
    {
      img: Girl1,
      review: "Fully responsive and minimalistic themes are not easy to find. Mehmet's desing is a perfect march for us, as it is designed with non-frills mentality. Because of the clean layout, our content will get all the attention, and it will be readable on any device",
    },
    {
      img: Girl2,
      review: "Mehmet, the right person can respond in the fastest amount of time. I've gone from a three-day turnaround to a one-day turnaround.",
    },
  ]
  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      
      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span style={{color: darkMode?'white': ''}} >{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}; 


export default Testimonials
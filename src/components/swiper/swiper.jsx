import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay,Pagination } from 'swiper/modules';
import './swiperr.css'
import slide1 from '../../assets/images/slide1.webp'
import slide2 from '../../assets/images/slide2.webp'
import slide3 from '../../assets/images/slide3.webp'
import phone from '../../assets/images/phone.svg'
import clock from '../../assets/images/clock.svg'
import downHead from '../../assets/images/downHead.svg'

export const Swiperr = () => {
  return (
    <>
    <div className="swiperr-container">
      <Swiper 
        speed={1500} 
        autoplay={{
          delay: 5000, 
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,Pagination]} 
        className="mySwiper"
      >
        <SwiperSlide><img src={slide1} alt="Slide 1 Image" /></SwiperSlide>
        <SwiperSlide><img src={slide2} alt="Slide 2 Image" /></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="Slide 3 Image" /></SwiperSlide>
      </Swiper>
      <div className="swiperr-extra">
        <div className="swiperrFirst">
          <img className='mb' src={phone} alt="" />
          <div>03005447704</div>
        </div>
        <div className="swiperrFirst">
          <img src={clock} alt="" />
          <div>00:00 AM - 02:00 AM</div>
          <div>02:00 AM - 11:59 PM</div>
          <img className='mb' src={downHead} alt="" />
        </div>
      </div>
    </div>
    </>
  )
}

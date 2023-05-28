import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar, Autoplay } from "swiper";
function Hero() {
  return (
    <>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar,Autoplay]}
        className="mySwiper underHeader"
        autoplay
        loop
      >
        <SwiperSlide className="sliderLaptops">
          <img src="/wideRangeLaptops.jpg" alt="laptops" />
          <h2 className="logo">
            Find exact laptop according to your needs from vareity of options
            with Lap<span>Store</span>
          </h2>
        </SwiperSlide>
        <SwiperSlide className="sliderEbuy">
          <h2>
            Purchase with ease from super secure card payment methods or to the
            courier at delivery either by card or cash payment.
          </h2>
          <img src="/purchasingOnline.jpg" alt="online Purchase" />
        </SwiperSlide>
        <SwiperSlide className="sliderDelivery">
          <h2>Get fastest global delivery with moneyback guarantee.</h2>
          <img src="/freeDelivery.jpg" alt="delivery" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Hero;

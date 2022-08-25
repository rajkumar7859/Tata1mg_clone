import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper";
import { Add_div, CarePlan_div, Heading_div } from "./Styles/sliderImage.styled";

const SilderImage = () => {
  return (
    <>
      <Add_div>
        <div>
          <Swiper
            pagination={true}
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 5000 }}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src="	https://onemg.gumlet.io/0cd9ace6-372d-449e-9d93-8d0f3e5a29dc_1660813136.jpg?w=899&h=200&format=auto"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="	https://onemg.gumlet.io/a_ignore,w_899,h_200,c_fit,q_auto,f_auto/edq9awox0cpywojoubhb.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://onemg.gumlet.io/a_ignore,w_899,h_200,c_fit,q_auto,f_auto/a7v2ipno4azmdu6cnjuu.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://onemg.gumlet.io/a_ignore,w_899,h_200,c_fit,q_auto,f_auto/kcdcsb5yrkpxok5bpm8y.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://onemg.gumlet.io/image/upload/w_899,h_200,,a_ignore,q_auto,f_auto/v1651343112/f9wjmsnva75ajnlveqxi.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://onemg.gumlet.io/image/upload/w_899,h_200,,a_ignore,q_auto,f_auto/v1651478982/txwuakgo0hozrepgde4b.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://onemg.gumlet.io/image/upload/w_899,h_200,,a_ignore,q_auto,f_auto/v1641283756/kcdcsb5yrkpxok5bpm8y.png"
                alt=""
              />
            </SwiperSlide>

          </Swiper>
        </div>
        <div>
          <img
            src="	https://onemg.gumlet.io/a_ignore,w_480,h_200,c_fit,q_auto,f_auto/rohm7mk20fc4mairgjg0.png"
            alt="Rx"
          />
        </div>
      </Add_div>
      <Heading_div>
        <h1>Tata 1mg: India’s Leading Online Pharmacy & Healthcare Platform</h1>
      </Heading_div>
      <CarePlan_div>
        <img src="https://res.cloudinary.com/du8msdgbj/image/upload/v1647251796/ueyxzzku83yuvpqxyrwe.png" />
      </CarePlan_div>
    </>
  );
};

export default SilderImage;
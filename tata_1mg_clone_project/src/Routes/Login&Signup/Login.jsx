import React, { useContext, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
// import { LoginContext } from "./LoginProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Blok, Box } from "./Styles/Login.styled";
import { Login_form } from "./Login_Form";
import Signup from "./Signup";
// import { AuthContext } from "../../Context/AuthContext";
// import { Login_form } from "./Login_Form";
// import Signup from "./Signup";
// import { Otp_form } from "./Otp_form";

const Login = () => {
  // const { isvisible, setvisible, show, setShow } = useContext(AuthContext);
  const [Otp_show, setOtp_show] = useState(false);
  const [Number_Email, setNumber_Email] = useState(0);

  return (
    <>
      <Box block={"isvisible"}>
        <Blok>
          <div>
            <div>
              <Swiper
                pagination={true}
                modules={[Pagination, Autoplay]}
                autoplay={{ delay: 5000 }}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img
                    src="https://www.1mg.com/images/login-signup/Home-Delivery-of-Medicines.png"
                    alt=""
                  />
                  <div>Medicines, Home Delivered</div>
                  <div>
                    Order any medicine or health product and we’ll deliver it
                    for free. Enjoy discounts on everything.
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://www.1mg.com/images/login-signup/Health-Related-Queries.png"
                    alt=""
                  />
                  <div>Health Related Queries?</div>
                  <div>
                    Consult our certified doctors from anywhere, anytime, and
                    for free. We guarantee your privacy.
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://www.1mg.com/images/login-signup/Know-Your-Medicines.png"
                    alt=""
                  />
                  <div>Know Your Medicines</div>
                  <div>
                    View medicine information like usage, side effects and
                    cheaper substitutes before you take them.
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://www.1mg.com/images/login-signup/Lab-Tests-at-Home.png"
                    alt=""
                  />
                  <div>Lab Tests at Home</div>
                  <div>
                    Book any test from any lab. We'll collect the sample and
                    send the reports. Save up to 80% every time.
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://www.1mg.com/images/login-signup/Your-Go-To-Health-App.png"
                    alt=""
                  />
                  <div>Make Healthcare Simpler</div>
                  <div>
                    Get medicine information, order medicines, book lab tests
                    and consult doctors online from the comfort of your home.
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
<Login_form />
            {/* {Otp_show ? (
              <Otp_form
                setting={{
                  setShow,
                  setvisible,
                  setOtp_show,
                  Number_Email,
                  setNumber_Email,
                }}
              />
            ) : show ? (
              <Login_form
                setting={{
                  setShow,
                  setvisible,
                  setOtp_show,
                  Number_Email,
                  setNumber_Email,
                }}
              />
            ) : (
              <Signup
                setting={{
                  setShow,
                  setvisible,
                  setOtp_show,
                  Number_Email,
                  setNumber_Email,
                }}
              />
            )} */}
            <Signup />
          </div>
        </Blok>
      </Box>
    </>
  );
};

export default Login;

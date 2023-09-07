import React from "react";
import { Container } from "react-bootstrap";
import Footer_logo from "../assets/img/svg/footer_logo.svg";
import { FooterDiscord, FooterInstagram, FooterTwiter } from "./common/Icons";
import LEft_footer_bear from "../assets/img/webp/left_footer_bear.webp";
import Right_footer_bear from "../assets/img/webp/right_footer_bear.webp";
const MyFooter = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <>
      <section className="position-relative bg_clr_yellow pt-5 z_index_5">
        <div className="footer_bg_cloud position-absolute bottom-0 footer_cloud_h w-100 mt-5"></div>
        <div className="left_bear_w d-none d-sm-block">
          <img  data-aos="fade-right"
            className="position-absolute start-0  left_bear_w"
            src={LEft_footer_bear}
            alt="LEft_footer_bear"
          />
        </div>
        <div className="left_bear_w d-none d-sm-block">
          <img  data-aos="fade-left"
            className="position-absolute end-0 left_bear_w"
            src={Right_footer_bear}
            alt="footer_bear"
          />
        </div>
        <Container className="custome_container mt-lg-5">
          <div className="text-center">
            <a href="#">
              <img data-aos="fade-up" width={252} src={Footer_logo} alt="Footer_logo" />
            </a>
            <div className="pt-lg-5"></div>
            <ul className="m-0 ps-0 d-flex flex-column flex-md-row gap-3 gap-md-0 align-items-center justify-content-center pt-3 mt-lg-5 z_index_5" data-aos="fade-down">
              <li>
                <a
                  href="#Home"
                  className="fw-normal fs_sm clr_black ff_balsamiq footer_text_underline position-relative"
                >
                  Home
                </a>
              </li>
              <li className="ps-md-4 ms-md-3">
                <a
                  href="#About"
                  className="fw-normal fs_sm clr_black ff_balsamiq footer_text_underline position-relative"
                >
                  About
                </a>
              </li>
              <li className="ps-md-4 ms-md-3">
                <a
                  href="#Impact"
                  className="fw-normal fs_sm clr_black ff_balsamiq footer_text_underline position-relative"
                >
                  Impact
                </a>
              </li>
              <li className="ps-md-4 ms-md-3">
                <a
                  href="#Roadmap"
                  className="fw-normal fs_sm clr_black ff_balsamiq footer_text_underline position-relative"
                >
                  Roadmap
                </a>
              </li>
              <li className="ps-md-4 ms-md-3">
                <a
                  href="#Faq"
                  className="fw-normal fs_sm clr_black ff_balsamiq footer_text_underline position-relative"
                >
                  FAQ
                </a>
              </li>
            </ul>
            <div className="d-flex justify-content-center gap-4 pt-4 pt-lg-5"data-aos="fade-up">
              <div className=" nav_icon">
                <FooterTwiter />
              </div>
              <div className=" nav_icon">
                <FooterDiscord />
              </div>
              <div className=" nav_icon">
                <FooterInstagram />
              </div>
            </div>
          </div>
        </Container>
        <div className="pt-5">
          <div className="footer_underline w-100"></div>
          <h2 className="mb-0 ff_balsamiq fw-normal fs_xsm clr_black py-4 text-center">
            Copyright ©{year} All rights reserved Plump Kittens
          </h2>
        </div>
      </section>
    </>
  );
};
export default MyFooter;

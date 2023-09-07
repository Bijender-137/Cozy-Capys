import React from "react";
import MyNav from "./MyNav";
import { Container,} from "react-bootstrap";
import Hero_Panda from "../assets/img/webp/heroPanda.webp";
import Hero_tree_left from "../assets/img/webp/Tree_hero_left..webp";
import Hero_tree_right from "../assets/img/webp/Hero_Tree_right.webp";
import Green_wave from "../assets/img/webp/Hero_bottom_green_image_wave.webp";
import Hero_left_layer from "../assets/img/webp/hero_left_layer.webp";
import Hero_right_cloud from "../assets/img/svg/hero_right_cloud.svg";
import Clouds from "../assets/img/svg/clouds.svg";
const HeroSec = () => {
  return (
    <>
      <section id="Home" className="hero_sec_bg  position-relative  min_h_50 min_vh_75 min_h_100 z_index_2">
        <img width={200} className="position-absolute end-0 z-n1" src={Hero_right_cloud} alt="Hero_right_cloud" />
        <img width={113} className="position-absolute clouds_hero_1_left z-n1" src={Clouds} alt="Hero_right_cloud" />
        <img width={113} className="position-absolute clouds_hero_2_right z-n1 d-none d-sm-block" src={Clouds} alt="Hero_right_cloud" />
        <img width={77} className="position-absolute clouds_hero_3_right z-n1" src={Clouds} alt="Hero_right_cloud" />
        <img className="position-absolute hero_layer_w d-none d-md-block" src={Hero_left_layer} alt="Hero_left_layer" />
        <img
          className="position-absolute hero_left_tree z_index_3"
          src={Hero_tree_left}
          alt="Hero_tree_left"
        />
        <img
          className="position-absolute hero_right_tree z_index_3"
          src={Hero_tree_right}
          alt="Hero_tree_right"
        />
        <MyNav />
        <img
          className="position-absolute w-100 img_hero_wave_green"
          src={Green_wave}
          alt="Green_wave"
        />

        <div>
          <img
            className="position-absolute panda_img mx-auto w-75 z_index_2"
            src={Hero_Panda}
            alt="Hero_Panda"
          />
        </div>
        <Container className="custome_container py-4 py-xl-5">
          <div className="text-center d-flex justify-content-center flex-column align-items-center ">
            <h1 className="cozy_text_shadow fw-normal fs_8xl clr_orange ff_bomb line_h_103 mb-0">
              <span> Cozy</span>
              <span className=" clr_green ff_soda cozy_text_shadow ml_minus_10">
                Capys
              </span>
              <span className="ff_bomb text-white nyf_text_shadow ml_minus_5">
                NFT
              </span>
            </h1>
            <p className="fw-bold fs_md ff_balsamiq text-white mb-0 mt-4 position-relative">
              Cozy Capys is an impactful NFT project featuring 10,000 adorable
              capybara characters! <span className="d-md-block"></span> 10% of
              all proceeds will go to wildlife conservation organizations!
            </p>
            <div className="mt-4 pt-2 ">
              <button className="fw-bold fs_lg text-white ff_balsamiq border-0 rounded-5 btn_choose mt-1"data-aos="zoom-in">
                Join Us
              </button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HeroSec;

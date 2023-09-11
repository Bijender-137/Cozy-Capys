import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Gif_img from "../assets/img/gif/impactGif.gif";
import rainbow_img from "../assets/img/webp/rainbow_impact.webp";
import impact_layer from "../assets/img/png/impact_layer.png";
import Blue_wave from "../assets/img/webp/bluewave.webp";
import Impact_tree from "../assets/img/webp/Hero_Tree_right.webp";
import Left_cloud from "../assets/img/svg/impact_left_cloud.svg"
const Impact = () => {
  return (
    <>
      <section id="Impact" className="impact_bg_clr pt-5 pb-lg-5 position-relative z_index_5">
        <img className="position-absolute start-0 impact_cloud z-n1" src={Left_cloud} alt="Left_cloud" />
        <img data-aos="zoom-in" className="position-absolute impact_tree z_index_2 d-none d-lg-block" src={Impact_tree} alt="Impact_tree" />
        <img
          className="position-absolute z-n w-100 about_us_bottom_img_2"
          src={Blue_wave}
          alt="Blue_wave"
        />
        <img data-aos="fade-right"
          className="position-absolute raibow_img_w end-0 translate-middle-y z-n1 d-none d-sm-block"
          src={rainbow_img}
          alt="rainbow_img"
        />
        <img data-aos="fade-right"
          className="position-absolute w-100 bottom-0 z-n1"
          src={impact_layer}
          alt="impact_layer"
        />
        <Container className="custome_container py-md-5 mt-xl-5 ">
          <Row className="justify-content-between align-items-center flex-column-reverse flex-lg-row pt-5 mt-xl-5 z_index_5 position-relative">
            <Col sm={10} lg={6} className="mx-auto mx-lg-0">
              <div className="text-center text-lg-start mt-4 mt-lg-0">
                <h2 className="fw-normal fs_6xl ff_bomb text-white impact_text_shadow mb-0"data-aos="fade-down">
                  Impact
                </h2>
                <p className="mb-0 ff_balsamiq fs_md clr_lite_black mt-4"data-aos="fade-right">
                  Cozy Capys, an NFT project centered around adorable capybara
                  characters, aims to create a positive social impact. It
                  achieves this through initiatives such as donating 10% of
                  proceeds to wildlife conservation organizations, hosting
                  inclusive community events, and offering real-life animal
                  experiences. By combining the popularity of NFTs, the
                  endearing nature of capybaras, and meaningful initiatives,
                  Cozy Capys fosters a sense of responsibility, empathy, and
                  community among its members, contributing to wildlife
                  conservation and environmental preservation.
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="gif_img_w gif_img_border ms-lg-5 mx-auto mx-lg-0"data-aos="fade-left">
                <img className="w-100 h-100" src={Gif_img} alt="Gif_img" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Impact;

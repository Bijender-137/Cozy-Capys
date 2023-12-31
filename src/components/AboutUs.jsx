import React from "react";
import { Container } from "react-bootstrap";
import About_us_bottom from "../assets/img/png/aboutBottomCut.png";
import About_tree from "../assets/img/webp/aboutTree.webp";
import About_us_layer from "../assets/img/png/about_us_layer.png"
export const AboutUs = () => {
  return (
    <section id="About" className="py-5 about_us_bg_clr position-relative mt-md-5">
      <img className="position-absolute w-100 start-0 bottom-0" src={About_us_layer} alt="About_us_layer" />
      <img className="position-absolute about_tree d-none d-lg-block" src={About_tree} alt="About_tree" />
      <img
        className="position-absolute w-100 z_index_6 about_us_bottom_img"
        src={About_us_bottom}
        alt="About_us_bottom"
      />
      <Container className="custome_container mt-5 pt-md-5 pt-lg-0">
        <div className="about_us_bg_cloud_img about_us_bg_cloud_img_2 position-relative w-100 py-3 py-sm-4 py-lg-5">
          <div className="text-center pt-lg-5">
            <div className="p-lg-5 px-4">
              <p
                className=" fs_6xl ff_bomb clr_pink pinkShadow pt-lg-5 mt-lg-5"
                data-aos="fade-up"
              >
                About Us
              </p>
              <p
                className=" max_w_670 mx-auto text-center ps-lg-5 ff_balsamiq fs_md fw-normal clr_lite_black pb-2 mb-2"
                data-aos="zoom-in"
              >
                Cozy Capys is an impactful NFT project featuring 10,000 adorable
                capybara characters! Capybaras are sweet, caring, and gentle
                creatures that can form strong bonds with anyone around them. By
                donating 10% of all proceeds to organizations that support
                wildlife conservation, hosting inclusive community events, and
                offering real-life animal experiences, Cozy Capys aims to
                incorporate all the amazing qualities that these animals portray
                each and every day! Adopt your Cozy Capy today and join our
                wonderful community in giving back to the beautiful world around
                us.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default AboutUs;

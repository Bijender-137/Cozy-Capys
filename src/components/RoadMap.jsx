import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Arrow, Phase_1, Phase_2, Phase_3, Phase_4 } from "./common/Icons";
import Green_wave_bottom from "../assets/img/webp/greenwave.webp";
import Roadmap_tree from "../assets/img/webp/Hero_Tree_right.webp";
import Roadmap_cloud from "../assets/img/svg/roadmap_svg.svg";
const RoadMap = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <section className="bg_clr_green py-5 position-relative ">
        <img className="position-absolute roadmap_cloud_w" src={Roadmap_cloud} alt="Roadmap_cloud" />
        <img
          data-aos="zoom-in"
          className="position-absolute roadmap_tree z_index_3 d-none d-md-block"
          src={Roadmap_tree}
          alt="Roadmap_tree"
        />
        <img
          className="position-absolute green_wave_bottom w-100 z_index_2"
          src={Green_wave_bottom}
          alt="Green_wave_bottom"
        />
        <Container className="custome_container py-5 mt-xl-4">
          <div className="text-center text-lg-start" data-aos="fade-down">
            <h2 className="fw-normal fs_6xl ff_bomb text-white roadmap_shadow mb-0">
              Roadmap
            </h2>
            <p className="fw-normal fs_md text-white ff_balsamiq pt-3 mt-1">
              Nam duis feugiat tellus metus arcu pharetra arcu. Sed ultrices
              ullamcorper urna <span className="d-lg-block"></span> interdum.
              Maecenas neque augue mattis.
            </p>
          </div>
          <Row>
            <Col
              sm={10}
              lg={7}
              className="mx-auto mx-lg-0"
              data-aos="fade-right"
            >
              <div className="roadmap_border p-3 mt-5">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h2 className="text-white fw-bold fs_2xl ff_balsamiq p-1">
                      Phase
                    </h2>
                    <p className="fs_7xl ff_bomb fw-normal clr_lite_green mt-5 pt-4">
                      01
                    </p>
                  </div>
                  <div>
                    <Phase_1 />
                  </div>
                </div>
                <div className="d-flex align-items-baseline">
                  <p className="text-white ff_balsamiq fs_md">Preparation</p>
                  <div className="ms-2">
                    <Arrow />
                  </div>
                </div>
              </div>
            </Col>
            <Col
              sm={10}
              lg={5}
              className="mx-auto mx-lg-0"
              data-aos="fade-left"
            >
              <div className="roadmap_border p-3 mt-5">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h2 className="text-white fw-bold fs_2xl ff_balsamiq p-1">
                      Phase
                    </h2>
                    <p className="fs_7xl ff_bomb fw-normal clr_lite_green mt-5 pt-4">
                      02
                    </p>
                  </div>
                  <div>
                    <Phase_2 />
                  </div>
                </div>
                <div className="d-flex align-items-baseline ">
                  <p className="text-white ff_balsamiq fs_md ">
                    Community Engagement & Growth
                  </p>
                  <div className="ms-2">
                    <Arrow />
                  </div>
                </div>
              </div>
            </Col>
            <Col
              sm={10}
              lg={5}
              className="mx-auto mx-lg-0"
              data-aos="fade-right"
            >
              <div className="roadmap_border p-3 mt-5">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h2 className="text-white fw-bold fs_2xl ff_balsamiq p-1">
                      Phase
                    </h2>
                    <p className="fs_7xl ff_bomb fw-normal clr_lite_green mt-5 pt-4">
                      03
                    </p>
                  </div>
                  <div>
                    <Phase_3 />
                  </div>
                </div>
                <div className="d-flex align-items-baseline">
                  <p className="text-white ff_balsamiq fs_md">Launch</p>
                  <div className="ms-2">
                    <Arrow />
                  </div>
                </div>
              </div>
            </Col>
            <Col
              sm={10}
              lg={7}
              className="mx-auto mx-lg-0"
              data-aos="fade-left"
            >
              <div className="roadmap_border p-3 mt-5">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h2 className="text-white fw-bold fs_2xl ff_balsamiq p-1">
                      Phase
                    </h2>
                    <p className="fs_7xl ff_bomb fw-normal clr_lite_green mt-5 pt-4">
                      04
                    </p>
                  </div>
                  <div>
                    <Phase_4 />
                  </div>
                </div>
                <div className="d-flex align-items-baseline ">
                  <p className="text-white ff_balsamiq fs_md ">Real-life</p>
                  <div className="ms-2">
                    <Arrow />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default RoadMap;

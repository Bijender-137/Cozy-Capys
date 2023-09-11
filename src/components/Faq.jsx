import React from "react";
import { Container } from "react-bootstrap";
const Faq = () => {
  return (
    <>
      <section className="py-5 bg_clr_yellow"id="Faq">
        <Container>
          <h2
            className="fs_6xl ff_bomb text-white text-center faq_text_shadow mt-xl-5 pt-lg-5"
            data-aos="fade-down"
          >
            FAQ’s
          </h2>
          <div className="max_w_845 mx-auto mt-md-5 pt-4">
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item" data-aos="fade-down">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    className="accordion-button collapsed fw-bold  ff_balsamiq accordian_drop_shadow clr_black_faq"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Q1. What is Cozy Capys?
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse  fw-normal fs_md ff_balsamiq accordian_drop_shadow clr_black_faq"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Maxime, distinctio soluta quo suscipit architecto, molestiae
                    repudiandae aspernatur perspiciatis ab tenetur laborum,
                    dicta assumenda magnam atque debitis inventore numquam nihil
                    rem.
                  </div>
                </div>
              </div>
              <div className="accordion-item mt-3" data-aos="fade-down">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button
                    className="accordion-button collapsed  fw-bold  ff_balsamiq accordian_drop_shadow clr_black_faq"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    Q2. How does Cozy Capys give back to wildlife conservation?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse  fw-normal fs_md ff_balsamiq accordian_drop_shadow clr_black_faq"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Incidunt debitis at modi dolorum cumque et.
                  </div>
                </div>
              </div>
              <div className="accordion-item mt-3" data-aos="fade-down">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button
                    className="accordion-button collapsed  fw-bold  ff_balsamiq accordian_drop_shadow clr_black_faq"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Q3. What kind of community events does Cozy Capys host?
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse  fw-normal fs_md ff_balsamiq accordian_drop_shadow clr_black_faq"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Magni ratione recusandae atque architecto fugit quasi ipsum
                    cupiditate sit fuga voluptatibus.
                  </div>
                </div>
              </div>
              <div className="accordion-item mt-3" data-aos="fade-down">
                <h2 className="accordion-header" id="flush-headingFour">
                  <button
                    className="accordion-button collapsed  fw-bold  ff_balsamiq accordian_drop_shadow clr_black_faq"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                  >
                    Q4. How can I stay updated on Cozy Capys news and
                    announcements?
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  className="accordion-collapse collapse  fw-normal fs_md ff_balsamiq accordian_drop_shadow clr_black_faq"
                  aria-labelledby="flush-headingFour"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Cum nostrum aspernatur repellat cupiditate accusamus ut
                    voluptas sunt ipsum tenetur assumenda.
                  </div>
                </div>
              </div>
              <div className="accordion-item mt-3" data-aos="fade-down">
                <h2 className="accordion-header" id="flush-headingFive">
                  <button
                    className="accordion-button collapsed  fw-bold  ff_balsamiq accordian_drop_shadow clr_black_faq"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFive"
                    aria-expanded="false"
                    aria-controls="flush-collapseFive"
                  >
                    Q5. How can I adopt my Cozy Capy?
                  </button>
                </h2>
                <div
                  id="flush-collapseFive"
                  className="accordion-collapse collapse  fw-normal fs_md ff_balsamiq accordian_drop_shadow clr_black_faq"
                  aria-labelledby="flush-headingFive"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                    ab quo perferendis a. Consequuntur, exercitationem.
                  </div>
                </div>
              </div>
              <div className="accordion-item mt-3 rounded-4" data-aos="fade-down">
                <h2 className="accordion-header" id="flush-headingSix">
                  <button
                    className="accordion-button collapsed  fw-bold  ff_balsamiq accordian_drop_shadow clr_black_faq"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseSix"
                    aria-expanded="false"
                    aria-controls="flush-collapseSix"
                  >
                    Q6. What utility does owning a Cozy Capy provide?
                  </button>
                </h2>
                <div
                  id="flush-collapseSix"
                  className="accordion-collapse collapse  fw-normal fs_md ff_balsamiq accordian_drop_shadow clr_black_faq"
                  aria-labelledby="flush-headingSix"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Libero, inventore reprehenderit quasi aliquid nemo
                    consequatur fugit quo laudantium veritatis, ut iste
                    quibusdam deserunt ea praesentium corrupti optio doloremque
                    officiis corporis?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Faq;

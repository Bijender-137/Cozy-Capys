import { React, useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Nav } from "react-bootstrap";
import Logo from "../assets/img/webp/page_logo.webp";
import { Instagram, TwiterIcon, Discord } from "./common/Icons";

const MyNav = () => {
  const [Open, setOpen] = useState(true);
  function showNav() {
    setOpen(
      !Open,
      document.getElementById("nav_bar_animation").classList.toggle("opennav"),
      document.getElementById("dis_none").classList.toggle("logo_not_visible")
    );
  }
  if (!Open) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <Nav className="position-relative z-3 w-100 py-2">
        <div className="my_container container d-flex justify-content-between align-items-center">
          <div id="dis_none" className="d-flex align-items-center">
            <a href="#" className="nav_logo_w">
              <img src={Logo} alt="Logo" className="w-100" />
            </a>
          </div>
          <div className="d-lg-flex align-items-center justify-content-between d-none d-lg-block">
            <ul className="d-flex justify-content-between align-items-center mb-0 p-2">
              <li>
                <a href="#" className="text-white fw-bold ff_balsamiq fs_sm">
                  Home
                </a>
              </li>
              <li className="ms-lg-4 ps-lg-2">
                <a href="#" className="text-white fw-bold ff_balsamiq fs_sm">
                  About
                </a>
              </li>
              <li className="ms-lg-4 ps-lg-2">
                <a href="#" className="text-white fw-bold ff_balsamiq fs_sm">
                  Impact
                </a>
              </li>
              <li className="ms-lg-4 ps-lg-2">
                <a href="#" className="text-white fw-bold ff_balsamiq fs_sm">
                  Roadmap
                </a>
              </li>
              <li className="ms-lg-4 ps-lg-2">
                <a href="#" className="text-white fw-bold ff_balsamiq fs_sm">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className=" d-sm-flex d-none d-sm-block">
            <div className="nav_icon">
              <TwiterIcon />
            </div>
            <div className="nav_icon ms-3">
              <Discord />
            </div>
            <div className="nav_icon ms-3">
              <Instagram />
            </div>
          </div>
          <div
            className="d-flex justify-content-between flex-column d-lg-none "
            onClick={showNav}
          >
            <h2 className="position-relative text-white fs_3xl z_100">
              {Open ? <HiMenuAlt1 /> : <AiOutlineClose />}
            </h2>
          </div>
          <div className={`d-flex bar d-lg-none ${Open ? "" : "start-0"}`}>
            <ul
              id="nav_bar_animation"
              className="d-flex justify-content-between flex-column gap-3 align-items-center mb-0 ps-0 navbar_scroll"
            >
              <li onClick={showNav}>
                <a href="#Home" className="text-white fw-bold ff_balsamiq fs_sm">Home</a>
              </li>
              <li onClick={showNav}>
                <a href="#About" className="text-white fw-bold ff_balsamiq fs_sm">About</a>
              </li>
              <li onClick={showNav}>
                <a href="#Impact" className="text-white fw-bold ff_balsamiq fs_sm">Impact</a>
              </li>
              <li onClick={showNav}>
                <a href="#Roadmap" className="text-white fw-bold ff_balsamiq fs_sm">Roadmap</a>
              </li>
              <li onClick={showNav}>
                <a href="#Faq" className="text-white fw-bold ff_balsamiq fs_sm">FAQ</a>
              </li>
            </ul>
            <div className="gap-2 d-flex mt-4 d-sm-none">
              <div className="nav_socal_icon">
                <TwiterIcon />
              </div>
              <div className="nav_socal_icon">
                <Discord />
              </div>
              <div className="nav_socal_icon">
                <Instagram />
              </div>
            </div>
          </div>
        </div>
      </Nav>
    </>
  );
};

export default MyNav;

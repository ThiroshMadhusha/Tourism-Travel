import React, { useEffect } from "react";
import "./popular.css";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";

import { Data } from "../popular/populardata";

import img from "../../assets/images/img1.jpg";

const Popular = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="popular" className="popular section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <div className="textDiv">
            <h2
              data-aos="fade-up"
              data-aos-duration="2500"
              className="secTitle"
            >
              Popular Destination
            </h2>
            <p data-aos="fade-up" data-aos-duration="3500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              rerum reiciendis sed facilis officia culpa, maxime laborum ea
              ducimus hic fuga, maiores nesciunt vero dolore, dolorum iste
              perspiciatis minus suscipit.S
            </p>
          </div>
          {/* <div
            data-aos="fade-left"
            data-aos-duration="3000"
            className="iconsDiv flex"
          >
            <BsArrowLeftCircleFill className="icon leftIcon" />
            <BsArrowRightCircleFill className="icon rightIcon" />
          </div> */}
        </div>

        <div className="mainContainer grid">
          {Data.map(({ id, image, title, description, location, grade }) => {
            return (
              <div
                data-aos="fade-up"
                // data-aos-duration="2500"
                className="singleDestination"
              >
                <div className="destImage">
                  <img src={image} alt="" />

                  <div className="overlayInfo">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <BsArrowRightSquareFill className="icon" />
                  </div>
                </div>
                <div className="destFooter">
                  <div className="number">{title}</div>
                  <div className="destText flex">
                    <h6>{location}</h6>
                    <span className="flex">
                      <span className="dot">
                        <BsDot className="icon" />
                      </span>
                      {id}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Popular;

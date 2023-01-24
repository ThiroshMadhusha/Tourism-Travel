import React, { useEffect } from "react";
import "./about.css";
import { Data } from "./aboutdata";
import video from "../../assets/images/home.mp4"
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
    useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="about" className="about section grid">
      <div className="secContainer">
        <h3 data-aos="fade-up" data-aos-duration="2500" className="title">
          Why Hikings?
        </h3>
        <div className="mainContainer container grid">
          {Data.map(({ id, title, image, description }) => {
            return (
              <div className="singleItem">
                <img
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  src={image}
                  alt=""
                />
                <h3 data-aos="fade-right" data-aos-duration="3000">
                  100+ {title}
                </h3>
                <p data-aos="fade-right" data-aos-duration="4000">
                  {description}
                </p>
              </div>
            );
          })}
        </div>
        {/* <div className="videoCard container">
          <div className="cardContent grid">
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="cardText"
            >
              <h2>Wonderful House Experiece Their</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                adipisci, quas veniam dolorum nulla esse? Dolorum iusto
                quibusdam ut amet reprehenderit obcaecati quae voluptatem iste.
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="2000"
              className="cardVideo"
            >
              <video src={video} autoPlay loop muted type="video/mp4"></video>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;

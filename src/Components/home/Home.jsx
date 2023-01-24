import React, { useEffect } from "react";
import "./home.css";

import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="home" className="home">
      {/* <video loop autoPlay muted className="home">
          <source
            src={require("../../assets/images/home.mp4")}
            type="video/mp4"
          />
        </video> */}
      <div className="secContainer container">
        <div className="homeText">
          <h1 data-aos="fade-up" className="title">
            Plan Your Trip With CuTravel
          </h1>
          <p data-aos="fade-up" data-aos-duration="2500" className="subTitle">
            Travel to your favourite place with respectful of the environmrnt.
          </p>
          <button data-aos="fade-up" data-aos-duration="3000" className="btn">
            <a href="#">Explore Now</a>
          </button>
        </div>

        {/* Remove One */}
        <div className="homeCard grid">
          <div
            data-aos="fade-right"
            data-aos-duration="2500"
            className="locationDiv"
          >
            <label htmlFor="location">Location</label>
            <input type="text" placeholder="Destination" />
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="3000"
            className="disDiv"
          >
            <label htmlFor="location">Distance</label>
            <input type="text" placeholder="500 Km / Meter" />
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="3500"
            className="priceDiv"
          >
            <label htmlFor="location">Distance Price</label>
            <input type="text" placeholder="$100 - $150" />
          </div>
          <button data-aos="fade-right" data-aos-duration="4500" className="btn">
            Search...
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;

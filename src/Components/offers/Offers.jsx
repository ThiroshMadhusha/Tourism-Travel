import React, { useEffect } from "react";
import "./offer.css";
import { MdKingBed } from "react-icons/md";
import { FaBath } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { MdOutlineAirportShuttle } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import { Data } from "./offersdata";
// import img from "../../assets/images/img1.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
const Offers = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="offer" className="offer container section">
      <div className="secContainer">
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="secIntro"
        >
          <h2
            data-aos="fade-up"
            data-aos-duration="3000"
            className="secTitle"
          >
            Special Offers
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt
            veritatis enim soluta culpa necessitatibus iure id doloremque est
            aperiam.
          </p>
        </div>
        <div className="mainContainer grid">
          {Data.map(
            ({ id, image, title, location, price, offer, bathroom, bed }) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  className="singleOffer"
                >
                  <div className="destImage">
                    <img src={image} alt="" />
                    <span className="discount">{offer} Off</span>
                  </div>

                  <div className="offerBody">
                    <div className="price flex">
                      <h4>{price}</h4>
                      <span className="status">For Rent</span>
                    </div>

                    <div className="fcard flex">
                      <div className="singlefcard flex">
                        <MdKingBed className="icon" />
                        <small>{bed} Beds</small>
                      </div>
                      <div className="singlefcard flex">
                        <FaBath className="icon" />
                        <small>{bathroom} tube</small>
                      </div>
                      <div className="singlefcard flex">
                        <FaWifi className="icon" />
                        <small>Wifi</small>
                      </div>
                      <div className="singlefcard flex">
                        <MdOutlineAirportShuttle className="icon" />
                        <small>Transport</small>
                      </div>
                    </div>
                    <div className="location flex">
                      <MdLocationPin className="icon" />
                      <small>{location}</small>
                    </div>

                    <button className="btn flex">
                      View Details
                      <BsArrowRightShort className="icon" />
                    </button>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Offers;

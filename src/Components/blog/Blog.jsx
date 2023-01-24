import React, { useEffect } from "react";
import "./blog.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Data } from "../blog/blogdata";
import Aos from "aos";
import "aos/dist/aos.css";

const Blog = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="blog" className="blog container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 data-aos="fade-up" data-aos-duration="2500" className="secTitle">
            Our Blog
          </h2>
          <p data-aos="fade-up" data-aos-duration="3500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            cum voluptatibus maiores ullam quidem, voluptatum id ut. Laborum,
            delectus obcaecati.
          </p>
        </div>
        <div className="mainContainer grid">
          {Data.map(({ id, image, title, description }) => {
            return (
              <div className="singlePost grid">
                <div
                  data-aos="fade-right"
                  data-aos-duration="3000"
                  className="imgDiv"
                >
                  <img src={image} alt={title} />
                </div>
                <div className="postDetails">
                  <h3 data-aos="fade-up" data-aos-duration="2000">
                    {title}
                  </h3>
                  <p data-aos="fade-up" data-aos-duration="2500">
                    {description}
                  </p>
                  <a
                    href="#"
                    className="flex"
                    data-aos="fade-up"
                    data-aos-duration="3000"
                  >
                    Read More
                    <AiOutlineArrowRight className="icons" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;

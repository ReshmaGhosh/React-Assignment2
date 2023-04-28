import React from "react";
import "./Home.css";
import image from "../image/me.png";
import calorie from "../image/calorie1.jpg";
import fasting from "../image/fasting_timer.jpg";
import music from "../image/music1.jpg";
import pic1 from "../image/pic1.png";
import pic2 from "../image/pic2.png";
import pic3 from "../image/pic3.png";
import pic4 from "../image/pic4.png";
import pic5 from "../image/pic5.png";

export default function Home() {
  return (
    <div className="background">
      <div className="home-div">
        <section className="section1">
          <aside>
            <img src={image} alt="image" />
            <p className="portfolio">Portfolio</p>
          </aside>
          <article>
            <h1 className="article-h1">Full-Stack Web Developer</h1>
            <p className="article-p">
              My interest in technology encouraged me to pursue my bachelor's in
              Computer Science and masters in Information Technology. I have
              huge interest in full stack web development and app development.
            </p>
          </article>
        </section>
        <section className="section2">
          <h1>design</h1>
          <h4>outside, tasty on the inside.</h4>
          <p>
            Technology refers to the application of scientific knowledge and
            methods for practical purposes, usually in industry, commerce, or
            everyday life. It involves the creation, development, and use of
            tools, machines, systems, and processes that make tasks easier,
            faster, more efficient, or more effective. Technology has played a
            significant role in shaping human civilization and transforming
            various fields, such as medicine, transportation, communication,
            manufacturing, education, and entertainment.
          </p>
          <button>LEARN MORE</button>
        </section>
        <section className="section3">
          <div className="projects">
            <div className="image1">
              <img src={calorie} alt="img1" />
            </div>
            <div className="image2">
              <img src={fasting} alt="" />
            </div>
            <div className="image3">
              <img src={music} alt="" />
            </div>
            <div className="image4">
              <img src={pic1} alt="" />
            </div>
            <div className="image5">
              <img src={pic2} alt="" />
            </div>
            <div className="image6">
              <img src={pic3} alt="" />
            </div>
            <div className="image7">
              <img src={pic4} alt="" />
            </div>
            <div className="image8">
              <img src={pic5} alt="" />
            </div>
          </div>
          <div className="class-btn">
            <button className="btn">LEARN MORE</button>
          </div>
        </section>
      </div>
    </div>
  );
}

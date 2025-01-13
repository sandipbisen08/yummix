import React from "react";

import "./Chef.css";
import { SubHeading } from "../../components";
import { images } from "../../constants";
const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef-img?" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">Our Philosophy & Passion for Food</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
          "Food is not just about nourishment, it's about creating unforgettable moments."
          </p>
        </div>
        <p className="p__opensans" >  At Yummix, we believe that every dish is a celebration. From our carefully sourced ingredients to our innovative recipes, our goal is to craft an experience that delights all your senses. We strive for excellence and take pride in each plate we serve!</p>
      </div>

      <div className="app__chef-sign">
        <p>Rolin Jha </p>
        <p className="p__opensans"> Chef and Founder</p>
        {/* <img src={images.sign} alt="" /> */}
      </div>
    </div>
  </div>
);

export default Chef;

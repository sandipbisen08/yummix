import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
	<div className="app__aboutus app__bg flex__center section__padding" id="about">
		<div className="app__aboutus-overlay flex__center">
			{/* <img src={images.G} alt="G_overlay" /> */}
		</div>

		<div className="app__aboutus-content flex__center">
			<div className="app__aboutus-content_about">
				<h1 className="headtext__cormorant">About Us</h1>
				<img src={images.spoon} alt="about_spoon" className="spoon__img" />
				<p className="p__opensans">
					At <span className="golden">Yummix</span>, we pride ourselves on delivering a culinary experience like no other. Whether it's perfectly balanced spices, flavorful marinades, or our unique sides — everything is prepared in-house with passion and expertise.
				</p>
				<button type="button" className="custom__button">
					Know More
				</button>
			</div>

			<div className="app__aboutus-content_knife flex__center">
				<img src={images.knife} alt="about_knife" />
			</div>

			<div className="app__aboutus-content_history">
				<h1 className="headtext__cormorant">Our History</h1>
				<img src={images.spoon} alt="about_spoon" className="spoon__img" />
				<p className="p__opensans">
					The journey of <span className="golden">Yummix</span> began with a vision to bring together diverse culinary traditions under one roof. Over the years, we have grown into a destination for food lovers seeking an authentic blend of vegetarian and non-vegetarian delights, crafted with love and innovation.
				</p>
				<button type="button" className="custom__button">
					Know More
				</button>
			</div>
		</div>
	</div>
);

export default AboutUs;

import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
	<div className="app__header app__wrapper section__padding" id="home">
		{/* <div className="app__wrapper_info">
			<SubHeading title="🐔 Murg Da <span class='golden'>Swaad </span>🐔" />
			<h1 className="app__header-h1">Crousti 100% </h1>
			<h1 className="app__header-h1">Fait Maison !</h1>
			<p className="p__opensans" style={{ margin: "2rem 0" }}>
				Chez <span className="golden">O'Poulet</span>, nous avons fait le choix du{" "}
				<span className="golden">fait maison</span> pour vous offrir le meilleur du poulet rôti.<br/> Que ce soit les
				épices savamment dosées, les marinades riches en saveurs, ou nos accompagnements uniques — tout est
				préparé sur place avec passion et savoir-faire.{" "}
			</p>
			<button type="button" className="custom__button">
				Explore Menu
			</button>
		</div> */}
		<div className="app__wrapper_info">
    <SubHeading title="🍛 Welcome to <span class='golden'>Yummix</span> 🍛" />
    <h1 className="app__header-h1">Delight in Every Bite</h1>
    {/* <h1 className="app__header-h1">Veg & Non-Veg Perfection</h1> */}
    <p className="p__opensans" style={{ margin: "2rem 0" }}>
        At <span className="golden">Yummix</span>, we bring you a fusion of flavors, blending the finest vegetarian and non-vegetarian dishes. From rich curries to sizzling grills, our menu offers something for everyone, crafted with fresh, high-quality ingredients.
    </p>
    <button type="button" className="custom__button">
        Explore Menu
    </button>
</div>
		<div className="app__wrapper_img">
			<img src={"https://images.unsplash.com/photo-1727387562395-6be53e861975?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="header_img" />
		</div>
	</div>
);

export default Header;

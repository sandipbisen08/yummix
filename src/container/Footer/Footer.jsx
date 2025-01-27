import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">7th Floor, 80 Feet Rd, infront of Starbucks, Koramangala, Bengaluru, Karnataka 560030</p>
        <p className="p__opensans">+91 7776907776</p>
        <p className="p__opensans">+91 7776907777</p>
      </div>

      <div className="app__footer-links_logo">
        {/* <img src={images.gericht} alt="footer_logo" /> */}
        Yummix
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} alt=''/>
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">04:00 pm - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">02:00 pm - 02:00 am</p>
      </div>
    </div>

    <div className="footer__copyright" style={{ marginTop: '2rem' }}>
      <p className="p__opensans"> © 2024 Yummix. All Rights reserved.</p>
      <p className="p__opensans" style={{color: '#DCCA87', fontSize: '1rem', textAlign: 'center'}}>Powered by <a href="https://www.brandpixel.agency/" target="_blank" rel="noopener noreferrer" style={{color: '#7A288A', fontSize: '1rem', textAlign: 'center', fontWeight: 'bold'}}>BrandPixelAgency</a></p>    
      </div>

  </div>
);

export default Footer;

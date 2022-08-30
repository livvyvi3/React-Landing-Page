import React from "react";
import fbIcon from '../../images/facebook-f-brands.svg';
import instaIcon from '../../images/instagram-brands.svg';
import twtIcon from '../../images/twitter-brands.svg';

const Footer = () =>(
    <footer class="icon-bar">
      <div class="facebook-logo"><a href="https://www.facebook.com/"><object type="image/svg+xml" data={fbIcon}>Facebook-logo</object></a></div>
      <div class="instagram-logo"><a href="https://www.instagram.com/"><object type="image/svg+xml" data={instaIcon}>Instagram-logo</object></a></div>
      <div class="twitter-logo"><a href="https://twitter.com/?lang=en"><object type="image/svg+xml" data={twtIcon}>Twitter-logo</object></a></div>
    </footer>
)
export default Footer;
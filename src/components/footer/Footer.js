import React from 'react';
import logo from '../../assets/logo.png';
const Footer = () => {
  return (
    <footer id="contact">
      <div class="container">
        <div class="footer-logo">
          <img src={logo} />
        </div>
        <h1>
          We collaborate with ambitious brands and people. Let's build something
          great together.
        </h1>
        <p>
          <i class="fas fa-phone" />
          (65) 9845-6743
        </p>
        <p>
          <i class="fas fa-envelope" /> winston@brickworks.online
        </p>
        <p>
          <i class="fab fa-weixin" /> winwater888 (微信)
        </p>
        <div class="socialicons">
          <ul>
            <li>
              <a>
                <span />
              </a>
            </li>
            <li>
              <a>
                <span />
              </a>
            </li>
            <li>
              <a>
                <span />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

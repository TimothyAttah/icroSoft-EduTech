import React from 'react';
import * as Styles from './FooterStyles';

const Footer = () => {
  return (
    <footer class='footer'>
      <div class='container'>
        <div class='row'>
          <div class='col-lg-3 footer_col'>
            <div class='footer_about'>
              <div class='logo_container'>
                <a href='#'>
                  <div class='logo_content d-flex flex-row align-items-end justify-content-start'>
                    <div class='logo_img'>
                      <img src='images/logo.png' alt='' />
                    </div>
                    <div class='logo_text'>learn</div>
                  </div>
                </a>
              </div>
              <div class='footer_about_text'>
                <p>
                  Maecenas rutrum viverra sapien sed fermentum. Morbi tempor
                  odio eget lacus tempus pulvinar.
                </p>
              </div>
              <div class='footer_social'>
                <ul>
                  <li>
                    <a href='#'>
                      <i class='fa fa-google-plus' aria-hidden='true'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <i class='fa fa-pinterest' aria-hidden='true'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <i class='fa fa-facebook' aria-hidden='true'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <i class='fa fa-twitter' aria-hidden='true'></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class='copyright'>
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved | This template is made with{' '}
                <i class='fa fa-heart-o' aria-hidden='true'></i> by{' '}
                <a href='https://colorlib.com' target='_blank'>
                  Colorlib
                </a>
              </div>
            </div>
          </div>

          <div class='col-lg-3 footer_col'>
            <div class='footer_links'>
              <div class='footer_title'>Quick menu</div>
              <ul class='footer_list'>
                <li>
                  <a href='index.html'>Home</a>
                </li>
                <li>
                  <a href='about.html'>About us</a>
                </li>
                <li>
                  <a href='#'>Testimonials</a>
                </li>
                <li>
                  <a href='#'>Services</a>
                </li>
                <li>
                  <a href='contact.html'>Contact</a>
                </li>
                <li>
                  <a href='#'>Facts</a>
                </li>
              </ul>
            </div>
          </div>

          <div class='col-lg-3 footer_col'>
            <div class='footer_links'>
              <div class='footer_title'>Useful Links</div>
              <ul class='footer_list'>
                <li>
                  <a href='courses.html'>Courses</a>
                </li>
                <li>
                  <a href='#'>Events</a>
                </li>
                <li>
                  <a href='news.html'>News</a>
                </li>
                <li>
                  <a href='#'>Teachers</a>
                </li>
                <li>
                  <a href='#'>Links</a>
                </li>
                <li>
                  <a href='#'>FAQ</a>
                </li>
              </ul>
            </div>
          </div>

          <div class='col-lg-3 footer_col'>
            <div class='footer_contact'>
              <div class='footer_title'>Contact Us</div>
              <div class='footer_contact_info'>
                <div class='footer_contact_item'>
                  <div class='footer_contact_title'>Address:</div>
                  <div class='footer_contact_line'>
                    1481 Creekside Lane Avila Beach, CA 93424
                  </div>
                </div>
                <div class='footer_contact_item'>
                  <div class='footer_contact_title'>Phone:</div>
                  <div class='footer_contact_line'>+53 345 7953 32453</div>
                </div>
                <div class='footer_contact_item'>
                  <div class='footer_contact_title'>Email:</div>
                  <div class='footer_contact_line'>yourmail@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

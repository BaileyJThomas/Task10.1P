import React from 'react'
import './footer.css';
import 'boxicons'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-primary'>
        <div className="footer-primary-section">
          <h3>Explore</h3>
          <div>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Questions</a></li>
              <li><a href="#">Articles</a></li>
              <li><a href="#">Tutorials</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-primary-section">
        <h3>Support</h3>
          <div>
            <ul>
              <li><a href="#">FAQ's</a></li>
              <li><a href="#">Help</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-primary-section">
        <h3>Stay Connected</h3>
          <div>
            <ul className="socials">
              <li><a href="#"><box-icon color="#aaa" type='logo' name='facebook-square'></box-icon></a></li>
              <li><a href="#"><box-icon color="#aaa" name='twitter' type='logo' ></box-icon></a></li>
              <li><a href="#"><box-icon color="#aaa" name='instagram-alt' type='logo' ></box-icon></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='footer-secondary'>
        <h2>DEV@Deakin 2024</h2>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Code of Conduct</a></li>
          </ul>
      </div>
    </div>
  )
}

export default Footer

// src/components/Footer/LabFooter.jsx
import React from 'react';
import './CustomFooter.css';

export default function LabFooter() {
  return (
    <footer className="lab-footer">
      <div className="lab-footer-container">
        <div className="lab-footer-col lab-footer-logo-col">
          <h1>Labotronics</h1>
          <p><strong>Address:</strong> Labotronics Scientific. 1007 N Orange St., Wilmington, DE 19801, USA</p>
          <p><strong>Mail:</strong> info@labtronics.com</p>
          <p><strong>WhatsApp:</strong> +1 579 401 0534</p>

          <div className="lab-footer-newsletter">
            <h4>Get Our Newsletter</h4>
            <p>To be updated with all the latest products</p>
            <div className="lab-footer-newsletter-box">
              <input type="email" placeholder="Enter your email address" />
              <button>SIGN UP</button>
            </div>
            <label className="lab-footer-checkbox">
              <input type="checkbox" /> I am not a robot
            </label>
          </div>

          <div className="lab-footer-socials">
            <span>Follow Us:</span>
            <i className="lab-icon fab fa-facebook"></i>
            <i className="lab-icon fab fa-linkedin"></i>
            <i className="lab-icon fab fa-instagram"></i>
            <i className="lab-icon fab fa-youtube"></i>
          </div>
        </div>

        <div className="lab-footer-col">
          <h2>Categories</h2>
          <ul>
            <li>Anemometer</li>
            <li>Baths and Circulator</li>
            <li>Colony Counter</li>
            <li>Dehumidifier</li>
            <li>Drying Cabinet</li>
            <li>ELISA Workstation</li>
            <li>Filtration System</li>
            <li>Gas Detector</li>
            <li>Gradient PCR Machine</li>
          </ul>
        </div>

        <div className="lab-footer-col1">
          <ul>
            <li>Oxidation Stability Tester</li>
            <li>Oxygen Bomb Calorimeter</li>
            <li>Pathology Workstation</li>
            <li>PCR Cabinet</li>
            <li>Penetrometer</li>
            <li>UV Analyzer</li>
            <li>Tissue Processor</li>
            <li>Vacuum Pump</li>
            <li>View All</li>
          </ul>
        </div>

        <div className="lab-footer-col">
          <h2>Quick Links</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Our Products</li>
            <li>Laboratory Equipment</li>
            <li>Product Gallery</li>
            <li>User Manuals</li>
            <li>Return & Refund</li>
            <li>Contact Us</li>
            <li>Sitemap</li>
          </ul>
        </div>
      </div>

      <div className="lab-footer-bottom">
        <p>Copyright © Labotronics Scientific 2025</p>
      </div>
    </footer>
  );
}

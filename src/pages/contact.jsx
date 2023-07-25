import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./contact.css";

export const Contact = () => {
  return (
    <div className="contact-container">
      {/* Contact Title */}
      <h1 className="contact-title">Contact</h1>

      {/* Social Media Icons with Links */}
      <div className="social-icons">
        <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.twitter.com/example" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>

      {/* Contact Information */}
      <div className="contact-info">
        <p>Email: contact@example.com</p>
        <p>Address: 123 Main Street, City</p>
        <p>Phone: (123) 456-7890</p>
      </div>

      {/* Example Google Map */}
      <div className="map">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-71.06367001234567!3d42.36068001234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDM1JzEyLjkiTiA3McKwMTEnNTUuNCJX!5e0!3m2!1sen!2sus!4v1234567890123"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

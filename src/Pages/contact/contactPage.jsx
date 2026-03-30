import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import './ContactPage.css'; 
import banner from "../../../public/contact/banner.png"
import img from "../../../public/contact/img.png"
import maskimg from "../../../public/auth-media/MaskImg.png"
import location from "../../../public/assets/location_on.svg";
import phone from "../../../public/assets/call.svg";
import mail from "../../../public/assets/mark_email_unread.svg";

export default function ContactPage() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="contact-page-wrapper">
      <div className="contact-page-container">
        
        {/* Breadcrumbs */}
        <div className="contact-page-breadcrumbs contact-page-text">
          HOME <span className="contact-page-arrow" style={{"color":"#7D0B15"}}>▸</span> <span className="contact-page-current">CONTACT</span>
        </div>

        {/* Hero Section */}
        <motion.div 
          className="contact-page-hero"
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
        >
          <h2 className="contact-page-heading text-center">Say Hello!</h2>
          <p className="contact-page-text text-center contact-page-hero-subtext">
            We're here to connect, collaborate, and support your journey with the arts.
          </p>
          <div className="contact-page-hero-image-wrapper">
            <img 
              src={banner} 
              alt="INT Aditya Birla Centre Building" 
              className="contact-page-hero-img"
            />
          </div>
        </motion.div>

        {/* Contact Us Info Section */}
        <motion.div 
          className="contact-page-info-section"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="contact-page-info-content">
            <h2 className="contact-page-heading">Contact Us</h2>
            <h3 className="contact-page-subheading contact-page-info-subtitle">
              INT Aditya Birla Centre for Performing Arts
            </h3>
            
            <div className="contact-page-details-list">
              <div className="contact-page-detail-item">
                <img src={location} alt="location" />
                <div className="contact-page-text">
                  Indian National Theatre<br/>
                  Ratan House, Dadi Seth Road, Babulnath, Grant Road (W), Malabar Hill, Mumbai, Maharashtra 400007
                </div>
              </div>
              
              <div className="contact-page-detail-item">
                                <img src={phone} alt="phone" />

                <div className="contact-page-text">
                  Telephone<br/>
                  022 - XXXX XXXX (9:00 am - 10:00 pm)
                </div>
              </div>

              <div className="contact-page-detail-item">
                                <img src={phone} alt="phone" />

                <div className="contact-page-text">
                  Box Office<br/>
                  022 - XXXX XXXX (9:00 am - 10:00 pm)
                </div>
              </div>

              <div className="contact-page-detail-item">
                                <img src={mail} alt="mail" />

                <div className="contact-page-text">
                  Email: corporate@intabcpa.com
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-page-info-image-wrapper">
            <img 
              src={img} 
              alt="Microphone on stage" 
              className="contact-page-info-img"
            />
          </div>
        </motion.div>

        {/* Media Enquiries Section */}
        <motion.div 
          className="contact-page-media-section"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="contact-page-heading text-center">Media Enquiries</h2>
          <p className="contact-page-text text-center contact-page-media-subtext">
            For press requests, interviews, or editorial collaborations
          </p>
          <div className="contact-page-media-email">
            <img src={mail} alt="mail" />
            <span className="contact-page-text">Email: corporate@intabcpa.com</span>
          </div>
        </motion.div>
        <div className="divider-contact"></div>
        {/* Form Section */}
        <motion.div 
          className="contact-page-form-section"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="contact-page-form-image-wrapper">
            <img 
              src={maskimg}
              alt="Theatre Masks" 
              className="contact-page-form-img"
            />
          </div>

          <div className="contact-page-form-content">
            <h2 className="contact-page-heading">We Would Love to Hear From You</h2>
            <p className="contact-page-text contact-page-form-subtext">
              If you have a query, wish to collaborate, or simply want to reach out, share your details below.
            </p>

            <form className="contact-page-form">
              <div className="contact-page-form-group">
                <label className="contact-page-text-form contact-page-bold">Name*</label>
                <input type="text" placeholder="Enter your full name" className="contact-page-input contact-page-text" />
              </div>

              <div className="contact-page-form-group">
                <label className="contact-page-text-form contact-page-bold">Email*</label>
                <input type="email" placeholder="Enter your email address" className="contact-page-input contact-page-text" />
              </div>

              <div className="contact-page-form-group">
                <label className="contact-page-text-form contact-page-bold">Phone Number*</label>
                <input type="tel" placeholder="+91 | Enter 10-digit mobile number" className="contact-page-input contact-page-text" />
              </div>

              <div className="contact-page-form-group">
                <label className="contact-page-text-form contact-page-bold">Message*</label>
                <textarea 
                  placeholder="Please write your query or comment here" 
                  className="contact-page-textarea contact-page-text" 
                  rows="3"
                ></textarea>
                <div className="contact-page-char-count contact-page-text">0/500</div>
              </div>

              {/* reCAPTCHA Mockup */}
              <div className="contact-page-recaptcha">
                <div className="contact-page-recaptcha-left">
                  <div className="contact-page-recaptcha-checkbox"></div>
                  <span className="contact-page-text">I'm not a robot</span>
                </div>
                <div className="contact-page-recaptcha-right">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/RecaptchaLogo.svg/1200px-RecaptchaLogo.svg.png" alt="reCAPTCHA" className="contact-page-recaptcha-logo"/>
                </div>
              </div>

              <div className="contact-page-checkbox-group">
                <input type="checkbox" id="privacy-policy" className="contact-page-checkbox-input" />
                <label htmlFor="privacy-policy" className="contact-page-text contact-page-checkbox-label">
                  I have read, understood and accept the INTABCPA Privacy Policy and consent to the use of my personal data for the purpose of this enquiry.
                </label>
              </div>

              <button type="submit" className="contact-page-submit-btn contact-page-text contact-page-bold">
                SUBMIT
              </button>
            </form>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
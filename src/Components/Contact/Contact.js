import React from 'react';
import '../Contact/contact.css';
import { MdMail, MdSend , MdLocationOn} from 'react-icons/md';
import {SendHorizontal} from "lucide-react";

const Contact = () => {
    return (
      <section className="contact-section" id='contact'>
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-container">
          <div className="contact-left">
            <div className="contact-info">
              <p className="info-text">
              I am currently probably napping or building something amazing.
              Feel free to drop a message for any suggestion or collaboration,
               and we can get in touch. 
              </p>
              <div className="contact-details">
                <div className="detail-item">
                  <MdMail className="detail-icon" />
                  <span className="detail-text">patelsandesh1@gmail.com</span>
                </div>
                <div className="detail-item">
                  <MdLocationOn className="detail-icon" />
                  <span className="detail-text">India</span>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-right">
            <div className="contact-form">
            <form>
                <div className="form-group">
                    <div className='form-grid'>
                        <div className='form-content'>
                            <label htmlFor="firstName" className="label-field">Name</label>
                            <input type="text" id="firstName" className="input-field" placeholder="" required />
                        </div>
                        <div className="form-content">
                            <label htmlFor="lastName" className="label-field">Last Name</label>
                            <input type="text" id="lastName" className="input-field" placeholder="" required />
                        </div>
                    </div>   
                        <div className="form-content">
                            <label htmlFor="project" className="label-field">Project</label>
                            <input type="text" id="project" className="input-field" placeholder=" " required />
                        </div>
                        <div className="form-content">
                            <label htmlFor="message" className="label-field">Message</label>
                            <textarea id="message" className="input-field textarea-field" placeholder=" " required></textarea>
                        </div>
                </div>
                <button type="submit" className="submit-button">
                  Send Message <SendHorizontal className="send-icon" size={18} />
                </button>
            </form>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;
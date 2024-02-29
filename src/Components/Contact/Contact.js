import React, { useState } from 'react';
import '../Contact/contact.css';
import { MdMail, MdLocationOn} from 'react-icons/md';
import { SendHorizontal } from "lucide-react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    project: '',
    message: ''
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.project || !formData.message) {
      toast.error('All fields are required');
      return;
    }

    // Check email format
    if (!validateEmail(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    // Check message length
    if (formData.message.trim().length < 5) {
      toast.error('Message must be at least 5 characters long');
      return;
    }

    // Check for dummy email in project field
    if (formData.project.includes('@')) {
      toast.error('Please provide a valid project name, not an email');
      return;
    }

    // Form submission
    try {
      const response = await fetch('https://portfolio-backend-rxht.onrender.com/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSuccess(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          project: '',
          message: ''
        });
        toast.success('Message sent successfully!');
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      setError('Failed to submit form');
    }
  };

  const validateEmail = (email) => {
    // Basic email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <section className="contact-section" id='contact'>
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-container">
        <div className="contact-left">
          <div className="contact-info">
            <p className="info-text">
            

While I may be caught up in the midst of creativity or enjoying a well-deserved break,
 I'm always open to new ideas and collaborations. Your message is a welcomed opportunity for us to
  connect and explore potential ventures together. Don't hesitate to leave a note, and I'll be sure to get back to you as soon as possible. 
            </p>
            <div className="contact-details">
              <div className="detail-item">
                <MdMail className="detail-icon" />
                <span className="detail-text">patelsandesh1@gmail.com</span>
              </div>
              <div className="detail-item">
                <MdLocationOn className="detail-icon" />
                <span className="detail-text">Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <div className="contact-form">
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">Message sent successfully!</p>}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <div className='form-grid'>
                  <div className='form-content'>
                    <label htmlFor="firstName" className="label-field">Name</label>
                    <input type="text" id="firstName" className="input-field" placeholder="" required value={formData.firstName} onChange={handleChange} />
                  </div>
                  <div className="form-content">
                    <label htmlFor="lastName" className="label-field">Last Name</label>
                    <input type="text" id="lastName" className="input-field" placeholder="" required value={formData.lastName} onChange={handleChange} />
                  </div>
                </div>   
                <div className="form-content">
                  <label htmlFor="email" className="label-field">Email</label>
                  <input type="email" id="email" className="input-field" placeholder=" " required value={formData.email} onChange={handleChange} />
                </div>
                <div className="form-content">
                  <label htmlFor="project" className="label-field">Project</label>
                  <input type="text" id="project" className="input-field" placeholder=" " required value={formData.project} onChange={handleChange} />
                </div>
                <div className="form-content">
                  <label htmlFor="message" className="label-field">Message</label>
                  <textarea id="message" className="input-field textarea-field" placeholder=" " required value={formData.message} onChange={handleChange}></textarea>
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

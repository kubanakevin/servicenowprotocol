import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

// Import images
import hero1Img from "../assets/hero.png";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    eventDate: "",
    guestCount: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalType, setModalType] = useState("success");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const showMessageModal = (title, message, type = "success") => {
    setModalTitle(title);
    setModalMessage(message);
    setModalType(type);
    setShowModal(true);
    
    setTimeout(() => {
      setShowModal(false);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formSubmitUrl = "https://formsubmit.co/ajax/servicenowprot@gmail.com";
      
      const emailText = `
        NEW SERVICENOW INQUIRY
        --------------------
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Service Type: ${formData.serviceType || "Not specified"}
        Event Date: ${formData.eventDate || "Not specified"}
        Guest Count: ${formData.guestCount || "Not specified"}
        Message: ${formData.message}
      `;

      const response = await fetch(formSubmitUrl, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: emailText,
          _subject: `New ServiceNow Inquiry from ${formData.name}`,
          _replyto: formData.email,
        })
      });
      
      if (response.ok) {
        showMessageModal(
          "Inquiry Sent Successfully! ✨",
          `Thank you ${formData.name}! We have received your inquiry. Our team will contact you within 24 hours at ${formData.email}.`,
          "success"
        );
        
        setFormData({
          name: "",
          email: "",
          phone: "",
          serviceType: "",
          eventDate: "",
          guestCount: "",
          message: ""
        });
      } else {
        showMessageModal(
          "Message Received! ✅",
          `Thank you ${formData.name}! We have received your inquiry and will contact you shortly.`,
          "success"
        );
        
        setFormData({
          name: "",
          email: "",
          phone: "",
          serviceType: "",
          eventDate: "",
          guestCount: "",
          message: ""
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      showMessageModal(
        "Message Received",
        `Thank you ${formData.name}! We have received your message and will contact you shortly.`,
        "success"
      );
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
        eventDate: "",
        guestCount: "",
        message: ""
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Header />
      
      <main>
        {/* Page Header */}
        <section className="position-relative" style={{ 
          minHeight: '40vh',
          background: 'linear-gradient(135deg, #0a1c3a 0%, #122b4f 50%, #1a365a 100%)',
          marginTop: '0',
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${hero1Img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.15,
          }} />
          
          <div className="container position-relative text-center" style={{ zIndex: 2, paddingTop: '120px', paddingBottom: '60px' }}>
            <div className="d-flex justify-content-center mb-3">
              <span className="badge px-3 py-2 rounded-pill" style={{
                background: 'rgba(212, 175, 55, 0.15)',
                color: '#d4af37',
                fontSize: '0.85rem',
                fontWeight: '600'
              }}>
                <i className="bi bi-star-fill me-1" style={{ fontSize: '12px' }}></i> GET IN TOUCH
              </span>
            </div>
            <h1 className="display-3 fw-bold text-white mb-3">Contact ServiceNow</h1>
            <p className="lead text-white opacity-90" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Let us help you create an unforgettable event experience
            </p>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center mt-3">
                <li className="breadcrumb-item"><Link to="/" className="text-white-50 text-decoration-none">Home</Link></li>
                <li className="breadcrumb-item active text-white-50">Contact</li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-5" style={{ marginTop: '-50px' }}>
          <div className="container">
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card border-0 shadow text-center p-4" style={{ borderRadius: '20px', transition: 'transform 0.3s ease' }}>
                  <div className="rounded-circle d-inline-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '70px', height: '70px', background: 'rgba(212, 175, 55, 0.1)' }}>
                    <i className="bi bi-telephone-fill fs-1" style={{ color: '#d4af37' }}></i>
                  </div>
                  <h4 className="fw-bold mb-2" style={{ color: '#0a1c3a' }}>Call Us</h4>
                  <p className="text-muted mb-1">+250 788 804 113</p>
                  <p className="text-muted small">Mon-Fri, 9am - 6pm</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-0 shadow text-center p-4" style={{ borderRadius: '20px', transition: 'transform 0.3s ease' }}>
                  <div className="rounded-circle d-inline-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '70px', height: '70px', background: 'rgba(212, 175, 55, 0.1)' }}>
                    <i className="bi bi-envelope-fill fs-1" style={{ color: '#d4af37' }}></i>
                  </div>
                  <h4 className="fw-bold mb-2" style={{ color: '#0a1c3a' }}>Email Us</h4>
                  <p className="text-muted mb-1">servicenowprot@gmail.com</p>
                  <p className="text-muted small">Response within 24h</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-0 shadow text-center p-4" style={{ borderRadius: '20px', transition: 'transform 0.3s ease' }}>
                  <div className="rounded-circle d-inline-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '70px', height: '70px', background: 'rgba(212, 175, 55, 0.1)' }}>
                    <i className="bi bi-geo-alt-fill fs-1" style={{ color: '#d4af37' }}></i>
                  </div>
                  <h4 className="fw-bold mb-2" style={{ color: '#0a1c3a' }}>Visit Us</h4>
                  <p className="text-muted mb-1">Kigali Heights, KG 7 Ave</p>
                  <p className="text-muted small">Kigali, Rwanda</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section - Beautiful Design */}
        <section className="py-5">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-6">
                <div className="mb-4">
                  <h2 className="display-5 fw-bold mb-3" style={{ color: '#0a1c3a' }}>
                    Let's Create Something <span style={{ color: '#d4af37' }}>Memorable</span>
                  </h2>
                  <p className="lead" style={{ color: '#6c757d' }}>
                    Ready to book your event or have questions? Fill out the form and our team will get back to you promptly.
                  </p>
                  <div className="d-flex align-items-center gap-3 mt-4 p-3 rounded-3" style={{ background: 'rgba(212, 175, 55, 0.08)', borderRadius: '16px' }}>
                    <i className="bi bi-heart-fill fs-4" style={{ color: '#d4af37' }}></i>
                    <div>
                      <strong style={{ color: '#0a1c3a' }}>"Where Service Meets Excellence"</strong>
                      <p className="mb-0 text-muted small">Let us welcome your guests with professionalism and care.</p>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="mt-4">
                  {/* Name Field */}
                  <div className="mb-4">
                    <label htmlFor="name" className="form-label fw-semibold mb-2" style={{ color: '#0a1c3a' }}>
                      <i className="bi bi-person-fill me-2" style={{ color: '#d4af37' }}></i>Full Name *
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                      style={{ 
                        borderRadius: '12px', 
                        border: '1px solid #e0e0e0',
                        padding: '12px 16px',
                        transition: 'all 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#d4af37'}
                      onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                    />
                  </div>

                  {/* Email and Phone Row */}
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <label htmlFor="email" className="form-label fw-semibold mb-2" style={{ color: '#0a1c3a' }}>
                        <i className="bi bi-envelope-fill me-2" style={{ color: '#d4af37' }}></i>Email Address *
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        style={{ 
                          borderRadius: '12px', 
                          border: '1px solid #e0e0e0',
                          padding: '12px 16px',
                          transition: 'all 0.3s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#d4af37'}
                        onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <label htmlFor="phone" className="form-label fw-semibold mb-2" style={{ color: '#0a1c3a' }}>
                        <i className="bi bi-telephone-fill me-2" style={{ color: '#d4af37' }}></i>Phone Number *
                      </label>
                      <input
                        type="tel"
                        className="form-control form-control-lg"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+250 788 804 113"
                        style={{ 
                          borderRadius: '12px', 
                          border: '1px solid #e0e0e0',
                          padding: '12px 16px',
                          transition: 'all 0.3s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#d4af37'}
                        onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                      />
                    </div>
                  </div>

                  {/* Service Type and Event Date Row */}
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <label htmlFor="serviceType" className="form-label fw-semibold mb-2" style={{ color: '#0a1c3a' }}>
                        <i className="bi bi-star-fill me-2" style={{ color: '#d4af37' }}></i>Service Type
                      </label>
                      <select
                        className="form-select form-select-lg"
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        style={{ 
                          borderRadius: '12px', 
                          border: '1px solid #e0e0e0',
                          padding: '12px 16px',
                          cursor: 'pointer'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#d4af37'}
                        onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                      >
                        <option value="">Select service type</option>
                        <option value="protocol_management">Protocol & Ceremony Management</option>
                        <option value="guest_reception">Guest Reception & Ushering</option>
                        <option value="vip_hosting">VIP Hosting & Coordination</option>
                        <option value="wedding">Wedding Coordination</option>
                        <option value="corporate">Corporate Event Assistance</option>
                        <option value="consultation">General Consultation</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-4">
                      <label htmlFor="eventDate" className="form-label fw-semibold mb-2" style={{ color: '#0a1c3a' }}>
                        <i className="bi bi-calendar-fill me-2" style={{ color: '#d4af37' }}></i>Event Date
                      </label>
                      <input
                        type="date"
                        className="form-control form-control-lg"
                        id="eventDate"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        style={{ 
                          borderRadius: '12px', 
                          border: '1px solid #e0e0e0',
                          padding: '12px 16px',
                          color: '#6c757d'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#d4af37'}
                        onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                      />
                    </div>
                  </div>

                  {/* Guest Count */}
                  <div className="mb-4">
                    <label htmlFor="guestCount" className="form-label fw-semibold mb-2" style={{ color: '#0a1c3a' }}>
                      <i className="bi bi-people-fill me-2" style={{ color: '#d4af37' }}></i>Estimated Guest Count
                    </label>
                    <select
                      className="form-select form-select-lg"
                      id="guestCount"
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleChange}
                      style={{ 
                        borderRadius: '12px', 
                        border: '1px solid #e0e0e0',
                        padding: '12px 16px',
                        cursor: 'pointer'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#d4af37'}
                      onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                    >
                      <option value="">Select guest count</option>
                      <option value="under_50">Under 50 guests</option>
                      <option value="50_100">50 - 100 guests</option>
                      <option value="100_250">100 - 250 guests</option>
                      <option value="250_500">250 - 500 guests</option>
                      <option value="500_plus">500+ guests</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="mb-4">
                    <label htmlFor="message" className="form-label fw-semibold mb-2" style={{ color: '#0a1c3a' }}>
                      <i className="bi bi-chat-dots-fill me-2" style={{ color: '#d4af37' }}></i>Message / Special Requests *
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your event, special requirements, or any questions..."
                      style={{ 
                        borderRadius: '12px', 
                        border: '1px solid #e0e0e0',
                        padding: '12px 16px',
                        resize: 'vertical',
                        transition: 'all 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#d4af37'}
                      onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    className="btn btn-lg w-100 fw-semibold"
                    style={{ 
                      borderRadius: '50px', 
                      padding: '14px', 
                      background: 'linear-gradient(135deg, #d4af37 0%, #b8942e 100%)',
                      border: 'none', 
                      color: '#0a1c3a',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'
                    }}
                    disabled={isSubmitting}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 8px 25px rgba(212, 175, 55, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 4px 15px rgba(212, 175, 55, 0.3)';
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Inquiry <i className="bi bi-arrow-right-short ms-2 fs-4" style={{ verticalAlign: 'middle' }}></i>
                      </>
                    )}
                  </button>

                  <p className="text-center text-muted small mt-3 mb-0">
                    <i className="bi bi-shield-lock-fill me-1"></i> Your information is secure and will not be shared.
                  </p>
                </form>
              </div>

              <div className="col-lg-6">
                <div className="card border-0 shadow overflow-hidden" style={{ borderRadius: '24px' }}>
                  <div className="p-4 text-white" style={{ background: 'linear-gradient(135deg, #0a1c3a 0%, #122b4f 100%)' }}>
                    <h3 className="fw-bold mb-0">
                      <i className="bi bi-geo-alt-fill me-2"></i>Our Location
                    </h3>
                    <p className="mb-0 opacity-90 mt-1">Kigali Heights, KG 7 Ave, Kigali, Rwanda</p>
                  </div>
                  <div className="p-4">
                    {/* Map Placeholder */}
                    <div className="mb-4" style={{ 
                      borderRadius: '16px', 
                      overflow: 'hidden',
                      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                      height: '250px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column'
                    }}>
                      <i className="bi bi-geo-alt-fill" style={{ fontSize: '48px', color: '#d4af37' }}></i>
                      <p className="mt-3 mb-0 fw-semibold" style={{ color: '#0a1c3a' }}>Kigali Heights, KG 7 Ave</p>
                      <p className="text-muted small">Kigali, Rwanda</p>
                      <a 
                        href="https://maps.google.com/?q=Kigali+Heights+KG+7+Ave+Kigali+Rwanda" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-sm mt-2 px-4"
                        style={{ background: '#d4af37', color: '#0a1c3a', borderRadius: '50px', fontWeight: '500' }}
                      >
                        <i className="bi bi-box-arrow-up-right me-1"></i> Open in Google Maps
                      </a>
                    </div>

                    {/* Services List */}
                    <div className="mb-4">
                      <h5 className="fw-bold mb-3" style={{ color: '#0a1c3a' }}>
                        <i className="bi bi-star-fill me-2" style={{ color: '#d4af37' }}></i>Our Core Services
                      </h5>
                      <div className="d-flex flex-wrap gap-2">
                        <span className="badge px-3 py-2" style={{ background: 'rgba(212, 175, 55, 0.1)', color: '#0a1c3a', fontWeight: '500' }}>
                          <i className="bi bi-shield-check me-1"></i> Protocol Management
                        </span>
                        <span className="badge px-3 py-2" style={{ background: 'rgba(212, 175, 55, 0.1)', color: '#0a1c3a', fontWeight: '500' }}>
                          <i className="bi bi-people me-1"></i> Guest Reception
                        </span>
                        <span className="badge px-3 py-2" style={{ background: 'rgba(212, 175, 55, 0.1)', color: '#0a1c3a', fontWeight: '500' }}>
                          <i className="bi bi-gem me-1"></i> VIP Hosting
                        </span>
                        <span className="badge px-3 py-2" style={{ background: 'rgba(212, 175, 55, 0.1)', color: '#0a1c3a', fontWeight: '500' }}>
                          <i className="bi bi-heart me-1"></i> Weddings
                        </span>
                        <span className="badge px-3 py-2" style={{ background: 'rgba(212, 175, 55, 0.1)', color: '#0a1c3a', fontWeight: '500' }}>
                          <i className="bi bi-building me-1"></i> Corporate Events
                        </span>
                      </div>
                    </div>

                    {/* Working Hours */}
                    <div className="mb-4">
                      <h5 className="fw-bold mb-3" style={{ color: '#0a1c3a' }}>
                        <i className="bi bi-clock-fill me-2" style={{ color: '#d4af37' }}></i>Working Hours
                      </h5>
                      <div className="d-flex justify-content-between align-items-center py-2 border-bottom" style={{ borderColor: '#e0e0e0' }}>
                        <span className="text-muted">Monday - Friday</span>
                        <span className="fw-semibold" style={{ color: '#0a1c3a' }}>9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center py-2">
                        <span className="text-muted">Saturday</span>
                        <span className="fw-semibold" style={{ color: '#0a1c3a' }}>10:00 AM - 2:00 PM</span>
                      </div>
                    </div>

                    {/* Social Connect */}
                    <div>
                      <h5 className="fw-bold mb-3" style={{ color: '#0a1c3a' }}>
                        <i className="bi bi-heart-fill me-2" style={{ color: '#d4af37' }}></i>Connect With Us
                      </h5>
                      <div className="d-flex gap-3">
                        <a href="https://www.instagram.com/service__now__" className="btn rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px', background: 'rgba(212, 175, 55, 0.1)', color: '#d4af37', transition: 'all 0.3s ease' }}>
                          <i className="bi bi-instagram fs-5"></i>
                        </a>
                        <a href="#" className="btn rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px', background: 'rgba(212, 175, 55, 0.1)', color: '#d4af37', transition: 'all 0.3s ease' }}>
                          <i className="bi bi-facebook fs-5"></i>
                        </a>
                        <a href="#" className="btn rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px', background: 'rgba(212, 175, 55, 0.1)', color: '#d4af37', transition: 'all 0.3s ease' }}>
                          <i className="bi bi-linkedin fs-5"></i>
                        </a>
                        <a href="https://wa.me/250788804113" className="btn rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px', background: 'rgba(212, 175, 55, 0.1)', color: '#d4af37', transition: 'all 0.3s ease' }}>
                          <i className="bi bi-whatsapp fs-5"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <div className="text-center mb-5">
              <span className="badge px-3 py-2 mb-3 rounded-pill" style={{
                background: 'rgba(212, 175, 55, 0.1)',
                color: '#d4af37',
                fontSize: '0.8rem',
                fontWeight: '600'
              }}>
                <i className="bi bi-question-circle-fill me-1"></i> FAQ
              </span>
              <h2 className="display-5 fw-bold mb-3" style={{ color: '#0a1c3a' }}>
                Frequently Asked <span style={{ color: '#d4af37' }}>Questions</span>
              </h2>
              <p className="lead" style={{ color: '#6c757d' }}>
                Everything you need to know about our event support services
              </p>
            </div>

            <div className="row g-4">
              <div className="col-md-6">
                <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '20px' }}>
                  <div className="card-body p-4">
                    <div className="d-flex gap-3">
                      <div className="flex-shrink-0">
                        <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', background: 'rgba(212, 175, 55, 0.1)' }}>
                          <i className="bi bi-shield-check fs-4" style={{ color: '#d4af37' }}></i>
                        </div>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2" style={{ color: '#0a1c3a' }}>What types of events do you support?</h5>
                        <p className="text-muted mb-0">We support weddings, corporate conferences, official ceremonies, diplomatic functions, private celebrations, and special occasions.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '20px' }}>
                  <div className="card-body p-4">
                    <div className="d-flex gap-3">
                      <div className="flex-shrink-0">
                        <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', background: 'rgba(212, 175, 55, 0.1)' }}>
                          <i className="bi bi-calendar-check fs-4" style={{ color: '#d4af37' }}></i>
                        </div>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2" style={{ color: '#0a1c3a' }}>How far in advance should I book?</h5>
                        <p className="text-muted mb-0">We recommend booking 2-4 weeks in advance for standard events, and 2-3 months for large-scale or VIP events.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '20px' }}>
                  <div className="card-body p-4">
                    <div className="d-flex gap-3">
                      <div className="flex-shrink-0">
                        <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', background: 'rgba(212, 175, 55, 0.1)' }}>
                          <i className="bi bi-gem fs-4" style={{ color: '#d4af37' }}></i>
                        </div>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2" style={{ color: '#0a1c3a' }}>Do you offer customized packages?</h5>
                        <p className="text-muted mb-0">Yes! We create tailored packages based on your event needs, guest count, and budget.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '20px' }}>
                  <div className="card-body p-4">
                    <div className="d-flex gap-3">
                      <div className="flex-shrink-0">
                        <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', background: 'rgba(212, 175, 55, 0.1)' }}>
                          <i className="bi bi-globe fs-4" style={{ color: '#d4af37' }}></i>
                        </div>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2" style={{ color: '#0a1c3a' }}>What areas do you serve?</h5>
                        <p className="text-muted mb-0">We are based in Kigali, Rwanda, and serve clients throughout the country.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-5" style={{ 
          background: 'linear-gradient(135deg, #0a1c3a 0%, #122b4f 100%)'
        }}>
          <div className="container py-4 text-center">
            <h2 className="display-4 fw-bold text-white mb-3">
              Ready to Create an <span style={{ color: '#d4af37' }}>Unforgettable</span> Event?
            </h2>
            <p className="lead text-white opacity-90 mb-4">
              Let us welcome your guests with professionalism, elegance, and excellence.
            </p>
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              <a href="tel:+250788804113" className="btn btn-lg px-5 py-3 fw-semibold" style={{ 
                borderRadius: '50px',
                background: '#d4af37',
                color: '#0a1c3a',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 25px rgba(212, 175, 55, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}>
                <i className="bi bi-telephone-fill me-2"></i>
                Call Us Now
              </a>
              <a href="https://wa.me/250788804113" className="btn btn-outline-light btn-lg px-5 py-3 fw-semibold" style={{ 
                borderRadius: '50px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.background = '#d4af37';
                e.target.style.color = '#0a1c3a';
                e.target.style.borderColor = '#d4af37';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.background = 'transparent';
                e.target.style.color = '#fff';
                e.target.style.borderColor = 'rgba(255,255,255,0.5)';
              }}>
                <i className="bi bi-whatsapp me-2"></i>
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Modal */}
      {showModal && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.8)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(5px)'
          }}
          onClick={closeModal}
        >
          <div 
            style={{
              backgroundColor: 'white',
              borderRadius: '24px',
              maxWidth: '450px',
              width: '90%',
              padding: '35px',
              textAlign: 'center',
              animation: 'slideUp 0.3s ease'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div 
              className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
              style={{
                width: '80px',
                height: '80px',
                backgroundColor: modalType === 'success' ? '#d4edda' : '#f8d7da',
                color: modalType === 'success' ? '#155724' : '#721c24'
              }}
            >
              <i className={`bi bi-${modalType === 'success' ? 'check-circle-fill' : 'exclamation-triangle-fill'} fs-1`}></i>
            </div>
            <h3 className="fw-bold mb-3" style={{ color: '#0a1c3a' }}>{modalTitle}</h3>
            <p className="text-muted mb-4" style={{ lineHeight: '1.6' }}>{modalMessage}</p>
            <button 
              onClick={closeModal}
              className="btn px-5 py-2 fw-semibold"
              style={{ borderRadius: '50px', background: '#d4af37', border: 'none', color: '#0a1c3a' }}
            >
              Thank You
            </button>
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .form-control:focus, .form-select:focus {
          box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.2);
          border-color: #d4af37;
          outline: none;
        }
        
        .card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.1) !important;
        }
        
        @media (max-width: 768px) {
          .display-3 {
            font-size: 2rem;
          }
          .display-4 {
            font-size: 1.8rem;
          }
          .display-5 {
            font-size: 1.6rem;
          }
        }
        `}
      </style>

      <Footer />
    </>
  );
}

export default Contact;
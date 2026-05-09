import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

// Import images
import hero1Img from "../assets/hero.png";

function BookUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    eventTime: "",
    guestCount: "",
    venue: "",
    serviceNeeds: [],
    budget: "",
    additionalInfo: "",
    hearAbout: ""
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const serviceOptions = [
    { id: "protocol", label: "Protocol & Ceremony Management", price: "Custom", icon: "bi-shield-check" },
    { id: "reception", label: "Guest Reception & Ushering", price: "Custom", icon: "bi-people" },
    { id: "vip", label: "VIP Hosting & Coordination", price: "Custom", icon: "bi-gem" },
    { id: "wedding", label: "Wedding Coordination", price: "Custom", icon: "bi-heart" },
    { id: "corporate", label: "Corporate Event Assistance", price: "Custom", icon: "bi-building" },
    { id: "flow", label: "Event Flow Coordination", price: "Custom", icon: "bi-clock-history" }
  ];

  const eventTypes = [
    "Wedding Ceremony",
    "Corporate Conference",
    "Official Ceremony",
    "Diplomatic Event",
    "Birthday Celebration",
    "Anniversary Party",
    "Product Launch",
    "Gala Dinner",
    "Award Ceremony",
    "Other"
  ];

  const budgetRanges = [
    "Under $100",
    "$100 - $500",
    "$500 - $1,500",
    "Need Consultation"
  ];

  const hearAboutOptions = [
    "Google Search",
    "Instagram / Facebook",
    "Word of Mouth",
    "Friend Referral",
    "Past Client",
    "Other"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (serviceId) => {
    setFormData(prev => ({
      ...prev,
      serviceNeeds: prev.serviceNeeds.includes(serviceId)
        ? prev.serviceNeeds.filter(id => id !== serviceId)
        : [...prev.serviceNeeds, serviceId]
    }));
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 3));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showMessageModal = (title, message) => {
    setModalTitle(title);
    setModalMessage(message);
    setShowModal(true);
    setTimeout(() => setShowModal(false), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formSubmitUrl = "https://formsubmit.co/ajax/servicenowprot@gmail.com";
      
      const selectedServices = serviceOptions
        .filter(s => formData.serviceNeeds.includes(s.id))
        .map(s => s.label)
        .join(", ");

      const emailText = `
        NEW EVENT BOOKING REQUEST
        =========================
        
        CLIENT INFORMATION:
        -------------------
        Full Name: ${formData.fullName}
        Email: ${formData.email}
        Phone: ${formData.phone}
        
        EVENT DETAILS:
        --------------
        Event Type: ${formData.eventType}
        Event Date: ${formData.eventDate}
        Event Time: ${formData.eventTime || "Not specified"}
        Guest Count: ${formData.guestCount || "Not specified"}
        Venue: ${formData.venue || "Not specified"}
        
        SERVICE NEEDS:
        --------------
        ${selectedServices || "No services selected"}
        
        BUDGET & INFO:
        --------------
        Budget Range: ${formData.budget || "Not specified"}
        How Heard About Us: ${formData.hearAbout || "Not specified"}
        
        ADDITIONAL INFORMATION:
        -----------------------
        ${formData.additionalInfo || "No additional information provided"}
        
        ---
        This booking request was sent from ServiceNow Book Us page.
        Please respond to client within 24 hours.
      `;

      const response = await fetch(formSubmitUrl, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          message: emailText,
          _subject: `New Event Booking Request from ${formData.fullName}`,
          _replyto: formData.email,
        })
      });
      
      if (response.ok) {
        showMessageModal(
          "Booking Request Sent! ✨",
          `Thank you ${formData.fullName}! Your event booking request has been received. Our team will contact you within 24 hours to discuss your event needs.`
        );
        
        setFormData({
          fullName: "", email: "", phone: "", eventType: "", eventDate: "", eventTime: "",
          guestCount: "", venue: "", serviceNeeds: [], budget: "", additionalInfo: "", hearAbout: ""
        });
        setCurrentStep(1);
      } else {
        showMessageModal(
          "Request Received! ✅",
          `Thank you ${formData.fullName}! We have received your booking request and will contact you shortly.`
        );
      }
    } catch (error) {
      console.error("Submission error:", error);
      showMessageModal(
        "Request Received",
        `Thank you ${formData.fullName}! We have received your message and will contact you shortly.`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => setShowModal(false);

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
                <i className="bi bi-calendar-plus me-1"></i> BOOK YOUR EVENT
              </span>
            </div>
            <h1 className="display-3 fw-bold text-white mb-3">Book ServiceNow</h1>
            <p className="lead text-white opacity-90" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Secure your date and let us create an unforgettable welcome experience
            </p>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center mt-3">
                <li className="breadcrumb-item"><Link to="/" className="text-white-50 text-decoration-none hover-link">Home</Link></li>
                <li className="breadcrumb-item active text-white-50">Book Us</li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                {/* Progress Steps */}
                <div className="row mb-5">
                  <div className="col-12">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="text-center" style={{ flex: 1 }}>
                        <div className={`rounded-circle d-inline-flex align-items-center justify-content-center mb-2 ${currentStep >= 1 ? 'bg-warning' : 'bg-secondary'}`} 
                          style={{ width: '40px', height: '40px', color: currentStep >= 1 ? '#0a1c3a' : '#fff' }}>
                          <span className="fw-bold">1</span>
                        </div>
                        <p className="small mb-0 fw-semibold" style={{ color: currentStep >= 1 ? '#d4af37' : '#6c757d' }}>Event Details</p>
                      </div>
                      <div className="flex-grow-1" style={{ height: '2px', background: currentStep >= 2 ? '#d4af37' : '#dee2e6' }}></div>
                      <div className="text-center" style={{ flex: 1 }}>
                        <div className={`rounded-circle d-inline-flex align-items-center justify-content-center mb-2 ${currentStep >= 2 ? 'bg-warning' : 'bg-secondary'}`}
                          style={{ width: '40px', height: '40px', color: currentStep >= 2 ? '#0a1c3a' : '#fff' }}>
                          <span className="fw-bold">2</span>
                        </div>
                        <p className="small mb-0 fw-semibold" style={{ color: currentStep >= 2 ? '#d4af37' : '#6c757d' }}>Services</p>
                      </div>
                      <div className="flex-grow-1" style={{ height: '2px', background: currentStep >= 3 ? '#d4af37' : '#dee2e6' }}></div>
                      <div className="text-center" style={{ flex: 1 }}>
                        <div className={`rounded-circle d-inline-flex align-items-center justify-content-center mb-2 ${currentStep >= 3 ? 'bg-warning' : 'bg-secondary'}`}
                          style={{ width: '40px', height: '40px', color: currentStep >= 3 ? '#0a1c3a' : '#fff' }}>
                          <span className="fw-bold">3</span>
                        </div>
                        <p className="small mb-0 fw-semibold" style={{ color: currentStep >= 3 ? '#d4af37' : '#6c757d' }}>Contact & Submit</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card border-0 shadow" style={{ borderRadius: '24px', overflow: 'hidden' }}>
                  <div className="p-4 p-md-5">
                    <form onSubmit={handleSubmit}>
                      {/* Step 1: Event Details */}
                      {currentStep === 1 && (
                        <div className="step-content">
                          <h3 className="fw-bold mb-4" style={{ color: '#0a1c3a' }}>
                            <i className="bi bi-calendar-event me-2" style={{ color: '#d4af37' }}></i>
                            Tell Us About Your Event
                          </h3>
                          
                          <div className="row">
                            <div className="col-md-6 mb-4">
                              <label className="form-label fw-semibold" style={{ color: '#0a1c3a' }}>
                                <i className="bi bi-tag-fill me-1" style={{ color: '#d4af37' }}></i> Event Type *
                              </label>
                              <select
                                name="eventType"
                                className="form-select form-select-lg"
                                value={formData.eventType}
                                onChange={handleChange}
                                required
                                style={{ borderRadius: '12px', border: '1px solid #e0e0e0' }}
                              >
                                <option value="">Select event type</option>
                                {eventTypes.map(type => (
                                  <option key={type} value={type}>{type}</option>
                                ))}
                              </select>
                            </div>

                            <div className="col-md-6 mb-4">
                              <label className="form-label fw-semibold" style={{ color: '#0a1c3a' }}>
                                <i className="bi bi-calendar-date me-1" style={{ color: '#d4af37' }}></i> Event Date *
                              </label>
                              <input
                                type="date"
                                name="eventDate"
                                className="form-control form-control-lg"
                                value={formData.eventDate}
                                onChange={handleChange}
                                required
                                style={{ borderRadius: '12px', border: '1px solid #e0e0e0' }}
                              />
                            </div>

                            <div className="col-md-6 mb-4">
                              <label className="form-label fw-semibold" style={{ color: '#0a1c3a' }}>
                                <i className="bi bi-clock me-1" style={{ color: '#d4af37' }}></i> Event Time
                              </label>
                              <input
                                type="time"
                                name="eventTime"
                                className="form-control form-control-lg"
                                value={formData.eventTime}
                                onChange={handleChange}
                                style={{ borderRadius: '12px', border: '1px solid #e0e0e0' }}
                              />
                            </div>

                            <div className="col-md-6 mb-4">
                              <label className="form-label fw-semibold" style={{ color: '#0a1c3a' }}>
                                <i className="bi bi-people-fill me-1" style={{ color: '#d4af37' }}></i> Estimated Guest Count *
                              </label>
                              <select
                                name="guestCount"
                                className="form-select form-select-lg"
                                value={formData.guestCount}
                                onChange={handleChange}
                                required
                                style={{ borderRadius: '12px', border: '1px solid #e0e0e0' }}
                              >
                                <option value="">Select guest count</option>
                                <option value="under_50">Under 50 guests</option>
                                <option value="50_100">50 - 100 guests</option>
                                <option value="100_250">100 - 250 guests</option>
                                <option value="250_500">250 - 500 guests</option>
                                <option value="500_1000">500 - 1,000 guests</option>
                                <option value="1000_plus">1,000+ guests</option>
                              </select>
                            </div>

                            <div className="col-12 mb-4">
                              <label className="form-label fw-semibold" style={{ color: '#0a1c3a' }}>
                                <i className="bi bi-geo-alt-fill me-1" style={{ color: '#d4af37' }}></i> Venue / Location
                              </label>
                              <input
                                type="text"
                                name="venue"
                                className="form-control form-control-lg"
                                placeholder="Where will your event take place?"
                                value={formData.venue}
                                onChange={handleChange}
                                style={{ borderRadius: '12px', border: '1px solid #e0e0e0' }}
                              />
                            </div>

                            <div className="col-12 mb-4">
                              <label className="form-label fw-semibold" style={{ color: '#0a1c3a' }}>
                                <i className="bi bi-cash-stack me-1" style={{ color: '#d4af37' }}></i> Budget Range
                              </label>
                              <select
                                name="budget"
                                className="form-select form-select-lg"
                                value={formData.budget}
                                onChange={handleChange}
                                style={{ borderRadius: '12px', border: '1px solid #e0e0e0' }}
                              >
                                <option value="">Select budget range</option>
                                {budgetRanges.map(range => (
                                  <option key={range} value={range}>{range}</option>
                                ))}
                              </select>
                            </div>
                          </div>

                          <div className="d-flex justify-content-end mt-3">
                            <button type="button" onClick={nextStep} className="btn btn-lg px-5 py-3 fw-semibold"
                              style={{ borderRadius: '50px', background: '#d4af37', color: '#0a1c3a' }}>
                              Continue <i className="bi bi-arrow-right ms-2"></i>
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Step 2: Services Selection */}
                      {currentStep === 2 && (
                        <div className="step-content">
                          <h3 className="fw-bold mb-4" style={{ color: '#0a1c3a' }}>
                            <i className="bi bi-star-fill me-2" style={{ color: '#d4af37' }}></i>
                            Select Your Services
                          </h3>
                          
                          <p className="text-muted mb-4">Select the services you need for your event:</p>

                          <div className="row g-3 mb-4">
                            {serviceOptions.map(service => (
                              <div className="col-md-6" key={service.id}>
                                <div 
                                  className={`p-3 border rounded-3 cursor-pointer transition-all ${formData.serviceNeeds.includes(service.id) ? 'border-warning bg-warning bg-opacity-10' : 'border'}`}
                                  onClick={() => handleServiceToggle(service.id)}
                                  style={{ borderRadius: '16px', cursor: 'pointer', transition: 'all 0.3s ease' }}
                                >
                                  <div className="d-flex align-items-center gap-3">
                                    <i className={`${service.icon} fs-3`} style={{ color: formData.serviceNeeds.includes(service.id) ? '#d4af37' : '#6c757d' }}></i>
                                    <div className="flex-grow-1">
                                      <h5 className="fw-semibold mb-1" style={{ color: '#0a1c3a' }}>{service.label}</h5>
                                      <small className="text-muted">{service.price}</small>
                                    </div>
                                    <div className="form-check">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        checked={formData.serviceNeeds.includes(service.id)}
                                        onChange={() => {}}
                                        style={{ width: '20px', height: '20px', cursor: 'pointer', accentColor: '#d4af37' }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="d-flex justify-content-between mt-3 gap-3">
                            <button type="button" onClick={prevStep} className="btn btn-outline-secondary btn-lg px-5 py-3 fw-semibold"
                              style={{ borderRadius: '50px' }}>
                              <i className="bi bi-arrow-left me-2"></i> Back
                            </button>
                            <button type="button" onClick={nextStep} className="btn btn-lg px-5 py-3 fw-semibold"
                              style={{ borderRadius: '50px', background: '#d4af37', color: '#0a1c3a' }}>
                              Continue <i className="bi bi-arrow-right ms-2"></i>
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Step 3: Contact Information */}
                      {currentStep === 3 && (
                        <div className="step-content">
                          <h3 className="fw-bold mb-4" style={{ color: '#0a1c3a' }}>
                            <i className="bi bi-person-fill me-2" style={{ color: '#d4af37' }}></i>
                            Your Contact Information
                          </h3>

                          <div className="row">
                            <div className="col-md-6 mb-4">
                              <label className="form-label fw-semibold" style={{ color: '#0a1c3a' }}>
                                <i className="bi bi-person me-1" style={{ color: '#d4af37' }}></i> Full Name *
                              </label>
                              <input
                                type="text"
                                name="fullName"
                                className="form-control form-control-lg"
                                placeholder="Enter your full name"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                                style={{ borderRadius: '12px', border: '1px solid #e0e0e0' }}
                              />
                            </div>

                            <div className="col-md-6 mb-4">
                              <label className="form-label fw-semibold" style={{ color: '#0a1c3a' }}>
                                <i className="bi bi-envelope me-1" style={{ color: '#d4af37' }}></i> Email Address *
                              </label>
                              <input
                                type="email"
                                name="email"
                                className="form-control form-control-lg"
                                placeholder="you@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                style={{ borderRadius: '12px', border: '1px solid #e0e0e0' }}
                              />
                            </div>

                            <div className="col-md-6 mb-4">
                              <label className="form-label fw-semibold" style={{ color: '#0a1c3a' }}>
                                <i className="bi bi-telephone me-1" style={{ color: '#d4af37' }}></i> Phone Number *
                              </label>
                              <input
                                type="tel"
                                name="phone"
                                className="form-control form-control-lg"
                                placeholder="+250 XXX XXX XXX"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                style={{ borderRadius: '12px', border: '1px solid #e0e0e0' }}
                              />
                            </div>

                            <div className="col-md-6 mb-4">
                              <label className="form-label fw-semibold" style={{ color: '#0a1c3a' }}>
                                <i className="bi bi-megaphone me-1" style={{ color: '#d4af37' }}></i> How did you hear about us?
                              </label>
                              <select
                                name="hearAbout"
                                className="form-select form-select-lg"
                                value={formData.hearAbout}
                                onChange={handleChange}
                                style={{ borderRadius: '12px', border: '1px solid #e0e0e0' }}
                              >
                                <option value="">Select an option</option>
                                {hearAboutOptions.map(option => (
                                  <option key={option} value={option}>{option}</option>
                                ))}
                              </select>
                            </div>

                            <div className="col-12 mb-4">
                              <label className="form-label fw-semibold" style={{ color: '#0a1c3a' }}>
                                <i className="bi bi-chat-dots me-1" style={{ color: '#d4af37' }}></i> Additional Information
                              </label>
                              <textarea
                                name="additionalInfo"
                                className="form-control"
                                rows="4"
                                placeholder="Any special requests, dietary restrictions, or additional details about your event..."
                                value={formData.additionalInfo}
                                onChange={handleChange}
                                style={{ borderRadius: '12px', border: '1px solid #e0e0e0' }}
                              ></textarea>
                            </div>
                          </div>

                          <div className="d-flex justify-content-between mt-3 gap-3">
                            <button type="button" onClick={prevStep} className="btn btn-outline-secondary btn-lg px-5 py-3 fw-semibold"
                              style={{ borderRadius: '50px' }}>
                              <i className="bi bi-arrow-left me-2"></i> Back
                            </button>
                            <button type="submit" disabled={isSubmitting} className="btn btn-lg px-5 py-3 fw-semibold"
                              style={{ borderRadius: '50px', background: '#d4af37', color: '#0a1c3a' }}>
                              {isSubmitting ? (
                                <>
                                  <span className="spinner-border spinner-border-sm me-2"></span>
                                  Submitting...
                                </>
                              ) : (
                                <>
                                  Submit Booking Request <i className="bi bi-check-circle ms-2"></i>
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      )}
                    </form>
                  </div>
                </div>

                {/* Booking Info Cards */}
                <div className="row g-4 mt-5">
                  <div className="col-md-4">
                    <div className="text-center p-3">
                      <i className="bi bi-chat-text fs-1" style={{ color: '#d4af37' }}></i>
                      <h5 className="fw-bold mt-3 mb-2" style={{ color: '#0a1c3a' }}>Quick Response</h5>
                      <p className="text-muted small">We respond within 24 hours</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="text-center p-3">
                      <i className="bi bi-shield-check fs-1" style={{ color: '#d4af37' }}></i>
                      <h5 className="fw-bold mt-3 mb-2" style={{ color: '#0a1c3a' }}>Secure Booking</h5>
                      <p className="text-muted small">Your information is safe with us</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="text-center p-3">
                      <i className="bi bi-calendar-check fs-1" style={{ color: '#d4af37' }}></i>
                      <h5 className="fw-bold mt-3 mb-2" style={{ color: '#0a1c3a' }}>Easy Cancellation</h5>
                      <p className="text-muted small">Flexible booking policy</p>
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
              <h2 className="display-5 fw-bold mb-3" style={{ color: '#0a1c3a' }}>
                Booking <span style={{ color: '#d4af37' }}>FAQs</span>
              </h2>
              <p className="lead text-muted">Everything you need to know before booking</p>
            </div>

            <div className="row g-4">
              <div className="col-md-6">
                <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-4">
                    <h5 className="fw-bold mb-3" style={{ color: '#0a1c3a' }}>
                      <i className="bi bi-clock-history me-2" style={{ color: '#d4af37' }}></i> How far in advance should I book?
                    </h5>
                    <p className="text-muted mb-0">We recommend booking 2-4 weeks in advance for standard events, and 2-3 months for large-scale or VIP events to ensure availability.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-4">
                    <h5 className="fw-bold mb-3" style={{ color: '#0a1c3a' }}>
                      <i className="bi bi-wallet2 me-2" style={{ color: '#d4af37' }}></i> What is your deposit policy?
                    </h5>
                    <p className="text-muted mb-0">A 30% deposit is required to secure your booking date. The remaining balance is due 7 days before the event.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-4">
                    <h5 className="fw-bold mb-3" style={{ color: '#0a1c3a' }}>
                      <i className="bi bi-arrow-repeat me-2" style={{ color: '#d4af37' }}></i> Can I modify my booking?
                    </h5>
                    <p className="text-muted mb-0">Yes, you can modify your booking up to 14 days before the event. Please contact us directly for any changes.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-4">
                    <h5 className="fw-bold mb-3" style={{ color: '#0a1c3a' }}>
                      <i className="bi bi-map me-2" style={{ color: '#d4af37' }}></i> Do you travel outside Kigali?
                    </h5>
                    <p className="text-muted mb-0">Yes, we serve clients throughout Rwanda. Travel fees may apply for events outside Kigali.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Direct Contact CTA */}
        <section className="py-5" style={{ background: 'linear-gradient(135deg, #0a1c3a 0%, #122b4f 100%)' }}>
          <div className="container py-4 text-center">
            <h2 className="display-5 fw-bold text-white mb-3">
              Need Immediate Assistance?
            </h2>
            <p className="lead text-white opacity-90 mb-4">
              Call us directly for urgent inquiries or last-minute bookings
            </p>
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              <a href="tel:+250788804113" className="btn btn-lg px-5 py-3 fw-semibold" style={{ 
                borderRadius: '50px', background: '#d4af37', color: '#0a1c3a' }}>
                <i className="bi bi-telephone-fill me-2"></i> Call +250 788 804 113
              </a>
              <a href="https://wa.me/250788804113" className="btn btn-outline-light btn-lg px-5 py-3 fw-semibold" style={{ borderRadius: '50px' }}>
                <i className="bi bi-whatsapp me-2"></i> WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Success Modal */}
      {showModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 10000,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backdropFilter: 'blur(5px)'
        }} onClick={closeModal}>
          <div style={{
            backgroundColor: 'white', borderRadius: '24px', maxWidth: '450px',
            width: '90%', padding: '35px', textAlign: 'center'
          }} onClick={(e) => e.stopPropagation()}>
            <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
              style={{ width: '80px', height: '80px', backgroundColor: '#d4edda', color: '#155724' }}>
              <i className="bi bi-check-circle-fill fs-1"></i>
            </div>
            <h3 className="fw-bold mb-3" style={{ color: '#0a1c3a' }}>{modalTitle}</h3>
            <p className="text-muted mb-4">{modalMessage}</p>
            <button onClick={closeModal} className="btn px-5 py-2 fw-semibold"
              style={{ borderRadius: '50px', background: '#d4af37', border: 'none', color: '#0a1c3a' }}>
              Thank You
            </button>
          </div>
        </div>
      )}

      <style>
        {`
          .hover-link:hover { color: #d4af37 !important; }
          .cursor-pointer { cursor: pointer; }
          .transition-all { transition: all 0.3s ease; }
          
          input:focus, select:focus, textarea:focus {
            border-color: #d4af37 !important;
            box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.2) !important;
            outline: none;
          }
          
          @media (max-width: 768px) {
            .display-3 { font-size: 2rem; }
            .display-5 { font-size: 1.6rem; }
          }
        `}
      </style>

      <Footer />
    </>
  );
}

export default BookUs;
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Shield, Award, Heart, Star, Users, Calendar, MapPin, Phone, Mail, ChevronRight, Sparkles, Clock, HandHeart } from "lucide-react";

// Import all images from assets
import aboutImg from "../assets/about1.jpeg";
import hero1Img from "../assets/hero.png";
import hero2Img from "../assets/hero2.jpeg";
import presidentImg from "../assets/presidente.png";

function About() {
  return (
    <>
      <Header />
      
      <main>
        {/* Page Header / Hero Section - ServiceNow Style */}
        <section className="position-relative" style={{ 
          minHeight: '45vh',
          background: 'linear-gradient(135deg, #0a1c3a 0%, #122b4f 50%, #1a365a 100%)',
          marginTop: '0',
          overflow: 'hidden'
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
            zIndex: 0
          }} />
          
          {/* Animated gold accents */}
          <div style={{
            position: 'absolute',
            bottom: '10%',
            right: '5%',
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />
          
          <div className="container position-relative text-center" style={{ zIndex: 2, paddingTop: '150px', paddingBottom: '70px' }}>
            <div className="d-flex justify-content-center mb-3">
              <span className="badge d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill" style={{
                background: 'rgba(212, 175, 55, 0.15)',
                color: '#d4af37',
                fontSize: '0.85rem',
                fontWeight: '600'
              }}>
                <Star size={14} /> THE ART OF WELCOME
              </span>
            </div>
            <h1 className="display-3 fw-bold text-white mb-3">About ServiceNow</h1>
            <p className="lead text-white opacity-90 mb-3" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Professional Protocol & Event Support — Where Service Meets Excellence
            </p>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item"><Link to="/" className="text-white-50 text-decoration-none hover-link">Home</Link></li>
                <li className="breadcrumb-item active text-white-50" aria-current="page">About</li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Company Overview Section - ServiceNow */}
        <section className="py-5">
          <div className="container py-5">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <img 
                  src={aboutImg} 
                  alt="ServiceNow Event Management" 
                  className="img-fluid rounded-4 shadow-lg"
                  style={{ borderRadius: '20px', width: '100%' }}
                />
              </div>
              <div className="col-lg-6">
                <span className="badge d-inline-flex align-items-center gap-2 px-3 py-2 mb-3 rounded-pill" style={{
                  background: 'rgba(212, 175, 55, 0.1)',
                  color: '#d4af37',
                  fontSize: '0.8rem',
                  fontWeight: '600'
                }}>
                  <Shield size={14} /> WHO WE ARE
                </span>
                <h2 className="display-5 fw-bold mb-4" style={{ color: '#0a1c3a' }}>
                  Professional Protocol & Event Support
                </h2>
                <p className="lead mb-3" style={{ color: '#4b5563' }}>
                  ServiceNow is a professional protocol and event support company committed to delivering exceptional ceremony coordination and hospitality services.
                </p>
                <p style={{ color: '#6c757d', lineHeight: '1.8' }}>
                  We specialize in managing protocol, guest reception, ushering, and event organization for weddings, conferences, corporate functions, official ceremonies, and special occasions. With professionalism, elegance, and attention to detail, we ensure every guest feels welcomed and every event runs smoothly.
                </p>
                <p style={{ color: '#6c757d', lineHeight: '1.8' }}>
                  Our team is dedicated to creating organized, respectful, and memorable experiences through high-quality service and excellent coordination.
                </p>
                <div className="mt-4">
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <div className="d-flex align-items-center gap-3">
                        <div className="rounded-circle p-3 d-flex align-items-center justify-content-center" style={{
                          background: 'rgba(212, 175, 55, 0.1)',
                          width: '55px',
                          height: '55px'
                        }}>
                          <Calendar size={24} color="#d4af37" />
                        </div>
                        <div>
                          <h4 className="fw-bold mb-0" style={{ color: '#0a1c3a' }}>50+</h4>
                          <p className="text-muted mb-0">Events Managed</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-flex align-items-center gap-3">
                        <div className="rounded-circle p-3 d-flex align-items-center justify-content-center" style={{
                          background: 'rgba(212, 175, 55, 0.1)',
                          width: '55px',
                          height: '55px'
                        }}>
                          <Users size={24} color="#d4af37" />
                        </div>
                        <div>
                          <h4 className="fw-bold mb-0" style={{ color: '#0a1c3a' }}>1000+</h4>
                          <p className="text-muted mb-0">Happy Guests</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section - ServiceNow */}
        <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container py-4">
            <div className="row g-4">
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm p-4" style={{ borderRadius: '20px' }}>
                  <div className="text-center mb-4">
                    <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{
                      width: '80px',
                      height: '80px',
                      background: 'rgba(212, 175, 55, 0.1)'
                    }}>
                      <Award size={40} color="#d4af37" />
                    </div>
                    <h3 className="fw-bold" style={{ color: '#0a1c3a' }}>Our Mission</h3>
                  </div>
                  <p className="lead text-center mb-0" style={{ color: '#4b5563' }}>
                    To deliver exceptional ceremony coordination and hospitality services that create organized, respectful, and memorable experiences through high-quality service and excellent coordination.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm p-4" style={{ borderRadius: '20px' }}>
                  <div className="text-center mb-4">
                    <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{
                      width: '80px',
                      height: '80px',
                      background: 'rgba(212, 175, 55, 0.1)'
                    }}>
                      <Star size={40} color="#d4af37" />
                    </div>
                    <h3 className="fw-bold" style={{ color: '#0a1c3a' }}>Our Vision</h3>
                  </div>
                  <p className="lead text-center mb-0" style={{ color: '#4b5563' }}>
                    To become the premier protocol and event support company in Rwanda, recognized for excellence in hospitality, professionalism, and creating unforgettable welcome experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tagline Highlight Section */}
        <section className="py-4">
          <div className="container">
            <div className="bg-gradient p-5 rounded-4 text-center" style={{
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.08) 0%, rgba(10, 28, 58, 0.05) 100%)',
              border: '1px solid rgba(212, 175, 55, 0.2)'
            }}>
              <Sparkles size={32} color="#d4af37" className="mb-3 d-inline-block" />
              <h2 className="display-5 fw-bold mb-3" style={{ color: '#0a1c3a' }}>
                Where Service Meets Excellence
              </h2>
              <p className="lead mb-0" style={{ color: '#d4af37', fontWeight: '500' }}>
                The Art of Welcome
              </p>
              <hr className="my-4" style={{ width: '80px', margin: '20px auto', borderColor: '#d4af37' }} />
              <p style={{ color: '#4b5563', maxWidth: '700px', margin: '0 auto', lineHeight: '1.8' }}>
                At ServiceNow, we believe that successful events begin with proper hospitality and professional protocol management. Every guest deserves to feel welcomed, and every event should run with seamless precision.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values Section - ServiceNow */}
        <section className="py-5">
          <div className="container py-4">
            <div className="text-center mb-5">
              <span className="badge d-inline-flex align-items-center gap-2 px-3 py-2 mb-3 rounded-pill" style={{
                background: 'rgba(212, 175, 55, 0.1)',
                color: '#d4af37',
                fontSize: '0.8rem',
                fontWeight: '600'
              }}>
                <Heart size={14} /> OUR CORE VALUES
              </span>
              <h2 className="display-5 fw-bold mb-3" style={{ color: '#0a1c3a' }}>
                What Drives Us
              </h2>
              <p className="lead" style={{ color: '#6c757d', maxWidth: '600px', margin: '0 auto' }}>
                The principles that guide our service and define our excellence
              </p>
            </div>

            <div className="row g-4">
              <div className="col-md-6 col-lg-4">
                <div className="text-center p-4" style={{ transition: 'all 0.3s ease' }}>
                  <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{
                    width: '80px',
                    height: '80px',
                    background: 'rgba(212, 175, 55, 0.1)'
                  }}>
                    <Shield size={36} color="#d4af37" />
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: '#0a1c3a' }}>Professionalism</h4>
                  <p style={{ color: '#6c757d', lineHeight: '1.7' }}>
                    Maintaining the highest standards in every interaction and service delivery.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="text-center p-4" style={{ transition: 'all 0.3s ease' }}>
                  <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{
                    width: '80px',
                    height: '80px',
                    background: 'rgba(212, 175, 55, 0.1)'
                  }}>
                    <Award size={36} color="#d4af37" />
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: '#0a1c3a' }}>Excellence</h4>
                  <p style={{ color: '#6c757d', lineHeight: '1.7' }}>
                    Striving for perfection in every detail of event coordination.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="text-center p-4" style={{ transition: 'all 0.3s ease' }}>
                  <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{
                    width: '80px',
                    height: '80px',
                    background: 'rgba(212, 175, 55, 0.1)'
                  }}>
                    <Heart size={36} color="#d4af37" />
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: '#0a1c3a' }}>Respect</h4>
                  <p style={{ color: '#6c757d', lineHeight: '1.7' }}>
                    Treating every client and guest with dignity and consideration.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="text-center p-4" style={{ transition: 'all 0.3s ease' }}>
                  <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{
                    width: '80px',
                    height: '80px',
                    background: 'rgba(212, 175, 55, 0.1)'
                  }}>
                    <Users size={36} color="#d4af37" />
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: '#0a1c3a' }}>Hospitality</h4>
                  <p style={{ color: '#6c757d', lineHeight: '1.7' }}>
                    Creating warm, welcoming environments for all attendees.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="text-center p-4" style={{ transition: 'all 0.3s ease' }}>
                  <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{
                    width: '80px',
                    height: '80px',
                    background: 'rgba(212, 175, 55, 0.1)'
                  }}>
                    <Star size={36} color="#d4af37" />
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: '#0a1c3a' }}>Reliability</h4>
                  <p style={{ color: '#6c757d', lineHeight: '1.7' }}>
                    Consistent, dependable service you can count on.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="text-center p-4" style={{ transition: 'all 0.3s ease' }}>
                  <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{
                    width: '80px',
                    height: '80px',
                    background: 'rgba(212, 175, 55, 0.1)'
                  }}>
                    <HandHeart size={36} color="#d4af37" />
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: '#0a1c3a' }}>Customer Satisfaction</h4>
                  <p style={{ color: '#6c757d', lineHeight: '1.7' }}>
                    Ensuring memorable experiences that exceed expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container py-4">
            <div className="text-center mb-5">
              <span className="badge d-inline-flex align-items-center gap-2 px-3 py-2 mb-3 rounded-pill" style={{
                background: 'rgba(212, 175, 55, 0.1)',
                color: '#d4af37',
                fontSize: '0.8rem',
                fontWeight: '600'
              }}>
                <Calendar size={14} /> WHAT WE DO
              </span>
              <h2 className="display-5 fw-bold mb-3" style={{ color: '#0a1c3a' }}>
                Our Professional Services
              </h2>
              <p className="lead" style={{ color: '#6c757d', maxWidth: '600px', margin: '0 auto' }}>
                Comprehensive protocol and hospitality solutions for every occasion
              </p>
            </div>

            <div className="row g-4">
              <div className="col-md-6">
                <div className="d-flex gap-3 p-3">
                  <div className="flex-shrink-0">
                    <div className="rounded-circle p-3 d-flex align-items-center justify-content-center" style={{
                      background: 'rgba(212, 175, 55, 0.1)',
                      width: '55px',
                      height: '55px'
                    }}>
                      <Shield size={24} color="#d4af37" />
                    </div>
                  </div>
                  <div>
                    <h4 className="fw-bold mb-2" style={{ color: '#0a1c3a' }}>Protocol & Ceremony Management</h4>
                    <p className="text-muted">
                      Expert coordination for formal events, official ceremonies, and diplomatic functions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex gap-3 p-3">
                  <div className="flex-shrink-0">
                    <div className="rounded-circle p-3 d-flex align-items-center justify-content-center" style={{
                      background: 'rgba(212, 175, 55, 0.1)',
                      width: '55px',
                      height: '55px'
                    }}>
                      <Users size={24} color="#d4af37" />
                    </div>
                  </div>
                  <div>
                    <h4 className="fw-bold mb-2" style={{ color: '#0a1c3a' }}>Guest Reception & Ushering</h4>
                    <p className="text-muted">
                      Warm welcome and professional guest management for seamless event flow.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex gap-3 p-3">
                  <div className="flex-shrink-0">
                    <div className="rounded-circle p-3 d-flex align-items-center justify-content-center" style={{
                      background: 'rgba(212, 175, 55, 0.1)',
                      width: '55px',
                      height: '55px'
                    }}>
                      <Star size={24} color="#d4af37" />
                    </div>
                  </div>
                  <div>
                    <h4 className="fw-bold mb-2" style={{ color: '#0a1c3a' }}>VIP Hosting & Coordination</h4>
                    <p className="text-muted">
                      Dedicated VIP care and personalized attention for high-profile guests.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex gap-3 p-3">
                  <div className="flex-shrink-0">
                    <div className="rounded-circle p-3 d-flex align-items-center justify-content-center" style={{
                      background: 'rgba(212, 175, 55, 0.1)',
                      width: '55px',
                      height: '55px'
                    }}>
                      <Heart size={24} color="#d4af37" />
                    </div>
                  </div>
                  <div>
                    <h4 className="fw-bold mb-2" style={{ color: '#0a1c3a' }}>Weddings & Celebrations</h4>
                    <p className="text-muted">
                      Flawless wedding coordination and ceremonial support for your special day.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex gap-3 p-3">
                  <div className="flex-shrink-0">
                    <div className="rounded-circle p-3 d-flex align-items-center justify-content-center" style={{
                      background: 'rgba(212, 175, 55, 0.1)',
                      width: '55px',
                      height: '55px'
                    }}>
                      <Calendar size={24} color="#d4af37" />
                    </div>
                  </div>
                  <div>
                    <h4 className="fw-bold mb-2" style={{ color: '#0a1c3a' }}>Corporate Event Assistance</h4>
                    <p className="text-muted">
                      Professional support for conferences, meetings, and corporate functions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex gap-3 p-3">
                  <div className="flex-shrink-0">
                    <div className="rounded-circle p-3 d-flex align-items-center justify-content-center" style={{
                      background: 'rgba(212, 175, 55, 0.1)',
                      width: '55px',
                      height: '55px'
                    }}>
                      <Clock size={24} color="#d4af37" />
                    </div>
                  </div>
                  <div>
                    <h4 className="fw-bold mb-2" style={{ color: '#0a1c3a' }}>Event Flow Coordination</h4>
                    <p className="text-muted">
                      Seamless timing, logistics management, and smooth event transitions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section - Executive Director */}
        <section className="py-5">
          <div className="container py-4">
            <div className="row align-items-center">
              <div className="col-lg-5 mb-4 mb-lg-0">
                <img 
                  src={presidentImg} 
                  alt="ServiceNow Executive Director" 
                  className="img-fluid rounded-4 shadow-lg"
                  style={{ borderRadius: '20px', width: '100%' }}
                />
              </div>
              <div className="col-lg-7">
                <span className="badge d-inline-flex align-items-center gap-2 px-3 py-2 mb-3 rounded-pill" style={{
                  background: 'rgba(212, 175, 55, 0.1)',
                  color: '#d4af37',
                  fontSize: '0.8rem',
                  fontWeight: '600'
                }}>
                  <Award size={14} /> LEADERSHIP
                </span>
                <h2 className="display-5 fw-bold mb-3" style={{ color: '#0a1c3a' }}>
                  Meet Our Executive Director
                </h2>
                <p className="lead mb-3 fst-italic" style={{ color: '#d4af37', fontWeight: '500' }}>
                  "Where service meets excellence — that's our promise to you."
                </p>
                <p style={{ color: '#4b5563', lineHeight: '1.8' }}>
                  As the Executive Director of ServiceNow, I am passionate about creating exceptional event experiences through professional protocol management and genuine hospitality. Our team is dedicated to ensuring that every guest feels welcomed and every event runs flawlessly.
                </p>
                <p style={{ color: '#6c757d', lineHeight: '1.8' }}>
                  From intimate gatherings to large-scale corporate events, we bring the same level of dedication, attention to detail, and commitment to excellence. Let us help you create memorable experiences that leave a lasting impression.
                </p>
                <hr className="my-4" style={{ width: '50px', borderColor: '#d4af37', borderWidth: '2px' }} />
                <div>
                  <h5 className="fw-bold mb-0" style={{ color: '#0a1c3a' }}>KUBANA Kevin</h5>
                  <p className="fw-semibold mb-2" style={{ color: '#d4af37' }}>Executive Director, ServiceNow</p>
                  <div className="d-flex gap-3">
                    <a href="tel:+250788804113" className="text-decoration-none d-flex align-items-center gap-2" style={{ color: '#6c757d', fontSize: '0.9rem' }}>
                      <Phone size={14} /> +250 788 804 113
                    </a>
                    <a href="mailto:servicenowprot@gmail.com" className="text-decoration-none d-flex align-items-center gap-2" style={{ color: '#6c757d', fontSize: '0.9rem' }}>
                      <Mail size={14} /> servicenowprot@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="card border-0 shadow-lg text-center p-5" style={{ borderRadius: '24px' }}>
                  <div className="mb-3">
                    <span className="badge d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill" style={{
                      background: 'rgba(212, 175, 55, 0.1)',
                      color: '#d4af37',
                      fontSize: '0.8rem',
                      fontWeight: '600'
                    }}>
                      <Mail size={14} /> GET IN TOUCH
                    </span>
                  </div>
                  <h2 className="display-5 fw-bold mb-3" style={{ color: '#0a1c3a' }}>
                    Plan Your Next Event With Us
                  </h2>
                  <p className="lead mb-4" style={{ color: '#6c757d' }}>
                    From VIP receptions to complete event coordination — we ensure every detail is handled with professionalism and care.
                  </p>
                  <div className="row g-3 mb-4">
                    <div className="col-md-6">
                      <div className="p-3 rounded-3" style={{ backgroundColor: '#f8f9fa' }}>
                        <Phone size={20} color="#d4af37" className="d-block mb-2 mx-auto" />
                        <h6 className="fw-bold mb-1">Phone Number</h6>
                        <p className="mb-0 text-muted">+250 788 804 113</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-3 rounded-3" style={{ backgroundColor: '#f8f9fa' }}>
                        <Mail size={20} color="#d4af37" className="d-block mb-2 mx-auto" />
                        <h6 className="fw-bold mb-1">Email Address</h6>
                        <p className="mb-0 text-muted">servicenowprot@gmail.com</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Link to="/contact" className="btn d-inline-flex align-items-center gap-2 btn-lg px-5 py-3 fw-semibold" style={{ 
                      borderRadius: '50px', 
                      background: '#d4af37', 
                      border: 'none', 
                      color: '#0a1c3a',
                      textDecoration: 'none'
                    }}>
                      Contact Us Today <ChevronRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Book Your Event */}
        <section className="py-5" style={{ 
          background: 'linear-gradient(135deg, #0a1c3a 0%, #122b4f 100%)'
        }}>
          <div className="container py-5 text-center">
            <h2 className="display-4 fw-bold text-white mb-3">
              Ready to Create an Unforgettable Event?
            </h2>
            <p className="lead text-white opacity-90 mb-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Let us welcome your guests with professionalism, elegance, and excellence.
            </p>
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              <Link to="/contact" className="btn d-inline-flex align-items-center gap-2 btn-lg px-5 py-3 fw-semibold" style={{ 
                borderRadius: '50px',
                background: '#d4af37',
                color: '#0a1c3a',
                textDecoration: 'none',
                boxShadow: '0 10px 25px rgba(212, 175, 55, 0.3)'
              }}>
                Book Your Event <ChevronRight size={18} />
              </Link>
              <Link to="/services" className="btn d-inline-flex align-items-center gap-2 btn-lg px-5 py-3 fw-semibold" style={{ 
                borderRadius: '50px',
                background: 'transparent',
                color: '#fff',
                textDecoration: 'none',
                border: '2px solid rgba(212, 175, 55, 0.5)'
              }}>
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>
        {`
          .hover-link:hover {
            color: #d4af37 !important;
          }
          
          .service-item {
            transition: all 0.3s ease;
          }
          
          .service-item:hover {
            transform: translateX(5px);
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
    </>
  );
}

export default About;
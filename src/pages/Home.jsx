import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Calendar, Users, Award, Star, Heart, Shield, Sparkles, Clock, ChevronRight, Quote } from "lucide-react";

// Import all images from assets
import aboutImg from "../assets/about1.jpeg";
import hero1Img from "../assets/hero.png";
import hero2Img from "../assets/hero2.jpeg";
import presidentImg from "../assets/presidente.png";
// Testimonial avatars (replace with actual African professional images)
import testimonial1 from "../assets/avator1.jpg";
import testimonial2 from "../assets/avator1.jpg";
import testimonial3 from "../assets/avator1.jpg";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: hero1Img,
      title: "Where Service Meets Excellence",
      subtitle: "Professional Protocol & Event Management",
      description: "Delivering exceptional ceremony coordination and hospitality services for weddings, conferences, corporate functions, and official ceremonies.",
      ctaText: "Plan Your Event",
      ctaLink: "/services"
    },
    {
      image: hero2Img,
      title: "The Art of Welcome",
      subtitle: "Creating Memorable Experiences",
      description: "From VIP reception to event flow coordination, we provide reliable support tailored to meet the unique needs of every client.",
      ctaText: "Contact Us",
      ctaLink: "/contact"
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Dr. Amara Okafor",
      position: "CEO, African Leadership Summit",
      image: testimonial1,
      quote: "ServiceNow transformed our annual conference. Their protocol management was impeccable, and the team's professionalism exceeded our expectations. Our international delegates were thoroughly impressed.",
      rating: 5,
      location: "Lagos, Nigeria"
    },
    {
      id: 2,
      name: "Mr. Kwame Asante",
      position: "Event Director, Pan-African Business Forum",
      image: testimonial2,
      quote: "The guest reception and ushering were flawless. ServiceNow's attention to detail made our VIP guests feel truly valued. I highly recommend their services for any high-profile event.",
      rating: 5,
      location: "Accra, Ghana"
    },
    {
      id: 3,
      name: "Ms. Fatima Diallo",
      position: "Wedding & Events Planner",
      image: testimonial3,
      quote: "Working with ServiceNow was a game-changer for our destination wedding. Their team handled everything from guest coordination to ceremonial flow seamlessly. Absolutely outstanding!",
      rating: 5,
      location: "Dakar, Senegal"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section - Professional Redesign */}
        <section className="hero-section position-relative" style={{ 
          minHeight: '85vh',
          marginTop: '0',
          overflow: 'hidden',
          position: 'relative'
        }}>
          {/* Background Slides */}
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: index === currentSlide ? 1 : 0,
                transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                zIndex: index === currentSlide ? 1 : 0,
                filter: 'brightness(0.85)'
              }}
            />
          ))}
          
          {/* Gradient Overlay for better text readability */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(10, 28, 58, 0.85) 0%, rgba(10, 28, 58, 0.6) 50%, rgba(0,0,0,0.4) 100%)',
            zIndex: 2
          }} />
          
          {/* Content */}
          <div className="container position-relative" style={{ zIndex: 3, paddingTop: '160px', paddingBottom: '120px', minHeight: '85vh', display: 'flex', alignItems: 'center' }}>
            <div className="row">
              <div className="col-lg-7 mx-auto text-center">
                <div className="hero-content animate-fade-in">
                  <div className="hero-badge-wrapper mb-4">
                    <span className="hero-badge d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill" style={{
                      background: 'rgba(212, 175, 55, 0.12)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(212, 175, 55, 0.4)',
                      borderRadius: '50px',
                      color: '#d4af37',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      letterSpacing: '1px'
                    }}>
                      <Star size={14} fill="#d4af37" /> PREMIUM EVENT SOLUTIONS
                    </span>
                  </div>
                  
                  <h1 className="display-4 fw-bold mb-4" style={{ 
                    color: '#fff', 
                    lineHeight: '1.2',
                    textShadow: '0 2px 20px rgba(0,0,0,0.3)',
                    fontSize: '3.5rem'
                  }}>
                    {slides[currentSlide].title}
                  </h1>
                  
                  <h2 className="h3 mb-3" style={{ color: '#d4af37', fontWeight: '500', letterSpacing: '-0.5px' }}>
                    {slides[currentSlide].subtitle}
                  </h2>
                  
                  <p className="lead mb-5" style={{ 
                    color: 'rgba(255,255,255,0.92)', 
                    fontSize: '1.15rem', 
                    maxWidth: '650px', 
                    margin: '0 auto',
                    lineHeight: '1.6'
                  }}>
                    {slides[currentSlide].description}
                  </p>
                  
                  <div className="d-flex flex-wrap gap-3 justify-content-center">
                    <Link to={slides[currentSlide].ctaLink} className="btn-hero-primary d-inline-flex align-items-center gap-2 px-5 py-3 fw-semibold" style={{ 
                      borderRadius: '50px',
                      fontSize: '1rem',
                      background: '#d4af37',
                      color: '#0a1c3a',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 10px 25px rgba(212, 175, 55, 0.3)',
                      fontWeight: '600'
                    }}>
                      {slides[currentSlide].ctaText} <ChevronRight size={18} />
                    </Link>
                    <Link to="/about" className="btn-hero-secondary d-inline-flex align-items-center gap-2 px-5 py-3 fw-semibold" style={{ 
                      borderRadius: '50px',
                      fontSize: '1rem',
                      background: 'rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(10px)',
                      color: '#fff',
                      textDecoration: 'none',
                      border: '1px solid rgba(255,255,255,0.3)',
                      transition: 'all 0.3s ease'
                    }}>
                      Discover More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide Indicators - Professional Style */}
          <div className="slide-indicators" style={{
            position: 'absolute',
            bottom: '30px',
            left: '0',
            right: '0',
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            zIndex: 3
          }}>
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`indicator-dot ${index === currentSlide ? 'active' : ''}`}
                style={{
                  width: index === currentSlide ? '48px' : '10px',
                  height: '4px',
                  borderRadius: '4px',
                  border: 'none',
                  background: index === currentSlide ? '#d4af37' : 'rgba(255,255,255,0.5)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows - Sleek Design */}
          <button 
            onClick={prevSlide}
            className="slide-arrow prev-arrow"
            style={{
              position: 'absolute',
              left: '30px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 3,
              transition: 'all 0.3s ease',
              color: '#fff',
              fontSize: '32px',
              fontWeight: '300'
            }}
          >
            ‹
          </button>
          <button 
            onClick={nextSlide}
            className="slide-arrow next-arrow"
            style={{
              position: 'absolute',
              right: '30px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 3,
              transition: 'all 0.3s ease',
              color: '#fff',
              fontSize: '32px',
              fontWeight: '300'
            }}
          >
            ›
          </button>
        </section>

        {/* Core Services Section */}
        <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container py-5">
            <div className="text-center mb-5">
              <span className="badge d-inline-flex align-items-center gap-2 px-3 py-2 mb-3 rounded-pill" style={{
                background: 'rgba(212, 175, 55, 0.1)',
                color: '#d4af37',
                fontSize: '0.8rem',
                fontWeight: '600'
              }}>
                <Award size={14} /> EXCELLENCE IN SERVICE
              </span>
              <h2 className="display-5 fw-bold mb-3" style={{ color: '#0a1c3a' }}>
                Professional Event Support
              </h2>
              <p className="lead" style={{ color: '#6c757d', maxWidth: '600px', margin: '0 auto' }}>
                Comprehensive protocol and hospitality services for every occasion
              </p>
            </div>

            <div className="row g-4">
              {/* Service Cards - same as your existing code, keeping for brevity */}
              <div className="col-md-6 col-lg-4">
                <div className="service-card h-100 text-center p-4" style={{
                  background: '#fff',
                  borderRadius: '20px',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}>
                  <div className="service-icon mb-4 d-inline-flex align-items-center justify-content-center" style={{
                    width: '70px',
                    height: '70px',
                    background: 'rgba(212, 175, 55, 0.1)',
                    borderRadius: '50%',
                    color: '#d4af37'
                  }}>
                    <Shield size={32} />
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: '#0a1c3a' }}>Protocol Management</h4>
                  <p style={{ color: '#6c757d', lineHeight: '1.7' }}>
                    Expert ceremony coordination and official protocol handling for formal events, VIP functions, and diplomatic occasions.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="service-card h-100 text-center p-4" style={{
                  background: '#fff',
                  borderRadius: '20px',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}>
                  <div className="service-icon mb-4 d-inline-flex align-items-center justify-content-center" style={{
                    width: '70px',
                    height: '70px',
                    background: 'rgba(212, 175, 55, 0.1)',
                    borderRadius: '50%',
                    color: '#d4af37'
                  }}>
                    <Users size={32} />
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: '#0a1c3a' }}>Guest Reception & Ushering</h4>
                  <p style={{ color: '#6c757d', lineHeight: '1.7' }}>
                    Warm welcome, professional ushering, and seamless guest management to ensure every attendee feels valued.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="service-card h-100 text-center p-4" style={{
                  background: '#fff',
                  borderRadius: '20px',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}>
                  <div className="service-icon mb-4 d-inline-flex align-items-center justify-content-center" style={{
                    width: '70px',
                    height: '70px',
                    background: 'rgba(212, 175, 55, 0.1)',
                    borderRadius: '50%',
                    color: '#d4af37'
                  }}>
                    <Star size={32} />
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: '#0a1c3a' }}>VIP Hosting & Coordination</h4>
                  <p style={{ color: '#6c757d', lineHeight: '1.7' }}>
                    Dedicated VIP care, personalized attention, and discreet coordination for high-profile guests.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="service-card h-100 text-center p-4" style={{
                  background: '#fff',
                  borderRadius: '20px',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}>
                  <div className="service-icon mb-4 d-inline-flex align-items-center justify-content-center" style={{
                    width: '70px',
                    height: '70px',
                    background: 'rgba(212, 175, 55, 0.1)',
                    borderRadius: '50%',
                    color: '#d4af37'
                  }}>
                    <Heart size={32} />
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: '#0a1c3a' }}>Weddings & Celebrations</h4>
                  <p style={{ color: '#6c757d', lineHeight: '1.7' }}>
                    Flawless wedding coordination, guest management, and ceremonial support for your special day.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="service-card h-100 text-center p-4" style={{
                  background: '#fff',
                  borderRadius: '20px',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}>
                  <div className="service-icon mb-4 d-inline-flex align-items-center justify-content-center" style={{
                    width: '70px',
                    height: '70px',
                    background: 'rgba(212, 175, 55, 0.1)',
                    borderRadius: '50%',
                    color: '#d4af37'
                  }}>
                    <Calendar size={32} />
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: '#0a1c3a' }}>Corporate Event Assistance</h4>
                  <p style={{ color: '#6c757d', lineHeight: '1.7' }}>
                    Professional support for conferences, meetings, and corporate functions with attention to detail.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="service-card h-100 text-center p-4" style={{
                  background: '#fff',
                  borderRadius: '20px',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}>
                  <div className="service-icon mb-4 d-inline-flex align-items-center justify-content-center" style={{
                    width: '70px',
                    height: '70px',
                    background: 'rgba(212, 175, 55, 0.1)',
                    borderRadius: '50%',
                    color: '#d4af37'
                  }}>
                    <Clock size={32} />
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: '#0a1c3a' }}>Event Flow Coordination</h4>
                  <p style={{ color: '#6c757d', lineHeight: '1.7' }}>
                    Seamless timing, logistics management, and smooth transitions throughout your event.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section - New Addition */}
        <section className="py-5" style={{ backgroundColor: '#ffffff' }}>
          <div className="container py-5">
            <div className="text-center mb-5">
              <span className="badge d-inline-flex align-items-center gap-2 px-3 py-2 mb-3 rounded-pill" style={{
                background: 'rgba(212, 175, 55, 0.1)',
                color: '#d4af37',
                fontSize: '0.8rem',
                fontWeight: '600'
              }}>
                <Star size={14} /> CLIENT TESTIMONIALS
              </span>
              <h2 className="display-5 fw-bold mb-3" style={{ color: '#0a1c3a' }}>
                What Our Clients Say
              </h2>
              <p className="lead" style={{ color: '#6c757d', maxWidth: '600px', margin: '0 auto' }}>
                Trusted by event professionals across Africa
              </p>
            </div>

            <div className="row g-4">
              {testimonials.map((testimonial) => (
                <div className="col-md-6 col-lg-4" key={testimonial.id}>
                  <div className="testimonial-card h-100 p-4" style={{
                    background: '#fff',
                    borderRadius: '24px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                    border: '1px solid rgba(212, 175, 55, 0.1)',
                    transition: 'all 0.3s ease',
                    position: 'relative'
                  }}>
                    {/* Quote Icon */}
                    <div style={{
                      position: 'absolute',
                      top: '20px',
                      right: '20px',
                      opacity: 0.1
                    }}>
                      <Quote size={48} color="#d4af37" />
                    </div>
                    
                    {/* Rating Stars */}
                    <div className="mb-3 d-flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="#d4af37" color="#d4af37" />
                      ))}
                    </div>
                    
                    {/* Quote Text */}
                    <p className="mb-4" style={{ 
                      color: '#4b5563', 
                      lineHeight: '1.7',
                      fontSize: '0.95rem',
                      fontStyle: 'italic',
                      position: 'relative',
                      zIndex: 1
                    }}>
                      "{testimonial.quote}"
                    </p>
                    
                    {/* Client Info */}
                    <div className="d-flex align-items-center gap-3 mt-auto">
                      <div style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #d4af37, #b8960c)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden'
                      }}>
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          style={{
                            width: '56px',
                            height: '56px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            border: '2px solid white'
                          }}
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/60x60?text=Profile';
                          }}
                        />
                      </div>
                      <div>
                        <h6 className="fw-bold mb-0" style={{ color: '#0a1c3a' }}>{testimonial.name}</h6>
                        <p className="small mb-0" style={{ color: '#d4af37' }}>{testimonial.position}</p>
                        <p className="small mb-0" style={{ color: '#9ca3af', fontSize: '0.75rem' }}>{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Trust Indicators */}
            <div className="text-center mt-5 pt-3">
              <div className="d-flex flex-wrap justify-content-center gap-4 gap-md-5">
                <div className="d-flex align-items-center gap-2">
                  <Award size={20} color="#d4af37" />
                  <span style={{ color: '#4b5563' }}>100+ Events Completed</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <Users size={20} color="#d4af37" />
                  <span style={{ color: '#4b5563' }}>50+ Corporate Clients</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <Star size={20} color="#d4af37" />
                  <span style={{ color: '#4b5563' }}>4.9/5 Client Rating</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container py-4">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <img 
                  src={aboutImg} 
                  alt="ServiceNow Event Management" 
                  className="img-fluid rounded-4 shadow"
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
                  <Star size={14} /> ABOUT US
                </span>
                <h2 className="display-5 fw-bold mb-4" style={{ color: '#0a1c3a' }}>
                  Where Service Meets Excellence
                </h2>
                <p className="lead mb-3" style={{ color: '#d4af37', fontWeight: '500' }}>
                  Professional protocol and event support company
                </p>
                <p style={{ color: '#4b5563', lineHeight: '1.8' }}>
                  ServiceNow is dedicated to delivering exceptional ceremony coordination and hospitality services. We specialize in managing protocol, guest reception, ushering, and event organization for weddings, conferences, corporate functions, official ceremonies, and special occasions.
                </p>
                <p style={{ color: '#6c757d', lineHeight: '1.8' }}>
                  With professionalism, elegance, and attention to detail, we ensure every guest feels welcomed and every event runs smoothly. Our team is committed to creating organized, respectful, and memorable experiences through high-quality service and excellent coordination.
                </p>
                <div className="row mt-4">
                  <div className="col-sm-6 mb-3">
                    <div className="d-flex align-items-center gap-2">
                      <Shield size={18} color="#d4af37" />
                      <span style={{ color: '#374151' }}>Professional Protocol</span>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-3">
                    <div className="d-flex align-items-center gap-2">
                      <Users size={18} color="#d4af37" />
                      <span style={{ color: '#374151' }}>Expert Team</span>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-3">
                    <div className="d-flex align-items-center gap-2">
                      <Heart size={18} color="#d4af37" />
                      <span style={{ color: '#374151' }}>Personalized Service</span>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-3">
                    <div className="d-flex align-items-center gap-2">
                      <Award size={18} color="#d4af37" />
                      <span style={{ color: '#374151' }}>Excellence Guaranteed</span>
                    </div>
                  </div>
                </div>
                <Link to="/about" className="btn d-inline-flex align-items-center gap-2 mt-3 px-4 py-3 fw-semibold" style={{
                  background: '#0a1c3a',
                  color: '#fff',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}>
                  Learn More About Us <ChevronRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-5" style={{ backgroundColor: '#0a1c3a' }}>
          <div className="container py-5">
            <div className="text-center mb-5">
              <span className="badge d-inline-flex align-items-center gap-2 px-3 py-2 mb-3 rounded-pill" style={{
                background: 'rgba(212, 175, 55, 0.15)',
                color: '#d4af37',
                fontSize: '0.8rem',
                fontWeight: '600'
              }}>
                <Award size={14} /> OUR CORE VALUES
              </span>
              <h2 className="display-5 fw-bold mb-3" style={{ color: '#fff' }}>
                What Drives Us
              </h2>
              <p className="lead" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto' }}>
                Guided by principles that ensure exceptional service delivery
              </p>
            </div>

            <div className="row g-4">
              {[
                { icon: Shield, title: "Professionalism", desc: "Maintaining the highest standards in every interaction and service delivery." },
                { icon: Award, title: "Excellence", desc: "Striving for perfection in every detail of event coordination." },
                { icon: Heart, title: "Respect", desc: "Treating every client and guest with dignity and consideration." },
                { icon: Users, title: "Hospitality", desc: "Creating warm, welcoming environments for all attendees." },
                { icon: Star, title: "Reliability", desc: "Consistent, dependable service you can count on." },
                { icon: Sparkles, title: "Customer Satisfaction", desc: "Ensuring memorable experiences that exceed expectations." }
              ].map((value, index) => (
                <div className="col-md-6 col-lg-4" key={index}>
                  <div className="text-center p-4" style={{
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '16px',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease'
                  }}>
                    <div className="mb-3 d-inline-flex align-items-center justify-content-center" style={{
                      width: '60px',
                      height: '60px',
                      background: 'rgba(212, 175, 55, 0.15)',
                      borderRadius: '50%',
                      color: '#d4af37'
                    }}>
                      <value.icon size={28} />
                    </div>
                    <h4 className="fw-bold mb-3" style={{ color: '#d4af37' }}>{value.title}</h4>
                    <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.7' }}>
                      {value.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-5" style={{ backgroundColor: '#ffffff' }}>
          <div className="container py-4">
            <div className="row align-items-center">
              <div className="col-lg-5 mb-4 mb-lg-0">
                <img 
                  src={presidentImg} 
                  alt="ServiceNow Leadership" 
                  className="img-fluid rounded-4 shadow"
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
                  <Star size={14} /> LEADERSHIP
                </span>
                <h2 className="display-5 fw-bold mb-3" style={{ color: '#0a1c3a' }}>
                  Message From Our Director
                </h2>
                <p className="lead mb-3 fst-italic" style={{ color: '#d4af37', fontWeight: '500' }}>
                  "Where service meets excellence — that's our promise to you."
                </p>
                <p style={{ color: '#4b5563', lineHeight: '1.8' }}>
                  At ServiceNow, we believe that successful events begin with proper hospitality and professional protocol management. Every guest deserves to feel welcomed, and every event should run with seamless precision.
                </p>
                <p style={{ color: '#6c757d', lineHeight: '1.8' }}>
                  Our team is dedicated to creating organized, respectful, and memorable experiences through high-quality service and excellent coordination. From VIP reception to event flow coordination, we provide reliable support tailored to meet the unique needs of every client.
                </p>
                <hr className="my-4" style={{ width: '50px', borderColor: '#d4af37', borderWidth: '2px' }} />
                <div>
                  <h5 className="fw-bold mb-0" style={{ color: '#0a1c3a' }}>KUBANA Kevin</h5>
                  <p className="fw-semibold" style={{ color: '#d4af37' }}>Executive Director, ServiceNow</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-5" style={{ 
          background: 'linear-gradient(135deg, #0a1c3a 0%, #122b4f 100%)',
          marginBottom: 0
        }}>
          <div className="container py-5 text-center">
            <div className="mb-3">
              <span className="badge d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill" style={{
                background: '#d4af37',
                color: '#0a1c3a',
                fontSize: '0.8rem',
                fontWeight: '700'
              }}>
                <Calendar size={14} /> READY TO PLAN?
              </span>
            </div>
            <h2 className="display-4 fw-bold text-white mb-3">
              Let Us Welcome Your Guests
            </h2>
            <p className="lead text-white opacity-90 mb-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
              From intimate gatherings to large-scale events — we ensure every detail is handled with professionalism and care.
            </p>
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              <Link to="/contact" className="btn d-inline-flex align-items-center gap-2 btn-lg px-5 py-3 fw-semibold" style={{ 
                borderRadius: '50px',
                background: '#d4af37',
                color: '#0a1c3a',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}>
                Contact Us Today <ChevronRight size={18} />
              </Link>
              <Link to="/services" className="btn d-inline-flex align-items-center gap-2 btn-lg px-5 py-3 fw-semibold" style={{ 
                borderRadius: '50px',
                background: 'transparent',
                color: '#fff',
                textDecoration: 'none',
                border: '2px solid rgba(212, 175, 55, 0.5)',
                transition: 'all 0.3s ease'
              }}>
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Enhanced Hover Styles */}
      <style>{`
        .service-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(212, 175, 55, 0.15) !important;
        }
        .service-card:hover .service-icon {
          background: #d4af37 !important;
          color: #0a1c3a !important;
          transition: all 0.3s ease;
        }
        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important;
          border-color: rgba(212, 175, 55, 0.3) !important;
        }
        .btn-hero-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(212, 175, 55, 0.4) !important;
          background: #e6c85c !important;
        }
        .btn-hero-secondary:hover {
          border-color: #d4af37 !important;
          background: rgba(212, 175, 55, 0.2) !important;
        }
        .slide-arrow:hover {
          background: #d4af37 !important;
          color: #0a1c3a !important;
          border-color: #d4af37 !important;
        }
        .indicator-dot:hover {
          background: #d4af37 !important;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
        @media (max-width: 768px) {
          .hero-section {
            min-height: 70vh;
          }
          .container {
            padding-left: 20px;
            padding-right: 20px;
          }
          .display-4 {
            font-size: 2rem;
          }
          .display-5 {
            font-size: 1.8rem;
          }
          .slide-arrow {
            width: 40px !important;
            height: 40px !important;
            font-size: 28px !important;
          }
          .slide-arrow.prev-arrow {
            left: 15px !important;
          }
          .slide-arrow.next-arrow {
            right: 15px !important;
          }
        }
      `}</style>
    </>
  );
}

export default Home;
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Shield, Users, Star, Heart, Calendar, Clock, Award, Sparkles, HandHeart, Phone, Mail, ChevronRight, MapPin } from "lucide-react";

// Import all images from assets
import hero1Img from "../assets/hero1.jpeg";
import service1Img from "../assets/gallery11.jpeg";
import service2Img from "../assets/hero2.jpeg";
import securityImg from "../assets/service2.jpeg";
import presidentImg from "../assets/presidente.png";

function Services() {
  const services = [
    {
      icon: Shield,
      title: "Protocol & Ceremony Management",
      description: "Expert ceremony coordination and official protocol handling for formal events, VIP functions, and diplomatic occasions.",
      features: ["Official protocol management", "Ceremony flow coordination", "Diplomatic event handling", "Formal seating arrangements"]
    },
    {
      icon: Users,
      title: "Guest Reception & Ushering",
      description: "Warm welcome, professional ushering, and seamless guest management to ensure every attendee feels valued.",
      features: ["Professional ushering services", "Guest registration & check-in", "Welcome desk management", "Guest flow coordination"]
    },
    {
      icon: Star,
      title: "VIP Hosting & Coordination",
      description: "Dedicated VIP care, personalized attention, and discreet coordination for high-profile guests.",
      features: ["VIP welcome & escort", "Personalized guest care", "Discreet coordination", "Special requests handling"]
    },
    {
      icon: Heart,
      title: "Weddings & Celebrations",
      description: "Flawless wedding coordination, guest management, and ceremonial support for your special day.",
      features: ["Wedding ceremony coordination", "Guest reception management", "Bridal party ushering", "Celebration flow planning"]
    },
    {
      icon: Calendar,
      title: "Corporate Event Assistance",
      description: "Professional support for conferences, meetings, and corporate functions with attention to detail.",
      features: ["Conference coordination", "Executive meeting support", "Corporate hospitality", "Event logistics management"]
    },
    {
      icon: Clock,
      title: "Event Flow Coordination",
      description: "Seamless timing, logistics management, and smooth transitions throughout your event.",
      features: ["Timeline management", "Transition coordination", "Logistics oversight", "Emergency response planning"]
    }
  ];

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
                <Star size={14} /> OUR SERVICES
              </span>
            </div>
            <h1 className="display-3 fw-bold text-white mb-3">Professional Event Support</h1>
            <p className="lead text-white opacity-90 mb-3" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Comprehensive protocol and hospitality services for every occasion
            </p>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item"><Link to="/" className="text-white-50 text-decoration-none hover-link">Home</Link></li>
                <li className="breadcrumb-item active text-white-50" aria-current="page">Our Services</li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Services Overview - Main Services */}
        <section className="py-5">
          <div className="container py-4">
            <div className="text-center mb-5">
              <span className="badge d-inline-flex align-items-center gap-2 px-3 py-2 mb-3 rounded-pill" style={{
                background: 'rgba(212, 175, 55, 0.1)',
                color: '#d4af37',
                fontSize: '0.8rem',
                fontWeight: '600'
              }}>
                <Award size={14} /> WHAT WE OFFER
              </span>
              <h2 className="display-5 fw-bold mb-3" style={{ color: '#0a1c3a' }}>
                Our Professional Services
              </h2>
              <p className="lead" style={{ color: '#6c757d', maxWidth: '600px', margin: '0 auto' }}>
                From protocol management to guest reception — we handle every detail with excellence
              </p>
            </div>

            {/* Service 1 - Protocol & Ceremony Management */}
            <div className="row align-items-center mb-5 py-4">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <img 
                  src={service1Img} 
                  alt="Protocol & Ceremony Management" 
                  className="img-fluid rounded-4 shadow-lg"
                  style={{ borderRadius: '20px', width: '100%', height: '400px', objectFit: 'cover' }}
                />
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ 
                    width: '70px', 
                    height: '70px',
                    background: 'rgba(212, 175, 55, 0.1)'
                  }}>
                    <Shield size={32} color="#d4af37" />
                  </div>
                </div>
                <h3 className="display-6 fw-bold mb-3" style={{ color: '#0a1c3a' }}>Protocol & Ceremony Management</h3>
                <p className="lead mb-3" style={{ color: '#d4af37', fontWeight: '500' }}>
                  Expert coordination for formal and official events
                </p>
                <p style={{ color: '#6c757d', lineHeight: '1.8' }}>
                  We specialize in managing protocol for official ceremonies, diplomatic functions, and formal events. Our team ensures that every procedural detail is handled with precision and professionalism.
                </p>
                <ul className="list-unstyled mt-4">
                  <li className="mb-2 d-flex align-items-center gap-2">
                    <ChevronRight size={16} color="#d4af37" />
                    <span>Official protocol management</span>
                  </li>
                  <li className="mb-2 d-flex align-items-center gap-2">
                    <ChevronRight size={16} color="#d4af37" />
                    <span>Ceremony flow coordination</span>
                  </li>
                  <li className="mb-2 d-flex align-items-center gap-2">
                    <ChevronRight size={16} color="#d4af37" />
                    <span>Diplomatic event handling</span>
                  </li>
                  <li className="mb-2 d-flex align-items-center gap-2">
                    <ChevronRight size={16} color="#d4af37" />
                    <span>Formal seating arrangements</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 2 - Guest Reception & Ushering */}
            <div className="row align-items-center mb-5 py-4 flex-lg-row-reverse">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <img 
                  src={service2Img} 
                  alt="Guest Reception & Ushering" 
                  className="img-fluid rounded-4 shadow-lg"
                  style={{ borderRadius: '20px', width: '100%', height: '400px', objectFit: 'cover' }}
                />
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ 
                    width: '70px', 
                    height: '70px',
                    background: 'rgba(212, 175, 55, 0.1)'
                  }}>
                    <Users size={32} color="#d4af37" />
                  </div>
                </div>
                <h3 className="display-6 fw-bold mb-3" style={{ color: '#0a1c3a' }}>Guest Reception & Ushering</h3>
                <p className="lead mb-3" style={{ color: '#d4af37', fontWeight: '500' }}>
                  Creating warm, welcoming first impressions
                </p>
                <p style={{ color: '#6c757d', lineHeight: '1.8' }}>
                  Our professional ushers and reception staff ensure every guest feels welcomed from the moment they arrive. We manage check-ins, provide guidance, and maintain smooth guest flow throughout your event.
                </p>
                <ul className="list-unstyled mt-4">
                  <li className="mb-2 d-flex align-items-center gap-2">
                    <ChevronRight size={16} color="#d4af37" />
                    <span>Professional ushering services</span>
                  </li>
                  <li className="mb-2 d-flex align-items-center gap-2">
                    <ChevronRight size={16} color="#d4af37" />
                    <span>Guest registration & check-in</span>
                  </li>
                  <li className="mb-2 d-flex align-items-center gap-2">
                    <ChevronRight size={16} color="#d4af37" />
                    <span>Welcome desk management</span>
                  </li>
                  <li className="mb-2 d-flex align-items-center gap-2">
                    <ChevronRight size={16} color="#d4af37" />
                    <span>Guest flow coordination</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 3 - VIP Hosting & Coordination */}
            <div className="row align-items-center py-4">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <img 
                  src={securityImg} 
                  alt="VIP Hosting & Coordination" 
                  className="img-fluid rounded-4 shadow-lg"
                  style={{ borderRadius: '20px', width: '100%', height: '400px', objectFit: 'cover' }}
                />
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ 
                    width: '70px', 
                    height: '70px',
                    background: 'rgba(212, 175, 55, 0.1)'
                  }}>
                    <Star size={32} color="#d4af37" />
                  </div>
                </div>
                <h3 className="display-6 fw-bold mb-3" style={{ color: '#0a1c3a' }}>VIP Hosting & Coordination</h3>
                <p className="lead mb-3" style={{ color: '#d4af37', fontWeight: '500' }}>
                  Dedicated care for high-profile guests
                </p>
                <p style={{ color: '#6c757d', lineHeight: '1.8' }}>
                  We provide personalized attention and discreet coordination for VIP guests, ensuring their experience is seamless, comfortable, and memorable.
                </p>
                <ul className="list-unstyled mt-4">
                  <li className="mb-2 d-flex align-items-center gap-2">
                    <ChevronRight size={16} color="#d4af37" />
                    <span>VIP welcome & escort</span>
                  </li>
                  <li className="mb-2 d-flex align-items-center gap-2">
                    <ChevronRight size={16} color="#d4af37" />
                    <span>Personalized guest care</span>
                  </li>
                  <li className="mb-2 d-flex align-items-center gap-2">
                    <ChevronRight size={16} color="#d4af37" />
                    <span>Discreet coordination</span>
                  </li>
                  <li className="mb-2 d-flex align-items-center gap-2">
                    <ChevronRight size={16} color="#d4af37" />
                    <span>Special requests handling</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Services Grid */}
        <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container py-4">
            <div className="text-center mb-5">
              <span className="badge d-inline-flex align-items-center gap-2 px-3 py-2 mb-3 rounded-pill" style={{
                background: 'rgba(212, 175, 55, 0.1)',
                color: '#d4af37',
                fontSize: '0.8rem',
                fontWeight: '600'
              }}>
                <Sparkles size={14} /> MORE SERVICES
              </span>
              <h2 className="display-5 fw-bold mb-3" style={{ color: '#0a1c3a' }}>
                Additional Event Support
              </h2>
              <p className="lead" style={{ color: '#6c757d', maxWidth: '600px', margin: '0 auto' }}>
                Comprehensive solutions for every type of occasion
              </p>
            </div>

            <div className="row g-4">
              <div className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm text-center p-4 service-card" style={{ borderRadius: '16px', transition: 'all 0.3s ease' }}>
                  <div className="rounded-circle d-inline-flex align-items-center justify-content-center mx-auto mb-4" style={{ 
                    width: '70px', 
                    height: '70px',
                    background: 'rgba(212, 175, 55, 0.1)'
                  }}>
                    <Heart size={32} color="#d4af37" />
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: '#0a1c3a' }}>Weddings & Celebrations</h4>
                  <p className="text-muted">
                    Flawless wedding coordination, guest management, and ceremonial support for your special day.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm text-center p-4 service-card" style={{ borderRadius: '16px', transition: 'all 0.3s ease' }}>
                  <div className="rounded-circle d-inline-flex align-items-center justify-content-center mx-auto mb-4" style={{ 
                    width: '70px', 
                    height: '70px',
                    background: 'rgba(212, 175, 55, 0.1)'
                  }}>
                    <Calendar size={32} color="#d4af37" />
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: '#0a1c3a' }}>Corporate Events</h4>
                  <p className="text-muted">
                    Professional support for conferences, meetings, and corporate functions with attention to detail.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm text-center p-4 service-card" style={{ borderRadius: '16px', transition: 'all 0.3s ease' }}>
                  <div className="rounded-circle d-inline-flex align-items-center justify-content-center mx-auto mb-4" style={{ 
                    width: '70px', 
                    height: '70px',
                    background: 'rgba(212, 175, 55, 0.1)'
                  }}>
                    <Clock size={32} color="#d4af37" />
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: '#0a1c3a' }}>Event Flow Coordination</h4>
                  <p className="text-muted">
                    Seamless timing, logistics management, and smooth transitions throughout your event.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose ServiceNow */}
        <section className="py-5">
          <div className="container py-4">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <img 
                  src={presidentImg} 
                  alt="Why Choose ServiceNow" 
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
                  <Award size={14} /> WHY CHOOSE US
                </span>
                <h2 className="display-5 fw-bold mb-4" style={{ color: '#0a1c3a' }}>
                  Excellence in Every Detail
                </h2>
                <div className="mb-4">
                  <div className="d-flex gap-3 mb-3">
                    <Shield size={24} color="#d4af37" className="flex-shrink-0" />
                    <div>
                      <h5 className="fw-bold mb-1" style={{ color: '#0a1c3a' }}>Professional Protocol Expertise</h5>
                      <p className="text-muted mb-0">Certified protocol management for formal and diplomatic events.</p>
                    </div>
                  </div>
                  <div className="d-flex gap-3 mb-3">
                    <Heart size={24} color="#d4af37" className="flex-shrink-0" />
                    <div>
                      <h5 className="fw-bold mb-1" style={{ color: '#0a1c3a' }}>Personalized Service</h5>
                      <p className="text-muted mb-0">Tailored solutions to meet your unique event needs.</p>
                    </div>
                  </div>
                  <div className="d-flex gap-3 mb-3">
                    <Users size={24} color="#d4af37" className="flex-shrink-0" />
                    <div>
                      <h5 className="fw-bold mb-1" style={{ color: '#0a1c3a' }}>Experienced Team</h5>
                      <p className="text-muted mb-0">Trained professionals dedicated to excellence.</p>
                    </div>
                  </div>
                  <div className="d-flex gap-3">
                    <Star size={24} color="#d4af37" className="flex-shrink-0" />
                    <div>
                      <h5 className="fw-bold mb-1" style={{ color: '#0a1c3a' }}>Memorable Experiences</h5>
                      <p className="text-muted mb-0">Creating lasting impressions for your guests.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial / Quote Section */}
        <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container py-4">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <div className="card border-0 shadow-lg p-5" style={{ 
                  borderRadius: '20px', 
                  background: 'linear-gradient(135deg, #0a1c3a 0%, #122b4f 100%)' 
                }}>
                  <Sparkles size={32} color="#d4af37" className="mb-3 d-inline-block mx-auto" />
                  <h3 className="display-6 fw-bold text-white mb-3">"Where Service Meets Excellence"</h3>
                  <p className="lead text-white-50 mb-4">
                    The Art of Welcome — ensuring every guest feels valued and every event runs flawlessly.
                  </p>
                  <hr className="my-4" style={{ width: '80px', margin: '20px auto', borderColor: '#d4af37' }} />
                  <p className="text-white-50 mb-0">
                    From VIP receptions to complete event coordination — we deliver excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Book / Get Started */}
        <section className="py-5">
          <div className="container py-4">
            <div className="text-center mb-5">
              <span className="badge d-inline-flex align-items-center gap-2 px-3 py-2 mb-3 rounded-pill" style={{
                background: 'rgba(212, 175, 55, 0.1)',
                color: '#d4af37',
                fontSize: '0.8rem',
                fontWeight: '600'
              }}>
                <HandHeart size={14} /> GET STARTED
              </span>
              <h2 className="display-5 fw-bold mb-3" style={{ color: '#0a1c3a' }}>
                Ready to Plan Your Event?
              </h2>
              <p className="lead" style={{ color: '#6c757d', maxWidth: '600px', margin: '0 auto' }}>
                Contact us today to discuss how we can make your event unforgettable
              </p>
            </div>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="text-center p-4">
                  <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ 
                    width: '80px', 
                    height: '80px',
                    background: 'rgba(212, 175, 55, 0.1)'
                  }}>
                    <Phone size={36} color="#d4af37" />
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: '#0a1c3a' }}>Call Us</h4>
                  <p className="text-muted mb-2">+250 788 804 113</p>
                  <p className="text-muted small">Available for consultation</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center p-4">
                  <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ 
                    width: '80px', 
                    height: '80px',
                    background: 'rgba(212, 175, 55, 0.1)'
                  }}>
                    <Mail size={36} color="#d4af37" />
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: '#0a1c3a' }}>Email Us</h4>
                  <p className="text-muted mb-2">servicenowprot@gmail.com</p>
                  <p className="text-muted small">We respond within 24 hours</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center p-4">
                  <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ 
                    width: '80px', 
                    height: '80px',
                    background: 'rgba(212, 175, 55, 0.1)'
                  }}>
                    <MapPin size={36} color="#d4af37" />
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: '#0a1c3a' }}>Visit Us</h4>
                  <p className="text-muted mb-2">Kigali Heights, KG 7 Ave</p>
                  <p className="text-muted small">Kigali, Rwanda</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Contact Us */}
        <section className="py-5" style={{ 
          background: 'linear-gradient(135deg, #0a1c3a 0%, #122b4f 100%)'
        }}>
          <div className="container py-5 text-center">
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
                boxShadow: '0 10px 25px rgba(212, 175, 55, 0.3)'
              }}>
                Book Your Event <ChevronRight size={18} />
              </Link>
              <Link to="/about" className="btn d-inline-flex align-items-center gap-2 btn-lg px-5 py-3 fw-semibold" style={{ 
                borderRadius: '50px',
                background: 'transparent',
                color: '#fff',
                textDecoration: 'none',
                border: '2px solid rgba(212, 175, 55, 0.5)'
              }}>
                Learn More About Us
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
          
          .service-card {
            transition: all 0.3s ease;
          }
          
          .service-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 15px 35px rgba(212, 175, 55, 0.15) !important;
          }
          
          .service-card:hover .rounded-circle {
            background: #d4af37 !important;
            transition: all 0.3s ease;
          }
          
          .service-card:hover .rounded-circle svg {
            color: #0a1c3a !important;
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
            .display-6 {
              font-size: 1.4rem;
            }
          }
        `}
      </style>
    </>
  );
}

export default Services;
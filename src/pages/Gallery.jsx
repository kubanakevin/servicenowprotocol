import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

// Import all images from assets
import aboutImg from "../assets/about1.jpeg";

// hero images
import hero1Img from "../assets/hero1.jpeg";
import hero2Img from "../assets/gallery11.jpeg";

// extra main image
import photoImg from "../assets/gallery22.jpeg";

// services
import service1Img from "../assets/gallery33.jpeg";
import service2Img from "../assets/gallery44.jpeg";
import service3Img from "../assets/all.jpeg";
import g1 from "../assets/boys.jpeg";

// security
import securityImg from "../assets/gallery55.jpeg";

// About section second image
const about2Img = aboutImg;

// President image
const presidentImg = photoImg;

// Gallery images
// const g1 = service3Img;
const g2 = hero2Img;
const g3 = aboutImg;
const g4 = service1Img;
const g5 = service2Img;
const g6 = securityImg;
const g7 = photoImg;
const g8 = hero1Img;
const g9 = hero2Img;
const g10 = service1Img;
const g11 = service3Img;

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("all");

  const galleryImages = [
    { id: 1, src: g1, category: "protocol", title: "Protocol Management Excellence" },
    { id: 2, src: g2, category: "reception", title: "Guest Reception & Ushering" },
    { id: 3, src: g3, category: "vip", title: "VIP Hosting & Coordination" },
    { id: 4, src: g4, category: "wedding", title: "Wedding Ceremony Support" },
    { id: 5, src: g5, category: "corporate", title: "Corporate Event Management" },
    { id: 6, src: g6, category: "reception", title: "Professional Ushering Services" },
    { id: 7, src: g7, category: "protocol", title: "Official Ceremony Coordination" },
    { id: 8, src: g8, category: "corporate", title: "Conference Event Support" },
    { id: 9, src: g9, category: "wedding", title: "Wedding Guest Management" },
    { id: 10, src: g10, category: "vip", title: "Executive VIP Reception" },
    { id: 11, src: g11, category: "protocol", title: "Diplomatic Protocol Service" },
  ];

  const filteredImages = filter === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

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
                <i className="bi bi-images me-1"></i> OUR PORTFOLIO
              </span>
            </div>
            <h1 className="display-3 fw-bold text-white mb-3">Event Gallery</h1>
            <p className="lead text-white opacity-90 mb-3" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Capturing moments of professional protocol, guest reception, and event excellence
            </p>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item"><Link to="/" className="text-white-50 text-decoration-none hover-link">Home</Link></li>
                <li className="breadcrumb-item active text-white-50" aria-current="page">Gallery</li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Gallery Filter Section */}
        <section className="py-5">
          <div className="container py-4">
            <div className="text-center mb-5">
              <span className="badge d-inline-flex align-items-center gap-2 px-3 py-2 mb-3 rounded-pill" style={{
                background: 'rgba(212, 175, 55, 0.1)',
                color: '#d4af37',
                fontSize: '0.8rem',
                fontWeight: '600'
              }}>
                <i className="bi bi-star-fill me-1"></i> OUR WORK
              </span>
              <h2 className="display-5 fw-bold mb-3" style={{ color: '#0a1c3a' }}>
                Moments of <span style={{ color: '#d4af37' }}>Excellence</span>
              </h2>
              <p className="lead" style={{ color: '#6c757d', maxWidth: '600px', margin: '0 auto' }}>
                Where Service Meets Excellence — Professional event support in action
              </p>
            </div>

            {/* Filter Buttons - ServiceNow Categories */}
            <div className="d-flex justify-content-center flex-wrap gap-3 mb-5">
              <button
                onClick={() => setFilter("all")}
                className={`btn px-4 py-2 fw-semibold`}
                style={{ 
                  borderRadius: '50px',
                  background: filter === "all" ? '#d4af37' : 'transparent',
                  color: filter === "all" ? '#0a1c3a' : '#d4af37',
                  border: `1px solid ${filter === "all" ? '#d4af37' : '#d4af37'}`,
                  transition: 'all 0.3s ease'
                }}
              >
                All Events
              </button>
              <button
                onClick={() => setFilter("protocol")}
                className={`btn px-4 py-2 fw-semibold`}
                style={{ 
                  borderRadius: '50px',
                  background: filter === "protocol" ? '#d4af37' : 'transparent',
                  color: filter === "protocol" ? '#0a1c3a' : '#d4af37',
                  border: `1px solid ${filter === "protocol" ? '#d4af37' : '#d4af37'}`,
                  transition: 'all 0.3s ease'
                }}
              >
                <i className="bi bi-shield-check me-1"></i> Protocol
              </button>
              <button
                onClick={() => setFilter("reception")}
                className={`btn px-4 py-2 fw-semibold`}
                style={{ 
                  borderRadius: '50px',
                  background: filter === "reception" ? '#d4af37' : 'transparent',
                  color: filter === "reception" ? '#0a1c3a' : '#d4af37',
                  border: `1px solid ${filter === "reception" ? '#d4af37' : '#d4af37'}`,
                  transition: 'all 0.3s ease'
                }}
              >
                <i className="bi bi-people me-1"></i> Guest Reception
              </button>
              <button
                onClick={() => setFilter("vip")}
                className={`btn px-4 py-2 fw-semibold`}
                style={{ 
                  borderRadius: '50px',
                  background: filter === "vip" ? '#d4af37' : 'transparent',
                  color: filter === "vip" ? '#0a1c3a' : '#d4af37',
                  border: `1px solid ${filter === "vip" ? '#d4af37' : '#d4af37'}`,
                  transition: 'all 0.3s ease'
                }}
              >
                <i className="bi bi-gem me-1"></i> VIP Hosting
              </button>
              <button
                onClick={() => setFilter("wedding")}
                className={`btn px-4 py-2 fw-semibold`}
                style={{ 
                  borderRadius: '50px',
                  background: filter === "wedding" ? '#d4af37' : 'transparent',
                  color: filter === "wedding" ? '#0a1c3a' : '#d4af37',
                  border: `1px solid ${filter === "wedding" ? '#d4af37' : '#d4af37'}`,
                  transition: 'all 0.3s ease'
                }}
              >
                <i className="bi bi-heart me-1"></i> Weddings
              </button>
              <button
                onClick={() => setFilter("corporate")}
                className={`btn px-4 py-2 fw-semibold`}
                style={{ 
                  borderRadius: '50px',
                  background: filter === "corporate" ? '#d4af37' : 'transparent',
                  color: filter === "corporate" ? '#0a1c3a' : '#d4af37',
                  border: `1px solid ${filter === "corporate" ? '#d4af37' : '#d4af37'}`,
                  transition: 'all 0.3s ease'
                }}
              >
                <i className="bi bi-building me-1"></i> Corporate
              </button>
            </div>

            {/* Gallery Grid */}
            <div className="row g-4">
              {filteredImages.map((image, index) => (
                <div className="col-md-6 col-lg-4" key={image.id}>
                  <div 
                    className="card border-0 shadow-sm overflow-hidden cursor-pointer"
                    style={{ 
                      borderRadius: '20px', 
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      background: '#fff'
                    }}
                    onClick={() => openLightbox(image)}
                  >
                    <div style={{ position: 'relative', overflow: 'hidden' }}>
                      <img 
                        src={image.src} 
                        alt={image.title}
                        style={{ 
                          width: '100%', 
                          height: '280px', 
                          objectFit: 'cover',
                          transition: 'transform 0.5s ease'
                        }}
                        className="gallery-img"
                      />
                      <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: 'linear-gradient(to top, rgba(10,28,58,0.9), transparent)',
                        padding: '20px',
                        color: 'white',
                        opacity: 0,
                        transition: 'opacity 0.3s ease'
                      }}
                      className="image-overlay">
                        <h5 className="mb-1 fw-semibold">{image.title}</h5>
                        <small className="text-white-50 d-flex align-items-center gap-1">
                          <i className="bi bi-tag-fill" style={{ fontSize: '10px' }}></i>
                          {image.category === "protocol" ? "Protocol Management" : 
                           image.category === "reception" ? "Guest Reception" :
                           image.category === "vip" ? "VIP Hosting" :
                           image.category === "wedding" ? "Wedding Support" : "Corporate Events"}
                        </small>
                      </div>
                      <div style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        background: 'rgba(212, 175, 55, 0.9)',
                        borderRadius: '50%',
                        width: '35px',
                        height: '35px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0,
                        transition: 'opacity 0.3s ease'
                      }}
                      className="zoom-icon">
                        <i className="bi bi-arrows-fullscreen" style={{ color: '#0a1c3a', fontSize: '16px' }}></i>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredImages.length === 0 && (
              <div className="text-center py-5">
                <i className="bi bi-images fs-1 text-muted"></i>
                <p className="text-muted mt-3">No images found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Stats Section - ServiceNow */}
        <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container py-4">
            <div className="row g-4 text-center">
              <div className="col-md-3">
                <div className="counter-box p-3">
                  <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '70px', height: '70px', background: 'rgba(212, 175, 55, 0.1)' }}>
                    <i className="bi bi-calendar-check-fill fs-1" style={{ color: '#d4af37' }}></i>
                  </div>
                  <h3 className="display-4 fw-bold mb-0" style={{ color: '#d4af37' }}>50+</h3>
                  <p className="text-muted mb-0">Events Managed</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="counter-box p-3">
                  <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '70px', height: '70px', background: 'rgba(212, 175, 55, 0.1)' }}>
                    <i className="bi bi-people-fill fs-1" style={{ color: '#d4af37' }}></i>
                  </div>
                  <h3 className="display-4 fw-bold mb-0" style={{ color: '#d4af37' }}>1000+</h3>
                  <p className="text-muted mb-0">Happy Guests</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="counter-box p-3">
                  <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '70px', height: '70px', background: 'rgba(212, 175, 55, 0.1)' }}>
                    <i className="bi bi-star-fill fs-1" style={{ color: '#d4af37' }}></i>
                  </div>
                  <h3 className="display-4 fw-bold mb-0" style={{ color: '#d4af37' }}>100%</h3>
                  <p className="text-muted mb-0">Client Satisfaction</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="counter-box p-3">
                  <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '70px', height: '70px', background: 'rgba(212, 175, 55, 0.1)' }}>
                    <i className="bi bi-award-fill fs-1" style={{ color: '#d4af37' }}></i>
                  </div>
                  <h3 className="display-4 fw-bold mb-0" style={{ color: '#d4af37' }}>Excellence</h3>
                  <p className="text-muted mb-0">Service Quality</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial / Quote Section */}
        <section className="py-5">
          <div className="container py-4">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <div className="position-relative rounded-4 overflow-hidden shadow-lg">
                  <img 
                    src={g3} 
                    alt="ServiceNow Event Excellence" 
                    className="img-fluid w-100"
                    style={{ height: '400px', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(10,28,58,0.7) 0%, rgba(10,28,58,0.3) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <div className="text-center text-white p-4">
                      <i className="bi bi-quote fs-1 d-block mb-3" style={{ color: '#d4af37' }}></i>
                      <h3 className="fw-bold mb-2">The Art of Welcome</h3>
                      <p className="mb-0">Where Service Meets Excellence</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <span className="badge d-inline-flex align-items-center gap-2 px-3 py-2 mb-3 rounded-pill" style={{
                  background: 'rgba(212, 175, 55, 0.1)',
                  color: '#d4af37',
                  fontSize: '0.8rem',
                  fontWeight: '600'
                }}>
                  <i className="bi bi-chat-quote-fill me-1"></i> TESTIMONIAL
                </span>
                <h2 className="display-5 fw-bold mb-4" style={{ color: '#0a1c3a' }}>
                  What Our <span style={{ color: '#d4af37' }}>Clients Say</span>
                </h2>
                <div className="card border-0 p-4" style={{ borderRadius: '24px', background: 'linear-gradient(135deg, #f8f9fa 0%, #fff 100%)' }}>
                  <i className="bi bi-quote fs-1 mb-3" style={{ color: '#d4af37', opacity: 0.5 }}></i>
                  <p className="lead mb-4" style={{ color: '#4b5563', lineHeight: '1.7' }}>
                    "ServiceNow exceeded our expectations for our corporate gala. Their protocol management and guest reception were flawless. Every guest felt welcomed and valued. Truly where service meets excellence!"
                  </p>
                  <div className="d-flex align-items-center gap-3">
                    <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', background: '#d4af37' }}>
                      <i className="bi bi-person fs-4" style={{ color: '#0a1c3a' }}></i>
                    </div>
                    <div>
                      <h5 className="fw-bold mb-0" style={{ color: '#0a1c3a' }}>Corporate Client</h5>
                      <p className="text-muted mb-0">Kigali, Rwanda</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Book Section */}
        <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container py-4">
            <div className="text-center mb-5">
              <span className="badge d-inline-flex align-items-center gap-2 px-3 py-2 mb-3 rounded-pill" style={{
                background: 'rgba(212, 175, 55, 0.1)',
                color: '#d4af37',
                fontSize: '0.8rem',
                fontWeight: '600'
              }}>
                <i className="bi bi-calendar-heart me-1"></i> GET STARTED
              </span>
              <h2 className="display-5 fw-bold mb-3" style={{ color: '#0a1c3a' }}>
                Ready to Create Your <span style={{ color: '#d4af37' }}>Event Story</span>?
              </h2>
              <p className="lead" style={{ color: '#6c757d', maxWidth: '600px', margin: '0 auto' }}>
                Let us help you create unforgettable moments through professional protocol and hospitality
              </p>
            </div>

            <div className="row g-4">
              <div className="col-md-4">
                <div className="text-center p-4">
                  <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '80px', height: '80px', background: 'rgba(212, 175, 55, 0.1)' }}>
                    <i className="bi bi-telephone-fill fs-1" style={{ color: '#d4af37' }}></i>
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: '#0a1c3a' }}>Call Us</h4>
                  <p className="text-muted">+250 788 804 113</p>
                  <p className="text-muted small">Available for consultation</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center p-4">
                  <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '80px', height: '80px', background: 'rgba(212, 175, 55, 0.1)' }}>
                    <i className="bi bi-envelope-fill fs-1" style={{ color: '#d4af37' }}></i>
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: '#0a1c3a' }}>Email Us</h4>
                  <p className="text-muted">servicenowprot@gmail.com</p>
                  <p className="text-muted small">Response within 24h</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center p-4">
                  <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '80px', height: '80px', background: 'rgba(212, 175, 55, 0.1)' }}>
                    <i className="bi bi-geo-alt-fill fs-1" style={{ color: '#d4af37' }}></i>
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: '#0a1c3a' }}>Visit Us</h4>
                  <p className="text-muted">Kigali Heights, KG 7 Ave</p>
                  <p className="text-muted small">Kigali, Rwanda</p>
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
              Ready to Create an <span style={{ color: '#d4af37' }}>Unforgettable</span> Event?
            </h2>
            <p className="lead text-white opacity-90 mb-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Let us welcome your guests with professionalism, elegance, and excellence.
            </p>
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              <Link to="/contact" className="btn btn-lg px-5 py-3 fw-semibold" style={{ 
                borderRadius: '50px',
                background: '#d4af37',
                color: '#0a1c3a',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}>
                Book Your Event →
              </Link>
              <Link to="/services" className="btn btn-outline-light btn-lg px-5 py-3 fw-semibold" style={{ 
                borderRadius: '50px',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}>
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.95)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
          onClick={closeLightbox}
        >
          <div style={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh' }}>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title}
              style={{ 
                maxWidth: '100%', 
                maxHeight: '90vh',
                objectFit: 'contain',
                borderRadius: '12px'
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: '-60px',
              left: 0,
              right: 0,
              textAlign: 'center',
              color: 'white'
            }}>
              <h4 className="mb-1">{selectedImage.title}</h4>
              <p className="text-white-50 small">
                <i className="bi bi-tag-fill me-1" style={{ color: '#d4af37' }}></i>
                {selectedImage.category === "protocol" ? "Protocol Management" : 
                 selectedImage.category === "reception" ? "Guest Reception" :
                 selectedImage.category === "vip" ? "VIP Hosting" :
                 selectedImage.category === "wedding" ? "Wedding Support" : "Corporate Events"}
              </p>
            </div>
            <button
              onClick={closeLightbox}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(212, 175, 55, 0.2)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                fontSize: '20px',
                cursor: 'pointer',
                color: '#d4af37',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#d4af37';
                e.currentTarget.style.color = '#0a1c3a';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(212, 175, 55, 0.2)';
                e.currentTarget.style.color = '#d4af37';
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <style>
        {`
          .gallery-img {
            transition: transform 0.5s ease;
          }
          
          .card:hover .gallery-img {
            transform: scale(1.05);
          }
          
          .card:hover .image-overlay {
            opacity: 1 !important;
          }
          
          .card:hover .zoom-icon {
            opacity: 1 !important;
          }
          
          .cursor-pointer {
            cursor: pointer;
          }
          
          .hover-link:hover {
            color: #d4af37 !important;
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

export default Gallery;
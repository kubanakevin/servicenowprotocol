import { Link } from "react-router-dom";
import IconImg from "../assets/icon.png";
import { useState, useEffect } from "react";
import { Heart, Star, Award, Shield, Sparkles, Phone, Mail, MapPin, ChevronRight, ArrowUp } from "lucide-react";

function Footer() {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-dark text-white pt-5 pb-3" style={{ 
            background: 'linear-gradient(135deg, #0a1c3a 0%, #122b4f 50%, #1a365a 100%)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Animated Background Pattern - Gold */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0.03,
                backgroundImage: `radial-gradient(circle at 2px 2px, #d4af37 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
                pointerEvents: 'none'
            }}></div>

            {/* Animated Floating Gold Circles */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '-50px',
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 70%)',
                pointerEvents: 'none'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '10%',
                right: '-80px',
                width: '250px',
                height: '250px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(212,175,55,0.04) 0%, transparent 70%)',
                pointerEvents: 'none'
            }} />

            <div className="container position-relative">
                {/* Mission & Vision Banner - ServiceNow */}
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-10">
                        <div className="bg-gradient p-4 p-lg-5 rounded-4 shadow-lg" style={{
                            background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.12) 0%, rgba(212, 175, 55, 0.05) 100%)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(212, 175, 55, 0.3)'
                        }}>
                            <div className="text-center">
                                <div className="slogan-container mb-3">
                                    <span className="slogan-text" style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        background: 'rgba(212, 175, 55, 0.15)',
                                        padding: '8px 24px',
                                        borderRadius: '50px',
                                        color: '#d4af37',
                                        fontWeight: '600',
                                        fontSize: '0.9rem',
                                        letterSpacing: '1px'
                                    }}>
                                        <Star size={14} /> Where Service Meets Excellence <Award size={14} />
                                    </span>
                                </div>
                                <h4 className="fw-bold mb-3" style={{ color: '#d4af37' }}>
                                    Professional Protocol | Event Management | Hospitality Excellence
                                </h4>
                                <p className="text-white-50 mb-0" style={{ maxWidth: '700px', margin: '0 auto' }}>
                                    From VIP reception to event flow coordination, we provide reliable support tailored to meet the unique needs of every client.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row gy-5">
                    {/* BRAND SECTION - ServiceNow */}
                    <div className="col-lg-4">
                        <div className="d-flex align-items-center mb-4">
                            <div style={{
                                background: 'linear-gradient(135deg, #d4af37 0%, #b8942e 100%)',
                                borderRadius: '50%',
                                padding: '5px',
                                boxShadow: '0 5px 20px rgba(212, 175, 55, 0.3)'
                            }}>
                                <img
                                    src={IconImg}
                                    alt="ServiceNow Logo"
                                    style={{
                                        width: "80px",
                                        height: "80px",
                                        borderRadius: "50%",
                                        objectFit: "cover",
                                        border: '2px solid #fff'
                                    }}
                                />
                            </div>
                            <div className="ms-3">
                                <h3 className="fw-bold mb-0" style={{ 
                                    color: '#fff',
                                    letterSpacing: "1px"
                                }}>
                                    SERVICE<span style={{ color: '#d4af37' }}>NOW</span>
                                </h3>
                                <p style={{ color: '#d4af37', fontSize: '0.7rem', letterSpacing: '2px', marginTop: '4px' }}>
                                    The Art of Welcome
                                </p>
                            </div>
                        </div>

                        <p className="text-white-50 mb-4" style={{ lineHeight: "1.8", fontSize: '0.95rem' }}>
                            ServiceNow is a professional protocol and event support company committed to delivering exceptional ceremony coordination and hospitality services for weddings, conferences, corporate functions, official ceremonies, and special occasions.
                        </p>

                        {/* SOCIAL LINKS */}
                        <div className="d-flex gap-3 mt-3">
                            <a 
                                href="https://www.instagram.com/service__now__" 
                                target="_blank" 
                                rel="noreferrer" 
                                className="social-icon"
                                style={{
                                    width: '38px',
                                    height: '38px',
                                    borderRadius: '50%',
                                    background: 'rgba(172, 10, 118, 0.08)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <i className="bi bi-instagram fs-5" style={{ color: '#d4af37' }}></i>
                            </a>
                            <a 
                                href="https://tiktok.com" 
                                target="_blank" 
                                rel="noreferrer" 
                                className="social-icon"
                                style={{
                                    width: '38px',
                                    height: '38px',
                                    borderRadius: '50%',
                                    background: 'rgba(255,255,255,0.08)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <i className="bi bi-tiktok fs-5" style={{ color: '#d4af37' }}></i>
                            </a>
                            <a 
                                href="https://facebook.com" 
                                target="_blank" 
                                rel="noreferrer" 
                                className="social-icon"
                                style={{
                                    width: '38px',
                                    height: '38px',
                                    borderRadius: '50%',
                                    background: 'rgba(255,255,255,0.08)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <i className="bi bi-facebook fs-5" style={{ color: '#d4af37' }}></i>
                            </a>
                             
                            <a 
                                href="https://twitter.com" 
                                target="_blank" 
                                rel="noreferrer" 
                                className="social-icon"
                                style={{
                                    width: '38px',
                                    height: '38px',
                                    borderRadius: '50%',
                                    background: 'rgba(255,255,255,0.08)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <i className="bi bi-twitter-x fs-5" style={{ color: '#d4af37' }}></i>
                            </a>
                        </div>
                    </div>

                    {/* QUICK LINKS */}
                    <div className="col-lg-3">
                        <h5 className="fw-bold mb-4 text-white position-relative" style={{
                            display: 'inline-block',
                            paddingBottom: '10px'
                        }}>
                            Quick Links
                            <span style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '40px',
                                height: '3px',
                                background: '#d4af37',
                                borderRadius: '2px'
                            }}></span>
                        </h5>
                        <ul className="list-unstyled">
                            <li className="mb-3">
                                <Link to="/" className="footer-link text-white-50 text-decoration-none d-inline-flex align-items-center gap-2">
                                    <ChevronRight size={12} /> Home
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/about" className="footer-link text-white-50 text-decoration-none d-inline-flex align-items-center gap-2">
                                    <ChevronRight size={12} /> About Us
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/services" className="footer-link text-white-50 text-decoration-none d-inline-flex align-items-center gap-2">
                                    <ChevronRight size={12} /> Our Services
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/team" className="footer-link text-white-50 text-decoration-none d-inline-flex align-items-center gap-2">
                                    <ChevronRight size={12} /> Our Team
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/gallery" className="footer-link text-white-50 text-decoration-none d-inline-flex align-items-center gap-2">
                                    <ChevronRight size={12} /> Event Gallery
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/contact" className="footer-link text-white-50 text-decoration-none d-inline-flex align-items-center gap-2">
                                    <ChevronRight size={12} /> Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* CORE VALUES */}
                    <div className="col-lg-2">
                        <h5 className="fw-bold mb-4 text-white position-relative" style={{
                            display: 'inline-block',
                            paddingBottom: '10px'
                        }}>
                            Core Values
                            <span style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '40px',
                                height: '3px',
                                background: '#d4af37',
                                borderRadius: '2px'
                            }}></span>
                        </h5>
                        <ul className="list-unstyled">
                            <li className="mb-3 d-flex align-items-center gap-2 text-white-50">
                                <Shield size={14} color="#d4af37" /> Professionalism
                            </li>
                            <li className="mb-3 d-flex align-items-center gap-2 text-white-50">
                                <Award size={14} color="#d4af37" /> Excellence
                            </li>
                            <li className="mb-3 d-flex align-items-center gap-2 text-white-50">
                                <Heart size={14} color="#d4af37" /> Respect
                            </li>
                            <li className="mb-3 d-flex align-items-center gap-2 text-white-50">
                                <Star size={14} color="#d4af37" /> Hospitality
                            </li>
                            <li className="mb-3 d-flex align-items-center gap-2 text-white-50">
                                <Sparkles size={14} color="#d4af37" /> Reliability
                            </li>
                        </ul>
                    </div>

                    {/* CONTACT INFO - Updated with ServiceNow Data */}
                    <div className="col-lg-3">
                        <h5 className="fw-bold mb-4 text-white position-relative" style={{
                            display: 'inline-block',
                            paddingBottom: '10px'
                        }}>
                            Contact Info
                            <span style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '40px',
                                height: '3px',
                                background: '#d4af37',
                                borderRadius: '2px'
                            }}></span>
                        </h5>

                        <ul className="list-unstyled text-white-50">
                            <li className="mb-3 d-flex align-items-start gap-3">
                                <Phone size={18} color="#d4af37" className="mt-1 flex-shrink-0" />
                                <div>
                                    <div className="fw-semibold text-white mb-1">Phone Number</div>
                                    <span>+250 788 804 113</span>
                                </div>
                            </li>

                            <li className="mb-3 d-flex align-items-start gap-3">
                                <Mail size={18} color="#d4af37" className="mt-1 flex-shrink-0" />
                                <div>
                                    <div className="fw-semibold text-white mb-1">Email Address</div>
                                    <span>servicenowprot@gmail.com</span>
                                </div>
                            </li>

                            <li className="mb-3 d-flex align-items-start gap-3">
                                <MapPin size={18} color="#d4af37" className="mt-1 flex-shrink-0" />
                                <div>
                                    <div className="fw-semibold text-white mb-1">Our Location</div>
                                    <span>Kigali Heights, KG 7 Ave, Kigali, Rwanda</span>
                                </div>
                            </li>

                            <li className="mb-3 d-flex align-items-start gap-3">
                                <Award size={18} color="#d4af37" className="mt-1 flex-shrink-0" />
                                <div>
                                    <div className="fw-semibold text-white mb-1">Executive Director</div>
                                    <span>KUBANA Kevin</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* SERVICE EXCELLENCE BANNER */}
                <div className="row mt-4 pt-3">
                    <div className="col-12">
                        <div className="text-center py-3 px-4 rounded-3" style={{
                            background: 'rgba(212, 175, 55, 0.08)',
                            border: '1px solid rgba(212, 175, 55, 0.2)'
                        }}>
                            <p className="text-white-50 small mb-0 d-flex align-items-center justify-content-center gap-3 flex-wrap">
                                <span className="d-inline-flex align-items-center gap-2"><Shield size={12} color="#d4af37" /> Protocol Management</span>
                                <span className="d-inline-flex align-items-center gap-2"><Heart size={12} color="#d4af37" /> Guest Reception & Ushering</span>
                                <span className="d-inline-flex align-items-center gap-2"><Star size={12} color="#d4af37" /> VIP Hosting</span>
                                <span className="d-inline-flex align-items-center gap-2"><Sparkles size={12} color="#d4af37" /> Event Coordination</span>
                            </p>
                        </div>
                    </div>
                </div>

                <hr className="my-4" style={{ borderColor: 'rgba(212, 175, 55, 0.15)' }} />

                {/* BOTTOM SECTION */}
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="text-center text-md-start small text-white-50">
                            <p className="mb-0">
                                &copy; {currentYear} ServiceNow. All rights reserved. | 
                                <Link to="/privacy" className="text-white-50 text-decoration-none ms-1 hover-link">Privacy Policy</Link> | 
                                <Link to="/terms" className="text-white-50 text-decoration-none ms-1 hover-link">Terms of Service</Link>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="text-center text-md-end">
                            <p className="mb-0 small text-white-50 d-flex align-items-center justify-content-md-end gap-1">
                                <Heart size={12} color="#d4af37" fill="#d4af37" /> Built with excellence — 
                                <span className="fw-semibold ms-1" style={{ color: '#d4af37' }}>ServiceNow</span>
                            </p>
                            <p className="mb-0 small text-white-50 mt-2">
                                <i className="bi bi-code-slash me-1" style={{ color: '#d4af37' }}></i> Developed by 
                                <span className="fw-semibold ms-1" style={{ color: '#d4af37' }}>KUBANA Kevin</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Scroll to Top Button - Gold */}
                <button
                    onClick={scrollToTop}
                    className="btn rounded-circle position-fixed"
                    style={{
                        bottom: '30px',
                        right: '30px',
                        width: '45px',
                        height: '45px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 5px 20px rgba(212, 175, 55, 0.4)',
                        zIndex: 1000,
                        opacity: 0.9,
                        transition: 'all 0.3s ease',
                        border: 'none',
                        background: '#d4af37',
                        color: '#0a1c3a'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.opacity = '1';
                        e.currentTarget.style.transform = 'translateY(-3px)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.opacity = '0.9';
                        e.currentTarget.style.transform = 'translateY(0)';
                    }}
                >
                    <ArrowUp size={20} />
                </button>
            </div>

            {/* CUSTOM STYLES */}
            <style>
                {`
                    .footer-link {
                        transition: all 0.3s ease;
                    }
                    
                    .footer-link:hover {
                        color: #d4af37 !important;
                        transform: translateX(5px);
                    }
                    
                    .social-icon {
                        transition: all 0.3s ease;
                    }
                    
                    .social-icon:hover {
                        background: #d4af37 !important;
                        transform: translateY(-5px);
                    }
                    
                    .social-icon:hover i {
                        color: #0a1c3a !important;
                    }
                    
                    .hover-link {
                        transition: color 0.3s ease;
                    }
                    
                    .hover-link:hover {
                        color: #d4af37 !important;
                    }
                    
                    .bg-gradient {
                        background: linear-gradient(135deg, rgba(212, 175, 55, 0.12) 0%, rgba(212, 175, 55, 0.05) 100%);
                    }
                    
                    @keyframes fadeInUp {
                        from {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                    
                    .footer-content {
                        animation: fadeInUp 0.6s ease;
                    }
                    
                    .slogan-text {
                        transition: all 0.3s ease;
                    }
                    
                    .slogan-text:hover {
                        background: rgba(212, 175, 55, 0.25) !important;
                        transform: scale(1.02);
                    }
                `}
            </style>
        </footer>
    );
}

export default Footer;
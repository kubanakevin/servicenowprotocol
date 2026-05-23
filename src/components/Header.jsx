import { Link, NavLink } from "react-router-dom";
import IconImg from "../assets/icon.png";
import { Phone, Mail, MapPin, Calendar, Shield, Users, Sparkles, Heart, HandHeart, Camera, Star, Award, Clock } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [isTopHeaderVisible, setIsTopHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide top header when scrolling down, show when scrolling up or at top
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down & past 50px - hide top header
        setIsTopHeaderVisible(false);
      } else {
        // Scrolling up or at top - show top header
        setIsTopHeaderVisible(true);
      }
      
      // Add scrolled class to navbar when scrolled past 100px
      if (currentScrollY > 100) {
        setIsNavbarScrolled(true);
      } else {
        setIsNavbarScrolled(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      {/* Top Contact Bar - ServiceNow Professional Style */}
      <div 
        className={`top-header d-none d-lg-block ${!isTopHeaderVisible ? 'top-header-hidden' : ''}`}
        style={{
          transition: 'transform 0.3s ease-in-out',
          transform: isTopHeaderVisible ? 'translateY(0)' : 'translateY(-100%)'
        }}
      >
        <div className="container-fluid px-4 px-xl-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="contact-info d-flex flex-wrap gap-4">
                <a href="tel:+250788804113" className="contact-link">
                  <Phone size={14} />
                  <span>+250 788 804 113</span>
                </a>
                <a href="mailto:servicenowprot@gmail.com" className="contact-link">
                  <Mail size={14} />
                  <span>servicenowprot@gmail.com</span>
                </a>
                <span className="contact-location">
                  <MapPin size={14} />
                  <span>Kigali Heights, KG 7 Ave, Kigali, Rwanda</span>
                </span>
              </div>
            </div>
            <div className="col-md-6 text-end">
              <div className="slogan-tagline">
                <span className="slogan-badge">
                  <Star size={12} /> Where Service Meets Excellence
                </span>
                <span className="slogan-badge">
                  <Award size={12} /> Protocol & Event Specialists
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation with dynamic positioning */}
      <nav 
        className={`navbar navbar-expand-lg fixed-top px-4 py-2 ${isNavbarScrolled ? 'scrolled' : ''}`} 
        style={{ 
          background: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.03), 0 1px 2px rgba(0, 0, 0, 0.05)',
          borderBottom: '1px solid rgba(212, 175, 55, 0.15)',
          top: isTopHeaderVisible ? '42px' : '0',
          transition: 'top 0.3s ease-in-out'
        }}
      >
        <div className="container-fluid px-0 px-lg-3">
          
          <Link 
            className="navbar-brand d-flex align-items-center fw-bold position-relative" 
            to="/"
            style={{ gap: "12px" }}
          >
            {/* LOGO IMAGE */}
            <div className="logo-wrapper">
              <img 
                src={IconImg} 
                alt="ServiceNow Logo"
                className="logo-img"
              />
              <div className="logo-glow"></div>
            </div>

            {/* LOGO TEXT - ServiceNow The Art of Welcome */}
            <div className="logo-text-wrapper">
              <span className="logo-text">
                SERVICE<span className="logo-highlight">NOW</span>
              </span>
              <span className="logo-tagline">The Art of Welcome</span>
            </div>
          </Link>

          {/* TOGGLER (Mobile) */}
          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            style={{ padding: '0.5rem', borderRadius: '12px' }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* NAV LINKS */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
              
              <li className="nav-item">
                <NavLink 
                  className={({ isActive }) => 
                    `nav-link px-3 py-2 fw-semibold transition-all ${isActive ? 'active-nav' : ''}`
                  } 
                  to="/"
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink 
                  className={({ isActive }) => 
                    `nav-link px-3 py-2 fw-semibold transition-all ${isActive ? 'active-nav' : ''}`
                  } 
                  to="/about"
                >
                  About Us
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink 
                  className={({ isActive }) => 
                    `nav-link px-3 py-2 fw-semibold transition-all ${isActive ? 'active-nav' : ''}`
                  } 
                  to="/services"
                >
                  Our Services
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <NavLink 
                  className={({ isActive }) => 
                    `nav-link px-3 py-2 fw-semibold transition-all dropdown-toggle ${isActive ? 'active-nav' : ''}`
                  } 
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Events
                </NavLink>
                <ul className="dropdown-menu border-0 shadow-lg rounded-3 mt-2">
                  <li><Link className="dropdown-item" to="/">Weddings</Link></li>
                  <li><Link className="dropdown-item" to="/">Conferences</Link></li>
                  <li><Link className="dropdown-item" to="/">Corporate Events</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="/gallery">Event Gallery</Link></li>
                </ul>
              </li>

              

              <li className="nav-item">
                <NavLink 
                  className={({ isActive }) => 
                    `nav-link px-3 py-2 fw-semibold transition-all ${isActive ? 'active-nav' : ''}`
                  } 
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  className={({ isActive }) => 
                    `nav-link px-3 py-2 fw-semibold transition-all ${isActive ? 'active-nav' : ''}`
                  } 
                  to="/gallery"
                >
                  Gallery
                </NavLink>
              </li>

              {/* CTA BUTTON with shine effect */}
              <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
                <Link 
                  to="/book-us" 
                  className="btn-cta"
                >
                  <Calendar size={18} />
                  <span>Book Your Event</span>
                  <Sparkles size={14} className="sparkle-icon" />
                </Link>
              </li>

            </ul>
          </div>

          {/* Mobile Slogan - Only visible when top header is hidden on mobile */}
          {!isTopHeaderVisible && (
            <div className="d-lg-none mobile-slogan mt-2 pt-1 text-center">
              <span className="mobile-slogan-text">
                <Star size={10} /> The Art of Welcome
              </span>
            </div>
          )}
        </div>

        {/* Global styles - ServiceNow Premium Design with Gold & Dark Blue */}
        <style>{`
          /* Top Header Styles - Dark Blue & Gold Premium */
          .top-header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1030;
            background: linear-gradient(135deg, #0a1c3a 0%, #0f2b4f 100%);
            padding: 6px 0;
            border-bottom: 1px solid rgba(212, 175, 55, 0.3);
            backdrop-filter: blur(5px);
          }

          .contact-info {
            display: flex;
            flex-wrap: wrap;
            gap: 1.5rem;
          }

          .contact-link {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: rgba(255, 255, 255, 0.85);
            text-decoration: none;
            font-size: 0.75rem;
            font-weight: 500;
            transition: all 0.3s ease;
            padding: 4px 0;
          }

          .contact-link:hover {
            color: #d4af37;
            transform: translateY(-1px);
          }

          .contact-location {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: rgba(255, 255, 255, 0.85);
            font-size: 0.75rem;
            font-weight: 500;
          }

          .slogan-tagline {
            display: flex;
            gap: 0.75rem;
            justify-content: flex-end;
          }

          .slogan-badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: rgba(212, 175, 55, 0.15);
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.7rem;
            font-weight: 600;
            color: #d4af37;
            letter-spacing: 0.3px;
            backdrop-filter: blur(4px);
            transition: all 0.3s ease;
          }

          .slogan-badge:hover {
            background: rgba(212, 175, 55, 0.3);
            transform: scale(1.05);
            color: #f5e6a3;
          }

          /* Mobile Slogan */
          .mobile-slogan {
            border-top: 1px solid rgba(212, 175, 55, 0.15);
            margin-top: 8px !important;
            padding-top: 8px !important;
          }

          .mobile-slogan-text {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: rgba(212, 175, 55, 0.1);
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.65rem;
            font-weight: 600;
            color: #d4af37;
            letter-spacing: 0.3px;
          }

          /* Logo Styles */
          .logo-wrapper {
            position: relative;
          }

          .logo-img {
            width: 55px;
            height: 55px;
            object-fit: cover;
            border-radius: 12px;
            position: relative;
            z-index: 2;
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            border: 1px solid rgba(212, 175, 55, 0.3);
          }

          .logo-glow {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 58px;
            height: 58px;
            background: radial-gradient(circle, rgba(212,175,55,0.25) 0%, transparent 70%);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
          }

          .navbar-brand:hover .logo-glow {
            opacity: 1;
          }

          .logo-text-wrapper {
            display: flex;
            flex-direction: column;
            line-height: 1.2;
          }

          .logo-text {
            font-size: 1.35rem;
            font-weight: 800;
            letter-spacing: -0.5px;
            color: #0a1c3a;
          }

          .logo-highlight {
            color: #d4af37;
          }

          .logo-tagline {
            font-size: 0.6rem;
            font-weight: 600;
            letter-spacing: 0.8px;
            color: #d4af37;
            text-transform: uppercase;
            margin-top: 2px;
          }

          /* Navigation Links */
          .nav-link {
            position: relative;
            transition: all 0.2s ease;
            color: #1e293b !important;
            font-size: 0.9rem;
            font-weight: 600;
            border-radius: 12px;
            padding: 0.5rem 1rem !important;
          }
          
          .nav-link:hover {
            color: #d4af37 !important;
            background-color: rgba(212, 175, 55, 0.1);
            transform: translateY(-1px);
          }
          
          .active-nav {
            color: #d4af37 !important;
            background: linear-gradient(135deg, rgba(212,175,55,0.08), rgba(212,175,55,0.04));
            position: relative;
          }
          
          .active-nav::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 50%;
            transform: translateX(-50%);
            width: 30px;
            height: 2.5px;
            background: linear-gradient(90deg, #d4af37, #f5e6a3);
            border-radius: 3px;
          }

          /* CTA Button - Gold Premium Style */
          .btn-cta {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: linear-gradient(135deg, #d4af37 0%, #b8942e 100%);
            padding: 0.5rem 1.25rem;
            border-radius: 40px;
            color: #0a1c3a;
            font-weight: 700;
            font-size: 0.85rem;
            text-decoration: none;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
            position: relative;
            overflow: hidden;
          }

          .btn-cta::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            transition: left 0.5s ease;
          }

          .btn-cta:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(212, 175, 55, 0.4);
            color: #0a1c3a;
            background: linear-gradient(135deg, #e6c85c 0%, #c9a23a 100%);
          }

          .btn-cta:hover::before {
            left: 100%;
          }

          .sparkle-icon {
            transition: all 0.3s ease;
          }

          .btn-cta:hover .sparkle-icon {
            transform: rotate(15deg) scale(1.1);
          }

          /* Dropdown styles */
          .dropdown-menu {
            border: none;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            border-radius: 16px;
            padding: 0.5rem 0;
            margin-top: 0.5rem;
            border-top: 2px solid #d4af37;
          }

          .dropdown-item {
            padding: 0.6rem 1.5rem;
            font-size: 0.85rem;
            font-weight: 500;
            color: #1e293b;
            transition: all 0.2s ease;
          }

          .dropdown-item:hover {
            background-color: rgba(212, 175, 55, 0.1);
            color: #d4af37;
            padding-left: 1.8rem;
          }

          /* Scrolled navbar styles */
          .navbar.scrolled {
            background: rgba(255, 255, 255, 0.98);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          }

          .navbar.scrolled .logo-img {
            width: 45px;
            height: 45px;
          }

          .navbar.scrolled .logo-text {
            font-size: 1.2rem;
          }

          .navbar.scrolled .logo-tagline {
            font-size: 0.55rem;
          }

          /* Mobile Responsive */
          @media (max-width: 992px) {
            .navbar {
              top: 0 !important;
            }
            
            .top-header {
              display: none !important;
            }
            
            .navbar-nav {
              padding: 1rem 0;
            }
            
            .nav-item {
              margin: 0.25rem 0;
            }
            
            .active-nav::after {
              display: none;
            }
            
            .logo-text {
              font-size: 1.1rem;
            }
            
            .logo-tagline {
              font-size: 0.5rem;
            }
            
            .logo-img {
              width: 40px;
              height: 40px;
            }
            
            .dropdown-menu {
              border: none;
              background: transparent;
              box-shadow: none;
              padding-left: 1rem;
            }
            
            .dropdown-item:hover {
              background-color: rgba(212, 175, 55, 0.1);
            }
          }

          /* Animation for shine effect */
          @keyframes shine {
            0% {
              left: -75%;
            }
            20%, 100% {
              left: 125%;
            }
          }

          .navbar-toggler:focus {
            box-shadow: none;
          }
          
          /* Additional professional touches */
          .navbar {
            transition: all 0.3s ease;
          }
        `}</style>
      </nav>
    </>
  );
}
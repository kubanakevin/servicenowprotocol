import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Calendar, Users, Award, Star, Heart, Shield, Sparkles, Clock, ChevronRight, Quote, ArrowDown } from "lucide-react";

// Import all images from assets
import aboutImg from "../assets/about1.jpeg";
import hero1Img from "../assets/hero1.jpeg";
import hero2Img from "../assets/hero2.jpeg";
import presidentImg from "../assets/presidente.png";
import testimonial1 from "../assets/avator1.jpg";
import testimonial2 from "../assets/avator1.jpg";
import testimonial3 from "../assets/avator1.jpg";

// New service/gallery images
import service1Img from "../assets/gallery33.jpeg";
import service2Img from "../assets/gallery44.jpeg";
import service3Img from "../assets/all.jpeg";
import g1 from "../assets/boys.jpeg";
import securityImg from "../assets/gallery55.jpeg";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState({});

  const slides = [
    {
      image: hero1Img,
      title: "Where Service Meets Excellence",
      subtitle: "Protocol & Event Management",
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
    },
    {
      image: service3Img,
      title: "Professional Protocol",
      subtitle: "Trusted Across Africa",
      description: "Our skilled teams bring elegance, discipline, and warmth to every occasion — ensuring your event leaves a lasting impression.",
      ctaText: "Our Services",
      ctaLink: "/services"
    }
  ];

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
    }, 7000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll("[data-animate]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const goToSlide = (index) => setCurrentSlide(index);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <>
      <Header />

      <main style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}>

        {/* ═══════════════════ HERO SECTION ═══════════════════ */}
        <section style={{
          position: 'relative',
          height: '100vh',
          minHeight: '700px',
          overflow: 'hidden'
        }}>
          {/* Slides */}
          {slides.map((slide, index) => (
            <div key={index} style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: index === currentSlide ? 1 : 0,
              transition: 'opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
              zIndex: index === currentSlide ? 1 : 0,
              transform: index === currentSlide ? `translateY(${scrollY * 0.25}px)` : 'none',
            }} />
          ))}

          {/* Multi-layer overlay for cinematic depth */}
          <div style={{
            position: 'absolute', inset: 0, zIndex: 2,
            background: 'linear-gradient(to bottom, rgba(5,12,28,0.55) 0%, rgba(5,12,28,0.3) 40%, rgba(5,12,28,0.75) 100%)'
          }} />
          <div style={{
            position: 'absolute', inset: 0, zIndex: 2,
            background: 'linear-gradient(to right, rgba(5,12,28,0.6) 0%, transparent 60%)'
          }} />

          {/* Gold accent line - left edge */}
          <div style={{
            position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', zIndex: 4,
            background: 'linear-gradient(to bottom, transparent 0%, #d4af37 30%, #d4af37 70%, transparent 100%)'
          }} />

          {/* Hero Content */}
          <div style={{
            position: 'absolute', inset: 0, zIndex: 3,
            display: 'flex', alignItems: 'center',
            paddingLeft: 'clamp(30px, 8vw, 140px)',
            paddingTop: '80px'
          }}>
            <div style={{ maxWidth: '720px' }}>
              {/* Overline */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px',
                opacity: 1, animation: 'heroFadeUp 0.8s ease 0.1s both'
              }}>
                <div style={{ width: '40px', height: '1px', background: '#d4af37' }} />
                <span style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '0.7rem', fontWeight: '700', letterSpacing: '3.5px',
                  color: '#d4af37', textTransform: 'uppercase'
                }}>
                  Premium Event Solutions
                </span>
              </div>

              {/* Main Title */}
              <h1 key={currentSlide} style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
                fontWeight: '700',
                color: '#ffffff',
                lineHeight: '1.1',
                marginBottom: '20px',
                letterSpacing: '-1px',
                animation: 'heroFadeUp 0.9s ease 0.2s both'
              }}>
                {slides[currentSlide].title}
              </h1>

              {/* Subtitle with gold underline */}
              <div style={{ marginBottom: '28px', animation: 'heroFadeUp 0.9s ease 0.3s both' }}>
                <h2 style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
                  fontWeight: '400',
                  fontStyle: 'italic',
                  color: '#e8c94a',
                  marginBottom: '0'
                }}>
                  {slides[currentSlide].subtitle}
                </h2>
              </div>

              <p style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
                color: 'rgba(255,255,255,0.85)',
                lineHeight: '1.8',
                maxWidth: '560px',
                marginBottom: '44px',
                animation: 'heroFadeUp 0.9s ease 0.4s both'
              }}>
                {slides[currentSlide].description}
              </p>

              {/* CTAs */}
              <div style={{
                display: 'flex', flexWrap: 'wrap', gap: '16px',
                animation: 'heroFadeUp 0.9s ease 0.5s both'
              }}>
                <Link to={slides[currentSlide].ctaLink} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  padding: '16px 40px',
                  background: '#d4af37',
                  color: '#050c1c',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: '700', fontSize: '0.8rem', letterSpacing: '2px',
                  textTransform: 'uppercase', textDecoration: 'none',
                  clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
                  transition: 'all 0.3s ease',
                }}>
                  {slides[currentSlide].ctaText} <ChevronRight size={16} />
                </Link>
                <Link to="/about" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  padding: '15px 36px',
                  background: 'transparent',
                  color: '#fff',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: '600', fontSize: '0.8rem', letterSpacing: '2px',
                  textTransform: 'uppercase', textDecoration: 'none',
                  border: '1px solid rgba(255,255,255,0.4)',
                  transition: 'all 0.3s ease',
                }}>
                  Discover More
                </Link>
              </div>
            </div>
          </div>

          {/* Slide Counter - top right */}
          <div style={{
            position: 'absolute', top: '120px', right: 'clamp(20px, 5vw, 60px)',
            zIndex: 5, textAlign: 'right'
          }}>
            <span style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '3.5rem', fontWeight: '700', color: 'rgba(212,175,55,0.25)',
              lineHeight: 1
            }}>
              {String(currentSlide + 1).padStart(2, '0')}
            </span>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '6px', marginTop: '8px' }}>
              {slides.map((_, i) => (
                <button key={i} onClick={() => goToSlide(i)} style={{
                  width: i === currentSlide ? '32px' : '8px', height: '3px', border: 'none',
                  background: i === currentSlide ? '#d4af37' : 'rgba(255,255,255,0.3)',
                  borderRadius: '2px', cursor: 'pointer',
                  transition: 'all 0.4s ease', padding: 0
                }} />
              ))}
            </div>
          </div>

          {/* Arrow Navigation */}
          <button onClick={prevSlide} style={{
            position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)',
            zIndex: 5, background: 'none', border: '1px solid rgba(212,175,55,0.4)',
            width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#d4af37', fontSize: '24px', cursor: 'pointer', transition: 'all 0.3s'
          }}>‹</button>
          <button onClick={nextSlide} style={{
            position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)',
            zIndex: 5, background: 'none', border: '1px solid rgba(212,175,55,0.4)',
            width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#d4af37', fontSize: '24px', cursor: 'pointer', transition: 'all 0.3s'
          }}>›</button>

          {/* Scroll indicator */}
          <div style={{
            position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)',
            zIndex: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'
          }}>
            <span style={{
              fontFamily: "'Montserrat', sans-serif", fontSize: '0.6rem',
              letterSpacing: '2px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase'
            }}>Scroll</span>
            <div style={{ animation: 'bounce 2s infinite' }}>
              <ArrowDown size={16} color="rgba(212,175,55,0.7)" />
            </div>
          </div>
        </section>

        {/* ═══════════════════ STATS BAND ═══════════════════ */}
        <section style={{
          background: '#050c1c',
          padding: '36px 0',
          borderTop: '1px solid rgba(212,175,55,0.2)',
          borderBottom: '1px solid rgba(212,175,55,0.2)'
        }}>
          <div className="container">
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0' }}>
              {[
                { num: "100+", label: "Events Completed" },
                { num: "50+", label: "Corporate Clients" },
                { num: "4.9", label: "Client Rating" },
                { num: "5+", label: "Years of Excellence" }
              ].map((stat, i) => (
                <div key={i} style={{
                  flex: '1 1 160px', textAlign: 'center', padding: '12px 30px',
                  borderRight: i < 3 ? '1px solid rgba(212,175,55,0.15)' : 'none'
                }}>
                  <div style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: '2.6rem', fontWeight: '700', color: '#d4af37', lineHeight: 1
                  }}>{stat.num}</div>
                  <div style={{
                    fontFamily: "'Montserrat', sans-serif", fontSize: '0.65rem',
                    letterSpacing: '2px', color: 'rgba(255,255,255,0.5)', marginTop: '6px', textTransform: 'uppercase'
                  }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ SERVICES SECTION ═══════════════════ */}
        <section style={{ background: '#faf9f7', padding: '110px 0' }}>
          <div className="container">
            {/* Section header */}
            <div style={{ maxWidth: '560px', marginBottom: '70px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
                <div style={{ width: '40px', height: '1px', background: '#d4af37' }} />
                <span style={{
                  fontFamily: "'Montserrat', sans-serif", fontSize: '0.65rem',
                  fontWeight: '700', letterSpacing: '3px', color: '#d4af37', textTransform: 'uppercase'
                }}>Excellence In Service</span>
              </div>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: '700',
                color: '#050c1c', lineHeight: '1.15', marginBottom: '20px'
              }}>
                Professional Event Support Services
              </h2>
              <p style={{
                fontFamily: "'Lato', sans-serif", fontSize: '1rem',
                color: '#7a7a7a', lineHeight: '1.8'
              }}>
                Comprehensive protocol and hospitality services tailored for every occasion.
              </p>
            </div>

            {/* Featured image grid - left column */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '24px' }}>
              
              {/* Big featured image */}
              <div style={{
                gridColumn: 'span 5', gridRow: 'span 2',
                position: 'relative', overflow: 'hidden', borderRadius: '4px'
              }}>
                <img src={service1Img} alt="Protocol Management" style={{
                  width: '100%', height: '100%', minHeight: '420px',
                  objectFit: 'cover', display: 'block',
                  transition: 'transform 0.6s ease'
                }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(5,12,28,0.8) 0%, transparent 50%)'
                }} />
                <div style={{ position: 'absolute', bottom: '28px', left: '28px', right: '28px' }}>
                  <div style={{
                    width: '32px', height: '2px', background: '#d4af37', marginBottom: '12px'
                  }} />
                  <h4 style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: '1.5rem', fontWeight: '700', color: '#fff', marginBottom: '8px'
                  }}>Protocol Management</h4>
                  <p style={{
                    fontFamily: "'Lato', sans-serif", fontSize: '0.85rem',
                    color: 'rgba(255,255,255,0.75)', lineHeight: '1.6'
                  }}>Expert ceremony coordination for formal events, VIP functions & diplomatic occasions.</p>
                </div>
              </div>

              {/* Top-right small */}
              <div style={{ gridColumn: 'span 4', position: 'relative', overflow: 'hidden', borderRadius: '4px' }}>
                <img src={service2Img} alt="Guest Reception" style={{
                  width: '100%', height: '200px', objectFit: 'cover', display: 'block',
                  transition: 'transform 0.6s ease'
                }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(5,12,28,0.75) 0%, transparent 50%)'
                }} />
                <div style={{ position: 'absolute', bottom: '18px', left: '20px' }}>
                  <h4 style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: '1.2rem', fontWeight: '700', color: '#fff', marginBottom: '0'
                  }}>Guest Reception & Ushering</h4>
                </div>
              </div>

              {/* Top-right second */}
              <div style={{ gridColumn: 'span 3', position: 'relative', overflow: 'hidden', borderRadius: '4px' }}>
                <img src={g1} alt="VIP Hosting" style={{
                  width: '100%', height: '200px', objectFit: 'cover', display: 'block',
                  transition: 'transform 0.6s ease'
                }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(5,12,28,0.75) 0%, transparent 50%)'
                }} />
                <div style={{ position: 'absolute', bottom: '18px', left: '20px' }}>
                  <h4 style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: '1.1rem', fontWeight: '700', color: '#fff'
                  }}>VIP Hosting</h4>
                </div>
              </div>

              {/* Bottom middle */}
              <div style={{ gridColumn: 'span 4', position: 'relative', overflow: 'hidden', borderRadius: '4px' }}>
                <img src={securityImg} alt="Security & Coordination" style={{
                  width: '100%', height: '200px', objectFit: 'cover', display: 'block',
                  transition: 'transform 0.6s ease'
                }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(5,12,28,0.75) 0%, transparent 50%)'
                }} />
                <div style={{ position: 'absolute', bottom: '18px', left: '20px' }}>
                  <h4 style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: '1.2rem', fontWeight: '700', color: '#fff'
                  }}>Security & Access Control</h4>
                </div>
              </div>

              {/* Bottom right */}
              <div style={{ gridColumn: 'span 3', position: 'relative', overflow: 'hidden', borderRadius: '4px' }}>
                <img src={service3Img} alt="Corporate Events" style={{
                  width: '100%', height: '200px', objectFit: 'cover', display: 'block',
                  transition: 'transform 0.6s ease'
                }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(5,12,28,0.75) 0%, transparent 50%)'
                }} />
                <div style={{ position: 'absolute', bottom: '18px', left: '20px' }}>
                  <h4 style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: '1.1rem', fontWeight: '700', color: '#fff'
                  }}>Corporate Events</h4>
                </div>
              </div>
            </div>

            {/* Service cards row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginTop: '60px' }}>
              {[
                { icon: Shield, title: "Protocol Management", desc: "Expert ceremony coordination and official protocol handling for formal events, VIP functions, and diplomatic occasions." },
                { icon: Users, title: "Guest Reception", desc: "Warm welcome, professional ushering, and seamless guest management to ensure every attendee feels valued." },
                { icon: Heart, title: "Weddings & Celebrations", desc: "Flawless wedding coordination, guest management, and ceremonial support for your most special day." },
                { icon: Calendar, title: "Corporate Functions", desc: "Professional support for conferences, meetings, and corporate functions with meticulous attention to detail." },
                { icon: Star, title: "VIP Coordination", desc: "Dedicated VIP care, personalized attention, and discreet coordination for high-profile guests." },
                { icon: Clock, title: "Event Flow", desc: "Seamless timing, logistics management, and smooth transitions throughout your entire event." },
              ].map((service, i) => (
                <div key={i} style={{
                  background: '#fff', padding: '36px 32px',
                  border: '1px solid rgba(0,0,0,0.07)',
                  borderBottom: '3px solid transparent',
                  transition: 'all 0.3s ease', cursor: 'pointer',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderBottom = '3px solid #d4af37';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.08)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderBottom = '3px solid transparent';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}>
                  <div style={{
                    width: '48px', height: '48px', marginBottom: '22px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(212,175,55,0.08)', color: '#d4af37'
                  }}>
                    <service.icon size={24} />
                  </div>
                  <h4 style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: '1.25rem', fontWeight: '700', color: '#050c1c', marginBottom: '12px'
                  }}>{service.title}</h4>
                  <p style={{
                    fontFamily: "'Lato', sans-serif", fontSize: '0.88rem',
                    color: '#7a7a7a', lineHeight: '1.75', margin: 0
                  }}>{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ ABOUT SECTION ═══════════════════ */}
        <section style={{ background: '#050c1c', padding: '110px 0', position: 'relative', overflow: 'hidden' }}>
          {/* Decorative large number */}
          <div style={{
            position: 'absolute', right: '-20px', bottom: '-40px',
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: '280px', fontWeight: '700', color: 'rgba(212,175,55,0.04)',
            lineHeight: 1, userSelect: 'none', pointerEvents: 'none'
          }}>SN</div>

          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
              
              {/* Left - images stacked */}
              <div style={{ position: 'relative' }}>
                <img src={aboutImg} alt="About ServiceNow" style={{
                  width: '88%', borderRadius: '2px',
                  boxShadow: '30px 30px 0 rgba(212,175,55,0.12)', display: 'block'
                }} />
                {/* Floating accent card */}
                <div style={{
                  position: 'absolute', bottom: '-30px', right: 0,
                  background: '#d4af37', padding: '28px 32px', width: '200px'
                }}>
                  <div style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: '3rem', fontWeight: '700', color: '#050c1c', lineHeight: 1
                  }}>5+</div>
                  <div style={{
                    fontFamily: "'Montserrat', sans-serif", fontSize: '0.65rem',
                    fontWeight: '700', letterSpacing: '2px', color: '#050c1c',
                    textTransform: 'uppercase', marginTop: '6px'
                  }}>Years of Excellence</div>
                </div>
              </div>

              {/* Right - text */}
              <div style={{ paddingTop: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
                  <div style={{ width: '40px', height: '1px', background: '#d4af37' }} />
                  <span style={{
                    fontFamily: "'Montserrat', sans-serif", fontSize: '0.65rem',
                    fontWeight: '700', letterSpacing: '3px', color: '#d4af37', textTransform: 'uppercase'
                  }}>About Us</span>
                </div>
                <h2 style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: '700',
                  color: '#ffffff', lineHeight: '1.15', marginBottom: '24px'
                }}>
                  Where Service Meets Excellence
                </h2>
                <p style={{
                  fontFamily: "'Lato', sans-serif", fontSize: '1rem',
                  color: '#d4af37', fontStyle: 'italic', marginBottom: '20px'
                }}>Professional protocol and event support company</p>
                <p style={{
                  fontFamily: "'Lato', sans-serif", fontSize: '0.95rem',
                  color: 'rgba(255,255,255,0.7)', lineHeight: '1.9', marginBottom: '16px'
                }}>
                  ServiceNow is dedicated to delivering exceptional ceremony coordination and hospitality services. We specialize in managing protocol, guest reception, ushering, and event organization for weddings, conferences, corporate functions, official ceremonies, and special occasions.
                </p>
                <p style={{
                  fontFamily: "'Lato', sans-serif", fontSize: '0.95rem',
                  color: 'rgba(255,255,255,0.5)', lineHeight: '1.9', marginBottom: '40px'
                }}>
                  With professionalism, elegance, and attention to detail, we ensure every guest feels welcomed and every event runs smoothly.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '40px' }}>
                  {[
                    { icon: Shield, label: "Professional Protocol" },
                    { icon: Users, label: "Expert Team" },
                    { icon: Heart, label: "Personalized Service" },
                    { icon: Award, label: "Excellence Guaranteed" }
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <item.icon size={16} color="#d4af37" />
                      <span style={{
                        fontFamily: "'Lato', sans-serif", fontSize: '0.85rem',
                        color: 'rgba(255,255,255,0.7)'
                      }}>{item.label}</span>
                    </div>
                  ))}
                </div>

                <Link to="/about" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  padding: '16px 36px',
                  background: 'transparent', color: '#d4af37',
                  fontFamily: "'Montserrat', sans-serif", fontWeight: '700',
                  fontSize: '0.7rem', letterSpacing: '2px', textTransform: 'uppercase',
                  textDecoration: 'none', border: '1px solid rgba(212,175,55,0.5)',
                  transition: 'all 0.3s ease'
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#d4af37'; e.currentTarget.style.color = '#050c1c'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#d4af37'; }}
                >
                  Learn More About Us <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════ CORE VALUES ═══════════════════ */}
        <section style={{ background: '#faf9f7', padding: '110px 0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '70px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginBottom: '20px' }}>
                <div style={{ width: '40px', height: '1px', background: '#d4af37' }} />
                <span style={{
                  fontFamily: "'Montserrat', sans-serif", fontSize: '0.65rem',
                  fontWeight: '700', letterSpacing: '3px', color: '#d4af37', textTransform: 'uppercase'
                }}>Our Core Values</span>
                <div style={{ width: '40px', height: '1px', background: '#d4af37' }} />
              </div>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: '700',
                color: '#050c1c', lineHeight: '1.15'
              }}>What Drives Us</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2px' }}>
              {[
                { icon: Shield, title: "Professionalism", desc: "Maintaining the highest standards in every interaction and service delivery." },
                { icon: Award, title: "Excellence", desc: "Striving for perfection in every detail of event coordination." },
                { icon: Heart, title: "Respect", desc: "Treating every client and guest with dignity and consideration." },
                { icon: Users, title: "Hospitality", desc: "Creating warm, welcoming environments for all attendees." },
                { icon: Star, title: "Reliability", desc: "Consistent, dependable service you can count on every time." },
                { icon: Sparkles, title: "Satisfaction", desc: "Ensuring memorable experiences that consistently exceed expectations." }
              ].map((value, i) => (
                <div key={i} style={{
                  background: '#fff', padding: '50px 36px', textAlign: 'center',
                  borderBottom: '3px solid transparent', transition: 'all 0.3s ease', cursor: 'default',
                  position: 'relative', overflow: 'hidden'
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = '#050c1c';
                    e.currentTarget.style.borderBottom = '3px solid #d4af37';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = '#fff';
                    e.currentTarget.style.borderBottom = '3px solid transparent';
                  }}>
                  <div style={{
                    width: '60px', height: '60px', margin: '0 auto 20px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(212,175,55,0.08)', color: '#d4af37', borderRadius: '1px'
                  }}>
                    <value.icon size={26} />
                  </div>
                  <h4 style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: '1.3rem', fontWeight: '700', color: '#d4af37', marginBottom: '14px'
                  }}>{value.title}</h4>
                  <p style={{
                    fontFamily: "'Lato', sans-serif", fontSize: '0.88rem',
                    color: '#7a7a7a', lineHeight: '1.75', margin: 0, transition: 'color 0.3s'
                  }}>{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ TESTIMONIALS ═══════════════════ */}
        <section style={{ background: '#ffffff', padding: '110px 0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '70px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginBottom: '20px' }}>
                <div style={{ width: '40px', height: '1px', background: '#d4af37' }} />
                <span style={{
                  fontFamily: "'Montserrat', sans-serif", fontSize: '0.65rem',
                  fontWeight: '700', letterSpacing: '3px', color: '#d4af37', textTransform: 'uppercase'
                }}>Client Testimonials</span>
                <div style={{ width: '40px', height: '1px', background: '#d4af37' }} />
              </div>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: '700',
                color: '#050c1c'
              }}>What Our Clients Say</h2>
              <p style={{
                fontFamily: "'Lato', sans-serif", color: '#7a7a7a',
                marginTop: '14px', fontSize: '0.95rem'
              }}>Trusted by event professionals across Africa</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
              {testimonials.map((t) => (
                <div key={t.id} style={{
                  padding: '44px 36px', background: '#faf9f7',
                  borderLeft: '3px solid #d4af37', position: 'relative',
                  transition: 'all 0.3s ease'
                }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.08)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                  {/* Big quote mark */}
                  <div style={{
                    position: 'absolute', top: '20px', right: '28px',
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: '6rem', lineHeight: 1, color: 'rgba(212,175,55,0.12)', fontWeight: '700'
                  }}>"</div>

                  {/* Stars */}
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="#d4af37" color="#d4af37" />
                    ))}
                  </div>

                  <p style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: '1.1rem', fontStyle: 'italic', color: '#333',
                    lineHeight: '1.8', marginBottom: '30px', position: 'relative', zIndex: 1
                  }}>"{t.quote}"</p>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{
                      width: '52px', height: '52px', borderRadius: '50%',
                      overflow: 'hidden', border: '2px solid #d4af37', flexShrink: 0
                    }}>
                      <img src={t.image} alt={t.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        onError={e => e.target.src = 'https://via.placeholder.com/52x52?text=P'} />
                    </div>
                    <div>
                      <div style={{
                        fontFamily: "'Montserrat', sans-serif", fontWeight: '700',
                        fontSize: '0.85rem', color: '#050c1c'
                      }}>{t.name}</div>
                      <div style={{
                        fontFamily: "'Lato', sans-serif", fontSize: '0.8rem', color: '#d4af37'
                      }}>{t.position}</div>
                      <div style={{
                        fontFamily: "'Lato', sans-serif", fontSize: '0.72rem', color: '#aaa'
                      }}>{t.location}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ LEADERSHIP ═══════════════════ */}
        <section style={{ background: '#faf9f7', padding: '110px 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', gap: '80px', alignItems: 'center' }}>
              <div style={{ position: 'relative' }}>
                <div style={{
                  position: 'absolute', top: '-16px', left: '-16px',
                  right: '16px', bottom: '16px',
                  border: '1px solid rgba(212,175,55,0.3)', zIndex: 0
                }} />
                <img src={presidentImg} alt="KUBANA Kevin" style={{
                  width: '100%', display: 'block', position: 'relative', zIndex: 1
                }} />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
                  <div style={{ width: '40px', height: '1px', background: '#d4af37' }} />
                  <span style={{
                    fontFamily: "'Montserrat', sans-serif", fontSize: '0.65rem',
                    fontWeight: '700', letterSpacing: '3px', color: '#d4af37', textTransform: 'uppercase'
                  }}>Leadership</span>
                </div>
                <h2 style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: '700',
                  color: '#050c1c', lineHeight: '1.15', marginBottom: '24px'
                }}>Message From Our Director</h2>

                <p style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '1.3rem', fontStyle: 'italic', color: '#d4af37', marginBottom: '24px'
                }}>
                  "Where service meets excellence — that's our promise to you."
                </p>
                <p style={{
                  fontFamily: "'Lato', sans-serif", fontSize: '0.95rem',
                  color: '#555', lineHeight: '1.9', marginBottom: '16px'
                }}>
                  At ServiceNow, we believe that successful events begin with proper hospitality and professional protocol management. Every guest deserves to feel welcomed, and every event should run with seamless precision.
                </p>
                <p style={{
                  fontFamily: "'Lato', sans-serif", fontSize: '0.95rem',
                  color: '#7a7a7a', lineHeight: '1.9', marginBottom: '36px'
                }}>
                  Our team is dedicated to creating organized, respectful, and memorable experiences through high-quality service and excellent coordination. From VIP reception to event flow coordination, we provide reliable support tailored to every client.
                </p>
                <div style={{ borderTop: '1px solid rgba(212,175,55,0.3)', paddingTop: '24px' }}>
                  <div style={{
                    fontFamily: "'Montserrat', sans-serif", fontWeight: '700',
                    fontSize: '0.95rem', color: '#050c1c', letterSpacing: '1px'
                  }}>KUBANA Kevin</div>
                  <div style={{
                    fontFamily: "'Lato', sans-serif", fontSize: '0.85rem', color: '#d4af37', marginTop: '4px'
                  }}>Executive Director, ServiceNow</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════ CTA SECTION ═══════════════════ */}
        <section style={{ position: 'relative', overflow: 'hidden' }}>
          <img src={service3Img} alt="CTA Background" style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', filter: 'brightness(0.25)'
          }} />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(135deg, rgba(5,12,28,0.95) 0%, rgba(5,12,28,0.7) 100%)'
          }} />
          <div className="container" style={{ position: 'relative', zIndex: 1, padding: '120px 20px', textAlign: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginBottom: '24px' }}>
              <div style={{ width: '60px', height: '1px', background: '#d4af37' }} />
              <span style={{
                fontFamily: "'Montserrat', sans-serif", fontSize: '0.65rem',
                fontWeight: '700', letterSpacing: '3px', color: '#d4af37', textTransform: 'uppercase'
              }}>Ready to Plan?</span>
              <div style={{ width: '60px', height: '1px', background: '#d4af37' }} />
            </div>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: '700',
              color: '#ffffff', lineHeight: '1.1', marginBottom: '24px'
            }}>Let Us Welcome Your Guests</h2>
            <p style={{
              fontFamily: "'Lato', sans-serif", fontSize: '1rem',
              color: 'rgba(255,255,255,0.7)', maxWidth: '560px', margin: '0 auto 50px',
              lineHeight: '1.8'
            }}>
              From intimate gatherings to large-scale events — we ensure every detail is handled with professionalism and care.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
              <Link to="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: '18px 48px', background: '#d4af37', color: '#050c1c',
                fontFamily: "'Montserrat', sans-serif", fontWeight: '700',
                fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase',
                textDecoration: 'none', transition: 'all 0.3s ease',
                clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
              }}>
                Contact Us Today <ChevronRight size={16} />
              </Link>
              <Link to="/services" style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: '17px 44px', background: 'transparent', color: '#fff',
                fontFamily: "'Montserrat', sans-serif", fontWeight: '600',
                fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase',
                textDecoration: 'none', border: '1px solid rgba(255,255,255,0.3)',
                transition: 'all 0.3s ease'
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#d4af37'; e.currentTarget.style.color = '#d4af37'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = '#fff'; }}
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />

      {/* Google Fonts + Global Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Lato:wght@300;400;700&family=Montserrat:wght@500;600;700&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { overflow-x: hidden; }

        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }

        @media (max-width: 900px) {
          [style*="gridTemplateColumns: '1fr 1fr'"],
          [style*="gridTemplateColumns: '2fr 3fr'"],
          [style*="gridTemplateColumns: 'repeat(12, 1fr)'"] {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          [style*="gridColumn: 'span 5'"],
          [style*="gridColumn: 'span 4'"],
          [style*="gridColumn: 'span 3'"] {
            grid-column: span 12 !important;
          }
        }

        @media (max-width: 600px) {
          section { padding: 70px 0 !important; }
        }
      `}</style>
    </>
  );
}

export default Home;
import { useEffect, useState } from "react";
import { HandHeart, Heart, Sparkles, Star, Award, Shield, Calendar } from "lucide-react";
import IconImg from "../assets/icon.png";

function LoadingPage({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);
  const [dots, setDots] = useState("");

  const loadingMessages = [
    "Where Service Meets Excellence...",
    "Preparing protocol management...",
    "Setting up guest reception...",
    "Coordinating event flow...",
    "Welcoming your guests...",
    "The Art of Welcome awaits!"
  ];

  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Change loading messages
    const messageInterval = setInterval(() => {
      setMessageIndex(prev => (prev + 1) % loadingMessages.length);
    }, 2000);

    // Animated dots for "Loading..."
    const dotsInterval = setInterval(() => {
      setDots(prev => {
        if (prev.length >= 3) return "";
        return prev + ".";
      });
    }, 400);

    // Complete loading after progress reaches 100
    const completeTimeout = setTimeout(() => {
      if (onLoadingComplete) {
        onLoadingComplete();
      }
    }, 2000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
      clearInterval(dotsInterval);
      clearTimeout(completeTimeout);
    };
  }, [onLoadingComplete]);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, #0a1c3a 0%, #122b4f 50%, #1a365a 100%)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      {/* Animated Background Pattern */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.03,
          backgroundImage: `radial-gradient(circle at 2px 2px, #d4af37 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          pointerEvents: 'none'
        }}
      />

      {/* Animated Floating Gold Circles */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)',
          animation: 'float 8s ease-in-out infinite'
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '15%',
          right: '8%',
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)',
          animation: 'float 6s ease-in-out infinite reverse'
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '60%',
          left: '80%',
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%)',
          animation: 'float 7s ease-in-out infinite'
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '30%',
          left: '10%',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 70%)',
          animation: 'float 9s ease-in-out infinite'
        }}
      />

      {/* Main Content */}
      <div
        style={{
          textAlign: 'center',
          zIndex: 10,
          maxWidth: '550px',
          width: '90%',
          padding: '40px',
          animation: 'fadeInUp 0.6s ease'
        }}
      >
        {/* Logo Animation with Custom Image */}
        <div
          style={{
            marginBottom: '30px',
            animation: 'pulse 2s ease-in-out infinite'
          }}
        >
          <div
            style={{
              width: '110px',
              height: '110px',
              margin: '0 auto',
              position: 'relative',
              borderRadius: '50%',
              boxShadow: '0 20px 40px rgba(212, 175, 55, 0.2), 0 0 0 3px rgba(212, 175, 55, 0.1)',
              overflow: 'hidden'
            }}
          >
            <img 
              src={IconImg} 
              alt="ServiceNow Logo" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '-50%',
                left: '-50%',
                width: '200%',
                height: '200%',
                background: 'linear-gradient(45deg, transparent, rgba(212,175,55,0.3), transparent)',
                transform: 'rotate(45deg)',
                animation: 'shine 3s infinite',
                pointerEvents: 'none'
              }}
            />
          </div>
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: '2.2rem',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #d4af37 0%, #f5e6a3 50%, #d4af37 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: '8px',
            letterSpacing: '-0.5px'
          }}
        >
          SERVICE<span style={{ color: '#d4af37', background: 'none', WebkitBackgroundClip: 'unset' }}>NOW</span>
        </h1>

        {/* Tagline */}
        <p
          style={{
            color: '#d4af37',
            fontStyle: 'italic',
            marginBottom: '35px',
            fontSize: '0.85rem',
            opacity: 0.9,
            letterSpacing: '1px',
            fontWeight: '500'
          }}
        >
          <Star size={12} style={{ display: 'inline', marginRight: '6px' }} />
          The Art of Welcome
          <Award size={12} style={{ display: 'inline', marginLeft: '6px' }} />
        </p>

        {/* Animated Loading Message */}
        <div
          style={{
            marginBottom: '30px',
            minHeight: '65px'
          }}
        >
          <p
            style={{
              color: 'rgba(255,255,255,0.85)',
              fontSize: '1rem',
              fontWeight: '500',
              animation: 'fadeInOut 0.5s ease'
            }}
          >
            {loadingMessages[messageIndex]}
          </p>
        </div>

        {/* Progress Bar */}
        <div
          style={{
            width: '100%',
            height: '3px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '3px',
            overflow: 'hidden',
            marginBottom: '12px'
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #d4af37, #f5e6a3, #d4af37)',
              borderRadius: '3px',
              transition: 'width 0.1s linear',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                animation: 'shimmer 1.5s infinite'
              }}
            />
          </div>
        </div>

        {/* Progress Percentage */}
        <p
          style={{
            color: 'rgba(255,255,255,0.5)',
            fontSize: '0.75rem',
            marginBottom: '30px',
            fontFamily: 'monospace',
            letterSpacing: '1px'
          }}
        >
          {progress}% Loading{dots}
        </p>

        {/* Animated Stars / Decorative Elements */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginTop: '20px'
          }}
        >
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              style={{
                animation: `twinkle ${1.5 + i * 0.4}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`
              }}
            >
              <Sparkles
                size={18}
                color="#d4af37"
                fill="rgba(212, 175, 55, 0.3)"
              />
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          style={{
            width: '40px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, #d4af37, transparent)',
            margin: '25px auto 15px'
          }}
        />

        {/* Footer Text */}
        <p
          style={{
            color: 'rgba(255,255,255,0.3)',
            fontSize: '0.65rem',
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}
        >
          Protocol • Hospitality • Excellence
        </p>
      </div>

      {/* Keyframe Animations */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeInOut {
            0% {
              opacity: 0;
              transform: translateY(-10px);
            }
            20% {
              opacity: 1;
              transform: translateY(0);
            }
            80% {
              opacity: 1;
              transform: translateY(0);
            }
            100% {
              opacity: 0;
              transform: translateY(10px);
            }
          }

          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.03);
            }
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0) translateX(0);
            }
            50% {
              transform: translateY(-25px) translateX(15px);
            }
          }

          @keyframes shine {
            0% {
              transform: translateX(-100%) rotate(45deg);
            }
            20%, 100% {
              transform: translateX(100%) rotate(45deg);
            }
          }

          @keyframes shimmer {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }

          @keyframes twinkle {
            0%, 100% {
              opacity: 0.4;
              transform: scale(0.8);
            }
            50% {
              opacity: 1;
              transform: scale(1.2);
            }
          }
        `}
      </style>
    </div>
  );
}

export default LoadingPage;
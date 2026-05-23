import { useEffect, useState, useRef } from "react";
import { Sparkles, Star, Award } from "lucide-react";
import IconImg from "../assets/icon.png";

function LoadingPage({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [phase, setPhase] = useState("enter"); // enter | loading | exit
  const [particleList] = useState(() =>
    Array.from({ length: 24 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1 + Math.random() * 2.5,
      delay: Math.random() * 4,
      dur: 3 + Math.random() * 5,
    }))
  );

  const loadingMessages = [
    "Where Service Meets Excellence",
    "Preparing protocol management",
    "Setting up guest reception",
    "Coordinating event flow",
    "Welcoming your guests",
    "The Art of Welcome awaits",
  ];

  useEffect(() => {
    // Short enter delay then start progress
    const enterTimer = setTimeout(() => setPhase("loading"), 400);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Ease in, fast middle, ease out feel
        const remaining = 100 - prev;
        const step = Math.max(0.4, remaining * 0.028);
        return Math.min(100, prev + step);
      });
    }, 30);

    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 1800);

    const completeTimeout = setTimeout(() => {
      setPhase("exit");
      setTimeout(() => {
        if (onLoadingComplete) onLoadingComplete();
      }, 700);
    }, 3200);

    return () => {
      clearTimeout(enterTimer);
      clearInterval(progressInterval);
      clearInterval(messageInterval);
      clearTimeout(completeTimeout);
    };
  }, [onLoadingComplete]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "#06101f",
        opacity: phase === "exit" ? 0 : 1,
        transition: "opacity 0.7s ease",
      }}
    >
      {/* ── Deep starfield background ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(212,175,55,0.07) 0%, transparent 70%), radial-gradient(ellipse 100% 100% at 50% 50%, #0a1828 0%, #06101f 100%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Gold dust particles ── */}
      <svg
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
        aria-hidden="true"
      >
        {particleList.map((p) => (
          <circle
            key={p.id}
            cx={`${p.x}%`}
            cy={`${p.y}%`}
            r={p.size}
            fill="rgba(212,175,55,0.55)"
            style={{
              animation: `particlePulse ${p.dur}s ${p.delay}s ease-in-out infinite`,
            }}
          />
        ))}
      </svg>

      {/* ── Art-deco corner ornaments ── */}
      {["tl", "tr", "bl", "br"].map((pos) => {
        const isTop = pos.startsWith("t");
        const isLeft = pos.endsWith("l");
        return (
          <svg
            key={pos}
            width="90"
            height="90"
            viewBox="0 0 90 90"
            style={{
              position: "absolute",
              top: isTop ? 24 : "auto",
              bottom: !isTop ? 24 : "auto",
              left: isLeft ? 24 : "auto",
              right: !isLeft ? 24 : "auto",
              transform: `rotate(${isTop && isLeft ? 0 : isTop ? 90 : isLeft ? 270 : 180}deg)`,
              opacity: 0.35,
              pointerEvents: "none",
            }}
            aria-hidden="true"
          >
            <path d="M4 4 L4 40" stroke="#d4af37" strokeWidth="1" fill="none" />
            <path d="M4 4 L40 4" stroke="#d4af37" strokeWidth="1" fill="none" />
            <path d="M4 4 L18 18" stroke="#d4af37" strokeWidth="0.5" fill="none" />
            <circle cx="4" cy="4" r="3" fill="none" stroke="#d4af37" strokeWidth="1" />
            <circle cx="4" cy="4" r="1.2" fill="#d4af37" />
            <path d="M14 4 L14 14 L4 14" stroke="#d4af37" strokeWidth="0.5" fill="none" />
          </svg>
        );
      })}

      {/* ── Horizontal rule lines flanking center ── */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.08) 30%, rgba(212,175,55,0.08) 70%, transparent 100%)",
          pointerEvents: "none",
          transform: "translateY(-120px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.08) 30%, rgba(212,175,55,0.08) 70%, transparent 100%)",
          pointerEvents: "none",
          transform: "translateY(120px)",
        }}
      />

      {/* ── Main card ── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          maxWidth: "480px",
          width: "88%",
          padding: "56px 48px 48px",
          opacity: phase === "enter" ? 0 : 1,
          transform: phase === "enter" ? "translateY(24px)" : "translateY(0)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        {/* Card border with gold gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "2px",
            padding: "1px",
            background: "linear-gradient(135deg, rgba(212,175,55,0.5) 0%, rgba(212,175,55,0.05) 40%, rgba(212,175,55,0.05) 60%, rgba(212,175,55,0.4) 100%)",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            pointerEvents: "none",
          }}
        />
        {/* Card glass fill */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(8, 18, 36, 0.75)",
            backdropFilter: "blur(20px)",
            borderRadius: "2px",
            pointerEvents: "none",
          }}
        />

        {/* Content inside card */}
        <div style={{ position: "relative", zIndex: 1 }}>

          {/* Logo with spinning ring */}
          <div style={{ position: "relative", display: "inline-block", marginBottom: "28px" }}>
            {/* Outer spinning ring */}
            <svg
              width="116"
              height="116"
              viewBox="0 0 116 116"
              style={{
                position: "absolute",
                top: "-8px",
                left: "-8px",
                animation: "spinRing 8s linear infinite",
                pointerEvents: "none",
              }}
            >
              <circle
                cx="58"
                cy="58"
                r="54"
                fill="none"
                stroke="url(#goldRingGrad)"
                strokeWidth="1"
                strokeDasharray="6 14"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="goldRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#d4af37" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#f5e6a3" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#d4af37" stopOpacity="0.8" />
                </linearGradient>
              </defs>
            </svg>

            {/* Logo circle */}
            <div
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "2px solid rgba(212,175,55,0.4)",
                boxShadow: "0 0 40px rgba(212,175,55,0.15), inset 0 0 20px rgba(212,175,55,0.05)",
                animation: "logoBreathe 4s ease-in-out infinite",
                position: "relative",
              }}
            >
              <img
                src={IconImg}
                alt="ServiceNow"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              {/* Shine sweep */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)",
                  animation: "shineSweep 3.5s ease-in-out infinite",
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>

          {/* Brand name */}
          <div style={{ marginBottom: "6px" }}>
            <h1
              style={{
                fontFamily: "'Playfair Display', 'Georgia', serif",
                fontSize: "2.4rem",
                fontWeight: "800",
                letterSpacing: "6px",
                textTransform: "uppercase",
                color: "transparent",
                background: "linear-gradient(135deg, #c9a227 0%, #f7e98e 40%, #d4af37 60%, #f0d060 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              Service<span style={{ fontWeight: "400", letterSpacing: "8px" }}>Now</span>
            </h1>
          </div>

          {/* Gold divider with center diamond */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", margin: "16px auto 20px" }}>
            <div style={{ height: "1px", width: "50px", background: "linear-gradient(90deg, transparent, #d4af37)" }} />
            <div style={{
              width: "6px", height: "6px",
              background: "#d4af37",
              transform: "rotate(45deg)",
              flexShrink: 0,
              boxShadow: "0 0 8px rgba(212,175,55,0.6)",
            }} />
            <div style={{ height: "1px", width: "50px", background: "linear-gradient(90deg, #d4af37, transparent)" }} />
          </div>

          {/* Tagline */}
          <p
            style={{
              fontFamily: "'Cormorant Garamond', 'Georgia', serif",
              color: "rgba(212,175,55,0.8)",
              fontStyle: "italic",
              fontSize: "1rem",
              letterSpacing: "1.5px",
              marginBottom: "32px",
            }}
          >
            The Art of Welcome
          </p>

          {/* Cycling message */}
          <div style={{ minHeight: "28px", marginBottom: "32px", overflow: "hidden" }}>
            <p
              key={messageIndex}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                color: "rgba(255,255,255,0.65)",
                fontSize: "0.72rem",
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                margin: 0,
                animation: "msgFade 1.8s ease forwards",
              }}
            >
              {loadingMessages[messageIndex]}
            </p>
          </div>

          {/* Progress bar */}
          <div
            style={{
              width: "100%",
              height: "2px",
              background: "rgba(255,255,255,0.07)",
              borderRadius: "2px",
              overflow: "hidden",
              marginBottom: "10px",
              position: "relative",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${progress}%`,
                background: "linear-gradient(90deg, #8a6b1a, #d4af37, #f5e6a3, #d4af37)",
                backgroundSize: "200% 100%",
                animation: "barShimmer 1.8s linear infinite",
                borderRadius: "2px",
                transition: "width 0.1s linear",
                boxShadow: "0 0 10px rgba(212,175,55,0.5)",
              }}
            />
          </div>

          {/* Progress label */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "28px" }}>
            <span
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.6rem",
                color: "rgba(255,255,255,0.25)",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
              }}
            >
              Loading
            </span>
            <span
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "0.85rem",
                color: "#d4af37",
                fontWeight: "600",
              }}
            >
              {Math.round(progress)}%
            </span>
          </div>

          {/* Sparks row */}
          <div style={{ display: "flex", justifyContent: "center", gap: "18px", marginBottom: "24px" }}>
            {[0, 1, 2].map((i) => (
              <Sparkles
                key={i}
                size={16}
                color="#d4af37"
                style={{
                  opacity: 0.5,
                  animation: `twinkle ${1.4 + i * 0.3}s ${i * 0.25}s ease-in-out infinite`,
                }}
              />
            ))}
          </div>

          {/* Footer label */}
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.55rem",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.2)",
              margin: 0,
            }}
          >
            Protocol &nbsp;·&nbsp; Hospitality &nbsp;·&nbsp; Excellence
          </p>
        </div>
      </div>

      {/* ── Keyframes ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;800&family=Cormorant+Garamond:ital,wght@1,400;1,600&family=Montserrat:wght@400;500;600&display=swap');

        @keyframes spinRing {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes logoBreathe {
          0%, 100% { box-shadow: 0 0 30px rgba(212,175,55,0.12), inset 0 0 20px rgba(212,175,55,0.05); }
          50%       { box-shadow: 0 0 55px rgba(212,175,55,0.28), inset 0 0 20px rgba(212,175,55,0.08); }
        }
        @keyframes shineSweep {
          0%   { transform: translateX(-120%); }
          60%, 100% { transform: translateX(180%); }
        }
        @keyframes barShimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        @keyframes msgFade {
          0%   { opacity: 0; transform: translateY(8px); }
          15%  { opacity: 1; transform: translateY(0); }
          85%  { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-6px); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50%       { opacity: 1;   transform: scale(1.25); }
        }
        @keyframes particlePulse {
          0%, 100% { opacity: 0.15; r: attr(r); }
          50%       { opacity: 0.7;  }
        }
      `}</style>
    </div>
  );
}

export default LoadingPage;
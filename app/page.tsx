"use client"
import { useState, useEffect } from 'react';
import { Mail, Heart, ArrowRight, Sparkles } from 'lucide-react';
import { LoveWallPage } from "@/app/lovewall_page";

// Confetti particle component
function ConfettiParticle({ delay, left }: { delay: number; left: string }) {
  const colors = ['#ff6b9d', '#c084fc', '#fbbf24', '#60a5fa', '#34d399'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div
      className="absolute w-2 h-2 animate-confetti"
      style={{
        left,
        top: '-20px',
        backgroundColor: randomColor,
        animationDelay: `${delay}s`,
        animationDuration: `${1.5 + Math.random()}s`
      }}
    />
  );
}

// Firework explosion component - дугтуйнаас гарах салют
function Firework({ x, y, delay }: { x: number; y: number; delay: number }) {
  const particleCount = 12;
  const particles = Array.from({ length: particleCount }, (_, i) => {
    const angle = (i / particleCount) * Math.PI * 2;
    const distance = 80 + Math.random() * 40;
    return {
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
      color: ['#ff6b9d', '#c084fc', '#fbbf24', '#60a5fa', '#34d399'][Math.floor(Math.random() * 5)]
    };
  });

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        zIndex: 60
      }}
    >
      {particles.map((particle, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full animate-firework-particle"
          style={{
            backgroundColor: particle.color,
            animationDelay: `${delay}s`,
            '--tx': `${particle.x}px`,
            '--ty': `${particle.y}px`
          } as any}
        />
      ))}
    </div>
  );
}

export default function HomePage() {
  const [opened, setOpened] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [fireworkWaves, setFireworkWaves] = useState(0);

  useEffect(() => {
    if (isOpen) {
      // Захиа нээгдсэний дараа 0.5 секундын дараа салют эхэлнэ
      setTimeout(() => {
        setShowConfetti(true);
        setFireworkWaves(1);
      }, 500);

      // 3 удаа салют буудна - 1 секунд тутамд
      const wave2 = setTimeout(() => setFireworkWaves(2), 1500);
      const wave3 = setTimeout(() => setFireworkWaves(3), 2500);
      const wave4 = setTimeout(() => setFireworkWaves(4), 3500);

      return () => {
        clearTimeout(wave2);
        clearTimeout(wave3);
        clearTimeout(wave4);
      };
    } else {
      setShowConfetti(false);
      setFireworkWaves(0);
    }
  }, [isOpen]);

  const handleNavigate = () => {
    setOpened(true);
  };

  return (
    // <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-950 via-pink-900 to-rose-950 text-white">
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0b0b12] via-[#120818] to-[#050308] text-white">
      <style jsx global>{`
        @keyframes confetti {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
        .animate-confetti {
          animation: confetti 2s ease-out forwards;
        }
        
        @keyframes firework-particle {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(var(--tx), var(--ty)) scale(0);
            opacity: 0;
          }
        }
        .animate-firework-particle {
          animation: firework-particle 0.8s ease-out forwards;
        }
      `}</style>

      {/* Хайрын хананы үзэмж */}
      {opened && <LoveWallPage />}

      {/* Эхний оролтод харагдах дугтуй */}
      {!opened && (
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,113,181,0.35),_transparent_60%)]" />

          {/* Confetti салют */}
          {showConfetti && (
            <div className="fixed inset-0 pointer-events-none z-[100]">
              {[...Array(50)].map((_, i) => (
                <ConfettiParticle
                  key={i}
                  delay={i * 0.05}
                  left={`${Math.random() * 100}%`}
                />
              ))}
            </div>
          )}

          {/* Дугтуйнаас гарах салют - олон давталттай */}
          {fireworkWaves >= 1 && (
            <div className="absolute inset-0 pointer-events-none">
              <Firework x={192} y={120} delay={0.3} />
              <Firework x={384} y={120} delay={0.4} />
              <Firework x={100} y={240} delay={0.5} />
              <Firework x={484} y={240} delay={0.6} />
              <Firework x={288} y={180} delay={0.7} />
            </div>
          )}
          {fireworkWaves >= 2 && (
            <div className="absolute inset-0 pointer-events-none">
              <Firework x={150} y={150} delay={0} />
              <Firework x={434} y={150} delay={0.1} />
              <Firework x={292} y={100} delay={0.2} />
              <Firework x={150} y={220} delay={0.3} />
              <Firework x={434} y={220} delay={0.4} />
              <Firework x={292} y={260} delay={0.5} />
            </div>
          )}
          {fireworkWaves >= 3 && (
            <div className="absolute inset-0 pointer-events-none">
              <Firework x={220} y={140} delay={0} />
              <Firework x={364} y={140} delay={0.1} />
              <Firework x={180} y={200} delay={0.2} />
              <Firework x={404} y={200} delay={0.3} />
              <Firework x={292} y={220} delay={0.4} />
            </div>
          )}
          {fireworkWaves >= 4 && (
            <div className="absolute inset-0 pointer-events-none">
              <Firework x={250} y={160} delay={0} />
              <Firework x={334} y={160} delay={0.1} />
              <Firework x={210} y={210} delay={0.2} />
              <Firework x={374} y={210} delay={0.3} />
              <Firework x={292} y={140} delay={0.4} />
              <Firework x={150} y={180} delay={0.5} />
              <Firework x={434} y={180} delay={0.6} />
            </div>
          )}

          <div className="relative">
            {/* Дугтуй */}
            <div
              className="relative w-96 h-60 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              {/* Дугтуйны арын хэсэг */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-pink-50 rounded-lg shadow-2xl border-4 border-red-200 shadow-[0_18px_35px_rgba(0,0,0,0.7)]">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,113,181,0.35),_transparent_60%)]" />
                {/* Хөвөө чимэглэл */}
                <div className="absolute top-4 right-4">
                  <div className="w-16 h-16 border-4 border-red-300 rounded-full opacity-30"></div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <Heart className="w-8 h-8 text-red-300 opacity-40" fill="currentColor" />
                </div>
              </div>

              {/* Захиа - дугтуйн дотроос гарч ирнэ */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 w-80 bg-white rounded-xl shadow-2xl transition-all duration-1000 ease-out ${isOpen
                    ? 'top-[-150px] opacity-100 scale-100'
                    : 'top-[40px] opacity-0 scale-95'
                  }`}
                style={{
                  zIndex: 50,
                  transformOrigin: 'bottom center',
                  transitionDelay: isOpen ? '0.5s' : '0s'
                }}
              >
                <div className="p-8 border-4 border-pink-200 rounded-xl bg-gradient-to-br from-white to-pink-50 relative overflow-hidden">
                  {/* Гялалзсан од эффект */}
                  {isOpen && (
                    <>
                      <Sparkles className="absolute top-2 right-2 text-yellow-400 w-5 h-5 animate-pulse" />
                      <Sparkles className="absolute top-4 left-4 text-pink-400 w-4 h-4 animate-pulse" style={{ animationDelay: '0.3s' }} />
                      <Sparkles className="absolute bottom-4 right-6 text-purple-400 w-4 h-4 animate-pulse" style={{ animationDelay: '0.6s' }} />
                    </>
                  )}

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Mail className="text-pink-600" size={28} />
                      <h3 className="text-l font-bold text-pink-600">ONLY FOR YOU</h3>
                    </div>
                    <Heart className="text-red-500 animate-pulse" size={24} fill="currentColor" />
                  </div>

                  <div className="border-t-2 border-pink-200 pt-4 mb-4">
                    <p className="text-gray-700 leading-relaxed text-lg mb-4">
                      Хайрт минь 💌
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Өнөөдөр бол чиний минь энэ хорвоод мэндэлсэн гайхалтай тэр нэгэн өдөр.
                      🎉 <span className="font-bold text-pink-600">Чамдаа төрсөн өдрийн мэнд хүргэе!</span> 🎂
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-6 pt-4 border-t-2 border-pink-200">
                    <div className="text-sm text-gray-500 italic">
                      I Love you ❤️
                    </div>
                    <div className="relative">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNavigate();
                        }}
                        className="group flex items-center gap-1 text-xs text-gray-400 hover:text-pink-500 transition-colors"
                      >
                        <span>{new Date(2025, 11, 7).toLocaleDateString()}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform animate-bounce" />
                      </button>

                      {/* Tooltip мэдэгдэл */}
                      <span className="absolute -top-9 -right-2 bg-pink-500 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap shadow-lg animate-pulse">
                        Энд дарна шүү! ✨
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Дугтуйны урд талын хажуу хэсгүүд */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Зүүн тал */}
                <div
                  className={`absolute left-0 top-0 w-1/2 h-full bg-gradient-to-br from-red-400 to-pink-500 transition-all duration-700 origin-left ${isOpen ? 'opacity-90' : 'opacity-100'
                    }`}
                  style={{
                    clipPath: 'polygon(0 0, 100% 50%, 100% 100%, 0 100%)',
                    boxShadow: 'inset -2px 0 8px rgba(0,0,0,0.1)'
                  }}
                />

                {/* Баруун тал */}
                <div
                  className={`absolute right-0 top-0 w-1/2 h-full bg-gradient-to-bl from-red-400 to-pink-500 transition-all duration-700 origin-right ${isOpen ? 'opacity-90' : 'opacity-100'
                    }`}
                  style={{
                    clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 100%)',
                    boxShadow: 'inset 2px 0 8px rgba(0,0,0,0.1)'
                  }}
                />
              </div>

              {/* Дугтуйны амсар */}
              <div
                className="absolute top-0 left-0 w-full transition-all duration-700 ease-in-out"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: isOpen ? 'rotateX(-180deg)' : 'rotateX(0deg)',
                  transformOrigin: 'top center',
                  zIndex: 40
                }}
              >
                <svg width="100%" height="140" viewBox="0 0 384 140" className="drop-shadow-2xl">
                  <defs>
                    <filter id="shadow">
                      <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.3" />
                    </filter>
                    <linearGradient id="flap-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#f87171" />
                      <stop offset="50%" stopColor="#fb923c" />
                      <stop offset="100%" stopColor="#f43f5e" />
                    </linearGradient>
                  </defs>

                  <polygon
                    points="0,0 384,0 192,110"
                    fill="url(#flap-gradient)"
                    filter="url(#shadow)"
                    className="transition-all duration-300"
                  />

                  <line x1="0" y1="0" x2="192" y2="110" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                  <line x1="384" y1="0" x2="192" y2="110" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />

                  <polygon
                    points="0,0 384,0 192,110"
                    fill="url(#shine)"
                    opacity="0.4"
                  />
                  <defs>
                    <linearGradient id="shine" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                      <stop offset="50%" stopColor="rgba(255,255,255,0.6)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Зүрхэн лац */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="hover:scale-110 active:scale-95 transition-transform duration-200">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 via-rose-500 to-red-500 shadow-[0_0_25px_rgba(248,113,181,0.65)] border border-white/40">
                    <span className="text-xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]">
                      ♥
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Нэмэлт хөвөгч зүйлүүд */}
            {isOpen && (
              <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-center animate-pulse">
                <div className="text-pink-500 text-sm font-medium">
                  🎉 ✨ 🎂 ✨ 🎉
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
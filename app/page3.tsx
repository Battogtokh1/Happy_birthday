import React, { useState } from 'react';
import { Mail, Heart } from 'lucide-react';

export default function EnvelopeMessage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 flex items-center justify-center p-4">
      <div className="relative">
        {/* Дугтуй */}
        <div 
          className="relative w-96 h-64 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Дугтуйны арын хэсэг */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-pink-50 rounded-lg shadow-2xl border-4 border-red-200">
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
            className={`absolute left-1/2 -translate-x-1/2 w-80 bg-white rounded-xl shadow-2xl transition-all duration-1000 ease-out ${
              isOpen 
                ? 'top-[-280px] opacity-100 scale-100' 
                : 'top-[40px] opacity-0 scale-95'
            }`}
            style={{
              zIndex: isOpen ? 20 : 0,
              transformOrigin: 'bottom center'
            }}
          >
            <div className="p-8 border-4 border-pink-200 rounded-xl bg-gradient-to-br from-white to-pink-50">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-pink-600" size={28} />
                  <h3 className="text-2xl font-bold text-pink-600">Таны захиа</h3>
                </div>
                <Heart className="text-red-500" size={24} fill="currentColor" />
              </div>
              
              <div className="border-t-2 border-pink-200 pt-4 mb-4">
                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                  Сайн уу! 💌
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Энэ бол танд зориулсан онцгой захиа юм. 
                  Таныг өнөөдөр маш гайхалтай хүн гэдгийг 
                  мэдүүлэхийг хүсч байна!
                </p>
              </div>
              
              <div className="flex items-center justify-between mt-6 pt-4 border-t-2 border-pink-200">
                <div className="text-sm text-gray-500 italic">
                  Хайртай ❤️
                </div>
                <div className="text-xs text-gray-400">
                  {new Date().toLocaleDateString('mn-MN')}
                </div>
              </div>
            </div>
          </div>

          {/* Дугтуйны урд талын хажуу хэсгүүд */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Зүүн тал */}
            <div 
              className={`absolute left-0 top-0 w-1/2 h-full bg-gradient-to-br from-red-400 to-pink-500 transition-all duration-700 origin-left ${
                isOpen ? 'opacity-90' : 'opacity-100'
              }`}
              style={{
                clipPath: 'polygon(0 0, 100% 50%, 100% 100%, 0 100%)',
                boxShadow: 'inset -2px 0 8px rgba(0,0,0,0.1)'
              }}
            />
            
            {/* Баруун тал */}
            <div 
              className={`absolute right-0 top-0 w-1/2 h-full bg-gradient-to-bl from-red-400 to-pink-500 transition-all duration-700 origin-right ${
                isOpen ? 'opacity-90' : 'opacity-100'
              }`}
              style={{
                clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 100%)',
                boxShadow: 'inset 2px 0 8px rgba(0,0,0,0.1)'
              }}
            />
          </div>

          {/* Дугтуйны амсар (гурвалжин) - хамгийн дээд давхарга */}
          <div 
            className="absolute top-0 left-0 w-full transition-all duration-700 ease-in-out"
            style={{
              transformStyle: 'preserve-3d',
              transform: isOpen ? 'rotateX(-180deg)' : 'rotateX(0deg)',
              transformOrigin: 'top center',
              zIndex: 30
            }}
          >
            <svg width="100%" height="140" viewBox="0 0 384 140" className="drop-shadow-2xl">
              {/* Сүүдэр */}
              <defs>
                <filter id="shadow">
                  <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.3"/>
                </filter>
                <linearGradient id="flap-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#f87171" />
                  <stop offset="50%" stopColor="#fb923c" />
                  <stop offset="100%" stopColor="#f43f5e" />
                </linearGradient>
              </defs>
              
              {/* Гурвалжин амсар */}
              <polygon 
                points="0,0 384,0 192,110" 
                fill="url(#flap-gradient)"
                filter="url(#shadow)"
                className="transition-all duration-300"
              />
              
              {/* Амсарны захын тод зураас */}
              <line x1="0" y1="0" x2="192" y2="110" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
              <line x1="384" y1="0" x2="192" y2="110" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
              
              {/* Гялалзсан нөлөө */}
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

          {/* Хаягийн текст */}
          {!isOpen && (
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center pointer-events-none z-10">
              <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border-2 border-pink-200">
                <div className="text-pink-600 font-bold text-lg">
                  💌 Танд зориулав
                </div>
                <div className="text-pink-500 text-sm mt-1">
                  Дарж нээнэ үү
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Нэмэлт хөвөгч зүйлүүд */}
        {isOpen && (
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-center animate-pulse">
            <div className="text-pink-500 text-sm font-medium">
              ✨ Дахин хаахын тулд дарна уу ✨
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
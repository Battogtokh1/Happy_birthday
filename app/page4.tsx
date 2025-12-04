"use client";

import { useState } from "react";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#080712] via-[#110619] to-[#050308] text-white flex items-center justify-center px-4">
      <div className="flex flex-col items-center gap-6">
        {/* Текст хэсэг */}
        <div className="text-center space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-pink-300/80">
            DIGITAL LOVE LETTER
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Төрсөн өдрийн дугтуй 💌
          </h1>
          <p className="mx-auto max-w-md text-[11px] sm:text-xs text-gray-300/90">
            Дэлгэцийн голд байгаа дугтуй дээр дархад ам нь гурвалжин flap шиг
            дээш нээгдээд, дотроос нь захиа цагаан цаас шиг дээш гарч ирнэ.
            Дугтуй өөрөө доороо үлдэнэ.
          </p>
        </div>

        {/* Дугтуй + захиа */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="group relative h-56 w-80 sm:h-60 sm:w-96 focus:outline-none"
        >
          {/* Сүүдэр */}
          <div className="absolute inset-x-10 bottom-[-18px] h-8 rounded-full bg-black/70 blur-xl" />

          {/* Дугтуйн их бие */}
          <div className="relative h-full w-full rounded-[28px] border border-pink-100/80 bg-[#ffeaf3] shadow-[0_18px_35px_rgba(0,0,0,0.4)] overflow-visible">
            {/* Доторх зөөлөн ягаан панель */}
            <div className="absolute inset-x-6 bottom-7 top-10 rounded-[24px] bg-[#ffd9ec]" />

            {/* Захиа – дотроос нь дээш гарч ирнэ */}
            <div
              className={`
                absolute
                inset-x-10
                bottom-10
                h-[120px]
                rounded-2xl
                bg-white
                shadow-[0_16px_30px_rgba(0,0,0,0.25)]
                px-4
                py-3
                text-left
                transition-transform
                duration-500
                ${
                  isOpen
                    ? "-translate-y-[70%]" // 👈 бүр дээш гарах
                    : "translate-y-[25%]"   // 👈 эхэндээ дугтуйн дотор багахан нуусан
                }
              `}
            >
              <div className="flex h-full flex-col justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-pink-500/80">
                    my love
                  </p>
                  <p className="mt-1 text-[11px] sm:text-xs text-gray-700">
                    Энэ жижигхэн захидлыг нээсэн мөчөөс эхлээд, өнөөдөр чамд
                    зориулсан бүх үг, дурсамж, хайр чинь илүү тод харагдаасай
                    гэж хүсэж байна.
                  </p>
                </div>
                <p className="mt-2 text-[10px] text-gray-500">
                  Чиний <span className="font-semibold text-pink-500">♥</span>
                </p>
              </div>
            </div>

            {/* Дугтуйн ам – жинхэнэ гурвалжин flap */}
            <div
              className="absolute left-1/2 top-4 w-[220px] sm:w-[250px] h-[120px] sm:h-[130px] border border-pink-100/80 bg-[#ffdbe9] shadow-[0_14px_26px_rgba(0,0,0,0.25)]"
              style={{
                clipPath: "polygon(0 0, 100% 0, 50% 100%)", // 👉 ЯГ гурвалжин flap
                transformOrigin: "top center",
                transform: isOpen
                  ? "translateY(-40px)" // нээгдэхэд дээш гулгаж, захиандаа зай гаргана
                  : "translateY(0px)",
                transition: "transform 0.5s ease-out",
              }}
            />

            {/* Зүрхэн лац – дугтуйн голд */}
            <div className="absolute left-1/2 bottom-[26px] z-30 -translate-x-1/2">
              <div className="transition-transform duration-200 group-hover:scale-110 group-active:scale-95">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/80 bg-gradient-to-br from-pink-400 via-rose-500 to-red-500 shadow-[0_0_30px_rgba(248,113,181,0.7)]">
                  <span className="text-xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]">
                    ♥
                  </span>
                </div>
              </div>
            </div>
          </div>
        </button>

        <p className="text-[11px] sm:text-xs text-gray-400/90">
          * Дугтуй дээр дарж амыг нь {isOpen ? "буцааж хааж болно." : "нээж болно."}
        </p>
      </div>
    </main>
  );
}

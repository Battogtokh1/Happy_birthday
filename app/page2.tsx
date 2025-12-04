"use client";

import { useState } from "react";
import {
  heroContent,
  reasonsToLove,
  memoryMoments,
  futureDreams,
} from "../data/loveContent"; // "@/data/..." ажиллавал энэ замыг сольж болно
import { LoveWallPage } from "@/app/lovewall_page";

export default function HomePage1() {
  const [opened, setOpened] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    if (isOpening || opened) return;
    setIsOpening(true);

    // Дуутуй нээгдэх анимэйшн дуусаад Love Wall руу шилжинэ
    setTimeout(() => {
      setOpened(true);
    }, 700); // globals.css доторх envelopeOpen animation-той таарсан хугацаа
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0b0b12] via-[#120818] to-[#050308] text-white">
      {/* Хайрын хананы үзэмж (дугтуй нээгдсэний дараа гарах) */}
      {opened && <LoveWallPage />}

      {/* Эхний оролтод харагдах дугтуй */}
      {!opened && (
        <IntroEnvelope onOpen={handleOpen} isOpening={isOpening} />
      )}
    </main>
  );
}

type IntroEnvelopeProps = {
  onOpen: () => void;
  isOpening: boolean;
};

function IntroEnvelope({ onOpen, isOpening }: IntroEnvelopeProps) {
  return (
    <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
      <div className="mb-8 text-center space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-pink-300/80">
          DIGITAL LOVE LETTER
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          Төрсөн өдрийн нууц захидал 💌
        </h1>
        <p className="text-[11px] sm:text-xs text-gray-300/90 max-w-md mx-auto">
          Энэ дугтуйн дотор зөвхөн чамд зориулагдсан үгс, дурсамж,
          мөрөөдлүүд бий. Нээхийн тулд дугтуй дээр зөөлөн дарна уу.
        </p>
      </div>

      <button
        onClick={onOpen}
        className={`group relative w-64 sm:w-80 h-44 sm:h-52 focus:outline-none ${isOpening ? "envelope-opening" : ""
          }`}
      >
        {/* Дугтуйн сүүдэр */}
        <div className="absolute inset-x-4 bottom-[-18px] h-8 rounded-full bg-black/60 blur-xl" />

        {/* Дугтуйн их бие */}
        <div className="relative h-full w-full rounded-3xl bg-gradient-to-br from-[#1f1020] via-[#120b1b] to-[#18122b] border border-pink-500/40 shadow-[0_18px_35px_rgba(0,0,0,0.7)] overflow-hidden">
          {/* Данчигласан гэрэл */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,113,181,0.35),_transparent_60%)]" />

          {/* Доод давхаргын гурвалжин хавтас (envelope flap) */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 via-transparent to-indigo-500/30" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(15,23,42,0.8),_transparent_60%)]" />
          </div>

          {/* Дугтуйн "амсартай" гурвалжин хэсэг */}
          {/* <div className="absolute inset-x-0 top-0 h-1/2 origin-bottom bg-gradient-to-br from-pink-500 via-rose-500 to-fuchsia-500 clip-path-[polygon(0_0,50%_100%,100%_0)] shadow-[0_18px_30px_rgba(244,114,182,0.45)] group-hover:translate-y-[-3px] group-hover:scale-[1.01] transition-transform duration-300" /> */}
          <div className="absolute inset-x-0 top-0 h-1/2 origin-bottom bg-gradient-to-br from-pink-500 via-rose-500 to-fuchsia-500 clip-path-[polygon(0_0,100%_0,50%_100%)] shadow-[0_18px_30px_rgba(244,114,182,0.45)] group-hover:translate-y-[-3px] group-hover:scale-[1.01] transition-transform duration-300" />

          {/* Доторх захидал хэсэг (үзэгдэхээр цухуйсан цаас шиг) */}
          <div className="absolute inset-3 rounded-2xl bg-white/20 text-left px-4 py-3 flex flex-col justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-pink-500/80">
                my love
              </p>
              <p className="mt-1 text-[11px] sm:text-xs text-gray-700">
                Энэ захидлыг нээх мөчөөс эхлээд өнөөдөр чинь бүр ч илүү
                онцгой болно гэж найдаж байна.
              </p>
            </div>
            <p className="mt-3 text-[10px] text-gray-500">
              Дугтуйг нээхийн тулд{" "}
              <span className="font-semibold text-pink-500">
                энд зөөлөн дарна уу.
              </span>
            </p>
          </div>

          {/* Зүрхэн лац */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="group-hover:scale-110 group-active:scale-95 transition-transform duration-200">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 via-rose-500 to-red-500 shadow-[0_0_25px_rgba(248,113,181,0.65)] border border-white/40">
                <span className="text-xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]">
                  ♥
                </span>
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

/* ----------------- Love Wall хуудсын өмнөх кодыг эндээс доош нь ашиглаж байна ----------------- */



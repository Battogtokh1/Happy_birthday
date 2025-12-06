"use client";

import { useState } from "react";
import {
  heroContent,
  reasonsToLove,
  memoryMoments,
  futureDreams,
} from "../data/loveContent";

export function LoveWallPage() {
  return (
    <>
      {/* Floating hearts background */}
      <FloatingHearts />

      {/* Dark overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black/80" />

      <div className="relative z-10 flex min-h-screen flex-col items-center px-4 py-10 lovewall-fade-in">
        <div className="w-full max-w-4xl space-y-16">
          <HeroSection />
          <ReasonsSection />
          <MemoriesSection />
          <FutureSection />
          <FooterSection />
        </div>
      </div>
    </>
  );
}

function HeroSection() {
  return (
    <section className="space-y-6 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-pink-300/70">
        МЭНДЧИЛГЭЭ
      </p>
      <h1 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
        {heroContent.title}
      </h1>
      <p className="mx-auto max-w-2xl text-sm text-gray-200/90 sm:text-base">
        {heroContent.subtitle}
      </p>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm">
        <span className="rounded-full border border-pink-400/50 bg-pink-500/10 px-4 py-1">
          {/* {heroContent.dateLabel}{" "} */}
          <span className="font-semibold text-pink-200">
            {heroContent.dateValue}
          </span>
        </span>
        <span className="rounded-full border border-indigo-400/40 bg-indigo-500/10 px-4 py-1">
          Бүх зүйл зөвхөн чамд зориулсан 💌
        </span>
      </div>

      <div className="mt-6 flex justify-center">
        <a
          href="#reasons"
          className="group inline-flex items-center gap-2 rounded-full border border-pink-400/70 bg-pink-500/15 px-5 py-2 text-xs font-medium text-pink-50 backdrop-blur-sm transition hover:border-pink-300 hover:bg-pink-500/25 sm:text-sm"
        >
          {heroContent.buttonLabel}
          <span className="transition-transform group-hover:translate-y-0.5">
            ↓
          </span>
        </a>
      </div>
    </section>
  );
}

// function ReasonsSection() {
//   return (
//     <section id="reasons" className="space-y-6 pt-10">
//       <HeaderLabel
//         label="Чамд хайртай 10 шалтгаан"
//         emoji="❤️"
//         sub="Эдгээр нь зөвхөн эхний 10 нь шүү."
//       />

//       <div className="grid gap-4 sm:grid-cols-2">
//         {reasonsToLove.map((reason) => (
//           <div
//             key={reason.title}
//             className="group relative overflow-hidden rounded-2xl border border-pink-500/20 bg-gradient-to-br from-white/5 via-white/0 to-pink-500/10 p-4 text-left backdrop-blur-md transition hover:border-pink-400/50 hover:shadow-[0_0_40px_rgba(244,114,182,0.25)]"
//           >
//             <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,113,181,0.16),_transparent_60%)] opacity-0 transition group-hover:opacity-100" />
//             <h3 className="relative text-sm font-semibold text-pink-100 sm:text-base">
//               {reason.title}
//             </h3>
//             <p className="relative mt-2 text-xs text-gray-200/90 sm:text-sm">
//               {reason.text}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

function ReasonsSection() {
  return (
    <section id="reasons" className="space-y-6 pt-10">
      <HeaderLabel
        label="Чамд хайртай 10 шалтгаан"
        emoji="❤️"
        sub="Эдгээр нь зөвхөн эхний 10 нь шүү."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {reasonsToLove.map((reason) => (
          <div
            key={reason.title}
            className="group relative overflow-hidden rounded-2xl border border-pink-400/30 bg-gradient-to-br from-white/5 via-white/0 to-pink-500/10 p-4 text-left backdrop-blur-md transition hover:border-pink-400/50 hover:shadow-[0_0_40px_rgba(244,114,182,0.25)] shadow-[0_0_25px_rgba(244,114,182,0.15)]"
          >
            {/* Гэрэлтэх эффект - үргэлж харагдана (mobile-д) */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,113,181,0.16),_transparent_60%)] opacity-60 md:opacity-0 transition md:group-hover:opacity-100" />
            
            <h3 className="relative text-sm font-semibold text-pink-100 sm:text-base">
              {reason.title}
            </h3>
            <p className="relative mt-2 text-xs text-gray-200/90 sm:text-sm">
              {reason.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function MemoriesSection() {
  return (
    <section id="memories" className="space-y-6 pt-12">
      <HeaderLabel
        label="Бидний дурсамжууд"
        emoji="📸"
        sub="Хугацаа өнгөрөх тусам илүү их гоё дурсамж нэмэгдэнэ."
      />

      <div className="space-y-4 border-l border-white/10 pl-4 sm:pl-6">
        {memoryMoments.map((m, index) => (
          <div
            key={m.title}
            className="relative flex flex-col gap-2 rounded-xl bg-white/5 p-3 text-left shadow-sm ring-1 ring-white/10 backdrop-blur-sm sm:p-4"
          >
            {/* Timeline dot */}
            <span className="absolute -left-[1.1rem] top-4 h-2.5 w-2.5 rounded-full border border-pink-300 bg-pink-400 shadow-[0_0_0_4px_rgba(244,114,182,0.4)]" />

            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-[11px] font-medium uppercase tracking-wide text-pink-200/90 sm:text-xs">
                {m.date}
              </p>
              <p className="text-[10px] text-gray-300/90 sm:text-xs">
                {index + 1}-р дурсамж
              </p>
            </div>

            <h3 className="text-sm font-semibold text-white sm:text-base">
              {m.title}
            </h3>
            <p className="text-xs text-gray-200/90 sm:text-sm">
              {m.description}
            </p>

            {m.image && (
              <div className="mt-2 overflow-hidden rounded-lg border border-white/10">
                <img
                  src={m.image}
                  alt={m.title}
                  className="max-h-52 w-full object-cover transition duration-500 hover:scale-[1.02]"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function FutureSection() {
  return (
    <section id="future" className="space-y-6 pt-12">
      <HeaderLabel
        label="Ирээдүйн мөрөөдлүүд"
        emoji="🌈"
        sub="Чамтайгаа хамтдаа би ийм ирээдүйг төсөөлдөг."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {futureDreams.map((dream, index) => (
          <div
            key={dream.title}
            className="group relative overflow-hidden rounded-2xl border border-indigo-400/25 bg-gradient-to-br from-indigo-500/15 via-slate-900/60 to-pink-500/15 p-4 text-left backdrop-blur-xl transition hover:border-indigo-300/70 hover:shadow-[0_0_40px_rgba(129,140,248,0.35)]"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.28),_transparent_60%)] opacity-0 transition group-hover:opacity-100" />
            <p className="relative text-[11px] font-semibold uppercase tracking-[0.25em] text-indigo-200/90">
              Мөрөөдөл #{index + 1}
            </p>
            <h3 className="relative mt-2 text-sm font-semibold text-white sm:text-base">
              {dream.title}
            </h3>
            <p className="relative mt-1 text-xs text-gray-200/90 sm:text-sm">
              {dream.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FooterSection() {
  return (
    <section className="mt-12 rounded-2xl border border-white/15 bg-white/5 px-4 py-5 text-center text-xs text-gray-200/90 backdrop-blur-xl sm:px-6 sm:text-sm">
      <p className="text-pink-100">
        Хэрвээ энэ хуудсыг уншиж суугаа бол{" "}
        <span className="font-semibold text-pink-300">
          би чамд дахин, дахин хайртай гэж хэлмээр байна 💖
        </span>
      </p>
      <p className="mt-2 text-[11px] text-gray-300/80 sm:text-xs">
        Энэ жижигхэн дижитал хананд бидний дурсамж, хайр, мөрөөдлийн
        хэсгээс л жаахныг л байрлуулсан. Үлдсэнийг нь бид хамтдаа бичнэ.
      </p>
    </section>
  );
}

function HeaderLabel({
  label,
  emoji,
  sub,
}: {
  label: string;
  emoji: string;
  sub?: string;
}) {
  return (
    <div className="space-y-1 text-center">
      <p className="inline-flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.28em] text-gray-300/90">
        <span>{emoji}</span>
        <span>{label}</span>
      </p>
      {sub && (
        <p className="text-[11px] text-gray-300/80 sm:text-xs">{sub}</p>
      )}
    </div>
  );
}

// ---------- Floating Hearts Background ----------

function FloatingHearts() {
  const hearts = Array.from({ length: 18 });

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {hearts.map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * -20;
        const duration = 18 + Math.random() * 12;
        const size = 22 + Math.random() * 18;

        return (
          <span
            key={i}
            className="heart-floating absolute select-none text-pink-400/30"
            style={{
              left: `${left}%`,
              fontSize: `${size}px`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
          >
            ♥
          </span>
        );
      })}
    </div>
  );
}
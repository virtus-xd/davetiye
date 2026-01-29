"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface EnvelopeLandingProps {
  onOpen?: () => void;
}

export default function EnvelopeLanding({ onOpen }: EnvelopeLandingProps) {
  const [phase, setPhase] = useState<"closed" | "opening" | "opened">("closed");

  // Görseline göre kritik: 60–66 aralığında dene
  const flapTipY = 62;

  const flapClip = `polygon(0 0, 100% 0, 50% ${flapTipY}%)`;
  const pocketClip = `polygon(0 ${flapTipY}%, 50% ${flapTipY}%, 100% ${flapTipY}%, 100% 100%, 0 100%)`;

  const open = () => {
    if (phase !== "closed") return;
    setPhase("opening");

    setTimeout(() => setPhase("opened"), 1150);
    setTimeout(() => onOpen?.(), 1600);
  };

  const isOpening = phase !== "closed";

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden"
      style={{ width: "100vw", height: "100dvh", background: "#0f1a12" }}
    >
      {/* BASE: her zaman full-screen envelope */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/envelope.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* INSIDE PAPER: sadece flap üçgeninin içinde (mask container) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{ clipPath: flapClip }}>
          <motion.div
            className="absolute inset-0"
            initial={false}
            animate={{
              opacity: isOpening ? 1 : 0,
              y: isOpening ? 0 : 120, // kapalıyken aşağıda sakla
            }}
            transition={{
              duration: 0.85,
              delay: isOpening ? 0.18 : 0,
              ease: [0.22, 0.85, 0.12, 1],
            }}
            style={{
              background: "linear-gradient(#f7f5ef, #efede6)",
              boxShadow: "inset 0 0 90px rgba(0,0,0,0.08)",
            }}
          >
            {/* Yazı */}
            <motion.div
              className="absolute left-1/2 top-[36%] -translate-x-1/2 text-center px-6"
              initial={false}
              animate={{
                opacity: phase === "opened" ? 1 : 0,
                y: phase === "opened" ? 0 : 10,
              }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            >
              <div className="text-3xl md:text-4xl text-[#8b7a35] font-serif">
                Anıl & Nisa
              </div>
              <div className="mt-2 text-[11px] tracking-[0.25em] uppercase text-neutral-500">
                BU DAVETİYE SİZE ÖZELDİR
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* POCKET: alt cep derinliği */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          clipPath: pocketClip,
          backgroundImage: "url('/envelope.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxShadow: "0 -30px 70px rgba(0,0,0,0.35)",
        }}
      />

      {/* FLAP: 3D yerine 2D açılma (en stabil) */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={false}
        animate={{
          y: isOpening ? "-38%" : "0%",     // flap yukarı kalkar
          rotate: isOpening ? -2 : 0,       // çok hafif açısal hareket
          opacity: isOpening ? 0.98 : 1,
        }}
        transition={{
          duration: 1.05,
          ease: [0.22, 0.85, 0.12, 1],
        }}
        style={{
          clipPath: flapClip,
          backgroundImage: "url('/envelope.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transformOrigin: "top center",
          willChange: "transform",
          filter: isOpening ? "drop-shadow(0 40px 70px rgba(0,0,0,0.35))" : "none",
        }}
      />

      {/* SEAL */}
      <AnimatePresence>
        {phase === "closed" && (
          <motion.button
            type="button"
            aria-label="Zarfı aç"
            onClick={open}
            className="absolute left-1/2 top-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              width: 122,
              height: 122,
              background: "radial-gradient(circle at 30% 30%, #ffffff, #e9e5dc)",
              boxShadow: "0 18px 40px rgba(0,0,0,0.35)",
            }}
            initial={{ opacity: 1, scale: 1 }}
            whileTap={{ scale: 0.97 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <span className="text-neutral-500 font-serif text-xl">A&N</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* premium vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ boxShadow: "inset 0 0 180px rgba(0,0,0,0.35)" }}
      />
    </div>
  );
}

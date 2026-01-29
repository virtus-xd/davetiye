import { useEffect, useRef, useState } from "react";

type IntroGateProps = {
    onDone: () => void;
};

export default function IntroGate({ onDone }: IntroGateProps) {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        // Intro varken scroll kilitle
        const prevHtmlOverflow = document.documentElement.style.overflow;
        const prevBodyOverflow = document.body.style.overflow;

        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";

        return () => {
            document.documentElement.style.overflow = prevHtmlOverflow;
            document.body.style.overflow = prevBodyOverflow;
        };
    }, []);

    const start = async () => {
        if (!videoRef.current) return;
        setStarted(true);
        try {
            await videoRef.current.play(); // iOS: user gesture şart
        } catch {
            // Bazı cihazlarda ilk play denemesi fail olabilir, kullanıcı tekrar dokunabilir.
        }
    };

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 9999,
                background: "black",
            }}
        >
            <video
                ref={videoRef}
                style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", // boşluk bırakmaz
                }}
                playsInline
                muted
                preload="auto"
                poster="/envelope.png" // varsa kullanır, yoksa silebilirsin
                onEnded={onDone}
            >
                {/* WebM varsa */}
                <source src="/intro_clean.webm" type="video/webm" />
                {/* MP4 mutlaka olsun */}
                <source src="/intro_clean.mp4" type="video/mp4" />
            </video>

            {!started && (
                <button
                    onClick={start}
                    aria-label="Davetiye animasyonunu başlat"
                    style={{
                        position: "absolute",
                        inset: 0,
                        display: "grid",
                        placeItems: "center",
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                    }}
                >
                    <div
                        style={{
                            padding: "12px 18px",
                            borderRadius: 999,
                            background: "rgba(255,255,255,0.12)",
                            color: "white",
                            backdropFilter: "blur(8px)",
                            WebkitBackdropFilter: "blur(8px)",
                            fontSize: 14,
                            letterSpacing: "0.08em",
                        }}
                    >
                        Dokun ve aç
                    </div>
                </button>
            )}
        </div>
    );
}

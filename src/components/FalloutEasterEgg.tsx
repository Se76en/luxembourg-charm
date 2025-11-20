import { useEffect, useRef, useState } from "react";
import { Radiation } from "lucide-react";
const FalloutEasterEgg = () => {
  const [sequence, setSequence] = useState("");
  const [isActive, setIsActive] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeIntervalRef = useRef<number | null>(null);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const newSequence = (sequence + e.key).toLowerCase().slice(-7);
      setSequence(newSequence);

      if (newSequence === "fallout") {
        playWithFadeIn();
        setIsActive(true);
        setSequence(""); // Reset after trigger
      }
    };

    window.addEventListener("keypress", handleKeyPress);
    return () => window.removeEventListener("keypress", handleKeyPress);
  }, [sequence]);

  const playWithFadeIn = () => {
    if (!audioRef.current) return;

    // Reset audio
    audioRef.current.currentTime = 0;
    audioRef.current.volume = 0;
    audioRef.current.play();

    // Fade in over 3 seconds
    const fadeDuration = 3000;
    const fadeSteps = 50;
    const stepDuration = fadeDuration / fadeSteps;
    const volumeIncrement = 1 / fadeSteps;

    let currentStep = 0;

    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current);
    }

    fadeIntervalRef.current = window.setInterval(() => {
      if (!audioRef.current) return;

      currentStep++;
      audioRef.current.volume = Math.min(volumeIncrement * currentStep, 1);

      if (currentStep >= fadeSteps) {
        if (fadeIntervalRef.current) {
          clearInterval(fadeIntervalRef.current);
          fadeIntervalRef.current = null;
        }
      }
    }, stepDuration);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/fallout-easter-egg.mp3"
        preload="auto"
      />
      {isActive && (
        <div className="fixed bottom-4 right-4 z-50 rounded-full bg-card/80 border border-border shadow-lg px-3 py-2 flex items-center gap-2 text-xs md:text-sm backdrop-blur-sm">
          <Radiation className="w-4 h-4 text-secondary" aria-hidden="true" />
          <span className="text-foreground">Mode Fallout activé</span>
        </div>
      )}
    </>
  );
};

export default FalloutEasterEgg;

import { useEffect, useRef, useState } from "react";

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

  useEffect(() => {
    if (isActive) {
      document.body.style.filter = "grayscale(1)";
      document.body.style.transition = "filter 3s ease-in-out";
    } else {
      document.body.style.filter = "";
      document.body.style.transition = "";
    }

    return () => {
      document.body.style.filter = "";
      document.body.style.transition = "";
    };
  }, [isActive]);

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
        <div className="fixed bottom-4 right-4 z-50 animate-fade-in">
          <div className="bg-primary/90 backdrop-blur-sm rounded-full p-3 shadow-lg animate-pulse">
            {/* Replace /vault-boy.gif with your own Vault Boy GIF in the public folder */}
            <img 
              src="/vault-boy.gif" 
              alt="Vault Boy" 
              className="w-12 h-12 object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default FalloutEasterEgg;

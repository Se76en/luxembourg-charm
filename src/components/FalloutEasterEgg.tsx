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
      document.body.classList.add("fallout-mode");
    } else {
      document.body.classList.remove("fallout-mode");
    }

    return () => {
      document.body.classList.remove("fallout-mode");
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
    <audio
      ref={audioRef}
      src="/fallout-easter-egg.mp3"
      preload="auto"
    />
  );
};

export default FalloutEasterEgg;

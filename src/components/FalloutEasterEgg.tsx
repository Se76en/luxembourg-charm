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
      
      // Add film grain overlay with canvas-based noise
      const grainOverlay = document.createElement('div');
      grainOverlay.id = 'fallout-grain';
      grainOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        pointer-events: none;
        z-index: 9999;
        opacity: 0.12;
        background: repeating-linear-gradient(
          0deg,
          transparent,
          transparent 2px,
          rgba(0, 0, 0, 0.03) 2px,
          rgba(0, 0, 0, 0.03) 4px
        );
        mix-blend-mode: multiply;
      `;
      
      // Create animated noise
      const canvas = document.createElement('canvas');
      canvas.width = 200;
      canvas.height = 200;
      canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9998;
        opacity: 0.08;
        mix-blend-mode: overlay;
      `;
      canvas.id = 'fallout-grain-canvas';
      
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const noise = () => {
          const imageData = ctx.createImageData(canvas.width, canvas.height);
          for (let i = 0; i < imageData.data.length; i += 4) {
            const color = Math.random() * 255;
            imageData.data[i] = color;
            imageData.data[i + 1] = color;
            imageData.data[i + 2] = color;
            imageData.data[i + 3] = 255;
          }
          ctx.putImageData(imageData, 0, 0);
        };
        
        const interval = setInterval(noise, 100);
        canvas.dataset.intervalId = String(interval);
      }
      
      document.body.appendChild(canvas);
      document.body.appendChild(grainOverlay);
    } else {
      document.body.style.filter = "";
      document.body.style.transition = "";
      
      // Remove grain overlays
      const grainOverlay = document.getElementById('fallout-grain');
      const grainCanvas = document.getElementById('fallout-grain-canvas');
      
      if (grainCanvas && grainCanvas.dataset.intervalId) {
        clearInterval(Number(grainCanvas.dataset.intervalId));
      }
      
      if (grainOverlay) grainOverlay.remove();
      if (grainCanvas) grainCanvas.remove();
    }

    return () => {
      document.body.style.filter = "";
      document.body.style.transition = "";
      
      const grainOverlay = document.getElementById('fallout-grain');
      const grainCanvas = document.getElementById('fallout-grain-canvas');
      
      if (grainCanvas && grainCanvas.dataset.intervalId) {
        clearInterval(Number(grainCanvas.dataset.intervalId));
      }
      
      if (grainOverlay) grainOverlay.remove();
      if (grainCanvas) grainCanvas.remove();
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

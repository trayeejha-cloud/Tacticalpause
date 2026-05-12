import { useState, useEffect } from 'react';
import { ArrowLeft, Play } from 'lucide-react';

interface SixtySecondPauseTimerProps {
  onComplete: () => void;
  onBack: () => void;
}

const prompts = [
  "Drop your shoulders.",
  "Unclench your jaw.",
  "Take one slow breath.",
  "Notice the next moment."
];

export function SixtySecondPauseTimer({ onComplete, onBack }: SixtySecondPauseTimerProps) {
  const [isActive, setIsActive] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [pulseScale, setPulseScale] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // 60 BPM pulse
  useEffect(() => {
    if (!isActive) return;

    const pulseInterval = setInterval(() => {
      setPulseScale(1.05);
      setTimeout(() => setPulseScale(1), 300);
    }, 1000);

    return () => clearInterval(pulseInterval);
  }, [isActive]);

  useEffect(() => {
    if (!isActive) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          if (currentStep < prompts.length - 1) {
            // Smooth transition to next prompt
            setIsTransitioning(true);
            setTimeout(() => {
              setCurrentStep((s) => s + 1);
              setIsTransitioning(false);
            }, 300);
            return 15;
          } else {
            // Complete the exercise
            setIsActive(false);
            setTimeout(() => onComplete(), 500);
            return 0;
          }
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, currentStep, onComplete]);

  const handleStart = () => {
    setIsActive(true);
    setCurrentStep(0);
    setTimeLeft(15);
  };

  const handleEnd = () => {
    setIsActive(false);
    setCurrentStep(0);
    setTimeLeft(15);
  };

  return (
    <div className="min-h-screen flex flex-col px-6 py-12" style={{ backgroundColor: '#9AB17A' }}>
      {!isActive && (
        <button
          onClick={onBack}
          className="self-start mb-6 p-2 rounded-full transition-all duration-200 active:scale-95"
          style={{ color: '#2F2F2F' }}
          aria-label="Go back"
        >
          <ArrowLeft size={24} />
        </button>
      )}

      <div className="flex-1 flex flex-col max-w-2xl w-full mx-auto justify-center">
        <h2 className="mb-3 text-center" style={{ color: '#2F2F2F', fontSize: '28px', fontWeight: '500', letterSpacing: '-0.02em' }}>
          Just This Minute
        </h2>

        <p className="mb-8 text-center" style={{ color: '#2F2F2F', fontSize: '16px', opacity: 0.9 }}>
          Follow one prompt at a time.
        </p>

        <div
          className="flex flex-col items-center p-10 rounded-3xl mb-6"
          style={{
            backgroundColor: '#C3CC9B',
            boxShadow: '0 4px 16px rgba(47, 47, 47, 0.08)',
            overflow: 'hidden'
          }}
        >
          {isActive ? (
            <>
              <div className="mb-6 flex flex-col items-center">
                {/* Timer */}
                <div className="relative flex items-center justify-center" style={{ width: '120px', height: '120px' }}>
                  <div
                    className="absolute rounded-full"
                    style={{
                      width: '120px',
                      height: '120px',
                      backgroundColor: '#E4DFB5',
                      opacity: 0.2,
                      transform: `scale(${pulseScale})`,
                      transition: 'transform 0.3s ease-out'
                    }}
                  />

                  <div
                    className="rounded-full flex items-center justify-center"
                    style={{
                      width: '100px',
                      height: '100px',
                      backgroundColor: '#E4DFB5',
                      boxShadow: '0 4px 16px rgba(47, 47, 47, 0.1)'
                    }}
                  >
                    <span style={{ color: '#2F2F2F', fontSize: '32px', fontWeight: '500' }}>
                      {timeLeft}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-center mb-4" style={{ color: '#2F2F2F', fontSize: '12px', opacity: 0.7 }}>
                {currentStep + 1} of {prompts.length}
              </p>

              <p className="text-center mb-6 px-4" style={{
                color: '#2F2F2F',
                fontSize: '20px',
                lineHeight: '1.5',
                minHeight: '60px',
                opacity: isTransitioning ? 0 : 1,
                transition: 'opacity 300ms ease-in-out'
              }}>
                {prompts[currentStep]}
              </p>

              <button
                onClick={handleEnd}
                className="text-sm transition-opacity duration-200 active:opacity-70"
                style={{ color: '#2F2F2F', opacity: 0.6 }}
              >
                End pause
              </button>
            </>
          ) : (
            <button
              onClick={handleStart}
              className="w-full max-w-xs px-6 py-5 rounded-2xl transition-all duration-200 active:scale-98 flex items-center justify-center gap-3"
              style={{
                backgroundColor: '#E4DFB5',
                color: '#2F2F2F',
                fontSize: '16px',
                fontWeight: '400',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(47, 47, 47, 0.06)'
              }}
            >
              <Play size={20} />
              Start pause
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

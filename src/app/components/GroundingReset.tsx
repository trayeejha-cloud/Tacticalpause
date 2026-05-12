import { useState, useEffect } from 'react';
import { ArrowLeft, Play, X } from 'lucide-react';

interface GroundingResetProps {
  onComplete: () => void;
  onBack: () => void;
}

const prompts = [
  "Name 3 things you can see.",
  "Feel both feet on the ground.",
  "Drop your shoulders.",
  "Take one slow breath.",
  "Name your next safe action.",
  "Stay with that next step and breathe."
];

export function GroundingReset({ onComplete, onBack }: GroundingResetProps) {
  const [isActive, setIsActive] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!isActive) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          if (currentStep < prompts.length - 1) {
            setIsTransitioning(true);
            setTimeout(() => {
              setCurrentStep((s) => s + 1);
              setIsTransitioning(false);
            }, 300);
            return 20;
          } else {
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
    setTimeLeft(20);
  };

  const handleEnd = () => {
    setIsActive(false);
    setCurrentStep(0);
    setTimeLeft(20);
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
          Grounding Reset
        </h2>

        <p className="mb-8 text-center" style={{ color: '#2F2F2F', fontSize: '16px', opacity: 0.9 }}>
          Take two minutes. Follow one prompt at a time.
        </p>

        <div
          className="flex flex-col items-center p-10 rounded-3xl mb-6 text-center"
          style={{
            backgroundColor: '#C3CC9B',
            boxShadow: '0 4px 16px rgba(47, 47, 47, 0.08)',
            overflow: 'hidden'
          }}
        >
          {isActive ? (
            <>
              <div className="mb-6 flex items-center justify-center relative">
                <svg width="120" height="120" className="transform -rotate-90">
                  <circle
                    cx="60"
                    cy="60"
                    r="54"
                    stroke="#E4DFB5"
                    strokeWidth="8"
                    fill="none"
                    opacity="0.3"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="54"
                    stroke="#E4DFB5"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 54}`}
                    strokeDashoffset={`${2 * Math.PI * 54 * (1 - timeLeft / 20)}`}
                    style={{ transition: 'stroke-dashoffset 1s linear' }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span style={{ color: '#2F2F2F', fontSize: '32px', fontWeight: '500' }}>
                    {timeLeft}
                  </span>
                </div>
              </div>

              <p className="text-center mb-4" style={{ color: '#2F2F2F', fontSize: '12px', opacity: 0.7 }}>
                {currentStep + 1} of {prompts.length}
              </p>

              <p className="text-center mb-6" style={{
                color: '#2F2F2F',
                fontSize: '20px',
                lineHeight: '1.5',
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
                End reset
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
              Start reset
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

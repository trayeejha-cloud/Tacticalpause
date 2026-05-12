import { useState, useEffect } from 'react';
import { ArrowLeft, Play, Hand } from 'lucide-react';

interface MoveTheUrgeProps {
  onComplete: () => void;
  onBack: () => void;
}

const prompts = [
  { text: "Roll your shoulders.", icon: "shoulders" },
  { text: "Stretch your hands.", icon: "hands" },
  { text: "Stand or walk if you can.", icon: "walk" },
  { text: "Shake out tension.", icon: "shake" }
];

const MovementIcon = ({ type }: { type: string }) => {
  switch (type) {
    case "shoulders":
      return (
        <svg width="100" height="100" viewBox="0 0 100 100">
          <g fill="none" stroke="#2F2F2F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Head */}
            <circle cx="50" cy="20" r="10" fill="#2F2F2F" />

            {/* Shoulders and upper body */}
            <path d="M 30 40 Q 40 35 50 35 Q 60 35 70 40" stroke="#2F2F2F" strokeWidth="3.2" />
            <path d="M 50 35 L 50 65" stroke="#2F2F2F" strokeWidth="3.2" />

            {/* Arms */}
            <path d="M 30 40 L 25 60" stroke="#2F2F2F" strokeWidth="3" />
            <path d="M 70 40 L 75 60" stroke="#2F2F2F" strokeWidth="3" />

            {/* Motion lines - animate up and down smoothly */}
            <path d="M 25 30 Q 30 26 35 30" className="animate-motion-left" stroke="#2F2F2F" strokeWidth="2.2" opacity="0.5" />
            <path d="M 65 30 Q 70 26 75 30" className="animate-motion-right" stroke="#2F2F2F" strokeWidth="2.2" opacity="0.5" />
          </g>
        </svg>
      );
    case "hands":
      return (
        <div className="animate-hand-shake">
          <Hand size={100} color="#2F2F2F" strokeWidth={2.5} />
        </div>
      );
    case "walk":
      return (
        <svg width="100" height="100" viewBox="0 0 100 100">
          <g fill="none" stroke="#2F2F2F" strokeWidth="2.8" strokeLinecap="round" className="animate-gentle-pulse">
            {/* Head */}
            <circle cx="50" cy="20" r="9" fill="#2F2F2F" />

            {/* Body */}
            <path d="M 50 29 L 50 55" stroke="#2F2F2F" strokeWidth="3.2" />

            {/* Arms */}
            <path d="M 50 38 L 38 50" stroke="#2F2F2F" strokeWidth="3" />
            <path d="M 50 38 L 62 50" stroke="#2F2F2F" strokeWidth="3" />

            {/* Legs */}
            <path d="M 50 55 L 45 80" stroke="#2F2F2F" strokeWidth="3" />
            <path d="M 50 55 L 55 80" stroke="#2F2F2F" strokeWidth="3" />
          </g>
        </svg>
      );
    case "shake":
      return (
        <svg width="100" height="100" viewBox="0 0 100 100">
          <g fill="none" stroke="#2F2F2F" strokeWidth="2.8" strokeLinecap="round">
            {/* Head */}
            <circle cx="50" cy="20" r="9" fill="#2F2F2F" className="animate-shake-gentle" />

            {/* Body */}
            <path d="M 50 29 L 50 55" stroke="#2F2F2F" strokeWidth="3.2" className="animate-shake-gentle" />

            {/* Arms */}
            <g className="animate-shake-arms-gentle">
              <path d="M 50 38 L 35 48" stroke="#2F2F2F" strokeWidth="3" />
              <path d="M 50 38 L 65 48" stroke="#2F2F2F" strokeWidth="3" />
            </g>

            {/* Legs */}
            <path d="M 50 55 L 45 80" stroke="#2F2F2F" strokeWidth="3" className="animate-shake-gentle" />
            <path d="M 50 55 L 55 80" stroke="#2F2F2F" strokeWidth="3" className="animate-shake-gentle" />

            {/* Subtle motion lines */}
            <path d="M 30 38 L 28 40" stroke="#2F2F2F" strokeWidth="2" opacity="0.35" className="animate-motion-line-left" />
            <path d="M 70 38 L 72 40" stroke="#2F2F2F" strokeWidth="2" opacity="0.35" className="animate-motion-line-right" />
          </g>
        </svg>
      );
    default:
      return null;
  }
};

export function MoveTheUrge({ onComplete, onBack }: MoveTheUrgeProps) {
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
      <style>{`
        @keyframes motion-float {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(-5px); opacity: 0.7; }
        }
        @keyframes hand-shake {
          0%, 100% { transform: rotate(0deg); }
          10% { transform: rotate(-8deg); }
          20% { transform: rotate(8deg); }
          30% { transform: rotate(-8deg); }
          40% { transform: rotate(8deg); }
          50% { transform: rotate(0deg); }
        }
        @keyframes gentle-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.85; transform: scale(0.98); }
        }
        @keyframes shake-gentle {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-1px); }
          75% { transform: translateX(1px); }
        }
        @keyframes shake-arms-gentle {
          0%, 100% { transform: translateY(0) translateX(0); }
          33% { transform: translateY(-1px) translateX(-0.5px); }
          66% { transform: translateY(1px) translateX(0.5px); }
        }
        @keyframes motion-line {
          0%, 100% { opacity: 0.25; transform: translateY(0); }
          50% { opacity: 0.5; transform: translateY(-1px); }
        }
        .animate-motion-left { animation: motion-float 1.8s ease-in-out infinite; }
        .animate-motion-right { animation: motion-float 1.8s ease-in-out infinite 0.4s; }
        .animate-hand-shake { animation: hand-shake 2s ease-in-out infinite; transform-origin: center bottom; }
        .animate-gentle-pulse { animation: gentle-pulse 1s ease-in-out infinite; transform-origin: 50px 50px; }
        .animate-shake-gentle { animation: shake-gentle 0.5s ease-in-out infinite; }
        .animate-shake-arms-gentle { animation: shake-arms-gentle 0.5s ease-in-out infinite; }
        .animate-motion-line-left { animation: motion-line 0.5s ease-in-out infinite; }
        .animate-motion-line-right { animation: motion-line 0.5s ease-in-out infinite 0.25s; }
      `}</style>
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
          Move the Urge
        </h2>

        <p className="mb-8 text-center" style={{ color: '#2F2F2F', fontSize: '16px', opacity: 0.9 }}>
          Use your body to shift the feeling.
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
                {/* Movement illustration */}
                <div className="mb-4" style={{
                  opacity: isTransitioning ? 0 : 1,
                  transition: 'opacity 300ms ease-in-out'
                }}>
                  <MovementIcon type={prompts[currentStep].icon} />
                </div>

                {/* Timer */}
                <div className="relative flex items-center justify-center" style={{ width: '100px', height: '100px' }}>
                  <div
                    className="absolute rounded-full"
                    style={{
                      width: '100px',
                      height: '100px',
                      backgroundColor: '#E4DFB5',
                      opacity: 0.2,
                      transform: `scale(${pulseScale})`,
                      transition: 'transform 0.3s ease-out'
                    }}
                  />

                  <div
                    className="rounded-full flex items-center justify-center"
                    style={{
                      width: '80px',
                      height: '80px',
                      backgroundColor: '#E4DFB5',
                      boxShadow: '0 4px 16px rgba(47, 47, 47, 0.1)'
                    }}
                  >
                    <span style={{ color: '#2F2F2F', fontSize: '28px', fontWeight: '500' }}>
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
                {prompts[currentStep].text}
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
              Start movement
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect } from 'react';
import { ArrowLeft, Play } from 'lucide-react';

interface RideTheUrgeWaveProps {
  onComplete: () => void;
  onBack: () => void;
}

const prompts = [
  "Notice where the urge is in your body.",
  "Picture it rising and falling like a wave.",
  "Take one breath before deciding."
];

export function RideTheUrgeWave({ onComplete, onBack }: RideTheUrgeWaveProps) {
  const [isActive, setIsActive] = useState(false);
  const [currentPrompt, setCurrentPrompt] = useState(0);
  const [timeLeft, setTimeLeft] = useState(90);
  const [waveOffset, setWaveOffset] = useState(0);
  const [surferY, setSurferY] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Wave animation - smooth continuous movement with seamless looping
  useEffect(() => {
    if (!isActive) return;

    let animationFrame: number;
    const animate = () => {
      setWaveOffset((prev) => (prev + 0.8) % 200);

      // Smooth sinusoidal movement for surfer - 60 BPM rhythm
      const time = Date.now() / 1000;
      const yPosition = Math.sin(time * 1) * 20;
      setSurferY(yPosition);

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isActive]);

  // Timer countdown
  useEffect(() => {
    if (!isActive) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsActive(false);
          setTimeout(() => onComplete(), 500);
          return 0;
        }

        // Change prompts at 60 and 30 seconds remaining with smooth transition
        if (prev === 60) {
          setIsTransitioning(true);
          setTimeout(() => {
            setCurrentPrompt(1);
            setIsTransitioning(false);
          }, 300);
        }
        if (prev === 30) {
          setIsTransitioning(true);
          setTimeout(() => {
            setCurrentPrompt(2);
            setIsTransitioning(false);
          }, 300);
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, onComplete]);

  const handleStart = () => {
    setIsActive(true);
    setCurrentPrompt(0);
    setTimeLeft(90);
  };

  const handleEnd = () => {
    setIsActive(false);
    setCurrentPrompt(0);
    setTimeLeft(90);
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
          Ride the Urge Wave
        </h2>

        <p className="mb-8 text-center" style={{ color: '#2F2F2F', fontSize: '16px', opacity: 0.9 }}>
          Watch the urge rise, peak, and pass.
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
              {/* Wave and surfer visualization */}
              <div className="mb-6 relative" style={{ width: '100%', maxWidth: '400px', height: '180px' }}>
                {/* Wave - seamless continuous animation */}
                <svg width="100%" height="180" viewBox="0 0 400 180" style={{ position: 'absolute', top: 0, left: 0, overflow: 'hidden' }}>
                  <defs>
                    <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#E4DFB5" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#C3CC9B" stopOpacity="0.4" />
                    </linearGradient>
                  </defs>
                  {/* Seamless continuous wave using repeating sine pattern */}
                  <path
                    d={`M -200,90 ${Array.from({ length: 80 }, (_, i) => {
                      const x = (i * 10) - 200 + (waveOffset % 200);
                      const y = 90 + Math.sin(x * 0.03) * 22;
                      return `L ${x},${y}`;
                    }).join(' ')} L 800,180 L -200,180 Z`}
                    fill="url(#waveGradient)"
                  />
                  {/* Second wave layer for depth */}
                  <path
                    d={`M -200,95 ${Array.from({ length: 80 }, (_, i) => {
                      const x = (i * 10) - 200 + (waveOffset % 200);
                      const y = 95 + Math.sin((x * 0.03) + 1.5) * 18;
                      return `L ${x},${y}`;
                    }).join(' ')} L 800,180 L -200,180 Z`}
                    fill="url(#waveGradient)"
                    opacity="0.4"
                  />
                </svg>

                {/* Surfer silhouette - refined to match reference */}
                <div
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: `${90 + surferY}px`,
                    transform: 'translate(-50%, -50%)',
                    transition: 'none'
                  }}
                >
                  <svg width="65" height="65" viewBox="0 0 130 130" style={{ filter: 'drop-shadow(0 2px 4px rgba(47, 47, 47, 0.15))' }}>
                    <g fill="none" stroke="#2F2F2F" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                      {/* Surfboard */}
                      <ellipse cx="65" cy="100" rx="50" ry="5" fill="#2F2F2F" opacity="0.65" />

                      {/* Head */}
                      <circle cx="58" cy="38" r="9" fill="#2F2F2F" />

                      {/* Body - leaning forward naturally */}
                      <path d="M 58 47 Q 62 60 65 72" stroke="#2F2F2F" strokeWidth="3.2" />

                      {/* Front arm - extended forward for balance */}
                      <path d="M 58 52 Q 48 54 32 52" stroke="#2F2F2F" strokeWidth="3" />

                      {/* Back arm - angled downward/back */}
                      <path d="M 62 54 Q 72 62 78 70" stroke="#2F2F2F" strokeWidth="3" />

                      {/* Front leg - bent knee, natural stance */}
                      <path d="M 63 72 Q 56 84 52 94 L 52 98" stroke="#2F2F2F" strokeWidth="3" />

                      {/* Back leg - bent knee, planted firmly */}
                      <path d="M 67 72 Q 74 84 78 94 L 78 98" stroke="#2F2F2F" strokeWidth="3" />
                    </g>
                  </svg>
                </div>
              </div>

              <p className="text-center mb-4" style={{ color: '#2F2F2F', fontSize: '14px', opacity: 0.7 }}>
                {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
              </p>

              <p className="text-center mb-6 px-4" style={{
                color: '#2F2F2F',
                fontSize: '20px',
                lineHeight: '1.5',
                minHeight: '60px',
                opacity: isTransitioning ? 0 : 1,
                transition: 'opacity 300ms ease-in-out'
              }}>
                {prompts[currentPrompt]}
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
              Start wave
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

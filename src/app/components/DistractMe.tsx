import { useState, useEffect } from 'react';
import { ArrowLeft, Play } from 'lucide-react';

interface DistractMeProps {
  onComplete: () => void;
  onBack: () => void;
}

export function DistractMe({ onComplete, onBack }: DistractMeProps) {
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isPulsing, setIsPulsing] = useState(false);
  const [tapCount, setTapCount] = useState(0);

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
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, onComplete]);

  const handleStart = () => {
    setIsActive(true);
    setTimeLeft(60);
    setTapCount(0);
  };

  const handleEnd = () => {
    setIsActive(false);
    setTimeLeft(60);
    setTapCount(0);
  };

  const handleTap = () => {
    if (isActive) {
      setTapCount((prev) => prev + 1);

      // Trigger pulse on tap
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 300);
    }
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
          Distract Me
        </h2>

        <p className="mb-8 text-center" style={{ color: '#2F2F2F', fontSize: '16px', opacity: 0.9 }}>
          Give the urge somewhere else to go.
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
              <p className="text-center mb-6" style={{ color: '#2F2F2F', fontSize: '16px' }}>
                Tap the circle to create a rhythm.
              </p>

              <button
                onClick={handleTap}
                className="mb-6 rounded-full transition-all duration-300"
                style={{
                  width: '160px',
                  height: '160px',
                  backgroundColor: '#E4DFB5',
                  border: 'none',
                  cursor: 'pointer',
                  transform: isPulsing ? 'scale(1.1)' : 'scale(1)',
                  boxShadow: isPulsing ? '0 0 30px rgba(228, 223, 181, 0.6)' : '0 4px 16px rgba(47, 47, 47, 0.1)'
                }}
                aria-label="Tap to distract"
              />

              <p className="text-center mb-4" style={{ color: '#2F2F2F', fontSize: '14px', opacity: 0.7 }}>
                {timeLeft}s remaining
              </p>

              <p className="text-center mb-6" style={{ color: '#2F2F2F', fontSize: '12px', opacity: 0.6 }}>
                Taps: {tapCount}
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
              Start distraction
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect } from 'react';
import { ArrowLeft, Play } from 'lucide-react';

interface BreathingTimerProps {
  onComplete: () => void;
  onBack: () => void;
}

type Phase = 'inhale' | 'hold' | 'exhale';

const PHASE_DURATIONS = {
  inhale: 4,
  hold: 7,
  exhale: 8
};

const TOTAL_CYCLES = 4;

export function BreathingTimer({ onComplete, onBack }: BreathingTimerProps) {
  const [isActive, setIsActive] = useState(false);
  const [currentCycle, setCurrentCycle] = useState(1);
  const [currentPhase, setCurrentPhase] = useState<Phase>('inhale');
  const [timeLeft, setTimeLeft] = useState(PHASE_DURATIONS.inhale);
  const [pulseScale, setPulseScale] = useState(1);
  const [isInitializing, setIsInitializing] = useState(false);

  // 60 BPM pulse effect (once per second)
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
          // Move to next phase
          if (currentPhase === 'inhale') {
            setCurrentPhase('hold');
            return PHASE_DURATIONS.hold;
          } else if (currentPhase === 'hold') {
            setCurrentPhase('exhale');
            return PHASE_DURATIONS.exhale;
          } else {
            // End of exhale - move to next cycle or complete
            if (currentCycle < TOTAL_CYCLES) {
              setCurrentCycle((c) => c + 1);
              setCurrentPhase('inhale');
              return PHASE_DURATIONS.inhale;
            } else {
              setIsActive(false);
              setTimeout(() => onComplete(), 500);
              return 0;
            }
          }
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, currentPhase, currentCycle, onComplete]);

  const handleStart = () => {
    setIsInitializing(true);
    setCurrentCycle(1);
    setCurrentPhase('inhale');
    setTimeLeft(PHASE_DURATIONS.inhale);

    // Small delay to ensure the transition happens smoothly from scale 1 to 1.4
    setTimeout(() => {
      setIsActive(true);
      setIsInitializing(false);
    }, 50);
  };

  const handleEnd = () => {
    setIsActive(false);
    setIsInitializing(false);
    setCurrentCycle(1);
    setCurrentPhase('inhale');
    setTimeLeft(PHASE_DURATIONS.inhale);
  };

  const getPhaseText = () => {
    if (currentPhase === 'inhale') return 'Inhale';
    if (currentPhase === 'hold') return 'Hold';
    return 'Exhale';
  };

  const getCircleScale = () => {
    if (!isActive) return 1;
    if (currentPhase === 'inhale') return 1.4;
    if (currentPhase === 'hold') return 1.4;
    return 1;
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
          4-7-8 Breathing
        </h2>

        <p className="mb-8 text-center" style={{ color: '#2F2F2F', fontSize: '16px', opacity: 0.9 }}>
          Follow the rhythm. No need to force it.
        </p>

        <div
          className="flex flex-col items-center p-10 rounded-3xl mb-6 text-center"
          style={{
            backgroundColor: '#C3CC9B',
            boxShadow: '0 4px 16px rgba(47, 47, 47, 0.08)',
            overflow: 'hidden'
          }}
        >
          {(isActive || isInitializing) ? (
            <>
              <div className="mb-8 flex items-center justify-center relative" style={{ width: '240px', height: '240px' }}>
                {/* Pulse ring - contained within bounds */}
                <div
                  className="absolute rounded-full"
                  style={{
                    width: '200px',
                    height: '200px',
                    backgroundColor: '#E4DFB5',
                    opacity: 0.2,
                    transform: `scale(${pulseScale})`,
                    transition: 'transform 0.3s ease-out',
                    left: '50%',
                    top: '50%',
                    marginLeft: '-100px',
                    marginTop: '-100px'
                  }}
                />

                {/* Breathing circle */}
                <div
                  className="absolute rounded-full flex items-center justify-center"
                  style={{
                    width: '120px',
                    height: '120px',
                    backgroundColor: '#E4DFB5',
                    transform: isInitializing ? 'scale(1)' : `scale(${getCircleScale()})`,
                    transition: isInitializing ? 'none' :
                                currentPhase === 'inhale' ? 'transform 4s ease-in-out' :
                                currentPhase === 'exhale' ? 'transform 8s ease-in-out' :
                                'transform 0.5s ease-in-out',
                    boxShadow: currentPhase === 'hold' ? '0 0 30px rgba(228, 223, 181, 0.6)' : '0 4px 16px rgba(47, 47, 47, 0.1)',
                    left: '50%',
                    top: '50%',
                    marginLeft: '-60px',
                    marginTop: '-60px'
                  }}
                >
                  <span style={{ color: '#2F2F2F', fontSize: '32px', fontWeight: '500' }}>
                    {timeLeft}
                  </span>
                </div>
              </div>

              <p className="text-center mb-2" style={{ color: '#2F2F2F', fontSize: '12px', opacity: 0.7 }}>
                Cycle {currentCycle} of {TOTAL_CYCLES}
              </p>

              <p className="text-center mb-6" style={{ color: '#2F2F2F', fontSize: '24px', fontWeight: '500' }}>
                {getPhaseText()}
              </p>

              <p className="text-center mb-4 px-4" style={{ color: '#2F2F2F', fontSize: '14px', opacity: 0.7, fontStyle: 'italic', maxWidth: '400px' }}>
                If holding your breath feels uncomfortable, shorten the hold or skip it.
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
              Start breathing
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

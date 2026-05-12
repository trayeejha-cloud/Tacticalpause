import { ArrowLeft, Home, Grid, RotateCcw } from 'lucide-react';

interface FatigueReadyScreenProps {
  onReturnToService: () => void;
  onReturnToCheckIn: () => void;
  onRepeatReset: () => void;
  onBack: () => void;
}

export function FatigueReadyScreen({ onReturnToService, onReturnToCheckIn, onRepeatReset, onBack }: FatigueReadyScreenProps) {
  return (
    <div className="min-h-screen flex flex-col px-6 py-12" style={{ backgroundColor: '#9AB17A' }}>
      <button
        onClick={onBack}
        className="self-start mb-6 p-2 rounded-full transition-all duration-200 active:scale-95"
        style={{ color: '#2F2F2F' }}
        aria-label="Go back"
      >
        <ArrowLeft size={24} />
      </button>

      <div className="flex-1 flex flex-col max-w-2xl w-full mx-auto justify-center">
        <div
          className="flex flex-col items-center p-8 rounded-3xl"
          style={{
            backgroundColor: '#C3CC9B',
            boxShadow: '0 4px 16px rgba(47, 47, 47, 0.08)'
          }}
        >
          <h2 className="mb-6 text-center" style={{ color: '#2F2F2F', fontSize: '28px', fontWeight: '500', letterSpacing: '-0.02em' }}>
            One step is enough.
          </h2>

          <p className="mb-8 text-center" style={{ color: '#2F2F2F', fontSize: '16px', lineHeight: '1.6', opacity: 0.9 }}>
            You noticed your exhaustion instead of ignoring it. Take one breath, choose one support, and move forward gently.
          </p>

          <div className="w-full flex flex-col gap-3">
            <button
              onClick={onReturnToService}
              className="w-full px-6 py-4 rounded-2xl transition-all duration-200 active:scale-98 flex items-center justify-center gap-2"
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
              <Home size={20} />
              Return to service
            </button>

            <button
              onClick={onReturnToCheckIn}
              className="w-full px-6 py-4 rounded-2xl transition-all duration-200 active:scale-98 flex items-center justify-center gap-2"
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
              <Grid size={20} />
              Return to check-in
            </button>

            <button
              onClick={onRepeatReset}
              className="w-full px-6 py-4 rounded-2xl transition-all duration-200 active:scale-98 flex items-center justify-center gap-2"
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
              <RotateCcw size={20} />
              Do another fatigue reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

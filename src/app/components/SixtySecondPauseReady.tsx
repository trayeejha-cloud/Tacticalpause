import { ArrowLeft, Home, Grid, RotateCcw } from 'lucide-react';

interface SixtySecondPauseReadyProps {
  onReturnToService: () => void;
  onReturnToCheckIn: () => void;
  onRepeatPause: () => void;
  onBack: () => void;
}

export function SixtySecondPauseReady({ onReturnToService, onReturnToCheckIn, onRepeatPause, onBack }: SixtySecondPauseReadyProps) {
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
            You took a pause.
          </h2>

          <p className="mb-6 text-center" style={{ color: '#2F2F2F', fontSize: '16px', lineHeight: '1.6', opacity: 0.9 }}>
            One minute can be enough to interrupt the rush. Take one breath and return to the next moment.
          </p>

          <p className="mb-8 text-center" style={{ color: '#2F2F2F', fontSize: '14px', opacity: 0.8, fontStyle: 'italic' }}>
            That counted.
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
              onClick={onRepeatPause}
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
              Do another 60-second pause
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

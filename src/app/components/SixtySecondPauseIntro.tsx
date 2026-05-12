import { ArrowLeft, Timer, Grid } from 'lucide-react';

interface SixtySecondPauseIntroProps {
  onStartPause: () => void;
  onReturnToCheckIn: () => void;
  onBack: () => void;
}

export function SixtySecondPauseIntro({ onStartPause, onReturnToCheckIn, onBack }: SixtySecondPauseIntroProps) {
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
          className="flex flex-col items-center p-8 rounded-3xl mb-6"
          style={{
            backgroundColor: '#C3CC9B',
            boxShadow: '0 4px 16px rgba(47, 47, 47, 0.08)'
          }}
        >
          <h2 className="mb-3 text-center" style={{ color: '#2F2F2F', fontSize: '28px', fontWeight: '500', letterSpacing: '-0.02em' }}>
            60-Second Pause
          </h2>

          <p className="mb-6 text-center" style={{ color: '#2F2F2F', fontSize: '18px', opacity: 0.9 }}>
            No check-in needed. Just take one minute.
          </p>

          <p className="mb-8 text-center" style={{ color: '#2F2F2F', fontSize: '16px', lineHeight: '1.6', opacity: 0.85 }}>
            Follow four simple prompts to steady your body and return to the present.
          </p>

          <div className="w-full flex flex-col gap-3">
            <button
              onClick={onStartPause}
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
              <Timer size={20} />
              Start 60-second pause
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
          </div>
        </div>
      </div>
    </div>
  );
}

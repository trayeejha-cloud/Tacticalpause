import { ArrowLeft, Circle, List } from 'lucide-react';

interface BreathingResetIntroProps {
  onStartReset: () => void;
  onChooseAnother: () => void;
  onBack: () => void;
}

export function BreathingResetIntro({ onStartReset, onChooseAnother, onBack }: BreathingResetIntroProps) {
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
          className="flex flex-col p-8 rounded-3xl text-center"
          style={{
            backgroundColor: '#C3CC9B',
            boxShadow: '0 4px 16px rgba(47, 47, 47, 0.08)'
          }}
        >
          <h1 className="mb-4" style={{ color: '#2F2F2F', fontSize: '32px', fontWeight: '500', letterSpacing: '-0.02em' }}>
            Breathing Reset
          </h1>

          <p className="mb-6" style={{ color: '#2F2F2F', fontSize: '18px', lineHeight: '1.6' }}>
            Let's slow things down for a moment.
          </p>

          <p className="mb-4" style={{ color: '#2F2F2F', fontSize: '16px', lineHeight: '1.6', opacity: 0.9 }}>
            Try a calming 4-7-8 rhythm: inhale, hold, then exhale slowly.
          </p>

          <p className="mb-8" style={{ color: '#2F2F2F', fontSize: '14px', lineHeight: '1.6', opacity: 0.8, fontStyle: 'italic' }}>
            If holding your breath feels uncomfortable, shorten the hold or skip it.
          </p>

          <div className="flex flex-col gap-4">
            <button
              onClick={onStartReset}
              className="w-full px-6 py-5 rounded-2xl transition-all duration-200 active:scale-98 flex items-center justify-center gap-3"
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
              <Circle size={20} />
              Start 4-7-8 reset
            </button>

            <button
              onClick={onChooseAnother}
              className="w-full px-6 py-5 rounded-2xl transition-all duration-200 active:scale-98 flex items-center justify-center gap-3"
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
              <List size={20} />
              Choose another tool
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

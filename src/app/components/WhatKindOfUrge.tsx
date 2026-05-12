import { ArrowLeft } from 'lucide-react';

interface WhatKindOfUrgeProps {
  onUrgeTypeSelect: (urgeType: string) => void;
  onBack: () => void;
}

const urgeTypes = [
  { id: 'body', text: 'Body urge' },
  { id: 'stress', text: 'Stress urge' },
  { id: 'boredom', text: 'Boredom urge' },
  { id: 'habit', text: 'Habit urge' },
  { id: 'social', text: 'Social urge' },
  { id: 'not-sure', text: "I'm not sure" }
];

export function WhatKindOfUrge({ onUrgeTypeSelect, onBack }: WhatKindOfUrgeProps) {
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
          <h2 className="mb-3 text-center" style={{ color: '#2F2F2F', fontSize: '28px', fontWeight: '500', letterSpacing: '-0.02em' }}>
            What kind of urge is this?
          </h2>

          <p className="mb-8 text-center" style={{ color: '#2F2F2F', fontSize: '16px', opacity: 0.85 }}>
            Pick what feels closest.
          </p>

          <div className="w-full flex flex-col gap-3">
            {urgeTypes.map((urgeType) => (
              <button
                key={urgeType.id}
                onClick={() => onUrgeTypeSelect(urgeType.id)}
                className="w-full px-6 py-4 rounded-2xl transition-all duration-200 active:scale-98 text-center"
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
                {urgeType.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

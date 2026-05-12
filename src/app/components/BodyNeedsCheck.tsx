import { ArrowLeft, Droplet, Apple, Moon, Activity, Volume2, HelpCircle } from 'lucide-react';

interface BodyNeedsCheckProps {
  onNeedSelect: (need: string) => void;
  onBack: () => void;
}

const needs = [
  { id: 'water', text: 'Water', icon: Droplet },
  { id: 'food', text: 'Food', icon: Apple },
  { id: 'rest', text: 'Rest', icon: Moon },
  { id: 'movement', text: 'Movement', icon: Activity },
  { id: 'quiet', text: 'Quiet', icon: Volume2 },
  { id: 'not-sure', text: "I'm not sure", icon: HelpCircle }
];

export function BodyNeedsCheck({ onNeedSelect, onBack }: BodyNeedsCheckProps) {
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
            What does your body need most?
          </h2>

          <p className="mb-8 text-center" style={{ color: '#2F2F2F', fontSize: '16px', opacity: 0.85 }}>
            Pick one small support.
          </p>

          <div className="w-full flex flex-col gap-3">
            {needs.map((need) => {
              const Icon = need.icon;
              return (
                <button
                  key={need.id}
                  onClick={() => onNeedSelect(need.id)}
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
                  <Icon size={20} />
                  {need.text}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

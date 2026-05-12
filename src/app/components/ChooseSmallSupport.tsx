import { ArrowLeft, Droplet, Apple, Volume2, Activity, Moon, MessageCircle } from 'lucide-react';

interface ChooseSmallSupportProps {
  onSupportSelect: (support: string) => void;
  onBack: () => void;
}

const supports = [
  { id: 'water', text: 'Drink water', icon: Droplet },
  { id: 'food', text: 'Eat something if available', icon: Apple },
  { id: 'quiet', text: 'Take a quiet minute', icon: Volume2 },
  { id: 'move', text: 'Move gently', icon: Activity },
  { id: 'rest', text: 'Rest if possible', icon: Moon },
  { id: 'talk', text: 'Talk to someone', icon: MessageCircle }
];

export function ChooseSmallSupport({ onSupportSelect, onBack }: ChooseSmallSupportProps) {
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
            Choose one small support.
          </h2>

          <p className="mb-8 text-center" style={{ color: '#2F2F2F', fontSize: '16px', lineHeight: '1.6', opacity: 0.85 }}>
            You do not have to recover all at once. Start with one need.
          </p>

          <div className="w-full flex flex-col gap-3">
            {supports.map((support) => {
              const Icon = support.icon;
              return (
                <button
                  key={support.id}
                  onClick={() => onSupportSelect(support.id)}
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
                  {support.text}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

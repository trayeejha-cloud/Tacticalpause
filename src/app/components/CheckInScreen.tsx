import { ArrowLeft } from 'lucide-react';
import { AboutButton } from './AboutButton';

interface CheckInScreenProps {
  onFeelingSelect: (feeling: string) => void;
  onBack?: () => void;
  onAboutClick?: () => void;
}

const feelings = [
  { id: 1, text: "I'm stressed after a call" },
  { id: 2, text: "I need to focus" },
  { id: 3, text: "I'm feeling anxious" },
  { id: 4, text: "I'm having cravings" },
  { id: 5, text: "I'm exhausted" },
  { id: 6, text: "I just need a minute" },
];

export function CheckInScreen({ onFeelingSelect, onBack, onAboutClick }: CheckInScreenProps) {
  return (
    <div className="min-h-screen flex flex-col px-6 py-12" style={{ backgroundColor: '#9AB17A' }}>
      <div className="flex justify-between items-start mb-6">
        {onBack ? (
          <button
            onClick={onBack}
            className="p-2 rounded-full transition-all duration-200 active:scale-95"
            style={{ color: '#2F2F2F' }}
            aria-label="Go back"
          >
            <ArrowLeft size={24} />
          </button>
        ) : (
          <div />
        )}
        {onAboutClick && <AboutButton onClick={onAboutClick} />}
      </div>

      <div className="flex-1 flex flex-col max-w-2xl w-full mx-auto">
        <h2 className="mb-8 text-center" style={{ color: '#2F2F2F', fontSize: '28px', fontWeight: '500', letterSpacing: '-0.02em' }}>
          How are you feeling right now?
        </h2>

        <div className="flex-1 flex items-center">
          <div
            className="w-full p-6 rounded-3xl"
            style={{
              backgroundColor: '#C3CC9B',
              boxShadow: '0 4px 16px rgba(47, 47, 47, 0.08)'
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {feelings.map((feeling) => (
                <button
                  key={feeling.id}
                  onClick={() => onFeelingSelect(feeling.text)}
                  className="w-full px-6 py-5 rounded-2xl transition-all duration-200 active:scale-98"
                  style={{
                    backgroundColor: '#E4DFB5',
                    color: '#2F2F2F',
                    fontSize: '16px',
                    fontWeight: '400',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(47, 47, 47, 0.06)',
                    textAlign: 'center',
                    minHeight: '72px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {feeling.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

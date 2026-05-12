import { ArrowLeft } from 'lucide-react';

interface PostBreathCheckInProps {
  onFeelCalmer: () => void;
  onStillAnxious: () => void;
  onMoreGrounded: () => void;
  onNeedAnother: () => void;
  onBack: () => void;
}

const feelings = [
  { text: 'A little calmer', action: 'calmer' },
  { text: 'Still anxious', action: 'anxious' },
  { text: 'More grounded', action: 'grounded' },
  { text: 'I need another minute', action: 'another' }
];

export function PostBreathCheckIn({ onFeelCalmer, onStillAnxious, onMoreGrounded, onNeedAnother, onBack }: PostBreathCheckInProps) {
  const handleClick = (action: string) => {
    if (action === 'calmer') onFeelCalmer();
    else if (action === 'anxious') onStillAnxious();
    else if (action === 'grounded') onMoreGrounded();
    else if (action === 'another') onNeedAnother();
  };

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

      <div className="flex-1 flex flex-col max-w-2xl w-full mx-auto">
        <h2 className="mb-3 text-center" style={{ color: '#2F2F2F', fontSize: '28px', fontWeight: '500', letterSpacing: '-0.02em' }}>
          How do you feel now?
        </h2>

        <p className="mb-8 text-center" style={{ color: '#2F2F2F', fontSize: '16px', opacity: 0.9 }}>
          Pick what feels closest.
        </p>

        <div className="flex-1 flex items-center">
          <div
            className="w-full p-6 rounded-3xl text-center"
            style={{
              backgroundColor: '#C3CC9B',
              boxShadow: '0 4px 16px rgba(47, 47, 47, 0.08)'
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {feelings.map((feeling) => (
                <button
                  key={feeling.text}
                  onClick={() => handleClick(feeling.action)}
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

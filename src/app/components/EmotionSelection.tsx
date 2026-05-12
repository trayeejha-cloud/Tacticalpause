import { ArrowLeft } from 'lucide-react';

interface EmotionSelectionProps {
  onEmotionSelect: (emotion: string) => void;
  onBack: () => void;
}

const emotions = [
  'Stress',
  'Sadness',
  'Anger',
  'Guilt',
  'Numbness',
  'Overwhelm',
  "I'm okay"
];

export function EmotionSelection({ onEmotionSelect, onBack }: EmotionSelectionProps) {
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
          What are you carrying from that call?
        </h2>

        <p className="mb-8 text-center" style={{ color: '#2F2F2F', fontSize: '16px', opacity: 0.9 }}>
          Pick what feels closest. No need to explain.
        </p>

        <div className="flex-1 flex items-center">
          <div
            className="w-full p-6 rounded-3xl text-center"
            style={{
              backgroundColor: '#C3CC9B',
              boxShadow: '0 4px 16px rgba(47, 47, 47, 0.08)'
            }}
          >
            <div className="flex flex-wrap gap-3 justify-center">
              {emotions.map((emotion) => (
                <button
                  key={emotion}
                  onClick={() => onEmotionSelect(emotion)}
                  className="px-6 py-4 rounded-full transition-all duration-200 active:scale-95"
                  style={{
                    backgroundColor: '#E4DFB5',
                    color: '#2F2F2F',
                    fontSize: '16px',
                    fontWeight: '400',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(47, 47, 47, 0.06)',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {emotion}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

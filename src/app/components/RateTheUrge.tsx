import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

interface RateTheUrgeProps {
  onContinue: (rating: number) => void;
  onBack: () => void;
  title?: string;
}

export function RateTheUrge({ onContinue, onBack, title = "How strong is the urge?" }: RateTheUrgeProps) {
  const [rating, setRating] = useState<number>(5);

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
          <h2 className="mb-3" style={{ color: '#2F2F2F', fontSize: '28px', fontWeight: '500', letterSpacing: '-0.02em' }}>
            {title}
          </h2>

          <p className="mb-8" style={{ color: '#2F2F2F', fontSize: '16px', opacity: 0.9 }}>
            Rate it from 1 to 10.
          </p>

          <div className="mb-8 flex items-center justify-center gap-4 w-full px-4">
            <span style={{ color: '#2F2F2F', fontSize: '14px', opacity: 0.7, minWidth: '20px', textAlign: 'center' }}>1</span>
            <input
              type="range"
              min="1"
              max="10"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="flex-1"
              style={{
                accentColor: '#E4DFB5',
                height: '6px',
                maxWidth: '400px'
              }}
            />
            <span style={{ color: '#2F2F2F', fontSize: '14px', opacity: 0.7, minWidth: '20px', textAlign: 'center' }}>10</span>
          </div>

          <p className="mb-8" style={{ color: '#2F2F2F', fontSize: '48px', fontWeight: '500' }}>
            {rating}
          </p>

          <button
            onClick={() => onContinue(rating)}
            className="w-full px-6 py-5 rounded-2xl transition-all duration-200 active:scale-98"
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
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

import { Pause } from 'lucide-react';

interface WelcomeScreenProps {
  onPauseClick: () => void;
}

export function WelcomeScreen({ onPauseClick }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12" style={{ backgroundColor: '#9AB17A' }}>
      <h1 className="mb-16 text-center" style={{ color: '#2F2F2F', fontSize: '32px', fontWeight: '500', letterSpacing: '-0.02em' }}>
        Let's Hit Pause
      </h1>

      <button
        onClick={onPauseClick}
        className="relative flex items-center justify-center transition-all duration-300 active:scale-95"
        style={{
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #E4DFB5 0%, #C3CC9B 100%)',
          boxShadow: '0 8px 24px rgba(47, 47, 47, 0.12), 0 2px 8px rgba(47, 47, 47, 0.08)',
          border: 'none',
          cursor: 'pointer'
        }}
        aria-label="Pause and check in"
      >
        <Pause size={72} strokeWidth={1.5} style={{ color: '#2F2F2F' }} />
      </button>
    </div>
  );
}

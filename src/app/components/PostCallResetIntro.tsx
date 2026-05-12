import { Check, AlertCircle, ArrowLeft } from 'lucide-react';
import { AboutButton } from './AboutButton';

interface PostCallResetIntroProps {
  onSafe: () => void;
  onNeedHelp: () => void;
  onBack: () => void;
  onAboutClick?: () => void;
}

export function PostCallResetIntro({ onSafe, onNeedHelp, onBack, onAboutClick }: PostCallResetIntroProps) {
  return (
    <div className="min-h-screen flex flex-col px-6 py-12" style={{ backgroundColor: '#9AB17A' }}>
      <div className="flex justify-between items-start mb-6">
        <button
          onClick={onBack}
          className="p-2 rounded-full transition-all duration-200 active:scale-95"
          style={{ color: '#2F2F2F' }}
          aria-label="Go back"
        >
          <ArrowLeft size={24} />
        </button>
        {onAboutClick && <AboutButton onClick={onAboutClick} />}
      </div>

      <div className="flex-1 flex flex-col max-w-2xl w-full mx-auto">
        <div
          className="flex flex-col p-8 rounded-3xl text-center"
          style={{
            backgroundColor: '#C3CC9B',
            boxShadow: '0 4px 16px rgba(47, 47, 47, 0.08)'
          }}
        >
          <h1 className="mb-4" style={{ color: '#2F2F2F', fontSize: '32px', fontWeight: '500', letterSpacing: '-0.02em' }}>
            Post-Call Reset
          </h1>

          <p className="mb-8" style={{ color: '#2F2F2F', fontSize: '16px', lineHeight: '1.6', opacity: 0.9 }}>
            You do not have to process the whole call right now. Let's steady your body and choose one next step.
          </p>

          <p className="mb-6" style={{ color: '#2F2F2F', fontSize: '18px', fontWeight: '500' }}>
            Are you physically safe right now?
          </p>

          <div className="flex flex-col gap-4">
            <button
              onClick={onSafe}
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
              <Check size={20} />
              Yes
            </button>

            <button
              onClick={onNeedHelp}
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
              <AlertCircle size={20} />
              I need help
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

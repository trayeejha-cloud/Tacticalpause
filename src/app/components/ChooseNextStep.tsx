import { ArrowLeft, RefreshCw, FileText, MessageCircle, Home } from 'lucide-react';

interface ChooseNextStepProps {
  onRepeatReset: () => void;
  onReflect: () => void;
  onPeerSupport: () => void;
  onReturnToService: () => void;
  onBack: () => void;
}

export function ChooseNextStep({ onRepeatReset, onReflect, onPeerSupport, onReturnToService, onBack }: ChooseNextStepProps) {
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
        <h2 className="mb-8 text-center" style={{ color: '#2F2F2F', fontSize: '28px', fontWeight: '500', letterSpacing: '-0.02em' }}>
          What do you need before the next call?
        </h2>

        <div
          className="flex flex-col p-6 rounded-3xl text-center"
          style={{
            backgroundColor: '#C3CC9B',
            boxShadow: '0 4px 16px rgba(47, 47, 47, 0.08)'
          }}
        >
          <div className="flex flex-col gap-4">
            <button
              onClick={onRepeatReset}
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
              <RefreshCw size={20} />
              Do another grounding reset
            </button>

            <button
              onClick={onReflect}
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
              <FileText size={20} />
              Reflect privately
            </button>

            <button
              onClick={onPeerSupport}
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
              <MessageCircle size={20} />
              Talk to a peer
            </button>

            <button
              onClick={onReturnToService}
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
              <Home size={20} />
              I am ready to return to service
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

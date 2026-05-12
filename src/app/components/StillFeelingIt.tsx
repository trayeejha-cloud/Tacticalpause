import { ArrowLeft, RefreshCw, Hand, MessageCircle, List, Home } from 'lucide-react';

interface StillFeelingItProps {
  onRepeatBreathing: () => void;
  onTryGrounding: () => void;
  onTalkToPeer: () => void;
  onReturnToCheckIn: () => void;
  onReturnToService: () => void;
  onBack: () => void;
}

export function StillFeelingIt({
  onRepeatBreathing,
  onTryGrounding,
  onTalkToPeer,
  onReturnToCheckIn,
  onReturnToService,
  onBack
}: StillFeelingItProps) {
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
          className="flex flex-col p-8 rounded-3xl mb-6 text-center"
          style={{
            backgroundColor: '#C3CC9B',
            boxShadow: '0 4px 16px rgba(47, 47, 47, 0.08)'
          }}
        >
          <h1 className="mb-6" style={{ color: '#2F2F2F', fontSize: '32px', fontWeight: '500', letterSpacing: '-0.02em' }}>
            Still feeling it?
          </h1>

          <p style={{ color: '#2F2F2F', fontSize: '16px', lineHeight: '1.6' }}>
            That's okay. Anxiety does not have to disappear for you to keep moving. Choose one small support.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <button
            onClick={onRepeatBreathing}
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
            Do another breathing reset
          </button>

          <button
            onClick={onTryGrounding}
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
            <Hand size={20} />
            Try grounding instead
          </button>

          <button
            onClick={onTalkToPeer}
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
            onClick={onReturnToCheckIn}
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
            <List size={20} />
            Return to check-in
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
            Return to service
          </button>
        </div>
      </div>
    </div>
  );
}

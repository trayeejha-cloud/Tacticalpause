import { ArrowLeft, Waves, Zap, Circle, Wind, MessageCircle, List } from 'lucide-react';

interface ChooseSupportToolProps {
  onRideWave: () => void;
  onMove: () => void;
  onDistract: () => void;
  onBreathing: () => void;
  onPeerSupport: () => void;
  onReturnToCheckIn: () => void;
  onBack: () => void;
}

export function ChooseSupportTool({
  onRideWave,
  onMove,
  onDistract,
  onBreathing,
  onPeerSupport,
  onReturnToCheckIn,
  onBack
}: ChooseSupportToolProps) {
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
        <h2 className="mb-3 text-center" style={{ color: '#2F2F2F', fontSize: '28px', fontWeight: '500', letterSpacing: '-0.02em' }}>
          What do you want to try first?
        </h2>

        <p className="mb-8 text-center" style={{ color: '#2F2F2F', fontSize: '16px', opacity: 0.9 }}>
          Pick one small pause.
        </p>

        <div
          className="w-full p-6 rounded-3xl text-center"
          style={{
            backgroundColor: '#C3CC9B',
            boxShadow: '0 4px 16px rgba(47, 47, 47, 0.08)'
          }}
        >
          <div className="flex flex-col gap-4">
            <button
              onClick={onRideWave}
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
              <Waves size={20} />
              Ride the urge wave
            </button>

            <button
              onClick={onMove}
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
              <Zap size={20} />
              Move for 60 seconds
            </button>

            <button
              onClick={onDistract}
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
              <Circle size={20} />
              Distract me
            </button>

            <button
              onClick={onBreathing}
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
              <Wind size={20} />
              Take a breathing reset
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
          </div>
        </div>
      </div>
    </div>
  );
}

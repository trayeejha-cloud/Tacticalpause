import { ArrowLeft, RotateCcw, Grid, Home } from 'lucide-react';

interface BodyNeedSupportCardProps {
  need: string;
  onTryReset: () => void;
  onChooseAnother: () => void;
  onReturnToCheckIn: () => void;
  onReturnToService: () => void;
  onBack: () => void;
}

const supportContent = {
  water: {
    title: "Start with water.",
    body: "Take a few sips if you can. Let your body register the pause."
  },
  food: {
    title: "Start with something steady.",
    body: "If food is available, choose something small and grounding. You do not have to do everything at once."
  },
  rest: {
    title: "Rest counts.",
    body: "Even a quiet moment can help your body come down from running on empty."
  },
  movement: {
    title: "Shift the heaviness.",
    body: "A small stretch, posture shift, or gentle movement can help your body feel more awake."
  },
  quiet: {
    title: "Lower the noise.",
    body: "Give your mind one quiet minute. Less stimulation can be a reset too."
  },
  'not-sure': {
    title: "Start simple.",
    body: "Try one breath, one sip of water, or one quiet moment. Small support still counts."
  }
};

export function BodyNeedSupportCard({
  need,
  onTryReset,
  onChooseAnother,
  onReturnToCheckIn,
  onReturnToService,
  onBack
}: BodyNeedSupportCardProps) {
  const content = supportContent[need as keyof typeof supportContent] || supportContent['not-sure'];

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
          className="flex flex-col items-center p-8 rounded-3xl mb-6"
          style={{
            backgroundColor: '#C3CC9B',
            boxShadow: '0 4px 16px rgba(47, 47, 47, 0.08)'
          }}
        >
          <h2 className="mb-6 text-center" style={{ color: '#2F2F2F', fontSize: '28px', fontWeight: '500', letterSpacing: '-0.02em' }}>
            {content.title}
          </h2>

          <p className="mb-8 text-center" style={{ color: '#2F2F2F', fontSize: '16px', lineHeight: '1.6', opacity: 0.9 }}>
            {content.body}
          </p>

          <div className="w-full flex flex-col gap-3">
            <button
              onClick={onTryReset}
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
              <RotateCcw size={20} />
              Try a micro-recovery reset
            </button>

            <button
              onClick={onChooseAnother}
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
              Choose another support
            </button>

            <button
              onClick={onReturnToCheckIn}
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
              <Grid size={20} />
              Return to check-in
            </button>

            <button
              onClick={onReturnToService}
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
              <Home size={20} />
              Return to service
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

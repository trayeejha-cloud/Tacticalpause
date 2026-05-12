import { ArrowLeft, List, Home } from 'lucide-react';

interface GetSupportNowProps {
  onReturnToOptions: () => void;
  onReturnToService: () => void;
  onBack: () => void;
}

export function GetSupportNow({ onReturnToOptions, onReturnToService, onBack }: GetSupportNowProps) {
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
            backgroundColor: '#FBE8CE',
            boxShadow: '0 4px 16px rgba(47, 47, 47, 0.08)'
          }}
        >
          <h1 className="mb-6" style={{ color: '#2F2F2F', fontSize: '32px', fontWeight: '500', letterSpacing: '-0.02em' }}>
            Get Support Now
          </h1>

          <p style={{ color: '#2F2F2F', fontSize: '16px', lineHeight: '1.6' }}>
            Move to a safe location if you can. Tell your partner, supervisor, or dispatch that you need help.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <button
            onClick={onReturnToOptions}
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
            Return to options
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

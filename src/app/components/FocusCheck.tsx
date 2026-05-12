import { ArrowLeft } from 'lucide-react';

interface FocusCheckProps {
  onFocusSelect: (focus: string) => void;
  onBack: () => void;
}

const focusAreas = [
  'Driving',
  'Charting',
  'Patient care',
  'Restocking',
  'Talking to someone',
  'Returning to service',
  'Something else'
];

export function FocusCheck({ onFocusSelect, onBack }: FocusCheckProps) {
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
          What needs your focus next?
        </h2>

        <p className="mb-8 text-center" style={{ color: '#2F2F2F', fontSize: '16px', opacity: 0.9 }}>
          Name it so your mind has one place to land.
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
              {focusAreas.map((area) => (
                <button
                  key={area}
                  onClick={() => onFocusSelect(area)}
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
                  {area}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

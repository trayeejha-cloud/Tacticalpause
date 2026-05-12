import { useState } from 'react';
import { ArrowLeft, Save, SkipForward, Trash2, List, Home } from 'lucide-react';

interface PrivateReflectionProps {
  onReturnToOptions: () => void;
  onReturnToService: () => void;
  onSkip: () => void;
  onBack: () => void;
}

export function PrivateReflection({ onReturnToOptions, onReturnToService, onSkip, onBack }: PrivateReflectionProps) {
  const [note, setNote] = useState('');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleDelete = () => {
    setNote('');
    setSaved(false);
  };

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
        <div
          className="flex flex-col p-8 rounded-3xl mb-6 text-center"
          style={{
            backgroundColor: '#C3CC9B',
            boxShadow: '0 4px 16px rgba(47, 47, 47, 0.08)'
          }}
        >
          <h1 className="mb-4" style={{ color: '#2F2F2F', fontSize: '32px', fontWeight: '500', letterSpacing: '-0.02em' }}>
            Private Reflection
          </h1>

          <p className="mb-6" style={{ color: '#2F2F2F', fontSize: '16px', lineHeight: '1.6', opacity: 0.9 }}>
            This is just for you. Your feelings are valid.
          </p>

          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Type a few words…"
            rows={6}
            className="w-full p-4 rounded-2xl resize-none mb-6"
            style={{
              backgroundColor: '#E4DFB5',
              color: '#2F2F2F',
              fontSize: '16px',
              border: 'none',
              outline: 'none',
              boxShadow: '0 2px 8px rgba(47, 47, 47, 0.06)'
            }}
          />

          {saved && (
            <p className="text-center mb-4" style={{ color: '#2F2F2F', fontSize: '14px', opacity: 0.8 }}>
              Note saved
            </p>
          )}

          <div className="flex flex-col gap-3 mb-6">
            <div className="flex gap-3">
              <button
                onClick={handleSave}
                className="flex-1 px-6 py-4 rounded-2xl transition-all duration-200 active:scale-98 flex items-center justify-center gap-2"
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
                <Save size={18} />
                Save note
              </button>

              <button
                onClick={handleDelete}
                className="flex-1 px-6 py-4 rounded-2xl transition-all duration-200 active:scale-98 flex items-center justify-center gap-2"
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
                <Trash2 size={18} />
                Delete note
              </button>
            </div>

            <button
              onClick={onSkip}
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
              <SkipForward size={18} />
              Skip
            </button>
          </div>
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

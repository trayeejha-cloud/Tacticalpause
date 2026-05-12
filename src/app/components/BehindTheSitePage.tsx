import { ArrowLeft, Home } from 'lucide-react';

interface BehindTheSitePageProps {
  onBack: () => void;
  onReturnToCheckIn: () => void;
}

export function BehindTheSitePage({ onBack, onReturnToCheckIn }: BehindTheSitePageProps) {
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

      <div className="flex-1 flex flex-col max-w-3xl w-full mx-auto">
        <h1 className="mb-8 text-center" style={{ color: '#2F2F2F', fontSize: '32px', fontWeight: '500', letterSpacing: '-0.02em' }}>
          Behind the Site
        </h1>

        <div
          className="p-8 rounded-3xl mb-6"
          style={{
            backgroundColor: '#C3CC9B',
            boxShadow: '0 4px 16px rgba(47, 47, 47, 0.08)'
          }}
        >
          <div style={{ color: '#2F2F2F', fontSize: '16px', lineHeight: '1.7' }}>
            <h2 className="mb-4 text-center" style={{ fontSize: '24px', fontWeight: '500' }}>
              Trayee Jha
            </h2>
            <p className="mb-6 text-center" style={{ fontSize: '16px', opacity: 0.85 }}>
              Rutgers University–New Brunswick | Genetics & Public Health | Pre-Med
            </p>

            <p className="mb-6">
              I am an undergraduate student in the Honors College at Rutgers University–New Brunswick, majoring in Genetics and Public Health on the pre-med track. My academic and professional interests lie at the intersection of medicine, public health, research, and technology—fields that share a commitment to improving human well-being through evidence-based innovation.
            </p>

            <p className="mb-6">
              Through my experiences as an EMT, student researcher, and public health student, I have come to recognize that high-stress environments affect not only the patients we serve, but also the providers who show up for them. Tactical Pause grew from that realization. It is a practical, accessible resource designed to help EMTs reset, regulate stress, and return to service with clarity and control—rather than simply pushing through until the next call.
            </p>

            <p className="mb-6">
              As I work toward pursuing an MD, I hope to contribute to a healthcare culture that values wellness for both patients and providers. Resilience in healthcare should not simply mean pushing through stress—it should mean having the tools and support to sustain yourself. Tactical Pause is one small step toward that vision: a commitment to accessible tools that help providers pause, reset, and sustain themselves.
            </p>

            <p className="mb-6">
              I believe that good healthcare requires a holistic approach—one that recognizes provider well-being as essential to ethical, effective, and compassionate care. This project is a reflection of that belief.
            </p>

            <div
              className="p-6 rounded-2xl"
              style={{
                backgroundColor: '#E4DFB5',
                boxShadow: '0 2px 8px rgba(47, 47, 47, 0.04)'
              }}
            >
              <p className="mb-2" style={{ fontSize: '16px', fontWeight: '500' }}>
                Learn More
              </p>
              <a
                href="https://sites.google.com/view/tactical-pause/home"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#2F2F2F', textDecoration: 'underline', fontSize: '16px' }}
              >
                Visit the full Tactical Pause site
              </a>
            </div>
          </div>
        </div>

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
          <Home size={20} />
          Return to Check-In
        </button>
      </div>
    </div>
  );
}

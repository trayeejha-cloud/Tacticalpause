import { ArrowLeft, Home } from 'lucide-react';

interface OriginPageProps {
  onBack: () => void;
  onReturnToCheckIn: () => void;
}

export function OriginPage({ onBack, onReturnToCheckIn }: OriginPageProps) {
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
          Origin
        </h1>

        <div
          className="p-8 rounded-3xl mb-6"
          style={{
            backgroundColor: '#C3CC9B',
            boxShadow: '0 4px 16px rgba(47, 47, 47, 0.08)'
          }}
        >
          <div style={{ color: '#2F2F2F', fontSize: '16px', lineHeight: '1.7' }}>
            <p className="mb-4">
              This project originated as part of undergraduate studies in the Department of Public Health at Rutgers University–New Brunswick. It was developed for the Principles of Health Education course.
            </p>

            <p className="mb-4">
              Tactical Pause emerged from the intersection of academic theory and Emergency Medical Technician experience. Working as an EMT in the high-density urban environment of New Brunswick, I observed a recurring pattern among young responders: a "stress-vaping cycle" in which nicotine became a functional but maladaptive tool to manage the pressures of back-to-back emergency dispatches.
            </p>

            <p className="mb-6">
              This research-driven proposal transforms classroom observations into a tangible, non-pharmacological resource library for first responders.
            </p>

            <h2 className="mb-4" style={{ fontSize: '20px', fontWeight: '500' }}>
              Resources
            </h2>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li className="mb-2">
                <a
                  href="https://docs.google.com/document/d/1nLne9D0ZRxoUgrzfWxrrMJyItjeYe_H8mkPpeRfE1BQ/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#2F2F2F', textDecoration: 'underline' }}
                >
                  Full project documentation (Google Docs)
                </a>
              </li>
              <li className="mb-2">Donnelly, E., & Siebert, D. (2009). Occupational risk factors in the emergency medical services. <em>Prehospital and Disaster Medicine, 24</em>(5), 422-429.</li>
              <li className="mb-2">Healthy People 2030. (2020). <em>Reduce current tobacco use in adults — TU‑01</em>. U.S. Department of Health and Human Services, Office of Disease Prevention and Health Promotion.</li>
              <li className="mb-2">Halpern, J., Gurevich, M., Schwartz, B., & Brazeau, P. (2009). What makes an incident critical for ambulance workers? Emotional outcomes and implications for intervention. <em>Work & Stress, 23</em>(2), 173-189.</li>
              <li>Sterud, T., Ekeberg, Ø., & Hem, E. (2006). Health status in the ambulance services: A systematic review. <em>BMC Health Services Research, 6</em>, 82.</li>
            </ul>
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

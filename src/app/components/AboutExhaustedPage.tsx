import { ArrowLeft, Home } from 'lucide-react';

interface AboutExhaustedPageProps {
  onBack: () => void;
  onReturnToCheckIn: () => void;
}

export function AboutExhaustedPage({ onBack, onReturnToCheckIn }: AboutExhaustedPageProps) {
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
          I'm Exhausted
        </h1>

        <div
          className="p-8 rounded-3xl mb-6"
          style={{
            backgroundColor: '#C3CC9B',
            boxShadow: '0 4px 16px rgba(47, 47, 47, 0.08)'
          }}
        >
          <div style={{ color: '#2F2F2F', fontSize: '16px', lineHeight: '1.7' }}>
            <h2 className="mb-3" style={{ fontSize: '22px', fontWeight: '500' }}>
              The Fatigue Check
            </h2>
            <p className="mb-6">
              This pathway is an evidence-informed behavioral intervention designed to facilitate somatic awareness and fatigue risk management among EMTs. Paramedics and EMTs face unique occupational hazards, including shift work, sleep deprivation, and the physical demands of emergency medical care. Research shows that fatigue among EMS personnel is associated with increased risk of vehicle crashes, decision-making errors, and compromised patient safety. Yet, the operational culture of emergency services often normalizes "pushing through" exhaustion, leaving little room for self-assessment or recovery.
            </p>

            <h2 className="mb-4" style={{ fontSize: '20px', fontWeight: '500' }}>
              Measuring and Monitoring Fatigue
            </h2>
            <p className="mb-6">
              Rather than focusing solely on timed resets, this module prioritizes identifying physical needs. It begins with a simple self-check: "How tired are you right now?" Users select from a 1-5 scale ranging from "A little tired" to "I do not feel okay." This mirrors clinical fatigue assessment tools (e.g., the Chalder Fatigue Scale) but avoids medicalized language, framing the check-in as a routine self-awareness exercise rather than a diagnostic screen.
            </p>

            <h3 className="mb-3" style={{ fontSize: '18px', fontWeight: '500' }}>
              Non-Clinical Check-In
            </h3>
            <p className="mb-5">
              By allowing users to quickly identify their fatigue state without extended reflection, the module reduces cognitive load and increases the likelihood of engagement. Research on self-monitoring interventions shows that brief, frequent assessments are more effective than infrequent, detailed evaluations—particularly in high-stress occupational settings where time and mental bandwidth are limited.
            </p>

            <h3 className="mb-3" style={{ fontSize: '18px', fontWeight: '500' }}>
              High-Fatigue Safety Cues
            </h3>
            <p className="mb-6">
              If a user selects the highest fatigue levels ("Struggling to stay alert" or "I do not feel okay"), the app displays a safety-oriented message: "If you feel unsafe, overly foggy, or unable to continue, reach out to your partner, supervisor, or someone nearby." This prompt respects professional autonomy while acknowledging the reality that severe fatigue can impair both provider safety and patient care. The language avoids alarm-based framing and instead positions help-seeking as a responsible, proactive choice.
            </p>

            <h2 className="mb-4" style={{ fontSize: '20px', fontWeight: '500' }}>
              Somatic Awareness and Body-Needs Identification
            </h2>
            <p className="mb-6">
              After the fatigue rating, users are prompted: "What does your body need most?" The options include: Water, Food, Rest, Movement, Quiet, or "I'm not sure." This question shifts the focus from abstract fatigue to tangible, actionable needs. Research on interoceptive awareness suggests that explicitly naming physiological states increases the likelihood of addressing them. By externalizing the need (selecting "Water" instead of vaguely feeling "off"), users can more easily take a small, concrete action.
            </p>

            <h3 className="mb-3" style={{ fontSize: '18px', fontWeight: '500' }}>
              Identifying Primary Needs
            </h3>
            <p className="mb-6">
              This body-needs prompt also serves an educational function. Many EMS personnel may not recognize dehydration, hunger, or musculoskeletal tension as contributors to mental fog or emotional dysregulation. By regularly engaging with this check-in, users may develop greater baseline awareness of how physiological states influence cognitive and emotional functioning.
            </p>

            <h2 className="mb-4" style={{ fontSize: '20px', fontWeight: '500' }}>
              Micro-Recovery Resets
            </h2>
            <p className="mb-5">
              After identifying a need, users receive a brief, tailored message (e.g., "Start with water. Take a few sips if you can") followed by an option to complete a 60-second Micro-Recovery Reset. This optional reset includes four short somatic prompts:
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              <li>"Unclench your jaw"</li>
              <li>"Drop your shoulders"</li>
              <li>"Take one slow breath"</li>
              <li>"Notice what your body needs next"</li>
            </ul>

            <div
              className="p-6 rounded-2xl mb-6"
              style={{
                backgroundColor: '#FBE8CE',
                boxShadow: '0 2px 8px rgba(47, 47, 47, 0.04)'
              }}
            >
              <p className="text-center" style={{ fontSize: '18px', fontStyle: 'italic', lineHeight: '1.6' }}>
                "You noticed your exhaustion instead of ignoring it. Take one breath, choose one support, and move forward gently."
              </p>
            </div>

            <p className="mb-6">
              This framing reframes fatigue awareness as an act of self-care and professional responsibility, countering the narrative that acknowledging tiredness is a sign of weakness.
            </p>

            <h2 className="mb-4" style={{ fontSize: '20px', fontWeight: '500' }}>
              Resources
            </h2>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li className="mb-2">Patterson, P. D., Weaver, M. D., Frank, R. C., Warner, C. W., Martin-Gill, C., Guyette, F. X., Fairbanks, R. J., Hubble, M. W., Songer, T. J., Callaway, C. W., & Kelsey, S. F. (2012). Association between poor sleep, fatigue, and safety outcomes in emergency medical services providers. <em>Prehospital Emergency Care, 16</em>(1), 86-97.</li>
              <li className="mb-2">Wolkow, A., Ferguson, S. A., Aisbett, B., & Main, L. C. (2015). Effects of work-related sleep restriction on acute physiological and psychological stress responses and their interactions: A review among emergency service personnel. <em>International Journal of Occupational Medicine and Environmental Health, 28</em>(2), 183-208.</li>
              <li>Ziebertz, C. M., van Hooff, M. L., Beckers, D. G., Hooftman, W. E., Kompier, M. A., & Geurts, S. A. (2015). The relationship of on-call work with fatigue, work-home interference, and perceived performance difficulties. <em>BioMed Research International, 2015</em>, Article 643413.</li>
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

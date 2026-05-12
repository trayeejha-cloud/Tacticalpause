import { ArrowLeft, Home } from 'lucide-react';

interface DesignPhilosophyPageProps {
  onBack: () => void;
  onReturnToCheckIn: () => void;
}

export function DesignPhilosophyPage({ onBack, onReturnToCheckIn }: DesignPhilosophyPageProps) {
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
          Design Philosophy
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
              The Tactical Pause Initiative: Programmatic and Design Philosophy
            </h2>
            <p className="mb-6">
              Tactical Pause is a mobile-responsive behavioral health intervention designed to disrupt the "stress-vaping cycle" among young emergency medical technicians. The app functions as an immediate, non-pharmacological reset space integrated into standard operating procedures. Instead of relying solely on nicotine or caffeine, the app provides breathing resets, focus tools, peer-support prompts, and dopamine reset mechanisms that help responders interrupt stress loops and build more sustainable internal coping mechanisms. This aligns with Healthy People 2030 objective TU-10, which seeks to reduce tobacco use in young adults by addressing both physiological dependence and environmental triggers.
            </p>

            <h2 className="mb-4" style={{ fontSize: '20px', fontWeight: '500' }}>
              Programmatic Function and Efficacy
            </h2>
            <p className="mb-6">
              The interventions within Tactical Pause are designed to address specific stressors unique to the EMS environment: post-call emotional dysregulation, decision fatigue, overstimulation, and nicotine dependence. Each module serves as a functional interruption of automatic stress behaviors, creating a moment of active choice before responders act on impulse. Rather than imposing behavioral restrictions, the platform offers replacement strategies informed by mindfulness-based stress reduction (MBSR), cognitive-behavioral interventions, and harm reduction frameworks.
            </p>

            <h2 className="mb-4" style={{ fontSize: '20px', fontWeight: '500' }}>
              Psychophysiological Benefits of Stylistic Choices
            </h2>
            <p className="mb-4">
              The visual and interactive design of Tactical Pause is intentionally shaped to promote psychophysiological stabilization. The color palette—restorative earth tones and desaturated greens—aligns with evidence from color psychology studies in health environments, which suggest that warm, muted tones reduce physiological arousal and support emotional grounding.
            </p>

            <h3 className="mb-3 mt-6" style={{ fontSize: '18px', fontWeight: '500' }}>
              Stress Reduction
            </h3>
            <p className="mb-5">
              Softer, nature-based color schemes have been shown to lower cortisol levels and reduce heart rate variability when compared to high-contrast, overstimulating designs. The minimalist interface, devoid of excessive notifications or urgent visual cues, helps prevent cognitive overload—a critical feature for users already experiencing decision fatigue.
            </p>

            <h3 className="mb-3" style={{ fontSize: '18px', fontWeight: '500' }}>
              Restorative Environment
            </h3>
            <p className="mb-5">
              The use of green and tan tones mirrors biophilic design principles, which are associated with improved recovery from stress and enhanced attention restoration. These elements subtly evoke outdoor, calming environments, reinforcing the "pause" metaphor in both function and form.
            </p>

            <h3 className="mb-3" style={{ fontSize: '18px', fontWeight: '500' }}>
              Grounding and Trust
            </h3>
            <p className="mb-6">
              Beyond aesthetics, Tactical Pause centers a non-clinical, peer-led approach to mental health check-ins. The interface avoids medicalizing language and emergency-style alerts, which can inadvertently reinforce stigma around help-seeking behaviors. Instead, the platform normalizes the need for emotional regulation within occupational settings, reinforcing that stress is a predictable, manageable response to high-intensity work—not a failure of individual resilience. This culturally competent framing is essential for engaging a population that often values self-reliance and may perceive formal mental health interventions as incompatible with professional identity.
            </p>

            <h2 className="mb-4" style={{ fontSize: '20px', fontWeight: '500' }}>
              Resources
            </h2>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li className="mb-2">Elliot, A. J., Maier, M. A., Moller, A. C., Friedman, R., & Meinhardt, J. (2007). Color and psychological functioning: The effect of red on performance attainment. <em>Journal of Experimental Psychology: General, 136</em>(1), 154-168.</li>
              <li className="mb-2">Gilchrist, K., Brown, C., & Montarzino, A. (2015). Workplace settings and wellbeing: Greenspace use and views contribute to employee wellbeing at peri-urban business sites. <em>Landscape and Urban Planning, 138</em>, 32-40.</li>
              <li className="mb-2">Kabat-Zinn, J. (2003). Mindfulness-based interventions in context: Past, present, and future. <em>Clinical Psychology: Science and Practice, 10</em>(2), 144-156.</li>
              <li>Ulrich, R. S. (1984). View through a window may influence recovery from surgery. <em>Science, 224</em>(4647), 420-421.</li>
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

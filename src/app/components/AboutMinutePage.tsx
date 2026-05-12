import { ArrowLeft, Home } from 'lucide-react';

interface AboutMinutePageProps {
  onBack: () => void;
  onReturnToCheckIn: () => void;
}

export function AboutMinutePage({ onBack, onReturnToCheckIn }: AboutMinutePageProps) {
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
          I Just Need a Minute
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
              The 60-Second Tactical Pause: A Rapid Attentional and Somatic Reset
            </h2>
            <p className="mb-6">
              This pathway is a rapid, low-effort intervention for EMTs experiencing cognitive overstimulation, emotional fatigue, or the pressurized rush of back-to-back emergency dispatches. Unlike other modules in Tactical Pause, the 60-Second Pause requires no self-labeling, no trigger identification, and no decision-making beyond pressing "start." This intentional simplicity addresses a critical barrier to engagement: in moments of acute overwhelm, even minimal cognitive tasks can feel insurmountable. By eliminating the requirement for reflection or categorization, this module reduces cognitive load and allows overwhelmed responders to engage with a reset without needing to first articulate why they need it.
            </p>

            <h2 className="mb-4" style={{ fontSize: '20px', fontWeight: '500' }}>
              The Efficacy of Brief Mindfulness
            </h2>
            <p className="mb-6">
              Research on micro-interventions shows that even 60-second mindfulness exercises can produce measurable reductions in physiological stress markers, including heart rate and cortisol levels. The brevity of the intervention is not a limitation but a strategic design feature—emergency responders often have only brief windows between calls, making extended mindfulness sessions impractical. A 60-second reset can be completed during a station standby, in an ambulance between dispatches, or during a quick transition period without requiring formal break time.
            </p>

            <h3 className="mb-3" style={{ fontSize: '18px', fontWeight: '500' }}>
              Attentional Reorientation
            </h3>
            <p className="mb-5">
              The module does not ask users to "clear their mind" or achieve a meditative state—expectations that can feel unattainable during acute stress. Instead, it offers four minimalist somatic prompts that anchor attention to the body:
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              <li>"Drop your shoulders"</li>
              <li>"Unclench your jaw"</li>
              <li>"Take one slow breath"</li>
              <li>"Notice the next moment"</li>
            </ul>

            <h3 className="mb-3" style={{ fontSize: '18px', fontWeight: '500' }}>
              Ecological Momentary Intervention (EMI)
            </h3>
            <p className="mb-6">
              This approach mirrors the principles of Ecological Momentary Intervention (EMI), a framework in health psychology that delivers real-time support at the point of need. Rather than requiring users to recall past stressors or plan future coping strategies, the 60-Second Pause operates entirely in the present tense, asking only: What does your body need right now?
            </p>

            <h2 className="mb-4" style={{ fontSize: '20px', fontWeight: '500' }}>
              Somatic De-escalation and Rhythmic Anchoring
            </h2>

            <h3 className="mb-3" style={{ fontSize: '18px', fontWeight: '500' }}>
              Targeting Tension
            </h3>
            <p className="mb-5">
              The prompts "Drop your shoulders" and "Unclench your jaw" specifically target common sites of stress-related muscular tension. Research on progressive muscle relaxation (PMR) shows that releasing tension in these areas can reduce overall sympathetic arousal and facilitate a shift toward parasympathetic dominance. These cues are deliberately simple and require no specialized training or anatomical knowledge—users need only notice and release.
            </p>

            <h3 className="mb-3" style={{ fontSize: '18px', fontWeight: '500' }}>
              Visual Pacing
            </h3>
            <p className="mb-6">
              The interface includes a 60 BPM visual pulse—a subtle rhythmic anchor that mimics a resting heart rate. This external pacing mechanism supports physiological entrainment, gently guiding the user's autonomic rhythm toward a calmer baseline without requiring conscious effort.
            </p>

            <div
              className="p-6 rounded-2xl mb-6"
              style={{
                backgroundColor: '#FBE8CE',
                boxShadow: '0 2px 8px rgba(47, 47, 47, 0.04)'
              }}
            >
              <p className="text-center" style={{ fontSize: '18px', fontStyle: 'italic', lineHeight: '1.6' }}>
                "You took a pause. One minute can be enough to interrupt the rush. Take one breath and return to the next moment."
              </p>
            </div>

            <p className="mb-6">
              This closing message reframes the intervention's success metric: the goal is not to eliminate stress or feel calm, but simply to pause. By validating the act of pausing itself—rather than evaluating its outcome—the module reduces performance pressure and reinforces the idea that brief interruptions of the stress cycle are inherently valuable, even if they do not produce immediate relief.
            </p>

            <h2 className="mb-4" style={{ fontSize: '20px', fontWeight: '500' }}>
              Resources
            </h2>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li className="mb-2">Heron, K. E., & Smyth, J. M. (2010). Ecological momentary interventions: Incorporating mobile technology into psychosocial and health behaviour treatments. <em>British Journal of Health Psychology, 15</em>(1), 1-39.</li>
              <li className="mb-2">Howarth, A., Smith, J. G., Perkins-Porras, L., & Ussher, M. (2019). Effects of brief mindfulness-based interventions on health-related outcomes: A systematic review. <em>Mindfulness, 10</em>(10), 1957-1968.</li>
              <li>Turcotte, K., Bergeron-Leclerc, C., & Beaulieu-Dubois, L. (2021). Brief mindfulness interventions for anxiety: A systematic review and meta-analysis. <em>Mindfulness, 12</em>(5), 1063-1081.</li>
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

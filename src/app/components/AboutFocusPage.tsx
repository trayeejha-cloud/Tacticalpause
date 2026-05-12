import { ArrowLeft, Home } from 'lucide-react';

interface AboutFocusPageProps {
  onBack: () => void;
  onReturnToCheckIn: () => void;
}

export function AboutFocusPage({ onBack, onReturnToCheckIn }: AboutFocusPageProps) {
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
          I Need to Focus
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
              The Cognitive Reset: A Framework for Attentional Reorientation and Stress Regulation
            </h2>
            <p className="mb-6">
              The Cognitive Reset pathway is an evidence-based digital intervention designed to mitigate mental fragmentation, overstimulation, and cognitive fog among EMTs. This module addresses the distinct challenge of "decision fatigue"—the degradation of cognitive control after sustained periods of high-acuity decision-making. Rather than offering productivity tools or operational checklists, the Cognitive Reset functions as a non-clinical landing zone, helping responders transition from a reactive, overstimulated state to a focused, task-oriented mindset.
            </p>

            <h2 className="mb-4" style={{ fontSize: '20px', fontWeight: '500' }}>
              Efficacy of Micro-Mindfulness
            </h2>
            <p className="mb-6">
              Research on brief mindfulness interventions shows that even short (60-second) attentional exercises can reduce cognitive interference and improve subsequent task performance. The Cognitive Reset integrates two core mechanisms: psychophysiological regulation through breathwork and attentional shifting through intentional focus identification.
            </p>

            <h2 className="mb-4" style={{ fontSize: '20px', fontWeight: '500' }}>
              Psychophysiological Regulation and Breathwork
            </h2>
            <p className="mb-6">
              Before directing attention toward a task, the module includes a brief somatic reset:
            </p>

            <h3 className="mb-3" style={{ fontSize: '18px', fontWeight: '500' }}>
              Autonomic Stabilization
            </h3>
            <p className="mb-5">
              Users are prompted to "Drop your shoulders" and "Unclench your jaw"—two common sites of tension during high-stress work. These directives reduce muscular bracing, which can perpetuate sympathetic arousal even after a stressor has passed.
            </p>

            <h3 className="mb-3" style={{ fontSize: '18px', fontWeight: '500' }}>
              Somatic Awareness
            </h3>
            <p className="mb-6">
              The prompt "Take one slow breath" functions as a brief heart rate variability (HRV) intervention. Controlled, paced breathing increases vagal tone, facilitating a shift from fight-or-flight to a more regulated baseline. This is particularly important for EMTs transitioning between high-acuity dispatches, as lingering sympathetic activation can impair fine motor control and decision-making accuracy.
            </p>

            <h2 className="mb-4" style={{ fontSize: '20px', fontWeight: '500' }}>
              Attentional Shifting and Self-Efficacy
            </h2>
            <p className="mb-6">
              After the somatic reset, the module asks the user to name a single attentional target: "What needs your focus next?" Users are presented with simple, occupation-specific options: "Driving," "Charting," "Patient care," "Restocking," "Returning to service." This naming process supports present-moment awareness without requiring extensive mental effort. By externalizing the cognitive task (selecting a button rather than generating a plan), the intervention reduces mental load while still orienting the user toward intentional action.
            </p>

            <div
              className="p-6 rounded-2xl mb-6"
              style={{
                backgroundColor: '#FBE8CE',
                boxShadow: '0 2px 8px rgba(47, 47, 47, 0.04)'
              }}
            >
              <p className="text-center" style={{ fontSize: '18px', fontStyle: 'italic', lineHeight: '1.6' }}>
                "One clear next step is enough. Take a breath, trust your training, and move forward one task at a time."
              </p>
            </div>

            <h2 className="mb-4" style={{ fontSize: '20px', fontWeight: '500' }}>
              "Cognitive Reset" Interface
            </h2>
            <p className="mb-6">
              The module concludes with affirmational language that reinforces professional self-efficacy: "One clear next step is enough. Take a breath, trust your training, and move forward one task at a time." This framing avoids performative productivity language and instead normalizes the iterative nature of emergency work. By validating incremental progress rather than demanding flawless execution, the intervention aligns with trauma-informed care principles that emphasize agency, non-judgment, and sustainable coping strategies.
            </p>

            <h2 className="mb-4" style={{ fontSize: '20px', fontWeight: '500' }}>
              Resources
            </h2>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li className="mb-2">Arch, J. J., & Craske, M. G. (2006). Mechanisms of mindfulness: Emotion regulation following a focused breathing induction. <em>Behaviour Research and Therapy, 44</em>(12), 1849-1858.</li>
              <li className="mb-2">Howarth, A., Smith, J. G., Perkins-Porras, L., & Ussher, M. (2019). Effects of brief mindfulness-based interventions on health-related outcomes: A systematic review. <em>Mindfulness, 10</em>(10), 1957-1968.</li>
              <li className="mb-2">Kabat-Zinn, J. (1990). <em>Full Catastrophe Living: Using the Wisdom of Your Body and Mind to Face Stress, Pain, and Illness</em>. Delacorte Press.</li>
              <li>Zeidan, F., Johnson, S. K., Diamond, B. J., David, Z., & Goolkasian, P. (2010). Mindfulness meditation improves cognition: Evidence of brief mental training. <em>Consciousness and Cognition, 19</em>(2), 597-605.</li>
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

import { ArrowLeft, Home } from 'lucide-react';

interface AboutStressedPageProps {
  onBack: () => void;
  onReturnToCheckIn: () => void;
}

export function AboutStressedPage({ onBack, onReturnToCheckIn }: AboutStressedPageProps) {
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
          I'm Stressed After a Call
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
              The Post-Call Reset: A Trauma-Informed Stabilization Framework
            </h2>
            <p className="mb-6">
              This module is an evidence-based digital pathway designed to facilitate psychophysiological stabilization for EMTs after high-acuity or distressing dispatches. The pathway prioritizes immediate regulation over event reconstruction and respects the limited downtime in urban EMS. Unlike formal critical incident stress debriefings (CISD), which can inadvertently retraumatize responders by requiring detailed event recounting, the Post-Call Reset focuses on present-moment reorientation and autonomic stabilization.
            </p>

            <h2 className="mb-4" style={{ fontSize: '20px', fontWeight: '500' }}>
              Prioritizing Stabilization Over Reconstruction
            </h2>
            <p className="mb-6">
              Tactical Pause intentionally avoids requiring users to relive or fully explain the event. Research on trauma processing shows that forced recollection in the absence of therapeutic containment can strengthen intrusive memory networks rather than reduce them. Instead, this module asks: "How are you feeling?" and offers affective labels such as "Overwhelmed," "Angry," or "Sad" — facilitating emotion identification without mandating disclosure. This aligns with the harm reduction principle of "meeting people where they are" rather than imposing a prescribed recovery timeline.
            </p>

            <h2 className="mb-4" style={{ fontSize: '20px', fontWeight: '500' }}>
              Clinical Alignment with Psychological First Aid (PFA)
            </h2>
            <p className="mb-6">
              The intervention structure mirrors the core principles of Psychological First Aid (PFA), which is endorsed by the National Child Traumatic Stress Network and widely used in disaster response settings. PFA emphasizes "Look, Listen, Link"—observing distress signals, validating emotional responses, and connecting individuals with appropriate resources. Tactical Pause adapts this methodology into a self-directed digital format by offering three sequential supports:
            </p>

            <h3 className="mb-3" style={{ fontSize: '18px', fontWeight: '500' }}>
              Safety Assessment
            </h3>
            <p className="mb-5">
              The user is prompted with: "Are you safe to continue?" This simple binary check serves as a self-assessment gate, ensuring that users in acute distress are guided toward peer or supervisory support rather than continuing the reset in isolation.
            </p>

            <h3 className="mb-3" style={{ fontSize: '18px', fontWeight: '500' }}>
              Affective Labeling
            </h3>
            <p className="mb-5">
              Research in emotion regulation shows that naming an emotion activates prefrontal cortex regions associated with cognitive control, dampening amygdala reactivity—a process known as "affect labeling." By selecting an emotion ("Overwhelmed," "Angry," "Numb"), the user engages in implicit emotion regulation without requiring extensive introspection.
            </p>

            <h3 className="mb-3" style={{ fontSize: '18px', fontWeight: '500' }}>
              Resource Linking
            </h3>
            <p className="mb-6">
              After naming the emotion, the user is directed to a grounding exercise, peer support prompt, or a brief reflective pause—each functioning as a behavioral anchor to prevent emotional rumination or impulsive coping (e.g., immediate nicotine use).
            </p>

            <h2 className="mb-4" style={{ fontSize: '20px', fontWeight: '500' }}>
              Grounding as a Tool for Present-Moment Reconnection
            </h2>
            <p className="mb-6">
              The grounding reset within this module uses the "5-4-3-2-1 technique," a widely validated sensory awareness exercise. Users are prompted to identify five things they can see, four they can touch, three they can hear, two they can smell, and one they can taste. This structured sensory engagement redirects attention from internal distress to external surroundings, interrupting the hyperarousal cycle and facilitating a return to baseline physiological functioning. Grounding exercises have been shown to reduce dissociative symptoms and improve cognitive clarity, making them particularly effective for first responders experiencing emotional numbing or hypervigilance after traumatic exposures.
            </p>

            <h2 className="mb-4" style={{ fontSize: '20px', fontWeight: '500' }}>
              Optionality in Peer Support
            </h2>
            <p className="mb-6">
              The pathway includes a peer support prompt but does not mandate its use. Users are offered a simple message: "Sometimes you just need to talk it out. Reach out to your partner, supervisor, or a peer." This acknowledges the relational nature of resilience—social connection is a core protective factor in trauma recovery—while respecting individual autonomy. Some responders may find comfort in solitude; others may benefit from interpersonal processing. By making this an option rather than a requirement, the module avoids prescriptive expectations about "correct" coping.
            </p>

            <h2 className="mb-4" style={{ fontSize: '20px', fontWeight: '500' }}>
              Resources
            </h2>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li className="mb-2">Brymer, M., Jacobs, A., Layne, C., Pynoos, R., Ruzek, J., Steinberg, A., Vernberg, E., & Watson, P. (2006). <em>Psychological First Aid: Field Operations Guide</em> (2nd ed.). National Child Traumatic Stress Network.</li>
              <li className="mb-2">Lieberman, M. D., Eisenberger, N. I., Crockett, M. J., Tom, S. M., Pfeifer, J. H., & Way, B. M. (2007). Putting feelings into words: Affect labeling disrupts amygdala activity in response to affective stimuli. <em>Psychological Science, 18</em>(5), 421-428.</li>
              <li className="mb-2">Torre, J. B., & Lieberman, M. D. (2018). Putting feelings into words: Affect labeling as implicit emotion regulation. <em>Emotion Review, 10</em>(2), 116-124.</li>
              <li>van der Kolk, B. A. (2015). <em>The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma</em>. Penguin Books.</li>
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

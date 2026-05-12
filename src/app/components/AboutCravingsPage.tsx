import { ArrowLeft, Home } from 'lucide-react';

interface AboutCravingsPageProps {
  onBack: () => void;
  onReturnToCheckIn: () => void;
}

export function AboutCravingsPage({ onBack, onReturnToCheckIn }: AboutCravingsPageProps) {
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
          I'm Having Cravings
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
              A Multimodal Behavioral Intervention
            </h2>
            <p className="mb-6">
              This pathway creates a cognitive pause between the emergence of an urge and the execution of a maladaptive coping behavior. While the module was designed with nicotine dependence in mind, it is intentionally broad enough to address cravings for nicotine, caffeine, food, or digital stimulation—all of which are common stress-buffering behaviors among first responders.
            </p>

            <h2 className="mb-4" style={{ fontSize: '20px', fontWeight: '500' }}>
              Mindfulness and Urge Surfing
            </h2>
            <p className="mb-6">
              Urge surfing is a mindfulness-based strategy rooted in addiction research and harm reduction frameworks. Rather than fighting or suppressing a craving, users are guided to observe it as a temporary physical sensation that rises, peaks, and dissipates—like a wave. This reframes the craving from an uncontrollable compulsion to a transient experience that can be witnessed without immediate action.
            </p>

            <h3 className="mb-3" style={{ fontSize: '18px', fontWeight: '500' }}>
              Efficacy of Digital Mindfulness
            </h3>
            <p className="mb-5">
              Research shows that brief, digital mindfulness interventions can reduce craving intensity and increase the likelihood of delayed gratification. By naming the craving and rating its intensity, the user engages in metacognitive awareness—a critical first step in breaking automatic behavioral loops.
            </p>

            <h3 className="mb-3" style={{ fontSize: '18px', fontWeight: '500' }}>
              Visual Metaphor
            </h3>
            <p className="mb-6">
              The "Ride the Urge Wave" animation includes a surfer moving up and down a wave at 60 BPM. This visual metaphor reinforces the temporal nature of cravings: they rise, they crest, and they pass. The rhythmic motion also serves as a grounding anchor, occupying visual attention during the 90-second exercise.
            </p>

            <h2 className="mb-4" style={{ fontSize: '20px', fontWeight: '500' }}>
              Identifying the Source: Craving and Urge Check-ins
            </h2>
            <p className="mb-6">
              The module includes a dual-check-in system designed to personalize the intervention:
            </p>
            <p className="mb-3">
              1. <strong>"What are you craving?"</strong> (Nicotine, Caffeine, Scrolling, Food, etc.)
            </p>
            <p className="mb-6">
              2. <strong>"What kind of urge is this?"</strong> (Body, Stress, Boredom, Habit, Social)
            </p>
            <p className="mb-6">
              This two-part identification mirrors clinical assessments used in substance use treatment, which differentiate between physiological cravings (body urges) and psychosocial triggers (stress, boredom, social contexts). By categorizing the urge, users gain insight into the underlying driver, which can inform more targeted coping strategies over time.
            </p>

            <h3 className="mb-3" style={{ fontSize: '18px', fontWeight: '500' }}>
              Real-Time Intervention and Ecological Momentary Support
            </h3>
            <p className="mb-6">
              After identifying the craving type, users rate the urge intensity on a 1-10 scale. This before-and-after urge rating helps users shift from automatic reaction to objective observation. Even if the urge does not fully dissipate, the act of pausing and measuring creates a cognitive interruption that delays impulsive behavior.
            </p>

            <div
              className="p-6 rounded-2xl mb-6"
              style={{
                backgroundColor: '#FBE8CE',
                boxShadow: '0 2px 8px rgba(47, 47, 47, 0.04)'
              }}
            >
              <p className="text-center" style={{ fontSize: '18px', fontStyle: 'italic', lineHeight: '1.6' }}>
                "Whether the urge changed or not, you paused before reacting. That matters."
              </p>
            </div>

            <h2 className="mb-4" style={{ fontSize: '20px', fontWeight: '500' }}>
              Habit Replacements
            </h2>

            <h3 className="mb-3" style={{ fontSize: '18px', fontWeight: '500' }}>
              Ride the Urge Wave
            </h3>
            <p className="mb-5">
              This is a 90-second breathwork animation with a surfer moving up and down a wave at 60 BPM. The exercise is based on the framework that most cognitive urges persist for approximately 90 seconds before naturally dissipating. By "riding" the urge rather than acting on it, users practice distress tolerance—a core skill in dialectical behavior therapy (DBT).
            </p>

            <h3 className="mb-3" style={{ fontSize: '18px', fontWeight: '500' }}>
              Move the Urge
            </h3>
            <p className="mb-5">
              Short movement prompts are included based on meta-analytic evidence that physical activity can redirect craving urges. Simple movements such as shoulder rolls, hand stretches, or standing breaks serve as somatic distractions that engage the body and reduce mental fixation on the craving.
            </p>

            <h3 className="mb-3" style={{ fontSize: '18px', fontWeight: '500' }}>
              Distract Me
            </h3>
            <p className="mb-6">
              This tool uses attentional distraction through a tapping exercise. Users tap a pulsing circle in rhythm with a 60 BPM visual cue. The goal is to create a low-stimulation task that interrupts automatic habit loops without introducing cognitively demanding activities.
            </p>

            <h2 className="mb-4" style={{ fontSize: '20px', fontWeight: '500' }}>
              Resources
            </h2>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li className="mb-2">Bowen, S., Chawla, N., & Marlatt, G. A. (2010). <em>Mindfulness-Based Relapse Prevention for Addictive Behaviors: A Clinician's Guide</em>. Guilford Press.</li>
              <li className="mb-2">Enkema, M. C., & Bowen, S. (2017). Mindfulness practice moderates the relationship between craving and substance use in a clinical sample. <em>Drug and Alcohol Dependence, 179</em>, 1-7.</li>
              <li className="mb-2">Glasner, S., Mooney, L. J., Ang, A., Garneau, H. C., Hartwell, E., Brecht, M. L., & Rawson, R. A. (2017). Mindfulness-Based Relapse Prevention for Stimulant Dependent Adults: A Pilot Randomized Clinical Trial. <em>Mindfulness, 8</em>(1), 126-135.</li>
              <li>Witkiewitz, K., Lustyk, M. K. B., & Bowen, S. (2013). Retraining the addicted brain: A review of hypothesized neurobiological mechanisms of mindfulness-based relapse prevention. <em>Psychology of Addictive Behaviors, 27</em>(2), 351-365.</li>
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

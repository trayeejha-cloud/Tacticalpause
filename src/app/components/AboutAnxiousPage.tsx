import { ArrowLeft, Home } from 'lucide-react';

interface AboutAnxiousPageProps {
  onBack: () => void;
  onReturnToCheckIn: () => void;
}

export function AboutAnxiousPage({ onBack, onReturnToCheckIn }: AboutAnxiousPageProps) {
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
          I'm Feeling Anxious
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
              The 4-7-8 Breathing Reset: A Framework for Autonomic Regulation and Anxiety Mitigation
            </h2>
            <p className="mb-6">
              This pathway is an evidence-based intervention designed to mitigate physiological manifestations of acute anxiety, such as racing thoughts, shallow respiration, and heightened autonomic arousal. It provides a structured, non-clinical reset that helps responders transition from sympathetic dominance (the "fight-or-flight" response) to a more regulated parasympathetic state through rhythmic, controlled respiration.
            </p>

            <h2 className="mb-4" style={{ fontSize: '20px', fontWeight: '500' }}>
              Breathwork in Stress Regulation
            </h2>
            <p className="mb-6">
              Controlled breathing has long been recognized as a core modality in anxiety management and stress regulation. The 4-7-8 breathing technique—inhaling for four seconds, holding for seven, and exhaling for eight—slows respiratory rate and activates the parasympathetic nervous system, reducing cortisol levels and heart rate variability. This intervention is particularly effective for EMTs, who may experience acute anxiety before, during, or after high-acuity dispatches, and who often lack access to traditional therapeutic interventions during shifts.
            </p>

            <h2 className="mb-4" style={{ fontSize: '20px', fontWeight: '500' }}>
              Autonomic Stabilization and Rhythmic Pacing
            </h2>

            <h3 className="mb-3" style={{ fontSize: '18px', fontWeight: '500' }}>
              Parasympathetic Activation
            </h3>
            <p className="mb-5">
              Extended exhalation (the 8-second phase) stimulates the vagus nerve, which is directly linked to parasympathetic activation. Vagal tone has been shown to correlate with improved emotional regulation, reduced anxiety, and enhanced recovery from stress. By lengthening the exhalation relative to the inhalation, the 4-7-8 technique actively rebalances the autonomic nervous system, moving the user out of hyperarousal and toward a more sustainable baseline.
            </p>

            <h3 className="mb-3" style={{ fontSize: '18px', fontWeight: '500' }}>
              Rhythmic Cues
            </h3>
            <p className="mb-6">
              The Tactical Pause interface includes a visual pulse occurring at approximately 60 beats per minute—a rhythmic cue that mimics a resting heart rate. This external pacing mechanism functions as an "entrainment signal," subtly guiding the user's physiological rhythm toward a calmer state. Research on rhythmic auditory and visual cues suggests that steady, slow-tempo stimuli can reduce sympathetic arousal and support sustained attention during stress regulation exercises.
            </p>

            <h2 className="mb-4" style={{ fontSize: '20px', fontWeight: '500' }}>
              Trauma-Informed Design and User Agency
            </h2>
            <p className="mb-5">
              Not all individuals tolerate breath-holding equally. For some, the "hold" phase can evoke discomfort or panic, particularly among those with trauma histories or respiratory sensitivities. Tactical Pause includes a "Comfort Note" beneath the timer, which reads:
            </p>
            <p className="mb-6 px-4" style={{ fontStyle: 'italic', opacity: 0.9 }}>
              "If holding your breath feels uncomfortable, you can skip the hold or shorten it. This reset is for you—adjust it as needed."
            </p>
            <p className="mb-6">
              This language centers user autonomy and acknowledges that "correct" practice is subjective. Rather than enforcing rigid adherence to a protocol, the module invites personalization, which aligns with trauma-informed care principles that prioritize safety, choice, and empowerment over compliance.
            </p>

            <h2 className="mb-4" style={{ fontSize: '20px', fontWeight: '500' }}>
              Resources
            </h2>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li className="mb-2">Gerritsen, R. J. S., & Band, G. P. H. (2018). Breath of Life: The Respiratory Vagal Stimulation Model of Contemplative Activity. <em>Frontiers in Human Neuroscience, 12</em>, 397.</li>
              <li className="mb-2">Laborde, S., Allen, M. S., Borges, U., Dosseville, F., Hosang, T. J., Iskra, M., Mosley, E., Salvotti, C., Spolverato, L., Zammit, N., & Javelle, F. (2022). Effects of voluntary slow breathing on heart rate and heart rate variability: A systematic review and a meta-analysis. <em>Neuroscience & Biobehavioral Reviews, 138</em>, 104711.</li>
              <li className="mb-2">Porges, S. W. (2011). <em>The Polyvagal Theory: Neurophysiological Foundations of Emotions, Attachment, Communication, and Self-Regulation</em>. W. W. Norton & Company.</li>
              <li>Zaccaro, A., Piarulli, A., Laurino, M., Garbella, E., Menicucci, D., Neri, B., & Gemignani, A. (2018). How Breath-Control Can Change Your Life: A Systematic Review on Psycho-Physiological Correlates of Slow Breathing. <em>Frontiers in Human Neuroscience, 12</em>, 353.</li>
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

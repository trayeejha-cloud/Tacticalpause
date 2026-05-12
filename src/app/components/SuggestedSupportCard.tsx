import { ArrowLeft, Waves, Activity, Wind, MessageCircle, Grid } from 'lucide-react';

interface SuggestedSupportCardProps {
  urgeType: string;
  onRideWave: () => void;
  onMove: () => void;
  onBreathing: () => void;
  onDistract: () => void;
  onPeerSupport: () => void;
  onContinueToOptions: () => void;
  onBack: () => void;
}

const supportContent = {
  body: {
    title: "Give your body a replacement.",
    body: "Try water, mint or gum, a breathing reset, or a small movement. The goal is to meet the body without immediately feeding the habit.",
    buttons: [
      { id: 'ride-wave', text: 'Ride the urge wave', icon: Waves, action: 'onRideWave' },
      { id: 'move', text: 'Move for 60 seconds', icon: Activity, action: 'onMove' },
      { id: 'breathing', text: 'Take a breathing reset', icon: Wind, action: 'onBreathing' },
      { id: 'options', text: 'Continue to tool options', icon: Grid, action: 'onContinueToOptions' }
    ]
  },
  stress: {
    title: "Create space from the stress.",
    body: "The urge may be asking for relief. Pause before reacting and give your nervous system one small reset.",
    buttons: [
      { id: 'ride-wave', text: 'Ride the urge wave', icon: Waves, action: 'onRideWave' },
      { id: 'breathing', text: 'Take a breathing reset', icon: Wind, action: 'onBreathing' },
      { id: 'peer', text: 'Talk to a peer', icon: MessageCircle, action: 'onPeerSupport' },
      { id: 'options', text: 'Continue to tool options', icon: Grid, action: 'onContinueToOptions' }
    ]
  },
  boredom: {
    title: "Give the urge somewhere else to go.",
    body: "Restlessness can make a craving feel louder. Try a short distraction or movement reset.",
    buttons: [
      { id: 'distract', text: 'Distract me', icon: Grid, action: 'onDistract' },
      { id: 'move', text: 'Move for 60 seconds', icon: Activity, action: 'onMove' },
      { id: 'ride-wave', text: 'Ride the urge wave', icon: Waves, action: 'onRideWave' },
      { id: 'options', text: 'Continue to tool options', icon: Grid, action: 'onContinueToOptions' }
    ]
  },
  habit: {
    title: "Break the automatic loop.",
    body: "You do not have to decide forever. Delay the habit for one minute and choose again after the pause.",
    buttons: [
      { id: 'ride-wave', text: 'Ride the urge wave', icon: Waves, action: 'onRideWave' },
      { id: 'distract', text: 'Distract me', icon: Grid, action: 'onDistract' },
      { id: 'breathing', text: 'Take a breathing reset', icon: Wind, action: 'onBreathing' },
      { id: 'options', text: 'Continue to tool options', icon: Grid, action: 'onContinueToOptions' }
    ]
  },
  social: {
    title: "Connection can be the support.",
    body: "If the urge is tied to being around others, choose one small way to stay connected without automatically following the habit.",
    buttons: [
      { id: 'peer', text: 'Talk to a peer', icon: MessageCircle, action: 'onPeerSupport' },
      { id: 'ride-wave', text: 'Ride the urge wave', icon: Waves, action: 'onRideWave' },
      { id: 'breathing', text: 'Take a breathing reset', icon: Wind, action: 'onBreathing' },
      { id: 'options', text: 'Continue to tool options', icon: Grid, action: 'onContinueToOptions' }
    ]
  },
  'not-sure': {
    title: "You do not need to label it.",
    body: "Not knowing is okay. Start with one small pause and see what shifts.",
    buttons: [
      { id: 'ride-wave', text: 'Ride the urge wave', icon: Waves, action: 'onRideWave' },
      { id: 'distract', text: 'Distract me', icon: Grid, action: 'onDistract' },
      { id: 'move', text: 'Move for 60 seconds', icon: Activity, action: 'onMove' },
      { id: 'options', text: 'Continue to tool options', icon: Grid, action: 'onContinueToOptions' }
    ]
  }
};

export function SuggestedSupportCard({
  urgeType,
  onRideWave,
  onMove,
  onBreathing,
  onDistract,
  onPeerSupport,
  onContinueToOptions,
  onBack
}: SuggestedSupportCardProps) {
  const content = supportContent[urgeType as keyof typeof supportContent] || supportContent['not-sure'];

  const actionMap = {
    onRideWave,
    onMove,
    onBreathing,
    onDistract,
    onPeerSupport,
    onContinueToOptions
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

      <div className="flex-1 flex flex-col max-w-2xl w-full mx-auto justify-center">
        <div
          className="flex flex-col items-center p-8 rounded-3xl"
          style={{
            backgroundColor: '#C3CC9B',
            boxShadow: '0 4px 16px rgba(47, 47, 47, 0.08)'
          }}
        >
          <h2 className="mb-6 text-center" style={{ color: '#2F2F2F', fontSize: '28px', fontWeight: '500', letterSpacing: '-0.02em' }}>
            {content.title}
          </h2>

          <p className="mb-8 text-center" style={{ color: '#2F2F2F', fontSize: '16px', lineHeight: '1.6', opacity: 0.9 }}>
            {content.body}
          </p>

          <div className="w-full flex flex-col gap-3">
            {content.buttons.map((button) => {
              const Icon = button.icon;
              const action = actionMap[button.action as keyof typeof actionMap];
              return (
                <button
                  key={button.id}
                  onClick={action}
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
                  <Icon size={20} />
                  {button.text}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { CheckInScreen } from './components/CheckInScreen';
import { PostCallResetIntro } from './components/PostCallResetIntro';
import { GetSupportNow } from './components/GetSupportNow';
import { EmotionSelection } from './components/EmotionSelection';
import { GroundingReset } from './components/GroundingReset';
import { ChooseNextStep } from './components/ChooseNextStep';
import { PrivateReflection } from './components/PrivateReflection';
import { PeerSupport } from './components/PeerSupport';
import { CognitiveResetIntro } from './components/CognitiveResetIntro';
import { FocusReset } from './components/FocusReset';
import { FocusCheck } from './components/FocusCheck';
import { ReadyScreen } from './components/ReadyScreen';
import { BreathingResetIntro } from './components/BreathingResetIntro';
import { BreathingTimer } from './components/BreathingTimer';
import { PostBreathCheckIn } from './components/PostBreathCheckIn';
import { BreathingReadyScreen } from './components/BreathingReadyScreen';
import { StillFeelingIt } from './components/StillFeelingIt';
import { CravingSupportIntro } from './components/CravingSupportIntro';
import { WhatAreYouCraving } from './components/WhatAreYouCraving';
import { RateTheUrge } from './components/RateTheUrge';
import { ChooseSupportTool } from './components/ChooseSupportTool';
import { RideTheUrgeWave } from './components/RideTheUrgeWave';
import { MoveTheUrge } from './components/MoveTheUrge';
import { DistractMe } from './components/DistractMe';
import { CravingResult } from './components/CravingResult';
import { FatigueCheckIntro } from './components/FatigueCheckIntro';
import { QuickFatigueRating } from './components/QuickFatigueRating';
import { HighFatigueSupport } from './components/HighFatigueSupport';
import { BodyNeedsCheck } from './components/BodyNeedsCheck';
import { BodyNeedSupportCard } from './components/BodyNeedSupportCard';
import { MicroRecoveryReset } from './components/MicroRecoveryReset';
import { ChooseSmallSupport } from './components/ChooseSmallSupport';
import { FatigueReadyScreen } from './components/FatigueReadyScreen';
import { SixtySecondPauseIntro } from './components/SixtySecondPauseIntro';
import { SixtySecondPauseTimer } from './components/SixtySecondPauseTimer';
import { SixtySecondPauseReady } from './components/SixtySecondPauseReady';
import { WhatKindOfUrge } from './components/WhatKindOfUrge';
import { SuggestedSupportCard } from './components/SuggestedSupportCard';
import { AboutHub } from './components/AboutHub';
import { OriginPage } from './components/OriginPage';
import { DesignPhilosophyPage } from './components/DesignPhilosophyPage';
import { AboutStressedPage } from './components/AboutStressedPage';
import { AboutFocusPage } from './components/AboutFocusPage';
import { AboutAnxiousPage } from './components/AboutAnxiousPage';
import { AboutCravingsPage } from './components/AboutCravingsPage';
import { AboutExhaustedPage } from './components/AboutExhaustedPage';
import { AboutMinutePage } from './components/AboutMinutePage';
import { BehindTheSitePage } from './components/BehindTheSitePage';

type Screen =
  | 'welcome'
  | 'checkin'
  | 'post-call-intro'
  | 'get-support'
  | 'emotion-selection'
  | 'grounding-reset'
  | 'choose-next-step'
  | 'private-reflection'
  | 'peer-support'
  | 'cognitive-reset-intro'
  | 'focus-reset'
  | 'focus-check'
  | 'ready-screen'
  | 'breathing-reset-intro'
  | 'breathing-timer'
  | 'post-breath-checkin'
  | 'breathing-ready'
  | 'still-feeling-it'
  | 'craving-support-intro'
  | 'what-are-you-craving'
  | 'what-kind-of-urge'
  | 'rate-the-urge'
  | 'suggested-support-card'
  | 'choose-support-tool'
  | 'ride-urge-wave'
  | 'move-urge'
  | 'distract-me'
  | 'rerate-urge'
  | 'craving-result'
  | 'fatigue-check-intro'
  | 'quick-fatigue-rating'
  | 'high-fatigue-support'
  | 'body-needs-check'
  | 'body-need-support-card'
  | 'micro-recovery-reset'
  | 'choose-small-support'
  | 'fatigue-ready'
  | 'sixty-second-pause-intro'
  | 'sixty-second-pause-timer'
  | 'sixty-second-pause-ready'
  | 'about-hub'
  | 'about-origin'
  | 'about-design-philosophy'
  | 'about-stressed'
  | 'about-focus'
  | 'about-anxious'
  | 'about-cravings'
  | 'about-exhausted'
  | 'about-minute'
  | 'about-behind-site';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [screenHistory, setScreenHistory] = useState<Screen[]>(['welcome']);
  const [initialUrgeRating, setInitialUrgeRating] = useState<number>(5);
  const [selectedBodyNeed, setSelectedBodyNeed] = useState<string>('not-sure');
  const [selectedUrgeType, setSelectedUrgeType] = useState<string>('not-sure');

  const navigateTo = (screen: Screen) => {
    setScreenHistory([...screenHistory, screen]);
    setCurrentScreen(screen);
  };

  const goBack = () => {
    if (screenHistory.length > 1) {
      const newHistory = screenHistory.slice(0, -1);
      setScreenHistory(newHistory);
      setCurrentScreen(newHistory[newHistory.length - 1]);
    }
  };

  const resetToWelcome = () => {
    setScreenHistory(['welcome']);
    setCurrentScreen('welcome');
  };

  const resetToCheckIn = () => {
    setScreenHistory(['welcome', 'checkin']);
    setCurrentScreen('checkin');
  };

  const handleFeelingSelect = (feeling: string) => {
    if (feeling === "I'm stressed after a call") {
      navigateTo('post-call-intro');
    } else if (feeling === "I need to focus") {
      navigateTo('cognitive-reset-intro');
    } else if (feeling === "I'm feeling anxious") {
      navigateTo('breathing-reset-intro');
    } else if (feeling === "I'm having cravings") {
      navigateTo('craving-support-intro');
    } else if (feeling === "I'm exhausted") {
      navigateTo('fatigue-check-intro');
    } else if (feeling === "I just need a minute") {
      navigateTo('sixty-second-pause-intro');
    } else {
      console.log('Selected feeling:', feeling);
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return <WelcomeScreen onPauseClick={() => navigateTo('checkin')} onAboutClick={() => navigateTo('about-hub')} />;

      case 'checkin':
        return <CheckInScreen onFeelingSelect={handleFeelingSelect} onBack={goBack} onAboutClick={() => navigateTo('about-hub')} />;

      case 'post-call-intro':
        return (
          <PostCallResetIntro
            onSafe={() => navigateTo('emotion-selection')}
            onNeedHelp={() => navigateTo('get-support')}
            onBack={goBack}
            onAboutClick={() => navigateTo('about-hub')}
          />
        );

      case 'get-support':
        return (
          <GetSupportNow
            onReturnToOptions={resetToCheckIn}
            onReturnToService={resetToWelcome}
            onBack={goBack}
          />
        );

      case 'emotion-selection':
        return (
          <EmotionSelection
            onEmotionSelect={() => navigateTo('grounding-reset')}
            onBack={goBack}
          />
        );

      case 'grounding-reset':
        return (
          <GroundingReset
            onComplete={() => navigateTo('choose-next-step')}
            onBack={goBack}
          />
        );

      case 'choose-next-step':
        return (
          <ChooseNextStep
            onRepeatReset={() => navigateTo('grounding-reset')}
            onReflect={() => navigateTo('private-reflection')}
            onPeerSupport={() => navigateTo('peer-support')}
            onReturnToService={resetToWelcome}
            onBack={goBack}
          />
        );

      case 'private-reflection':
        return (
          <PrivateReflection
            onReturnToOptions={resetToCheckIn}
            onReturnToService={resetToWelcome}
            onSkip={() => navigateTo('choose-next-step')}
            onBack={goBack}
          />
        );

      case 'peer-support':
        return (
          <PeerSupport
            onReturnToOptions={resetToCheckIn}
            onReturnToService={resetToWelcome}
            onBack={goBack}
          />
        );

      case 'cognitive-reset-intro':
        return (
          <CognitiveResetIntro
            onStartReset={() => navigateTo('focus-reset')}
            onSkipToCheck={() => navigateTo('focus-check')}
            onBack={goBack}
            onAboutClick={() => navigateTo('about-hub')}
          />
        );

      case 'focus-reset':
        return (
          <FocusReset
            onComplete={() => navigateTo('focus-check')}
            onBack={goBack}
          />
        );

      case 'focus-check':
        return (
          <FocusCheck
            onFocusSelect={() => navigateTo('ready-screen')}
            onBack={goBack}
          />
        );

      case 'ready-screen':
        return (
          <ReadyScreen
            onReturnToService={resetToWelcome}
            onReturnToCheckIn={resetToCheckIn}
            onRepeatReset={() => navigateTo('focus-reset')}
            onBack={goBack}
          />
        );

      case 'breathing-reset-intro':
        return (
          <BreathingResetIntro
            onStartReset={() => navigateTo('breathing-timer')}
            onChooseAnother={resetToCheckIn}
            onBack={goBack}
            onAboutClick={() => navigateTo('about-hub')}
          />
        );

      case 'breathing-timer':
        return (
          <BreathingTimer
            onComplete={() => navigateTo('post-breath-checkin')}
            onBack={goBack}
          />
        );

      case 'post-breath-checkin':
        return (
          <PostBreathCheckIn
            onFeelCalmer={() => navigateTo('breathing-ready')}
            onStillAnxious={() => navigateTo('still-feeling-it')}
            onMoreGrounded={() => navigateTo('breathing-ready')}
            onNeedAnother={() => navigateTo('breathing-timer')}
            onBack={goBack}
          />
        );

      case 'breathing-ready':
        return (
          <BreathingReadyScreen
            onReturnToService={resetToWelcome}
            onReturnToCheckIn={resetToCheckIn}
            onRepeatReset={() => navigateTo('breathing-timer')}
            onBack={goBack}
          />
        );

      case 'still-feeling-it':
        return (
          <StillFeelingIt
            onRepeatBreathing={() => navigateTo('breathing-timer')}
            onTryGrounding={() => navigateTo('grounding-reset')}
            onTalkToPeer={() => navigateTo('peer-support')}
            onReturnToCheckIn={resetToCheckIn}
            onReturnToService={resetToWelcome}
            onBack={goBack}
          />
        );

      case 'craving-support-intro':
        return (
          <CravingSupportIntro
            onStartCheck={() => navigateTo('what-are-you-craving')}
            onReturnToCheckIn={resetToCheckIn}
            onBack={goBack}
            onAboutClick={() => navigateTo('about-hub')}
          />
        );

      case 'what-are-you-craving':
        return (
          <WhatAreYouCraving
            onCravingSelect={() => navigateTo('what-kind-of-urge')}
            onBack={goBack}
          />
        );

      case 'what-kind-of-urge':
        return (
          <WhatKindOfUrge
            onUrgeTypeSelect={(urgeType) => {
              setSelectedUrgeType(urgeType);
              navigateTo('rate-the-urge');
            }}
            onBack={goBack}
          />
        );

      case 'rate-the-urge':
        return (
          <RateTheUrge
            onContinue={(rating) => {
              setInitialUrgeRating(rating);
              navigateTo('suggested-support-card');
            }}
            onBack={goBack}
          />
        );

      case 'suggested-support-card':
        return (
          <SuggestedSupportCard
            urgeType={selectedUrgeType}
            onRideWave={() => navigateTo('ride-urge-wave')}
            onMove={() => navigateTo('move-urge')}
            onBreathing={() => navigateTo('breathing-timer')}
            onDistract={() => navigateTo('distract-me')}
            onPeerSupport={() => navigateTo('peer-support')}
            onContinueToOptions={() => navigateTo('choose-support-tool')}
            onBack={goBack}
          />
        );

      case 'choose-support-tool':
        return (
          <ChooseSupportTool
            onRideWave={() => navigateTo('ride-urge-wave')}
            onMove={() => navigateTo('move-urge')}
            onDistract={() => navigateTo('distract-me')}
            onBreathing={() => navigateTo('breathing-timer')}
            onPeerSupport={() => navigateTo('peer-support')}
            onReturnToCheckIn={resetToCheckIn}
            onBack={goBack}
          />
        );

      case 'ride-urge-wave':
        return (
          <RideTheUrgeWave
            onComplete={() => navigateTo('rerate-urge')}
            onBack={goBack}
          />
        );

      case 'move-urge':
        return (
          <MoveTheUrge
            onComplete={() => navigateTo('rerate-urge')}
            onBack={goBack}
          />
        );

      case 'distract-me':
        return (
          <DistractMe
            onComplete={() => navigateTo('rerate-urge')}
            onBack={goBack}
          />
        );

      case 'rerate-urge':
        return (
          <RateTheUrge
            onContinue={() => navigateTo('craving-result')}
            onBack={goBack}
            title="Where is the urge now?"
          />
        );

      case 'craving-result':
        return (
          <CravingResult
            onDoAnother={() => navigateTo('choose-support-tool')}
            onTryBreathing={() => navigateTo('breathing-timer')}
            onTalkToPeer={() => navigateTo('peer-support')}
            onReturnToCheckIn={resetToCheckIn}
            onReturnToService={resetToWelcome}
            onBack={goBack}
          />
        );

      case 'fatigue-check-intro':
        return (
          <FatigueCheckIntro
            onStartCheck={() => navigateTo('quick-fatigue-rating')}
            onReturnToCheckIn={resetToCheckIn}
            onBack={goBack}
            onAboutClick={() => navigateTo('about-hub')}
          />
        );

      case 'quick-fatigue-rating':
        return (
          <QuickFatigueRating
            onRatingSelect={(rating) => {
              if (rating >= 4) {
                navigateTo('high-fatigue-support');
              } else {
                navigateTo('body-needs-check');
              }
            }}
            onBack={goBack}
          />
        );

      case 'high-fatigue-support':
        return (
          <HighFatigueSupport
            onContinueToReset={() => navigateTo('body-needs-check')}
            onReturnToCheckIn={resetToCheckIn}
            onReturnToService={resetToWelcome}
            onBack={goBack}
          />
        );

      case 'body-needs-check':
        return (
          <BodyNeedsCheck
            onNeedSelect={(need) => {
              setSelectedBodyNeed(need);
              navigateTo('body-need-support-card');
            }}
            onBack={goBack}
          />
        );

      case 'body-need-support-card':
        return (
          <BodyNeedSupportCard
            need={selectedBodyNeed}
            onTryReset={() => navigateTo('micro-recovery-reset')}
            onChooseAnother={() => navigateTo('body-needs-check')}
            onReturnToCheckIn={resetToCheckIn}
            onReturnToService={resetToWelcome}
            onBack={goBack}
          />
        );

      case 'micro-recovery-reset':
        return (
          <MicroRecoveryReset
            onComplete={() => navigateTo('fatigue-ready')}
            onBack={goBack}
          />
        );

      case 'choose-small-support':
        return (
          <ChooseSmallSupport
            onSupportSelect={(support) => {
              if (support === 'talk') {
                navigateTo('peer-support');
              } else {
                navigateTo('fatigue-ready');
              }
            }}
            onBack={goBack}
          />
        );

      case 'fatigue-ready':
        return (
          <FatigueReadyScreen
            onReturnToService={resetToWelcome}
            onReturnToCheckIn={resetToCheckIn}
            onChooseAnotherSupport={() => navigateTo('body-needs-check')}
            onRepeatReset={() => navigateTo('micro-recovery-reset')}
            onBack={goBack}
          />
        );

      case 'sixty-second-pause-intro':
        return (
          <SixtySecondPauseIntro
            onStartPause={() => navigateTo('sixty-second-pause-timer')}
            onReturnToCheckIn={resetToCheckIn}
            onBack={goBack}
            onAboutClick={() => navigateTo('about-hub')}
          />
        );

      case 'sixty-second-pause-timer':
        return (
          <SixtySecondPauseTimer
            onComplete={() => navigateTo('sixty-second-pause-ready')}
            onBack={goBack}
          />
        );

      case 'sixty-second-pause-ready':
        return (
          <SixtySecondPauseReady
            onReturnToService={resetToWelcome}
            onReturnToCheckIn={resetToCheckIn}
            onRepeatPause={() => navigateTo('sixty-second-pause-timer')}
            onBack={goBack}
          />
        );

      case 'about-hub':
        return (
          <AboutHub
            onNavigateToPage={(page) => navigateTo(`about-${page}` as Screen)}
            onBack={goBack}
          />
        );

      case 'about-origin':
        return (
          <OriginPage
            onBack={() => navigateTo('about-hub')}
            onReturnToCheckIn={resetToCheckIn}
          />
        );

      case 'about-design-philosophy':
        return (
          <DesignPhilosophyPage
            onBack={() => navigateTo('about-hub')}
            onReturnToCheckIn={resetToCheckIn}
          />
        );

      case 'about-stressed':
        return (
          <AboutStressedPage
            onBack={() => navigateTo('about-hub')}
            onReturnToCheckIn={resetToCheckIn}
          />
        );

      case 'about-focus':
        return (
          <AboutFocusPage
            onBack={() => navigateTo('about-hub')}
            onReturnToCheckIn={resetToCheckIn}
          />
        );

      case 'about-anxious':
        return (
          <AboutAnxiousPage
            onBack={() => navigateTo('about-hub')}
            onReturnToCheckIn={resetToCheckIn}
          />
        );

      case 'about-cravings':
        return (
          <AboutCravingsPage
            onBack={() => navigateTo('about-hub')}
            onReturnToCheckIn={resetToCheckIn}
          />
        );

      case 'about-exhausted':
        return (
          <AboutExhaustedPage
            onBack={() => navigateTo('about-hub')}
            onReturnToCheckIn={resetToCheckIn}
          />
        );

      case 'about-minute':
        return (
          <AboutMinutePage
            onBack={() => navigateTo('about-hub')}
            onReturnToCheckIn={resetToCheckIn}
          />
        );

      case 'about-behind-site':
        return (
          <BehindTheSitePage
            onBack={() => navigateTo('about-hub')}
            onReturnToCheckIn={resetToCheckIn}
          />
        );

      default:
        return <WelcomeScreen onPauseClick={() => navigateTo('checkin')} onAboutClick={() => navigateTo('about-hub')} />;
    }
  };

  return (
    <div className="size-full">
      {renderScreen()}
    </div>
  );
}
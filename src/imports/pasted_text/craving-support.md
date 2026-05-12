Update the complete follow-up flow for the “I’m having cravings” button in the Tactical Pause mobile-first web app.

Context:
Tactical Pause is a calm mental health check-in and stress-regulation app for EMTs and first responders. This pathway should support users experiencing cravings or urges for a “quick fix,” such as nicotine, caffeine, scrolling, food, or another habit-based coping behavior.

The current craving flow is strong, but update it so it feels more personalized and less timer-heavy. Keep the “Ride the Urge Wave” timer as the main craving-specific tool, but add more check-ins and tailored habit-replacement cards.

Use the existing Tactical Pause design system:
- #9AB17A = primary background
- #C3CC9B = secondary containers/cards
- #E4DFB5 = interactive elements/buttons
- #FBE8CE = gentle emphasis/support accents only when needed
- #2F2F2F = soft charcoal text/icons

Global style requirements:
- Keep all content centered unless there is a strong usability reason not to.
- Center-align titles, subtitles, body text, prompts, button labels, card text, timer text, and progress indicators.
- Use #E4DFB5 for all standard buttons.
- Keep button colors consistent.
- Do not make one craving option button a different color from the rest.
- Add small simple icons to buttons where helpful.
- Keep icons minimal and cohesive.
- Use soft shadows, rounded cards, large touch-friendly buttons, and generous spacing.
- Use gentle fade or slide transitions between screens.
- Avoid abrupt screen resets.
- All animations should be soft, minimal, and calming.
- All timer animations should stay fully contained inside their rounded timer cards.

Flow name:
Craving Support

Updated overall user flow:
User taps “I’m having cravings”
→ Craving Support intro
→ What are you craving?
→ What kind of urge is this?
→ Rate the urge
→ Suggested habit-replacement card
→ Choose a support tool
→ Complete selected tool
→ Rerate the urge
→ Result / next step

SCREEN 1: Craving Support Intro

Title:
“Craving Support”

Subtitle:
“No judgment. Let’s create a little space before you decide.”

Body:
“Cravings rise and fall. You only need to pause before choosing your next step.”

Buttons:
- Start craving check
- Return to check-in

Button behavior:
- Start craving check → Screen 2
- Return to check-in → main check-in screen

Design:
Use centered text, a rounded #C3CC9B card, #E4DFB5 buttons, and #2F2F2F text/icons.

SCREEN 2: What Are You Craving?

Title:
“What are you craving?”

Subtitle:
“Pick what feels closest.”

Buttons:
- Nicotine
- Caffeine
- Scrolling
- Food
- Something else

Button behavior:
Any selection → Screen 3

Design:
Keep all buttons #E4DFB5 with centered text and small simple icons if helpful.

SCREEN 3: What Kind of Urge Is This?

Purpose:
This screen makes the craving flow feel more personalized by helping the user identify the type of urge.

Title:
“What kind of urge is this?”

Subtitle:
“Pick what feels closest.”

Buttons:
- Body urge
- Stress urge
- Boredom urge
- Habit urge
- Social urge
- I’m not sure

Button behavior:
Any selection → Screen 4

Design:
Use large rounded buttons or chips. Keep all buttons #E4DFB5. Keep all text centered.

Suggested meanings:
- Body urge = the body wants stimulation, oral fixation, food, caffeine, or physical relief
- Stress urge = the urge is connected to emotional stress or tension
- Boredom urge = the urge is connected to restlessness or needing stimulation
- Habit urge = the urge is automatic or routine-based
- Social urge = the urge is connected to being around others or wanting connection
- I’m not sure = user does not need to know why; they can still pause

SCREEN 4: Rate the Urge

Title:
“How strong is the urge?”

Subtitle:
“Rate it from 1 to 10.”

Interaction:
Use a centered 1–10 slider or centered number buttons.

Important alignment requirement:
Ensure the urge rating scale is visually centered. A level 5 urge should align with the visual center of the scale and the center of the card/page. The scale should not be shifted left or right.

Button:
- Continue

Button behavior:
Continue → Screen 5

SCREEN 5: Suggested Support Card

Purpose:
Show a tailored habit-replacement suggestion based on the urge type selected on Screen 3.

Title and body should change depending on the urge type.

If Body urge:
Title:
“Give your body a replacement.”
Body:
“Try water, mint or gum, a breathing reset, or a small movement. The goal is to meet the body without immediately feeding the habit.”

Suggested buttons:
- Ride the urge wave
- Move for 60 seconds
- Take a breathing reset
- Continue to tool options

If Stress urge:
Title:
“Create space from the stress.”
Body:
“The urge may be asking for relief. Pause before reacting and give your nervous system one small reset.”

Suggested buttons:
- Ride the urge wave
- Take a breathing reset
- Talk to a peer
- Continue to tool options

If Boredom urge:
Title:
“Give the urge somewhere else to go.”
Body:
“Restlessness can make a craving feel louder. Try a short distraction or movement reset.”

Suggested buttons:
- Distract me
- Move for 60 seconds
- Ride the urge wave
- Continue to tool options

If Habit urge:
Title:
“Break the automatic loop.”
Body:
“You do not have to decide forever. Delay the habit for one minute and choose again after the pause.”

Suggested buttons:
- Ride the urge wave
- Distract me
- Take a breathing reset
- Continue to tool options

If Social urge:
Title:
“Connection can be the support.”
Body:
“If the urge is tied to being around others, choose one small way to stay connected without automatically following the habit.”

Suggested buttons:
- Talk to a peer
- Ride the urge wave
- Take a breathing reset
- Continue to tool options

If I’m not sure:
Title:
“You do not need to label it.”
Body:
“Not knowing is okay. Start with one small pause and see what shifts.”

Suggested buttons:
- Ride the urge wave
- Distract me
- Move for 60 seconds
- Continue to tool options

Design:
Use a centered rounded card. Keep text centered. Use #C3CC9B for the card and #E4DFB5 for all buttons. Use #2F2F2F for text and icons. Do not use different button colors based on urge type.

SCREEN 6: Choose a Support Tool

Title:
“What do you want to try first?”

Subtitle:
“Pick one small pause.”

Buttons:
- Ride the urge wave
- Move for 60 seconds
- Distract me
- Take a breathing reset
- Talk to a peer
- Return to check-in

Button behavior:
- Ride the urge wave → Screen 7A
- Move for 60 seconds → Screen 7B
- Distract me → Screen 7C
- Take a breathing reset → breathing reset flow
- Talk to a peer → Screen 7D Peer Support
- Return to check-in → main check-in screen

Design:
Use #E4DFB5 for all buttons. Keep all text centered. Add small simple icons.

SCREEN 7A: Ride the Urge Wave

Title:
“Ride the Urge Wave”

Subtitle:
“Watch the urge rise, peak, and pass.”

Timer:
90 seconds total

Prompt sequence:
- 0–30 seconds: “Notice where the urge is in your body.”
- 30–60 seconds: “Picture it rising and falling like a wave.”
- 60–90 seconds: “Take one breath before deciding.”

Surfer and wave animation:
Create a soft, contained animation inside a rounded timer card.

Animation requirements:
- The wave should look continuous and constantly flowing.
- The wave should move left to right smoothly.
- The user should not be able to tell where the wave image starts or ends.
- Avoid jerky, segmented, or obviously looping movement.
- The surfer should move gently up and down with the wave at approximately 60 BPM.
- The surfer should appear to travel forward as the wave moves left to right.
- The surfer silhouette should be simple, balanced, and natural.
- Use a side-profile surfer silhouette with knees bent, one arm extended for balance, one arm angled slightly back or down, body leaning slightly forward, and feet planted on the board.
- Keep the surfer minimal and cohesive with the Tactical Pause aesthetic.
- Do not use arcade styling, pixel art, scores, lives, or bright game visuals.
- The animation should feel like a calming visual metaphor, not a game.

Containment:
The wave, surfer, pulse effect, timer, progress indicator, prompt text, and buttons must all remain inside the rounded timer card. Nothing should overflow.

Buttons:
- Start wave
- End reset

Button behavior:
- Start wave begins the 90-second timer.
- End reset → Screen 8: Rerate the Urge
- Completion → Screen 8

SCREEN 7B: Move for 60 Seconds

Title:
“Move the Urge”

Subtitle:
“Use your body to shift the feeling.”

Timer:
60 seconds total

Prompt sequence:
- 0–15 seconds: “Roll your shoulders.”
- 15–30 seconds: “Stretch your hands.”
- 30–45 seconds: “Stand or walk if you can.”
- 45–60 seconds: “Shake out tension.”

Animation/icon requirements:
Use simple soft charcoal icons that are centered inside the timer card.

For “Roll your shoulders”:
Use a head-and-shoulders icon with two small curved motion lines above the shoulders. Animate the motion lines gently up and down. Do not shake the whole figure.

For “Stretch your hands”:
Use a simple silhouette of an open hand with five visible fingers that smoothly transitions into a fist shape, similar to a fist-bump emoji, then returns to open. The motion should feel like a soft stretch, not a forceful clench.

For “Stand or walk if you can”:
Use a simple standing person silhouette. Do not use an awkward walking cycle. Have the standing person pulse gently at approximately 60 BPM.

For “Shake out tension”:
Use a simple person silhouette with a gentle light shake or subtle vibration. The movement should not look violent, frantic, or panicked.

Containment:
Keep the icon animation, prompt text, countdown, progress indicator, and buttons fully inside the rounded timer card. No overflow.

Buttons:
- Start movement
- End reset

Completion behavior:
After 60 seconds → Screen 8

SCREEN 7C: Distract Me

Title:
“Distract Me”

Subtitle:
“Give the urge somewhere else to go.”

Interaction:
Use the tapping technique.

Timer:
60 seconds total

Main interaction:
- A soft circle pulses at approximately 60 BPM.
- Prompt: “Tap the circle when it pulses.”
- The user taps in rhythm with the pulse.

Design:
- Keep the pulsing circle centered inside a rounded timer card.
- The tapping interaction should feel calming and rhythmic, not competitive or game-like.
- Do not include scores, streaks, points, or win/loss states.
- Keep all text centered.

Buttons:
- Start distraction
- End reset

Completion behavior:
After 60 seconds → Screen 8

SCREEN 7D: Peer Support

Title:
“Peer Support”

Body:
“Sometimes you just need to talk it out. Reach out to your partner, supervisor, or a peer.”

Supporting subtitle:
“A quick pause can break the stress cycle and help you reset. You’re not in this shift alone.”

Buttons:
- Return to options
- Return to check-in
- Return to service

Button behavior:
- Return to options → Screen 6
- Return to check-in → main check-in screen
- Return to service → welcome screen with “Let’s Hit Pause”

SCREEN 8: Rerate the Urge

Title:
“Where is the urge now?”

Subtitle:
“Rate it again from 1 to 10.”

Interaction:
Use the same centered 1–10 slider or number buttons from Screen 4.

Important alignment requirement:
Ensure the scale is perfectly centered. The midpoint should align with the visual center of the page/card.

Button:
- See result

Button behavior:
See result → Screen 9

SCREEN 9: Result / Next Step

Title:
“You created space.”

Body:
“Whether the urge changed or not, you paused before reacting. That matters.”

Buttons:
- Do another craving reset
- Try breathing instead
- Talk to a peer
- Return to check-in
- Return to service

Button behavior:
- Do another craving reset → Screen 6
- Try breathing instead → breathing reset flow
- Talk to a peer → Screen 7D
- Return to check-in → main check-in screen
- Return to service → welcome screen with “Let’s Hit Pause”

Final goal:
Make the craving flow feel nonjudgmental, personalized, and more varied. It should not feel like every craving response is just a timer. The user should feel like the app helps them identify the craving, understand the type of urge, choose a replacement behavior, and pause before reacting.
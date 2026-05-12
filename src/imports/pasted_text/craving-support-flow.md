Design the complete follow-up flow for the “I’m having cravings” button in the Tactical Pause mobile-first web app.

Context:
Tactical Pause is a calm mental health check-in and stress-regulation app for EMTs and first responders. This specific pathway should support users who are experiencing cravings or urges for a “quick fix,” such as nicotine, caffeine, scrolling, food, or another habit-based coping behavior.

This pathway should feel nonjudgmental, calming, and supportive. It should help the user notice the craving, create space before reacting, try a healthier replacement tool, and then decide what they need next.

This should feel like a mindfulness-based craving support flow, NOT a clinical addiction treatment app and NOT a game. The goal is to help the user pause, observe the urge, ride it out or redirect it, and feel more in control of the next step.

Use the existing Tactical Pause design system:
- #9AB17A = primary background
- #C3CC9B = secondary containers/cards
- #E4DFB5 = interactive elements/buttons
- #FBE8CE = emphasis/alerts or gentle warmth
- #2F2F2F = soft charcoal text/icons

Important color consistency rule:
On the main check-in screen, all six buttons under “How are you feeling right now?” should use the same background color: #E4DFB5.

This includes:
- “I’m stressed after a call”
- “I’m feeling anxious”
- “I’m exhausted”
- “I need to focus”
- “I’m having cravings”
- “I just need a minute”

Do not make “I’m having cravings” a different color on the main check-in screen. Use emphasis colors only inside follow-up pathways if needed.

Overall style:
- Mobile-first
- Calm, grounded, modern, soft, and polished
- Keep all content centered unless there is a strong usability reason not to
- Center-align titles, subtitles, body text, buttons, and text inside buttons
- Large touch-friendly buttons
- Rounded cards and pill-shaped chips
- Subtle shadows
- Generous spacing
- Simple minimal iconography
- Development-friendly reusable components
- Consistent with the existing Tactical Pause welcome and check-in screens
- Easy to use one-handed during or between EMS shifts

Important design refinements:
- Ensure consistency in the colors of buttons across the entire flow.
- Use one consistent primary button treatment throughout the screens.
- Use #E4DFB5 for standard interactive buttons.
- Use #FBE8CE only for gentle emphasis, alerts, or support-related warmth.
- Use #2F2F2F for all main text, icons, and labels.
- Add small, simple icons to buttons where appropriate.
- Icons should be minimal, clean, and cohesive with the soft UI style.
- Do not use overly detailed or distracting icons.
- Include a subtle back arrow in the top left of each follow-up screen to return to the previous screen.
- Add minimal transitions throughout the flow so the app does not feel rigid.
- Use gentle fade or slide transitions between screens.
- Buttons should have subtle tap feedback, such as slight scale-down, soft shadow shift, or soft color response.
- Timer phase changes should transition smoothly.
- Avoid flashy animations, harsh contrast, or game-like overstimulation.

Timer and animation requirement:
For all timer-based exercises, use a subtle pulsing timer animation at approximately 60 BPM. The pulse should feel soft and calming, not distracting. Use a gentle scale or opacity pulse around the timer circle or inside the timer card to mimic a steady resting rhythm.

Any timer-based or animated card should keep all elements fully contained within the card, including:
- animation
- pulsing ring or pulse effect
- prompt text
- countdown
- cycle/progress indicator
- buttons if they are part of the timer state

Do not allow the pulse or animation to overflow outside the rounded card.

Flow name:
Craving Support

Overall user flow:
User taps “I’m having cravings”
→ Craving Support intro
→ What are you craving?
→ Rate the urge
→ Choose a support tool
→ Complete selected support tool
→ Rerate the urge
→ Result / next step
→ User can return to service, return to check-in, do another craving reset, or try another support

Copy rules:
- Keep language supportive, brief, and practical.
- Use nonjudgmental language.
- Do not shame the user for having a craving.
- Do not overpromise that the tool will make the urge disappear.
- The tone should communicate: “Pause, notice the urge, create space, and choose one next step.”

Navigation requirement:
For every ending or terminal screen, include a clear way for the user to either return to service or return to the main check-in screen.

Navigation options:
- Include a subtle top-left back arrow to return to the previous screen.
- Include clear bottom action buttons where appropriate:
  - “Return to service” → returns to the welcome screen with “Let’s Hit Pause”
  - “Return to check-in” → returns to the main check-in screen with the six feeling buttons
  - “Do another craving reset” → returns to the support tool selection screen or the selected craving tool

Create the following screens:

SCREEN 1: Craving Support Intro

Purpose:
This is the first screen after the user selects “I’m having cravings.” It should reassure the user and introduce the craving support flow.

Title:
“Craving Support”

Subtitle:
“No judgment. Let’s create a little space before you decide.”

Body:
“Cravings rise and fall. You only need to pause for the next minute.”

Buttons:
- “Start craving check”
- “Return to check-in”

Button behavior:
- “Start craving check” → Screen 2: What Are You Craving?
- “Return to check-in” → returns to the main check-in screen

Design:
- Use #9AB17A as the main background.
- Place content inside a soft rounded card using #C3CC9B or a lighter tonal variation.
- Use #E4DFB5 for both buttons.
- Use #2F2F2F for text and icons.
- Keep all content centered.
- Add small simple icons to the buttons if appropriate:
  - wave/urge icon for “Start craving check”
  - list/grid icon for “Return to check-in”
- Keep the layout calm, open, and spacious.
- Include subtle top-left back arrow.

SCREEN 2: What Are You Craving?

Purpose:
This screen broadens the craving support flow beyond nicotine while still supporting nicotine replacement.

Title:
“What are you craving?”

Subtitle:
“Pick what feels closest.”

Buttons:
- “Nicotine”
- “Caffeine”
- “Scrolling”
- “Food”
- “Something else”

Button behavior:
- Any button selection → Screen 3: Rate the Urge

Design:
- Use #9AB17A as the background.
- Use a rounded card/container in #C3CC9B.
- Use #E4DFB5 for all buttons.
- Use #2F2F2F for all text and icons.
- Keep all content centered.
- Add small icons to buttons if helpful, but keep them subtle and minimal.
- Include subtle top-left back arrow.

SCREEN 3: Rate the Urge

Purpose:
This screen helps the user observe the craving rather than automatically react to it.

Title:
“How strong is the urge?”

Subtitle:
“Rate it from 1 to 10.”

Interaction:
Use either:
- a centered 1–10 slider, or
- ten rounded number buttons

Button:
- “Continue”

Button behavior:
- “Continue” → Screen 4: Choose a Support Tool

Design:
- Use #9AB17A as the background.
- Use a rounded card/container in #C3CC9B.
- Use #E4DFB5 for the main button.
- Use #2F2F2F for all text and icons.
- Keep the scale/slider or number buttons centered.
- Include subtle top-left back arrow.

SCREEN 4: Choose a Support Tool

Purpose:
This screen gives the user a habit-replacement option.

Title:
“What do you want to try first?”

Subtitle:
“Pick one small pause.”

Buttons:
- “Ride the urge wave”
- “Move for 60 seconds”
- “Distract me”
- “Take a breathing reset”
- “Talk to a peer”
- “Return to check-in”

Button behavior:
- “Ride the urge wave” → Screen 5A
- “Move for 60 seconds” → Screen 5B
- “Distract me” → Screen 5C
- “Take a breathing reset” → routes to the anxious/breathing reset flow if available
- “Talk to a peer” → Screen 5D: Peer Support
- “Return to check-in” → returns to the main check-in screen

Design:
- Use #9AB17A as the background.
- Use a rounded card/container in #C3CC9B.
- Use #E4DFB5 for all buttons.
- Use #2F2F2F for all text and icons.
- Keep all content centered.
- Add small icons to buttons:
  - wave/surf icon for “Ride the urge wave”
  - movement icon for “Move for 60 seconds”
  - tap/circle icon for “Distract me”
  - breath/circle icon for “Take a breathing reset”
  - chat icon for “Talk to a peer”
  - list/grid icon for “Return to check-in”
- Make “Ride the urge wave” the first option, but do not make it a different color from the others.
- Include subtle top-left back arrow.

SCREEN 5A: Ride the Urge Wave

Purpose:
This is the main craving-specific mindfulness tool. It should help the user visualize the craving as something that rises, peaks, and passes.

Title:
“Ride the Urge Wave”

Subtitle:
“Watch the urge rise, peak, and pass.”

Timer:
- Total duration: 90 seconds

Prompt sequence:
- 0–30 seconds: “Notice where the urge is in your body.”
- 30–60 seconds: “Picture it rising and falling like a wave.”
- 60–90 seconds: “Take one breath before deciding.”

Main visual and animation:
Create a contained rounded card that includes:
- a soft pastel horizontal wave animation
- a small minimal character surfing the wave
- a visible timer
- a progress indicator
- the current prompt text

Animation direction:
- The surfer should move up and down with the wave.
- The wave should visibly move from left to right so it feels like the surfer is going forward.
- The surfer should appear to travel forward as the wave moves left to right while also gently bobbing up and down.
- The surfer and wave motion should feel calm, rhythmic, and soothing.
- Use a subtle 60 BPM rhythm in the motion so it subconsciously feels calming.
- The animation should NOT feel like a game, arcade interface, or score-based interaction.
- Do not include lives, scores, pixel-art styling, or bright retro visuals.
- The animation should be soft, minimal, modern, and cohesive with the Tactical Pause pastel aesthetic.

Containment requirement:
- Ensure the surfer animation, wave animation, pulsing effect, progress indicator, prompt text, and timer are all contained fully within the rounded card.
- The wave and surfer should not overflow outside the card.
- Leave generous padding so the movement has room to breathe.

Buttons:
- “Start wave”
- “End reset”

Button behavior:
- “Start wave” begins the 90-second urge wave timer.
- “End reset” → routes to Screen 6: Rerate the Urge

Design:
- Use #9AB17A as the background.
- Use #C3CC9B or a lighter tonal variation for the card.
- Use #E4DFB5 for the buttons.
- Use #2F2F2F for all text and icons.
- Keep all content centered.
- Add subtle top-left back arrow before the timer begins. During the timer, keep navigation minimal so the user can stay focused.

Completion behavior:
- After 90 seconds → Screen 6: Rerate the Urge

SCREEN 5B: Move the Urge

Purpose:
This screen gives the user a short physical reset to shift craving energy through movement.

Title:
“Move the Urge”

Subtitle:
“Use your body to shift the feeling.”

Timer:
- Total duration: 60 seconds

Prompt sequence:
- 0–15 seconds: “Roll your shoulders.”
- 15–30 seconds: “Stretch your hands.”
- 30–45 seconds: “Stand or walk if you can.”
- 45–60 seconds: “Shake out tension.”

Design:
- Place the full timed movement exercise inside one large centered rounded card.
- Keep the timer, prompt text, pulse, and buttons contained within the card.
- Use a subtle 60 BPM pulse effect.
- Keep all content centered.
- Use the same calm timer-card structure used in the breathing and grounding tools.

Buttons:
- “Start movement”
- “End reset”

Button behavior:
- “Start movement” begins the 60-second timer.
- “End reset” → routes to Screen 6: Rerate the Urge

Design details:
- Use #9AB17A as the background.
- Use #C3CC9B for the timer card.
- Use #E4DFB5 for the buttons.
- Use #2F2F2F for all text and icons.
- Include subtle top-left back arrow before the timer begins.

Completion behavior:
- After 60 seconds → Screen 6: Rerate the Urge

SCREEN 5C: Distract Me

Purpose:
This screen uses a simple tapping technique to interrupt the craving and redirect attention.

Title:
“Distract Me”

Subtitle:
“Give the urge somewhere else to go.”

Interaction:
Use a simple tapping technique.

Main interaction:
- A soft circular shape or button pulses at approximately 60 BPM.
- The prompt says: “Tap the circle when it pulses.”
- The user taps in rhythm with the pulse.

Timer:
- Total duration: 60 seconds

Design:
- Place the entire distraction exercise inside a large centered rounded card.
- The card should contain:
  - the pulsing circle
  - the instruction text
  - the timer
  - a progress indicator if helpful
  - the action buttons
- The pulsing circle should feel calm and soft, not competitive or game-like.
- Use the same subtle 60 BPM pulse language used elsewhere in the app.
- Keep all content centered.
- Use smooth minimal transitions.

Buttons:
- “Start distraction”
- “End reset”

Button behavior:
- “Start distraction” begins the 60-second tapping exercise.
- “End reset” → routes to Screen 6: Rerate the Urge

Design details:
- Use #9AB17A as the background.
- Use #C3CC9B for the card.
- Use #E4DFB5 for the buttons.
- Use #2F2F2F for text and icons.
- Include subtle top-left back arrow before the timer begins.

Completion behavior:
- After 60 seconds → Screen 6: Rerate the Urge

SCREEN 5D: Peer Support

Purpose:
This screen provides a simple peer-support option if the user wants human connection.

Title:
“Peer Support”

Body:
“Sometimes you just need to talk it out. Reach out to your partner, supervisor, or a peer.”

Supporting subtitle:
“A quick pause can break the stress cycle and help you reset. You’re not in this shift alone.”

Buttons:
- “Return to options”
- “Return to check-in”
- “Return to service”

Button behavior:
- “Return to options” → returns to Screen 4
- “Return to check-in” → returns to the main check-in screen
- “Return to service” → returns to the welcome screen with “Let’s Hit Pause”

Design:
- Use #9AB17A as the background.
- Use a rounded card/container in #C3CC9B.
- Use #E4DFB5 for buttons.
- Use #2F2F2F for text and icons.
- Keep all content centered.
- Include subtle top-left back arrow.

SCREEN 6: Rerate the Urge

Purpose:
This screen lets the user notice whether the urge shifted after using a support tool.

Title:
“Where is the urge now?”

Subtitle:
“Rate it again from 1 to 10.”

Interaction:
Use the same centered 1–10 slider or number buttons from Screen 3.

Button:
- “See result”

Button behavior:
- “See result” → Screen 7: Result / Next Step

Design:
- Use #9AB17A as the background.
- Use a rounded card/container in #C3CC9B.
- Use #E4DFB5 for the main button.
- Use #2F2F2F for text and icons.
- Keep all content centered.
- Include subtle top-left back arrow.

SCREEN 7: Result / Next Step

Purpose:
This screen validates the pause regardless of whether the urge decreased.

Title:
“You created space.”

Body:
“Whether the urge changed or not, you paused before reacting. That matters.”

Buttons:
- “Do another craving reset”
- “Try breathing instead”
- “Talk to a peer”
- “Return to check-in”
- “Return to service”

Button behavior:
- “Do another craving reset” → returns to Screen 4: Choose a Support Tool
- “Try breathing instead” → routes to the breathing reset flow if available
- “Talk to a peer” → Screen 5D: Peer Support
- “Return to check-in” → returns to the main check-in screen
- “Return to service” → returns to the welcome screen with “Let’s Hit Pause”

Design:
- Use #9AB17A as the background.
- Use a rounded card/container in #C3CC9B.
- Use #E4DFB5 for all buttons.
- Use #2F2F2F for all text and icons.
- Keep all content centered.
- Add small icons to buttons:
  - refresh icon for “Do another craving reset”
  - breath/circle icon for “Try breathing instead”
  - chat icon for “Talk to a peer”
  - list/grid icon for “Return to check-in”
  - home/pause icon for “Return to service”
- Include subtle top-left back arrow.

Animation requirements:
- Use gentle fade or slide transitions between screens.
- All interactive buttons should have subtle tap feedback.
- The tapping-circle exercise should pulse smoothly at approximately 60 BPM.
- The movement timer prompts should transition softly.
- The urge-wave animation should feel especially smooth and calming.
- The surfer should move up and down while the wave moves left to right, so it looks like the surfer is going forward across the wave while gently bobbing.
- All animated or pulsing visuals must remain fully contained inside their cards.

Final visual requirements:
- Make all screens visually cohesive with the existing Tactical Pause welcome and check-in screens.
- Prioritize calmness, speed, clarity, accessibility, and one-handed mobile use.
- Use consistent spacing, corner radius, shadows, and button hierarchy.
- Use the same button color system across all screens.
- Keep all text, buttons, and button labels centered.
- Include small simple icons on buttons, but keep them subtle and cohesive.
- Ensure all timer cards contain their full animation and pulse systems.
- The final result should be a polished, mobile-first app flow that can later be translated into code.
Design the complete follow-up flow for the “I’m feeling anxious” button in the Tactical Pause mobile-first web app.

Context:
Tactical Pause is a calm mental health check-in and stress-regulation app for EMTs and first responders. This specific pathway should support users who feel anxious, activated, overwhelmed, tense, or physically restless. The goal is to help the user slow down, regulate their breathing, and return to the present moment.

This should feel like a mindfulness-based breathing reset, NOT a clinical anxiety treatment and NOT a generic meditation app. The tool should be short, calming, and easy to use during or between EMS shifts.

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
- Avoid flashy animations, harsh contrast, or high-alert visual styling.

Timer animation requirement:
For all timer-based exercises, use a subtle pulsing timer animation at approximately 60 BPM. The pulse should feel soft and calming, not distracting. Use a gentle scale or opacity pulse around the timer circle to mimic a steady resting rhythm.

For the breathing timer specifically:
- Use a large centered breathing circle.
- The circle should expand during the inhale.
- The circle should stay gently still or softly glow during the hold.
- The circle should slowly contract during the exhale.
- The outer ring or background pulse can continue softly at approximately 60 BPM.

Flow name:
Breathing Reset / 4-7-8 Breathing

Overall user flow:
User taps “I’m feeling anxious”
→ Breathing Reset intro
→ 4-7-8 breathing timer
→ Post-breath check-in
→ Ready screen or additional support screen
→ User can return to service, return to check-in, or do another breathing reset

Copy rules:
- Keep language supportive, brief, and practical.
- Do not provide clinical diagnosis language.
- Do not overpromise that breathing will “fix” anxiety.
- Use calming, nonjudgmental language.
- The tone should communicate: “Slow down, follow the rhythm, and give your body a moment.”

Navigation requirement:
For every ending or terminal screen, include a clear way for the user to either return to service or return to the main check-in screen.

Navigation options:
- Include a subtle top-left back arrow to return to the previous screen.
- Include clear bottom action buttons where appropriate:
  - “Return to service” → returns to the welcome screen with “Let’s Hit Pause”
  - “Return to check-in” → returns to the main check-in screen with the six feeling buttons
  - “Do another breathing reset” → returns to the 4-7-8 Breathing Timer

Create the following screens:

SCREEN 1: Breathing Reset Intro

Purpose:
This is the first screen after the user selects “I’m feeling anxious.” It should gently introduce the breathing reset and make the user feel safe, calm, and unpressured.

Title:
“Breathing Reset”

Subtitle:
“Let’s slow things down for a moment.”

Body:
“Try a calming 4-7-8 rhythm: inhale, hold, then exhale slowly.”

Comfort note:
“If holding your breath feels uncomfortable, shorten the hold or skip it.”

Buttons:
- “Start 4-7-8 reset”
- “Choose another tool”

Button behavior:
- “Start 4-7-8 reset” → Screen 2: 4-7-8 Breathing Timer
- “Choose another tool” → returns to the main check-in screen or tool options screen

Design:
- Use #9AB17A as the main background.
- Place content inside a soft rounded card using #C3CC9B or a lighter tonal variation.
- Use #E4DFB5 for both buttons.
- Use #2F2F2F for text and icons.
- Keep all text and buttons centered.
- Add small simple icons to the buttons if appropriate:
  - breath/circle icon for “Start 4-7-8 reset”
  - list/grid icon for “Choose another tool”
- Keep the layout calm, open, and spacious.
- Include subtle top-left back arrow.

SCREEN 2: 4-7-8 Breathing Timer

Purpose:
This screen guides the user through a calming paced-breathing exercise for anxiety.

Title:
“4-7-8 Breathing”

Subtitle:
“Follow the rhythm. No need to force it.”

Breathing rhythm:
- Inhale for 4 seconds
- Hold for 7 seconds
- Exhale for 8 seconds

Default duration:
- 4 full cycles
- Total time: 76 seconds

Optional longer duration:
- 6 full cycles
- Total time: 1 minute 54 seconds

Text states:
- “Inhale”
- “Hold”
- “Exhale”
- “Let your body soften”

Safety/comfort note:
“If holding your breath feels uncomfortable, shorten the hold or skip it.”

Design:
- Use #9AB17A as the main background.
- Use a large centered breathing circle as the primary visual element.
- The circle should expand during the 4-second inhale.
- The circle should stay gently still or softly glow during the 7-second hold.
- The circle should slowly contract during the 8-second exhale.
- Add a subtle 60 BPM pulse around the timer or outer ring throughout the exercise.
- The pulse should be soft and calming, not distracting.
- Include a visible countdown for each phase.
- Include cycle progress, such as “Cycle 1 of 4.”
- Keep all content centered, including title, subtitle, timer text, countdown, and buttons.
- Use #2F2F2F for text and timer labels.
- Use #C3CC9B or #E4DFB5 for the breathing circle, timer ring, and soft visual accents.
- Use subtle fade transitions between breathing phases.
- Keep the experience calm, focused, and rhythmic.

Buttons:
- “Start breathing”
- “End reset”

Button behavior:
- “Start breathing” begins the breathing timer.
- “End reset” routes to Screen 3: Post-Breath Check-In or back to Screen 1 if the design needs a softer exit.

Navigation:
- Include subtle top-left back arrow before the timer begins.
- During the timer, keep navigation minimal so the user can stay focused.

Completion behavior:
After the final cycle, route to Screen 3: Post-Breath Check-In.

SCREEN 3: Post-Breath Check-In

Purpose:
This screen lets the user quickly assess how they feel after the breathing reset.

Title:
“How do you feel now?”

Subtitle:
“Pick what feels closest.”

Buttons:
- “A little calmer”
- “Still anxious”
- “More grounded”
- “I need another minute”

Button behavior:
- “A little calmer” → Screen 4: Ready Screen
- “More grounded” → Screen 4: Ready Screen
- “Still anxious” → Screen 5: Still Feeling It?
- “I need another minute” → returns to Screen 2: 4-7-8 Breathing Timer

Design:
- Use #9AB17A as the main background.
- Use a soft rounded card or container with #C3CC9B.
- Use #E4DFB5 for all buttons.
- Use #2F2F2F for all text and icons.
- Keep all content centered.
- Use large rounded buttons with centered text.
- Add small simple icons to buttons if helpful, but keep icons subtle.
- Include subtle top-left back arrow.

SCREEN 4: Ready Screen

Purpose:
This screen closes the breathing reset with calm, supportive language.

Title:
“You’re here.”

Body:
“Take one more breath. You do not have to rush your body back to calm — just return to the next moment.”

Buttons:
- “Return to service”
- “Return to check-in”
- “Do another breathing reset”

Button behavior:
- “Return to service” → returns to the welcome screen with “Let’s Hit Pause”
- “Return to check-in” → returns to the main check-in screen with the six feeling buttons
- “Do another breathing reset” → returns to Screen 2: 4-7-8 Breathing Timer

Design:
- Use a soft rounded card container.
- Use #C3CC9B for the card/container.
- Use #E4DFB5 for all buttons.
- Use #2F2F2F for all text and icons.
- Keep all content centered.
- Add small simple icons to the buttons:
  - home/pause/ambulance-style icon for “Return to service”
  - list/grid icon for “Return to check-in”
  - refresh/reset icon for “Do another breathing reset”
- Make the screen feel like a completed reset, not a warning or alert.
- Include subtle top-left back arrow.

SCREEN 5: Still Feeling It?

Condition:
This screen appears if the user selects “Still anxious” on the post-breath check-in screen.

Title:
“Still feeling it?”

Body:
“That’s okay. Anxiety does not have to disappear for you to keep moving. Choose one small support.”

Buttons:
- “Do another breathing reset”
- “Try grounding instead”
- “Talk to a peer”
- “Return to check-in”
- “Return to service”

Button behavior:
- “Do another breathing reset” → returns to Screen 2: 4-7-8 Breathing Timer
- “Try grounding instead” → routes to the grounding reset flow if available
- “Talk to a peer” → routes to the peer support screen if available
- “Return to check-in” → returns to the main check-in screen with the six feeling buttons
- “Return to service” → returns to the welcome screen with “Let’s Hit Pause”

Design:
- Use #9AB17A as the background.
- Use a soft rounded card/container in #C3CC9B.
- Use #E4DFB5 for all buttons.
- Use #FBE8CE only as a subtle warm accent if needed, not as the main button color.
- Use #2F2F2F for all text and icons.
- Keep all content centered.
- Add small simple icons to buttons if helpful:
  - refresh icon for “Do another breathing reset”
  - grounding/hand icon for “Try grounding instead”
  - chat icon for “Talk to a peer”
  - list/grid icon for “Return to check-in”
  - home/pause icon for “Return to service”
- Keep the tone validating, not urgent.
- Include subtle top-left back arrow.

Animation requirements:
- Use gentle fade or slide transitions between screens.
- The timer phase changes should fade smoothly from one phase to the next.
- The breathing circle should animate smoothly:
  - expand on inhale
  - softly hold/glow during hold
  - contract on exhale
- Add a subtle 60 BPM pulse around the timer or outer ring.
- Buttons should have subtle tap feedback.
- Avoid flashy, distracting, or high-energy animations.

Final visual requirements:
- Make all screens visually cohesive with the existing Tactical Pause welcome and check-in screens.
- Prioritize calmness, speed, clarity, accessibility, and one-handed mobile use.
- Use consistent spacing, corner radius, shadows, and button hierarchy.
- Use the same button color system across all screens.
- Keep all text, buttons, and button labels centered.
- Include small simple icons on buttons, but keep them subtle and cohesive.
- The final result should be a polished, mobile-first app flow that can later be translated into code.
Design the complete follow-up flow for the “I just need a minute” button in the Tactical Pause mobile-first web app.

Context:
Tactical Pause is a calm mental health check-in and stress-regulation app for EMTs and first responders. This specific pathway should support users who do not want to explain what they are feeling and simply need one quick reset.

This should be the simplest and lowest-effort pathway in the app. It should not ask the user to rate anything, explain anything, type anything, or choose from too many options. The goal is to give the user one structured minute to pause, breathe, ground, and return to the present moment.

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

Do not make any of the main check-in buttons a different color. Use emphasis colors only inside follow-up pathways if needed.

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
- Use #FBE8CE only for gentle emphasis or support-related warmth if needed.
- Use #2F2F2F for all main text, icons, and labels.
- Add small, simple icons to buttons where appropriate.
- Icons should be minimal, clean, and cohesive with the soft UI style.
- Include a subtle back arrow in the top left of each follow-up screen to return to the previous screen.
- Add minimal transitions throughout the flow so the app does not feel rigid.
- Use gentle fade or slide transitions between screens.
- Buttons should have subtle tap feedback, such as slight scale-down, soft shadow shift, or soft color response.
- Timer phase changes should transition smoothly.
- Avoid flashy animations, harsh contrast, or high-alert visual styling.

Timer animation requirement:
For the 60-second pause timer, use a subtle pulsing timer animation at approximately 60 BPM. The pulse should feel soft and calming, not distracting. Use a gentle scale or opacity pulse around the timer circle or inside the timer card to mimic a steady resting rhythm.

Timer containment requirement:
Keep all timer elements fully contained inside the rounded timer card, including:
- timer circle
- pulsing outer ring
- prompt text
- countdown
- progress indicator
- icons or small visual elements
- start/end buttons if part of the timer state

Do not let pulsing effects, icons, or animations overflow outside the card. Leave enough internal padding so animations have room to breathe.

Flow name:
60-Second Tactical Pause

Overall user flow:
User taps “I just need a minute”
→ 60-Second Pause intro
→ 60-second guided pause timer
→ Ready screen
→ User can return to service, return to check-in, or do another 60-second pause

Copy rules:
- Keep language extremely simple, supportive, and brief.
- Do not ask the user to explain anything.
- Do not ask the user to rate anything.
- Do not use clinical or diagnostic language.
- Do not give job-specific EMT instructions.
- The tone should communicate: “No explanation needed. Just take one minute.”

Navigation requirement:
For the ending screen, include a clear way for the user to either return to service or return to the main check-in screen.

Navigation options:
- Include a subtle top-left back arrow to return to the previous screen.
- Include clear bottom action buttons:
  - “Return to service” → returns to the welcome screen with “Let’s Hit Pause”
  - “Return to check-in” → returns to the main check-in screen with the six feeling buttons
  - “Do another 60-second pause” → returns to the 60-second timer

Create the following screens:

SCREEN 1: 60-Second Pause Intro

Purpose:
This is the first screen after the user selects “I just need a minute.” It should be minimal, calm, and low effort.

Title:
“60-Second Pause”

Subtitle:
“No check-in needed. Just take one minute.”

Body:
“Follow four simple prompts to steady your body and return to the present.”

Buttons:
- “Start 60-second pause”
- “Return to check-in”

Button behavior:
- “Start 60-second pause” → Screen 2: 60-Second Pause Timer
- “Return to check-in” → returns to the main check-in screen with the six feeling buttons

Design:
- Use #9AB17A as the main background.
- Place content inside a soft rounded card using #C3CC9B or a lighter tonal variation.
- Use #E4DFB5 for both buttons.
- Use #2F2F2F for text and icons.
- Keep all content centered.
- Add small simple icons to the buttons if appropriate:
  - timer/pause icon for “Start 60-second pause”
  - list/grid icon for “Return to check-in”
- Keep the layout calm, open, and spacious.
- Include subtle top-left back arrow.

SCREEN 2: 60-Second Pause Timer

Purpose:
This screen gives the user one structured minute to pause without needing to explain anything.

Title:
“Just This Minute”

Subtitle:
“Follow one prompt at a time.”

Timer:
- Total duration: 60 seconds
- Each prompt lasts 15 seconds
- Use a timed step-by-step system
- Include a visible countdown timer
- Include a progress indicator, such as “1 of 4”

Timed sequence:
1. “Drop your shoulders.” — 15 seconds
2. “Unclench your jaw.” — 15 seconds
3. “Take one slow breath.” — 15 seconds
4. “Notice the next moment.” — 15 seconds

Design:
- Place the full timed pause inside one large centered rounded card using #C3CC9B or a lighter tonal variation.
- The timer card must contain all timer elements, including timer circle, pulsing outer ring, phase/prompt label, countdown, progress indicator, and timer buttons.
- Use a subtle 60 BPM pulse around the timer circle or inside the timer card.
- The pulse should remain fully contained within the timer card and should not overflow outside the card.
- Include a simple calming icon or soft abstract pause/breath visual if helpful.
- Keep all content centered, including title, subtitle, timer card, timer text, countdown, and buttons.
- Use #2F2F2F for text and timer labels.
- Use #C3CC9B or #E4DFB5 for the timer circle, timer ring, and soft visual accents.
- Use subtle fade transitions between each 15-second prompt.
- Do not visually reset to the start state between prompts.
- Keep the experience calm, focused, contained, and rhythmic.

Buttons:
- “Start pause”
- “End pause”

Button behavior:
- “Start pause” begins the 60-second timer.
- “End pause” → routes to Screen 3: Ready Screen

Navigation:
- Include subtle top-left back arrow before the timer begins.
- During the timer, keep navigation minimal so the user can stay focused.

Completion behavior:
After the final 15-second prompt, smoothly route to Screen 3: Ready Screen.

SCREEN 3: Ready Screen

Purpose:
This screen closes the 60-second pause with calm, supportive language.

Title:
“You took a pause.”

Body:
“One minute can be enough to interrupt the rush. Take one breath and return to the next moment.”

Optional small completion line:
“That counted.”

Buttons:
- “Return to service”
- “Return to check-in”
- “Do another 60-second pause”

Button behavior:
- “Return to service” → returns to the welcome screen with “Let’s Hit Pause”
- “Return to check-in” → returns to the main check-in screen with the six feeling buttons
- “Do another 60-second pause” → returns to Screen 2: 60-Second Pause Timer

Design:
- Use #9AB17A as the background.
- Use a soft rounded card/container in #C3CC9B.
- Use #E4DFB5 for all buttons.
- Use #2F2F2F for all text and icons.
- Keep all content centered.
- Add small simple icons to the buttons:
  - home/pause/ambulance-style icon for “Return to service”
  - list/grid icon for “Return to check-in”
  - refresh/reset icon for “Do another 60-second pause”
- Make the screen feel like a completed reset, not a warning or alert.
- Include subtle top-left back arrow.

Animation requirements:
- Use gentle fade or slide transitions between screens.
- All interactive buttons should have subtle tap feedback.
- Timer prompt changes should fade smoothly from one prompt to the next.
- The timer circle should pulse softly at approximately 60 BPM.
- Do not let the timer screen visually reset at the end of each prompt.
- At the end of the full timer, smoothly transition to the Ready Screen.
- Avoid flashy, distracting, or high-energy animations.

Final visual requirements:
- Make all screens visually cohesive with the existing Tactical Pause welcome and check-in screens.
- Prioritize calmness, speed, clarity, accessibility, and one-handed mobile use.
- Use consistent spacing, corner radius, shadows, and button hierarchy.
- Use the same button color system across all screens.
- Keep all text, buttons, and button labels centered.
- Include small simple icons on buttons, but keep them subtle and cohesive.
- Ensure the timer card contains the full animation and pulse system.
- The final result should be a polished, mobile-first app flow that can later be translated into code.
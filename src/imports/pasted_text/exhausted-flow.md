Design the complete follow-up flow for the “I’m exhausted” button in the Tactical Pause mobile-first web app.

Context:
Tactical Pause is a calm mental health check-in and stress-regulation app for EMTs and first responders. This specific pathway should support users who feel physically tired, mentally drained, foggy, heavy, or depleted.

This should feel like a mindfulness-based fatigue check and body reset, NOT a clinical fatigue assessment and NOT an operational guide for how EMTs should do their job. The goal is to help the user notice their exhaustion, check what their body may need, take a short micro-recovery pause, and choose one small support.

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
- Use #FBE8CE only for gentle emphasis, safety notes, or support-related warmth.
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
For all timer-based exercises, use a subtle pulsing timer animation at approximately 60 BPM. The pulse should feel soft and calming, not distracting. Use a gentle scale or opacity pulse around the timer circle or inside the timer card to mimic a steady resting rhythm.

Timer containment requirement:
For all timer-based exercises, keep all elements fully contained inside the rounded timer card, including:
- timer circle
- pulsing outer ring
- prompt text
- countdown
- progress indicator
- icons or small visual elements
- start/end buttons if part of the timer state

Do not let pulsing effects, icons, or animations overflow outside the card. Leave enough internal padding so animations have room to breathe.

Flow name:
Fatigue Check / Micro-Recovery Reset

Overall user flow:
User taps “I’m exhausted”
→ Fatigue Check intro
→ Quick fatigue rating
→ Body needs check
→ Micro-Recovery Reset
→ Choose one small support
→ Ready / next step screen
→ User can return to service, return to check-in, or do another fatigue reset

Optional conditional flow:
If the user selects a high fatigue rating, show a gentle High Fatigue Support screen before continuing to the micro-recovery reset.

Copy rules:
- Keep language supportive, brief, and practical.
- Do not provide clinical diagnosis language.
- Do not give job-specific EMT instructions.
- Do not tell the user how to drive, chart, treat patients, restock, or perform work tasks.
- Keep the focus on body awareness, fatigue recognition, and one small recovery support.
- The tone should communicate: “Notice your exhaustion, take a breath, and choose one small support.”

Navigation requirement:
For every ending or terminal screen, include a clear way for the user to either return to service or return to the main check-in screen.

Navigation options:
- Include a subtle top-left back arrow to return to the previous screen.
- Include clear bottom action buttons where appropriate:
  - “Return to service” → returns to the welcome screen with “Let’s Hit Pause”
  - “Return to check-in” → returns to the main check-in screen with the six feeling buttons
  - “Do another fatigue reset” → returns to the Micro-Recovery Reset timer

Create the following screens:

SCREEN 1: Fatigue Check Intro

Purpose:
This is the first screen after the user selects “I’m exhausted.” It should gently introduce the fatigue check and help the user notice what their body may need.

Title:
“Fatigue Check”

Subtitle:
“Let’s check what your body needs before you push through.”

Body:
“Exhaustion can affect your mood, focus, and stress response. Take a moment to notice what your body is asking for.”

Buttons:
- “Start fatigue check”
- “Return to check-in”

Button behavior:
- “Start fatigue check” → Screen 2: Quick Fatigue Rating
- “Return to check-in” → returns to the main check-in screen with the six feeling buttons

Design:
- Use #9AB17A as the main background.
- Place content inside a soft rounded card using #C3CC9B or a lighter tonal variation.
- Use #E4DFB5 for both buttons.
- Use #2F2F2F for text and icons.
- Keep all content centered.
- Add small simple icons to the buttons if appropriate:
  - moon/body/battery icon for “Start fatigue check”
  - list/grid icon for “Return to check-in”
- Keep the layout calm, open, and spacious.
- Include subtle top-left back arrow.

SCREEN 2: Quick Fatigue Rating

Purpose:
This screen helps the user quickly identify how tired they feel.

Title:
“How tired are you right now?”

Subtitle:
“Pick what feels closest.”

Buttons:
- “1 — A little tired”
- “2 — Drained”
- “3 — Heavy / foggy”
- “4 — Struggling to stay alert”
- “5 — I do not feel okay”

Button behavior:
- If user selects 1, 2, or 3 → Screen 3: Body Needs Check
- If user selects 4 or 5 → Screen 2A: High Fatigue Support

Design:
- Use #9AB17A as the background.
- Use a rounded card/container in #C3CC9B.
- Use #E4DFB5 for all rating buttons.
- Use #2F2F2F for all text and icons.
- Keep all text and button labels centered.
- Use large stacked buttons for readability.
- Add minimal icons if helpful, but keep them subtle.
- Include subtle top-left back arrow.

SCREEN 2A: High Fatigue Support

Condition:
This screen appears only if the user selects:
- “4 — Struggling to stay alert”
- “5 — I do not feel okay”

Purpose:
This screen provides gentle safety-oriented support without becoming alarming or operational.

Title:
“Pause before pushing through.”

Body:
“If you feel unsafe, overly foggy, or unable to continue, reach out to your partner, supervisor, or someone nearby. You do not have to push through this alone.”

Buttons:
- “Continue to reset”
- “Return to check-in”
- “Return to service”

Button behavior:
- “Continue to reset” → Screen 3: Body Needs Check or Screen 4: Micro-Recovery Reset
- “Return to check-in” → returns to the main check-in screen with the six feeling buttons
- “Return to service” → returns to the welcome screen with “Let’s Hit Pause”

Design:
- Use #9AB17A as the background.
- Use a rounded card/container in #C3CC9B.
- Use #FBE8CE only as a soft support/warmth accent if needed.
- Use #E4DFB5 for buttons.
- Use #2F2F2F for all text and icons.
- Keep all content centered.
- This should feel supportive and grounded, not alarming or emergency-like.
- Include subtle top-left back arrow.

SCREEN 3: Body Needs Check

Purpose:
This screen helps the user identify what type of recovery support their body may need.

Title:
“What does your body need most?”

Subtitle:
“Pick one small support.”

Buttons:
- “Water”
- “Food”
- “Rest”
- “Movement”
- “Quiet”
- “I’m not sure”

Button behavior:
- Any selection → Screen 4: Micro-Recovery Reset

Design:
- Use #9AB17A as the background.
- Use a rounded card/container in #C3CC9B.
- Use #E4DFB5 for all buttons.
- Use #2F2F2F for all text and icons.
- Keep all content centered.
- Use a clean grid or stacked layout depending on mobile usability.
- Add small simple icons to buttons if helpful:
  - water drop for “Water”
  - small bowl/apple for “Food”
  - moon/rest icon for “Rest”
  - gentle movement icon for “Movement”
  - quiet/sound-off icon for “Quiet”
  - question mark icon for “I’m not sure”
- Include subtle top-left back arrow.

SCREEN 4: Micro-Recovery Reset

Purpose:
This screen gives the user a short body-based reset to help them pause before continuing.

Title:
“Micro-Recovery Reset”

Subtitle:
“Take one minute to come back to your body.”

Timer:
- Total duration: 60 seconds
- Each prompt lasts 15 seconds
- Use a timed step-by-step system
- Include a visible countdown timer
- Include a progress indicator, such as “1 of 4”

Timed sequence:
1. “Unclench your jaw.” — 15 seconds
2. “Drop your shoulders.” — 15 seconds
3. “Take one slow breath.” — 15 seconds
4. “Notice what your body needs next.” — 15 seconds

Design:
- Place the full timed reset inside one large centered rounded card using #C3CC9B or a lighter tonal variation.
- The timer card must contain all timer elements, including timer circle, pulsing outer ring, phase/prompt label, countdown, progress indicator, and timer buttons.
- Use a subtle 60 BPM pulse around the timer circle or inside the timer card.
- The pulse should remain fully contained within the timer card and should not overflow outside the card.
- Include a simple calming icon or soft abstract body/breath visual if helpful.
- Keep all content centered, including title, subtitle, timer card, timer text, countdown, and buttons.
- Use #2F2F2F for text and timer labels.
- Use #C3CC9B or #E4DFB5 for the timer circle, timer ring, and soft visual accents.
- Use subtle fade transitions between each 15-second prompt.
- Do not visually reset to the start state between prompts.
- Keep the experience calm, focused, contained, and rhythmic.

Buttons:
- “Start reset”
- “End reset”

Button behavior:
- “Start reset” begins the 60-second timer.
- “End reset” → routes to Screen 5: Choose One Small Support

Navigation:
- Include subtle top-left back arrow before the timer begins.
- During the timer, keep navigation minimal so the user can stay focused.

Completion behavior:
After the final 15-second prompt, smoothly route to Screen 5: Choose One Small Support.

SCREEN 5: Choose One Small Support

Purpose:
This screen helps the user choose one gentle recovery support after the micro-reset.

Title:
“Choose one small support.”

Subtitle:
“You do not have to recover all at once. Start with one need.”

Buttons:
- “Drink water”
- “Eat something if available”
- “Take a quiet minute”
- “Move gently”
- “Rest if possible”
- “Talk to someone”

Button behavior:
- Any selection → Screen 6: Ready / Next Step Screen
- “Talk to someone” can also route to a Peer Support screen if one already exists in the prototype

Design:
- Use #9AB17A as the background.
- Use a rounded card/container in #C3CC9B.
- Use #E4DFB5 for all buttons.
- Use #2F2F2F for all text and icons.
- Keep all content centered.
- Add small simple icons to buttons if helpful:
  - water drop
  - food icon
  - quiet/sound-off icon
  - gentle movement icon
  - moon/rest icon
  - chat icon
- Use large touch-friendly buttons.
- Include subtle top-left back arrow.

SCREEN 6: Ready / Next Step Screen

Purpose:
This screen closes the fatigue flow with calm, supportive language.

Title:
“One step is enough.”

Body:
“You noticed your exhaustion instead of ignoring it. Take one breath, choose one support, and move forward gently.”

Buttons:
- “Return to service”
- “Return to check-in”
- “Do another fatigue reset”

Button behavior:
- “Return to service” → returns to the welcome screen with “Let’s Hit Pause”
- “Return to check-in” → returns to the main check-in screen with the six feeling buttons
- “Do another fatigue reset” → returns to Screen 4: Micro-Recovery Reset

Design:
- Use #9AB17A as the background.
- Use a soft rounded card/container in #C3CC9B.
- Use #E4DFB5 for all buttons.
- Use #2F2F2F for all text and icons.
- Keep all content centered.
- Add small simple icons to the buttons:
  - home/pause/ambulance-style icon for “Return to service”
  - list/grid icon for “Return to check-in”
  - refresh/reset icon for “Do another fatigue reset”
- Make the screen feel like a completed reset, not a warning or alert.
- Include subtle top-left back arrow.

Animation requirements:
- Use gentle fade or slide transitions between screens.
- All interactive buttons should have subtle tap feedback.
- Timer prompt changes should fade smoothly from one prompt to the next.
- The timer circle should pulse softly at approximately 60 BPM.
- Do not let timer screens visually reset at the end of each prompt.
- At the end of the full timer, smoothly transition to the next screen.
- Avoid flashy, distracting, or high-energy animations.

Final visual requirements:
- Make all screens visually cohesive with the existing Tactical Pause welcome and check-in screens.
- Prioritize calmness, speed, clarity, accessibility, and one-handed mobile use.
- Use consistent spacing, corner radius, shadows, and button hierarchy.
- Use the same button color system across all screens.
- Keep all text, buttons, and button labels centered.
- Include small simple icons on buttons, but keep them subtle and cohesive.
- Ensure all timer cards contain their full animation and pulse systems.
- The final result should be a polished, mobile-first app flow that can later be translated into code.
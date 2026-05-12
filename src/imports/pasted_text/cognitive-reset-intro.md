Design the complete follow-up flow for the “I need to focus” button in the Tactical Pause mobile-first web app.

Context:
Tactical Pause is a calm mental health check-in and stress-regulation app for EMTs and first responders. This specific pathway should support users who feel mentally scattered, overstimulated, distracted, or unable to focus. It should help them pause, breathe, re-orient, and identify what needs their attention next.

This should feel like a mindfulness-based cognitive reset, NOT a productivity tool and NOT an operational guide for how EMTs should do their job. Do not provide job-specific instructions. The goal is to help the user steady their mind and return to the present moment.

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
- Add subtle animations for screen transitions and button interactions.
- Use gentle slide/fade transitions between screens.
- Buttons should have subtle tap feedback, such as slight scale-down, soft shadow shift, or soft color response.
- Avoid flashy animations, harsh contrast, or high-alert visual styling.

Flow name:
Cognitive Reset / Focus Reset

Overall user flow:
User taps “I need to focus”
→ Cognitive Reset intro
→ 60-second timed focus reset
→ Focus check
→ Ready screen with supportive text
→ User can return to service, return to check-in, or do another focus reset

Copy rules:
- Keep language supportive, brief, and practical.
- Do not provide clinical diagnosis language.
- Do not give job-specific EMT instructions.
- Do not tell the user how to drive, chart, treat patients, restock, or perform work tasks.
- This is a mindfulness and mental reset tool.
- The tone should communicate: “Pause, breathe, choose one point of focus, and take the next step.”

Navigation requirement:
For every ending or terminal screen, include a clear way for the user to either return to service or return to the main check-in screen.

Navigation options:
- Include a subtle top-left back arrow to return to the previous screen.
- Include clear bottom action buttons where appropriate:
  - “Return to service” → returns to the welcome screen with “Let’s Hit Pause”
  - “Return to check-in” → returns to the main check-in screen with the six feeling buttons
  - “Do another focus reset” → returns to the 60-second Focus Reset timer

Create the following screens:

SCREEN 1: Cognitive Reset Intro

Purpose:
This is the first screen after the user selects “I need to focus.” It should gently introduce the reset and help the user feel less scattered.

Title:
“Cognitive Reset”

Subtitle:
“Let’s clear the noise and give your mind one place to land.”

Buttons:
- “Start 60-second reset”
- “Skip to focus check”

Button behavior:
- “Start 60-second reset” → Screen 2: 60-Second Focus Reset
- “Skip to focus check” → Screen 3: Focus Check

Design:
- Use #9AB17A as the main background.
- Place content inside a soft rounded card using #C3CC9B or a lighter tonal variation.
- Use #E4DFB5 for both buttons.
- Use #2F2F2F for text and icons.
- Add small simple icons to the buttons if appropriate:
  - timer/breath icon for “Start 60-second reset”
  - arrow/target icon for “Skip to focus check”
- Keep the layout calm, open, and spacious.
- Include subtle top-left back arrow.

SCREEN 2: 60-Second Focus Reset

Purpose:
This screen guides the user through a short timed reset to steady attention.

Title:
“Focus Reset”

Subtitle:
“Follow one prompt at a time.”

Create a timer-based focus reset:
- Total duration: 60 seconds
- Each prompt lasts 15 seconds
- Use a timed step-by-step system
- Include a visible countdown timer
- Include a progress indicator, such as “1 of 4”

Timed sequence:
1. “Look at one steady point.” — 15 seconds
2. “Take one slow breath.” — 15 seconds
3. “Relax your jaw and shoulders.” — 15 seconds
4. “Name what needs your attention next.” — 15 seconds

Design:
- Show one prompt at a time inside a rounded card.
- Include a visible circular or linear countdown timer.
- Include the progress indicator near the timer or prompt card.
- Include a primary button such as “Start reset” before the timer begins.
- Once the timer begins, transition automatically through each prompt every 15 seconds.
- Optionally include a small “End reset” text action.
- Use subtle fade transitions between prompts.
- Use a calm visual element such as a soft circle, subtle breathing pulse, or small focus icon.
- Keep the experience calm, focused, and rhythmic.
- Include subtle top-left back arrow before the timer begins. During the timer, keep navigation minimal so the user can stay focused.

Completion behavior:
- After the final 15-second prompt, route to Screen 3: Focus Check.

SCREEN 3: Focus Check

Purpose:
This screen helps the user name what needs their attention without giving operational instructions.

Title:
“What needs your focus next?”

Subtitle:
“Name it so your mind has one place to land.”

Buttons:
- “Driving”
- “Charting”
- “Patient care”
- “Restocking”
- “Talking to someone”
- “Returning to service”
- “Something else”

Button behavior:
- Any button selection → Screen 4: Ready Screen

Design:
- Use rounded selectable chips or rounded buttons.
- Use #E4DFB5 for all buttons.
- Use #2F2F2F for text and icons.
- Add small simple icons to the buttons if helpful, but keep them minimal and not overly literal.
- Use a clean mobile-friendly grid or stacked button layout.
- Keep generous spacing and large tap targets.
- Include subtle top-left back arrow.

Important:
Do not show task-specific advice after the user selects one of these buttons. The user is only naming the area of focus. Regardless of what they select, they should be routed to the same supportive Ready Screen.

SCREEN 4: Ready Screen

Purpose:
This screen should close the cognitive reset with calm, motivating language that helps the user move forward without giving job-specific instructions.

Title:
“You’re set.”

Body:
“One clear next step is enough. Take a breath, trust your training, and move forward one task at a time.”

Buttons:
- “Return to service”
- “Return to check-in”
- “Do another focus reset”

Button behavior:
- “Return to service” → returns to the welcome screen with “Let’s Hit Pause”
- “Return to check-in” → returns to the main check-in screen with the six feeling buttons
- “Do another focus reset” → returns to Screen 2: 60-Second Focus Reset

Design:
- Use a soft rounded card container.
- Use #C3CC9B for the card/container.
- Use #E4DFB5 for all buttons.
- Use #2F2F2F for all text and icons.
- Add small simple icons to the buttons:
  - home/pause/ambulance-style icon for “Return to service”
  - list/grid icon for “Return to check-in”
  - refresh/reset icon for “Do another focus reset”
- Keep the tone supportive and calm.
- Make the screen feel like a completed reset, not a warning or alert.
- Include subtle top-left back arrow.

Animation requirements:
- Use gentle fade or slide transitions between screens.
- The timer prompt changes should fade smoothly from one prompt to the next.
- Buttons should have subtle tap feedback.
- Avoid flashy, distracting, or high-energy animations.

Final visual requirements:
- Make all screens visually cohesive with the existing Tactical Pause welcome and check-in screens.
- Prioritize calmness, speed, clarity, accessibility, and one-handed mobile use.
- Use consistent spacing, corner radius, shadows, and button hierarchy.
- Use the same button color system across all screens.
- Include small simple icons on buttons, but keep them subtle and cohesive.
- The final result should be a polished, mobile-first app flow that can later be translated into code.
Design the complete follow-up flow for the “I’m stressed after a call” button in the Tactical Pause mobile-first web app.

Context:
Tactical Pause is a calm mental health check-in and stress-regulation app for EMTs and first responders. This specific pathway should support EMTs after a stressful or difficult call. It should NOT feel like formal therapy, clinical trauma processing, or a forced debrief. The goal is brief post-call stabilization: check safety, name the current state, ground in the present, and choose one next step.

This flow should feel supportive, calm, practical, and EMT-specific. It should help the user reset without forcing them to explain or relive the call.

Use the existing Tactical Pause design system:
- #9AB17A = primary background
- #C3CC9B = secondary containers/cards
- #E4DFB5 = interactive elements/buttons
- #FBE8CE = emphasis/alerts or gentle warmth
- #2F2F2F = soft charcoal text/icons

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
Post-Call Reset

Overall user flow:
User taps “I’m stressed after a call”
→ Post-Call Reset safety check
→ If “I need help,” show Get Support Now screen
→ If “Yes,” show emotion selection screen
→ User completes 2-minute timed grounding reset
→ User chooses one next step
→ Optional private reflection, peer support, another grounding reset, return to options, or return to service

Copy rules:
- Avoid the word “debrief.”
- Avoid asking the user to describe exactly what happened.
- Avoid prompts like “What was the worst part?” or “Tell the full story.”
- Keep copy brief, practical, supportive, and validating.
- The user should never feel pressured to process the full call.
- The tone should communicate: “You are safe to pause. You can choose one next step.”

Navigation requirement:
For every ending or terminal screen, include a clear way for the user to either return to service or return to the check-in options.

Ending screens include:
- Get Support Now
- Private Reflection
- Peer Support
- Completed Grounding Reset / Choose One Next Step

Navigation options:
- Include a subtle top-left back arrow to return to the previous screen.
- Also include clear bottom action buttons where appropriate:
  - “Return to service” → returns to the welcome screen / Screen 1 with “Let’s Hit Pause”
  - “Return to options” → returns to the main check-in screen with the feeling buttons
- Do not overcrowd the screen. If both buttons feel too busy, prioritize “Return to options” on support screens and “Return to service” after completion screens.

Create the following screens:

SCREEN 1: Post-Call Reset Intro / Safety Check

Purpose:
This is the first screen after the user selects “I’m stressed after a call.” It should orient them to a brief stabilizing reset.

Title:
“Post-Call Reset”

Subtitle:
“You do not have to process the whole call right now. Let’s steady your body and choose one next step.”

Question:
“Are you physically safe right now?”

Buttons:
- “Yes”
- “I need help”

Button behavior:
- “Yes” → Screen 2B: Emotion Selection
- “I need help” → Screen 2A: Get Support Now

Design:
- Use #9AB17A as the main background.
- Place content inside a soft rounded card using #C3CC9B or a lighter tonal variation.
- Use consistent button colors across both buttons.
- Use #E4DFB5 for both standard buttons to maintain consistency.
- Use #2F2F2F for text and icons.
- Add small simple icons to the buttons:
  - check icon for “Yes”
  - support/hand/alert-style icon for “I need help”
- Keep the screen calm, supportive, and spacious.
- Include subtle top-left back arrow.

SCREEN 2A: Get Support Now

Condition:
This screen appears if the user selects “I need help.”

Title:
“Get Support Now”

Body text:
“Move to a safe location if you can. Tell your partner, supervisor, or dispatch that you need help.”

Design:
- Remove support action buttons from this screen.
- This should be a simple supportive information screen with only the body text plus navigation.
- Use a soft emphasized card or container, potentially using #FBE8CE in a gentle way.
- Keep the overall tone calm and clear, not alarming.
- Use #2F2F2F for all text.
- Include a subtle top-left back arrow.

Navigation:
- Add a bottom button: “Return to options”
- Add another optional bottom button: “Return to service”
- Use consistent button styling and color treatment.
- Add small icons if helpful:
  - list/grid icon for “Return to options”
  - home/pause/ambulance-style icon for “Return to service”

SCREEN 2B: Emotion Selection

Condition:
This screen appears if the user selects “Yes” on the safety check.

Title:
“What are you carrying from that call?”

Subtitle:
“Pick what feels closest. No need to explain.”

Emotion chips/buttons:
- “Stress”
- “Sadness”
- “Anger”
- “Guilt”
- “Numbness”
- “Overwhelm”
- “I’m okay”

Behavior:
- Selecting any chip routes to Screen 3: Grounding Reset

Design:
- Use rounded selectable chips or rounded buttons.
- Keep button/chip colors visually consistent with the design system.
- Use #E4DFB5 for the chips/buttons.
- Keep text and icons in #2F2F2F.
- Add small simple icons to the chips if helpful, but keep them minimal and cohesive.
- Use a clean mobile-friendly grid or stacked chip layout.
- Keep generous spacing and large tap targets.
- Include subtle top-left back arrow.

SCREEN 3: Grounding Reset

Purpose:
This screen guides the user through a timed grounding exercise after they identify what they are carrying from the call.

Title:
“Grounding Reset”

Subtitle:
“Take two minutes. Follow one prompt at a time.”

Create a timer-based grounding exercise:
- Total duration: 2 minutes
- Each prompt lasts 20 seconds
- Use a timed step-by-step system
- Include a visible countdown timer
- Include a progress indicator, such as “1 of 6”

Timed sequence:
1. “Name 3 things you can see.” — 20 seconds
2. “Feel both feet on the ground.” — 20 seconds
3. “Drop your shoulders.” — 20 seconds
4. “Take one slow breath.” — 20 seconds
5. “Name your next safe action.” — 20 seconds
6. “Stay with that next step and breathe.” — 20 seconds

Design:
- Show one prompt at a time inside a rounded card.
- Include a visible circular or linear countdown timer.
- Include the progress indicator near the timer or prompt card.
- Include a primary button such as “Start reset” before the timer begins.
- Once the timer begins, transition automatically through each prompt every 20 seconds.
- Optionally include a small “End reset” text action.
- Use subtle fade transitions between prompts.
- Use a calm visual element such as a soft circle, subtle breathing pulse, or grounding icon.
- Keep the experience calm, focused, and rhythmic.
- Include subtle top-left back arrow before the timer begins. During the timer, keep navigation minimal so the user can stay focused.

Completion behavior:
- After the final 20-second prompt, route to Screen 4: Choose One Next Step.

SCREEN 4: Choose One Next Step

Title:
“What do you need before the next call?”

Buttons:
- “Do another grounding reset”
- “Reflect privately”
- “Talk to a peer”
- “I am ready to return to service”

Button behavior:
- “Do another grounding reset” → returns to Screen 3: Grounding Reset
- “Reflect privately” → opens Screen 5: Private Reflection
- “Talk to a peer” → opens Screen 6: Peer Support
- “I am ready to return to service” → returns to the welcome screen / Screen 1 with “Let’s Hit Pause”

Design:
- Use large consistent rounded buttons with the same button color system used throughout the flow.
- Use #E4DFB5 for the main buttons.
- Use #2F2F2F for labels and icons.
- Add small simple icons to each button:
  - refresh/reset icon for “Do another grounding reset”
  - pencil/note icon for “Reflect privately”
  - chat/message icon for “Talk to a peer”
  - return/home/ambulance icon for “I am ready to return to service”
- Keep spacing generous and the layout clean.
- Make “I am ready to return to service” feel calm and neutral, not overly emphasized.
- Include subtle top-left back arrow.
- This screen counts as a completion/decision screen, so include clear navigation and avoid a dead end.

SCREEN 5: Private Reflection

Condition:
This screen appears if the user selects “Reflect privately.”

Title:
“Private Reflection”

Prompt:
“This is just for you. Your feelings are valid.”

Include:
- A small text area with placeholder text:
“Type a few words…”

Buttons:
- “Save note”
- “Skip”
- “Delete note”
- “Return to options”
- “Return to service”

Button behavior:
- “Save note” → saves the private note state visually and can show a gentle confirmation
- “Skip” → returns to Screen 4 or main options
- “Delete note” → clears the text area
- “Return to options” → returns to the main check-in screen with feeling buttons
- “Return to service” → returns to the welcome screen / Screen 1 with “Let’s Hit Pause”

Design:
- Keep the screen simple, warm, and supportive.
- Do not ask the user to describe the full call or traumatic details.
- Use a minimal text area that does not feel intimidating.
- Use the same consistent button styling and color treatment.
- Visually separate note actions from navigation actions near the bottom.
- Add small simple icons to the action buttons if helpful:
  - save icon for “Save note”
  - skip/arrow icon for “Skip”
  - trash icon for “Delete note”
  - list/grid icon for “Return to options”
  - home/pause icon for “Return to service”
- Include subtle top-left back arrow.

SCREEN 6: Peer Support

Condition:
This screen appears if the user selects “Talk to a peer.”

Title:
“Peer Support”

Body text:
“Sometimes you just need to talk it out. Reach out to your partner, supervisor, or a peer.”

Supporting subtitle:
“A quick reflection can break the stress cycle and help you reset for the next dispatch. You’re not in this shift alone.”

Design:
- This should be a calm text-based support screen.
- Use a soft rounded card container.
- Use #C3CC9B for the card/container or #FBE8CE for gentle warmth if it feels appropriate.
- Use #2F2F2F for all text and icons.
- Do not include direct contact/action buttons unless necessary.
- Keep the screen supportive and not overly clinical.
- Include subtle top-left back arrow.

Navigation:
- Add a bottom button: “Return to options”
- Add another optional bottom button: “Return to service”
- Use consistent button styling and color treatment.
- Add small simple icons if helpful:
  - list/grid icon for “Return to options”
  - home/pause/ambulance-style icon for “Return to service”

Final visual requirements:
- Make all screens visually cohesive with the existing Tactical Pause welcome and check-in screens.
- Prioritize calmness, speed, clarity, accessibility, and one-handed mobile use.
- Make the flow feel like a supportive pause, not an emergency alert system.
- Use consistent spacing, corner radius, shadows, and button hierarchy.
- Use the same button color system across all screens.
- Include small simple icons on buttons, but keep them subtle and cohesive.
- The final result should be a polished, mobile-first app flow that can later be translated into code.
Update the Tactical Pause prototype so the app feels less dependent on timer-based exercises and more like a varied mental health check-in and resource library.

Context:
Tactical Pause is a mobile-first mental health check-in and stress-regulation app for EMTs and first responders. The current app is working well, but too many flows rely on timer-based reflection. Keep timers where rhythm matters, but add more variety through choice-based check-ins, response cards, and supportive next-step screens.

Use the existing Tactical Pause design system:
- #9AB17A = primary background
- #C3CC9B = secondary containers/cards
- #E4DFB5 = interactive elements/buttons
- #FBE8CE = gentle emphasis/support accents only when needed
- #2F2F2F = soft charcoal text/icons

Global design requirements:
- Keep all text centered across all screens unless there is a strong usability reason not to.
- Center-align titles, subtitles, body text, prompts, button labels, timer text, and card text.
- Keep buttons large, rounded, and touch-friendly.
- Use consistent button colors across the whole app.
- Standard buttons should use #E4DFB5.
- Do not make one main check-in button a different color from the others.
- Add small simple icons to buttons where helpful, but keep icons subtle and cohesive.
- Keep all animations soft, minimal, and calming.
- Use gentle fade or slide transitions between screens.
- Avoid abrupt screen resets between timed segments.
- For timers, keep pulsing animations contained inside the timer card.
- Timer pulses should remain soft and approximately 60 BPM.

Interaction strategy:
Use three types of interactions across the app:

1. Timed tools
Use timers only where rhythm or duration matters:
- 4-7-8 breathing
- 60-second pause
- urge surfing
- optional grounding reset

2. Choice-based check-ins
Use button-based check-ins where the user is identifying a state or need:
- fatigue level
- body need
- craving type
- urge type
- focus target
- post-call emotion

3. Supportive response cards
Use cards to give tailored, nonjudgmental suggestions after a user selects an option:
- “Start with one small support.”
- “You do not have to fix everything right now.”
- “One clear next step is enough.”
- “You created space before reacting.”

Update the app so each pathway feels distinct:

“I’m feeling anxious”
- Keep the 4-7-8 breathing timer as the primary tool.
- This pathway can remain timer-based because breathing needs pacing.

“I just need a minute”
- Keep the 60-second pause timer as the primary tool.
- This should remain the fastest, simplest flow.

“I’m stressed after a call”
- Keep the grounding reset as one option, but make the overall flow feel like post-call stabilization, not just another timer.
- Keep safety check, emotion selection, grounding option, private reflection, peer support, and return options.
- Do not use the word “debrief.”
- Do not ask the user to explain the whole call.

“I need to focus”
- Keep the 60-second focus reset as optional.
- Make the main flow feel like a mindfulness-based focus check.
- The user names what needs their focus, then receives supportive text.
- Do not provide job-specific EMT instructions.
- Final supportive text should say:
“One clear next step is enough. Take a breath, trust your training, and move forward one task at a time.”

“I’m exhausted”
Update this flow so it is less timer-heavy.
The primary interaction should be a body-needs check, not a timer.

Recommended flow:
“I’m exhausted”
→ Fatigue Check intro
→ Quick fatigue rating
→ What does your body need?
→ Tailored support card
→ Optional micro-recovery reset
→ Ready screen

For “What does your body need most?” use buttons:
- Water
- Food
- Rest
- Movement
- Quiet
- I’m not sure

After the user selects a body need, show a tailored response card:

If Water:
Title: “Start with water.”
Body: “Take a few sips if you can. Let your body register the pause.”

If Food:
Title: “Start with something steady.”
Body: “If food is available, choose something small and grounding. You do not have to do everything at once.”

If Rest:
Title: “Rest counts.”
Body: “Even a quiet moment can help your body come down from running on empty.”

If Movement:
Title: “Shift the heaviness.”
Body: “A small stretch, posture shift, or gentle movement can help your body feel more awake.”

If Quiet:
Title: “Lower the noise.”
Body: “Give your mind one quiet minute. Less stimulation can be a reset too.”

If I’m not sure:
Title: “Start simple.”
Body: “Try one breath, one sip of water, or one quiet moment. Small support still counts.”

After each tailored support card, include buttons:
- Try a micro-recovery reset
- Choose another support
- Return to check-in
- Return to service

Micro-Recovery Reset should remain optional:
Title: “Micro-Recovery Reset”
Subtitle: “Take one minute to come back to your body.”
Timed sequence:
1. “Unclench your jaw.” — 15 seconds
2. “Drop your shoulders.” — 15 seconds
3. “Take one slow breath.” — 15 seconds
4. “Notice what your body needs next.” — 15 seconds

Ready screen:
Title: “One step is enough.”
Body: “You noticed your exhaustion instead of ignoring it. Take one breath, choose one support, and move forward gently.”
Buttons:
- Return to service
- Return to check-in
- Choose another support
- Do another fatigue reset

Overall goal:
Make Tactical Pause feel like a thoughtful resource library with varied interactions, not a collection of countdown screens. Keep the experience calm, centered, polished, soft, and development-friendly.
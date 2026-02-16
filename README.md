# Our Story

Our Story is a voice-first relationship storytelling experience. It turns chapter-by-chapter memories into a cinematic, pink-themed digital keepsake.

## What this project is about

The app helps couples capture meaningful moments in structured prompts:

- How you met
- First impressions
- Favorite memory
- Little rituals
- Challenges you overcame
- Inside language
- Promise for the future

As users fill chapters, the app detects recurring visual motifs (for example: rain, coffee, beach, music, flowers, travel, city nights) and uses them to personalize visuals and story outputs.

## Why this was made

Most memory tools store notes, but they do not shape them into an emotionally coherent story.  
This project was made to turn raw memories into a narrative artifact that feels personal, expressive, and easy to revisit or share.

## What output the user gets at the end

After completing the flow, the app generates a full artifact with:

- Cover page
- Narrative story spread
- Timeline
- Voice constellation map
- Love DNA summary (values, tone, conflict style, growth pattern)
- Little Things quote cards
- Inside dictionary
- Promise section
- Gift outputs:
  - Letter version
  - Card version
  - Date-idea version

The artifact can be exported with the **Download PDF** action (browser print flow).

## User flow

1. Open landing page and click **Start Dictating**.
2. Complete the 7 guided chapters.
3. Add text naturally in the transcript area (works well with dictation tools like Wispr Flow).
4. See live progress, detected motif chips, and constellation updates while writing.
5. Click **Continue** through chapters.
6. On the final chapter, click **Create Magic Artifact**.
7. Review the generated magazine-style keepsake and export as PDF.

## How to run this project on your laptop

This is a static web app. No build step is required.

### Prerequisites

- A modern browser (Chrome recommended)
- Python 3 (optional, only if you want a local server)

### Option 1: Open directly

Open `index.html` in your browser.

### Option 2: Run with a local server (recommended)

```bash
python3 -m http.server 4173
```

Then visit: `http://localhost:4173`

## Project structure

- `index.html` - app structure and screens
- `styles.css` - complete visual system, theming, animations, layout
- `app.js` - story logic, motif detection, constellation rendering, artifact generation
- `logo-mark.svg` and `favicon.svg` - brand assets

## Notes

- The transcript area is editable, so users can type, paste, or dictate text.
- Motif detection is keyword-driven and updates as story content changes.
- PDF export depends on the browser print dialog.

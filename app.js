const APP_TITLE = "Our Story";
const NARRATIVE_SYSTEM_PROMPT = `You are a narrative designer and relationship storyteller.

The user has spoken multiple memories about their relationship.

Transform the raw transcript into:

A cohesive narrative love story (500–800 words).

Extracted timeline milestones.

Shared values list (3–5 items).

Inside joke glossary entries.

Short quotes for memory cards.

A powerful promise section.

Do not sound like AI.
Avoid clichés.
Preserve their language style.
Maintain warmth and specificity.`;

const CHAPTERS = [
  {
    id: "howWeMet",
    title: "How We Met",
    prompt: "Tell us the moment you first met.",
    demo:
      "We met in a tiny cafe near campus when the rain was heavy and all the seats were full. You offered me half your table, then made a joke about the playlist sounding like heartbreak karaoke."
  },
  {
    id: "firstNotice",
    title: "The First Thing I Noticed",
    prompt: "What was the first thing you noticed about them?",
    demo:
      "I noticed how calm you were with everyone around you, and how your laugh came before your words. You looked at people like they mattered, and that made me feel safe."
  },
  {
    id: "favoriteMemory",
    title: "Our Favorite Memory",
    prompt: "If you could relive one day together, what would it be?",
    demo:
      "I would relive the beach trip where we bought that ridiculous cake at midnight. We danced barefoot in the rain, then watched stars from the car hood and forgot what time it was."
  },
  {
    id: "littleThings",
    title: "The Little Things",
    prompt: "What tiny habits or quirks make you smile?",
    demo:
      "You always make coffee before I wake up and leave little notes that only say one word. You steal the blanket, deny it, then pull me closer like that was the plan all along."
  },
  {
    id: "overcome",
    title: "What We've Overcome",
    prompt: "What challenge made you stronger?",
    demo:
      "Distance and stress almost made us drift. We argued about small things because we were both tired, but we learned to pause, apologize quickly, and choose honesty over ego."
  },
  {
    id: "insideLanguage",
    title: "Our Inside Language",
    prompt: "Do you have a nickname or joke no one else understands?",
    demo:
      "We call bad days Pancake Day because that's when we almost broke up but didn't. You call me Captain Late, and I call you Tiny General because you organize everything with military precision."
  },
  {
    id: "promise",
    title: "Our Promise",
    prompt: "Finish this sentence: No matter what, I promise to…",
    demo:
      "No matter what, I promise to stay kind when things are hard, keep choosing us in ordinary days, and never let silence replace love."
  }
];

const VISUAL_MOTIFS = [
  {
    key: "cake",
    label: "Cake",
    words: ["cake", "birthday", "pastry", "dessert", "bake"],
    svg: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 280 220'><g fill='none' stroke='%23c87b8f' stroke-width='3' stroke-linecap='round'><path d='M72 130h136'/><path d='M82 130v45h116v-45'/><path d='M92 110h96l10 20H82z'/><path d='M125 88v20'/><path d='M155 88v20'/><circle cx='125' cy='80' r='5' fill='%23e8cdaf' stroke='none'/><circle cx='155' cy='80' r='5' fill='%23e8cdaf' stroke='none'/></g></svg>`
  },
  {
    key: "beach",
    label: "Beach",
    words: ["beach", "shore", "ocean", "sea", "coast", "sand", "wave"],
    svg: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 280 220'><path d='M10 156c46-18 87-18 134 0 45 17 85 17 126 0' fill='none' stroke='%23be7188' stroke-width='3'/><path d='M14 176c48-16 90-16 136 0 43 15 84 15 122 0' fill='none' stroke='%23e8cdaf' stroke-width='4'/><circle cx='218' cy='54' r='20' fill='%23f4d4b0'/></svg>`
  },
  {
    key: "rain",
    label: "Rain",
    words: ["rain", "storm", "drizzle", "umbrella", "monsoon"],
    svg: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 280 220'><g fill='none' stroke='%23a56d8f' stroke-width='3' stroke-linecap='round'><path d='M56 60c34-24 65-24 98 0'/><path d='M44 88c44-28 84-28 126 0'/><path d='M74 110l-8 18'/><path d='M110 110l-8 18'/><path d='M146 110l-8 18'/><path d='M182 110l-8 18'/></g></svg>`
  },
  {
    key: "coffee",
    label: "Cafe",
    words: ["coffee", "cafe", "latte", "espresso", "cup"],
    svg: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 280 220'><g fill='none' stroke='%23b56d75' stroke-width='3' stroke-linecap='round'><path d='M72 106h120v42a20 20 0 0 1-20 20H92a20 20 0 0 1-20-20z'/><path d='M194 118h16a16 16 0 0 1 0 32h-16'/><path d='M96 86c0-10 8-10 8-20'/><path d='M126 86c0-10 8-10 8-20'/><path d='M156 86c0-10 8-10 8-20'/></g></svg>`
  },
  {
    key: "citylights",
    label: "City Lights",
    words: [
      "bar",
      "pub",
      "lounge",
      "club",
      "stadium",
      "arena",
      "soccer",
      "football",
      "match",
      "game",
      "city",
      "downtown",
      "street",
      "neon"
    ],
    svg: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 280 220'><g fill='none' stroke='%23bf6f8f' stroke-width='3' stroke-linecap='round'><path d='M42 172h196'/><path d='M58 172v-54h24v54'/><path d='M98 172v-78h28v78'/><path d='M142 172v-62h30v62'/><path d='M186 172v-44h24v44'/><circle cx='216' cy='76' r='12'/><path d='M212 76h8'/><path d='M216 72v8'/></g></svg>`
  },
  {
    key: "flowers",
    label: "Flowers",
    words: ["flower", "flowers", "rose", "roses", "bouquet", "petals", "tulip", "lily", "jasmine"],
    svg: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 280 220'><g fill='none' stroke='%23c86e96' stroke-width='3' stroke-linecap='round'><circle cx='140' cy='98' r='10'/><circle cx='120' cy='98' r='12'/><circle cx='160' cy='98' r='12'/><circle cx='140' cy='78' r='12'/><circle cx='140' cy='118' r='12'/><path d='M140 110v60'/><path d='M140 146c-20-8-26 7-26 7'/><path d='M140 162c20-8 26 7 26 7'/></g></svg>`
  },
  {
    key: "music",
    label: "Music",
    words: ["music", "song", "songs", "playlist", "melody", "concert", "guitar", "piano", "lyrics"],
    svg: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 280 220'><g fill='none' stroke='%23b7608b' stroke-width='3' stroke-linecap='round'><path d='M126 62v78'/><path d='M126 62l72-16v74'/><circle cx='106' cy='150' r='14'/><circle cx='182' cy='138' r='14'/></g></svg>`
  },
  {
    key: "movies",
    label: "Movies",
    words: ["movie", "movies", "cinema", "film", "popcorn", "theatre", "theater", "screen"],
    svg: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 280 220'><g fill='none' stroke='%23bd6a86' stroke-width='3' stroke-linecap='round'><rect x='56' y='68' width='168' height='104' rx='12'/><path d='M56 92h168'/><path d='M76 80h20'/><path d='M108 80h20'/><path d='M140 80h20'/><path d='M172 80h20'/></g></svg>`
  },
  {
    key: "roadtrip",
    label: "Road Trip",
    words: ["road trip", "roadtrip", "drive", "driving", "highway", "car ride", "windshield"],
    svg: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 280 220'><g fill='none' stroke='%23be6f88' stroke-width='3' stroke-linecap='round'><path d='M30 170h220'/><path d='M120 170l16-96h10l16 96'/><path d='M140 112h20'/><path d='M58 160l10-6'/><path d='M82 160l10-6'/><path d='M206 160l10-6'/></g></svg>`
  },
  {
    key: "travel",
    label: "Travel",
    words: ["travel", "vacation", "airport", "flight", "passport", "suitcase", "hotel", "boarding"],
    svg: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 280 220'><g fill='none' stroke='%23b66f90' stroke-width='3' stroke-linecap='round'><rect x='88' y='78' width='104' height='96' rx='12'/><path d='M120 78v-14a8 8 0 0 1 8-8h24a8 8 0 0 1 8 8v14'/><path d='M98 112h84'/><path d='M130 126h20'/></g></svg>`
  },
  {
    key: "pets",
    label: "Pets",
    words: ["dog", "puppy", "cat", "kitten", "pet", "leash", "paw", "paws"],
    svg: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 280 220'><g fill='none' stroke='%23bf6f84' stroke-width='3' stroke-linecap='round'><circle cx='140' cy='128' r='24'/><circle cx='112' cy='94' r='10'/><circle cx='168' cy='94' r='10'/><circle cx='128' cy='120' r='5'/><circle cx='152' cy='120' r='5'/><path d='M136 136c2 6 6 10 12 12'/></g></svg>`
  },
  {
    key: "dinner",
    label: "Dinner",
    words: ["dinner", "breakfast", "brunch", "lunch", "pizza", "pasta", "sushi", "restaurant", "cook"],
    svg: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 280 220'><g fill='none' stroke='%23c06a80' stroke-width='3' stroke-linecap='round'><circle cx='140' cy='124' r='48'/><circle cx='140' cy='124' r='24'/><path d='M84 170h112'/><path d='M98 74v30'/><path d='M182 74v30'/><path d='M176 86h12'/></g></svg>`
  },
  {
    key: "sunset",
    label: "Sunset",
    words: ["sunset", "sunrise", "golden hour", "dusk", "dawn", "twilight"],
    svg: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 280 220'><g fill='none' stroke='%23cf7396' stroke-width='3' stroke-linecap='round'><path d='M34 156h212'/><path d='M88 156a52 52 0 0 1 104 0'/><path d='M140 80v-14'/><path d='M104 98l-10-10'/><path d='M176 98l10-10'/></g></svg>`
  },
  {
    key: "gifts",
    label: "Gifts",
    words: ["gift", "gifts", "present", "surprise", "ring", "chocolate", "valentine"],
    svg: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 280 220'><g fill='none' stroke='%23be6a93' stroke-width='3' stroke-linecap='round'><rect x='78' y='96' width='124' height='86' rx='8'/><path d='M78 124h124'/><path d='M140 96v86'/><path d='M140 96c-4-18-22-24-34-12-10 10-8 26 8 30h26'/><path d='M140 96c4-18 22-24 34-12 10 10 8 26-8 30h-26'/></g></svg>`
  },
  {
    key: "home",
    label: "Home",
    words: ["home", "kitchen", "couch", "sofa", "balcony", "apartment", "porch", "living room"],
    svg: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 280 220'><g fill='none' stroke='%23b56484' stroke-width='3' stroke-linecap='round'><path d='M64 110l76-56 76 56'/><path d='M82 102v78h116v-78'/><rect x='132' y='130' width='24' height='50'/><rect x='96' y='122' width='24' height='20'/></g></svg>`
  },
  {
    key: "dance",
    label: "Dance",
    words: ["dance", "dancing", "waltz", "salsa", "slow dance", "slowdance", "dancefloor"],
    svg: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 280 220'><g fill='none' stroke='%23c06e9a' stroke-width='3' stroke-linecap='round'><circle cx='116' cy='74' r='10'/><circle cx='164' cy='74' r='10'/><path d='M116 84l12 24-12 24'/><path d='M164 84l-12 24 12 24'/><path d='M128 108h24'/><path d='M100 154h24'/><path d='M156 154h24'/></g></svg>`
  },
  {
    key: "mountains",
    label: "Mountains",
    words: ["mountain", "mountains", "hike", "hiking", "trail", "cabin", "camping", "campfire"],
    svg: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 280 220'><g fill='none' stroke='%23b86b85' stroke-width='3' stroke-linecap='round'><path d='M36 166l54-76 54 76z'/><path d='M106 166l56-92 82 92z'/><path d='M162 74l14 20h-28z'/><path d='M126 166h118'/></g></svg>`
  },
  {
    key: "fireworks",
    label: "Fireworks",
    words: ["fireworks", "festival", "fair", "carnival", "lantern", "sparklers", "sparkler"],
    svg: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 280 220'><g fill='none' stroke='%23ce6f9e' stroke-width='3' stroke-linecap='round'><path d='M140 116v54'/><path d='M140 106l0-20'/><path d='M140 106l-18-10'/><path d='M140 106l18-10'/><path d='M140 106l-18 10'/><path d='M140 106l18 10'/><circle cx='84' cy='86' r='8'/><circle cx='198' cy='74' r='8'/></g></svg>`
  },
  {
    key: "stars",
    label: "Stars",
    words: ["star", "stars", "night", "moon", "sky"],
    svg: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 280 220'><g fill='%23d29bb0'><path d='M72 68l8 17 19 2-14 13 4 19-17-9-17 9 4-19-14-13 19-2z'/><path d='M164 90l6 12 13 2-9 9 2 13-12-7-12 7 2-13-9-9 13-2z'/><circle cx='228' cy='62' r='8' fill='%23e8cdaf'/></g></svg>`
  },
  {
    key: "college",
    label: "Books",
    words: ["college", "class", "book", "library", "campus"],
    svg: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 280 220'><g fill='none' stroke='%23b76a82' stroke-width='3' stroke-linecap='round'><path d='M70 78h60v100H70z'/><path d='M130 78h80v100h-80z'/><path d='M70 102h60'/><path d='M130 102h80'/></g></svg>`
  }
];

const TIMELINE_STAMPS = [
  { icon: "✿", mood: "First Glance" },
  { icon: "☕", mood: "Spark" },
  { icon: "✦", mood: "Core Memory" },
  { icon: "☾", mood: "Turning Point" },
  { icon: "❤", mood: "Promise" }
];

const DOM = {
  screens: {
    landing: document.getElementById("landing"),
    interview: document.getElementById("interview"),
    artifact: document.getElementById("artifact")
  },
  homeLogoLink: document.getElementById("homeLogoLink"),
  startStoryBtn: document.getElementById("startStoryBtn"),
  backToLandingBtn: document.getElementById("backToLandingBtn"),
  skipToArtifactBtn: document.getElementById("skipToArtifactBtn"),
  chapterList: document.getElementById("chapterList"),
  chapterTemplate: document.getElementById("chapterItemTemplate"),
  chapterCounter: document.getElementById("chapterCounter"),
  progressBar: document.getElementById("progressBar"),
  chapterLabel: document.getElementById("chapterLabel"),
  chapterTitle: document.getElementById("chapterTitle"),
  chapterPrompt: document.getElementById("chapterPrompt"),
  chapterCard: document.querySelector(".chapter-card"),
  autofillBtn: document.getElementById("autofillBtn"),
  nextChapterBtn: document.getElementById("nextChapterBtn"),
  transcriptOutput: document.getElementById("transcriptOutput"),
  completionBadge: document.getElementById("completionBadge"),
  motifChips: document.getElementById("motifChips"),
  editStoryBtn: document.getElementById("editStoryBtn"),
  pdfBtn: document.getElementById("pdfBtn"),
  magazine: document.getElementById("magazine"),
  constellationSky: document.getElementById("constellationSky"),
  loveDriftLayer: document.getElementById("loveDriftLayer"),
  heroConstellation: document.getElementById("heroConstellation"),
  heroConstellationStatus: document.getElementById("heroConstellationStatus"),
  chapterConstellation: document.getElementById("chapterConstellation"),
  generationOverlay: document.getElementById("generationOverlay"),
  generationTitle: document.getElementById("generationTitle"),
  generationStep: document.getElementById("generationStep"),
  generationMeterBar: document.getElementById("generationMeterBar")
};

const storyState = {
  currentChapter: 0,
  responses: CHAPTERS.map(() => ""),
  motifsByChapter: CHAPTERS.map(() => []),
  generatedAt: new Date(),
  shareLoaded: false
};

const speech = {
  typedTimer: null,
  typedText: ""
};

const motionState = {
  activeScreenTimer: null,
  chapterRefreshTimer: null,
  transcriptSaveTimer: null
};

const generationState = {
  running: false
};

const GENERATION_STEPS = [
  {
    title: "Collecting your memories…",
    detail: "Preparing the first story draft.",
    progress: 18,
    delay: 120
  },
  {
    title: "Designing your narrative…",
    detail: "Extracting milestones and recurring themes.",
    progress: 46,
    delay: 130
  },
  {
    title: "Verifying and polishing…",
    detail: "Tracing inside jokes, promises, and repair patterns.",
    progress: 74,
    delay: 140
  },
  {
    title: "Composing final artifact…",
    detail: "Building pages, timeline, and keepsakes.",
    progress: 96,
    delay: 120
  }
];

const dataUriCache = new Map();

function toDataUri(svg) {
  if (dataUriCache.has(svg)) return dataUriCache.get(svg);
  const uri = `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
  dataUriCache.set(svg, uri);
  return uri;
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function summarizeSnippet(text, wordCount = 18, fallback = "An unfinished moment held with care.") {
  if (!text) return fallback;
  const words = text
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .filter(Boolean);
  if (!words.length) return fallback;
  return words.slice(0, wordCount).join(" ") + (words.length > wordCount ? "…" : ".");
}

function sentenceBreak(text) {
  return text
    .split(/[.!?]+/)
    .map((part) => part.trim())
    .filter(Boolean);
}

function splitSentences(text) {
  if (!text) return [];
  const normalized = text.replace(/\s+/g, " ").trim();
  if (!normalized) return [];
  const matches = normalized.match(/[^.!?]+[.!?]*/g) || [];
  return matches.map((line) => line.trim()).filter(Boolean);
}

function normalizeSentence(sentence) {
  if (!sentence) return "";
  const cleaned = sentence.replace(/\s+/g, " ").trim();
  if (!cleaned) return "";
  const withPunctuation = /[.!?][”"]?$/.test(cleaned) ? cleaned : `${cleaned}.`;
  return withPunctuation.charAt(0).toUpperCase() + withPunctuation.slice(1);
}

function pickSignatureSentence(text, fallback = "") {
  if (!text) return fallback;
  const sentences = splitSentences(text);
  if (!sentences.length) return fallback;

  const scored = sentences.map((sentence) => {
    const words = sentence.split(/\s+/).filter(Boolean);
    const lengthScore = words.length >= 7 && words.length <= 24 ? 2 : words.length >= 5 ? 1 : 0;
    const specificityScore = /(rain|cafe|coffee|beach|stars|night|blanket|note|promise|distance|laugh|joke|cake|midnight)/i.test(sentence) ? 2 : 0;
    const emotionalScore = /(felt|safe|love|hard|kind|choose|always|together|smile)/i.test(sentence) ? 1 : 0;
    return { sentence, score: lengthScore + specificityScore + emotionalScore };
  });

  scored.sort((a, b) => b.score - a.score);
  return normalizeSentence(scored[0]?.sentence || fallback);
}

function liftVoiceLine(text, fallback) {
  return pickSignatureSentence(text, fallback);
}

function showScreen(target) {
  const nextScreen = DOM.screens[target];
  if (!nextScreen) return;

  const currentScreen = Object.values(DOM.screens).find((screen) => screen.classList.contains("active"));
  if (currentScreen === nextScreen) {
    document.body.dataset.screen = target;
    return;
  }

  if (motionState.activeScreenTimer) {
    clearTimeout(motionState.activeScreenTimer);
    motionState.activeScreenTimer = null;
  }

  if (currentScreen) {
    currentScreen.classList.remove("active");
    currentScreen.classList.add("leaving");
  }

  nextScreen.classList.remove("leaving");
  nextScreen.classList.add("active", "entering");
  window.requestAnimationFrame(() => {
    nextScreen.classList.remove("entering");
  });

  if (currentScreen) {
    motionState.activeScreenTimer = window.setTimeout(() => {
      currentScreen.classList.remove("leaving");
      motionState.activeScreenTimer = null;
    }, 280);
  }

  document.body.dataset.screen = target;
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

function createSignalBurst(x, y, pieces = 8) {
  for (let index = 0; index < pieces; index += 1) {
    const spark = document.createElement("span");
    spark.className = "signal-burst";
    spark.style.left = `${x}px`;
    spark.style.top = `${y}px`;

    const angle = (Math.PI * 2 * index) / pieces + (Math.random() - 0.5) * 0.35;
    const distance = 26 + Math.random() * 36;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;

    spark.style.setProperty("--dx", `${dx.toFixed(2)}px`);
    spark.style.setProperty("--dy", `${dy.toFixed(2)}px`);
    spark.style.setProperty("--rot", `${(-35 + Math.random() * 70).toFixed(1)}deg`);
    spark.style.animationDelay = `${(index * 16).toFixed(0)}ms`;

    document.body.appendChild(spark);
    window.setTimeout(() => {
      spark.remove();
    }, 1000);
  }
}

function celebrateNearElement(element, pieces = 8) {
  if (!element) return;
  const rect = element.getBoundingClientRect();
  createSignalBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, pieces);
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function hashText(source) {
  let hash = 2166136261;
  for (let index = 0; index < source.length; index += 1) {
    hash ^= source.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function seededUnit(seed, offset = 0) {
  const value = Math.sin(seed * 12.9898 + offset * 78.233) * 43758.5453123;
  return value - Math.floor(value);
}

function chapterSignalStrength(text) {
  const source = (text || "").trim();
  if (!source) return 0.06;
  const wordCount = source.split(/\s+/).filter(Boolean).length;
  const punctuationHits = (source.match(/[.!?]/g) || []).length;
  const emotionalHits = (source.match(/\b(love|always|promise|safe|laugh|together|hard|kind|future)\b/gi) || []).length;
  const lexicalBonus = Math.min(0.32, wordCount / 72);
  const punctuationBonus = Math.min(0.18, punctuationHits * 0.03);
  const emotionalBonus = Math.min(0.22, emotionalHits * 0.05);
  return clamp(0.1 + lexicalBonus + punctuationBonus + emotionalBonus, 0.1, 0.96);
}

function getLiveResponses() {
  const responses = storyState.responses.map((entry) => (entry || "").trim());
  if (DOM.transcriptOutput && Number.isInteger(storyState.currentChapter)) {
    responses[storyState.currentChapter] = DOM.transcriptOutput.textContent.trim();
  }
  return responses;
}

function buildConstellationNodes(responses) {
  const fallbackScale = Math.max(1, CHAPTERS.length - 1);
  return CHAPTERS.map((chapter, index) => {
    const text = (responses[index] || "").trim();
    const baseSeed = hashText(`${chapter.id}::${text || "empty"}::${index}`);
    const energy = chapterSignalStrength(text);
    const axis = index / fallbackScale;
    const x = clamp(12 + axis * 76 + (seededUnit(baseSeed, 1) - 0.5) * 10, 7, 93);
    const y = clamp(18 + seededUnit(baseSeed, 2) * 58 + (seededUnit(baseSeed, 3) - 0.5) * 8, 10, 88);
    const pulseOffset = (seededUnit(baseSeed, 4) * 2.4).toFixed(2);

    return {
      id: chapter.id,
      chapterTitle: chapter.title,
      index,
      active: Boolean(text),
      label: String(index + 1),
      text,
      energy,
      x,
      y,
      size: 2.1 + energy * 2.8,
      glow: 0.22 + energy * 0.62,
      delay: pulseOffset
    };
  });
}

function buildAmbientStars(seedLabel, count, width, height) {
  const seed = hashText(seedLabel);
  const stars = [];

  for (let index = 0; index < count; index += 1) {
    const xSeed = seed + index * 11;
    const ySeed = seed + index * 17;
    const radiusSeed = seed + index * 23;
    const opacitySeed = seed + index * 29;
    const delaySeed = seed + index * 31;

    stars.push({
      x: (seededUnit(xSeed, 1) * width).toFixed(2),
      y: (seededUnit(ySeed, 2) * height).toFixed(2),
      r: (0.35 + seededUnit(radiusSeed, 3) * 1.25).toFixed(2),
      opacity: (0.12 + seededUnit(opacitySeed, 4) * 0.58).toFixed(2),
      delay: (seededUnit(delaySeed, 5) * 4).toFixed(2)
    });
  }

  return stars;
}

function buildHeartAnchors(count, width, height) {
  if (count <= 0) return [];
  const anchors = [];
  const spreadX = width * 0.24;
  const spreadY = height * 0.3;
  const centerX = width * 0.5;
  const centerY = height * 0.56;

  for (let index = 0; index < count; index += 1) {
    const t = Math.PI - (index / Math.max(count - 1, 1)) * Math.PI * 2;
    const hx = 16 * Math.pow(Math.sin(t), 3);
    const hy = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
    const x = clamp(centerX + (hx / 16) * spreadX, 42, width - 42);
    const y = clamp(centerY - (hy / 17) * spreadY, 28, height - 22);
    anchors.push({ x, y });
  }

  return anchors;
}

function buildHeartPath(width, height) {
  const points = buildHeartAnchors(120, width, height);
  if (!points.length) return "";
  const [first, ...rest] = points;
  const line = rest.map((point) => `L ${point.x.toFixed(2)} ${point.y.toFixed(2)}`).join(" ");
  return `M ${first.x.toFixed(2)} ${first.y.toFixed(2)} ${line}`;
}

function buildConstellationSvgMarkup({ responses, width, height, ambientCount = 36, scope = "panel", showLabels = false }) {
  const nodes = buildConstellationNodes(responses);
  const heroAnchors = scope === "hero" ? buildHeartAnchors(nodes.length, width, height) : [];
  const scopedNodes =
    scope === "hero"
      ? nodes.map((node, index) => {
          const anchor = heroAnchors[index];
          return {
            ...node,
            x: (anchor.x / width) * 100,
            y: (anchor.y / height) * 100,
            size: node.size + 0.5,
            glow: Math.min(1, node.glow + 0.12)
          };
        })
      : nodes;
  const activeNodes = scopedNodes.filter((node) => node.active);
  const activeCount = activeNodes.length;
  const lines = scopedNodes
    .slice(0, -1)
    .map((node, index) => {
      const next = scopedNodes[index + 1];
      const lineActive = node.active && next.active;
      const opacity = lineActive ? (0.42 + Math.min(node.energy, next.energy) * 0.48).toFixed(2) : "0.14";
      return `<line class="const-line ${lineActive ? "active" : ""}" x1="${((node.x / 100) * width).toFixed(2)}" y1="${((node.y / 100) * height).toFixed(2)}" x2="${((next.x / 100) * width).toFixed(2)}" y2="${((next.y / 100) * height).toFixed(2)}" stroke="url(#constLineGrad-${scope})" style="--line-opacity:${opacity}; --line-index:${index};" />`;
    })
    .join("");

  const chapters = scopedNodes
    .map((node) => {
      const x = (node.x / 100) * width;
      const y = (node.y / 100) * height;
      const ringRadius = node.size + 3.5 + node.energy * 2.8;
      return `
        <g class="const-node ${node.active ? "active" : "idle"}" style="--twinkle-delay:${node.delay}s;">
          <circle class="const-node-ring" cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="${ringRadius.toFixed(2)}" style="--ring-opacity:${(node.glow * 0.65).toFixed(2)};" />
          <circle class="const-node-core" cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="${node.size.toFixed(2)}" style="--core-opacity:${node.glow.toFixed(2)};" />
          ${showLabels ? `<text class="const-node-label" x="${(x + 8).toFixed(2)}" y="${(y - 8).toFixed(2)}">${node.label}. ${escapeHtml(node.chapterTitle)}</text>` : ""}
        </g>
      `;
    })
    .join("");

  const echoes = activeNodes
    .map((node, index) => {
      const x = (node.x / 100) * width;
      const y = (node.y / 100) * height;
      const radius = 16 + node.energy * 28;
      return `<circle class="const-echo" cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="${radius.toFixed(2)}" style="--echo-index:${index}; --echo-opacity:${(0.16 + node.energy * 0.18).toFixed(2)};" />`;
    })
    .join("");

  const nebulae = [0, 1, 2]
    .map((index) => {
      const seed = hashText(`${scope}:nebula:${responses.join("|")}:${index}`);
      const cx = (18 + seededUnit(seed, 1) * 64) / 100 * width;
      const cy = (14 + seededUnit(seed, 2) * 70) / 100 * height;
      const rx = 80 + seededUnit(seed, 3) * 160;
      const ry = 44 + seededUnit(seed, 4) * 90;
      const hueMix = 318 + Math.round(seededUnit(seed, 5) * 24);
      return `<ellipse class="const-nebula" cx="${cx.toFixed(2)}" cy="${cy.toFixed(2)}" rx="${rx.toFixed(2)}" ry="${ry.toFixed(2)}" style="--nebula-h:${hueMix}; --nebula-delay:${(index * 1.3).toFixed(1)}s;" />`;
    })
    .join("");

  const first = scopedNodes[0];
  const last = scopedNodes[scopedNodes.length - 1];
  const centerY = height * (0.35 + (activeCount / Math.max(scopedNodes.length, 1)) * 0.22);
  const signalArc = `M ${(first.x / 100 * width).toFixed(2)} ${(first.y / 100 * height).toFixed(2)} Q ${(width * 0.5).toFixed(2)} ${centerY.toFixed(2)} ${(last.x / 100 * width).toFixed(2)} ${(last.y / 100 * height).toFixed(2)}`;
  const heartPath = scope === "hero" ? buildHeartPath(width, height) : "";
  const heroPulse =
    scope === "hero" && heartPath
      ? `<path class="hero-heart-outline" d="${heartPath}" /><path class="hero-heart-pulse" d="${heartPath}" />`
      : "";

  const ambient = buildAmbientStars(`${scope}:${responses.join("|")}`, ambientCount, width, height)
    .map(
      (star) =>
        `<circle class="ambient-star" cx="${star.x}" cy="${star.y}" r="${star.r}" style="--ambient-opacity:${star.opacity}; --ambient-delay:${star.delay}s;" />`
    )
    .join("");

  return `
    <svg class="constellation-map constellation-${scope}" data-active-count="${activeCount}" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" role="img" aria-label="Voice constellation map">
      <defs>
        <linearGradient id="constLineGrad-${scope}" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="rgba(232, 140, 181, 0.08)" />
          <stop offset="35%" stop-color="rgba(232, 140, 181, 0.9)" />
          <stop offset="70%" stop-color="rgba(244, 198, 151, 0.92)" />
          <stop offset="100%" stop-color="rgba(255, 238, 224, 0.14)" />
        </linearGradient>
      </defs>
      <g class="const-nebulae">${nebulae}</g>
      <g class="ambient-stars">${ambient}</g>
      ${heroPulse}
      <path class="const-signal-arc" d="${signalArc}" />
      <g class="const-echoes">${echoes}</g>
      <g class="constellation-lines">${lines}</g>
      <g class="constellation-nodes">${chapters}</g>
    </svg>
  `;
}

function renderConstellationViews() {
  const responses = getLiveResponses();
  const litCount = responses.filter(Boolean).length;
  const isLandingActive = DOM.screens.landing.classList.contains("active");
  const isInterviewActive = DOM.screens.interview.classList.contains("active");

  if (DOM.heroConstellationStatus) {
    DOM.heroConstellationStatus.textContent = `${litCount} of ${CHAPTERS.length} chapters lit`;
  }

  if (DOM.constellationSky) {
    DOM.constellationSky.innerHTML = buildConstellationSvgMarkup({
      responses,
      width: 1440,
      height: 900,
      ambientCount: 140,
      scope: "sky"
    });
  }

  if (DOM.heroConstellation && isLandingActive) {
    DOM.heroConstellation.innerHTML = buildConstellationSvgMarkup({
      responses,
      width: 740,
      height: 230,
      ambientCount: 48,
      scope: "hero"
    });
  }

  if (DOM.chapterConstellation && isInterviewActive) {
    DOM.chapterConstellation.innerHTML = buildConstellationSvgMarkup({
      responses,
      width: 760,
      height: 208,
      ambientCount: 28,
      scope: "chapter",
      showLabels: true
    });
  }
}

function renderLoveDriftLayer() {
  if (!DOM.loveDriftLayer) return;
  DOM.loveDriftLayer.textContent = "";

  const count = 36;
  for (let index = 0; index < count; index += 1) {
    const particle = document.createElement("span");
    particle.className = "love-drift";

    const left = seededUnit(index + 11, 1) * 100;
    const start = 104 + seededUnit(index + 12, 2) * 22;
    const xShift = -24 + seededUnit(index + 13, 3) * 48;
    const duration = 12 + seededUnit(index + 14, 4) * 18;
    const delay = -seededUnit(index + 15, 5) * 24;
    const scale = 0.48 + seededUnit(index + 16, 6) * 1.28;
    const opacity = 0.32 + seededUnit(index + 17, 7) * 0.54;
    const hue = 330 + Math.round(seededUnit(index + 18, 8) * 22);

    particle.style.setProperty("--left", `${left.toFixed(2)}%`);
    particle.style.setProperty("--start-y", `${start.toFixed(2)}%`);
    particle.style.setProperty("--dx", `${xShift.toFixed(2)}px`);
    particle.style.setProperty("--duration", `${duration.toFixed(2)}s`);
    particle.style.setProperty("--delay", `${delay.toFixed(2)}s`);
    particle.style.setProperty("--scale", `${scale.toFixed(2)}`);
    particle.style.setProperty("--opacity", `${opacity.toFixed(2)}`);
    particle.style.setProperty("--hue", `${hue}`);
    DOM.loveDriftLayer.appendChild(particle);
  }
}

function bindConstellationParallax(container) {
  if (!container) return;

  const setNeutral = () => {
    container.style.setProperty("--mx", "0");
    container.style.setProperty("--my", "0");
  };

  container.addEventListener("pointermove", (event) => {
    const rect = container.getBoundingClientRect();
    const px = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const py = ((event.clientY - rect.top) / rect.height) * 2 - 1;
    container.style.setProperty("--mx", px.toFixed(3));
    container.style.setProperty("--my", py.toFixed(3));
  });

  container.addEventListener("pointerleave", setNeutral);
  setNeutral();
}

function wireConstellationMotion() {
  document.documentElement.style.setProperty("--pointer-x", "0.5");
  document.documentElement.style.setProperty("--pointer-y", "0.5");

  window.addEventListener(
    "pointermove",
    (event) => {
      if (document.body.dataset.screen === "artifact") return;
      const px = clamp(event.clientX / Math.max(window.innerWidth, 1), 0, 1);
      const py = clamp(event.clientY / Math.max(window.innerHeight, 1), 0, 1);
      document.documentElement.style.setProperty("--pointer-x", px.toFixed(4));
      document.documentElement.style.setProperty("--pointer-y", py.toFixed(4));
    },
    { passive: true }
  );

  bindConstellationParallax(DOM.heroConstellation);
  bindConstellationParallax(DOM.chapterConstellation);
}

function renderChapterList() {
  DOM.chapterList.textContent = "";

  CHAPTERS.forEach((chapter, index) => {
    const node = DOM.chapterTemplate.content.firstElementChild.cloneNode(true);
    const indexNode = node.querySelector(".chapter-item-index");
    const titleNode = node.querySelector(".chapter-item-title");

    indexNode.textContent = `${index + 1}.`;
    titleNode.textContent = chapter.title;

    if (index === storyState.currentChapter) node.classList.add("active");
    if (storyState.responses[index]) node.classList.add("done");

    node.addEventListener("click", () => {
      storyState.currentChapter = index;
      renderCurrentChapter();
    });

    DOM.chapterList.appendChild(node);
  });
}

function setChapterMotifBackground(motifs) {
  const motif = VISUAL_MOTIFS.find((item) => item.key === motifs[0]);
  if (!motif) {
    DOM.chapterCard.style.setProperty("--chapter-motif", "none");
    return;
  }

  const motifLayer = `${toDataUri(motif.svg)} top right / 220px no-repeat`;
  DOM.chapterCard.style.setProperty("--chapter-motif", motifLayer);
}

function renderMotifChips(motifs) {
  DOM.motifChips.textContent = "";
  if (!motifs.length) {
    const empty = document.createElement("span");
    empty.className = "motif-chip muted";
    empty.style.setProperty("--chip-index", "0");
    empty.textContent = "None yet";
    DOM.motifChips.appendChild(empty);
    return;
  }

  motifs.forEach((motifKey, index) => {
    const motif = VISUAL_MOTIFS.find((item) => item.key === motifKey);
    if (!motif) return;
    const chip = document.createElement("span");
    chip.className = "motif-chip";
    chip.style.setProperty("--chip-index", `${index}`);
    chip.textContent = motif.label;
    DOM.motifChips.appendChild(chip);
  });
}

function getStoryMotifs() {
  return [...new Set(storyState.motifsByChapter.flat())];
}

function detectMotifs(text) {
  const normalized = text.toLowerCase();
  return VISUAL_MOTIFS.filter((motif) =>
    motif.words.some((word) => {
      const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s+/g, "\\s+");
      return new RegExp(`\\b${escaped}\\b`, "i").test(normalized);
    })
  ).map((motif) => motif.key);
}

function saveCurrentDraft({ refreshChapterList = false } = {}) {
  const transcript = DOM.transcriptOutput.textContent.trim();
  const chapterIndex = storyState.currentChapter;
  const motifs = detectMotifs(transcript);

  storyState.responses[chapterIndex] = transcript;
  storyState.motifsByChapter[chapterIndex] = motifs;
  DOM.completionBadge.classList.toggle("hidden", !transcript);
  DOM.completionBadge.textContent = "Saved with love";

  renderMotifChips(getStoryMotifs());
  setChapterMotifBackground(motifs);

  if (refreshChapterList) {
    renderChapterList();
  }
  renderConstellationViews();
  return transcript;
}

function animateChapterCardRefresh() {
  if (motionState.chapterRefreshTimer) {
    clearTimeout(motionState.chapterRefreshTimer);
    motionState.chapterRefreshTimer = null;
  }

  DOM.chapterCard.classList.remove("refresh");
  void DOM.chapterCard.offsetWidth;
  DOM.chapterCard.classList.add("refresh");

  motionState.chapterRefreshTimer = window.setTimeout(() => {
    DOM.chapterCard.classList.remove("refresh");
    motionState.chapterRefreshTimer = null;
  }, 520);
}

function renderCurrentChapter() {
  const chapter = CHAPTERS[storyState.currentChapter];
  const chapterNumber = storyState.currentChapter + 1;
  const currentResponse = storyState.responses[storyState.currentChapter];
  const motifs = storyState.motifsByChapter[storyState.currentChapter] || [];

  DOM.chapterLabel.textContent = `Chapter ${chapterNumber}`;
  DOM.chapterTitle.textContent = chapter.title;
  DOM.chapterPrompt.textContent = chapter.prompt;
  DOM.chapterCounter.textContent = `Chapter ${chapterNumber} of ${CHAPTERS.length}`;
  DOM.progressBar.style.width = `${(chapterNumber / CHAPTERS.length) * 100}%`;

  speech.typedText = currentResponse;
  DOM.transcriptOutput.textContent = currentResponse;
  DOM.completionBadge.classList.toggle("hidden", !currentResponse);
  DOM.completionBadge.textContent = "Saved with love";
  DOM.nextChapterBtn.textContent = chapterNumber === CHAPTERS.length ? "Create Magic Artifact" : "Continue";

  renderMotifChips(getStoryMotifs());
  setChapterMotifBackground(motifs);
  renderChapterList();
  renderConstellationViews();
  animateChapterCardRefresh();
}

function animateTypedText(target) {
  clearInterval(speech.typedTimer);
  DOM.transcriptOutput.textContent = "";
  speech.typedText = "";

  let index = 0;
  speech.typedTimer = window.setInterval(() => {
    speech.typedText += target[index] || "";
    DOM.transcriptOutput.textContent = speech.typedText;
    index += 1;

    if (index >= target.length) {
      clearInterval(speech.typedTimer);
    }
  }, 11);
}



function deriveValues(allText) {
  const text = allText.toLowerCase();
  const values = [];

  if (/(laugh|joke|funny|giggle|inside)/.test(text)) values.push("Playful Humor");
  if (/(promise|always|commit|choose|stay)/.test(text)) values.push("Commitment");
  if (/(challenge|overcome|hard|distance|stress)/.test(text)) values.push("Resilience");
  if (/(coffee|morning|note|tiny|habit|little)/.test(text)) values.push("Daily Care");
  if (/(trip|travel|beach|stars|night|adventure)/.test(text)) values.push("Shared Adventure");
  if (/(safe|honest|trust|listen|apologize)/.test(text)) values.push("Emotional Trust");

  if (values.length < 3) {
    values.push("Partnership", "Tenderness", "Growth");
  }

  return [...new Set(values)].slice(0, 5);
}

function deriveConflictStyle(text) {
  const normalized = text.toLowerCase();
  if (/(shout|yell|explod|fight hard)/.test(normalized)) {
    return "Direct intensity, followed by intentional repair.";
  }
  if (/(silent|avoid|withdraw|distance)/.test(normalized)) {
    return "Reflective pauses first, then reconnection through honesty.";
  }
  if (/(apologize|talk|listen|pause)/.test(normalized)) {
    return "Collaborative conflict: pause, listen, and return with care.";
  }
  return "Soft disagreement with a shared instinct to come back together.";
}

function deriveTone(allText) {
  const normalized = allText.toLowerCase();
  if (/(laugh|joke|funny|ridiculous)/.test(normalized) && /(promise|always|future|forever)/.test(normalized)) {
    return "Playful, grounded, and deeply devoted.";
  }
  if (/(challenge|hard|distance|overcome)/.test(normalized)) {
    return "Tender resilience with strong emotional maturity.";
  }
  return "Warm, intimate, and quietly cinematic.";
}

function extractTimeline(responses) {
  const datePattern = /\b(?:jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|jun(?:e)?|jul(?:y)?|aug(?:ust)?|sep(?:t(?:ember)?)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?|\d{1,2}[\/\-]\d{1,2}(?:[\/\-]\d{2,4})?|20\d{2}|19\d{2})\b/gi;
  const collectedDates = responses.flatMap((entry) => entry.match(datePattern) || []);
  const fallbackLabels = [
    "First Chapter",
    "Spark Season",
    "Golden Scene",
    "Storm & Repair",
    "Always, Still"
  ];

  const rawEvents = [
    { title: "The Beginning", detail: responses[0] },
    { title: "The First Spark", detail: responses[1] },
    { title: "A Day Worth Reliving", detail: responses[2] },
    { title: "A Challenge We Chose", detail: responses[4] },
    { title: "The Promise", detail: responses[6] }
  ];

  const fallbackTexts = [
    "A first encounter that quietly changed the storyline.",
    "Recognition arrived in small details and stayed.",
    "One day became an instant classic in your memory.",
    "Pressure came, but the partnership became stronger.",
    "A promise that keeps the story moving forward."
  ];

  return rawEvents.map((event, index) => ({
    label: collectedDates[index] || fallbackLabels[index] || "Milestone",
    title: event.title,
    text: summarizeSnippet(event.detail, 20, fallbackTexts[index] || "A memory worth keeping.")
  }));
}

function extractDictionary(text) {
  if (!text) {
    return [
      {
        term: "Our Language",
        meaning: "A private vocabulary that only makes sense inside this relationship."
      }
    ];
  }

  const quoteMatches = [...text.matchAll(/"([^"]{2,40})"/g)].map((match) => match[1]);
  const entries = [];

  quoteMatches.slice(0, 3).forEach((term) => {
    entries.push({
      term,
      meaning: "A phrase that holds a full memory in just a few words."
    });
  });

  if (!entries.length) {
    const chunks = text
      .split(/[,.;]| and /i)
      .map((part) => part.trim())
      .filter(Boolean)
      .slice(0, 3);

    chunks.forEach((chunk, index) => {
      const words = chunk.split(" ").filter(Boolean);
      const term = words.slice(0, Math.min(3, words.length)).join(" ");
      entries.push({
        term: term || `Memory Word ${index + 1}`,
        meaning: summarizeSnippet(chunk, 16)
      });
    });
  }

  return entries.slice(0, 4);
}

function extractMemoryCards(responses) {
  const source = [responses[2], responses[3], responses[5], responses[0]].filter(Boolean).join(". ");
  const sentences = sentenceBreak(source);

  if (!sentences.length) {
    return [
      "You were there in the ordinary moments.",
      "We learned to stay kind when life got loud.",
      "Love looked like small daily rituals.",
      "Our story still unfolds one chapter at a time."
    ];
  }

  return sentences.slice(0, 6).map((line) => `“${summarizeSnippet(line, 18)}”`);
}

function inferMemoryTag(text, index) {
  const normalized = text.toLowerCase();
  if (/(cake|dessert|midnight|birthday)/.test(normalized)) return "Midnight Sweetness";
  if (/(beach|ocean|sea|shore|sand|stars)/.test(normalized)) return "Cinematic Moment";
  if (/(coffee|morning|note|blanket|habit|little)/.test(normalized)) return "Daily Ritual";
  if (/(bar|pub|stadium|soccer|football|match|game|downtown|city)/.test(normalized)) return "City Night";
  if (/(music|song|playlist|concert|guitar|piano)/.test(normalized)) return "Soundtrack Moment";
  if (/(movie|cinema|film|popcorn|theatre|theater)/.test(normalized)) return "Cinema Night";
  if (/(flower|rose|bouquet|petal|sunset|sunrise|twilight)/.test(normalized)) return "Golden Glow";
  if (/(road trip|roadtrip|drive|highway|travel|airport|flight|passport)/.test(normalized)) return "Adventure Chapter";
  if (/(dog|puppy|cat|kitten|pet|paw)/.test(normalized)) return "Pawprint Memory";
  if (/(dinner|breakfast|brunch|restaurant|kitchen|home|couch|sofa)/.test(normalized)) return "Home Ritual";
  if (/(fight|argue|distance|hard|challenge|apologize)/.test(normalized)) return "We Chose Us";
  if (/(promise|always|forever|choose)/.test(normalized)) return "Future Vow";
  return ["Keepsake", "Favorite Scene", "Tiny Classic", "Private Legend"][index % 4];
}

function extractSignalNotes(responses) {
  const notes = [responses[0], responses[2], responses[6]]
    .filter(Boolean)
    .map((entry) => summarizeSnippet(entry, 13));

  if (!notes.length) {
    return ["A first signal appeared in an ordinary setting.", "Small rituals became your brightest pattern."];
  }

  if (notes.length === 1) {
    notes.push("Your rhythm became the story's signature.");
  }

  return notes.slice(0, 3);
}

function buildNarrative(responses) {
  const [meet, notice, favorite, little, overcome, inside, promise] = responses;
  const lines = [];

  if (meet) {
    lines.push(`“${liftVoiceLine(meet, "A small moment began something lasting.")}”`);
    lines.push(`It started in an ordinary setting, but the feeling was immediate: ${summarizeSnippet(meet, 26, "A first encounter made room for something rare.")}`);
  }

  if (notice) {
    lines.push(`The first thing that landed was simple and specific: ${liftVoiceLine(notice, "Something about them felt safe.")}`);
  }

  if (favorite) {
    lines.push(`The memory you would replay first is still vivid: ${summarizeSnippet(favorite, 30, "One day became a private classic.")}`);
  }

  if (little) {
    lines.push(`What made this real over time were the tiny rituals: ${summarizeSnippet(little, 28, "Small habits quietly built trust.")}`);
  }

  if (overcome) {
    lines.push(`When pressure showed up, you kept choosing repair over distance: ${summarizeSnippet(overcome, 30, "The hard part became a turning point.")}`);
  }

  if (inside) {
    lines.push(`Then came your private language, the phrases only you two understand: ${summarizeSnippet(inside, 30, "Shared words became emotional shorthand.")}`);
  }

  if (promise) {
    lines.push(`And the future line is clear in your own words: ${liftVoiceLine(promise, "No matter what, keep choosing each other.")}`);
  }

  if (!lines.length) {
    return [
      "“We met in a tiny cafe while rain took over the whole street.”",
      "The beginning felt accidental and perfect at the same time, with one open table and one good joke.",
      "What followed was a relationship built less on grand gestures and more on daily care.",
      "Even the hard seasons taught you how to pause, repair, and come back kinder.",
      "The promise now is simple: keep choosing love in ordinary days."
    ];
  }

  return [...new Set(lines.map((line) => normalizeSentence(line)))];
}

function inferNames(transcript) {
  const match = transcript.match(/\b(?:i am|i'm|this is)\s+([A-Z][a-z]+)\b/);
  if (match?.[1]) {
    return `${match[1]} & Beloved`;
  }
  return "You & Your Person";
}

function buildDateIdeas(motifs, timeline, tone) {
  const motifIdeas = {
    coffee: {
      title: "Sunrise Cafe Notes",
      detail: "Return to a favorite cafe, swap handwritten notes, and read them over coffee."
    },
    beach: {
      title: "Golden Hour Shore Walk",
      detail: "Take a sunset beach walk and recreate one core memory from your timeline."
    },
    stars: {
      title: "Stargaze Check-In",
      detail: "End the day under the night sky and share one gratitude plus one future wish."
    },
    rain: {
      title: "Rain Playlist Night",
      detail: "Play your early songs, make warm drinks, and relive your first chapter indoors."
    },
    cake: {
      title: "Midnight Dessert Ritual",
      detail: "Pick up a small cake at night and toast to one promise you're keeping this month."
    },
    college: {
      title: "Bookstore Date Reset",
      detail: "Wander a bookstore, choose one book for each other, and discuss it over tea."
    },
    citylights: {
      title: "Match Night Memory",
      detail: "Revisit the bar or sports spot where your story began and recreate that first conversation."
    },
    flowers: {
      title: "Flower Market Morning",
      detail: "Pick flowers together, then build a small bouquet that represents your chapters."
    },
    music: {
      title: "Soundtrack Replay",
      detail: "Make a mini playlist of relationship milestones and listen to it on an evening walk."
    },
    movies: {
      title: "Cinema Callback",
      detail: "Watch a film that matches your story arc and pause for a short check-in after it."
    },
    roadtrip: {
      title: "Long Drive Ritual",
      detail: "Take a late-evening drive with no destination and retell your favorite memory out loud."
    },
    travel: {
      title: "Passport Planning Date",
      detail: "Plan a tiny future getaway, including one tradition you'll keep wherever you go."
    },
    pets: {
      title: "Pawprint Date",
      detail: "Take a pet walk or visit an animal cafe and capture one candid memory together."
    },
    dinner: {
      title: "Cook-For-Us Night",
      detail: "Cook one meaningful meal together and toast to one promise you're practicing."
    },
    sunset: {
      title: "Golden Hour Vows",
      detail: "Watch sunset together and each share one gratitude plus one intention for the week."
    },
    gifts: {
      title: "Tiny Surprise Exchange",
      detail: "Exchange small surprise gifts linked to an inside joke or private phrase."
    },
    home: {
      title: "At-Home Memory Corner",
      detail: "Create a small corner with photos, notes, and one quote from each chapter."
    },
    dance: {
      title: "Living Room Slow Dance",
      detail: "Put on your song and dance for one full track without checking phones."
    },
    mountains: {
      title: "Trail and Talk Date",
      detail: "Take a walk on a nearby trail and talk through one hard chapter you overcame."
    },
    fireworks: {
      title: "Festival Light Walk",
      detail: "Visit a night market or light festival and collect one new shared ritual."
    }
  };

  const ideas = [];
  motifs.forEach((motif) => {
    if (motifIdeas[motif] && ideas.length < 3) ideas.push(motifIdeas[motif]);
  });

  if (ideas.length < 3 && timeline[2]) {
    ideas.push({
      title: "Relive a Core Memory",
      detail: `Recreate "${timeline[2].title}" in a smaller way this week and capture one photo together.`
    });
  }

  if (ideas.length < 3) {
    ideas.push({
      title: "Promise Walk",
      detail: "Take a 30-minute walk, revisit your promises, and name one tiny action for tomorrow."
    });
  }

  if (ideas.length < 3) {
    ideas.push({
      title: "Tone-Matched Evening",
      detail: tone.includes("Playful") ? "Plan a playful game night with your favorite snacks." : "Plan a slow candlelit dinner with phones away."
    });
  }

  return ideas.slice(0, 3);
}

function buildGiftOutputs({ responses, names, tone, promise, values, motifs, timeline }) {
  const coupleName = names === "You & Your Person" ? "you two" : names;
  const favoriteMemory = summarizeSnippet(responses[2], 24, "a memory that still feels like home");
  const promiseLine = liftVoiceLine(promise, "No matter what, we keep choosing each other.");

  const letter = [
    `Dear ${coupleName},`,
    `Your story carries a rare balance: ${tone.toLowerCase()}. From your beginning to your everyday rituals, your love is built on real details and deliberate care.`,
    `One memory stands out: ${favoriteMemory}. And the heart of your future is clear: ${promiseLine}`,
    `Keep protecting what already works: ${values.slice(0, 3).join(", ").toLowerCase()}.`,
    "With love,\nOur Story"
  ];

  const card = [
    "To my favorite person,",
    summarizeSnippet(responses[0], 14, "Thank you for choosing us in the ordinary moments."),
    summarizeSnippet(promiseLine, 14, "No matter what, I choose us."),
    "Happy Valentine's Day."
  ];

  return {
    letter,
    card,
    dateIdeas: buildDateIdeas(motifs, timeline, tone)
  };
}

function buildArtifactModel() {
  const rawResponses = storyState.responses.map((entry) => entry.trim());
  const hasAnyUserInput = rawResponses.some(Boolean);
  const responses = hasAnyUserInput ? rawResponses : CHAPTERS.map((chapter) => chapter.demo);
  const combined = responses.join(" ").trim();
  const chapterMotifs = responses.map((response, index) => {
    const savedMotifs = storyState.motifsByChapter[index] || [];
    return savedMotifs.length ? [...new Set(savedMotifs)] : detectMotifs(response);
  });
  const motifs = [...new Set(chapterMotifs.flat())];
  const giftOutputs = buildGiftOutputs({
    responses,
    names: inferNames(combined),
    tone: deriveTone(combined),
    promise: responses[6] || "No matter what, I promise to keep choosing us with softness and intention.",
    values: deriveValues(combined),
    motifs,
    timeline: extractTimeline(responses)
  });
  return {
    title: APP_TITLE,
    names: inferNames(combined),
    generatedDate: new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    }).format(new Date()),
    narrative: buildNarrative(responses),
    timeline: extractTimeline(responses),
    values: deriveValues(combined),
    tone: deriveTone(combined),
    conflictStyle: deriveConflictStyle(responses[4] || combined),
    growthPattern: summarizeSnippet(responses[4], 24, "Growth looked like choosing honesty, even when it was hard."),
    cards: extractMemoryCards(responses),
    dictionary: extractDictionary(responses[5]),
    promise: responses[6] || "No matter what, I promise to keep choosing us with softness and intention.",
    giftOutputs,
    motifs,
    chapterMotifs,
    responses,
    prompt: NARRATIVE_SYSTEM_PROMPT
  };
}

function motifLayerCss(motifs) {
  if (!motifs.length) return "";
  const layers = motifs
    .map((motifKey) => VISUAL_MOTIFS.find((item) => item.key === motifKey))
    .filter(Boolean)
    .slice(0, 3)
    .map((motif, index) => `${toDataUri(motif.svg)} ${index === 0 ? "top right" : index === 1 ? "center right" : "bottom right"} / ${index === 0 ? "320px" : "280px"} no-repeat`);
  return layers.join(", ");
}

function renderArtifact(model = buildArtifactModel()) {
  const signalNotes = extractSignalNotes(model.responses);
  const chapterMotifs = model.chapterMotifs || model.responses.map((response) => detectMotifs(response));
  const motifStyleFrom = (motifs) => {
    const layer = motifLayerCss(motifs || []);
    return layer ? ` style="background:${layer};"` : "";
  };
  const uniqueMotifs = (motifs) => [...new Set((motifs || []).filter(Boolean))];
  const chapterSpotlightsMarkup = CHAPTERS.slice(1)
    .map((chapter, offset) => {
      const chapterIndex = offset + 1;
      return `
        <article class="chapter-story-card">
          <div class="motif-layer"${motifStyleFrom(chapterMotifs[chapterIndex])}></div>
          <p class="chapter-story-kicker">Chapter ${chapterIndex + 1}</p>
          <h3>${escapeHtml(chapter.title)}</h3>
          <p>${escapeHtml(summarizeSnippet(model.responses[chapterIndex], 34, chapter.prompt))}</p>
        </article>
      `;
    })
    .join("");
  const dictionaryNotes = [
    "Said once, remembered forever.",
    "A phrase that only makes sense together.",
    "Private meaning, public smile.",
    "Code word for a full memory."
  ];

  const timelineMarkup = model.timeline
    .map(
      (item, index) => `
        <article class="timeline-item ${index % 2 ? "right" : "left"}">
          <div class="timeline-knot">
            <span class="timeline-dot">${TIMELINE_STAMPS[index]?.icon || "✧"}</span>
            <span class="timeline-order">${String(index + 1).padStart(2, "0")}</span>
          </div>
          <div class="timeline-card">
            <p class="timeline-mood">${escapeHtml(TIMELINE_STAMPS[index]?.mood || "Memory")}</p>
            <h4>${escapeHtml(item.label)} · ${escapeHtml(item.title)}</h4>
            <p>${escapeHtml(item.text)}</p>
          </div>
        </article>
      `
    )
    .join("");

  const valuesMarkup = model.values.map((value) => `<span class="value-chip">${escapeHtml(value)}</span>`).join("");
  const cardsMarkup = model.cards
    .map(
      (quote, index) => `
        <article class="polaroid">
          <p>${escapeHtml(quote)}</p>
          <p class="polaroid-tag">${escapeHtml(inferMemoryTag(quote, index))}</p>
        </article>
      `
    )
    .join("");

  const dictionaryMarkup = model.dictionary
    .map(
      (entry, index) => `
        <div class="dictionary-row">
          <strong>${escapeHtml(entry.term)}</strong> — ${escapeHtml(entry.meaning)}
          <p class="dictionary-note">${escapeHtml(dictionaryNotes[index] || dictionaryNotes[dictionaryNotes.length - 1])}</p>
        </div>
      `
    )
    .join("");
  const letterMarkup = model.giftOutputs.letter.map((line) => `<p>${escapeHtml(line)}</p>`).join("");
  const cardMarkup = model.giftOutputs.card.map((line) => `<p>${escapeHtml(line)}</p>`).join("");
  const dateIdeasMarkup = model.giftOutputs.dateIdeas
    .map(
      (idea) => `
        <article class="gift-idea">
          <h5>${escapeHtml(idea.title)}</h5>
          <p>${escapeHtml(idea.detail)}</p>
        </article>
      `
    )
    .join("");

  DOM.magazine.innerHTML = `
    <section class="mag-section cover">
      <div class="floral-line" aria-hidden="true"></div>
      <h1>${escapeHtml(model.title)}</h1>
      <p class="names">${escapeHtml(model.names)}</p>
      <p class="meta">Generated ${escapeHtml(model.generatedDate)}</p>
    </section>

    <section class="mag-section">
      <div class="motif-layer"${motifStyleFrom(chapterMotifs[0])}></div>
      <h2 class="section-title">How We Met</h2>
      <div class="narrative">
        ${model.narrative
          .map((line, index) => `<p class="narrative-line${index === 0 ? " lead" : ""}">${escapeHtml(line)}</p>`)
          .join("")}
      </div>
      <div class="story-ribbon">
        <p class="ribbon-title">Signal Notes</p>
        <div class="ribbon-notes">
          ${signalNotes.map((note) => `<p>✦ ${escapeHtml(note)}</p>`).join("")}
        </div>
      </div>
    </section>

    <section class="mag-section chapter-story-section">
      <div class="motif-layer"${motifStyleFrom(model.motifs)}></div>
      <h2 class="section-title">Chapter Signals</h2>
      <div class="chapter-story-grid">${chapterSpotlightsMarkup}</div>
    </section>

    <section class="mag-section">
      <div class="motif-layer"${motifStyleFrom(uniqueMotifs([...(chapterMotifs[0] || []), ...(chapterMotifs[2] || []), ...(chapterMotifs[4] || [])]))}></div>
      <h2 class="section-title">Timeline</h2>
      <div class="timeline">${timelineMarkup}</div>
    </section>

    <section class="mag-section">
      <div class="motif-layer"${motifStyleFrom(model.motifs)}></div>
      <h2 class="section-title">Voice Constellation Map</h2>
      <div id="artifactConstellation" class="artifact-constellation"></div>
    </section>

    <section class="mag-section">
      <div class="motif-layer"${motifStyleFrom(uniqueMotifs([...(chapterMotifs[1] || []), ...(chapterMotifs[4] || []), ...(chapterMotifs[6] || [])]))}></div>
      <h2 class="section-title">Our Love DNA</h2>
      <div class="dna-grid">
        <article class="dna-card values">
          <div class="dna-head"><span class="dna-glyph">❋</span><h4>Shared Values</h4></div>
          <div class="value-cloud">${valuesMarkup}</div>
        </article>
        <article class="dna-card tone">
          <div class="dna-head"><span class="dna-glyph">♫</span><h4>Emotional Tone Profile</h4></div>
          <p>${escapeHtml(model.tone)}</p>
        </article>
        <article class="dna-card conflict">
          <div class="dna-head"><span class="dna-glyph">∞</span><h4>Conflict Style</h4></div>
          <p>${escapeHtml(model.conflictStyle)}</p>
        </article>
        <article class="dna-card growth">
          <div class="dna-head"><span class="dna-glyph">✷</span><h4>Growth Pattern</h4></div>
          <p>${escapeHtml(model.growthPattern)}</p>
        </article>
      </div>
    </section>

    <section class="mag-section">
      <div class="motif-layer"${motifStyleFrom(chapterMotifs[3])}></div>
      <h2 class="section-title">The Little Things</h2>
      <div class="polaroid-grid">${cardsMarkup}</div>
    </section>

    <section class="mag-section">
      <div class="motif-layer"${motifStyleFrom(chapterMotifs[5])}></div>
      <h2 class="section-title">Our Inside Dictionary</h2>
      <div class="dictionary">${dictionaryMarkup}</div>
    </section>

    <section class="mag-section promise">
      <div class="motif-layer"${motifStyleFrom(chapterMotifs[6])}></div>
      <h2 class="section-title">Our Promise</h2>
      <p>${escapeHtml(model.promise)}</p>
    </section>

    <section class="mag-section">
      <div class="motif-layer"${motifStyleFrom(model.motifs)}></div>
      <h2 class="section-title">Gift Outputs</h2>
      <div class="gift-grid">
        <article class="gift-card letter">
          <h4>Letter Version</h4>
          <div class="gift-letter">${letterMarkup}</div>
        </article>
        <article class="gift-card card">
          <h4>Card Version</h4>
          <div class="gift-message">${cardMarkup}</div>
        </article>
        <article class="gift-card ideas">
          <h4>Date-Idea Version</h4>
          <div class="gift-ideas">${dateIdeasMarkup}</div>
        </article>
      </div>
    </section>

    <section class="mag-section closing">
      <p>${escapeHtml(model.names)}</p>
      <p class="still">Still writing…</p>
      <div class="floral-line" aria-hidden="true"></div>
    </section>
  `;

  const artifactConstellation = DOM.magazine.querySelector("#artifactConstellation");
  if (artifactConstellation) {
    artifactConstellation.innerHTML = buildConstellationSvgMarkup({
      responses: model.responses,
      width: 920,
      height: 300,
      ambientCount: 20,
      scope: "artifact",
      showLabels: true
    });
  }

  const sections = DOM.magazine.querySelectorAll(".mag-section");
  sections.forEach((section, index) => {
    section.style.setProperty("--section-order", `${index}`);
  });

  DOM.magazine.classList.remove("is-revealing");
  window.requestAnimationFrame(() => {
    DOM.magazine.classList.add("is-revealing");
  });

  showScreen("artifact");
  window.setTimeout(() => {
    const rect = DOM.magazine.getBoundingClientRect();
    createSignalBurst(rect.left + rect.width * 0.5, rect.top + 80, 12);
  }, 120);
}

function sleep(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

function nextFrame() {
  return new Promise((resolve) => {
    window.requestAnimationFrame(() => resolve());
  });
}

function setGenerationUiState(active) {
  const isActive = Boolean(active);
  generationState.running = isActive;
  document.body.classList.toggle("is-generating", isActive);

  if (DOM.generationOverlay) {
    DOM.generationOverlay.classList.toggle("hidden", !isActive);
  }

  if (DOM.startStoryBtn) DOM.startStoryBtn.disabled = isActive;
  if (DOM.skipToArtifactBtn) DOM.skipToArtifactBtn.disabled = isActive;
  if (DOM.nextChapterBtn) DOM.nextChapterBtn.disabled = isActive;
}

function updateGenerationStep(step) {
  if (!step) return;
  if (DOM.generationTitle) DOM.generationTitle.textContent = step.title;
  if (DOM.generationStep) DOM.generationStep.textContent = step.detail;
  if (DOM.generationMeterBar) DOM.generationMeterBar.style.width = `${step.progress}%`;
}

async function createArtifactWithProgress() {
  if (generationState.running) return;

  setGenerationUiState(true);
  updateGenerationStep({
    title: "Collecting your memories…",
    detail: "Preparing the first story draft.",
    progress: 0
  });

  try {
    await nextFrame();
    const model = buildArtifactModel();

    for (const step of GENERATION_STEPS) {
      updateGenerationStep(step);
      await sleep(step.delay);
    }

    renderArtifact(model);
    updateGenerationStep({
      title: "Artifact ready",
      detail: "Your story is now ready to read and export.",
      progress: 100
    });
    await sleep(90);
  } finally {
    setGenerationUiState(false);
  }
}

async function moveToNextChapter() {
  if (generationState.running) return;
  const currentChapterIndex = storyState.currentChapter;
  const existingResponse = storyState.responses[currentChapterIndex];
  const transcript = saveCurrentDraft({ refreshChapterList: true });

  if (!transcript && !existingResponse) {
    return;
  }

  celebrateNearElement(DOM.nextChapterBtn, 7);

  if (currentChapterIndex === CHAPTERS.length - 1) {
    await createArtifactWithProgress();
    return;
  }

  storyState.currentChapter += 1;
  renderCurrentChapter();
}


function pulseButton(button) {
  if (!button) return;
  button.classList.remove("btn-confirm");
  void button.offsetWidth;
  button.classList.add("btn-confirm");

  window.setTimeout(() => {
    button.classList.remove("btn-confirm");
  }, 280);
}

function prepareForPrint() {
  DOM.magazine.classList.remove("is-revealing");
  DOM.screens.artifact.classList.add("active");
}

function wireEvents() {
  if (DOM.homeLogoLink) {
    DOM.homeLogoLink.addEventListener("click", (event) => {
      event.preventDefault();
      showScreen("landing");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  DOM.startStoryBtn.addEventListener("click", () => {
    celebrateNearElement(DOM.startStoryBtn, 10);
    showScreen("interview");
    renderCurrentChapter();
  });

  DOM.backToLandingBtn.addEventListener("click", () => {
    showScreen("landing");
  });

  DOM.skipToArtifactBtn.addEventListener("click", async () => {
    await createArtifactWithProgress();
  });



  DOM.autofillBtn.addEventListener("click", () => {
    const chapter = CHAPTERS[storyState.currentChapter];
    storyState.responses[storyState.currentChapter] = chapter.demo;
    storyState.motifsByChapter[storyState.currentChapter] = detectMotifs(chapter.demo);
    animateTypedText(chapter.demo);
    DOM.completionBadge.classList.remove("hidden");
    renderMotifChips(getStoryMotifs());
    setChapterMotifBackground(storyState.motifsByChapter[storyState.currentChapter]);
    renderChapterList();
    renderConstellationViews();
  });

  DOM.nextChapterBtn.addEventListener("click", moveToNextChapter);

  DOM.transcriptOutput.addEventListener("input", () => {
    if (motionState.transcriptSaveTimer) {
      clearTimeout(motionState.transcriptSaveTimer);
      motionState.transcriptSaveTimer = null;
    }

    motionState.transcriptSaveTimer = window.setTimeout(() => {
      saveCurrentDraft();
      motionState.transcriptSaveTimer = null;
    }, 120);
  });

  DOM.transcriptOutput.addEventListener("blur", () => {
    if (motionState.transcriptSaveTimer) {
      clearTimeout(motionState.transcriptSaveTimer);
      motionState.transcriptSaveTimer = null;
    }
    saveCurrentDraft({ refreshChapterList: true });
  });

  DOM.editStoryBtn.addEventListener("click", () => {
    showScreen("interview");
    renderCurrentChapter();
  });


  DOM.pdfBtn.addEventListener("click", () => {
    prepareForPrint();
    window.setTimeout(() => {
      window.print();
    }, 60);
  });
}

function init() {
  wireEvents();
  wireConstellationMotion();
  window.addEventListener("beforeprint", prepareForPrint);
  renderLoveDriftLayer();

  showScreen("landing");
  renderCurrentChapter();
  renderConstellationViews();
}

init();

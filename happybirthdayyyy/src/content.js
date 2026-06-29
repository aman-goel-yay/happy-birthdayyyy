// ─────────────────────────────────────────────
//  content.js  —  everything you write lives here
//  fill this in and the whole site updates itself
// ─────────────────────────────────────────────

export const HER_NAME = ""; // ← her name


// WORDS FOR YOU
// scattered words that just feel like her — no explanations
export const words = [
  "bougainvillea",
  "2am",
  "ohana",
  "shutter",
  "carpe diem",
  "polaroid",
  "petrichor",
  // add as many as you want
];


// THINGS SHE LOVES
// each one has a title and a line written as an observation
export const thingsSheLoves = [
  {
    title: "Dead Poets Society",
    text: "You are the kind of person who watches this and actually listens. Really listens.",
    // optional: add an image path like image: "/images/dps.jpg"
  },
  {
    title: "Lilo & Stitch",
    text: "Ohana means family. You've always understood that better than most.",
  },
  {
    title: "Bougainvilleas",
    text: "You are the kind of person who notices bougainvillea on walls that everyone else just walks past.",
  },
  {
    title: "White Roses & Lilies",
    text: "Quiet and certain. That's you.",
  },
  {
    title: "Photography",
    text: "You see the world differently through a lens. I think you see it differently without one too.",
  },
];


// WHAT ARE YOU — QUIZZES
// each quiz has questions, each question has options, each option maps to a result key
// the result with the most points wins

export const quizzes = [
  {
    id: "movie",
    title: "What movie are you?",
    questions: [
      {
        question: "Your ideal Saturday is...",
        options: [
          { text: "Rewatching something you already love",       result: "lilo" },
          { text: "Finding something that changes you",          result: "dps" },
          { text: "Being somewhere beautiful with no plan",      result: "amelie" },
          { text: "Staying in and feeling every feeling",        result: "eternal" },
        ],
      },
      {
        question: "When you love something, you...",
        options: [
          { text: "Hold it close forever",                       result: "lilo" },
          { text: "Shout about it from a desk",                  result: "dps" },
          { text: "Find the poetry in it",                       result: "amelie" },
          { text: "Write it down so you don't forget",           result: "eternal" },
        ],
      },
      // add more questions as you like
    ],
    results: {
      dps: {
        title: "Dead Poets Society",
        description: "Of course. You were always going to be this one. You feel things deeply and you're not ashamed of it. You believe in beauty and meaning and you make the people around you believe in it too. O captain, my captain.",
      },
      lilo: {
        title: "Lilo & Stitch",
        description: "You are ohana. The kind of person who makes people feel like they belong, like they're not alone, like home is a feeling and not a place. Also you're a little chaotic and that's why we love you.",
      },
      amelie: {
        title: "Amélie",
        description: "You notice what other people miss. The small details, the quiet moments, the light at a certain time of day. You're a little magical and you might not even know it.",
      },
      eternal: {
        title: "Eternal Sunshine of the Spotless Mind",
        description: "You feel everything and you'd do it all again. Even the hard parts. Especially the hard parts.",
      },
    },
  },

  {
    id: "flower",
    title: "What flower are you?",
    questions: [
      {
        question: "People would describe you as...",
        options: [
          { text: "Warm and a little wild",       result: "bougainvillea" },
          { text: "Gentle and certain",            result: "lily" },
          { text: "Quietly beautiful",             result: "rose" },
        ],
      },
    ],
    results: {
      bougainvillea: {
        title: "Bougainvillea",
        description: "Bright, climbing, impossible to ignore even when you're just existing in the background. You thrive in places people least expect. Chaotic in the best way. A little thorny if pushed. Stunning regardless.",
      },
      lily: {
        title: "White Lily",
        description: "There's a quiet certainty about you. You don't need to announce yourself. People just... notice. Clean and sincere and somehow exactly right.",
      },
      rose: {
        title: "White Rose",
        description: "Classic in the way that means timeless, not predictable. You have depth. People think they know what you are and then they get closer.",
      },
    },
  },
];


// FRIENDSHIP WRAPPED
export const wrapped = {
  moviesWatched: 47,           // ← change to real number or make one up
  topMemory: "that one time we were up until 4am and forgot what we were even talking about",
  topGenre: "2am conversations about everything",
  streak: "since the day we met",
  mostUsedPhrase: "", // ← an inside joke or phrase between you two
  friendshipSince: "20__", // ← year you became friends
};


// THINGS I CAN'T EXPLAIN BUT LOVE
export const cantExplain = [
  "The way you always have something to say about light in photos.",
  "How you remember the exact details of movies you watched once.",
  // add your own — these should be specific and a little funny
];


// ROAST
// one paragraph, loving, a little brutal, ends sweet
export const roast = `
  [Write your roast here. Be specific. Be funny. End with something that makes it clear you love her.]
`;


// AWARDS
export const awards = [
  {
    title: "Best Taste in Cinema",
    subtitle: "Consistently, Annoyingly Correct",
    speech: "From the moment you said I needed to watch Dead Poets Society, you have never once been wrong about a film. It's almost irritating. Almost.",
  },
  {
    title: "Most Likely to Make You Feel Understood at 2am",
    subtitle: "Every Single Time",
    speech: "Whatever the hour, whatever the crisis, whatever the strange thought that didn't make sense — you got it. You always got it.",
  },
  {
    title: "Outstanding Achievement in Just Being You",
    subtitle: "Lifetime Award",
    speech: "No notes. No changes requested. Already perfect.",
  },
  // add more
];


// OPEN WHEN
export const openWhens = [
  {
    label: "when you're sad",
    text: "[Write something here for when she's sad]",
  },
  {
    label: "when you forget how good you are",
    text: "[Write something here]",
  },
  {
    label: "when you need to laugh",
    text: "[An inside joke, a funny memory, something silly]",
  },
  {
    label: "when you miss me",
    text: "[Something warm]",
  },
  {
    label: "when you need to hear something true",
    text: "[Something real]",
  },
];


// SPIN THE WHEEL
export const wheelItems = [
  "You have the best taste of anyone I know.",
  "The way you see the world is genuinely rare.",
  "I'm so glad you exist.",
  // add compliments, memories, quotes, inside jokes — mix it up
];


// YOU ARE SO LOVED
// "you are so loved" in different languages — add/remove as you like
export const lovedTranslations = [
  { lang: "English",    text: "you are so loved" },
  { lang: "French",     text: "tu es tellement aimée" },
  { lang: "Spanish",    text: "eres muy amada" },
  { lang: "Hindi",      text: "तुम बहुत प्यारी हो" },
  { lang: "Arabic",     text: "أنتِ محبوبة جداً" },
  { lang: "Japanese",   text: "あなたはとても愛されている" },
  { lang: "Italian",    text: "sei così amata" },
  { lang: "Portuguese", text: "você é muito amada" },
  { lang: "Korean",     text: "당신은 정말 사랑받고 있어요" },
  { lang: "German",     text: "du bist so geliebt" },
  { lang: "Swahili",    text: "unapendwa sana" },
  { lang: "Greek",      text: "είσαι τόσο αγαπημένη" },
];


// ENDING
// the last line of your letter, or something close to it
export const endingLine = "";

// the tiny colophon at the very bottom
export const colophon = `made with love · july 2026`;
// Central place for links and facts the page depends on.

// Cohort 01's Demo Day page on Luma (the event has happened; kept as a record).
export const DEMO_DAY_URL = "https://luma.com/f36n8n9p";

// Hardware First on X: where cohort 02 news goes out first.
export const X_HANDLE = "HardwareFirst_";
export const X_URL = `https://x.com/${X_HANDLE}`;

// Cohort 01 in one place: the facts every "done" mention on the page draws from.
export const COHORT_1 = {
  dates: "1 to 6 November 2026",
  place: "The Founding Co., Hyderabad",
  demoDay: { date: "7 November 2026", venue: "T-Works, Hyderabad" },
};

// The cohort 01 builds, as listed on the Demo Day page. `video` links are the
// builders' own build videos; leave it out where there isn't one.
export const COHORT_1_BUILDS = [
  {
    who: "Lakshveer Rao",
    build: "AirKords air guitar",
    what: "Two ESP32 boards read frets and strums; Bluetooth turns them into guitar sound.",
    video: "https://youtube.com/shorts/VMKu2beNXCY",
  },
  {
    who: "Giriprashad",
    build: "ESP32-S3 handheld computer",
    what: "Zephyr on a custom carrier board, with keyboard, display, Wi-Fi/SSH and on-device ML.",
    video: "https://youtube.com/shorts/c4TcVGej0kI",
  },
  {
    who: "Kurva Prashanth",
    build: "Beagle-Flap flapping-wing robot",
    what: "A bio-inspired flapping-wing robot, flown on BeagleBone and ArduPilot flight control.",
    video: "https://youtu.be/0khPCxawC3o",
  },
  {
    who: "Shubhra Srivastava",
    build: "Internet-connected lamps",
    what: "A pair of ESP32 lamps that let people far apart say “thinking of you” through light.",
    video: "https://youtu.be/FRwxIH6Npy0",
  },
  {
    who: "Harshit Chandak",
    build: "Tendon-actuated humanoid hand",
    what: "A 3D-printed hand and forearm, driven by motors and fishing-line tendons.",
    video: "https://youtube.com/shorts/pXuUK6HiqSo",
  },
  {
    who: "Adarsh Malpeddiwar & Manu",
    build: "Smart desk assistant robot",
    what: "A desk robot for working professionals, moving from prototype toward a product.",
    video: "https://youtube.com/shorts/pOchFvSxWTU",
  },
  {
    who: "Priyank",
    build: "Plug-and-play kits for students",
    what: "Plug-and-play hardware and software components for students.",
  },
];

// Company details shown in the footer.
export const COMPANY = {
  tagline: "Engineering the future of hardware, one board at a time.",
  phone: "+91 7411475974",
  address: ["11/1, 21-D1, NTTF Road, Peenya,", "Bengaluru, Karnataka 560058"],
  gst: "29ABFFP0669J1ZS",
};

export const NAV_LINKS = [
  { href: "#what-you-get", label: "What builders get" },
  { href: "#cohort-01", label: "Cohort 01" },
  { href: "#mentors", label: "Mentors" },
  { href: "#partners", label: "Who runs it" },
  { href: "#faqs", label: "FAQs" },
];

export const PARTNERS = {
  pcbCupid: { name: "PCB Cupid", logo: "/logos/pcb-cupid.png", w: 170, h: 164, href: "https://pcbcupid.com" },
  laksh: { name: "Projects by Laksh", logo: "/logos/projects-by-laksh.png", w: 177, h: 177, href: "https://lakshveer.com" },
  foundingCo: { name: "The Founding Co.", logo: "/logos/the-founding-co.png", w: 150, h: 150, href: "https://thefounding.co" },
};

// Credits band in "Who's doing it". Add an entry to show another logo.
// `mono` is the white version used on the black band.
// Optional `href` makes a slot a link; only add real URLs.
export const SUPPORTERS = [
  { name: "Malpani Ventures", logo: "/logos/malpani-ventures.png", mono: "/logos/mono/malpani.png", w: 147, h: 44, href: "https://malpaniventures.com" },
  { name: "T-Works", logo: "/logos/t-works.jpg", mono: "/logos/mono/tworks.png", w: 910, h: 909, href: "https://t-works.in" },
];

export const SPONSOR_PARTNERS = [
  { name: "SillyCuts", logo: "/logos/sillycuts.png", mono: "/logos/mono/sillycuts.png", w: 479, h: 240, href: "https://sillycuts.com" },
  { name: "LionCircuits", logo: "/logos/lioncircuits.png", mono: "/logos/mono/lion.png", w: 519, h: 272, href: "https://lioncircuits.com" },
  { name: "Launchd", logo: "/logos/launchd.png", mono: "/logos/mono/launchd.png", w: 117, h: 240, wordmark: true, href: "https://thelaunchd.com" },
];


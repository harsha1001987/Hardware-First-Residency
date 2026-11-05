// Central place for links and facts the page depends on.

// Every "Apply for demo day" button opens the Demo Day page on Luma (same tab).
export const DEMO_DAY_URL = "https://luma.com/i2cnnj7s?tk=DjWTFs";

// Company details shown in the footer.
export const COMPANY = {
  tagline: "Engineering the future of hardware, one board at a time.",
  phone: "+91 7411475974",
  address: ["11/1, 21-D1, NTTF Road, Peenya,", "Bengaluru, Karnataka 560058"],
  gst: "29ABFFP0669J1ZS",
};

export const NAV_LINKS = [
  { href: "#what-you-get", label: "What you get" },
  { href: "#mentors", label: "Mentors" },
  { href: "#what-to-bring", label: "What to bring" },
  { href: "#builds", label: "The builds" },
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


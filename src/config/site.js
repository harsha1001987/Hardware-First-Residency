// Central place for links and facts the page depends on.

// Every "Apply for residency" button starts the application here (same tab).
export const APPLY_URL =
  "https://auth.pcbcupid.com/auth/initiate?d=MTB8DiRLpohV4_x9iV3SU3y9EeN3jfGMM_uMhGWm_4Jz2bslxoHOCP0lFoGhOOiJXgM0V5LeRee0p3g9nJkShb0W6RuHB8Nhag_XjTMyZ8KVhyA_CxxT8-Wt3SONd1zLLkoR9hKOVyGVBFPkyERbVX8eO79DWMJuKxyGbphJNxV9UVhiPBPBGNU";

// Company details shown in the footer.
export const COMPANY = {
  tagline: "Engineering the future of hardware, one board at a time.",
  phone: "+91 7411475974",
  address: ["11/1, 21-D1, NTTF Road, Peenya,", "Bengaluru, Karnataka 560058"],
  gst: "29ABFFP0669J1ZS",
};

export const NAV_LINKS = [
  { href: "#experience", label: "The experience" },
  { href: "#what-you-get", label: "What you get" },
  { href: "#what-to-bring", label: "What to bring" },
  { href: "#builds", label: "The builds" },
  { href: "#faqs", label: "FAQs" },
];

export const PARTNERS = {
  pcbCupid: { name: "PCB Cupid", logo: "/logos/pcb-cupid.png", w: 170, h: 164 },
  laksh: { name: "Projects by Laksh", logo: "/logos/projects-by-laksh.png", w: 177, h: 177 },
  foundingCo: { name: "The Founding Co.", logo: "/logos/the-founding-co.png", w: 150, h: 150 },
};

// Sponsors strip above "Who's doing it". Add an entry to show another logo;
// the "more to be announced" slot always stays last in SUPPORTERS.
// Optional `href` makes a slot a link — only add real URLs.
export const SUPPORTERS = [
  { name: "Malpani Ventures", logo: "/logos/malpani-ventures.png", w: 147, h: 44 },
];

export const SPONSOR_PARTNERS = [
  { name: "SillyCuts", logo: "/logos/sillycuts.png", w: 479, h: 240 },
  { name: "LionCircuits", logo: "/logos/lioncircuits.png", w: 519, h: 272 },
  { name: "Launchd", logo: "/logos/launchd.png", w: 117, h: 240 },
];


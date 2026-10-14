// Small inline icons for external links (YouTube, GitHub, X, website).
export const ICONS = {
  youtube: (
    <svg viewBox="0 0 20 14" width="16" height="11" aria-hidden="true" focusable="false">
      <rect width="20" height="14" rx="3.5" fill="currentColor" />
      <path d="M8 4v6l5.2-3z" fill="var(--yt-play, #e3e2de)" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
      />
    </svg>
  ),
  x: (
    <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      />
    </svg>
  ),
  web: (
    <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" focusable="false" fill="none">
      <circle cx="8" cy="8" r="6.6" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M1.6 8h12.8M8 1.4c1.9 1.9 2.8 4.1 2.8 6.6S9.9 12.7 8 14.6M8 1.4C6.1 3.3 5.2 5.5 5.2 8s.9 4.7 2.8 6.6"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  ),
};

export const PCB_CUPID_LINKS = [
  { href: "https://www.youtube.com/@pcbcupid", icon: "youtube", label: "YouTube", aria: "PCB Cupid on YouTube, @pcbcupid" },
  { href: "https://github.com/pcbcupid", icon: "github", label: "GitHub", aria: "PCB Cupid on GitHub, @pcbcupid" },
];

export const LAKSH_LINKS = [
  { href: "https://x.com/CaptVenk/articles", icon: "x", label: "X", aria: "Projects by Laksh articles on X" },
  {
    href: "https://www.youtube.com/@ProjectsByLaksh",
    icon: "youtube",
    label: "YouTube",
    aria: "Projects by Laksh on YouTube, @ProjectsByLaksh",
  },
  { href: "https://lakshveer.com/", icon: "web", label: "Website", aria: "Projects by Laksh website, lakshveer.com" },
];

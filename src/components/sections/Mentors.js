import Image from "next/image";

// Mentor profiles: title at their company, and what the company does.
// `company.href` links only where the company's own site has been confirmed.
const MENTORS = [
  {
    name: "Srinivasan M",
    title: "Founder",
    photo: "/mentors/srinivasan.png",
    linkedin: "https://www.linkedin.com/in/srinivasan-m-421179179/",
    resident: true,
    company: {
      name: "PCB Cupid",
      href: "https://pcbcupid.com",
      logo: "/logos/pcb-cupid.png",
      text: "Democratizing hardware with an open-source ecosystem for hands-on building.",
    },
  },
  {
    name: "Mukesh Sankhla",
    title: "Founder",
    photo: "/mentors/mukesh.jpeg",
    linkedin: "https://www.linkedin.com/in/mukeshsankhla/",
    company: {
      name: "MakerBrains",
      href: "https://makerbrains.com",
      text: "Teaching electronics, coding and AI through practical projects, kits and tutorials.",
    },
  },
  {
    name: "Prudhvi Raj Pakalapati",
    title: "Co-Founder & CEO",
    photo: "/mentors/prudhvi.png",
    linkedin: "https://www.linkedin.com/in/prpakalapati/",
    company: {
      name: "Vector Technics",
      href: "https://vectortechnics.com",
      text: "Motors, ESCs and power distribution systems for unmanned platforms.",
    },
  },
  {
    name: "Bharath Reddy",
    title: "Founder",
    photo: "/mentors/bharath.jpg",
    company: {
      name: "Mitti Robotics",
      text: "Drones for firefighting and disaster response.",
    },
  },
];

const LinkedIn = (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
    <path
      fill="currentColor"
      d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96C2 21.32 2.69 22 3.55 22h16.9c.86 0 1.55-.68 1.55-1.52V3.52C22 2.68 21.31 2 20.45 2ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.46 7.89a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.29 10.86H15.8V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.51V9.2h2.83v1.31h.04c.39-.75 1.36-1.55 2.79-1.55 2.99 0 3.58 1.97 3.58 4.53v5.26Z"
    />
  </svg>
);

function Card({ m, copy }) {
  // The duplicate set only exists to make the loop seamless: hidden from
  // assistive tech and out of the tab order.
  const tab = copy ? -1 : undefined;
  return (
    <li className="hf-mnt-card" aria-hidden={copy || undefined}>
      <div className="hf-mnt-id">
        <div className="hf-mnt-photo">
          <Image src={m.photo} alt={copy ? "" : m.name} fill sizes="64px" className="hf-cover" />
        </div>
        <div>
          {m.resident && <p className="hf-mnt-badge">Resident mentor</p>}
          <h3 className="hf-mnt-name">
            {m.name}
            {m.linkedin && (
              <a
                href={m.linkedin}
                className="hf-mnt-in"
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={tab}
                aria-label={`${m.name} on LinkedIn (opens in a new tab)`}
              >
                {LinkedIn}
              </a>
            )}
          </h3>
        </div>
      </div>
      <p className="hf-mnt-role">
        {m.title},{" "}
        {m.company.href ? (
          <a href={m.company.href} target="_blank" rel="noopener noreferrer" tabIndex={tab}>
            {m.company.logo && <Image src={m.company.logo} alt="" width={20} height={20} className="hf-mnt-co-logo" />}
            {m.company.name} <span aria-hidden="true">↗</span>
          </a>
        ) : (
          m.company.name
        )}
      </p>
      <p className="hf-mnt-line">{m.company.text}</p>
    </li>
  );
}

// The cards drift sideways on a loop; hovering or focusing pauses them.
export default function Mentors() {
  return (
    <section id="mentors" className="hf-sec hf-mnt" aria-labelledby="mnt-title">
      <div className="hf-mnt-head" data-reveal>
        <h2 id="mnt-title" className="hf-display hf-mnt-title">
          Meet your <span className="hf-outline">mentors.</span>
        </h2>
        <p className="hf-mnt-copy">Hardware, software, robotics and manufacturing.</p>
      </div>

      <div className="hf-mnt-rail">
        <ul className="hf-mnt-track">
          {MENTORS.map((m) => (
            <Card key={m.name} m={m} />
          ))}
          {MENTORS.map((m) => (
            <Card key={`${m.name}-copy`} m={m} copy />
          ))}
        </ul>
      </div>
    </section>
  );
}

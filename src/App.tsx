import "./App.css";

// ─── content ─────────────────────────────────────────────────────────────────
const identity = {
  first: "Lily",
  last: "Wu",
  middle: "Chia-Wei",
  primaryRole: "AI Frontend engineer",
  secondaryRole: "Systems builder",
  location: "Taipei, Taiwan",
  contact: [
    {
      label: "Email",
      text: "im.cwwu@gmail.com",
      href: "mailto:im.cwwu@gmail.com",
    },
    {
      label: "LinkedIn",
      text: "/in/lily-w-3b842796",
      href: "https://www.linkedin.com/in/lily-w-3b842796",
    },
    { label: "City", text: "taipei, taiwan · gmt +8", href: null },
  ],
};

const education = [
  {
    school: "ACADEMY OF ART UNIVERSITY",
    degree: "M.A. Web Design & New Media",
    detail: "3.3 GPA · double course load",
    dates: "Jan 2015 — May 2017",
  },
  {
    school: "UNIVERSITY OF MICHIGAN",
    degree: "B.A. Arts & Ideas in the Humanities",
    detail: "Ann Arbor, MI",
    dates: "Sep 2010 — May 2014",
  },
];

const skills = [
  {
    label: "TECHNICAL",
    lines: [
      "React, TypeScript, Redux",
      "Node.js, Ruby on Rails",
      "Docker, NativeScript, Git",
    ],
  },
  {
    label: "DESIGN",
    lines: [
      "Figma, Adobe Creative Suite",
      "Interface & interaction design",
      "Wireframing, prototyping",
      "UI/UX research, QA",
    ],
  },
  {
    label: "LANGUAGES",
    lines: ["Mandarin (native)", "English (native)", "French (conversational)"],
  },
  {
    label: "CERTIFICATIONS",
    lines: [
      "HACCP Coordinator",
      "ISO 13485:2016 QMS Auditor",
      "SQF Practitioner (×8)",
    ],
  },
];

const experience = [
  {
    company: "ITRD",
    dates: "05/24 — Present",
    place: "Taipei",
    role: "Director of project management & frontend reviewer",
    prev: "prev. Frontend Engineer & PM",
    body: [
      "Promoted from engineer to director within nine months — recruited directly by the CTO and CIO to lead cross-functional teams under ambiguity.",
      "Designed the organization's first three-stage biannual performance review framework, with standardised KPI templates and C-level review cadences.",
      "Solely managed QA for a contractor-built platform; identified <em>33 security vulnerabilities</em> pre-launch and designed mitigations that averted regulatory and reputational risk.",
      "Rescued a 5PM VC demo by diagnosing the real bottleneck (missing creative assets, not a technical failure), rebuilt critical frontend components, and delivered by midnight.",
    ],
  },
  {
    company: "GAMANIA",
    dates: "10/22 — 10/23",
    place: "Taipei · Contractor",
    role: "Frontend developer",
    prev: null,
    body: [
      "Built a secure internal resource distribution platform for C-level executives and 19 subsidiary leaders; delivered full implementation with three demo and QA cycles in <em>22 days</em>.",
      "Redesigned the cross-company document signing system — reduced code volume by 90%, added secure mobile signing for iOS and Android, served 900+ daily users.",
      "Refactored the certificate portal, reducing load time from 12s to 3s and eliminating a recurring bottleneck for cross-departmental workflows.",
    ],
  },
  {
    company: "BANCLOGIX",
    dates: "03/21 — 07/22",
    place: "KVB Kunlun Group · Taipei",
    role: "Web engineer",
    prev: null,
    body: [
      "Developed and maintained cross-border fintech dashboards supporting multinational operations across Taiwan, Canada, Hong Kong and Singapore; designed role-based access controls ensuring regional data-security compliance.",
      "Investigated and recovered transaction data following a currency-conversion error; identified root-cause inconsistencies and reported findings that prevented recurrence.",
    ],
  },
  {
    company: "LOGIC SOLUTIONS",
    dates: "07/19 — 02/21",
    place: "Taipei",
    role: "Frontend developer & UI/UX designer",
    prev: null,
    body: [
      "Led a three-engineer QA sub-team and developed products for global enterprise clients including EVA Air, Salon Iris (15K salons), and Camp Bow Wow (170+ U.S. sites).",
      "Served as bilingual scrum master bridging U.S. and Taiwan engineering teams.",
      "Independently designed full UI/UX flows for Camp Bow Wow's mobile app from incomplete client materials — delivering functional screens and user-flow logic <em>in eight hours</em>.",
    ],
  },
];

const honors = [
  "Winner — NTUST 9th Int'l Innovative Entrepreneurial Competition · 2018",
  "Community Organizer — Taiwanese in Data Science · 2020",
  "Selected — Academy of Art Spring Show Exhibition · 2017",
];

// ─── header ornament ─────────────────────────────────────────────────────────
function HeaderMark() {
  return (
    <svg viewBox="0 0 100 32" fill="none" stroke="currentColor" strokeWidth="1">
      <ellipse cx="20" cy="16" rx="14" ry="9" />
      <ellipse cx="50" cy="16" rx="14" ry="9" />
      <ellipse cx="80" cy="16" rx="14" ry="9" />
      <circle cx="20" cy="16" r="1.4" fill="currentColor" />
      <circle cx="50" cy="16" r="1.4" fill="currentColor" />
      <circle cx="80" cy="16" r="1.4" fill="currentColor" />
    </svg>
  );
}

// ─── app ─────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <article className="sheet">
      {/* header */}
      <header className="header">
        <div>
          <h1 className="name">
            {identity.first}
            <span className="last">{identity.last}</span>
          </h1>
          <div className="name-meta">
            <span className="accent">{identity.middle}</span> ·{" "}
            {identity.location}
          </div>
        </div>

        <div className="tag-and-contact">
          <p className="tagline">
            {identity.primaryRole}
            <span className="plus">+</span>
            <span className="alt">{identity.secondaryRole}</span>
          </p>
          <div className="contact-list">
            {identity.contact.map((c, i) =>
              c.href ? (
                <a
                  key={i}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    c.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {c.text}
                </a>
              ) : (
                <span key={i} style={{ display: "block" }}>
                  {c.text}
                </span>
              ),
            )}
          </div>
        </div>

        <div className="header-mark">
          <HeaderMark />
        </div>
      </header>

      {/* body */}
      <div className="body">
        {/* left column */}
        <aside className="left">
          <section>
            <h2 className="sec-h">Education</h2>
            <div className="block">
              {education.map((e, i) => (
                <div className="entry" key={i}>
                  <span
                    className="label"
                    style={{ marginTop: i === 0 ? 0 : 18 }}
                  >
                    {e.school}
                  </span>
                  <span className="degree">{e.degree}</span>
                  <span className="detail">{e.detail}</span>
                  <span className="dates">{e.dates}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="sec-h">Skills</h2>
            <div className="block">
              {skills.map((g, i) => (
                <div key={i}>
                  <span
                    className="label"
                    style={{ marginTop: i === 0 ? 0 : 18 }}
                  >
                    {g.label}
                  </span>
                  {g.lines.map((ln, j) => (
                    <span className="skill-line" key={j}>
                      {ln}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="sec-h">Honors</h2>
            <div className="block">
              {honors.map((h, i) => (
                <span
                  className="skill-line"
                  key={i}
                  style={{ marginBottom: 10 }}
                >
                  {h}
                </span>
              ))}
            </div>
          </section>
        </aside>

        {/* right column */}
        <section className="right">
          <h2 className="sec-h">Experience</h2>
          <div className="exp-list">
            {experience.map((x, i) => (
              <div className="exp-row" key={i}>
                <div className="exp-tag">
                  <span className="company">{x.company}</span>
                  <span className="dates">{x.dates}</span>
                  <span className="place">{x.place}</span>
                </div>
                <div className="exp-body">
                  <span className="role">
                    {x.role}
                    {x.prev && <span className="role-prev">· {x.prev}</span>}
                  </span>
                  <ul className="exp-bullets">
                    {x.body.map((p, j) => (
                      <li key={j} dangerouslySetInnerHTML={{ __html: p }} />
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* footer */}
      <div className="foot">
        <span>— Lily Wu · {identity.location}</span>
        <span>
          Set in EB Garamond, Cormorant Garamond, Inter, IBM Plex Mono
        </span>
        <span>© MMXXVI</span>
      </div>
    </article>
  );
}

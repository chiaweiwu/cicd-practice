import { useState } from "react";
import "./App.css";
import { content } from "./content";

type Lang = "en" | "zh";

// ─── header ornament + language toggle ───────────────────────────────────────
function HeaderMark({ lang, onToggle }: { lang: Lang; onToggle: () => void }) {
  return (
    <button
      className="header-mark"
      onClick={onToggle}
      aria-label="Toggle language"
    >
      <svg
        viewBox="0 0 100 32"
        fill="none"
        stroke="transparent"
        strokeWidth="1"
      >
        <ellipse cx="20" cy="16" rx="14" ry="9" />
        <ellipse cx="50" cy="16" rx="14" ry="9" />
        <ellipse cx="80" cy="16" rx="14" ry="9" />
        <circle cx="20" cy="16" r="1.4" fill="transparent" />
        <circle cx="50" cy="16" r="1.4" fill="transparent" />
        <circle cx="80" cy="16" r="1.4" fill="transparent" />
      </svg>
      <span className="lang-label">{lang === "en" ? "中文" : "EN"}</span>
    </button>
  );
}

// ─── app ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [lang, setLang] = useState<Lang>("en");
  const c = content[lang];

  return (
    <article className="sheet" key={lang}>
      {/* header */}
      <header className="header">
        <div className="anim">
          <h1 className="name">
            {c.identity.first}
            <span className="last">{c.identity.last}</span>
          </h1>
          <div className="name-meta">
            <span className="accent">{c.identity.middle}</span> ·{" "}
            {c.identity.location}
          </div>
        </div>

        <div className="tag-and-contact anim">
          <p className="tagline">
            {c.identity.primaryRole}
            <span className="plus">&amp;</span>
            <span className="alt">{c.identity.secondaryRole}</span>
          </p>
          <p className="description">{c.identity.description}</p>
          <div className="contact-list">
            {c.identity.contact.map((ct, i) =>
              ct.href ? (
                <a
                  key={i}
                  href={ct.href}
                  target={ct.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    ct.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {ct.text}
                </a>
              ) : (
                <span key={i} style={{ display: "block" }}>
                  {ct.text}
                </span>
              ),
            )}
          </div>
        </div>

        <HeaderMark
          lang={lang}
          onToggle={() => setLang((l) => (l === "en" ? "zh" : "en"))}
        />
      </header>

      {/* body */}
      <div className="body">
        {/* left column */}
        <aside className="left anim">
          <section>
            <h2 className="sec-h">{c.nav.education}</h2>
            <div className="block">
              {c.education.map((e, i) => (
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
            <h2 className="sec-h">{c.nav.skills}</h2>
            <div className="block">
              {c.skills.map((g, i) => (
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
            <h2 className="sec-h">{c.nav.honors}</h2>
            <div className="block">
              {c.honors.map((h, i) => (
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
        <section className="right anim">
          <h2 className="sec-h">{c.nav.experience}</h2>
          <div className="exp-list">
            {c.experience.map((x, i) => (
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
      <div className="foot anim">
        <span>{c.footer.sig}</span>
        <span>{c.footer.year}</span>
      </div>
    </article>
  );
}

/* global React */

// Shared section components for the AI Website Services landing page.
// Used by both Direction A and Direction B compositions.

const { useState, useEffect, useRef } = React;

// ---------- Reusable nav ----------
function Nav({ dark = false }) {
  return (
    <nav className={"nav" + (dark ? " nav--dark" : "")} style={{ backgroundColor: "rgb(255, 255, 255)" }}>
      <a className="nav__logo" href="#">
        <img src={dark ? "assets/sketchdeck-logo-white.svg" : "assets/sketchdeck-logo-blue.svg"} alt="SketchDeck" />
      </a>
      <ul className="nav__links" style={{ color: "rgb(22, 22, 56)" }}>
        <li><a href="#why">Why now</a></li>
        <li><a href="#different">How we're different</a></li>
        <li><a href="#build">What we build</a></li>
        <li><a href="#process">How it works</a></li>
        <li><a href="#whysd">Why SketchDeck</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>
      <a className="btn btn--accent nav__cta" href="#book">Book a chat <span className="arrow">→</span></a>
    </nav>);

}

// ---------- Promise / Why-now band ----------
function PromiseBand() {
  return (
    <section className="band" id="why">
      <p className="eyebrow" style={{ opacity: 0.6 }}>Why this service · why now</p>
      <h2>AI builds the foundation.<br /><span className="acc" style={{ color: "rgb(192, 216, 255)" }}>Humans</span> refine the experience.</h2>
    </section>);

}

// ---------- Why-now context (3 columns) ----------
function WhyNow() {
  return (
    <section className="section section--paper">
      <div className="section-hd">
        <div>
          <p className="eyebrow">The shift</p>
          <h2>Marketing teams<br />need web at the speed<br />of campaigns.</h2>
        </div>
        <div className="shift-aside">
          <div className="shift-gif-box">
            <img className="shift-gif" src="assets/banner-logo.gif" alt="" />
          </div>
          <p>AI tools have caught up to production-grade web. Our clients no longer want to wait six weeks for a campaign page. They want next week. With strategy. On brand.</p>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
        {[
        ["01", "AI tools matured", "Modern AI can produce production-ready code, copy, and components — not just sketches."],
        ["02", "Faster expectations", "Marketing leaders are measured on speed-to-market more than ever."],
        ["03", "Internal web is stretched", "Engineering backlogs and IT queues kill campaign timelines."],
        ["04", "Agency builds are heavy", "Six-week traditional builds don't fit a two-week launch window."]].
        map(([n, t, b]) =>
        <div key={n} className="pillar shift-card" style={{ minHeight: 240 }}>
            <span className="pillar__num">{n}</span>
            <div>
              <div className="pillar__ttl">{t}</div>
              <div className="pillar__body">{b}</div>
            </div>
          </div>
        )}
      </div>
    </section>);

}

// ---------- AI vs SketchDeck comparison ----------
function CompareBlock() {
  return (
    <div className="compare">
      <div className="compare__col is-ai">
        <span className="compare__pill">AI tools alone</span>
        <h3>Generic.<br />Unguided.</h3>
        <p className="lede">Fast, but with no strategy and no editorial oversight.</p>
        <ul className="compare__list">
          <li><span className="ico">×</span><span>Generic templated output that looks like every other site</span></li>
          <li><span className="ico">×</span><span>No strategy, audience or business context</span></li>
          <li><span className="ico">×</span><span>Inconsistent visual quality across pages</span></li>
          <li><span className="ico">×</span><span>Accessibility is an afterthought</span></li>
          <li><span className="ico">×</span><span>You QA, you debug, you ship</span></li>
        </ul>
      </div>
      <div className="compare__col is-sd">
        <span className="compare__pill">The SketchDeck workflow</span>
        <h3>Strategy-led.<br />AI-accelerated.</h3>
        <p className="lede">A senior team in front of the AI, not behind it.</p>
        <ul className="compare__list">
          <li><span className="ico">✓</span><span>Strategy and creative direction set before a line is generated</span></li>
          <li><span className="ico">✓</span><span>On-brand design, refined by senior designers</span></li>
          <li><span className="ico">✓</span><span>Accessibility built in — WCAG 2.2 AA</span></li>
          <li><span className="ico">✓</span><span>Professional QA across browsers and devices</span></li>
          <li><span className="ico">✓</span><span>Reliable deployment, handover and support</span></li>
        </ul>
      </div>
      <div className="compare__divider">VS</div>
    </div>);

}

// ---------- "What we build" with LP/Microsite tabs ----------
function WhatWeBuild() {
  const [tab, setTab] = useState("lp");
  const data = {
    lp: {
      kicker: "Offering 01",
      title: "AI Landing Pages.",
      lede: "A focused, single-page destination — built for a campaign, a product launch, or a paid-media moment.",
      list: ["Single-page, conversion-focused", "Lightweight, fast-loading", "SEO-ready out of the box", "Custom motion and interaction", "Hosted, monitored, supported"],
      meta: [["Pages", "1"], ["Timeline", "From 5 days"], ["From", "$8k"]],
      best: ["Campaign launches", "Product announcements", "Paid media destinations", "Event pages"]
    },
    ms: {
      kicker: "Offering 02",
      title: "AI Microsites.",
      lede: "A small, beautifully crafted marketing site — product hub, event site, or campaign world.",
      list: ["Up to 25 pages, shared components", "Refined UX & navigation", "SEO-ready architecture", "Optional CMS for in-house edits", "Analytics + accessibility audited"],
      meta: [["Pages", "Up to 25"], ["Timeline", "From 3 weeks"], ["From", "$24k"]],
      best: ["Product hubs", "Event sites", "Campaign hubs", "Small marketing sites"]
    }
  };
  const d = data[tab];
  return (
    <section className="section section--paper" id="build">
      <div className="section-hd">
        <div>
          <p className="eyebrow">What we build</p>
          <h2>Two formats.<br />Both ship fast.</h2>
        </div>
        <p>Pick the shape that fits your moment. Same strategic rigor, same craft — different scope.</p>
      </div>
      <div style={{ marginBottom: 28 }}>
        <div className="offer-tabs" role="tablist">
          <button role="tab" aria-selected={tab === "lp"} onClick={() => setTab("lp")}>Landing pages</button>
          <button role="tab" aria-selected={tab === "ms"} onClick={() => setTab("ms")}>Microsites</button>
        </div>
      </div>
      <div className="offer-card">
        <div className="offer-card__copy">
          <p className="eyebrow">{d.kicker}</p>
          <h3>{d.title}</h3>
          <p className="lede">{d.lede}</p>
          <ul className="offer-card__list">
            {d.list.map((l) => <li key={l}><span className="tick">✓</span><span>{l}</span></li>)}
          </ul>
          <div className="offer-card__meta">
            {d.meta.map(([k, v]) =>
            <div key={k}>
                <div className="k">{k}</div>
                <div className="v">{v}</div>
              </div>
            )}
          </div>
        </div>
        <div className="offer-card__visual">
          <OfferVisual kind={tab} />
        </div>
      </div>
      <div className="best-for-row">
        {d.best.map((b) =>
        <div key={b} className="best-for-item">
            <span className="best-for-label">Best for</span>{b}
          </div>
        )}
      </div>
    </section>);

}

// ---------- Mini lo-fi landing page ----------
function MiniLP() {
  return <img className="offer-img offer-img--lp" src="assets/landing-pages.png" alt="Landing page wireframe preview" />;
}

// ---------- Mini lo-fi microsite (multiple pages stacked) ----------
function MiniMS() {
  return <img className="offer-img offer-img--ms" src="assets/microsites.png" alt="Microsite multi-page wireframe preview" />;
}

function OfferVisual({ kind }) {
  return kind === "lp" ? <MiniLP /> : <MiniMS />;
}

// ---------- Process scrubber ----------
function ProcessTimeline() {
  const steps = [
  { n: "01", t: "Strategy", body: "We sit down with you. Audience, message, goals. One page or a microsite — every project starts with a senior strategist and a designer." },
  { n: "02", t: "AI build", body: "We brief our internal AI workflow with your direction, brand and copy. A working draft of the site appears in days, not weeks." },
  { n: "03", t: "Refinement", body: "Designers refine the AI output by hand. Type, motion, image, layout. The result feels human-made because the craft is." },
  { n: "04", t: "Accessibility & QA", body: "We audit for WCAG 2.2 AA, test across browsers and devices, and ship with a real production checklist — not a vibe." },
  { n: "05", t: "Launch & support", body: "We deploy, monitor, and stay on. Need a Q3 update? Same team. No re-onboarding." }];

  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  useEffect(() => {
    if (!auto) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % steps.length), 3500);
    return () => clearTimeout(t);
  }, [active, auto]);
  // Align knob to the SELECTED step (left edge of column + 24px to align with number's visual center)
  // Compute progress 0..1 from LEFT-aligned step positions
  const stepCount = steps.length;
  const t = active / Math.max(1, stepCount - 1); // 0 at first, 1 at last
  // Interpolate knob color along #C0D8FF -> #D8DE00
  const lerp = (a, b, x) => Math.round(a + (b - a) * x);
  const c1 = [0xC0, 0xD8, 0xFF];
  const c2 = [0xD8, 0xDE, 0x00];
  const knobColor = `rgb(${lerp(c1[0], c2[0], t)}, ${lerp(c1[1], c2[1], t)}, ${lerp(c1[2], c2[2], t)})`;
  return (
    <section className="section section--white" id="process">
      <div className="section-hd">
        <div>
          <p className="eyebrow">How it works</p>
          <h2>Five steps.<br />One team.<br />One standard.</h2>
        </div>
        <p>Strategy in. Site out. The senior team that scopes the work is the one that ships it — no handoffs, no drift.</p>
      </div>
      <div className="process">
        <div className="process__rail">
          <div
            className="fill"
            style={{
              "--reveal": `calc(${100 - active / Math.max(1, steps.length - 1) * 100}% - 8px)`
            }}></div>
          <div
            className="knob"
            style={{
              left: `calc(${active / Math.max(1, steps.length - 1) * 100}% + 0px)`,
              background: knobColor
            }}></div>
        </div>
        <div className="process__steps">
          {steps.map((s, i) =>
          <div key={s.n} className={"process__step" + (i === active ? " is-active" : "")} onMouseEnter={() => {setAuto(false);setActive(i);}} onClick={() => {setAuto(false);setActive(i);}}>
              <div className="num">{s.n}</div>
              <div className="ttl">{s.t}</div>
              <div className="body">{s.body}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

// ---------- Five pillars (Speed/Strategy/Accessibility/Performance/Quality) ----------
function Pillars() {
  const items = [
  { n: "01", t: "Speed", b: "From kick-off to live site in days, not months. AI does the heavy lifting." },
  { n: "02", t: "Strategy", b: "Every site is led by a senior strategist and creative director. The brief drives the build." },
  { n: "03", t: "Accessibility", b: "WCAG 2.2 AA built in. Keyboard, screen reader, color contrast — non-negotiable." },
  { n: "04", t: "Performance", b: "Fast-loading, lightweight, Core Web Vitals green. Real users on real devices." },
  { n: "05", t: "Quality", b: "AI builds the foundation. Senior designers refine every pixel before it ships." }];

  return (
    <section className="section section--paper">
      <div className="section-hd">
        <div>
          <p className="eyebrow">The five pillars</p>
          <h2>Speed without<br />the shortcuts.</h2>
        </div>
        <p>What you get from us, every time. The non-negotiables that separate a directed AI build from a generic one.</p>
      </div>
      <div className="pillars">
        {items.map((it) =>
        <div key={it.n} className="pillar">
            <div className="pillar__num">{it.n}</div>
            <div>
              <div className="pillar__ttl">{it.t}</div>
              <div className="pillar__body">{it.b}</div>
            </div>
          </div>
        )}
      </div>
    </section>);

}

// ---------- Portfolio with hover-reveal browser ----------
function Portfolio() {
  const cases = [
  { id: "anth", tag: "Landing page · AI", title: "A category-defining AI brand, online in 7 days.", cls: "lg dark", url: "anthropic.24sevenpartners.com", preview: <Preview1 /> },
  { id: "med", tag: "Microsite · Healthcare", title: "Telling a clinical story without sounding clinical.", cls: "md accent", url: "medusind.24sevenpartners.com", preview: <Preview2 /> },
  { id: "phd", tag: "Landing · B2B SaaS", title: "Rethink your brand. Ship the page.", cls: "md yellow", url: "phdata.24sevenpartners.com", preview: <Preview3 /> },
  { id: "glw", tag: "Microsite · Wellness", title: "We are glow.", cls: "sm pink", url: "autonomia-vert.vercel.app", preview: <Preview4 /> },
  { id: "feel", tag: "Microsite · Hospitality", title: "Feeling Inn — a place to land.", cls: "sm purple", url: "feel-inn.vercel.app", preview: <Preview5 /> },
  { id: "more", tag: "Next up", title: "Yours.", cls: "sm", url: "yours.coming.soon", preview: null }];

  return (
    <section className="section section--white" id="work">
      <div className="section-hd">
        <div>
          <p className="eyebrow">Recent work</p>
          <h2>Sites we shipped.<br />Strategy you'd recognise.</h2>
        </div>
        <p>A selection of AI-accelerated landing pages and microsites across SaaS, healthcare, hospitality and brand. Hover to peek inside.</p>
      </div>
      <div className="portfolio">
        {cases.map((c) =>
        <div key={c.id} className={"port-tile " + c.cls}>
            <div className="meta">
              <span className="tag">{c.tag}</span>
              <span style={{ fontFamily: "var(--sd-font-small)", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", opacity: 0.7 }}>{c.url}</span>
            </div>
            <h3>{c.title}</h3>
            {c.preview &&
          <div className="preview">
                <div className="browser">
                  <div className="bar"><i></i><i></i><i></i></div>
                  <div className="stage">{c.preview}</div>
                </div>
              </div>
          }
            <div className="arrow">→</div>
          </div>
        )}
      </div>
    </section>);

}

function Preview1() {
  return (
    <>
      <div style={{ fontFamily: "var(--sd-font-display)", textTransform: "uppercase", fontSize: 22, lineHeight: 0.9, letterSpacing: "-0.01em" }}>Reasoning,<br />in production.</div>
      <div style={{ display: "flex", gap: 6, marginTop: "auto" }}>
        <div style={{ width: 14, height: 14, borderRadius: 99, background: "var(--accent)" }}></div>
        <div style={{ flex: 1, height: 14, borderRadius: 99, background: "var(--iced)" }}></div>
      </div>
    </>);

}
function Preview2() {
  return (
    <>
      <div style={{ fontFamily: "var(--sd-font-display)", textTransform: "uppercase", fontSize: 18, lineHeight: 0.95 }}>Care that<br />doesn't wait.</div>
      <div style={{ flex: 1, marginTop: 6, borderRadius: 6, background: "linear-gradient(135deg, var(--iced), var(--sd-pink-floyd))" }}></div>
    </>);

}
function Preview3() {
  return (
    <>
      <div style={{ fontFamily: "var(--sd-font-display)", textTransform: "uppercase", fontSize: 16, lineHeight: 0.95 }}>Data, made sense of.</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 4, marginTop: "auto" }}>
        <div style={{ height: 28, background: "var(--sd-blue-moon)", borderRadius: 4 }}></div>
        <div style={{ height: 28, background: "var(--accent)", borderRadius: 4 }}></div>
        <div style={{ height: 28, background: "var(--sd-yellow-sub)", borderRadius: 4 }}></div>
      </div>
    </>);

}
function Preview4() {
  return (
    <>
      <div style={{ width: 30, height: 30, borderRadius: 99, background: "var(--accent)" }}></div>
      <div style={{ fontFamily: "var(--sd-font-display)", textTransform: "uppercase", fontSize: 18, lineHeight: 0.9, marginTop: "auto" }}>We are<br />glow.</div>
    </>);

}
function Preview5() {
  return (
    <>
      <div style={{ flex: 1, borderRadius: 6, background: "var(--iced)" }}></div>
      <div style={{ fontFamily: "var(--sd-font-display)", textTransform: "uppercase", fontSize: 14, lineHeight: 0.95, marginTop: 4 }}>Feeling<br />Inn.</div>
    </>);

}

// ---------- Why SketchDeck (credibility) ----------
function WhySD() {
  const items = [
  ["12 yrs", "of enterprise design experience"],
  ["1,200+", "projects shipped a year"],
  ["WCAG 2.2", "accessibility, by default"],
  ["24/7", "follow-the-sun production"]];

  return (
    <section className="section section--dark" id="whysd">
      <div className="section-hd" style={{ color: "var(--sd-white-rabbit)" }}>
        <div>
          <p className="eyebrow" style={{ color: "rgba(255,255,255,0.7)" }}>Why SketchDeck</p>
          <h2>The oversight<br />AI alone can't give you.</h2>
        </div>
        <p style={{ opacity: 0.85 }}>We've been making the case for craft for over a decade. AI hasn't changed that. It's just made us faster.</p>
      </div>
      <div className="whysd-grid">
        {items.map(([n, l]) =>
        <div key={n} className="whysd-item">
            <div className="whysd-num">{n}</div>
            <div className="whysd-label">{l}</div>
          </div>
        )}
      </div>
    </section>);

}

// ---------- FAQ ----------
function FAQ() {
  const qs = [
  ["How fast is fast?", "Landing pages in 5–10 working days. Microsites in 3–5 weeks. Both timelines start the day we kick off, not the day we sign."],
  ["Do you really write the code, or does AI?", "Both. Our AI workflow generates the foundation; senior designers and engineers refine type, motion, accessibility and details. AI is the tool. We are the team."],
  ["Whose brand does it follow — yours or ours?", "Yours. We brief the AI on your guidelines and design system. If you don't have one, we build a lightweight set first."],
  ["What about accessibility?", "WCAG 2.2 AA is the default — keyboard navigation, semantic markup, color contrast, focus states, screen-reader testing. Audit included."],
  ["Where do you host?", "Vercel, Netlify, your CMS or your stack. We deploy where your team will be able to maintain it."],
  ["Can we edit it ourselves later?", "Microsites can ship with an optional CMS (Sanity, Contentful, etc.). Landing pages are typically maintained by us."]];

  const [open, setOpen] = useState(0);
  return (
    <section className="section section--paper" id="faq">
      <div className="section-hd">
        <div>
          <p className="eyebrow">Questions clients ask</p>
          <h2>The fine print,<br />out loud.</h2>
        </div>
        <p>Honest answers to the questions that come up on every first call.</p>
      </div>
      <div className="faq">
        {qs.map(([q, a], i) =>
        <div key={i} className={"faq__row" + (open === i ? " is-open" : "")} onClick={() => setOpen(open === i ? -1 : i)}>
            <div className="q">{q}</div>
            <div className="pm">+</div>
            <div className="a">{a}</div>
          </div>
        )}
      </div>
    </section>);

}

// ---------- Final CTA ----------
function FinalCTA() {
  return (
    <section className="final" id="book">
      <p className="eyebrow">Launch your next page faster</p>
      <h2>Let's build it.<br /><span className="acc">This week.</span></h2>
      <p className="lede">Tell us about the campaign. We'll come back inside one business day with a scope, a timeline, and the team who'd lead it.</p>
      <div className="final__cta">
        <a className="btn btn--accent btn--lg" href="#book">Book a chat <span className="arrow">→</span></a>
        <a className="btn btn--outline btn--lg" href="mailto:hello@sketchdeck.com">Email the team</a>
      </div>
      <p style={{ fontFamily: "var(--sd-font-small)", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.55, marginTop: 36 }}>
        15 min · no decks · senior team in the room
      </p>
    </section>);

}

// ---------- Footer ----------
function Footer() {
  return (
    <footer className="foot foot--slim">
      <div className="foot__slim">
        <img src="assets/sketchdeck-logo-white.svg" alt="SketchDeck" />
        <p>The creative partner you trust to make your vision real. AI-accelerated. Strategy-led. A 24Seven company.</p>
        <span className="foot__copy">© 2026 SketchDeck · A 24Seven company</span>
      </div>
    </footer>);

}

Object.assign(window, {
  Nav, PromiseBand, WhyNow, CompareBlock, WhatWeBuild, ProcessTimeline,
  Pillars, Portfolio, WhySD, FAQ, FinalCTA, Footer
});
/* global React */

// Direction A — Editorial Builder
// Hero: a wide glass window with a slider revealing
// "code (terminal)" on the left, and the Syne all-caps headline on the right.

const { useState: useStateA, useRef: useRefA, useEffect: useEffectA } = React;

function HeroSlider() {
  const [pos, setPos] = useStateA(0.62); // 0 = full code, 1 = full headline
  const stageRef = useRefA(null);
  const draggingRef = useRefA(false);

  const moveTo = (clientX) => {
    const el = stageRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const minPx = 50; // never let the slider get closer than 50px to the left edge
    const minPos = rect.width > 0 ? minPx / rect.width : 0;
    const raw = (clientX - rect.left) / rect.width;
    const next = Math.min(1, Math.max(minPos, raw));
    setPos(next);
  };

  useEffectA(() => {
    const onMove = (e) => {
      if (!draggingRef.current) return;
      const x = e.touches ? e.touches[0]?.clientX : e.clientX;
      if (x != null) moveTo(x);
    };
    const onUp = () => {draggingRef.current = false;document.body.style.userSelect = "";};
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchend", onUp);
    };
  }, []);

  // direct cursor tracking using rAF — no transition lag
  const onStageMove = (e) => {
    const x = e.clientX;
    requestAnimationFrame(() => moveTo(x));
  };
  const onStageDown = (e) => {
    draggingRef.current = true;
    document.body.style.userSelect = "none";
    const x = e.touches ? e.touches[0]?.clientX : e.clientX;
    if (x != null) moveTo(x);
    e.preventDefault();
  };

  // typed code — looks like a terminal session
  const codeLines = [
  { p: "$ ", c: <><span className="hk-c">sketchdeck</span> build --brief acme-q3.md --accent texas-sun</> },
  { p: "» ", c: <span className="hk-mute">strategy locked · audience · ops leaders · ship friday</span> },
  { p: "» ", c: <span className="hk-mute">brand tokens loaded · syne · inter · 1.5px rules</span> },
  { p: "", c: "" },
  { p: "", c: <><span className="hk-k">export default function</span> <span className="hk-fn">Hero</span>() {"{"}</> },
  { p: "", c: <>{"  "}<span className="hk-k">return</span> (</> },
  { p: "", c: <>{"    "}{"<"}<span className="hk-t">Headline</span> <span className="hk-a">size</span>={"{"}<span className="hk-n">156</span>{"}"}{">"}</> },
  { p: "", c: <>{"      "}<span className="hk-s">"Launch"</span></> },
  { p: "", c: <>{"      "}<span className="hk-s">"marketing"</span></> },
  { p: "", c: <>{"      "}<span className="hk-s">"sites in"</span>{" "}<span className="hk-acc">"days"</span><span className="hk-acc">.</span></> },
  { p: "", c: <>{"    "}{"<"}/<span className="hk-t">Headline</span>{">"}</> },
  { p: "", c: <>{"  "}{")"}</> },
  { p: "", c: <>{"}"}</> },
  { p: "", c: "" },
  { p: "✓ ", c: <span className="hk-ok">strategy-led · on-brand · accessibility · QA · deployed</span> },
  { p: "_", c: <span className="hk-cursor">&nbsp;</span> }];


  return (
    <div className="glass">
      <div className="glass__bar">
        <i className="g g--r"></i><i className="g g--y"></i><i className="g g--g"></i>
        <span className="glass__url">sketchdeck.com/ai-website-services</span>
        <span className="glass__hint">drag the slider →</span>
      </div>

      <div
        ref={stageRef}
        className="glass__stage"
        onMouseMove={onStageMove}
        onMouseDown={onStageDown}
        onTouchStart={onStageDown}>
        
        {/* CODE LAYER (always behind) */}
        <div className="glass__code" aria-hidden={pos > 0.95}>
          <div className="hk-meta">
            <span><i className="hk-dot"></i>brief.md</span>
            <span><i className="hk-dot"></i>build.tsx</span>
            <span><i className="hk-dot hk-dot--on"></i>preview</span>
            <span className="hk-time">14:32:08</span>
          </div>
          <pre className="hk-pre">
            {codeLines.map((l, i) =>
            <div key={i} className="hk-line">
                <span className="hk-num">{String(i + 1).padStart(2, " ")}</span>
                <span className="hk-prompt">{l.p}</span>
                <span className="hk-content">{l.c}</span>
              </div>
            )}
          </pre>
        </div>

        {/* HEADLINE LAYER — clip-revealed by slider position */}
        <div className="glass__head" style={{ clipPath: `inset(0 0 0 ${pos * 100}%)` }}>
          <div className="glass__head-inner" style={{ transform: `translateX(${(1 - pos) * -6}%)` }}>
            <h1 className="glass__h1">
              Launch<br />
              marketing<br />
              sites in <span className="glass__acc">days</span>.
            </h1>
            <div className="glass__foot">
              <span className="glass__chip">Strategy-led</span>
              <span className="glass__chip">On-brand design</span>
              <span className="glass__chip">Accessibility included</span>
              <span className="glass__chip">Professional QA</span>
              <span className="glass__chip">Reliable deployment</span>
            </div>
          </div>
        </div>

        {/* SLIDER HANDLE */}
        <div className="glass__handle" style={{ left: `calc(${pos * 100}% - 1px)` }}>
          <div className="glass__handle-bar"></div>
          <div className="glass__handle-grip">
            <span className="glass__handle-arrow">‹</span>
            <span className="glass__handle-arrow">›</span>
          </div>
          <div className="glass__handle-tag">{Math.round(pos * 100)}%</div>
        </div>
      </div>
    </div>);

}

function AIBuilderHero() {
  return (
    <section className="A-hero A-hero--wide">
      <div className="A-hero__copy">
        <span className="A-hero__chip">AI website services · 2026</span>
      </div>
      <HeroSlider />
      <div className="A-hero__below">
        <p className="A-hero__lede">
          AI accelerates the build. SketchDeck provides the strategy, creative direction and quality oversight that ensures the result actually works — for your audience, your brand and your business.
        </p>
        <div className="actions">
          <a className="btn btn--accent btn--lg" href="#book">Book a chat <span className="arrow">→</span></a>
        </div>
      </div>
    </section>);

}

function HeroStrip() {
  return (
    <div className="A-strip A-strip--center">
      <div className="A-strip__inner">
        <div className="item"><div className="k">Landing pages from</div><div className="v">5 days</div></div>
        <div className="item"><div className="k">Microsites from</div><div className="v">3 weeks</div></div>
        <div className="item"><div className="k">Pricing from</div><div className="v">$8k</div></div>
        <div className="item"><div className="k">Accessibility</div><div className="v">WCAG 2.2 AA</div></div>
      </div>
    </div>);

}

function DirectionA() {
  return (
    <div>
      <Nav dark />
      <AIBuilderHero />
      <HeroStrip />
      <PromiseBand />
      <WhyNow />
      <section className="section section--ice" id="different">
        <div className="section-hd">
          <div>
            <p className="eyebrow">How we're different</p>
            <h2>AI on its own is a draft.<br />Not a website.</h2>
          </div>
          <p>Generic AI tools spit out a site. We ship one. The difference is the senior team in front of the AI — direction, refinement, accessibility, QA, deployment.</p>
        </div>
        <CompareBlock />
      </section>
      <WhatWeBuild />
      <ProcessTimeline />
      <WhySD />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>);

}

window.DirectionA = DirectionA;
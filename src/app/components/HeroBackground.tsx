/**
 * HeroBackground v2 â ambient Apple-esque motion for the homepage hero.
 * Themes: AI, healthcare, automation, data science.
 * New: prominent scrolling pulse with a traveling bright node, and a
 * single shooting star that streaks diagonally across every ~22s.
 * Monochrome (black / grey), low opacity, unhurried.
 */
export function HeroBackground() {
  // Floating soft orbs â drift slowly on gentle diagonals.
  const orbs = [
    { x: 180, y: 180, r: 90, dx: 60, dy: -40, dur: 42, delay: 0 },
    { x: 420, y: 460, r: 60, dx: -50, dy: 50, dur: 38, delay: 3 },
    { x: 780, y: 260, r: 110, dx: 70, dy: 30, dur: 48, delay: 1.5 },
    { x: 1180, y: 500, r: 80, dx: -60, dy: -30, dur: 44, delay: 4.5 },
    { x: 1420, y: 220, r: 70, dx: -40, dy: 50, dur: 40, delay: 2 },
  ];

  // Rotating orbital rings â AI/ML motif.
  const orbits = [
    { cx: 420, cy: 320, r: 260, dur: 90, dir: 1 },
    { cx: 1200, cy: 380, r: 220, dur: 110, dir: -1 },
  ];

  // Drifting data-point constellation â data science motif.
  const dots: { x: number; y: number; r: number; dx: number; dy: number; dur: number; delay: number; op: number }[] = [];
  for (let i = 0; i < 36; i++) {
    const x = 60 + ((i * 173) % 1500);
    const y = 60 + ((i * 97) % 780);
    const r = 1.4 + ((i * 7) % 5) * 0.4;
    const dx = (((i * 29) % 60) - 30);
    const dy = (((i * 41) % 60) - 30);
    const dur = 30 + ((i * 11) % 25);
    const delay = (i * 0.7) % 10;
    const op = 0.25 + ((i * 13) % 7) * 0.04;
    dots.push({ x, y, r, dx, dy, dur, delay, op });
  }

  // ECG pulse â single continuous path positioned at y=560, long enough to
  // tile seamlessly. One segment = 400px. We'll scroll by one segment.
  const seg = 400;
  const makeSegment = (x0: number) =>
    `L ${x0 + 110} 560 ` +
    `L ${x0 + 130} 540 ` +
    `L ${x0 + 150} 580 ` +
    `L ${x0 + 165} 440 ` +
    `L ${x0 + 185} 700 ` +
    `L ${x0 + 205} 520 ` +
    `L ${x0 + 225} 580 ` +
    `L ${x0 + 245} 560 ` +
    `L ${x0 + seg} 560`;
  let ecgPath = 'M -400 560 ';
  for (let i = 0; i < 7; i++) {
    ecgPath += makeSegment(-400 + i * seg) + ' ';
  }

  // A shorter traveling path for the "pulse head" â just the first segment,
  // which repeats via animateMotion's cycling behaviour.
  const pulseHeadPath =
    `M 0 560 ` +
    `L 110 560 ` +
    `L 130 540 ` +
    `L 150 580 ` +
    `L 165 440 ` +
    `L 185 700 ` +
    `L 205 520 ` +
    `L 225 580 ` +
    `L 245 560 ` +
    `L 400 560`;

  return (
    <svg
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="orbGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#000" stopOpacity="0.08" />
          <stop offset="0.6" stopColor="#000" stopOpacity="0.03" />
          <stop offset="1" stopColor="#000" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="orbitNode" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#000" stopOpacity="0.9" />
          <stop offset="1" stopColor="#000" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="pulseHead" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#000" stopOpacity="1" />
          <stop offset="0.3" stopColor="#000" stopOpacity="0.5" />
          <stop offset="1" stopColor="#000" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="starHead" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#000" stopOpacity="1" />
          <stop offset="0.4" stopColor="#000" stopOpacity="0.6" />
          <stop offset="1" stopColor="#000" stopOpacity="0" />
        </radialGradient>
        <path id="pulseHeadPath" d={pulseHeadPath} />
      </defs>

      {/* Floating soft orbs */}
      {orbs.map((o, i) => (
        <g key={`orb-${i}`}>
          <circle cx={o.x} cy={o.y} r={o.r} fill="url(#orbGrad)">
            <animateTransform
              attributeName="transform"
              type="translate"
              values={`0 0 ; ${o.dx} ${o.dy} ; 0 0`}
              dur={`${o.dur}s`}
              begin={`${o.delay}s`}
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.2 1 ; 0.4 0 0.2 1"
              keyTimes="0;0.5;1"
            />
            <animate
              attributeName="r"
              values={`${o.r};${o.r + 12};${o.r}`}
              dur={`${o.dur}s`}
              begin={`${o.delay}s`}
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.2 1 ; 0.4 0 0.2 1"
              keyTimes="0;0.5;1"
            />
          </circle>
        </g>
      ))}

      {/* Rotating orbital rings â AI/ML motif */}
      {orbits.map((o, i) => {
        const to = o.dir === 1 ? 360 : -360;
        return (
          <g key={`orbit-${i}`}>
            <circle cx={o.cx} cy={o.cy} r={o.r} fill="none" stroke="#000" strokeWidth="0.6" opacity="0.08" strokeDasharray="2 6" />
            <circle cx={o.cx} cy={o.cy} r={o.r * 0.72} fill="none" stroke="#000" strokeWidth="0.6" opacity="0.06" />
            <g>
              <animateTransform
                attributeName="transform"
                type="rotate"
                from={`0 ${o.cx} ${o.cy}`}
                to={`${to} ${o.cx} ${o.cy}`}
                dur={`${o.dur}s`}
                repeatCount="indefinite"
              />
              <circle cx={o.cx + o.r} cy={o.cy} r="14" fill="url(#orbitNode)" opacity="0.3" />
              <circle cx={o.cx + o.r} cy={o.cy} r="3" fill="#000" opacity="0.5" />
              <circle cx={o.cx - o.r * 0.72} cy={o.cy} r="10" fill="url(#orbitNode)" opacity="0.25" />
              <circle cx={o.cx - o.r * 0.72} cy={o.cy} r="2" fill="#000" opacity="0.4" />
            </g>
          </g>
        );
      })}

      {/* Breathing concentric rings â healthcare pulse motif */}
      <g fill="none" stroke="#000" strokeWidth="0.8">
        <circle cx="820" cy="450" r="200" opacity="0.05">
          <animate attributeName="r" values="180;260;180" dur="18s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1 ; 0.4 0 0.2 1" keyTimes="0;0.5;1" />
          <animate attributeName="opacity" values="0.03;0.09;0.03" dur="18s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1 ; 0.4 0 0.2 1" keyTimes="0;0.5;1" />
        </circle>
        <circle cx="820" cy="450" r="320" opacity="0.04">
          <animate attributeName="r" values="290;380;290" dur="22s" begin="2s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1 ; 0.4 0 0.2 1" keyTimes="0;0.5;1" />
          <animate attributeName="opacity" values="0.02;0.07;0.02" dur="22s" begin="2s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1 ; 0.4 0 0.2 1" keyTimes="0;0.5;1" />
        </circle>
      </g>

      {/* Drifting data-point constellation â data science motif */}
      {dots.map((d, i) => (
        <circle key={`dot-${i}`} cx={d.x} cy={d.y} r={d.r} fill="#000" opacity={d.op}>
          <animateTransform
            attributeName="transform"
            type="translate"
            values={`0 0 ; ${d.dx} ${d.dy} ; 0 0`}
            dur={`${d.dur}s`}
            begin={`${d.delay}s`}
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.2 1 ; 0.4 0 0.2 1"
            keyTimes="0;0.5;1"
          />
          <animate
            attributeName="opacity"
            values={`${d.op * 0.4};${d.op * 1.2};${d.op * 0.4}`}
            dur={`${d.dur * 0.6}s`}
            begin={`${d.delay}s`}
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.2 1 ; 0.4 0 0.2 1"
            keyTimes="0;0.5;1"
          />
        </circle>
      ))}

      {/* ECG pulse line â scrolls one segment every 9s, loops seamlessly.
          Represents healthcare heartbeat + AI signal processing. */}
      <g>
        <animateTransform
          attributeName="transform"
          type="translate"
          from="0 0"
          to="-400 0"
          dur="9s"
          repeatCount="indefinite"
        />
        {/* soft wide underglow */}
        <path d={ecgPath} fill="none" stroke="#000" strokeWidth="6" strokeLinejoin="round" strokeLinecap="round" opacity="0.05" />
        {/* main stroke â visible but subtle */}
        <path d={ecgPath} fill="none" stroke="#000" strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round" opacity="0.22" />
      </g>

      {/* Pulse head â bright node travelling along the ECG rhythm.
          Uses animateMotion along one segment that repeats seamlessly. */}
      <g>
        <circle r="20" fill="url(#pulseHead)" opacity="0.55">
          <animateMotion dur="9s" repeatCount="indefinite" rotate="0">
            <mpath href="#pulseHeadPath" />
          </animateMotion>
        </circle>
        <circle r="3.5" fill="#000">
          <animateMotion dur="9s" repeatCount="indefinite" rotate="0">
            <mpath href="#pulseHeadPath" />
          </animateMotion>
          <animate attributeName="r" values="3;4.5;3" dur="9s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1 ; 0.4 0 0.2 1" keyTimes="0;0.5;1" />
        </circle>
      </g>


      {/* ===== ERP / SAP motif: rotating automation gear ===== */}
      <g transform="translate(1360 180)" opacity="0.5">
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 0 0"
            to="360 0 0"
            dur="60s"
            repeatCount="indefinite"
          />
          {/* teeth — 12 radial lines */}
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i / 12) * Math.PI * 2;
            const r1 = 42;
            const r2 = 52;
            return (
              <line
                key={i}
                x1={Math.cos(a) * r1}
                y1={Math.sin(a) * r1}
                x2={Math.cos(a) * r2}
                y2={Math.sin(a) * r2}
                stroke="#000"
                strokeWidth="1.2"
                opacity="0.35"
                strokeLinecap="round"
              />
            );
          })}
          {/* outer ring */}
          <circle cx="0" cy="0" r="42" fill="none" stroke="#000" strokeWidth="0.8" opacity="0.3" />
          {/* inner hub */}
          <circle cx="0" cy="0" r="18" fill="none" stroke="#000" strokeWidth="0.8" opacity="0.4" />
          <circle cx="0" cy="0" r="4" fill="#000" opacity="0.5" />
        </g>
      </g>

      {/* ===== ERP / SAP motif: module pipeline with data packet ===== */}
      <g transform="translate(80 740)" opacity="0.55">
        {/* connecting line */}
        <line x1="18" y1="18" x2="402" y2="18" stroke="#000" strokeWidth="0.8" opacity="0.3" strokeDasharray="3 4" />
        {/* 5 module tiles — small rounded squares */}
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i} transform={`translate(${i * 96} 0)`}>
            <rect x="0" y="0" width="36" height="36" rx="4" fill="#fff" stroke="#000" strokeWidth="1" opacity="0.55" />
            <rect x="6" y="6" width="24" height="4" fill="#000" opacity="0.3" />
            <rect x="6" y="14" width="18" height="3" fill="#000" opacity="0.22" />
            <rect x="6" y="21" width="22" height="3" fill="#000" opacity="0.22" />
            <rect x="6" y="28" width="14" height="3" fill="#000" opacity="0.22" />
            {/* module activity pulse */}
            <circle cx="30" cy="6" r="1.5" fill="#000" opacity="0.4">
              <animate
                attributeName="opacity"
                values="0.15;0.85;0.15"
                dur="4s"
                begin={`${i * 0.6}s`}
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.4 0 0.2 1 ; 0.4 0 0.2 1"
                keyTimes="0;0.5;1"
              />
            </circle>
          </g>
        ))}
        {/* data packet travelling module → module along the pipeline */}
        <g>
          <circle r="4" fill="#000" opacity="0.75">
            <animate
              attributeName="cx"
              values="36 ; 96 ; 132 ; 192 ; 228 ; 288 ; 324 ; 384 ; 384 ; 36"
              keyTimes="0 ; 0.1 ; 0.22 ; 0.32 ; 0.44 ; 0.54 ; 0.66 ; 0.76 ; 0.95 ; 1"
              dur="12s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.2 1 ; 0 0 1 1 ; 0.4 0 0.2 1 ; 0 0 1 1 ; 0.4 0 0.2 1 ; 0 0 1 1 ; 0.4 0 0.2 1 ; 0 0 1 1 ; 1 0 1 0"
            />
            <animate
              attributeName="cy"
              values="18"
              dur="12s"
              repeatCount="indefinite"
            />
          </circle>
          <circle r="10" fill="url(#pulseHead)" opacity="0.4">
            <animate
              attributeName="cx"
              values="36 ; 96 ; 132 ; 192 ; 228 ; 288 ; 324 ; 384 ; 384 ; 36"
              keyTimes="0 ; 0.1 ; 0.22 ; 0.32 ; 0.44 ; 0.54 ; 0.66 ; 0.76 ; 0.95 ; 1"
              dur="12s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.2 1 ; 0 0 1 1 ; 0.4 0 0.2 1 ; 0 0 1 1 ; 0.4 0 0.2 1 ; 0 0 1 1 ; 0.4 0 0.2 1 ; 0 0 1 1 ; 1 0 1 0"
            />
            <animate attributeName="cy" values="18" dur="12s" repeatCount="indefinite" />
          </circle>
        </g>
      </g>

      {/* Shooting star â streaks diagonally across every ~22s.
          Visible for ~4s of each cycle, parked off-screen the rest.
          Trail is a cascade of small circles with decreasing opacity. */}
      <g>
        <animateTransform
          attributeName="transform"
          type="translate"
          values="-220 60 ; 1820 620 ; 1820 620"
          keyTimes="0 ; 0.18 ; 1"
          dur="22s"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.25 0.1 0.25 1 ; 0 0 1 1"
        />
        <g opacity="0.9">
          <animate attributeName="opacity" values="0 ; 0.9 ; 0.9 ; 0 ; 0" keyTimes="0 ; 0.02 ; 0.17 ; 0.2 ; 1" dur="22s" repeatCount="indefinite" />
          {/* Tail â descending opacity circles pointing back along the diagonal */}
          <circle cx="-150" cy="-37" r="0.8" fill="#000" opacity="0.08" />
          <circle cx="-130" cy="-32" r="1" fill="#000" opacity="0.12" />
          <circle cx="-110" cy="-27" r="1.2" fill="#000" opacity="0.18" />
          <circle cx="-90" cy="-22" r="1.4" fill="#000" opacity="0.25" />
          <circle cx="-70" cy="-17" r="1.6" fill="#000" opacity="0.33" />
          <circle cx="-55" cy="-13" r="1.8" fill="#000" opacity="0.42" />
          <circle cx="-40" cy="-10" r="2" fill="#000" opacity="0.52" />
          <circle cx="-28" cy="-7" r="2.2" fill="#000" opacity="0.65" />
          <circle cx="-16" cy="-4" r="2.4" fill="#000" opacity="0.78" />
          <circle cx="-6" cy="-1.5" r="2.6" fill="#000" opacity="0.88" />
          {/* Bright head */}
          <circle cx="0" cy="0" r="14" fill="url(#starHead)" opacity="0.55" />
          <circle cx="0" cy="0" r="3.2" fill="#000" />
        </g>
      </g>
    </svg>
  );
}

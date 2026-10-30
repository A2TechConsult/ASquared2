// trigger preview2 netlify branch deploy â build 3 (visible slow animations)
/**
 * HeroImage â monochrome, Apple-esque SVG hero graphics with visibly
 * live but unhurried animations. Palette: white, black, grey.
 * variants: 'ai' | 'healthcare' | 'expertise'
 */
export function HeroImage({
  variant,
  className = '',
}: {
  variant: 'ai' | 'healthcare' | 'expertise';
  className?: string;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white ${className}`}
      style={{ aspectRatio: '16 / 5' }}
      aria-hidden="true"
    >
      {variant === 'ai' && <AiArt />}
      {variant === 'healthcare' && <HealthcareArt />}
      {variant === 'expertise' && <ExpertiseArt />}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/0 via-transparent to-white"></div>
    </div>
  );
}

/* ============================================================
   AI â neural network with slow-drifting data particles traveling
   along the links, plus breathing highlight halos.
   ============================================================ */

function AiArt() {
  const nodes: { x: number; y: number; r: number }[] = [];
  const cols = 14;
  const rows = 5;
  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      const jitterX = (((c * 37 + r * 13) % 11) - 5) * 2.5;
      const jitterY = (((c * 23 + r * 7) % 9) - 4) * 2.5;
      const x = 60 + c * (1480 / (cols - 1)) + jitterX;
      const y = 70 + r * (280 / (rows - 1)) + jitterY;
      const r2 = ((c + r) % 7 === 0 ? 5 : (c + r) % 3 === 0 ? 3 : 2);
      nodes.push({ x, y, r: r2 });
    }
  }
  const links: { x1: number; y1: number; x2: number; y2: number; o: number; i: number }[] = [];
  let li = 0;
  for (let c = 0; c < cols - 1; c++) {
    for (let r = 0; r < rows; r++) {
      const a = nodes[c * rows + r];
      for (let dr = -1; dr <= 1; dr++) {
        const r2 = r + dr;
        if (r2 < 0 || r2 >= rows) continue;
        const b = nodes[(c + 1) * rows + r2];
        const o = dr === 0 ? 0.35 : 0.15;
        links.push({ x1: a.x, y1: a.y, x2: b.x, y2: b.y, o, i: li++ });
      }
    }
  }

  // Hand-picked traveling-particle paths across the grid â slow drift LâR,
  // staggered so there's always motion somewhere on the canvas.
  const particles = links
    .filter((l) => [8, 25, 42, 59, 73, 90, 107, 124, 140, 155, 7, 50, 100].includes(l.i))
    .map((l, idx) => ({ ...l, dur: 12 + (idx % 6), begin: (idx * 1.3) % 10 }));

  const highlights = [
    { x: 290, y: 180, r: 10, dur: 7.5, delay: 0 },
    { x: 720, y: 110, r: 8, dur: 9, delay: 2.3 },
    { x: 1020, y: 230, r: 11, dur: 8, delay: 1.1 },
    { x: 1300, y: 150, r: 7, dur: 10, delay: 3.4 },
  ];

  return (
    <svg
      viewBox="0 0 1600 500"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full"
    >
      <defs>
        <linearGradient id="aibg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f5f5f5" />
          <stop offset="1" stopColor="#ffffff" />
        </linearGradient>
        <radialGradient id="aiglow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#111" stopOpacity="0.9" />
          <stop offset="1" stopColor="#111" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="aipart" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#000" stopOpacity="1" />
          <stop offset="0.6" stopColor="#000" stopOpacity="0.4" />
          <stop offset="1" stopColor="#000" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1600" height="500" fill="url(#aibg)" />
      <rect y="200" width="1600" height="1" fill="#000" opacity="0.04" />

      {/* static links */}
      {links.map((l) => (
        <line
          key={l.i}
          x1={l.x1}
          y1={l.y1}
          x2={l.x2}
          y2={l.y2}
          stroke="#111111"
          strokeWidth="0.75"
          opacity={l.o}
        />
      ))}

      {/* breathing standard nodes (every 4th) */}
      {nodes.map((n, i) => {
        const breathe = i % 4 === 0;
        return (
          <circle key={i} cx={n.x} cy={n.y} r={n.r} fill="#111111" opacity="0.55">
            {breathe && (
              <animate
                attributeName="opacity"
                values="0.3;0.85;0.3"
                dur={`${8 + (i % 5)}s`}
                begin={`${(i * 0.21) % 5}s`}
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.4 0 0.2 1 ; 0.4 0 0.2 1"
                keyTimes="0;0.5;1"
              />
            )}
          </circle>
        );
      })}

      {/* traveling data particles â drift slowly along select edges */}
      {particles.map((p, i) => (
        <g key={`p-${i}`}>
          {/* soft trailing glow */}
          <circle r="7" fill="url(#aipart)" opacity="0.5">
            <animate
              attributeName="cx"
              values={`${p.x1};${p.x2};${p.x1}`}
              dur={`${p.dur}s`}
              begin={`${p.begin}s`}
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.2 1 ; 0.4 0 0.2 1"
              keyTimes="0;0.5;1"
            />
            <animate
              attributeName="cy"
              values={`${p.y1};${p.y2};${p.y1}`}
              dur={`${p.dur}s`}
              begin={`${p.begin}s`}
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.2 1 ; 0.4 0 0.2 1"
              keyTimes="0;0.5;1"
            />
          </circle>
          {/* bright core */}
          <circle r="1.8" fill="#000">
            <animate
              attributeName="cx"
              values={`${p.x1};${p.x2};${p.x1}`}
              dur={`${p.dur}s`}
              begin={`${p.begin}s`}
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.2 1 ; 0.4 0 0.2 1"
              keyTimes="0;0.5;1"
            />
            <animate
              attributeName="cy"
              values={`${p.y1};${p.y2};${p.y1}`}
              dur={`${p.dur}s`}
              begin={`${p.begin}s`}
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.2 1 ; 0.4 0 0.2 1"
              keyTimes="0;0.5;1"
            />
          </circle>
        </g>
      ))}

      {/* highlight nodes â breathing halos */}
      {highlights.map((h, i) => (
        <g key={i}>
          <circle cx={h.x} cy={h.y} r={h.r * 3.5} fill="url(#aiglow)" opacity="0.3">
            <animate
              attributeName="opacity"
              values="0.15;0.5;0.15"
              dur={`${h.dur}s`}
              begin={`${h.delay}s`}
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.2 1 ; 0.4 0 0.2 1"
              keyTimes="0;0.5;1"
            />
            <animate
              attributeName="r"
              values={`${h.r * 2.8};${h.r * 4.6};${h.r * 2.8}`}
              dur={`${h.dur}s`}
              begin={`${h.delay}s`}
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.2 1 ; 0.4 0 0.2 1"
              keyTimes="0;0.5;1"
            />
          </circle>
          <circle cx={h.x} cy={h.y} r={h.r} fill="#000" />
          <circle cx={h.x} cy={h.y} r={h.r - 2} fill="#fff" opacity="0.7">
            <animate
              attributeName="opacity"
              values="0.55;1;0.55"
              dur={`${h.dur}s`}
              begin={`${h.delay}s`}
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.2 1 ; 0.4 0 0.2 1"
              keyTimes="0;0.5;1"
            />
          </circle>
        </g>
      ))}
    </svg>
  );
}

/* ============================================================
   Healthcare â ECG scrolling slowly across. (Already live.)
   ============================================================ */

function HealthcareArt() {
  const dots: { x: number; y: number }[] = [];
  for (let x = 40; x < 1600; x += 28) {
    for (let y = 40; y < 500; y += 28) {
      dots.push({ x, y });
    }
  }

  const seg = 320;
  const makeSegment = (x0: number) =>
    `L ${x0 + 80} 250 ` +
    `L ${x0 + 95} 240 ` +
    `L ${x0 + 110} 260 ` +
    `L ${x0 + 120} 180 ` +
    `L ${x0 + 135} 320 ` +
    `L ${x0 + 150} 230 ` +
    `L ${x0 + 165} 260 ` +
    `L ${x0 + 180} 250 ` +
    `L ${x0 + seg} 250`;

  let ecgPath = 'M -320 250 ';
  const totalSegs = 8;
  for (let i = 0; i < totalSegs; i++) {
    ecgPath += makeSegment(-320 + i * seg) + ' ';
  }

  return (
    <svg
      viewBox="0 0 1600 500"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full"
    >
      <defs>
        <linearGradient id="hcbg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fafafa" />
          <stop offset="1" stopColor="#ffffff" />
        </linearGradient>
      </defs>
      <rect width="1600" height="500" fill="url(#hcbg)" />

      <g fill="#111111" opacity="0.12">
        {dots.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r="1.1" />
        ))}
      </g>

      <g opacity="0.08" fill="#000">
        <ellipse cx="220" cy="140" rx="90" ry="90">
          <animate attributeName="rx" values="86;96;86" dur="12s" repeatCount="indefinite"
            calcMode="spline" keySplines="0.4 0 0.2 1 ; 0.4 0 0.2 1" keyTimes="0;0.5;1" />
          <animate attributeName="ry" values="86;96;86" dur="12s" repeatCount="indefinite"
            calcMode="spline" keySplines="0.4 0 0.2 1 ; 0.4 0 0.2 1" keyTimes="0;0.5;1" />
        </ellipse>
        <ellipse cx="1380" cy="360" rx="120" ry="120">
          <animate attributeName="rx" values="115;130;115" dur="14s" begin="2s" repeatCount="indefinite"
            calcMode="spline" keySplines="0.4 0 0.2 1 ; 0.4 0 0.2 1" keyTimes="0;0.5;1" />
          <animate attributeName="ry" values="115;130;115" dur="14s" begin="2s" repeatCount="indefinite"
            calcMode="spline" keySplines="0.4 0 0.2 1 ; 0.4 0 0.2 1" keyTimes="0;0.5;1" />
        </ellipse>
      </g>
      <g opacity="0.14" stroke="#000" strokeWidth="1" fill="none">
        <circle cx="220" cy="140" r="140" />
        <circle cx="220" cy="140" r="190" />
        <circle cx="1380" cy="360" r="170" />
        <circle cx="1380" cy="360" r="220" />
      </g>

      <g>
        <animateTransform
          attributeName="transform"
          type="translate"
          from="0 0"
          to="-320 0"
          dur="10s"
          repeatCount="indefinite"
        />
        <path d={ecgPath} fill="none" stroke="#000" strokeWidth="7" strokeLinejoin="round" strokeLinecap="round" opacity="0.08" />
        <path d={ecgPath} fill="none" stroke="#000" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
      </g>
    </svg>
  );
}

/* ============================================================
   Expertise â constellation whose clusters slowly rotate around
   their centres (60â85s per revolution) and whose halos breathe.
   ============================================================ */

function ExpertiseArt() {
  const clusters = [
    { cx: 230, cy: 250, nodes: 8, dur: 72, dir: 1 },
    { cx: 560, cy: 190, nodes: 10, dur: 85, dir: -1 },
    { cx: 880, cy: 290, nodes: 9, dur: 68, dir: 1 },
    { cx: 1210, cy: 210, nodes: 11, dur: 90, dir: -1 },
    { cx: 1450, cy: 320, nodes: 7, dur: 76, dir: 1 },
  ];

  const centres = clusters.map((c) => ({ x: c.cx, y: c.cy }));

  return (
    <svg
      viewBox="0 0 1600 500"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full"
    >
      <defs>
        <linearGradient id="expbg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f6f6f6" />
          <stop offset="1" stopColor="#ffffff" />
        </linearGradient>
        <radialGradient id="expglow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#000" stopOpacity="0.6" />
          <stop offset="1" stopColor="#000" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1600" height="500" fill="url(#expbg)" />

      <g stroke="#000" opacity="0.05">
        <line x1="0" y1="150" x2="1600" y2="150" />
        <line x1="0" y1="350" x2="1600" y2="350" />
      </g>

      {/* cluster-to-cluster lines with slow opacity drift */}
      {centres.slice(0, -1).map((a, i) => (
        <line
          key={`c-${i}`}
          x1={a.x}
          y1={a.y}
          x2={centres[i + 1].x}
          y2={centres[i + 1].y}
          stroke="#111"
          strokeWidth="1"
          opacity="0.25"
        >
          <animate
            attributeName="opacity"
            values="0.1;0.4;0.1"
            dur={`${13 + i * 2}s`}
            begin={`${i * 1.3}s`}
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.2 1 ; 0.4 0 0.2 1"
            keyTimes="0;0.5;1"
          />
        </line>
      ))}

      {/* each cluster â ROTATES slowly around its centre */}
      {clusters.map((cl, ci) => {
        const to = cl.dir === 1 ? 360 : -360;
        const nodes: { x: number; y: number; r: number; twinkle: boolean; tDur: number; tBegin: number }[] = [];
        for (let i = 0; i < cl.nodes; i++) {
          const ang = (i / cl.nodes) * Math.PI * 2 + ci * 0.6;
          const radius = 55 + ((i * 13) % 60);
          nodes.push({
            x: cl.cx + Math.cos(ang) * radius,
            y: cl.cy + Math.sin(ang) * radius * 0.7,
            r: 2 + (i % 3),
            twinkle: i % 2 === 0,
            tDur: 6 + (i % 4),
            tBegin: (i * 0.5 + ci * 0.9) % 5,
          });
        }
        return (
          <g key={`cl-${ci}`}>
            <animateTransform
              attributeName="transform"
              type="rotate"
              from={`0 ${cl.cx} ${cl.cy}`}
              to={`${to} ${cl.cx} ${cl.cy}`}
              dur={`${cl.dur}s`}
              repeatCount="indefinite"
            />
            {/* within-cluster spokes */}
            <g stroke="#111" opacity="0.2" strokeWidth="0.8">
              {nodes.map((n, i) => (
                <line key={i} x1={cl.cx} y1={cl.cy} x2={n.x} y2={n.y} />
              ))}
            </g>
            {/* orbiting nodes */}
            {nodes.map((n, i) => (
              <circle key={i} cx={n.x} cy={n.y} r={n.r} fill="#111" opacity="0.7">
                {n.twinkle && (
                  <animate
                    attributeName="opacity"
                    values="0.4;1;0.4"
                    dur={`${n.tDur}s`}
                    begin={`${n.tBegin}s`}
                    repeatCount="indefinite"
                    calcMode="spline"
                    keySplines="0.4 0 0.2 1 ; 0.4 0 0.2 1"
                    keyTimes="0;0.5;1"
                  />
                )}
                {n.twinkle && (
                  <animate
                    attributeName="r"
                    values={`${n.r};${n.r + 1.5};${n.r}`}
                    dur={`${n.tDur}s`}
                    begin={`${n.tBegin}s`}
                    repeatCount="indefinite"
                    calcMode="spline"
                    keySplines="0.4 0 0.2 1 ; 0.4 0 0.2 1"
                    keyTimes="0;0.5;1"
                  />
                )}
              </circle>
            ))}
          </g>
        );
      })}

      {/* centre halos â slow shine (static, not inside rotating groups) */}
      {centres.map((c, i) => (
        <g key={`h-${i}`}>
          <circle cx={c.x} cy={c.y} r="42" fill="url(#expglow)" opacity="0.2">
            <animate
              attributeName="opacity"
              values="0.08;0.32;0.08"
              dur={`${11 + i * 2}s`}
              begin={`${i * 1.7}s`}
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.2 1 ; 0.4 0 0.2 1"
              keyTimes="0;0.5;1"
            />
            <animate
              attributeName="r"
              values="34;56;34"
              dur={`${11 + i * 2}s`}
              begin={`${i * 1.7}s`}
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.2 1 ; 0.4 0 0.2 1"
              keyTimes="0;0.5;1"
            />
          </circle>
          <circle cx={c.x} cy={c.y} r="7" fill="#111" opacity="0.9" />
          <circle cx={c.x} cy={c.y} r="18" fill="none" stroke="#000" opacity="0.15" />
        </g>
      ))}
    </svg>
  );
}

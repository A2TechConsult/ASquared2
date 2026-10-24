// trigger preview2 netlify branch deploy — build 2
/**
 * HeroImage — monochrome, Apple-esque SVG hero graphics with slow,
 * unhurried animations. Palette: white, black, grey. Vector-sharp.
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
   AI — neural network with slow breathing highlight nodes and
   subtle shimmer along select links. Nothing jumps or flickers.
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
  const highlights = [
    { x: 290, y: 180, r: 10, dur: 7.5, delay: 0 },
    { x: 720, y: 110, r: 8, dur: 9, delay: 2.3 },
    { x: 1020, y: 230, r: 11, dur: 8, delay: 1.1 },
    { x: 1300, y: 150, r: 7, dur: 10, delay: 3.4 },
  ];
  // Pick a few links to shimmer slowly.
  const shimmerIdx = new Set([3, 11, 27, 44, 61, 78, 95, 112, 129, 146]);

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
      </defs>
      <rect width="1600" height="500" fill="url(#aibg)" />
      <rect y="200" width="1600" height="1" fill="#000" opacity="0.04" />

      {/* links */}
      {links.map((l) => {
        const shimmer = shimmerIdx.has(l.i);
        return (
          <line
            key={l.i}
            x1={l.x1}
            y1={l.y1}
            x2={l.x2}
            y2={l.y2}
            stroke="#111111"
            strokeWidth="0.75"
            opacity={l.o}
          >
            {shimmer && (
              <animate
                attributeName="opacity"
                values={`${l.o};${Math.min(0.9, l.o + 0.35)};${l.o}`}
                dur={`${8 + (l.i % 5)}s`}
                begin={`${(l.i * 0.37) % 6}s`}
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.4 0 0.2 1 ; 0.4 0 0.2 1"
                keyTimes="0;0.5;1"
              />
            )}
          </line>
        );
      })}

      {/* standard nodes with very subtle breathing on a subset */}
      {nodes.map((n, i) => {
        const breathe = i % 11 === 0;
        return (
          <circle key={i} cx={n.x} cy={n.y} r={n.r} fill="#111111" opacity="0.55">
            {breathe && (
              <animate
                attributeName="opacity"
                values="0.35;0.75;0.35"
                dur={`${11 + (i % 4)}s`}
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

      {/* highlight nodes — slow breathing halos */}
      {highlights.map((h, i) => (
        <g key={i}>
          <circle cx={h.x} cy={h.y} r={h.r * 3.5} fill="url(#aiglow)" opacity="0.3">
            <animate
              attributeName="opacity"
              values="0.18;0.45;0.18"
              dur={`${h.dur}s`}
              begin={`${h.delay}s`}
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.2 1 ; 0.4 0 0.2 1"
              keyTimes="0;0.5;1"
            />
            <animate
              attributeName="r"
              values={`${h.r * 3};${h.r * 4.2};${h.r * 3}`}
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
              values="0.6;0.95;0.6"
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
   Healthcare — ECG pulse scrolling slowly across, dot grid,
   abstract molecule rings with very gentle breathing.
   ============================================================ */

function HealthcareArt() {
  const dots: { x: number; y: number }[] = [];
  for (let x = 40; x < 1600; x += 28) {
    for (let y = 40; y < 500; y += 28) {
      dots.push({ x, y });
    }
  }

  // Build one ECG segment, then repeat it enough to fill 2× viewBox so we can scroll by one segment.
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

  // Enough segments to cover 2× viewBox (we offset-translate by one seg).
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

      {/* dot grid */}
      <g fill="#111111" opacity="0.12">
        {dots.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r="1.1" />
        ))}
      </g>

      {/* soft breathing molecule accents */}
      <g opacity="0.08" fill="#000">
        <ellipse cx="220" cy="140" rx="90" ry="90">
          <animate
            attributeName="rx"
            values="86;94;86"
            dur="14s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.2 1 ; 0.4 0 0.2 1"
            keyTimes="0;0.5;1"
          />
          <animate
            attributeName="ry"
            values="86;94;86"
            dur="14s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.2 1 ; 0.4 0 0.2 1"
            keyTimes="0;0.5;1"
          />
        </ellipse>
        <ellipse cx="1380" cy="360" rx="120" ry="120">
          <animate
            attributeName="rx"
            values="115;126;115"
            dur="16s"
            begin="2s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.2 1 ; 0.4 0 0.2 1"
            keyTimes="0;0.5;1"
          />
          <animate
            attributeName="ry"
            values="115;126;115"
            dur="16s"
            begin="2s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.2 1 ; 0.4 0 0.2 1"
            keyTimes="0;0.5;1"
          />
        </ellipse>
      </g>
      <g opacity="0.14" stroke="#000" strokeWidth="1" fill="none">
        <circle cx="220" cy="140" r="140">
          <animate
            attributeName="opacity"
            values="0.08;0.20;0.08"
            dur="12s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.2 1 ; 0.4 0 0.2 1"
            keyTimes="0;0.5;1"
          />
        </circle>
        <circle cx="220" cy="140" r="190">
          <animate
            attributeName="opacity"
            values="0.05;0.14;0.05"
            dur="12s"
            begin="1s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.2 1 ; 0.4 0 0.2 1"
            keyTimes="0;0.5;1"
          />
        </circle>
        <circle cx="1380" cy="360" r="170">
          <animate
            attributeName="opacity"
            values="0.07;0.18;0.07"
            dur="14s"
            begin="2s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.2 1 ; 0.4 0 0.2 1"
            keyTimes="0;0.5;1"
          />
        </circle>
        <circle cx="1380" cy="360" r="220">
          <animate
            attributeName="opacity"
            values="0.04;0.12;0.04"
            dur="14s"
            begin="3.5s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.2 1 ; 0.4 0 0.2 1"
            keyTimes="0;0.5;1"
          />
        </circle>
      </g>

      {/* ECG — scrolls one segment width over 10s, loops seamlessly */}
      <g>
        <animateTransform
          attributeName="transform"
          type="translate"
          from="0 0"
          to="-320 0"
          dur="10s"
          repeatCount="indefinite"
        />
        <path
          d={ecgPath}
          fill="none"
          stroke="#000"
          strokeWidth="7"
          strokeLinejoin="round"
          strokeLinecap="round"
          opacity="0.08"
        />
        <path
          d={ecgPath}
          fill="none"
          stroke="#000"
          strokeWidth="2.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

/* ============================================================
   Expertise — constellation that gently shines. Centre halos
   breathe, selected nodes twinkle slowly across the scene.
   ============================================================ */

function ExpertiseArt() {
  const clusters = [
    { cx: 230, cy: 250, nodes: 8 },
    { cx: 560, cy: 190, nodes: 10 },
    { cx: 880, cy: 290, nodes: 9 },
    { cx: 1210, cy: 210, nodes: 11 },
    { cx: 1450, cy: 320, nodes: 7 },
  ];
  const pts: { x: number; y: number; r: number; ci: number; twinkleDur?: number; twinkleBegin?: number }[] = [];
  let globalIdx = 0;
  clusters.forEach((cl, ci) => {
    for (let i = 0; i < cl.nodes; i++) {
      const ang = (i / cl.nodes) * Math.PI * 2 + ci * 0.6;
      const radius = 55 + ((i * 13) % 60);
      const twinkle = globalIdx % 4 === 0;
      pts.push({
        x: cl.cx + Math.cos(ang) * radius,
        y: cl.cy + Math.sin(ang) * radius * 0.7,
        r: 2 + (i % 3),
        ci,
        twinkleDur: twinkle ? 7 + (globalIdx % 5) : undefined,
        twinkleBegin: twinkle ? (globalIdx * 0.37) % 6 : undefined,
      });
      globalIdx++;
    }
    pts.push({ x: cl.cx, y: cl.cy, r: 7, ci });
  });

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

      {/* cluster-to-cluster lines */}
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
            values="0.14;0.32;0.14"
            dur={`${13 + i * 2}s`}
            begin={`${i * 1.3}s`}
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.2 1 ; 0.4 0 0.2 1"
            keyTimes="0;0.5;1"
          />
        </line>
      ))}

      {/* within-cluster connections */}
      {clusters.map((cl, ci) => (
        <g key={`cl-${ci}`} stroke="#111" opacity="0.18" strokeWidth="0.8">
          {Array.from({ length: cl.nodes }).map((_, i) => {
            const ang1 = (i / cl.nodes) * Math.PI * 2 + ci * 0.6;
            const radius1 = 55 + ((i * 13) % 60);
            const x1 = cl.cx + Math.cos(ang1) * radius1;
            const y1 = cl.cy + Math.sin(ang1) * radius1 * 0.7;
            return <line key={i} x1={cl.cx} y1={cl.cy} x2={x1} y2={y1} />;
          })}
        </g>
      ))}

      {/* nodes — some twinkle slowly */}
      {pts.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={p.r} fill="#111" opacity="0.65">
          {p.twinkleDur !== undefined && (
            <animate
              attributeName="opacity"
              values="0.35;1;0.35"
              dur={`${p.twinkleDur}s`}
              begin={`${p.twinkleBegin}s`}
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.2 1 ; 0.4 0 0.2 1"
              keyTimes="0;0.5;1"
            />
          )}
          {p.twinkleDur !== undefined && (
            <animate
              attributeName="r"
              values={`${p.r};${p.r + 1.2};${p.r}`}
              dur={`${p.twinkleDur}s`}
              begin={`${p.twinkleBegin}s`}
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.2 1 ; 0.4 0 0.2 1"
              keyTimes="0;0.5;1"
            />
          )}
        </circle>
      ))}

      {/* centre halos — slow shine */}
      {centres.map((c, i) => (
        <g key={`h-${i}`}>
          <circle cx={c.x} cy={c.y} r="42" fill="url(#expglow)" opacity="0.2">
            <animate
              attributeName="opacity"
              values="0.08;0.28;0.08"
              dur={`${11 + i * 2}s`}
              begin={`${i * 1.7}s`}
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.2 1 ; 0.4 0 0.2 1"
              keyTimes="0;0.5;1"
            />
            <animate
              attributeName="r"
              values="36;52;36"
              dur={`${11 + i * 2}s`}
              begin={`${i * 1.7}s`}
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.2 1 ; 0.4 0 0.2 1"
              keyTimes="0;0.5;1"
            />
          </circle>
          <circle cx={c.x} cy={c.y} r="18" fill="none" stroke="#000" opacity="0.15" />
        </g>
      ))}
    </svg>
  );
}

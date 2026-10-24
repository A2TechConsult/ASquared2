/**
 * HeroImage — monochrome, Apple-esque SVG hero graphics.
 * Palette: pure white, black, grey. Vector-sharp at any resolution.
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
      {/* Edge fade for Apple-style vignette */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/0 via-transparent to-white"></div>
    </div>
  );
}

/* ---------- AI: neural / agentic network ---------- */

function AiArt() {
  // Deterministic node grid for a neural-network aesthetic.
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
  // Connect nearest neighbours between adjacent columns.
  const links: { x1: number; y1: number; x2: number; y2: number; o: number }[] = [];
  for (let c = 0; c < cols - 1; c++) {
    for (let r = 0; r < rows; r++) {
      const a = nodes[c * rows + r];
      for (let dr = -1; dr <= 1; dr++) {
        const r2 = r + dr;
        if (r2 < 0 || r2 >= rows) continue;
        const b = nodes[(c + 1) * rows + r2];
        const o = dr === 0 ? 0.35 : 0.15;
        links.push({ x1: a.x, y1: a.y, x2: b.x, y2: b.y, o });
      }
    }
  }
  // A few highlight nodes.
  const highlights = [
    { x: 290, y: 180, r: 10 },
    { x: 720, y: 110, r: 8 },
    { x: 1020, y: 230, r: 11 },
    { x: 1300, y: 150, r: 7 },
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
      </defs>
      <rect width="1600" height="500" fill="url(#aibg)" />
      {/* subtle horizon band */}
      <rect y="200" width="1600" height="1" fill="#000" opacity="0.04" />

      {/* links */}
      {links.map((l, i) => (
        <line
          key={i}
          x1={l.x1}
          y1={l.y1}
          x2={l.x2}
          y2={l.y2}
          stroke="#111111"
          strokeWidth="0.75"
          opacity={l.o}
        />
      ))}

      {/* nodes */}
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r={n.r} fill="#111111" opacity="0.55" />
      ))}

      {/* glowing highlight nodes */}
      {highlights.map((h, i) => (
        <g key={i}>
          <circle cx={h.x} cy={h.y} r={h.r * 3.5} fill="url(#aiglow)" opacity="0.35" />
          <circle cx={h.x} cy={h.y} r={h.r} fill="#000" />
          <circle cx={h.x} cy={h.y} r={h.r - 2} fill="#fff" opacity="0.7" />
        </g>
      ))}
    </svg>
  );
}

/* ---------- Healthcare: ECG pulse + dot grid ---------- */

function HealthcareArt() {
  // Dot grid
  const dots = [];
  for (let x = 40; x < 1600; x += 28) {
    for (let y = 40; y < 500; y += 28) {
      dots.push({ x, y });
    }
  }

  // ECG waveform path
  const ecgPath = (() => {
    let d = 'M 0 250';
    const seg = 320;
    for (let i = 0; i < 5; i++) {
      const x0 = i * seg;
      d += ` L ${x0 + 80} 250`;
      d += ` L ${x0 + 95} 240`;
      d += ` L ${x0 + 110} 260`;
      d += ` L ${x0 + 120} 180`;
      d += ` L ${x0 + 135} 320`;
      d += ` L ${x0 + 150} 230`;
      d += ` L ${x0 + 165} 260`;
      d += ` L ${x0 + 180} 250`;
      d += ` L ${x0 + seg} 250`;
    }
    return d;
  })();

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

      {/* soft ellipse accents (abstract molecules) */}
      <g opacity="0.08" fill="#000">
        <ellipse cx="220" cy="140" rx="90" ry="90" />
        <ellipse cx="1380" cy="360" rx="120" ry="120" />
      </g>
      <g opacity="0.14" stroke="#000" strokeWidth="1" fill="none">
        <circle cx="220" cy="140" r="140" />
        <circle cx="220" cy="140" r="190" />
        <circle cx="1380" cy="360" r="170" />
        <circle cx="1380" cy="360" r="220" />
      </g>

      {/* ECG waveform */}
      <path d={ecgPath} fill="none" stroke="#000" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
      <path d={ecgPath} fill="none" stroke="#000" strokeWidth="7" strokeLinejoin="round" strokeLinecap="round" opacity="0.08" />
    </svg>
  );
}

/* ---------- Expertise: layered constellation of expert nodes ---------- */

function ExpertiseArt() {
  // Expert constellation — grouped clusters connected by thin lines
  const clusters = [
    { cx: 230, cy: 250, nodes: 8 },
    { cx: 560, cy: 190, nodes: 10 },
    { cx: 880, cy: 290, nodes: 9 },
    { cx: 1210, cy: 210, nodes: 11 },
    { cx: 1450, cy: 320, nodes: 7 },
  ];
  const pts: { x: number; y: number; r: number; i: number }[] = [];
  clusters.forEach((cl, ci) => {
    for (let i = 0; i < cl.nodes; i++) {
      const ang = (i / cl.nodes) * Math.PI * 2 + ci * 0.6;
      const radius = 55 + ((i * 13) % 60);
      pts.push({
        x: cl.cx + Math.cos(ang) * radius,
        y: cl.cy + Math.sin(ang) * radius * 0.7,
        r: 2 + (i % 3),
        i: ci,
      });
    }
    // cluster centre
    pts.push({ x: cl.cx, y: cl.cy, r: 7, i: ci });
  });

  // Inter-cluster connections (centre to centre of adjacent clusters)
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
      </defs>
      <rect width="1600" height="500" fill="url(#expbg)" />

      {/* long horizontal reference lines */}
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
        />
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

      {/* nodes */}
      {pts.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={p.r} fill="#111" opacity="0.65" />
      ))}

      {/* centre halos */}
      {centres.map((c, i) => (
        <circle key={`h-${i}`} cx={c.x} cy={c.y} r="18" fill="none" stroke="#000" opacity="0.15" />
      ))}
    </svg>
  );
}

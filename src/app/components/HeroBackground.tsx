/**
 * HeroBackground â ambient Apple-esque motion for the homepage hero.
 * Themes: AI, healthcare, automation, data science. Monochrome,
 * low-opacity, unhurried. Pointer-events disabled.
 */
export function HeroBackground() {
  // Floating orbs â drift slowly on gentle diagonals.
  const orbs = [
    { x: 180, y: 180, r: 90, dx: 60, dy: -40, dur: 42, delay: 0 },
    { x: 420, y: 460, r: 60, dx: -50, dy: 50, dur: 38, delay: 3 },
    { x: 780, y: 260, r: 110, dx: 70, dy: 30, dur: 48, delay: 1.5 },
    { x: 1180, y: 500, r: 80, dx: -60, dy: -30, dur: 44, delay: 4.5 },
    { x: 1420, y: 220, r: 70, dx: -40, dy: 50, dur: 40, delay: 2 },
  ];

  // Rotating orbital rings (AI/ML motif) around 2 anchor points.
  const orbits = [
    { cx: 420, cy: 320, r: 260, dur: 90, dir: 1 },
    { cx: 1200, cy: 380, r: 220, dur: 110, dir: -1 },
  ];

  // Drifting data-point constellation â slow translate, no destination.
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

  // ECG-like heartbeat line slowly pulsing (healthcare motif).
  const ecgPath =
    'M 0 820 L 300 820 L 320 810 L 335 830 L 345 760 L 360 880 L 375 800 L 395 820 L 1600 820';

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

      {/* Rotating orbital rings with a travelling node â AI/ML motif */}
      {orbits.map((o, i) => {
        const to = o.dir === 1 ? 360 : -360;
        return (
          <g key={`orbit-${i}`}>
            <circle
              cx={o.cx}
              cy={o.cy}
              r={o.r}
              fill="none"
              stroke="#000"
              strokeWidth="0.6"
              opacity="0.08"
              strokeDasharray="2 6"
            />
            <circle
              cx={o.cx}
              cy={o.cy}
              r={o.r * 0.72}
              fill="none"
              stroke="#000"
              strokeWidth="0.6"
              opacity="0.06"
            />
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
          <animate
            attributeName="r"
            values="180;260;180"
            dur="18s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.2 1 ; 0.4 0 0.2 1"
            keyTimes="0;0.5;1"
          />
          <animate
            attributeName="opacity"
            values="0.03;0.09;0.03"
            dur="18s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.2 1 ; 0.4 0 0.2 1"
            keyTimes="0;0.5;1"
          />
        </circle>
        <circle cx="820" cy="450" r="320" opacity="0.04">
          <animate
            attributeName="r"
            values="290;380;290"
            dur="22s"
            begin="2s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.2 1 ; 0.4 0 0.2 1"
            keyTimes="0;0.5;1"
          />
          <animate
            attributeName="opacity"
            values="0.02;0.07;0.02"
            dur="22s"
            begin="2s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.2 1 ; 0.4 0 0.2 1"
            keyTimes="0;0.5;1"
          />
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

      {/* Slow heartbeat line â healthcare motif, bottom edge */}
      <path d={ecgPath} fill="none" stroke="#000" strokeWidth="1" opacity="0.06" />
      <path d={ecgPath} fill="none" stroke="#000" strokeWidth="0.5" opacity="0.1">
        <animate
          attributeName="opacity"
          values="0.04;0.14;0.04"
          dur="9s"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.4 0 0.2 1 ; 0.4 0 0.2 1"
          keyTimes="0;0.5;1"
        />
      </path>
    </svg>
  );
}

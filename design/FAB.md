# SY · Corniche FAB Component

> The progress FAB is the courier's promise in one object: a scooter riding a ring.
> As you read, the rider covers distance — the courier moves toward arrival exactly as you move through the page.

## Anatomy

```
┌─────────────────────────────────────────────────────────────┐
│  .sy-fab (fixed, bottom-right, z-50)                        │
│  ├── .fab-track      — full ring, 12% white stroke          │
│  ├── .fab-fill       — progress arc, accent stroke, glow    │
│  ├── .fab-ticks      — 4 cardinal marks (N/E/S/W)           │
│  ├── .fab-hub        — center pin (destination)             │
│  ├── .fab-rider      — bead on the ring (SVG transform)     │
│  │   ├── .fab-rider-bg  — disc lifting rider off arc        │
│  │   └── .fab-scooter   — upright courier icon              │
│  └── .fab-pct        — tabular % over the ring              │
└─────────────────────────────────────────────────────────────┘
```

## Behavior

| Aspect | Spec |
|--------|------|
| **Progress source** | `scrollY / (scrollHeight - innerHeight)` |
| **Floor** | 6% minimum arc → reads as *gauge*, not spinner |
| **Rider motion** | Translates along circle circumference, **stays upright** (never rotates) |
| **Rider position** | 12 o'clock at 0%, clockwise with progress |
| **Accent swap** | Reads nearest direction card's `--accent`/`--accent2`/`--ink`/`--card` on every frame |
| **Entrance** | `ride-in`: translateY(20px) scale(.6) → 1, cubic-bezier(.22,1.2,.36,1), 900ms |
| **Completion** | At >98.5%: background becomes accent, % turns white |
| **Reduced motion** | No entrance animation; rider still updates position (no rAF loop needed) |
| **Responsive** | 64px desktop → 56px mobile (<640px) |

## Color Contract

Zero hardcoded color in the component. All strokes/fills resolve via CSS custom properties injected per-frame:

```css
--accent      /* primary ring/rider stroke */
--accent2     /* secondary (coral) for done state */
--ink         /* percent text */
--card        /* FAB background, rider-bg fill */
```

The `nearestAccent()` function samples the viewport center and finds the closest `.dir` card, then pushes its four tokens to the FAB. This means the FAB **automatically recolors** as you scroll between sections — no configuration needed.

## Accessibility

- `role="progressbar"` + `aria-label="تقدّم القراءة"`
- Percent text uses `font-variant-numeric: tabular-nums`
- Ring has 6% floor so it never reads as "empty loading"
- Respects `prefers-reduced-motion: reduce`

## Integration

Drop into any page with Corniche tokens active:

```html
<link rel="stylesheet" href="/design/tokens.css">
<script type="module" src="/design/fab.js"></script>
```

The component self-instantiates on `DOMContentLoaded`. Requires:
1. `[data-brand="sy-corniche"]` on `<html>` or ancestor
2. At least one element with class `.dir` (for accent sampling)

## Doodle Source

The scooter and pin icons come from the canonical 18-icon set in `/design/doodles.ts` — same stroke weight (1.5–2), same breath, tileable as ambient field.
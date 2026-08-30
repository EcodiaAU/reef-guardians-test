// Gallery
import type { CSSProperties, ReactElement } from 'react';

export interface SectionTheme {
  /** Primary brand colour: buttons, links, accents. */
  primary: string;
  /** A deeper shade: deep bands, the footer, hovers. */
  primaryDark: string;
  /** A brighter accent for eyebrows and small flourishes. */
  accent: string;
  /** Readable ink for text/icons on a primary or primaryDark fill (luminance-derived, never assumed white). */
  onPrimary: string;
  /** Readable ink for text on the light surface (luminance-derived, never assumed black). */
  onSurface: string;
  /** The light page surface. */
  surface: string;
  /** A second light surface for alternating sections (vertical rhythm). */
  surfaceAlt: string;
  /** Default ink for headings + body. */
  ink: string;
  /** Muted ink for secondary text. */
  muted: string;
  /** Hairline border colour. */
  line: string;
  /** Corner radius applied to cards and buttons, e.g. "1rem". */
  radius: string;
  /** Max content width, e.g. "72rem". */
  maxWidth: string;
}

/**
 * The default theme: a calm neutral system so a single instantiated section
 * looks right with no theme passed. A composed page overrides every field.
 */
const DEFAULT_THEME: SectionTheme = {
  primary: '#1f7a5a',
  primaryDark: '#163d33',
  accent: '#1f7a5a',
  onPrimary: '#faf8f3',
  onSurface: '#1c1917',
  surface: '#faf8f3',
  surfaceAlt: '#f1ede3',
  ink: '#1c1917',
  muted: '#57534e',
  line: '#e2ddd1',
  radius: '1rem',
  maxWidth: '72rem',
};

function useTheme(t?: Partial<SectionTheme>): SectionTheme {
  return { ...DEFAULT_THEME, ...(t ?? {}) };
}

/**
 * A translucent variant of a theme ink, for muted copy / hairlines sitting on a
 * primary band. Because onPrimary is luminance-derived (not a fixed white), the
 * translucent form must be built from it at runtime rather than baked as an
 * rgba(255,255,255,...) literal - the latter is a theme leak on a light brand.
 */
export function withAlpha(color: string, a: number): string {
  const m = /^#?([0-9a-fA-F]{3})([0-9a-fA-F]{3})?$/.exec(color.trim());
  if (!m) return color;
  const six = m[2] ? m[1] + m[2] : m[1].split('').map((c) => c + c).join('');
  const n = parseInt(six, 16);
  return 'rgba(' + ((n >> 16) & 255) + ', ' + ((n >> 8) & 255) + ', ' + (n & 255) + ', ' + a + ')';
}

/** Container style shared by every section: one max-width + reading rhythm. */
function container(t: SectionTheme): CSSProperties {
  return { maxWidth: t.maxWidth, marginLeft: 'auto', marginRight: 'auto' };
}

export interface GalleryProps {
  heading: string;
  items: { caption: string; tone: string; src?: string }[];
  theme?: Partial<SectionTheme>;
}

export default function Gallery(props: GalleryProps): ReactElement {
  const { heading, items } = props;
  const t = useTheme(props.theme);
  return (
    <section data-eos-id="app/_generated/section-3.tsx#0" data-eos-v="2" className="px-6 py-20 sm:py-28" style={{ backgroundColor: t.surface, color: t.ink }}>
      <div data-eos-id="app/_generated/section-3.tsx#1" style={container(t)}>
        <h2 data-eos-id="app/_generated/section-3.tsx#2" className="text-3xl font-semibold tracking-tight sm:text-4xl">{heading}</h2>
        <div data-eos-id="app/_generated/section-3.tsx#3" className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <div data-eos-id="app/_generated/section-3.tsx#4"
              key={item.src || item.caption || i}
              className="relative flex h-60 items-end overflow-hidden"
              style={{ backgroundColor: item.tone, borderRadius: t.radius }}
            >
              {item.src ? (
                <img data-eos-src="dynamic" data-eos-src-label="Src" data-eos-id="app/_generated/section-3.tsx#5"
                  src={item.src}
                  alt={item.caption || ''}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ borderRadius: t.radius }}
                />
              ) : null}
              {item.caption ? (
                <div data-eos-id="app/_generated/section-3.tsx#6"
                  className="relative w-full p-4"
                  style={{ backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0))' }}
                >
                  <span data-eos-id="app/_generated/section-3.tsx#7" data-eos-var="item.caption" data-eos-var-label="Caption" data-eos-var-scope="item" className="text-sm font-medium text-white">{item.caption}</span>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

# Magazine illustration style scaffolds

**Hard rule:** every image for a given magazine must be generated with the scaffold
below, and only the `{subject}` slot varies. This is what gives each magazine its
immediately-recognizable visual identity.

All images are generated as landscape PNGs at roughly 2:1 or 3:2 so they can
sit inline in two-column body flow. For figures that span columns, use 3:1.

---

## STATE · Dispatch

**Aesthetic:** 1960s newspaper dispatch illustration. Loose ink hatching, 
pen-and-nib feel, documentary reporting. Think of a foreign-correspondent
piece in The Atlantic circa 1968.

**Palette:** warm cream paper (#ece4cc), muted petrol-teal (#2d4f56) and 
vermilion (#c2492a) as the only colors, plus black ink. No gradients.

**Scaffold:**
> Editorial line illustration in the style of a 1960s newspaper dispatch,
> hatched ink drawing on warm cream paper, spot colors of muted
> petrol-teal and vermilion red only, pen-and-nib texture, documentary
> reportage feel, no gradients, no digital gloss, no typography in the
> image. Composition: {subject}. Loose, confident linework.
> Slightly cropped, cinematic framing.

---

## SURFACE · Protocol Geometry

**Aesthetic:** Saul Bass / early Penguin paperback cover. Flat geometric
abstraction. Nested rectangles, boxes-within-boxes, overlapping planes
as metaphor for iframe/component/payload layers.

**Palette:** cream paper (#f2ecde), deep vermilion (#c2492a), petrol
(#2d4f56), ink black. Three colors plus paper, no gradients, no shading.

**Scaffold:**
> Flat geometric editorial illustration in the style of a 1960s Saul
> Bass book cover, cream paper background, nested rectangles and
> overlapping colored planes in vermilion red, deep petrol-teal, and
> black, no gradients, no shadows, no typography. Composition:
> {subject} represented abstractly through nested rectangles and
> overlapping boxes. High-contrast, mid-century modern, graphic.

---

## RUNTIME · Schematic

**Aesthetic:** Technical field manual exploded-diagram illustration.
1940s Popular Mechanics cutaway style. Labeled callouts, dashed guide
lines, schematic of internal mechanism.

**Palette:** warmer paper (#f0e6d2), ochre (#c7971d), moss green (#5a6b3e),
vermilion (#c73e1d) for accents, black ink lines. Looks like a blueprint
or an owner's manual diagram.

**Scaffold:**
> Technical field-manual cutaway diagram in the style of 1940s Popular
> Mechanics, warm tan paper background, black ink linework with labeled
> callouts and dashed guide lines, spot colors of ochre gold and moss
> green with small vermilion accents, no typography in the image (leave
> space for callout labels to be added later), schematic and analytical.
> Composition: {subject} rendered as an exploded or cutaway mechanical
> diagram. Precise, engineered, not photographic.

---

## HARNESS · Field Manual Plate

**Aesthetic:** Military or workshop field-manual instructional plate.
Numbered figures. Tools being used. Hands at work. A figure-8 showing
Gen 1 / Gen 2 / Gen 3 apparatus side-by-side.

**Palette:** manila paper (#e8dfc2), sienna brown (#8b4513), forest
green (#2d5a3d), black. Restrained, utilitarian.

**Scaffold:**
> Instructional field-manual illustration plate in the style of a 1950s
> workshop manual, manila-paper background, clean ink-and-wash rendering
> with spot colors of sienna brown and forest green, black linework.
> Shows numbered figures and hands demonstrating the technique. No
> typography in the image (labels added later), utilitarian, practical,
> not decorative. Composition: {subject} rendered as a labeled
> demonstration plate.

---

## LOCAL · Risograph Tract

**Aesthetic:** High-contrast two-color risograph / zine poster. Thick
ink lines, duotone, slightly misregistered. Punk-tract energy. Raised
fists, lightning bolts, laptops-as-tools iconography.

**Palette:** dark cream paper (#ebe2c7), alert-red (#b82020), deep
violet (#3d2a6b). Only these three colors. Flat, graphic, confrontational.

**Scaffold:**
> Two-color risograph print in the style of a 1980s punk zine poster,
> cream paper background, overprinted layers of bright alert-red and
> deep violet only, slight misregistration between colors, thick confident
> brush or ink lines, high contrast, no gradients, no gray tones, no
> typography in the image. Composition: {subject} rendered iconically
> and symbolically, not literally. Confrontational, graphic, urgent
> energy.

---

## WIRE · Circuit Schematic

**Aesthetic:** Engineering-journal circuit diagram or wiring schematic.
Signal paths, protocol envelopes, labeled nodes. The visual language of
a Bell System Technical Journal figure.

**Palette:** cream-yellow paper (#efe4c8), bronze (#a65a1c), deep petrol
(#1d3a40), black. Very minimal color.

**Scaffold:**
> Engineering journal circuit or wiring schematic in the style of a
> Bell System Technical Journal figure, cream-yellow paper background,
> black precise line work with spot colors of bronze and deep petrol,
> labeled nodes and signal paths, dashed guide lines, no typography
> (labels added later), purely diagrammatic. Composition: {subject}
> represented as a circuit or signal-path topology. Technical, reduced
> to nodes and edges.

---

## Sizing and file names

- Body-flow illustration: 1200×800 (3:2), filename `state-01-<slug>.png`, placed
  inside column flow.
- Column-spanning figure: 1800×900 (2:1), filename `state-01-<slug>-wide.png`,
  uses `.figure-span` class so it breaks out of the 2-column grid.
- Opener hero for /read: 1800×1000, filename `state-01-opener.png`.

## Reuse & consistency

Never mix styles between magazines. Every STATE image uses the STATE scaffold.
If a subject doesn't fit the style, rethink the subject, not the style.

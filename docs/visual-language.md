# Visual language

How the app should look and feel. Taken from the `guide2.0` branch and carried into this version.
Claude loads this file every session (imported from `CLAUDE.md`), so keep it current.

## Principles

1. **A printed rulebook, not a web app.** Warm parchment, ink-coloured text, serif headings, gold rules under headings. Think of a 5E Player's Handbook page, not a dashboard.
2. **Story and rules look different.** The DM's voice (story beats, examples, flavour, the guard at the gate) goes in a **story box**. Rules, forms and numbers stay plain. A reader should be able to skim only the rules, or only the story.
3. **Red means "you can act".** Buttons, links and selected things are red. Ink is for reading, gold for structure (dividers, card borders).
4. **Resources have fixed colours.** Body, Soul and Charisma keep their colours everywhere: stat blocks, perk costs, skill tags.
5. **Pictures carry the fantasy.** Classes, races and characters get big portrait images; the UI around them stays quiet.
6. **Dry, short copy.** Same tone as the rulebook writing guidelines in [ruleset-overview.md](ruleset-overview.md#rulebook-pages): plain, a bit joking, no flowery filler.

## Colour tokens

Defined in `app/globals.scss` under `@theme`; use them as Tailwind colours (`bg-dnd-bg`, `text-dnd-red`, …).

| Token | Value | Use |
|---|---|---|
| `dnd-bg` | `#fff7df` (guide2.0: `#f4efe6`) | Panels, cards, modals: the parchment |
| `dnd-ink` | `#4a4138` | Body text; story box borders and corners |
| `dnd-red` | `oklch(44.4% 0.177 26.899)` | Buttons, links, selected states |
| `dnd-red-dark` | `#68211b` | Page titles, card borders, hover on red |
| `dnd-gold` | `#cdb37a` | Heading underlines, dividers, quiet card borders (guide2.0 called it `dnd-underline`) |
| `dnd-accent-green` | `#d1e2b6` | Story box background; "info" alerts |
| `dnd-accent-yellow` | `#f5ebd1` | Aspect cards; "warning" alerts |
| `dnd-accent-red` | `#edabab` | Text selection; error alerts and invalid fields |
| `body` / `soul` / `charisma` | palevioletred / mediumslateblue / goldenrod | The three resource pools |
| `coin` / `material` | khaki / lightgray | Secondary resources |
| `accent-*` | red, blue, green, yellow, purple | Eyebrow tags and badges only |

The page background is the parchment texture `public/img/bg.webp`, fixed behind everything.

## Typography

- **Headings:** Libre Baskerville (`.libre`), uppercase with a larger first letter (`.caps`). `h1` is dark red with a 2px gold underline; `h2`/`h3` are red. Use the `Heading` component.
- **Body:** Merriweather, small (`text-sm`), ink colour.
- **Story text:** Libre Baskerville italic, inside a story box.
- **Flavour text:** the one-line gist of a perk or trait, in bold italics before its rules text (`Flavour` in `components/ui/typography.tsx`).
- **Links in text:** red, dotted underline (`.link`).

## Components

### Story box (`components/ui/storyBox.tsx`)

The DM's voice. In guide2.0 this was the `.rulebox` style with `DecorativeBorder`.

- Pale green background, 2px ink border on top and bottom only, soft shadow.
- **Decorative corners** (`components/ui/decorativeBorder.tsx`, CSS `.corner`): four small ink triangles hanging off the corners. The box needs `relative` and vertical margin (`my-8`) for them.
- Italic serif text, optional small-caps title ("Example", a speaker's name).
- Use it for: story examples next to rules, page intros in character (the guard on the login page), flavour on success screens. Not for: warnings, errors, instructions.

guide2.0 also used the same ink top/bottom borders and corners on **modals**, making them look like a page torn from the book. The current modal (`components/ui/modal.tsx`) has a plain border; switch it if the book look is wanted there too.

### Buttons

| Style | Class | Use |
|---|---|---|
| Primary | any `<button>`, or `.button` on links | The main action: red pill, white text |
| Secondary | `.button-secondary` | The lesser of two actions: red outline |
| Text link with arrow | `.button-link` + "→" in the label | Moving elsewhere: "Create an account →" (guide2.0's `transparent` mode) |

guide2.0 also had `inverted` (outline that fills on hover) and `monochrome` (ink outline) modes, and disabled buttons faded to 20% opacity.

### Forms

- `Field` (`components/ui/field.tsx`) wraps every control: bold label, control, then a grey hint or a red error. guide2.0's `Field` laid fields out on a 12-column grid (`full`, `half`, `third`); here use a CSS grid on the form.
- Group forms in a parchment **panel**: `bg-dnd-bg border border-dnd-gold rounded-lg shadow-md p-6`.
- Check as the user types where it helps (password confirmation), and validate again on the server.

### Cards

- **Portrait card** (`components/ui/portraitCard.tsx`): a large 3:4 image cropped from the top, the title over a dark gradient, controls in a footer. States: selected (red ring), dimmed, locked (greyscale and a lock).
- **Perk card** (`components/ui/perkCard.tsx`): square image (the art carries its own frame), red serif name, coloured cost pill, corner ribbon for Spell, Core spell and Aspect. Aspects get the yellow accent background.
- Clicking a picture or card opens the details; the actions sit in the footer.

### Page layouts

- **Breadcrumbs** (`components/ui/breadcrumbs.tsx`) open every page except home and the auth pages: `Home › Characters › Zara › Edit`. Pass the trail from the top down; Home is added for you and the last crumb is the current page. Admin pages start with `Admin` (`ADMIN_CRUMB`), via `AdminHeader`'s `crumbs`.

- **Auth pages** (`app/(auth)/authShell.tsx`, from guide2.0's `EditorShell` with sidebar): an image card on the side (the city gate) with the link to the other auth page, and the title, story box and form panel in the main column.
- **Editors and sheets** share one layout; editing only adds controls (see the character sheet).
- guide2.0 used a 12-column grid with the content in columns 2–11 on wide screens, and a navbar with the user's avatar and a dropdown whose arrow was an ink diamond.

### Alerts

guide2.0's `Alert`: a 4px ink left border, rounded, coloured by kind: info green, warning yellow, danger red. The auth and profile notices use the same idea with a red border.

### Assets from guide2.0

- `public/img/auth/gate.webp`: the city gate for the auth pages (restored).
- `img/character-creator/menu-banner.svg`: a red ribbon banner used behind menu headings (`.menu-banner`). Not restored yet.

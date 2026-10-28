# Visual language

How the app should look and feel. Taken from the `guide2.0` branch and carried into this version.
Claude loads this file every session (imported from `CLAUDE.md`), so keep it current.

## Principles

1. **A printed rulebook, not a web app.** Warm parchment, ink-coloured text, serif headings, gold rules under headings. Think of a 5E Player's Handbook page, not a dashboard.
2. **Story and rules look different.** The DM's voice (story beats, examples, flavour, the guard at the gate) goes in a **story box** (in-character intros) or an **example card** (rulebook examples). Rules, forms and numbers stay plain. A reader should be able to skim only the rules, or only the story.
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
| `dnd-accent-green` | `#d1e2b6` | Story box and example card background; "info" alerts |
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

**Where they live:** `components/ui` holds generic pieces with no game rules in them (panels, cards, tables, form controls, alerts). `components/game` holds rules-aware ones (perk card and tree, class portrait card, trait card, stat block, magic badge, resource colours). `components/rulebook` holds the Markdown renderer and its elements. Reach for these before writing new markup; a style repeated in two places becomes a component.

Shared hooks live in `lib/hooks`: `useLoad` (browser data loading with `reload`) and `useImageUpload` / `prepareImage` (shrink to WebP, size check, send to an action). Server actions return `Result` from `lib/result.ts` (`toResult`, `check`, `fileFrom`).

### Story box (`components/ui/storyBox.tsx`)

The DM's voice. In guide2.0 this was the `.rulebox` style with `DecorativeBorder`.

- Pale green background, 2px ink border on top and bottom only, soft shadow.
- **Decorative corners** (`components/ui/decorativeBorder.tsx`, CSS `.corner`): four small ink triangles hanging off the corners. The box needs `relative` and vertical margin (`my-8`) for them.
- Italic serif text, optional small-caps title ("Example", a speaker's name).
- Use it for: page intros in character (the guard on the login page), flavour on success screens. Not for: rulebook examples (too busy there; use an example card), warnings, errors, instructions.

guide2.0 also used the same ink top/bottom borders and corners on **modals**, making them look like a page torn from the book. The current modal (`components/ui/modal.tsx`) has a plain border; switch it if the book look is wanted there too.

### Example card (`components/ui/exampleCard.tsx`)

A story example in the rulebook, modelled on the old site's `HorizontalCard` (the Michal-and-the-burgmaster's-daughter examples).

- Rounded card, gold border, pale green tint, soft shadow; no decorative corners.
- Optional portrait on the side (on top on phones); the text sets the height and the picture fills its side.
- A small italic "Example" eyebrow, a bold red serif title, then roomy plain text (`text-sm`, relaxed leading, gaps between paragraphs). It can hold resource bars and rolled dice.

### Dice (`components/ui/dice.tsx`)

- **Die icons:** dice notation in the rulebook (2d6, d20, 1d8) gets a red icon of that die's shape in front of it, automatically.
- **Rolled faces:** the old site's die-face SVGs (`public/img/dice/D6_4.svg` …), drawn in ink with a CSS mask, show actual rolls in examples. A dropped die (e.g. from advantage) is faded.

### Buttons

| Style | Class | Use |
|---|---|---|
| Primary | any `<button>`, or `.button` on links | The main action: red pill, white text |
| Secondary | `.button-secondary` | The lesser of two actions: red outline |
| Text link with arrow | `.button-link` + "→" in the label | Moving elsewhere: "Create an account →" (guide2.0's `transparent` mode) |

guide2.0 also had `inverted` (outline that fills on hover) and `monochrome` (ink outline) modes, and disabled buttons faded to 20% opacity.

### Forms

- `Field` (`components/ui/field.tsx`) wraps every control: bold label, control, then a grey hint or a red error. guide2.0's `Field` laid fields out on a 12-column grid (`full`, `half`, `third`); here use a CSS grid on the form.
- Group forms in a parchment **panel**: `Panel` (`components/ui/panel.tsx`; `panelClass` for elements it can't be).
- Controlled inputs: `TextField`, `NumberField`, `SelectField`, `Select`, `Checkbox`, `CheckboxGroup` in `components/ui/formControls.tsx`.
- Forms posting to a server action: `FormMessage`, `SubmitButton`, `EmailField`, `DisplayNameField`, and `PasswordFields` with `usePasswordPair` in `components/ui/form.tsx`.
- Rich text: `RichTextEditor` (`components/ui/richTextEditor.tsx`, TipTap, writes Markdown, optional picture upload) and `MarkdownText` to show it; both use the `.rich-text` styles.
- Buttons fade out on their own when disabled; no `disabled:opacity-*` classes needed. `FileButton` opens a file picker.
- Check as the user types where it helps (password confirmation), and validate again on the server.

### Cards

- **Portrait card** (`components/ui/portraitCard.tsx`): a large 3:4 image cropped from the top, the title over a dark gradient, controls in a footer. States: selected (red ring), dimmed, locked (greyscale and a lock).
- **Card** and **CardGrid** (`components/ui/card.tsx`): picture on top, title and a few lines under it; the grid shows a skeleton while loading and a note when empty.
- **Class portrait card** (`components/game/classPortraitCard.tsx`): a portrait card with the magic badge over the picture.
- **Data table** (`components/ui/dataTable.tsx`): admin lists and rulebook tables; rows can link to a page. `SimpleTable` takes a header row and plain arrays.
- **Media object** (`components/ui/mediaObject.tsx`): a 3:4 portrait beside its text, e.g. a class's or race's details.
- **Card rows** in the rulebook (`::::cards{cols="3"}`): one column on phones, two on tablets, three on extra-wide screens. Cards in a row of three put their picture on top.
- **Items** (`components/game/itemIcon.tsx`): a small square picture, or an ink icon of the item's kind (crossed swords, armour, shield, shirt, toolbox, knapsack). Broken items are greyed out and struck through.
- **Merit counter** (`components/game/meritCounter.tsx`): a character's merit points in one campaign, with − for whoever may spend and + for the DM. Turns red above the usual 3.
- **Perk card** (`components/game/perkCard.tsx`): square image (the art carries its own frame), red serif name, coloured cost pill, corner ribbon for Spell, Core spell and Aspect. Aspects get the yellow accent background.
- Clicking a picture or card opens the details; the actions sit in the footer.

### Page layouts

- **Breadcrumbs** (`components/ui/breadcrumbs.tsx`) open every page except home and the auth pages: `Home › Characters › Zara › Edit`. Pass the trail from the top down; Home is added for you and the last crumb is the current page. Admin pages start with `Admin` (`ADMIN_CRUMB`), via `AdminHeader`'s `crumbs`.

- **Auth pages** (`app/(auth)/authShell.tsx`, from guide2.0's `EditorShell` with sidebar): an image card on the side (the city gate) with the link to the other auth page, and the title, story box and form panel in the main column.
- **Footer** (`components/layout/footer.tsx`) on every page, linking the rulebook and the public **credits** page (`/credits`). Credits are listed in `lib/credits.ts`; add an entry for every borrowed picture, rule or library.
- **Editors and sheets** share one layout; editing only adds controls (see the character sheet).
- guide2.0 used a 12-column grid with the content in columns 2–11 on wide screens, and a navbar with the user's avatar and a dropdown whose arrow was an ink diamond.

### Alerts

`Alert` (`components/ui/alert.tsx`), from guide2.0: a 4px left border, coloured by kind: info green, warning yellow, danger red (red border). Use it for notices above a form, like an expired link.

### Toasts

Sonner toasts look like small story boxes: pale green, ink lines on top and bottom, decorative corners. Errors use the same shape in the error red. Styles: `.story-toast` in `app/globals.scss`; the Toaster is set up in `app/layout.tsx`.

### Assets from guide2.0

- `public/img/auth/gate.webp`: the city gate for the auth pages (restored).
- `img/character-creator/menu-banner.svg`: a red ribbon banner used behind menu headings (`.menu-banner`). Not restored yet.

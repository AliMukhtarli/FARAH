# styles/

Global styling layer. Import order is defined in `index.css`:

1. `reset.css` — Normalize browser defaults
2. `variables.css` — Design tokens (colors, spacing, fonts)
3. `globals.css` — Base typography and shared utilities
4. `app.css` — Page and section layout rules

Prefer component-local CSS for isolated UI; extend globals only for true cross-site patterns.

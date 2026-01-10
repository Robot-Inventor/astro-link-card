---
"astro-link-card": major
---

fix(deps): update dependency rehype-og-card to v3

rehype-og-card now removes parent `p` tag from link cards to prevent invalid HTML. You can disable this behavior by setting the `removeParentPTag` option to `false`.

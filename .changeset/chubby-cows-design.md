---
"astro-link-card": major
---

feat(deps): update dependency rehype-og-card to v4

For security reasons, astro-link-card now rasterizes SVG images. While you can restore the previous behavior by setting `svgHandling: "preserve"`, this is not recommended. If you are using server-side caching for astro-link-card, it is recommended that you clear the cache after updating to this version.

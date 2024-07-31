# astro-link-card

Astro integration to automatically convert bare links into link cards. This is a wrapper for [rehype-og-card](https://github.com/Robot-Inventor/rehype-og-card) with some configuration optimizations for Astro.

## Features

This integration will automatically convert bare links into link cards. This is useful for creating a more visually appealing website with link previews. Here are some key features:

- Automatically convert bare links into link cards
- Server-side image caching
- Build cache for images and Open Graph metadata for faster builds
- Lazy loading and async decoding for images
- Zero runtime JavaScript (all processing is done at build time)

The following links will be converted to link cards:

- Bare links
- Links that have the same URL and text (if you enable the `enableSameTextURLConversion` option)

The following links will NOT be converted to link cards:

- Links in lists
- Links in code blocks
- Links in sentences
- Non-bare links
- Links that have the same URL and text (if you disable the enableSameTextURLConversion option)

Input:

```markdown
this is a link: https://blog.google/products/android/world-emoji-day-2024/

\`https://blog.google/products/android/world-emoji-day-2024/\`

https://blog.google/products/android/world-emoji-day-2024/
```

Output (formatted for readability):

```html
<p>this is a link: https://blog.google/products/android/world-emoji-day-2024/</p>
<p><code>https://blog.google/products/android/world-emoji-day-2024/</code></p>
<p><div class="og-card-container">
    <a href="https://blog.google/products/android/world-emoji-day-2024/">
        <div class="og-card-info">
            <div class="og-card-title">10 fun facts about emoji for World Emoji Day</div>
            <div class="og-card-description">Celebrate World Emoji Day with Google, and check out what’s new for Emoji Kitchen.</div>
            <div class="og-card-url-container">
                <img class="og-card-favicon" alt="favicon" decoding="async" height="16" loading="lazy" src="https://www.google.com/s2/favicons?domain=blog.google" width="16">
                <span class="og-card-url">blog.google</span>
            </div>
        </div>
        <div class="og-card-image-container">
            <img class="og-card-image" alt="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/world_emoji_day_v2_1.width-1300.png" decoding="async" loading="lazy" src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/world_emoji_day_v2_1.width-1300.png">
        </div>
    </a>
</div></p>
```

## Installation

### `astro add` command (Recommended)

```bash
npx astro add astro-link-card
```

### Manual Installation (Alternative)

```bash
npm install astro-link-card
```

```typescript
import { defineConfig } from "astro";
import linkCard from "astro-link-card";

// https://astro.build/config
export default defineConfig({
    // ... other config
    integrations: [
        [
            linkCard,
            {
                // Options
            }
        ]
    ]
});
```

## Options

All rehype-og-card options are supported. You can find the full list of options [here](https://github.com/Robot-Inventor/rehype-og-card?tab=readme-ov-file#options). Some options below are optimized for Astro:

- `enableSameTextURLConversion` (default: `true`): Enable conversion of links that have the same URL and text. This is useful for projects that have `markdown.gfm` enabled.
- `serverCache` (default: `true`): Enable server-side image caching.
- `serverCachePath` (default: `"./public"`): Path to store server-side image cache.
- `buildCache` (default: `true`): Enable build cache for images and Open Graph metadata.
- `buildCachePath` (default: `"./node_modules/.astro"`): Path to store build cache.

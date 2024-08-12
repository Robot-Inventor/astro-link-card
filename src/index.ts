import rehypeOGCard, { type RehypeOGCardOptions } from "rehype-og-card";
import type { AstroIntegration } from "astro";

/**
 * Astro integration to automatically convert bare links into link cards.
 * This is a wrapper for [rehype-og-card](https://github.com/Robot-Inventor/rehype-og-card)
 * with some configuration optimizations for Astro.
 * @param options Options for the rehype-og-card plugin.
 * @returns Astro integration object.
 */
const astroLinkCard = (options?: RehypeOGCardOptions): AstroIntegration => {
    const integration: AstroIntegration = {
        hooks: {
            // eslint-disable-next-line jsdoc/require-jsdoc
            "astro:config:setup": ({ updateConfig }) => {
                const defaultOptions: RehypeOGCardOptions = {
                    buildCache: true,
                    buildCachePath: "./node_modules/.astro",
                    enableSameTextURLConversion: true,
                    serverCache: true,
                    serverCachePath: "./public"
                } as const;

                const mergedOptions = {
                    ...defaultOptions,
                    ...options
                } as const satisfies RehypeOGCardOptions;

                updateConfig({
                    markdown: {
                        rehypePlugins: [[rehypeOGCard, mergedOptions]]
                    }
                });
            }
        },
        name: "astro-link-card"
    };

    return integration;
};

export default astroLinkCard;
export type { RehypeOGCardOptions as AstroLinkCardOptions };

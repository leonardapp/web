# HOXXES SEO implementation – first technical pass

This archive contains the supplied HOXXES source subset with the first international SEO technical changes applied.

## Implemented

- Added canonical metadata at the root and page-specific metadata for the main marketing pages.
- Added metadata for pricing, support, download and individual hardware product pages.
- Added `generateStaticParams()` for the finite hardware product catalogue.
- Replaced the broken sitemap entries with existing public routes and product detail URLs from `lib/products.ts`.
- Added accurate `lastModified` values at sitemap generation time.
- Updated `robots.ts` to expose the sitemap and prevent crawling of API, dashboard and transactional routes. Public routes remain crawlable, including for AI search crawlers that follow the wildcard rule.
- Connected the global JSON-LD graph in the root layout.
- Simplified the structured data to Organization, WebSite and SoftwareApplication. Removed stale/contradictory product offers, availability claims, unverified logo references and global FAQ markup.
- Added `noindex` metadata to interactive/private routes and the current documentation catalogue.
- Removed references to an Open Graph image that was not included in the supplied `public` directory.

## Important follow-up items

1. Add a real, branded 1200×630 Open Graph image and a verified logo asset, then reference those assets in metadata and Organization schema.
2. Verify the official social profile URLs and public contact details before treating them as permanent Organization data.
3. Review the current hardware catalogue data: the supplied `lib/products.ts` marks some products as `in-stock` while their stock value is zero. Product availability markup was intentionally omitted to avoid publishing contradictory data.
4. Review the offer end date and remove/update `/offers` after the promotion expires.
5. Add English, crawlable product/feature landing pages with unique content before creating additional international keyword targets.
6. Add Search Console and Bing Webmaster Tools verification values only when the actual verification tokens are available.

## Validation

- TypeScript/TSX transpile syntax check passed for 21 modified/new files (0 syntax diagnostics).
- A full Next.js build was not run because this source archive intentionally excludes `node_modules` and lockfiles. Run `npm install` (or the project's normal package-manager install) and `npm run build` in the original project before deployment.

## Deployment

Copy the changed/new files from this archive into the matching paths in the original `hoxxes` project. Keep your original `.env`, deployment configuration and unmodified files. Do not overwrite your entire project folder with this audit subset.

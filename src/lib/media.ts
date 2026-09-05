/**
 * Alex Global Consultancy (AGC) — Curated Media & Verified Brand Assets.
 * Points to verified local static files in /latest-assets/ and /brand-assets/.
 */

export const mediaUrls: Record<string, string> = {
  // Official AGC Brand Assets
  "logo": "/latest-assets/logo.jpg",
  "banner": "/latest-assets/banner.png",
  "hero-banner": "/latest-assets/banner.png",
  "hero-banner-png": "/latest-assets/banner.png",
  "poster-fb-main": "/latest-assets/banner.png",
};

export function getMediaUrl(key: string, fallback?: string): string {
  return mediaUrls[key] || fallback || "/latest-assets/banner.png";
}


/**
 * Affordable International — Curated Media & Verified Assets.
 * Points to local static files from /assets/ and verified photos.
 */

export const mediaUrls: Record<string, string> = {
  // Official Brand Assets
  "logo": "/assets/affordable-logo.jpg",
  "banner": "/assets/affordable-banner.jpg",
  "poster-orientation": "/assets/ielts-orientation-poster.jpg",
  "team": "/assets/team-instructors.jpg",
  "kids-1": "/assets/kids-class-1.jpg",
  "kids-2": "/assets/kids-class-2.jpg",
  "nstu": "/assets/nstu-expo-stall.jpg",

  // Legacy mappings for safe fallback
  "msw-logo": "/assets/affordable-logo.jpg",
  "hero-banner": "/assets/affordable-banner.jpg",
  "hero-banner-png": "/assets/affordable-banner.jpg",
  "poster-fb-main": "/assets/ielts-orientation-poster.jpg",
};

export function getMediaUrl(key: string, fallback?: string): string {
  return mediaUrls[key] || fallback || "/assets/affordable-banner.jpg";
}

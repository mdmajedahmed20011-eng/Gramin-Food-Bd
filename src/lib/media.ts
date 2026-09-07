/**
 * Academic Allies — Curated Media & Verified Brand Assets.
 * Points to verified local static files in /assets/ and /brand-assets/.
 */

export const mediaUrls: Record<string, string> = {
  // Official Academic Allies Brand Assets
  "logo": "/assets/logo.jpg",
  "banner": "/assets/banner.jpg",
  "hero-banner": "/assets/banner.jpg",
  "hero-banner-png": "/assets/banner.jpg",
  "poster-fb-main": "/assets/banner.jpg",
  "success-1": "/assets/succes.jpg",
  "success-2": "/assets/succes 2.jpg",
  "success-3": "/assets/succes 3 revwie.jpg",
  "social-profile": "/assets/778915755_122248399610271074_4940366587612604886_n.jpg",
};

export function getMediaUrl(key: string, fallback?: string): string {
  return mediaUrls[key] || fallback || "/assets/banner.jpg";
}

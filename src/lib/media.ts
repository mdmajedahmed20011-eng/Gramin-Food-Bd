/**
 * Future Edge Education — Curated Media & Verified Brand Assets.
 * Points to local static files from /brand-assets/ verified from official sources.
 */

export const mediaUrls: Record<string, string> = {
  // Official Brand Assets
  "logo": "/brand-assets/logo.jpg",
  "banner": "/brand-assets/banner.jpg",
  "bnu-session": "/brand-assets/772204691_122282788340103184_9204887386025201573_n.jpg",
  "team-expo": "/brand-assets/766952914_122282362520103184_2941471200207168176_n.jpg",
  "students-welcome": "/brand-assets/766710624_122282362532103184_1638634567221371286_n.jpg",
  "profile-evaluation": "/brand-assets/768398757_122282362526103184_6579294528148972179_n.jpg",
  "poster-europe": "/brand-assets/787160278_122284754246103184_2179868027112497957_n.jpg",
  "lurs-award": "/brand-assets/768667718_122282362400103184_8409750641330812941_n.jpg",

  // Aliases for compatibility
  "msw-logo": "/brand-assets/logo.jpg",
  "hero-banner": "/brand-assets/banner.jpg",
  "hero-banner-png": "/brand-assets/banner.jpg",
  "poster-fb-main": "/brand-assets/banner.jpg",
};

export function getMediaUrl(key: string, fallback?: string): string {
  return mediaUrls[key] || fallback || "/brand-assets/banner.jpg";
}

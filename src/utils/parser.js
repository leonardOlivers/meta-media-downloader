export default function parseUrl(url) {
  if (!url) return null;

  if (url.includes('facebook.com') || url.includes('fb.watch')) return 'facebook';
  if (url.includes('instagram.com')) return 'instagram';

  return null;
}
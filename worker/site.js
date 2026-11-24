// Site-specific rules for thomaswindow.com. Served today by Cloudflare Pages project "thomaswindow"
// (no _redirects, no _headers, no Functions). The old Caddy block had no redir/header/reverse_proxy
// rules either, so there is nothing site-specific to port. Lead forms post straight to n8n webhooks.

// Exact-path 301s: { '/old-path': '/new-path' }. Matching ignores a trailing slash.
const EXACT = {
  // '/about-us': '/about',
};

// Prefix 301s, e.g. Caddy `redir /category/news* /blog 301`: [['/category/news', '/blog']]
const PREFIX = [
  // ['/category/chicago-news', '/news'],
];

export function redirect(url) {
  const path = url.pathname.length > 1 ? url.pathname.replace(/\/+$/, '') : url.pathname;
  let to = EXACT[path];
  // Caddy `redir /x* ...` is a plain string-prefix match, so this is too.
  if (!to) for (const [from, dest] of PREFIX) if (path.startsWith(from)) { to = dest; break; }
  if (!to) return null;
  const dest = new URL(to, url);
  if (!to.includes('?')) dest.search = url.search;
  return Response.redirect(dest.toString(), 301);
}

// Paths still served by a VPS service: [{ prefix: '/api/', origin: 'https://something.andriusdigital.com' }]
export const PROXIES = [];

// Headers the old Caddy block set on every response (only added when the asset didn't set them).
export const SECURITY_HEADERS = {
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
};

// Site-specific wrapper around the shared template (worker/index.js stays byte-identical).
// It makes the Worker's responses match what Cloudflare Pages + the thomaswindow.com zone send today:
//  - Web Analytics beacon: the thomaswindow.com zone has Web Analytics auto-install on (site token in
//    CF_BEACON_TOKEN), which puts the beacon into every HTML page requested with Accept: text/html.
//    A Worker response may not get that injection, so the Worker adds the same beacon itself, and skips it
//    when the page already has one. Clear CF_BEACON_TOKEN to turn it off (e.g. if swap day shows the edge
//    also injecting it and pages carry two beacons).
//  - 307 -> 308: Pages answers every trailing-slash/pretty-URL redirect with a permanent 308.
//  - Content-Type: Pages sends .js as application/javascript.
//  - <anything>.html (except index.html): the dist has no such files and Pages answers them with 200 + the SPA
//    shell (canonical "/"), so the Worker does the same instead of the asset layer's /x.html -> /x/ redirect.
import template from './index.js';

export default {
  async fetch(request, env, ctx) {
    const u = new URL(request.url);
    const aliases = (env.ALIAS_HOSTS || '').split(',').map((h) => h.trim().toLowerCase());
    if (u.protocol === 'https:' && !aliases.includes(u.hostname.toLowerCase()) &&
        u.pathname.endsWith('.html') && !u.pathname.endsWith('/index.html')) {
      u.pathname = '/__spa-shell__'; // no such asset -> not_found_handling serves index.html with 200
      request = new Request(u, request);
    }
    let res = await template.fetch(request, env, ctx);

    res = res.status === 307
      ? new Response(null, { status: 308, headers: res.headers })
      : new Response(res.body, res);

    const type = res.headers.get('Content-Type') || '';
    if (type.startsWith('text/javascript')) {
      res.headers.set('Content-Type', type.replace('text/javascript', 'application/javascript'));
    }

    const accept = request.headers.get('Accept') || '';
    if (env.CF_BEACON_TOKEN && res.status === 200 && type.startsWith('text/html') && accept.includes('text/html')) {
      const tag =
        `<script defer src="https://static.cloudflareinsights.com/beacon.min.js" ` +
        `data-cf-beacon='{"token":"${env.CF_BEACON_TOKEN}","spa":true}'></script>`;
      let seen = false;
      res = new HTMLRewriter()
        .on('script[src*="cloudflareinsights.com"]', { element() { seen = true; } })
        .on('body', {
          element(el) {
            el.onEndTag((end) => { if (!seen) end.before(tag, { html: true }); });
          },
        })
        .transform(res);
    }
    return res;
  },
};

// Cloudflare Pages Middleware
// - Strips .html extensions from URLs with a 301 permanent redirect.
// - Redirects /videos/ paths to the external video site for each brand.
//
// e.g. /features/system-administration/data-migration/order-list-import-tool.html
//   -> /features/system-administration/data-migration/order-list-import-tool
// e.g. /eh/videos/foo -> https://videos.enterprise.health/videos/foo
// e.g. /wc/videos/bar -> https://videos.webch.art/videos/bar

const VIDEO_HOSTS: Record<string, string> = {
  eh: "https://videos.enterprise.health",
  wc: "https://videos.webch.art",
};

export const onRequest: PagesFunction = async (context) => {
  const url = new URL(context.request.url);

  // Redirect /<brand>/videos/* to the external video site
  const videosMatch = url.pathname.match(/^\/(eh|wc)(\/videos\/.*)$/);
  if (videosMatch) {
    const brand = videosMatch[1];
    const videoPath = videosMatch[2]; // e.g. /videos/foo
    const host = VIDEO_HOSTS[brand];
    return Response.redirect(`${host}${videoPath}${url.search}`, 301);
  }

  if (url.pathname.endsWith(".html")) {
    // Remove .html, preserve query string and hash
    url.pathname = url.pathname.slice(0, -5);
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
};

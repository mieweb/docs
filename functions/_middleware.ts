// Cloudflare Pages Middleware
// - Strips .html extensions from URLs with a 301 permanent redirect.
// - Redirects /videos/ paths to the external video site based on domain.
//
// e.g. /features/system-administration/data-migration/order-list-import-tool.html
//   -> /features/system-administration/data-migration/order-list-import-tool
// e.g. docs.enterprisehealth.com/videos/foo -> https://videos.enterprise.health/videos/foo
// e.g. docs.webchartnow.com/videos/bar    -> https://videos.webch.art/videos/bar

const VIDEO_HOSTS: Record<string, string> = {
  "docs.enterprisehealth.com": "https://videos.enterprise.health",
  "docs.webchartnow.com": "https://videos.webch.art",
};

export const onRequest: PagesFunction = async (context) => {
  const url = new URL(context.request.url);

  // Redirect /videos/* to the external video site based on hostname
  if (url.pathname.startsWith("/videos/") || url.pathname === "/videos") {
    const host = VIDEO_HOSTS[url.hostname];
    if (host) {
      const videoPath = url.pathname === "/videos" ? "/videos/" : url.pathname;
      return Response.redirect(`${host}${videoPath}${url.search}`, 301);
    }
  }

  if (url.pathname.endsWith(".html")) {
    // Remove .html, preserve query string and hash
    url.pathname = url.pathname.slice(0, -5);
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
};

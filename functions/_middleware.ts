// Cloudflare Pages Middleware
// Strips .html extensions from URLs with a 301 permanent redirect.
// e.g. /features/system-administration/data-migration/order-list-import-tool.html
//   -> /features/system-administration/data-migration/order-list-import-tool

export const onRequest: PagesFunction = async (context) => {
  const url = new URL(context.request.url);

  if (url.pathname.endsWith(".html")) {
    // Remove .html, preserve query string and hash
    url.pathname = url.pathname.slice(0, -5);
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
};

export default {
  async fetch(request, env, ctx) {
    // CHANGE THIS: Put the secret URL you want to load here
    const TARGET_URL = "https://garden-of-blossoms.lovable.app"; 

    const url = new URL(request.url);
    const actualTarget = TARGET_URL + url.pathname + url.search;

    const newHeaders = new Headers(request.headers);
    newHeaders.set("Host", new URL(TARGET_URL).host);

    const response = await fetch(actualTarget, {
      method: request.method,
      headers: newHeaders,
      body: request.body,
      redirect: "follow"
    });

    return response;
  },
};

globalThis.process ??= {}; globalThis.process.env ??= {};
import './chunks/astro-designed-error-pages_CmJi1A6_.mjs';
import { h as decodeKey } from './chunks/astro/server_Bvfdevhj.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_C9Ieqktm.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/macbookpro/projects/astro/expert/kitdigitalexpert/","adapterName":"@astrojs/cloudflare","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DchOxBGo.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/macbookpro/projects/astro/expert/kitdigitalexpert/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000@astro-page:node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"index.js","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DMUPZWJ1.mjs","/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Accordion/Accordion.astro?astro&type=script&index=0&lang.ts":"_astro/Accordion.astro_astro_type_script_index_0_lang.CQL35Hmr.js","/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Banner/Banner.astro?astro&type=script&index=0&lang.ts":"_astro/Banner.astro_astro_type_script_index_0_lang.BRpoNTIj.js","/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Carousel/Carousel.astro?astro&type=script&index=0&lang.ts":"_astro/Carousel.astro_astro_type_script_index_0_lang.CqVxasXw.js","/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Collapsible/Collapsible.astro?astro&type=script&index=0&lang.ts":"_astro/Collapsible.astro_astro_type_script_index_0_lang.Dlc0uK8Z.js","/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Copy/Copy.astro?astro&type=script&index=0&lang.ts":"_astro/Copy.astro_astro_type_script_index_0_lang.DmLKChWY.js","/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/DataTable/DataTable.astro?astro&type=script&index=0&lang.ts":"_astro/DataTable.astro_astro_type_script_index_0_lang.BWS2gxsd.js","/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/List/List.astro?astro&type=script&index=0&lang.ts":"_astro/List.astro_astro_type_script_index_0_lang.DdhHuj91.js","/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Menu/Menu.astro?astro&type=script&index=0&lang.ts":"_astro/Menu.astro_astro_type_script_index_0_lang.Bi1fG-Rd.js","/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Pagination/Pagination.astro?astro&type=script&index=0&lang.ts":"_astro/Pagination.astro_astro_type_script_index_0_lang.CHdiWB4J.js","/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Select/Select.astro?astro&type=script&index=0&lang.ts":"_astro/Select.astro_astro_type_script_index_0_lang.Dz7gVttl.js","/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Spoiler/Spoiler.astro?astro&type=script&index=0&lang.ts":"_astro/Spoiler.astro_astro_type_script_index_0_lang.Bx0OOHfV.js","/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Tabs/Tabs.astro?astro&type=script&index=0&lang.ts":"_astro/Tabs.astro_astro_type_script_index_0_lang.BaHQwkS-.js","/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/ThemeSwitcher/ThemeSwitcher.astro?astro&type=script&index=0&lang.ts":"_astro/ThemeSwitcher.astro_astro_type_script_index_0_lang.j4MhXGQF.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Collapsible/Collapsible.astro?astro&type=script&index=0&lang.ts","const r=document.querySelectorAll('[data-id=\"w-collapsible\"]');Array.from(r).forEach(l=>{l.addEventListener(\"click\",t=>{const e=t.currentTarget,a=t.target;a.parentElement?.dataset.toggleOn&&(e.dataset.toggled=\"true\"),a.parentElement?.dataset.toggleOff&&(e.dataset.toggled=\"false\")})});"],["/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Menu/Menu.astro?astro&type=script&index=0&lang.ts","document.querySelector('[data-id=\"hamburger\"]')?.addEventListener(\"click\",t=>{const e=t.currentTarget.parentElement?.parentElement;e.dataset.active=e.dataset.active===\"true\"?\"false\":\"true\"});"],["/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Tabs/Tabs.astro?astro&type=script&index=0&lang.ts","const n=document.querySelectorAll('[data-id=\"w-tabs\"]');Array.from(n).forEach(e=>{e.addEventListener(\"click\",r=>{const a=r.target;if(a.dataset.value){const s=a.parentElement?.parentElement?.nextElementSibling;Array.from(s.children).forEach(t=>{t.dataset.tab===a.dataset.value?t.dataset.active=!0:t.dataset.active=!1});const l=a.parentElement?.querySelectorAll(\"button\");Array.from(l).forEach(t=>{t.dataset.active=\"false\",t.dataset.value===a.dataset.value&&(t.dataset.active=\"true\")})}})});"]],"assets":["/_astro/index.DchOxBGo.css","/logo.svg","/_astro/Accordion.astro_astro_type_script_index_0_lang.CQL35Hmr.js","/_astro/Banner.astro_astro_type_script_index_0_lang.BRpoNTIj.js","/_astro/Carousel.astro_astro_type_script_index_0_lang.CqVxasXw.js","/_astro/Copy.astro_astro_type_script_index_0_lang.DmLKChWY.js","/_astro/DOMUtils.DAQrewGk.js","/_astro/DataTable.astro_astro_type_script_index_0_lang.BWS2gxsd.js","/_astro/List.astro_astro_type_script_index_0_lang.DdhHuj91.js","/_astro/Pagination.astro_astro_type_script_index_0_lang.CHdiWB4J.js","/_astro/Select.astro_astro_type_script_index_0_lang.Dz7gVttl.js","/_astro/Spoiler.astro_astro_type_script_index_0_lang.Bx0OOHfV.js","/_astro/ThemeSwitcher.astro_astro_type_script_index_0_lang.j4MhXGQF.js","/_astro/debounce.DT8DhbJn.js","/_astro/event.C5jlCmtE.js","/_worker.js/_@astrojs-ssr-adapter.mjs","/_worker.js/_astro-internal_middleware.mjs","/_worker.js/index.js","/_worker.js/renderers.mjs","/fonts/Inter-Bold.woff2","/fonts/Inter-Regular.woff2","/_worker.js/_astro/index.DchOxBGo.css","/_worker.js/pages/_image.astro.mjs","/_worker.js/pages/index.astro.mjs","/_worker.js/chunks/_@astrojs-ssr-adapter_CEY1YLYf.mjs","/_worker.js/chunks/astro-designed-error-pages_CmJi1A6_.mjs","/_worker.js/chunks/astro_2koM6qWc.mjs","/_worker.js/chunks/index.95d291e9_wGvXL3br.mjs","/_worker.js/chunks/index_CJPT8HyM.mjs","/_worker.js/chunks/noop-middleware_C9Ieqktm.mjs","/_worker.js/chunks/astro/server_Bvfdevhj.mjs"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"Omokd0moh5W2RJ2H0EDswEHf49oCJlMAkDJ28H80cVU="});

export { manifest };

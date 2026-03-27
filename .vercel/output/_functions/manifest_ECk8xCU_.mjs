import 'piccolore';
import { v as decodeKey } from './chunks/astro/server_CBg-HZgi.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CMqzj7pl.mjs';
import 'es-module-lexer';

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

const manifest = deserializeManifest({"hrefRoot":"file:///C:/my-portfolio-web/","cacheDir":"file:///C:/my-portfolio-web/node_modules/.astro/","outDir":"file:///C:/my-portfolio-web/dist/","srcDir":"file:///C:/my-portfolio-web/src/","publicDir":"file:///C:/my-portfolio-web/public/","buildClientDir":"file:///C:/my-portfolio-web/dist/client/","buildServerDir":"file:///C:/my-portfolio-web/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.Dv9jUCu4.css"}],"routeData":{"route":"/en","isIndex":true,"type":"page","pattern":"^\\/en\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/index.astro","pathname":"/en","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.Dv9jUCu4.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[{"route":"/en/","isIndex":true,"type":"fallback","pattern":"^\\/en\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/index.astro","pathname":"/en/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://marlonmora.vercel.app","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/my-portfolio-web/src/pages/en/index.astro",{"propagation":"none","containsHead":true}],["C:/my-portfolio-web/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/en/index@_@astro":"pages/en.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_ECk8xCU_.mjs","C:/my-portfolio-web/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CddJVtTu.mjs","C:/my-portfolio-web/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.7A7j2Phc.js","C:/my-portfolio-web/src/components/Education.astro?astro&type=script&index=0&lang.ts":"_astro/Education.astro_astro_type_script_index_0_lang.C5Jrou1j.js","C:/my-portfolio-web/src/components/About.astro?astro&type=script&index=0&lang.ts":"_astro/About.astro_astro_type_script_index_0_lang.CAmY6EqE.js","C:/my-portfolio-web/src/components/Contact.astro?astro&type=script&index=0&lang.ts":"_astro/Contact.astro_astro_type_script_index_0_lang.BQcl-6CP.js","C:/my-portfolio-web/src/components/Footer.astro?astro&type=script&index=0&lang.ts":"_astro/Footer.astro_astro_type_script_index_0_lang.DdMCOEes.js","C:/my-portfolio-web/src/components/StatsBridge.astro?astro&type=script&index=0&lang.ts":"_astro/StatsBridge.astro_astro_type_script_index_0_lang.nPRZwQx9.js","C:/my-portfolio-web/src/components/LenguagePicker.astro?astro&type=script&index=0&lang.ts":"_astro/LenguagePicker.astro_astro_type_script_index_0_lang.CB3WrcKJ.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/my-portfolio-web/src/components/Header.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",function(){const i=document.getElementById(\"top\");document.getElementById(\"nav-inner\");const m=document.getElementById(\"progress-bar\");function l(){const t=window.scrollY,e=document.documentElement.scrollHeight-window.innerHeight;t>50?i.classList.add(\"scrolled\"):i.classList.remove(\"scrolled\");const n=e>0?t/e*100:0;m.style.width=`${n}%`}l(),document.addEventListener(\"scroll\",l,{passive:!0}),document.querySelectorAll(\"section[id], div[id='hero'], div[id='about'], div[id='proyects'], div[id='contact']\");const r=document.querySelectorAll(\".nav-link[data-section]\");function g(t){r.forEach(e=>{const n=e.dataset.section===t;e.classList.toggle(\"active\",n)})}const s=new Map,v=new IntersectionObserver(t=>{if(t.forEach(e=>{e.isIntersecting?s.set(e.target.id,e.intersectionRatio):s.delete(e.target.id)}),s.size>0){const e=[...s.entries()].reduce((n,o)=>n[1]>o[1]?n:o);g(e[0])}},{threshold:[.1,.3,.5],rootMargin:\"-10% 0px -50% 0px\"});[...r].map(t=>t.dataset.section).forEach(t=>{const e=document.getElementById(t);e&&v.observe(e)});const E=document.getElementById(\"menu_btn\"),h=document.getElementById(\"close_btn\"),a=document.getElementById(\"mobile_menu\"),L=a.querySelectorAll(\"a\");function c(){a.classList.toggle(\"hidden\")}E.addEventListener(\"click\",c),h.addEventListener(\"click\",c),L.forEach(t=>t.addEventListener(\"click\",c)),document.querySelectorAll('a[href^=\"#\"]').forEach(t=>{t.addEventListener(\"click\",function(e){e.preventDefault();const n=this.getAttribute(\"href\").substring(1),o=document.getElementById(n);if(!o)return;const b=o.getBoundingClientRect().top+window.scrollY-120;window.scrollTo({top:b,behavior:\"smooth\"})})});const f=document.getElementById(\"change_language_btn\"),u=document.getElementById(\"select_language\"),d=document.getElementById(\"menu\"),B=document.getElementById(\"close_btn2\");document.getElementById(\"back_btn\").addEventListener(\"click\",()=>{u.classList.toggle(\"hidden\"),d.classList.remove(\"hidden\")}),f.addEventListener(\"click\",()=>{u.classList.toggle(\"hidden\"),d.classList.add(\"hidden\")}),B.addEventListener(\"click\",()=>{d.classList.remove(\"hidden\"),c()})});"],["C:/my-portfolio-web/src/components/Education.astro?astro&type=script&index=0&lang.ts","const t=document.querySelectorAll(\"#education .scroll-reveal\"),s=new IntersectionObserver(e=>e.forEach(r=>{r.isIntersecting&&(r.target.classList.add(\"visible\"),s.unobserve(r.target))}),{threshold:.08,rootMargin:\"0px 0px -40px 0px\"});t.forEach(e=>s.observe(e));"],["C:/my-portfolio-web/src/components/About.astro?astro&type=script&index=0&lang.ts","const t=document.querySelectorAll(\"#about .scroll-reveal\"),r=new IntersectionObserver(e=>{e.forEach(s=>{s.isIntersecting&&(s.target.classList.add(\"visible\"),r.unobserve(s.target))})},{threshold:.12});t.forEach(e=>r.observe(e));"],["C:/my-portfolio-web/src/components/Contact.astro?astro&type=script&index=0&lang.ts","const s=document.querySelectorAll(\"#contact .scroll-reveal\"),t=new IntersectionObserver(e=>e.forEach(r=>{r.isIntersecting&&(r.target.classList.add(\"visible\"),t.unobserve(r.target))}),{threshold:.1,rootMargin:\"0px 0px -40px 0px\"});s.forEach(e=>t.observe(e));"],["C:/my-portfolio-web/src/components/Footer.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",function(){const n=document.querySelectorAll(\".footer-nav-link[data-section]\");function c(t){n.forEach(e=>{const s=e.dataset.section===t;e.classList.toggle(\"active\",s)})}const o=new Map,r=new IntersectionObserver(t=>{if(t.forEach(e=>{e.isIntersecting?o.set(e.target.id,e.intersectionRatio):o.delete(e.target.id)}),o.size>0){const e=[...o.entries()].reduce((s,i)=>s[1]>i[1]?s:i);c(e[0])}},{threshold:[.1,.3,.5],rootMargin:\"-10% 0px -50% 0px\"});[...n].map(t=>t.dataset.section).forEach(t=>{const e=document.getElementById(t);e&&r.observe(e)})});"],["C:/my-portfolio-web/src/components/StatsBridge.astro?astro&type=script&index=0&lang.ts","const e=document.querySelector(\".stats-bridge\");if(e){const s=new IntersectionObserver(([t])=>{t.isIntersecting&&(e.classList.add(\"visible\"),s.disconnect())},{threshold:.2});s.observe(e)}"],["C:/my-portfolio-web/src/components/LenguagePicker.astro?astro&type=script&index=0&lang.ts","const e=document.getElementById(\"select_language\"),t=document.getElementById(\"close_btn2\");t.addEventListener(\"click\",()=>{console.log(\"close\"),e.classList.add(\"hidden\")});"]],"assets":["/_astro/Agraham.Dz9_1RS9.otf","/_astro/index.Dv9jUCu4.css","/favicon.svg","/googleb065f7995a8f3ccf.html","/robots.txt","/assets/projects/calinema_api.avif","/assets/projects/calinema_app.webp","/assets/projects/democracia_elite.avif","/assets/projects/menu_usb.avif","/assets/projects/pokedex_img.webp","/assets/projects/radio_app_img.webp","/assets/projects/xrays.avif","/assets/background/background_vid.webm","/assets/profile/MarlonMoraLogo.svg","/assets/profile/MarlonMoraPhoto.webp","/assets/profile/web_portada.webp","/assets/icons/check-svgrepo-com.svg","/assets/icons/close-bold-svgrepo-com.svg","/assets/icons/close-svgrepo-com.svg","/assets/icons/down-arrow-5-svgrepo-com.svg","/assets/icons/international-svgrepo-com.svg","/assets/icons/left-arrow.svg","/assets/icons/menu-alt-01-svgrepo-com.svg","/assets/icons/right-arrow.svg","/assets/projects/leetcode_clone/leetcode_clone.avif","/assets/projects/leetcode_clone/leetcode_clone_gallery1.webp","/assets/projects/neuroscreen/neuroscreen.webp","/assets/projects/neuroscreen/neuroscreen_gallery1.webp"],"i18n":{"fallback":{"en":"es"},"fallbackType":"redirect","strategy":"pathname-prefix-other-locales","locales":["es","en"],"defaultLocale":"es","domainLookupTable":{}},"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"t6q8LJ5fLY3tAXGtzZxI3NFiZsp67mLqHRldF61wuDw="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };

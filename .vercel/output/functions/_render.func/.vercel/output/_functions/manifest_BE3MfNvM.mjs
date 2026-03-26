import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_KQiW3V5_.mjs';
import 'es-module-lexer';
import { d as decodeKey } from './chunks/astro/server_Dpb_eGXo.mjs';
import 'clsx';

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
    isIndex: rawRouteData.isIndex
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

const manifest = deserializeManifest({"hrefRoot":"file:///C:/my-portfolio-web/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.addEventListener(\"DOMContentLoaded\",function(){const e=document.getElementById(\"top\");document.getElementById(\"nav-inner\");const t=document.getElementById(\"progress-bar\");function r(){const o=window.scrollY,n=document.documentElement.scrollHeight-window.innerHeight;o>50?e.classList.add(\"scrolled\"):e.classList.remove(\"scrolled\");const i=n>0?o/n*100:0;t.style.width=`${i}%`}r(),document.addEventListener(\"scroll\",r,{passive:!0}),document.querySelectorAll(\"section[id], div[id='hero'], div[id='about'], div[id='proyects'], div[id='contact']\");const a=document.querySelectorAll(\".nav-link[data-section]\");function b(o){a.forEach(n=>{const i=n.dataset.section===o;n.classList.toggle(\"active\",i)})}const c=new Map,s=new IntersectionObserver(o=>{if(o.forEach(n=>{n.isIntersecting?c.set(n.target.id,n.intersectionRatio):c.delete(n.target.id)}),c.size>0){const n=[...c.entries()].reduce((i,l)=>i[1]>l[1]?i:l);b(n[0])}},{threshold:[.1,.3,.5],rootMargin:\"-10% 0px -50% 0px\"});[...a].map(o=>o.dataset.section).forEach(o=>{const n=document.getElementById(o);n&&s.observe(n)});const g=document.getElementById(\"menu_btn\"),p=document.getElementById(\"close_btn\"),h=document.getElementById(\"mobile_menu\"),B=h.querySelectorAll(\"a\");function u(){h.classList.toggle(\"hidden\")}g.addEventListener(\"click\",u),p.addEventListener(\"click\",u),B.forEach(o=>o.addEventListener(\"click\",u)),document.querySelectorAll('a[href^=\"#\"]').forEach(o=>{o.addEventListener(\"click\",function(n){n.preventDefault();const i=this.getAttribute(\"href\").substring(1),l=document.getElementById(i);if(!l)return;const k=l.getBoundingClientRect().top+window.scrollY-120;window.scrollTo({top:k,behavior:\"smooth\"})})});const y=document.getElementById(\"change_language_btn\"),E=document.getElementById(\"select_language\"),m=document.getElementById(\"menu\"),w=document.getElementById(\"close_btn2\");document.getElementById(\"back_btn\").addEventListener(\"click\",()=>{E.classList.toggle(\"hidden\"),m.classList.remove(\"hidden\")}),y.addEventListener(\"click\",()=>{E.classList.toggle(\"hidden\"),m.classList.add(\"hidden\")}),w.addEventListener(\"click\",()=>{m.classList.remove(\"hidden\"),u()})});const A=document.querySelectorAll(\"#education .scroll-reveal\"),f=new IntersectionObserver(e=>e.forEach(t=>{t.isIntersecting&&(t.target.classList.add(\"visible\"),f.unobserve(t.target))}),{threshold:.08,rootMargin:\"0px 0px -40px 0px\"});A.forEach(e=>f.observe(e));const S=document.querySelectorAll(\"#about .scroll-reveal\"),L=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add(\"visible\"),L.unobserve(t.target))})},{threshold:.12});S.forEach(e=>L.observe(e));const x=document.querySelectorAll(\"#contact .scroll-reveal\"),I=new IntersectionObserver(e=>e.forEach(t=>{t.isIntersecting&&(t.target.classList.add(\"visible\"),I.unobserve(t.target))}),{threshold:.1,rootMargin:\"0px 0px -40px 0px\"});x.forEach(e=>I.observe(e));document.addEventListener(\"DOMContentLoaded\",function(){const e=document.querySelectorAll(\".footer-nav-link[data-section]\");function t(c){e.forEach(s=>{const d=s.dataset.section===c;s.classList.toggle(\"active\",d)})}const r=new Map,a=new IntersectionObserver(c=>{if(c.forEach(s=>{s.isIntersecting?r.set(s.target.id,s.intersectionRatio):r.delete(s.target.id)}),r.size>0){const s=[...r.entries()].reduce((d,g)=>d[1]>g[1]?d:g);t(s[0])}},{threshold:[.1,.3,.5],rootMargin:\"-10% 0px -50% 0px\"});[...e].map(c=>c.dataset.section).forEach(c=>{const s=document.getElementById(c);s&&a.observe(s)})});const v=document.querySelector(\".stats-bridge\");if(v){const e=new IntersectionObserver(([t])=>{t.isIntersecting&&(v.classList.add(\"visible\"),e.disconnect())},{threshold:.2});e.observe(v)}const M=document.getElementById(\"select_language\"),_=document.getElementById(\"close_btn2\");_.addEventListener(\"click\",()=>{console.log(\"close\"),M.classList.add(\"hidden\")});\n"}],"styles":[{"type":"external","src":"/_astro/index.CMt6ihf7.css"}],"routeData":{"route":"/en","isIndex":true,"type":"page","pattern":"^\\/en\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/index.astro","pathname":"/en","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.addEventListener(\"DOMContentLoaded\",function(){const e=document.getElementById(\"top\");document.getElementById(\"nav-inner\");const t=document.getElementById(\"progress-bar\");function r(){const o=window.scrollY,n=document.documentElement.scrollHeight-window.innerHeight;o>50?e.classList.add(\"scrolled\"):e.classList.remove(\"scrolled\");const i=n>0?o/n*100:0;t.style.width=`${i}%`}r(),document.addEventListener(\"scroll\",r,{passive:!0}),document.querySelectorAll(\"section[id], div[id='hero'], div[id='about'], div[id='proyects'], div[id='contact']\");const a=document.querySelectorAll(\".nav-link[data-section]\");function b(o){a.forEach(n=>{const i=n.dataset.section===o;n.classList.toggle(\"active\",i)})}const c=new Map,s=new IntersectionObserver(o=>{if(o.forEach(n=>{n.isIntersecting?c.set(n.target.id,n.intersectionRatio):c.delete(n.target.id)}),c.size>0){const n=[...c.entries()].reduce((i,l)=>i[1]>l[1]?i:l);b(n[0])}},{threshold:[.1,.3,.5],rootMargin:\"-10% 0px -50% 0px\"});[...a].map(o=>o.dataset.section).forEach(o=>{const n=document.getElementById(o);n&&s.observe(n)});const g=document.getElementById(\"menu_btn\"),p=document.getElementById(\"close_btn\"),h=document.getElementById(\"mobile_menu\"),B=h.querySelectorAll(\"a\");function u(){h.classList.toggle(\"hidden\")}g.addEventListener(\"click\",u),p.addEventListener(\"click\",u),B.forEach(o=>o.addEventListener(\"click\",u)),document.querySelectorAll('a[href^=\"#\"]').forEach(o=>{o.addEventListener(\"click\",function(n){n.preventDefault();const i=this.getAttribute(\"href\").substring(1),l=document.getElementById(i);if(!l)return;const k=l.getBoundingClientRect().top+window.scrollY-120;window.scrollTo({top:k,behavior:\"smooth\"})})});const y=document.getElementById(\"change_language_btn\"),E=document.getElementById(\"select_language\"),m=document.getElementById(\"menu\"),w=document.getElementById(\"close_btn2\");document.getElementById(\"back_btn\").addEventListener(\"click\",()=>{E.classList.toggle(\"hidden\"),m.classList.remove(\"hidden\")}),y.addEventListener(\"click\",()=>{E.classList.toggle(\"hidden\"),m.classList.add(\"hidden\")}),w.addEventListener(\"click\",()=>{m.classList.remove(\"hidden\"),u()})});const A=document.querySelectorAll(\"#education .scroll-reveal\"),f=new IntersectionObserver(e=>e.forEach(t=>{t.isIntersecting&&(t.target.classList.add(\"visible\"),f.unobserve(t.target))}),{threshold:.08,rootMargin:\"0px 0px -40px 0px\"});A.forEach(e=>f.observe(e));const S=document.querySelectorAll(\"#about .scroll-reveal\"),L=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add(\"visible\"),L.unobserve(t.target))})},{threshold:.12});S.forEach(e=>L.observe(e));const x=document.querySelectorAll(\"#contact .scroll-reveal\"),I=new IntersectionObserver(e=>e.forEach(t=>{t.isIntersecting&&(t.target.classList.add(\"visible\"),I.unobserve(t.target))}),{threshold:.1,rootMargin:\"0px 0px -40px 0px\"});x.forEach(e=>I.observe(e));document.addEventListener(\"DOMContentLoaded\",function(){const e=document.querySelectorAll(\".footer-nav-link[data-section]\");function t(c){e.forEach(s=>{const d=s.dataset.section===c;s.classList.toggle(\"active\",d)})}const r=new Map,a=new IntersectionObserver(c=>{if(c.forEach(s=>{s.isIntersecting?r.set(s.target.id,s.intersectionRatio):r.delete(s.target.id)}),r.size>0){const s=[...r.entries()].reduce((d,g)=>d[1]>g[1]?d:g);t(s[0])}},{threshold:[.1,.3,.5],rootMargin:\"-10% 0px -50% 0px\"});[...e].map(c=>c.dataset.section).forEach(c=>{const s=document.getElementById(c);s&&a.observe(s)})});const v=document.querySelector(\".stats-bridge\");if(v){const e=new IntersectionObserver(([t])=>{t.isIntersecting&&(v.classList.add(\"visible\"),e.disconnect())},{threshold:.2});e.observe(v)}const M=document.getElementById(\"select_language\"),_=document.getElementById(\"close_btn2\");_.addEventListener(\"click\",()=>{console.log(\"close\"),M.classList.add(\"hidden\")});\n"}],"styles":[{"type":"external","src":"/_astro/index.CMt6ihf7.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[{"route":"/en/","isIndex":true,"type":"fallback","pattern":"^\\/en\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/index.astro","pathname":"/en/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/my-portfolio-web/src/pages/en/index.astro",{"propagation":"none","containsHead":true}],["C:/my-portfolio-web/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/en/index@_@astro":"pages/en.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/my-portfolio-web/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_BE3MfNvM.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.BL-wRP1U.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/Agraham.Dz9_1RS9.otf","/_astro/close-bold-svgrepo-com.Cg37C7_s.svg","/_astro/left-arrow.9zVWcI3-.svg","/_astro/menu-alt-01-svgrepo-com.w4aYK5cr.svg","/_astro/international-svgrepo-com.De-2GDtt.svg","/_astro/right-arrow.BDfnuIjP.svg","/_astro/MarlonMoraPhoto.ySqUJ1md.webp","/_astro/down-arrow-5-svgrepo-com.LN7MoDij.svg","/_astro/pokedex_img.Co__C8GF.webp","/_astro/leetcode_clone.DA5mcrZf.avif","/_astro/menu_usb.D6b0KUjN.avif","/_astro/calinema_api.6mfH-_6k.avif","/_astro/democracia_elite.HzjFnvTZ.avif","/_astro/xrays.CbODbNMW.avif","/_astro/radio_app_img.cdvUv5Hp.webp","/_astro/calinema_app.Dtz8Xa1A.webp","/_astro/index.CMt6ihf7.css","/favicon.svg","/googleb065f7995a8f3ccf.html","/assets/background_img.webp","/assets/background_vid.webm","/assets/calinema_api.avif","/assets/calinema_app.webp","/assets/check-svgrepo-com.svg","/assets/close-bold-svgrepo-com.svg","/assets/close-svgrepo-com.svg","/assets/democracia_elite.avif","/assets/down-arrow-5-svgrepo-com.svg","/assets/international-svgrepo-com.svg","/assets/leetcode_clone.avif","/assets/left-arrow.svg","/assets/MarlonMoraIcon.webp","/assets/MarlonMoraLogo.svg","/assets/MarlonMoraPhoto.webp","/assets/menu-alt-01-svgrepo-com.svg","/assets/menu_usb.avif","/assets/pokedex_img.webp","/assets/radio_app_img.webp","/assets/right-arrow.svg","/assets/web_portada.webp","/assets/xrays.avif"],"i18n":{"fallback":{"en":"es"},"fallbackType":"redirect","strategy":"pathname-prefix-other-locales","locales":["es","en"],"defaultLocale":"es","domainLookupTable":{}},"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"YsMbSjnAzlQGx9cv/YZbWBdnvp1AfyBqndhOBBW1Y5g=","experimentalEnvGetSecretEnabled":false});

export { manifest };

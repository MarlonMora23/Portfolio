/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_Dpb_eGXo.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$App } from '../chunks/App_CguRyBMz.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Portfolio Marlon Mora - Administrator and engineer", ",": true, "description": "Business Administration and Systems Engineering Student" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "App", $$App, {})} ` })}`;
}, "C:/my-portfolio-web/src/pages/en/index.astro", void 0);

const $$file = "C:/my-portfolio-web/src/pages/en/index.astro";
const $$url = "/en";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Bxq6LrhJ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BI1CTbXb.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `404 Not Found`, "description": "\u30DA\u30FC\u30B8\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>404 Not Found</h1> ` })}`;
}, "/Users/taka/develop/microcms-astro/src/pages/404.astro", void 0);

const $$file = "/Users/taka/develop/microcms-astro/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

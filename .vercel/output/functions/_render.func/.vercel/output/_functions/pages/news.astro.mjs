/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_Bxq6LrhJ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BI1CTbXb.mjs';
import { n as newtClient } from '../chunks/newt_DXqNCDoM.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const { items: articles } = await newtClient.getContents({
    appUid: "news",
    modelUid: "article",
    query: {
      select: ["title", "slug", "body"]
    }
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u304A\u77E5\u3089\u305B\uFF5CKanban", "description": "Kanban\u304B\u3089\u304A\u77E5\u3089\u305B\u3067\u3059\u3002" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <ul> ${articles.map((article) => {
    return renderTemplate`<li> <a${addAttribute(`/news/${article.slug}`, "href")}>${article.title}</a> </li>`;
  })} </ul> </section> ` })}`;
}, "/Users/taka/develop/microcms-astro/src/pages/news/index.astro", void 0);

const $$file = "/Users/taka/develop/microcms-astro/src/pages/news/index.astro";
const $$url = "/news";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

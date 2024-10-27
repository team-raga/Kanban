/* empty css                                    */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead, u as unescapeHTML } from '../../chunks/astro/server_Bxq6LrhJ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BI1CTbXb.mjs';
import { n as newtClient } from '../../chunks/newt_DXqNCDoM.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const getStaticPaths = async () => {
  const { items: articles } = await newtClient.getContents({
    appUid: "news",
    modelUid: "article",
    query: {
      select: ["title", "slug", "body"]
    }
  });
  return articles.map((article) => ({
    params: { slug: article.slug },
    props: { article }
  }));
};
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { article } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": article.title, "description": "\u6295\u7A3F\u8A73\u7D30\u30DA\u30FC\u30B8\u3067\u3059" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <h2>${article.title}</h2> <article>${unescapeHTML(article.body)}</article> </main> ` })}`;
}, "/Users/taka/develop/microcms-astro/src/pages/news/[slug].astro", void 0);

const $$file = "/Users/taka/develop/microcms-astro/src/pages/news/[slug].astro";
const $$url = "/news/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

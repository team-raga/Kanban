/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro, d as renderComponent } from '../chunks/astro/server_Bxq6LrhJ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BI1CTbXb.mjs';
import { n as newtClient } from '../chunks/newt_DXqNCDoM.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$ZennArticles = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ZennArticles;
  const response = await fetch("https://zenn.dev/api/articles?username=1000_x_t30");
  const data = await response.json();
  const articles = data.articles;
  return renderTemplate`<!-- テンプレート部分 -->${maybeRenderHead()}<div> ${articles.map((article) => renderTemplate`<article class="mb-4 p-4 border rounded-lg"> <div class="flex items-center gap-2"> <img${addAttribute(article.user.avatar_small_url, "src")}${addAttribute(article.user.name, "alt")} class="w-8 h-8 rounded-full"> <span>${article.user.name}</span> </div> <h2 class="text-xl font-bold mt-2"> <a${addAttribute(`https://zenn.dev${article.path}`, "href")} target="_blank" rel="noopener noreferrer"> ${article.emoji} ${article.title} </a> </h2> <div class="mt-2 text-sm text-gray-600"> <span>💭 ${article.comments_count}</span> <span class="ml-4">❤️ ${article.liked_count}</span> <span class="ml-4">📝 ${new Date(article.published_at).toLocaleDateString()}</span> </div> </article>`)} </div>`;
}, "/Users/taka/develop/microcms-astro/src/components/features/zenn/ZennArticles.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const { items: articles } = await newtClient.getContents({
    appUid: "news",
    modelUid: "article",
    query: {
      select: ["title", "slug", "body"]
    }
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "\u30AB\u30F3\u30D0\u30F3\u306E\u30B5\u30A4\u30C8\u3067\u3059\u3002" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <section> ${renderComponent($$result2, "ZennArticles", $$ZennArticles, {})} </section> <section> <ul> ${articles.map((article) => {
    return renderTemplate`<li> <a${addAttribute(`/articles/${article.slug}`, "href")}>${article.title}</a> </li>`;
  })} </ul> </section> </main> ` })}`;
}, "/Users/taka/develop/microcms-astro/src/pages/index.astro", void 0);

const $$file = "/Users/taka/develop/microcms-astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

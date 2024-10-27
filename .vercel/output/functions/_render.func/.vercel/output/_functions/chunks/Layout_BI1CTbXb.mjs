import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as renderComponent, e as renderHead, f as renderSlot, b as createAstro } from './astro/server_Bxq6LrhJ.mjs';
import 'kleur/colors';
import 'clsx';

function render$2({ slots: ___SLOTS___ }) {
		return `<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width" />`
	}
render$2["astro:html"] = true;

function render$1({ slots: ___SLOTS___ }) {
		return `<link rel="icon" type="image/svg+xml" href="/favicon.svg" />`
	}
render$1["astro:html"] = true;

function render({ slots: ___SLOTS___ }) {
		return ``
	}
render["astro:html"] = true;

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="pt-8"> <ul class="flex justify-end"> <li><a class="px-4 py-2" href="/">top</a></li> <li><a class="px-4 py-2" href="/news">news</a></li> <li><a class="px-4 py-2" href="/form">form</a></li> </ul> </header>`;
}, "/Users/taka/develop/microcms-astro/src/components/common/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/Users/taka/develop/microcms-astro/src/components/common/Footer.astro", void 0);

const name = "microcms-astro";
const theme = "Kanban";
const type = "module";
const version = "0.0.1";
const scripts = {
	dev: "astro dev",
	start: "astro dev",
	build: "astro check && astro build",
	preview: "astro preview",
	astro: "astro"
};
const dependencies = {
	"@astrojs/check": "^0.9.1",
	"@astrojs/react": "^3.6.2",
	"@astrojs/tailwind": "^5.1.2",
	"@astrojs/vercel": "^7.8.2",
	astro: "^4.13.1",
	"newt-client-js": "^3.3.6",
	swr: "^2.2.5",
	tailwindcss: "^3.4.14",
	typescript: "^5.5.4"
};
const pkg = {
	name: name,
	theme: theme,
	type: type,
	version: version,
	scripts: scripts,
	dependencies: dependencies
};

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="ja"> <head><meta name="description"${addAttribute(description, "content")}><meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderComponent($$result, "Meta", render$2, {})}${renderComponent($$result, "Link", render$1, {})}${renderComponent($$result, "Script", render, {})}<title>${title && `${title}\uFF5C`}${pkg.theme}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/taka/develop/microcms-astro/src/components/layout/Layout.astro", void 0);

export { $$Layout as $ };

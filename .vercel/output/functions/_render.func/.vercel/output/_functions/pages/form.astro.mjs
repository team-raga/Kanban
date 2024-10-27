/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, s as spreadAttributes, b as createAstro, d as renderComponent } from '../chunks/astro/server_Bxq6LrhJ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BI1CTbXb.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$InputText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$InputText;
  const {
    id,
    name,
    type = "text",
    required = false,
    placeholder
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <label${addAttribute(id, "for")}></label> <input${addAttribute(id, "id")} class="border rounded-sm px-4 py-2"${addAttribute(type, "type")}${addAttribute(placeholder, "placeholder")}${addAttribute(name, "name")}${spreadAttributes(required && { required: true })}> </div>`;
}, "/Users/taka/develop/microcms-astro/src/components/features/form/InputText.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Newt\u30FBAstro\u30D6\u30ED\u30B0", "description": "Newt\u3068Astro\u3092\u5229\u7528\u3057\u305F\u30D6\u30ED\u30B0\u3067\u3059" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<form method="post" action="https://kanban.form.newt.so/v1/oANOMW3LL"> ${renderComponent($$result2, "InputText", $$InputText, { "id": "formName", "name": "full_name", "placeholder": "\u770B\u677F\u592A\u90CE", "required": true })} ${renderComponent($$result2, "InputText", $$InputText, { "id": "formEmail", "name": "email_address", "type": "email", "placeholder": "kanban@example.com", "required": true })} <textarea name="body" required></textarea> <button type="submit" class="g-recaptcha" data-sitekey="reCAPTCHA_site_key" data-callback="onSubmit" data-action="submit">
Submit
</button> </form> ` })}`;
}, "/Users/taka/develop/microcms-astro/src/pages/form/index.astro", void 0);

const $$file = "/Users/taka/develop/microcms-astro/src/pages/form/index.astro";
const $$url = "/form";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

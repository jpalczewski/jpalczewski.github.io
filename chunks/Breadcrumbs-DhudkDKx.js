import { c as createAstro, a as createComponent, m as maybeRenderHead, d as addAttribute, b as renderTemplate } from './astro-server-82cx7PaZ.js';
import 'piccolore';
import 'clsx';
/* empty css                        */

const $$Astro = createAstro("https://blog.palczew.ski");
const $$Breadcrumbs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  const { items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav class="breadcrumbs" aria-label="Breadcrumb" data-astro-cid-c7uhitw3> <ol class="breadcrumbs__list" data-astro-cid-c7uhitw3> ${items.map((item, index) => renderTemplate`<li class="breadcrumbs__item" data-astro-cid-c7uhitw3> ${item.url ? renderTemplate`<a${addAttribute(item.url, "href")} class="breadcrumbs__link" data-astro-cid-c7uhitw3> ${item.label} </a>` : renderTemplate`<span class="breadcrumbs__current" data-astro-cid-c7uhitw3>${item.label}</span>`} ${index < items.length - 1 ? renderTemplate`<span class="breadcrumbs__separator" aria-hidden="true" data-astro-cid-c7uhitw3>
›
</span>` : null} </li>`)} </ol> </nav> `;
}, "/home/runner/work/karpaty/karpaty/src/components/thoughts/Breadcrumbs.astro", void 0);

export { $$Breadcrumbs as $ };

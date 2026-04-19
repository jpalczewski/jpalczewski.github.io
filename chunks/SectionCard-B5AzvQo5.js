import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, e as renderSlot, m as maybeRenderHead, d as addAttribute } from './astro-server-B4qyNKwf.js';
import 'piccolore';
import { $ as $$Layout } from './Layout-CJnwrpRx.js';
import { c as createAboutNavConfig } from './secondary-nav-config-0UbuDUCn.js';
import 'clsx';
/* empty css                        */

const aboutFlag = true;
const aboutEnabled = aboutFlag !== "false";

const $$Astro$1 = createAstro("https://blog.palczew.ski");
const $$AboutLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AboutLayout;
  const {
    title,
    description,
    locale,
    showSummary = true,
    additionalLinks = []
  } = Astro2.props;
  const secondaryNavConfig = createAboutNavConfig(locale, {
    showSummary,
    additionalLinks
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "pageType": "about", "secondaryNavConfig": secondaryNavConfig }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="plain-content"> ${renderSlot($$result2, $$slots["default"])} </div> `, "head": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["head"])}` })}`;
}, "/home/runner/work/karpaty/karpaty/src/layouts/AboutLayout.astro", void 0);

const $$Astro = createAstro("https://blog.palczew.ski");
const $$SectionCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SectionCard;
  const { title, subtitle, variant = "primary", class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["section-card", `section-card--${variant}`, className], "class:list")} data-astro-cid-2aoyz5v7> ${title && renderTemplate`<div class="section-card__header" data-astro-cid-2aoyz5v7> <h2 class="section-card__title" data-astro-cid-2aoyz5v7>${title}</h2> ${subtitle && renderTemplate`<p class="section-card__subtitle" data-astro-cid-2aoyz5v7>${subtitle}</p>`} </div>`} <div class="section-card__content" data-astro-cid-2aoyz5v7> ${renderSlot($$result, $$slots["default"])} </div> </div> `;
}, "/home/runner/work/karpaty/karpaty/src/components/about/SectionCard.astro", void 0);

export { $$AboutLayout as $, aboutEnabled as a, $$SectionCard as b };

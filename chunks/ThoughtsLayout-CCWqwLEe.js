import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, e as renderSlot, m as maybeRenderHead } from './astro-server-B4qyNKwf.js';
import 'piccolore';
import { $ as $$Layout } from './Layout-CG0a7mNX.js';
import { g as getCollection, h as getPostsForLocale, A as getUniqueYears, B as getUniqueYearMonths } from './content-Cbsl0NyT.js';
import { a as createThoughtsNavConfig } from './secondary-nav-config-0UbuDUCn.js';

const $$Astro = createAstro("https://blog.palczew.ski");
const $$ThoughtsLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ThoughtsLayout;
  const { title, description, locale, showMonthly = true, extraStructuredData } = Astro2.props;
  const allPosts = await getCollection("thoughts");
  const posts = getPostsForLocale(allPosts, locale, false);
  const years = getUniqueYears(posts);
  const yearMonths = getUniqueYearMonths(posts);
  const secondaryNavConfig = createThoughtsNavConfig(locale, years, yearMonths, {
    showMonthly,
    showTagsMap: true,
    showArchive: true,
    currentPath: Astro2.url.pathname
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "pageType": "thoughts", "secondaryNavConfig": secondaryNavConfig, "extraStructuredData": extraStructuredData }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="plain-content"> ${renderSlot($$result2, $$slots["default"])} </div> `, "head": async ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["head"])}` })}`;
}, "/home/runner/work/karpaty/karpaty/src/layouts/ThoughtsLayout.astro", void 0);

export { $$ThoughtsLayout as $ };

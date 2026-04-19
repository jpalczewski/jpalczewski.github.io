import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, e as renderSlot } from './astro-server-CNTtBI_2.js';
import 'piccolore';
import { $ as $$Layout } from './Layout-DNfZsI7x.js';
import { g as getCollection, i as getPostsForLocale, A as getUniqueYears, B as getUniqueYearMonths } from './content-D7VCeSST.js';
import { a as createThoughtsNavConfig } from './secondary-nav-config-0UbuDUCn.js';

const $$Astro = createAstro("https://blog.palczew.ski");
const $$ThoughtsLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ThoughtsLayout;
  const { title, description, locale, showMonthly = true, structuredData, ogType, ogImage, article, alternates } = Astro2.props;
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "pageType": "thoughts", "secondaryNavConfig": secondaryNavConfig, "structuredData": structuredData, "ogType": ogType, "ogImage": ogImage, "article": article, "alternates": alternates }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="plain-content"> ${renderSlot($$result2, $$slots["default"])} </div> ` })}`;
}, "/home/runner/work/karpaty/karpaty/src/layouts/ThoughtsLayout.astro", void 0);

export { $$ThoughtsLayout as $ };

import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, e as renderSlot } from './astro-server-B4qyNKwf.js';
import 'piccolore';
import { $ as $$ThoughtsLayout } from './ThoughtsLayout-BdmnFOaj.js';
import { $ as $$Breadcrumbs } from './Breadcrumbs-CWvK6GTD.js';
import { P as Pagination, a as PostMeta } from './PostMeta-C5Lje3Jf.js';
import { c as attr, e as escape_html } from './_at-astro-renderers-BLtlkU0u.js';
/* empty css                         */

const $$Astro = createAstro("https://blog.palczew.ski");
const $$ThoughtsPaginatedPage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ThoughtsPaginatedPage;
  const { locale, pageTitle, pageSubtitle, breadcrumbs, currentPage, totalPages, baseUrl } = Astro2.props;
  const prevLabel = locale === "pl" ? "\u2190 Poprzednia" : "\u2190 Previous";
  const nextLabel = locale === "pl" ? "Nast\u0119pna \u2192" : "Next \u2192";
  const siteTitle = `${pageTitle} - Karpaty`;
  const siteDescription = pageSubtitle;
  return renderTemplate`${renderComponent($$result, "ThoughtsLayout", $$ThoughtsLayout, { "title": siteTitle, "description": siteDescription, "locale": locale }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="unified-card"> <div class="unified-card__header"> <h1 class="unified-card__title">${pageTitle}</h1> <p class="unified-card__subtitle">${pageSubtitle}</p> </div> <div class="unified-card__divider"></div> <div class="unified-card__section"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbs })} <!-- Content slot - różna treść dla różnych stron --> ${renderSlot($$result2, $$slots["default"])} ${totalPages > 1 && renderTemplate`${renderComponent($$result2, "Pagination", Pagination, { "currentPage": currentPage, "totalPages": totalPages, "baseUrl": baseUrl, "prevLabel": prevLabel, "nextLabel": nextLabel, "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/thoughts/Pagination.svelte", "client:component-export": "default" })}`} </div> </div> ` })}`;
}, "/home/runner/work/karpaty/karpaty/src/components/thoughts/ThoughtsPaginatedPage.astro", void 0);

function PostCard($$renderer, $$props) {
	let {
		title,
		url,
		excerpt,
		date,
		tags,
		locale,
		readingTime,
		readingTimeLabel,
		isDraft = false,
		draftLabel = 'Draft',
		translationUrl,
		translationLabel
	} = $$props;

	$$renderer.push(`<article class="post-card unified-card__item svelte-n4jml7"><a${attr('href', url)} class="post-card__link svelte-n4jml7"><h3 class="post-card__title unified-card__item-title svelte-n4jml7">${escape_html(title)}</h3></a> `);

	PostMeta($$renderer, {
		date,
		tags,
		locale,
		readingTime,
		readingTimeLabel,
		isDraft,
		draftLabel,
		translationUrl,
		translationLabel
	});

	$$renderer.push(`<!----> <p class="post-card__excerpt unified-card__item-text svelte-n4jml7">${escape_html(excerpt)}</p> <a${attr('href', url)} class="post-card__read-more svelte-n4jml7" target="_blank" rel="noopener noreferrer"><span class="post-card__read-more-text svelte-n4jml7">${escape_html(locale === 'pl' ? 'Otwórz w nowej karcie' : 'Open in new tab')}</span> <span class="post-card__arrow svelte-n4jml7" aria-hidden="true">→</span></a></article>`);
}

export { $$ThoughtsPaginatedPage as $, PostCard as P };

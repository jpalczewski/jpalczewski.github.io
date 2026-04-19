import { c as createAstro, a as createComponent, m as maybeRenderHead, d as addAttribute, e as renderSlot, b as renderTemplate } from './astro-server-61wKoaru.js';
import 'piccolore';
import 'clsx';
/* empty css                             */
import { e as escape_html, a as ensure_array_like, b as attr_class, c as attr } from './_at-astro-renderers-DzRu7pEN.js';

const $$Astro = createAstro("https://blog.palczew.ski");
const $$TimelineItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TimelineItem;
  const {
    title,
    subtitle,
    period,
    description,
    technologies = [],
    type = "professional",
    position = "left"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["timeline-item", `timeline-item--${position}`, `timeline-item--${type}`], "class:list")} data-astro-cid-z3mnsdyn> <div class="timeline-item__marker" data-astro-cid-z3mnsdyn> <div class="timeline-item__dot" data-astro-cid-z3mnsdyn></div> <div class="timeline-item__line" data-astro-cid-z3mnsdyn></div> </div> <div class="timeline-item__card" data-astro-cid-z3mnsdyn> <div class="timeline-item__header" data-astro-cid-z3mnsdyn> <div class="timeline-item__title-group" data-astro-cid-z3mnsdyn> <h3 class="timeline-item__title" data-astro-cid-z3mnsdyn>${title}</h3> ${subtitle && renderTemplate`<p class="timeline-item__subtitle" data-astro-cid-z3mnsdyn>${subtitle}</p>`} </div> <span class="timeline-item__period" data-astro-cid-z3mnsdyn>${period}</span> </div> <div class="timeline-item__content" data-astro-cid-z3mnsdyn> ${renderSlot($$result, $$slots["default"], renderTemplate` ${description && renderTemplate`<p data-astro-cid-z3mnsdyn>${description}</p>`} `)} </div> ${technologies.length > 0 && renderTemplate`<div class="timeline-item__technologies" data-astro-cid-z3mnsdyn> ${technologies.map((tech) => renderTemplate`<span class="timeline-item__tech-tag" data-astro-cid-z3mnsdyn>${tech}</span>`)} </div>`} </div> </div> `;
}, "/home/runner/work/karpaty/karpaty/src/components/about/TimelineItem.astro", void 0);

function ExpandableReports($$renderer, $$props) {
	// ExpandableReports - Collapsible accordion for displaying course/report details
	// Features: Smooth animation, accessible, purple-gold theme
	let { reports, sectionTitle = 'Reports' } = $$props;

	// Track which reports are expanded (using array of indices)
	let expandedIndices = [];

	$$renderer.push(`<div class="expandable-reports svelte-1warup"><h4 class="expandable-reports__title svelte-1warup">${escape_html(sectionTitle)}</h4> <div class="expandable-reports__list svelte-1warup"><!--[-->`);

	const each_array = ensure_array_like(reports);

	for (let index = 0, $$length = each_array.length; index < $$length; index++) {
		let report = each_array[index];

		$$renderer.push(`<div${attr_class('report-item svelte-1warup', void 0, { 'is-expanded': expandedIndices.includes(index) })}><button class="report-item__header svelte-1warup"${attr('aria-expanded', expandedIndices.includes(index))}><div class="report-item__header-content svelte-1warup"><span class="report-item__name svelte-1warup">${escape_html(report.name)}</span> `);

		if (report.tags && report.tags.length > 0) {
			$$renderer.push('<!--[-->');
			$$renderer.push(`<div class="report-item__tags svelte-1warup"><!--[-->`);

			const each_array_1 = ensure_array_like(report.tags);

			for (let $$index = 0, $$length = each_array_1.length; $$index < $$length; $$index++) {
				let tag = each_array_1[$$index];

				$$renderer.push(`<span class="report-item__tag svelte-1warup">${escape_html(tag)}</span>`);
			}

			$$renderer.push(`<!--]--></div>`);
		} else {
			$$renderer.push('<!--[!-->');
		}

		$$renderer.push(`<!--]--></div> <span class="report-item__icon svelte-1warup" aria-hidden="true">${escape_html(expandedIndices.includes(index) ? '−' : '+')}</span></button> `);

		if (expandedIndices.includes(index)) {
			$$renderer.push('<!--[-->');
			$$renderer.push(`<div class="report-item__content svelte-1warup"><p class="svelte-1warup">${escape_html(report.description)}</p></div>`);
		} else {
			$$renderer.push('<!--[!-->');
		}

		$$renderer.push(`<!--]--></div>`);
	}

	$$renderer.push(`<!--]--></div></div>`);
}

function TableOfContents($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		// TableOfContents - Reusable component for quick navigation within long pages
		// Perfect for: Experience sections, Blog posts, Documentation pages
		// Features: Smooth scroll, active section tracking, responsive design
		// e.g., "education", "professional-development"
		// compact: horizontal pills, detailed: vertical cards
		let { sections, title = 'Jump to section', variant = 'compact' } = $$props;

		// Track which section is currently visible (for active state)
		let activeAnchor = null;

		$$renderer.push(`<nav${attr_class('toc svelte-1pbsi0n', void 0, {
			'toc--detailed': // Set up scroll listener (only in browser)
			variant === 'detailed'
		})}>`);

		if (title) {
			$$renderer.push('<!--[-->');
			$$renderer.push(`<h3 class="toc__title svelte-1pbsi0n">${escape_html(title)}</h3>`);
		} else {
			$$renderer.push('<!--[!-->');
		}

		$$renderer.push(`<!--]--> <div class="toc__sections svelte-1pbsi0n"><!--[-->`);

		const each_array = ensure_array_like(sections);

		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let section = each_array[$$index];

			$$renderer.push(`<button${attr_class('toc__item svelte-1pbsi0n', void 0, { 'toc__item--active': activeAnchor === section.anchor })} type="button">`);

			if (section.icon) {
				$$renderer.push('<!--[-->');
				$$renderer.push(`<span class="toc__icon svelte-1pbsi0n" aria-hidden="true">${escape_html(section.icon)}</span>`);
			} else {
				$$renderer.push('<!--[!-->');
			}

			$$renderer.push(`<!--]--> <span class="toc__label svelte-1pbsi0n">${escape_html(section.label)}</span></button>`);
		}

		$$renderer.push(`<!--]--></div></nav>`);
	});
}

export { $$TimelineItem as $, ExpandableReports as E, TableOfContents as T };

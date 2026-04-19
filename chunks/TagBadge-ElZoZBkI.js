import { a as ensure_array_like, c as attr, e as escape_html } from './_at-astro-renderers-Bnfhkx0P.js';
/* empty css                         */

function TagBadge($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		// e.g., "tech/astro/components"
		// Pre-computed from getTagBreadcrumbs
		// Whether tags are links
		let { tag, locale, segments, clickable = true } = $$props;

		$$renderer.push(`<div class="tag-badge svelte-9he9lc"><!--[-->`);

		const each_array = ensure_array_like(segments);

		for (let index = 0, $$length = each_array.length; index < $$length; index++) {
			let segment = each_array[index];

			if (clickable) {
				$$renderer.push('<!--[0-->');
				$$renderer.push(`<a${attr('href', segment.url)} class="tag-badge__segment svelte-9he9lc">${escape_html(segment.name)}</a>`);
			} else {
				$$renderer.push('<!--[-1-->');
				$$renderer.push(`<span class="tag-badge__segment tag-badge__segment--static svelte-9he9lc">${escape_html(segment.name)}</span>`);
			}

			$$renderer.push(`<!--]--> `);

			if (index < segments.length - 1) {
				$$renderer.push('<!--[0-->');
				$$renderer.push(`<span class="tag-badge__separator svelte-9he9lc" aria-hidden="true">›</span>`);
			} else {
				$$renderer.push('<!--[-1-->');
			}

			$$renderer.push(`<!--]-->`);
		}

		$$renderer.push(`<!--]--></div>`);
	});
}

export { TagBadge as T };

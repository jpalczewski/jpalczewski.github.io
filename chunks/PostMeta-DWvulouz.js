import { c as attr, e as escape_html, a as ensure_array_like, f as derived } from './_at-astro-renderers-Bnfhkx0P.js';
/* empty css                         */
import { T as TagBadge } from './TagBadge-ElZoZBkI.js';

function Pagination($$renderer, $$props) {
	// Base URL without page number, e.g., "/pl/thoughts"
	let {
		currentPage,
		totalPages,
		baseUrl,
		prevLabel = '← Previous',
		nextLabel = 'Next →'
	} = $$props;

	// Generate page numbers with ellipsis
	// Algorithm: Always show first, last, current, and 2 pages around current
	const getPageNumbers = () => {
		if (totalPages <= 7) {
			// If 7 or fewer pages, show all
			return Array.from({ length: totalPages }, (_, i) => i + 1);
		}

		const pages = [];
		const showAround = 1; // Pages to show around current

		// Always show first page
		pages.push(1);

		// Calculate range around current page
		let start = Math.max(2, currentPage - showAround);

		let end = Math.min(totalPages - 1, currentPage + showAround);

		// Adjust range if at the edges
		if (currentPage <= 3) {
			end = Math.min(5, totalPages - 1);
		} else if (currentPage >= totalPages - 2) {
			start = Math.max(totalPages - 4, 2);
		}

		// Add ellipsis before range if needed
		if (start > 2) {
			pages.push('ellipsis');
		}

		// Add range
		for (let i = start; i <= end; i++) {
			pages.push(i);
		}

		// Add ellipsis after range if needed
		if (end < totalPages - 1) {
			pages.push('ellipsis');
		}

		// Always show last page
		if (totalPages > 1) {
			pages.push(totalPages);
		}

		return pages;
	};

	const buildPageUrl = (page) => {
		if (page === 1) {
			// First page: no page suffix
			return baseUrl;
		}

		// Other pages: append /page/{number}
		return `${baseUrl}/page/${page}`;
	};

	let prevUrl = derived(() => currentPage > 1 ? buildPageUrl(currentPage - 1) : null);
	let nextUrl = derived(() => currentPage < totalPages ? buildPageUrl(currentPage + 1) : null);
	let pageNumbers = derived(getPageNumbers);

	$$renderer.push(`<nav class="pagination svelte-1uopk43" aria-label="Pagination"><div class="pagination__controls svelte-1uopk43">`);

	if (prevUrl()) {
		$$renderer.push('<!--[0-->');
		$$renderer.push(`<a${attr('href', prevUrl())} class="pagination__button pagination__button--prev svelte-1uopk43" rel="prev">${escape_html(prevLabel)}</a>`);
	} else {
		$$renderer.push('<!--[-1-->');
		$$renderer.push(`<span class="pagination__button pagination__button--prev pagination__button--disabled svelte-1uopk43">${escape_html(prevLabel)}</span>`);
	}

	$$renderer.push(`<!--]--> <div class="pagination__pages svelte-1uopk43"><!--[-->`);

	const each_array = ensure_array_like(pageNumbers());

	for (let index = 0, $$length = each_array.length; index < $$length; index++) {
		let pageNum = each_array[index];

		if (pageNum === 'ellipsis') {
			$$renderer.push('<!--[0-->');
			$$renderer.push(`<span class="pagination__ellipsis svelte-1uopk43">...</span>`);
		} else {
			$$renderer.push('<!--[-1-->');

			if (pageNum === currentPage) {
				$$renderer.push('<!--[0-->');
				$$renderer.push(`<span class="pagination__page pagination__page--current svelte-1uopk43" aria-current="page">${escape_html(pageNum)}</span>`);
			} else {
				$$renderer.push('<!--[-1-->');
				$$renderer.push(`<a${attr('href', buildPageUrl(pageNum))} class="pagination__page svelte-1uopk43">${escape_html(pageNum)}</a>`);
			}

			$$renderer.push(`<!--]-->`);
		}

		$$renderer.push(`<!--]-->`);
	}

	$$renderer.push(`<!--]--></div> `);

	if (nextUrl()) {
		$$renderer.push('<!--[0-->');
		$$renderer.push(`<a${attr('href', nextUrl())} class="pagination__button pagination__button--next svelte-1uopk43" rel="next">${escape_html(nextLabel)}</a>`);
	} else {
		$$renderer.push('<!--[-1-->');
		$$renderer.push(`<span class="pagination__button pagination__button--next pagination__button--disabled svelte-1uopk43">${escape_html(nextLabel)}</span>`);
	}

	$$renderer.push(`<!--]--></div></nav>`);
}

function PostMeta($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		// Formatted date
		// Tags with pre-computed segments
		// Minutes
		// e.g., "5 min czytania"
		// URL to translation
		// e.g., "Read in English"
		let {
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

		$$renderer.push(`<div class="post-meta svelte-1xu22o"><div class="post-meta__primary svelte-1xu22o"><time class="post-meta__date svelte-1xu22o">${escape_html(date)}</time> `);

		if (readingTime && readingTimeLabel) {
			$$renderer.push('<!--[0-->');
			$$renderer.push(`<span class="post-meta__separator svelte-1xu22o">•</span> <span class="post-meta__reading-time svelte-1xu22o">${escape_html(readingTimeLabel)}</span>`);
		} else {
			$$renderer.push('<!--[-1-->');
		}

		$$renderer.push(`<!--]--> `);

		if (isDraft) {
			$$renderer.push('<!--[0-->');
			$$renderer.push(`<span class="post-meta__draft svelte-1xu22o">${escape_html(draftLabel)}</span>`);
		} else {
			$$renderer.push('<!--[-1-->');
		}

		$$renderer.push(`<!--]--></div> `);

		if (tags.length > 0) {
			$$renderer.push('<!--[0-->');
			$$renderer.push(`<div class="post-meta__tags svelte-1xu22o"><!--[-->`);

			const each_array = ensure_array_like(tags);

			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let { tag, segments } = each_array[$$index];

				TagBadge($$renderer, { tag, locale, segments });
			}

			$$renderer.push(`<!--]--></div>`);
		} else {
			$$renderer.push('<!--[-1-->');
		}

		$$renderer.push(`<!--]--> `);

		if (translationUrl && translationLabel) {
			$$renderer.push('<!--[0-->');
			$$renderer.push(`<div class="post-meta__translation svelte-1xu22o"><a${attr('href', translationUrl)} class="post-meta__translation-link svelte-1xu22o">${escape_html(translationLabel)}</a></div>`);
		} else {
			$$renderer.push('<!--[-1-->');
		}

		$$renderer.push(`<!--]--></div>`);
	});
}

export { Pagination as P, PostMeta as a };

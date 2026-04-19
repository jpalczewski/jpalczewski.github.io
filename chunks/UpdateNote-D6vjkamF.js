import { e as escape_html, a as ensure_array_like, c as attr, d as attr_style, s as stringify } from './_at-astro-renderers-DzRu7pEN.js';
import { g as getLocale } from './Layout-TuxvdSo3.js';
/* empty css                         */

/* eslint-disable */

const en_related_continuation = /** @type {(inputs: {}) => string} */ () => {
	return `Continuation`
};

const pl_related_continuation = /** @type {(inputs: {}) => string} */ () => {
	return `Kontynuacja`
};

/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "pl" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
const related_continuation = (inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_related_continuation()
	return pl_related_continuation()
};

/* eslint-disable */

const en_related_update = /** @type {(inputs: {}) => string} */ () => {
	return `Update`
};

const pl_related_update = /** @type {(inputs: {}) => string} */ () => {
	return `Aktualizacja`
};

/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "pl" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
const related_update = (inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_related_update()
	return pl_related_update()
};

/* eslint-disable */

const en_post_continuation_heading = /** @type {(inputs: {}) => string} */ () => {
	return `This post continues`
};

const pl_post_continuation_heading = /** @type {(inputs: {}) => string} */ () => {
	return `Ten post jest kontynuacją`
};

/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "pl" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
const post_continuation_heading = (inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_post_continuation_heading()
	return pl_post_continuation_heading()
};

/* eslint-disable */

const en_post_continuation_type = /** @type {(inputs: {}) => string} */ () => {
	return `previous post`
};

const pl_post_continuation_type = /** @type {(inputs: {}) => string} */ () => {
	return `poprzedni post`
};

/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "pl" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
const post_continuation_type = (inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_post_continuation_type()
	return pl_post_continuation_type()
};

/* eslint-disable */

const en_post_updates_heading = /** @type {(inputs: {}) => string} */ () => {
	return `Continuations & updates`
};

const pl_post_updates_heading = /** @type {(inputs: {}) => string} */ () => {
	return `Kontynuacje i aktualizacje`
};

/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "pl" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
const post_updates_heading = (inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_post_updates_heading()
	return pl_post_updates_heading()
};

function ContinuationNote($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { posts, locale } = $$props;
		let continuationPosts = posts.filter((p) => p.type === 'continuation');

		if (continuationPosts.length > 0) {
			$$renderer.push('<!--[-->');
			$$renderer.push(`<section class="continuation-note svelte-cp47zo"><h4 class="continuation-note__heading svelte-cp47zo">${escape_html(post_continuation_heading({ }))}</h4> <div class="continuation-note__list svelte-cp47zo"><!--[-->`);

			const each_array = ensure_array_like(continuationPosts);

			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let post = each_array[$$index];

				$$renderer.push(`<a${attr('href', post.url)} class="continuation-note__item svelte-cp47zo" data-astro-prefetch="hover"><div class="continuation-note__meta svelte-cp47zo"><span class="continuation-note__arrow svelte-cp47zo">↑</span> <span class="continuation-note__type svelte-cp47zo">${escape_html(post_continuation_type({ }))}</span></div> <div class="continuation-note__title svelte-cp47zo">${escape_html(post.title)}</div> <div class="continuation-note__date svelte-cp47zo">${escape_html(post.date)}</div></a>`);
			}

			$$renderer.push(`<!--]--></div></section>`);
		} else {
			$$renderer.push('<!--[!-->');
		}

		$$renderer.push(`<!--]-->`);
	});
}

function UpdateNote($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { posts, locale } = $$props;
		let updatablePosts = posts.filter((p) => p.type === 'continuation' || p.type === 'update');

		function arrowFor(type) {
			return type === 'update' ? '↻' : '→';
		}

		function labelFor(type, loc) {
			if (type === 'update') return related_update({ });

			return related_continuation({ });
		}

		function arrowColorFor(type) {
			return type === 'update' ? 'var(--sodium)' : 'var(--magenta)';
		}

		if (updatablePosts.length > 0) {
			$$renderer.push('<!--[-->');
			$$renderer.push(`<section class="update-note svelte-1bxq7oq"><h4 class="update-note__heading svelte-1bxq7oq">${escape_html(post_updates_heading({ }))}</h4> <div class="update-note__list svelte-1bxq7oq"><!--[-->`);

			const each_array = ensure_array_like(updatablePosts);

			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let post = each_array[$$index];

				$$renderer.push(`<a${attr('href', post.url)} class="update-note__item svelte-1bxq7oq" data-astro-prefetch="hover"><div class="update-note__meta svelte-1bxq7oq"><span class="update-note__arrow svelte-1bxq7oq"${attr_style(`color: ${stringify(arrowColorFor(post.type))}`)}>${escape_html(arrowFor(post.type))}</span> <span class="update-note__type svelte-1bxq7oq">${escape_html(labelFor(post.type))}</span></div> <div class="update-note__title svelte-1bxq7oq">${escape_html(post.title)}</div> <div class="update-note__date svelte-1bxq7oq">${escape_html(post.date)}</div></a>`);
			}

			$$renderer.push(`<!--]--></div></section>`);
		} else {
			$$renderer.push('<!--[!-->');
		}

		$$renderer.push(`<!--]-->`);
	});
}

export { ContinuationNote as C, UpdateNote as U };

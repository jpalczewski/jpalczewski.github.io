import { e as escape_html, a as ensure_array_like, c as attr, f as derived, d as attr_style, s as stringify } from './_at-astro-renderers-Bnfhkx0P.js';
import { g as getLocale } from './Layout-BcxzqCI3.js';
/* empty css                         */

/* eslint-disable */

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Related_ContinuationInputs */

const en_related_continuation = /** @type {(inputs: Related_ContinuationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continuation`)
};

const pl_related_continuation = /** @type {(inputs: Related_ContinuationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontynuacja`)
};

/**
* | output |
* | --- |
* | "Continuation" |
*
* @param {Related_ContinuationInputs} inputs
* @param {{ locale?: "en" | "pl" }} options
* @returns {LocalizedString}
*/
const related_continuation = /** @type {((inputs?: Related_ContinuationInputs, options?: { locale?: "en" | "pl" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Related_ContinuationInputs, { locale?: "en" | "pl" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_related_continuation()
	return pl_related_continuation()
});

/* eslint-disable */

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Related_UpdateInputs */

const en_related_update = /** @type {(inputs: Related_UpdateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Update`)
};

const pl_related_update = /** @type {(inputs: Related_UpdateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktualizacja`)
};

/**
* | output |
* | --- |
* | "Update" |
*
* @param {Related_UpdateInputs} inputs
* @param {{ locale?: "en" | "pl" }} options
* @returns {LocalizedString}
*/
const related_update = /** @type {((inputs?: Related_UpdateInputs, options?: { locale?: "en" | "pl" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Related_UpdateInputs, { locale?: "en" | "pl" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_related_update()
	return pl_related_update()
});

/* eslint-disable */

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Post_Continuation_HeadingInputs */

const en_post_continuation_heading = /** @type {(inputs: Post_Continuation_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This post continues`)
};

const pl_post_continuation_heading = /** @type {(inputs: Post_Continuation_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ten post jest kontynuacją`)
};

/**
* | output |
* | --- |
* | "This post continues" |
*
* @param {Post_Continuation_HeadingInputs} inputs
* @param {{ locale?: "en" | "pl" }} options
* @returns {LocalizedString}
*/
const post_continuation_heading = /** @type {((inputs?: Post_Continuation_HeadingInputs, options?: { locale?: "en" | "pl" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Post_Continuation_HeadingInputs, { locale?: "en" | "pl" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_post_continuation_heading()
	return pl_post_continuation_heading()
});

/* eslint-disable */

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Post_Continuation_TypeInputs */

const en_post_continuation_type = /** @type {(inputs: Post_Continuation_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`previous post`)
};

const pl_post_continuation_type = /** @type {(inputs: Post_Continuation_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`poprzedni post`)
};

/**
* | output |
* | --- |
* | "previous post" |
*
* @param {Post_Continuation_TypeInputs} inputs
* @param {{ locale?: "en" | "pl" }} options
* @returns {LocalizedString}
*/
const post_continuation_type = /** @type {((inputs?: Post_Continuation_TypeInputs, options?: { locale?: "en" | "pl" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Post_Continuation_TypeInputs, { locale?: "en" | "pl" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_post_continuation_type()
	return pl_post_continuation_type()
});

/* eslint-disable */

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Post_Updates_HeadingInputs */

const en_post_updates_heading = /** @type {(inputs: Post_Updates_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continuations & updates`)
};

const pl_post_updates_heading = /** @type {(inputs: Post_Updates_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontynuacje i aktualizacje`)
};

/**
* | output |
* | --- |
* | "Continuations & updates" |
*
* @param {Post_Updates_HeadingInputs} inputs
* @param {{ locale?: "en" | "pl" }} options
* @returns {LocalizedString}
*/
const post_updates_heading = /** @type {((inputs?: Post_Updates_HeadingInputs, options?: { locale?: "en" | "pl" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Post_Updates_HeadingInputs, { locale?: "en" | "pl" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_post_updates_heading()
	return pl_post_updates_heading()
});

function ContinuationNote($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { posts, locale } = $$props;
		let continuationPosts = derived(() => posts.filter((p) => p.type === 'continuation'));

		if (continuationPosts().length > 0) {
			$$renderer.push('<!--[0-->');
			$$renderer.push(`<section class="continuation-note svelte-cp47zo"><h4 class="continuation-note__heading svelte-cp47zo">${escape_html(post_continuation_heading(undefined, { locale }))}</h4> <div class="continuation-note__list svelte-cp47zo"><!--[-->`);

			const each_array = ensure_array_like(continuationPosts());

			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let post = each_array[$$index];

				$$renderer.push(`<a${attr('href', post.url)} class="continuation-note__item svelte-cp47zo" data-astro-prefetch="hover"><div class="continuation-note__meta svelte-cp47zo"><span class="continuation-note__arrow svelte-cp47zo">↑</span> <span class="continuation-note__type svelte-cp47zo">${escape_html(post_continuation_type(undefined, { locale }))}</span></div> <div class="continuation-note__title svelte-cp47zo">${escape_html(post.title)}</div> <div class="continuation-note__date svelte-cp47zo">${escape_html(post.date)}</div></a>`);
			}

			$$renderer.push(`<!--]--></div></section>`);
		} else {
			$$renderer.push('<!--[-1-->');
		}

		$$renderer.push(`<!--]-->`);
	});
}

function UpdateNote($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { posts, locale } = $$props;
		let updatablePosts = derived(() => posts.filter((p) => p.type === 'continuation' || p.type === 'update'));

		function arrowFor(type) {
			return type === 'update' ? '↻' : '→';
		}

		function labelFor(type, loc) {
			if (type === 'update') return related_update(undefined, { locale: loc });

			return related_continuation(undefined, { locale: loc });
		}

		function arrowColorFor(type) {
			return type === 'update' ? 'var(--sodium)' : 'var(--magenta)';
		}

		if (updatablePosts().length > 0) {
			$$renderer.push('<!--[0-->');
			$$renderer.push(`<section class="update-note svelte-1bxq7oq"><h4 class="update-note__heading svelte-1bxq7oq">${escape_html(post_updates_heading(undefined, { locale }))}</h4> <div class="update-note__list svelte-1bxq7oq"><!--[-->`);

			const each_array = ensure_array_like(updatablePosts());

			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let post = each_array[$$index];

				$$renderer.push(`<a${attr('href', post.url)} class="update-note__item svelte-1bxq7oq" data-astro-prefetch="hover"><div class="update-note__meta svelte-1bxq7oq"><span class="update-note__arrow svelte-1bxq7oq"${attr_style(`color: ${stringify(arrowColorFor(post.type))}`)}>${escape_html(arrowFor(post.type))}</span> <span class="update-note__type svelte-1bxq7oq">${escape_html(labelFor(post.type, locale))}</span></div> <div class="update-note__title svelte-1bxq7oq">${escape_html(post.title)}</div> <div class="update-note__date svelte-1bxq7oq">${escape_html(post.date)}</div></a>`);
			}

			$$renderer.push(`<!--]--></div></section>`);
		} else {
			$$renderer.push('<!--[-1-->');
		}

		$$renderer.push(`<!--]-->`);
	});
}

export { ContinuationNote as C, UpdateNote as U };

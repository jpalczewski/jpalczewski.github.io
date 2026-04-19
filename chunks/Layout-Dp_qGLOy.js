import { c as createAstro, a as createComponent, d as addAttribute, f as renderScript, b as renderTemplate, A as AstroError, M as MissingLocale, e as renderSlot, r as renderComponent, g as renderHead, u as unescapeHTML } from './astro-server-B4qyNKwf.js';
import 'piccolore';
/* empty css                        */
import 'clsx';
import { c as attr, b as attr_class, e as escape_html, a as ensure_array_like, f as derived, s as stringify } from './_at-astro-renderers-BLtlkU0u.js';
import { PL, GB } from 'country-flag-icons/string/3x2';
import { appendForwardSlash, joinPaths } from '@astrojs/internal-helpers/path';
import { g as getCollection, h as getPostsForLocale } from './content-BCsZ7oNt.js';

/**
 * @param {string} value
 */
function html(value) {
	var html = String(value ?? '');
	var open = '<!---->';
	return open + html + '<!---->';
}

const $$Astro$1 = createAstro("https://blog.palczew.ski");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/home/runner/work/karpaty/karpaty/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/runner/work/karpaty/karpaty/node_modules/astro/components/ClientRouter.astro", void 0);

function NavLink($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let {
			href,
			label,
			isActive = false,
			isMobile = false,
			pageType,
			onClick
		} = $$props;

		$$renderer.push(`<a${attr('href', href)}${attr_class('nav-link svelte-1ilmm7w', void 0, { 'active': isActive, 'mobile-nav-link': isMobile })} data-astro-prefetch="hover">${escape_html(label)}</a>`);
	});
}

function ThoughtsSubmenu($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		// Add isMobile prop
		let { sections, isOpen, currentLocale, isMobile = false } = $$props;
		let activeIndex = -1;

		$$renderer.push(`<div${attr_class('thoughts-submenu svelte-8rrox6', void 0, {
			'thoughts-submenu--open': // Focus management
			isOpen,
			'thoughts-submenu--mobile': isMobile
		})} role="menu"${attr('aria-hidden', !isOpen)}${attr('aria-label', currentLocale === 'pl' ? 'Podmenu myśli' : 'Thoughts submenu')}><div class="thoughts-submenu__content svelte-8rrox6"><!--[-->`);

		const each_array = ensure_array_like(sections);

		for (let sectionIndex = 0, $$length = each_array.length; sectionIndex < $$length; sectionIndex++) {
			let section = each_array[sectionIndex];

			$$renderer.push(`<div class="thoughts-submenu__section svelte-8rrox6"><h3 class="thoughts-submenu__section-title svelte-8rrox6">${escape_html(section.title)}</h3> <ul class="thoughts-submenu__list svelte-8rrox6" role="none"><!--[-->`);

			const each_array_1 = ensure_array_like(section.items);

			for (let itemIndex = 0, $$length = each_array_1.length; itemIndex < $$length; itemIndex++) {
				let item = each_array_1[itemIndex];
				const globalIndex = sections.slice(0, sectionIndex).reduce((acc, s) => acc + s.items.length, 0) + itemIndex;

				$$renderer.push(`<li role="none" class="svelte-8rrox6"><a${attr('href', item.href)}${attr_class('thoughts-submenu__link svelte-8rrox6', void 0, {
					'thoughts-submenu__link--active': globalIndex === activeIndex
				})} role="menuitem"${attr('tabindex', isOpen ? 0 : -1)} data-astro-prefetch="hover">`);

				if (item.icon) {
					$$renderer.push('<!--[0-->');
					$$renderer.push(`<span class="thoughts-submenu__icon svelte-8rrox6" aria-hidden="true">${escape_html(item.icon)}</span>`);
				} else {
					$$renderer.push('<!--[-1-->');
				}

				$$renderer.push(`<!--]--> <span class="thoughts-submenu__label svelte-8rrox6"><span class="thoughts-submenu__label-text svelte-8rrox6">${escape_html(item.label)}</span> `);

				if (item.description) {
					$$renderer.push('<!--[0-->');
					$$renderer.push(`<span class="thoughts-submenu__description svelte-8rrox6">${escape_html(item.description)}</span>`);
				} else {
					$$renderer.push('<!--[-1-->');
				}

				$$renderer.push(`<!--]--></span></a></li>`);
			}

			$$renderer.push(`<!--]--></ul></div>`);
		}

		$$renderer.push(`<!--]--></div></div>`);
	});
}

function NavDropdown($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let {
			href,
			label,
			isActive = false,
			isMobile = false,
			pageType,
			onClick,
			submenuSections = [],
			currentLocale
		} = $$props;

		let isSubmenuOpen = false;

		// Auto-expand submenu on mobile when item is active
		const hasSubmenu = derived(() => submenuSections.length > 0);

		$$renderer.push(`<div${attr_class('nav-dropdown svelte-1bbq5nz', void 0, { 'nav-dropdown--active': isSubmenuOpen })} role="presentation"><a${attr('href', href)}${attr_class('nav-link svelte-1bbq5nz', void 0, {
			'active': isActive,
			'mobile-nav-link': isMobile,
			'has-submenu': hasSubmenu()
		})}${attr('aria-expanded', hasSubmenu() ? isSubmenuOpen : undefined)}${attr('aria-haspopup', hasSubmenu() ? 'menu' : undefined)} data-astro-prefetch="hover"${attr('role', hasSubmenu() ? 'button' : 'link')}>${escape_html(label)} `);

		if (hasSubmenu()) {
			$$renderer.push('<!--[0-->');
			$$renderer.push(`<span class="nav-link__icon svelte-1bbq5nz" aria-hidden="true">${escape_html('▼')}</span>`);
		} else {
			$$renderer.push('<!--[-1-->');
		}

		$$renderer.push(`<!--]--></a> `);

		if (hasSubmenu()) {
			$$renderer.push('<!--[0-->');

			ThoughtsSubmenu($$renderer, {
				sections: submenuSections,
				isOpen: isSubmenuOpen,
				currentLocale,
				isMobile
			});
		} else {
			$$renderer.push('<!--[-1-->');
		}

		$$renderer.push(`<!--]--></div>`);
	});
}

function MenuButton($$renderer, $$props) {
	let { isOpen, ariaLabel } = $$props;

	$$renderer.push(`<button${attr_class('mobile-menu-button mobile-only svelte-1q78le8', void 0, { 'open': isOpen })}${attr('aria-label', ariaLabel)}${attr('aria-expanded', isOpen)}><span${attr_class('hamburger svelte-1q78le8', void 0, { 'open': isOpen })}></span></button>`);
}

function shouldAppendForwardSlash(trailingSlash, buildFormat) {
  switch (trailingSlash) {
    case "always":
      return true;
    case "never":
      return false;
    case "ignore": {
      switch (buildFormat) {
        case "directory":
          return true;
        case "preserve":
        case "file":
          return false;
      }
    }
  }
}

function getLocaleRelativeUrl({
  locale,
  base,
  locales: _locales,
  trailingSlash,
  format,
  path,
  prependWith,
  normalizeLocale = true,
  strategy = "pathname-prefix-other-locales",
  defaultLocale
}) {
  const codeToUse = peekCodePathToUse(_locales, locale);
  if (!codeToUse) {
    throw new AstroError({
      ...MissingLocale,
      message: MissingLocale.message(locale)
    });
  }
  const pathsToJoin = [base, prependWith];
  const normalizedLocale = normalizeLocale ? normalizeTheLocale(codeToUse) : codeToUse;
  if (strategy === "pathname-prefix-always" || strategy === "pathname-prefix-always-no-redirect" || strategy === "domains-prefix-always" || strategy === "domains-prefix-always-no-redirect") {
    pathsToJoin.push(normalizedLocale);
  } else if (locale !== defaultLocale) {
    pathsToJoin.push(normalizedLocale);
  }
  pathsToJoin.push(path);
  let relativePath;
  if (shouldAppendForwardSlash(trailingSlash, format)) {
    relativePath = appendForwardSlash(joinPaths(...pathsToJoin));
  } else {
    relativePath = joinPaths(...pathsToJoin);
  }
  if (relativePath === "") {
    return "/";
  }
  return relativePath;
}
function normalizeTheLocale(locale) {
  return locale.replaceAll("_", "-").toLowerCase();
}
function peekCodePathToUse(locales, locale) {
  for (const loopLocale of locales) {
    if (typeof loopLocale === "string") {
      if (loopLocale === locale) {
        return loopLocale;
      }
    } else {
      for (const code of loopLocale.codes) {
        if (code === locale) {
          return loopLocale.path;
        }
      }
    }
  }
  return void 0;
}

function toRoutingStrategy(routing, domains) {
  let strategy;
  const hasDomains = domains ? Object.keys(domains).length > 0 : false;
  if (routing === "manual") {
    strategy = "manual";
  } else {
    if (!hasDomains) {
      {
        {
          strategy = "pathname-prefix-always";
        }
      }
    } else {
      {
        {
          strategy = "domains-prefix-always";
        }
      }
    }
  }
  return strategy;
}

var define_ASTRO_INTERNAL_I18N_CONFIG_default = { format: "directory", trailingSlash: "ignore", i18n: { defaultLocale: "en", locales: ["pl", "en"], routing: { } }};
const { trailingSlash, format, i18n} = (
  // @ts-expect-error
  define_ASTRO_INTERNAL_I18N_CONFIG_default
);
const { defaultLocale, locales: locales$1, domains, routing } = i18n;
const base = "/";
let strategy$1 = toRoutingStrategy(routing, domains);
const getRelativeLocaleUrl = (locale, path, options) => getLocaleRelativeUrl({
  locale,
  path,
  base,
  trailingSlash,
  format,
  defaultLocale,
  locales: locales$1,
  strategy: strategy$1,
  ...options
});

function FlagIcon($$renderer, $$props) {
	let { flagSvg, languageName, isActive = false } = $$props;

	$$renderer.push(`<div${attr_class('flag-container svelte-1vcjyng', void 0, { 'active': isActive })}>${html(flagSvg)} <span class="tooltip svelte-1vcjyng">${escape_html(languageName)}</span></div>`);
}

function LanguageSwitcher($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { currentPath, currentLocale } = $$props;

		// Language configuration
		const languages = [
			{ code: 'pl', name: 'Polski', flag: PL, countryCode: 'PL' },
			{ code: 'en', name: 'English', flag: GB, countryCode: 'GB' }
		];

		function stripLocalePrefix(path) {
			let normalized = path ?? '';

			if (normalized.startsWith('/')) {
				normalized = normalized.slice(1);
			}

			const segments = normalized.split('/');

			if (segments[0] === 'en' || segments[0] === 'pl') {
				segments.shift();
			}

			return segments.join('/');
		}

		function getLocalizedPath(lang) {
			const pathWithoutLocale = stripLocalePrefix(currentPath);

			return getRelativeLocaleUrl(lang, pathWithoutLocale);
		}

		$$renderer.push(`<div class="language-switcher svelte-beuc1i"><!--[-->`);

		const each_array = ensure_array_like(languages);

		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let lang = each_array[$$index];

			$$renderer.push(`<a${attr('href', getLocalizedPath(lang.code))} class="flag-link svelte-beuc1i"${attr('title', lang.name)}${attr('aria-label', `Switch to ${lang.name}`)} data-astro-prefetch="hover">`);

			FlagIcon($$renderer, {
				countryCode: lang.countryCode,
				flagSvg: lang.flag,
				languageName: lang.name,
				isActive: currentLocale === lang.code
			});

			$$renderer.push(`<!----></a>`);
		}

		$$renderer.push(`<!--]--></div>`);
	});
}

function Navigation($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		// If true, submenu only shows on mobile
		let {
			items,
			currentPath,
			currentLocale,
			logoText,
			logoHref,
			mobileMenuLabel
		} = $$props;

		let isMobileMenuOpen = false;

		function closeMobileMenu() {
			isMobileMenuOpen = false;
		}

		$$renderer.push(`<nav class="nav svelte-bg3jyx"><div class="nav-container svelte-bg3jyx"><a${attr('href', logoHref)} class="logo svelte-bg3jyx" data-astro-prefetch="hover"><span>${escape_html(logoText)}</span></a> <ul class="nav-links desktop-only svelte-bg3jyx"><!--[-->`);

		const each_array = ensure_array_like(items);

		for (let index = 0, $$length = each_array.length; index < $$length; index++) {
			let item = each_array[index];

			$$renderer.push(`<li>`);

			if (item.submenuSections && item.submenuSections.length > 0 && !item.mobileOnly) {
				$$renderer.push('<!--[0-->');

				NavDropdown($$renderer, {
					href: item.href,
					label: item.label,
					isActive: currentPath === item.href || currentPath.startsWith(item.href + '/'),
					pageType: index === 0 ? 'home' : index === 1 ? 'about' : 'thoughts',
					submenuSections: item.submenuSections,
					currentLocale
				});
			} else {
				$$renderer.push('<!--[-1-->');

				NavLink($$renderer, {
					href: item.href,
					label: item.label,
					isActive: currentPath === item.href,
					pageType: index === 0 ? 'home' : index === 1 ? 'about' : 'thoughts'
				});
			}

			$$renderer.push(`<!--]--></li>`);
		}

		$$renderer.push(`<!--]--></ul> <div class="language-switcher-wrapper svelte-bg3jyx">`);
		LanguageSwitcher($$renderer, { currentLocale, currentPath });
		$$renderer.push(`<!----></div> `);

		MenuButton($$renderer, {
			isOpen: isMobileMenuOpen,
			ariaLabel: mobileMenuLabel
		});

		$$renderer.push(`<!----></div> <ul${attr_class('nav-links mobile-only svelte-bg3jyx', void 0, { 'open': isMobileMenuOpen })}><!--[-->`);

		const each_array_1 = ensure_array_like(items);

		for (let index = 0, $$length = each_array_1.length; index < $$length; index++) {
			let item = each_array_1[index];

			$$renderer.push(`<li class="svelte-bg3jyx">`);

			if (item.submenuSections && item.submenuSections.length > 0) {
				$$renderer.push('<!--[0-->');

				NavDropdown($$renderer, {
					href: item.href,
					label: item.label,
					isActive: currentPath === item.href || currentPath.startsWith(item.href + '/'),
					isMobile: true,
					pageType: index === 0 ? 'home' : index === 1 ? 'about' : 'thoughts',
					submenuSections: item.submenuSections,
					onClick: closeMobileMenu,
					currentLocale
				});
			} else {
				$$renderer.push('<!--[-1-->');

				NavLink($$renderer, {
					href: item.href,
					label: item.label,
					isActive: currentPath === item.href,
					isMobile: true,
					onClick: closeMobileMenu
				});
			}

			$$renderer.push(`<!--]--></li>`);
		}

		$$renderer.push(`<!--]--> <li class="mobile-language-switcher svelte-bg3jyx">`);
		LanguageSwitcher($$renderer, { currentLocale, currentPath });
		$$renderer.push(`<!----></li></ul></nav>`);
	});
}

function SecondaryNavDropdown($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { label, placeholder = '', options} = $$props;
		let selectedValue = '';

		function handleChange(event) {
			const target = event.target;
			const value = target.value;
			const option = options.find((opt) => opt.value === value);

			if (option?.href) {
				window.location.href = option.href;
			}
		}

		$$renderer.push(`<div class="secondary-nav-dropdown svelte-1a6c5zd"><label${attr('for', `dropdown-${stringify(label)}`)} class="secondary-nav-dropdown__label svelte-1a6c5zd">${escape_html(label)}</label> `);

		$$renderer.select(
			{
				id: `dropdown-${stringify(label)}`,
				class: 'secondary-nav-dropdown__select',
				value: selectedValue,
				onchange: handleChange
			},
			($$renderer) => {
				if (placeholder) {
					$$renderer.push('<!--[0-->');

					$$renderer.option(
						{ value: '', disabled: true, selected: true, class: '' },
						($$renderer) => {
							$$renderer.push(`${escape_html(placeholder)}`);
						},
						'svelte-1a6c5zd'
					);
				} else {
					$$renderer.push('<!--[-1-->');
				}

				$$renderer.push(`<!--]--><!--[-->`);

				const each_array = ensure_array_like(options);

				for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
					let option = each_array[$$index];

					$$renderer.option(
						{ value: option.value, class: '' },
						($$renderer) => {
							$$renderer.push(`${escape_html(option.label)}`);
						},
						'svelte-1a6c5zd'
					);
				}

				$$renderer.push(`<!--]-->`);
			},
			'svelte-1a6c5zd'
		);

		$$renderer.push(`</div>`);
	});
}

function SecondaryNav($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let {
			links = [],
			groups = [],
			dropdowns = [],
			currentPath,
			centered = true,
			title
		} = $$props;

		function isActive(href, exact = false) {
			// Exact match
			if (currentPath === href) return true;

			// Handle hash links for same-page navigation
			if (href.includes('#')) {
				const [path, hash] = href.split('#');

				if (path === currentPath && window.location.hash === `#${hash}`) return true;
			}

			// If exact match is required, don't check parent paths
			if (exact) return false;

			// Parent path match - avoids matching '/' as a parent of every path
			if (href.length > 1 && currentPath.startsWith(href + '/')) return true;

			return false;
		}

		$$renderer.push(`<nav${attr_class('secondary-nav svelte-mu61z8', void 0, { 'secondary-nav--centered': centered })}><div class="secondary-nav__container svelte-mu61z8">`);

		if (title) {
			$$renderer.push('<!--[0-->');
			$$renderer.push(`<h2 class="secondary-nav__title svelte-mu61z8">${escape_html(title)}</h2>`);
		} else {
			$$renderer.push('<!--[-1-->');
		}

		$$renderer.push(`<!--]--> `);

		if (links.length > 0) {
			$$renderer.push('<!--[0-->');
			$$renderer.push(`<div class="secondary-nav__links svelte-mu61z8"><!--[-->`);

			const each_array = ensure_array_like(links);

			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let link = each_array[$$index];

				$$renderer.push(`<a${attr('href', link.href)}${attr_class('secondary-nav__link svelte-mu61z8', void 0, {
					'secondary-nav__link--active': link.active ?? isActive(link.href, link.exact)
				})}>`);

				if (link.icon) {
					$$renderer.push('<!--[0-->');
					$$renderer.push(`<span class="secondary-nav__icon svelte-mu61z8">${escape_html(link.icon)}</span>`);
				} else {
					$$renderer.push('<!--[-1-->');
				}

				$$renderer.push(`<!--]--> ${escape_html(link.label)}</a>`);
			}

			$$renderer.push(`<!--]--></div>`);
		} else {
			$$renderer.push('<!--[-1-->');
		}

		$$renderer.push(`<!--]--> `);

		if (dropdowns.length > 0) {
			$$renderer.push('<!--[0-->');
			$$renderer.push(`<div class="secondary-nav__dropdowns svelte-mu61z8"><!--[-->`);

			const each_array_1 = ensure_array_like(dropdowns);

			for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
				let dropdown = each_array_1[$$index_1];

				SecondaryNavDropdown($$renderer, {
					label: dropdown.label,
					placeholder: dropdown.placeholder,
					options: dropdown.options});
			}

			$$renderer.push(`<!--]--></div>`);
		} else {
			$$renderer.push('<!--[-1-->');
		}

		$$renderer.push(`<!--]--> `);

		if (groups.length > 0) {
			$$renderer.push('<!--[0-->');
			$$renderer.push(`<!--[-->`);

			const each_array_2 = ensure_array_like(groups);

			for (let $$index_3 = 0, $$length = each_array_2.length; $$index_3 < $$length; $$index_3++) {
				let group = each_array_2[$$index_3];

				$$renderer.push(`<div class="secondary-nav__group svelte-mu61z8"><span class="secondary-nav__group-label svelte-mu61z8">${escape_html(group.label)}</span> <div class="secondary-nav__group-links svelte-mu61z8"><!--[-->`);

				const each_array_3 = ensure_array_like(group.links);

				for (let $$index_2 = 0, $$length = each_array_3.length; $$index_2 < $$length; $$index_2++) {
					let link = each_array_3[$$index_2];

					$$renderer.push(`<a${attr('href', link.href)}${attr_class('secondary-nav__group-link svelte-mu61z8', void 0, {
						'secondary-nav__group-link--active': link.active ?? isActive(link.href, link.exact)
					})}>`);

					if (link.icon) {
						$$renderer.push('<!--[0-->');
						$$renderer.push(`<span class="secondary-nav__icon svelte-mu61z8">${escape_html(link.icon)}</span>`);
					} else {
						$$renderer.push('<!--[-1-->');
					}

					$$renderer.push(`<!--]--> ${escape_html(link.label)}</a>`);
				}

				$$renderer.push(`<!--]--></div></div>`);
			}

			$$renderer.push(`<!--]-->`);
		} else {
			$$renderer.push('<!--[-1-->');
		}

		$$renderer.push(`<!--]--></div></nav>`);
	});
}

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "ENABLE_ABOUT": "true", "MODE": "production", "PROD": true, "SITE": "https://blog.palczew.ski", "SSR": true};
const URLPattern = {};
const baseLocale = "en";
const locales = (
  /** @type {const} */
  ["en", "pl"]
);
const strategy = [
  "url",
  "baseLocale"
];
const routeStrategies = [];
let cachedRouteStrategyUrl;
let cachedRouteStrategy;
function findMatchingRouteStrategy(url) {
  if (routeStrategies.length === 0) {
    return void 0;
  }
  const urlString = typeof url === "string" ? url : url.href;
  if (cachedRouteStrategyUrl === urlString) {
    return cachedRouteStrategy;
  }
  const urlObject = new URL(urlString, "http://dummy.com");
  let match;
  for (const routeStrategy of routeStrategies) {
    const pattern = new URLPattern(routeStrategy.match, urlObject.href);
    if (pattern.exec(urlObject.href)) {
      match = routeStrategy;
      break;
    }
  }
  cachedRouteStrategyUrl = urlString;
  cachedRouteStrategy = match;
  return match;
}
function getStrategyForUrl(url) {
  const routeStrategy = findMatchingRouteStrategy(url);
  if (routeStrategy && routeStrategy.exclude !== true && Array.isArray(routeStrategy.strategy)) {
    return routeStrategy.strategy;
  }
  return strategy;
}
const isServer = Object.assign(__vite_import_meta_env__, { _: process.env._, LANG: process.env.LANG })?.SSR ?? typeof window === "undefined";
globalThis.__paraglide = /** @type {any} */
globalThis.__paraglide ?? {};
globalThis.__paraglide.ssr = /** @type {any} */
globalThis.__paraglide.ssr ?? {};
let localeInitiallySet = false;
let getLocale = () => {
  let strategyToUse = strategy;
  if (!isServer && typeof window !== "undefined" && window.location?.href) {
    strategyToUse = getStrategyForUrl(window.location.href);
  }
  const resolved = resolveLocaleWithStrategies(strategyToUse, typeof window !== "undefined" ? window.location?.href : void 0);
  if (resolved) {
    if (!localeInitiallySet) {
      localeInitiallySet = true;
      setLocale(resolved, { reload: false });
    }
    return resolved;
  }
  throw new Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function resolveLocaleWithStrategies(strategyToUse, urlForUrlStrategy) {
  let locale;
  for (const strat of strategyToUse) {
    if (strat === "baseLocale") {
      locale = baseLocale;
    } else if (strat === "url" && !isServer && typeof urlForUrlStrategy === "string") {
      locale = extractLocaleFromUrl(urlForUrlStrategy);
    } else if (isCustomStrategy(strat) && customClientStrategies.has(strat)) {
      const handler = customClientStrategies.get(strat);
      if (handler) {
        const result = handler.getLocale();
        if (result instanceof Promise) {
          continue;
        }
        if (result !== void 0) {
          return assertIsLocale(result);
        }
      }
    }
    const matchedLocale = toLocale(locale);
    if (matchedLocale) {
      return matchedLocale;
    }
  }
  return void 0;
}
const navigateOrReload = (newLocation) => {
  if (newLocation) {
    window.location.href = newLocation;
  } else {
    window.location.reload();
  }
};
let setLocale = (newLocale, options) => {
  const optionsWithDefaults = {
    reload: true,
    ...options
  };
  let currentLocale;
  try {
    currentLocale = getLocale();
  } catch {
  }
  const customSetLocalePromises = [];
  let newLocation = void 0;
  let strategyToUse = strategy;
  if (!isServer && typeof window !== "undefined" && window.location?.href) {
    strategyToUse = getStrategyForUrl(window.location.href);
  }
  for (const strat of strategyToUse) {
    if (strat === "baseLocale") {
      continue;
    } else if (strat === "url" && typeof window !== "undefined") {
      newLocation = localizeUrl(window.location.href, {
        locale: newLocale
      }).href;
    } else if (isCustomStrategy(strat) && customClientStrategies.has(strat)) {
      const handler = customClientStrategies.get(strat);
      if (handler) {
        let result = handler.setLocale(newLocale);
        if (result instanceof Promise) {
          result = result.catch((error) => {
            throw new Error(`Custom strategy "${strat}" setLocale failed.`, {
              cause: error
            });
          });
          customSetLocalePromises.push(result);
        }
      }
    }
  }
  const runReload = () => {
    if (!isServer && optionsWithDefaults.reload && window.location && newLocale !== currentLocale) {
      navigateOrReload(newLocation);
    }
  };
  if (customSetLocalePromises.length) {
    return Promise.all(customSetLocalePromises).then(() => {
      runReload();
    });
  }
  runReload();
  return;
};
let getUrlOrigin = () => {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  return "http://fallback.com";
};
function toLocale(value) {
  if (typeof value !== "string") {
    return void 0;
  }
  const lowerValue = value.toLowerCase();
  for (const locale of locales) {
    if (locale.toLowerCase() === lowerValue) {
      return locale;
    }
  }
  return void 0;
}
function assertIsLocale(input) {
  const locale = toLocale(input);
  if (locale)
    return locale;
  throw new Error(`Invalid locale: ${input}. Expected one of: ${locales.join(", ")}`);
}
let cachedUrl;
let cachedLocale;
function extractLocaleFromUrl(url) {
  const urlString = typeof url === "string" ? url : url.href;
  if (cachedUrl === urlString) {
    return cachedLocale;
  }
  let result;
  {
    result = defaultUrlPatternExtractLocale(url);
  }
  cachedUrl = urlString;
  cachedLocale = result;
  return result;
}
function defaultUrlPatternExtractLocale(url) {
  const urlObj = new URL(url, "http://dummy.com");
  const pathSegments = urlObj.pathname.split("/").filter(Boolean);
  return toLocale(pathSegments[0]) || baseLocale;
}
function localizeUrl(url, options) {
  const targetLocale = options?.locale ? assertIsLocale(options?.locale) : getLocale();
  {
    return localizeUrlDefaultPattern(url, targetLocale);
  }
}
function localizeUrlDefaultPattern(url, locale) {
  const urlObj = typeof url === "string" ? new URL(url, getUrlOrigin()) : new URL(url);
  const currentLocale = extractLocaleFromUrl(urlObj);
  if (currentLocale === locale) {
    return urlObj;
  }
  const pathSegments = urlObj.pathname.split("/").filter(Boolean);
  if (pathSegments.length > 0 && toLocale(pathSegments[0])) {
    pathSegments.shift();
  }
  if (locale === baseLocale) {
    urlObj.pathname = "/" + pathSegments.join("/");
  } else {
    urlObj.pathname = "/" + locale + "/" + pathSegments.join("/");
  }
  return urlObj;
}
const customClientStrategies = /* @__PURE__ */ new Map();
function isCustomStrategy(strategy2) {
  return typeof strategy2 === "string" && /^custom-[A-Za-z0-9_-]+$/.test(strategy2);
}

/* eslint-disable */

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Header_HomeInputs */

const en_header_home = /** @type {(inputs: Header_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Home`)
};

const pl_header_home = /** @type {(inputs: Header_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Strona główna`)
};

/**
* | output |
* | --- |
* | "Home" |
*
* @param {Header_HomeInputs} inputs
* @param {{ locale?: "en" | "pl" }} options
* @returns {LocalizedString}
*/
const header_home = /** @type {((inputs?: Header_HomeInputs, options?: { locale?: "en" | "pl" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Header_HomeInputs, { locale?: "en" | "pl" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_header_home()
	return pl_header_home()
});

/* eslint-disable */

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Header_AboutInputs */

const en_header_about = /** @type {(inputs: Header_AboutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`About Me`)
};

const pl_header_about = /** @type {(inputs: Header_AboutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O mnie`)
};

/**
* | output |
* | --- |
* | "About Me" |
*
* @param {Header_AboutInputs} inputs
* @param {{ locale?: "en" | "pl" }} options
* @returns {LocalizedString}
*/
const header_about = /** @type {((inputs?: Header_AboutInputs, options?: { locale?: "en" | "pl" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Header_AboutInputs, { locale?: "en" | "pl" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_header_about()
	return pl_header_about()
});

/* eslint-disable */

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Header_ThoughtsInputs */

const en_header_thoughts = /** @type {(inputs: Header_ThoughtsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Thoughts`)
};

const pl_header_thoughts = /** @type {(inputs: Header_ThoughtsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Myśli`)
};

/**
* | output |
* | --- |
* | "Thoughts" |
*
* @param {Header_ThoughtsInputs} inputs
* @param {{ locale?: "en" | "pl" }} options
* @returns {LocalizedString}
*/
const header_thoughts = /** @type {((inputs?: Header_ThoughtsInputs, options?: { locale?: "en" | "pl" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Header_ThoughtsInputs, { locale?: "en" | "pl" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_header_thoughts()
	return pl_header_thoughts()
});

/* eslint-disable */

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Header_Logo_AltInputs */

const en_header_logo_alt = /** @type {(inputs: Header_Logo_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Karpaty`)
};

const pl_header_logo_alt = /** @type {(inputs: Header_Logo_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Karpaty`)
};

/**
* | output |
* | --- |
* | "Karpaty" |
*
* @param {Header_Logo_AltInputs} inputs
* @param {{ locale?: "en" | "pl" }} options
* @returns {LocalizedString}
*/
const header_logo_alt = /** @type {((inputs?: Header_Logo_AltInputs, options?: { locale?: "en" | "pl" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Header_Logo_AltInputs, { locale?: "en" | "pl" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_header_logo_alt()
	return pl_header_logo_alt()
});

/* eslint-disable */

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Header_Mobile_Menu_ToggleInputs */

const en_header_mobile_menu_toggle = /** @type {(inputs: Header_Mobile_Menu_ToggleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toggle mobile menu`)
};

const pl_header_mobile_menu_toggle = /** @type {(inputs: Header_Mobile_Menu_ToggleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przełącz menu mobilne`)
};

/**
* | output |
* | --- |
* | "Toggle mobile menu" |
*
* @param {Header_Mobile_Menu_ToggleInputs} inputs
* @param {{ locale?: "en" | "pl" }} options
* @returns {LocalizedString}
*/
const header_mobile_menu_toggle = /** @type {((inputs?: Header_Mobile_Menu_ToggleInputs, options?: { locale?: "en" | "pl" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Header_Mobile_Menu_ToggleInputs, { locale?: "en" | "pl" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_header_mobile_menu_toggle()
	return pl_header_mobile_menu_toggle()
});

/* eslint-disable */

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Submenu_Tags_MapInputs */

const en_submenu_tags_map = /** @type {(inputs: Submenu_Tags_MapInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tags Map`)
};

const pl_submenu_tags_map = /** @type {(inputs: Submenu_Tags_MapInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mapa tagów`)
};

/**
* | output |
* | --- |
* | "Tags Map" |
*
* @param {Submenu_Tags_MapInputs} inputs
* @param {{ locale?: "en" | "pl" }} options
* @returns {LocalizedString}
*/
const submenu_tags_map = /** @type {((inputs?: Submenu_Tags_MapInputs, options?: { locale?: "en" | "pl" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Submenu_Tags_MapInputs, { locale?: "en" | "pl" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_submenu_tags_map()
	return pl_submenu_tags_map()
});

/* eslint-disable */

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Submenu_ArchiveInputs */

const en_submenu_archive = /** @type {(inputs: Submenu_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archive`)
};

const pl_submenu_archive = /** @type {(inputs: Submenu_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archiwum`)
};

/**
* | output |
* | --- |
* | "Archive" |
*
* @param {Submenu_ArchiveInputs} inputs
* @param {{ locale?: "en" | "pl" }} options
* @returns {LocalizedString}
*/
const submenu_archive = /** @type {((inputs?: Submenu_ArchiveInputs, options?: { locale?: "en" | "pl" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Submenu_ArchiveInputs, { locale?: "en" | "pl" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_submenu_archive()
	return pl_submenu_archive()
});

/* eslint-disable */

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Submenu_All_PostsInputs */

const en_submenu_all_posts = /** @type {(inputs: Submenu_All_PostsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All Posts`)
};

const pl_submenu_all_posts = /** @type {(inputs: Submenu_All_PostsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystkie posty`)
};

/**
* | output |
* | --- |
* | "All Posts" |
*
* @param {Submenu_All_PostsInputs} inputs
* @param {{ locale?: "en" | "pl" }} options
* @returns {LocalizedString}
*/
const submenu_all_posts = /** @type {((inputs?: Submenu_All_PostsInputs, options?: { locale?: "en" | "pl" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Submenu_All_PostsInputs, { locale?: "en" | "pl" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_submenu_all_posts()
	return pl_submenu_all_posts()
});

/* eslint-disable */

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Submenu_BrowseInputs */

const en_submenu_browse = /** @type {(inputs: Submenu_BrowseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Browse`)
};

const pl_submenu_browse = /** @type {(inputs: Submenu_BrowseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przeglądaj`)
};

/**
* | output |
* | --- |
* | "Browse" |
*
* @param {Submenu_BrowseInputs} inputs
* @param {{ locale?: "en" | "pl" }} options
* @returns {LocalizedString}
*/
const submenu_browse = /** @type {((inputs?: Submenu_BrowseInputs, options?: { locale?: "en" | "pl" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Submenu_BrowseInputs, { locale?: "en" | "pl" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_submenu_browse()
	return pl_submenu_browse()
});

/* eslint-disable */

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Submenu_All_Posts_DescInputs */

const en_submenu_all_posts_desc = /** @type {(inputs: Submenu_All_Posts_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`View all posts`)
};

const pl_submenu_all_posts_desc = /** @type {(inputs: Submenu_All_Posts_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zobacz wszystkie wpisy`)
};

/**
* | output |
* | --- |
* | "View all posts" |
*
* @param {Submenu_All_Posts_DescInputs} inputs
* @param {{ locale?: "en" | "pl" }} options
* @returns {LocalizedString}
*/
const submenu_all_posts_desc = /** @type {((inputs?: Submenu_All_Posts_DescInputs, options?: { locale?: "en" | "pl" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Submenu_All_Posts_DescInputs, { locale?: "en" | "pl" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_submenu_all_posts_desc()
	return pl_submenu_all_posts_desc()
});

/* eslint-disable */

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Submenu_Tags_Map_DescInputs */

const en_submenu_tags_map_desc = /** @type {(inputs: Submenu_Tags_Map_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Browse all tags`)
};

const pl_submenu_tags_map_desc = /** @type {(inputs: Submenu_Tags_Map_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przeglądaj wszystkie tagi`)
};

/**
* | output |
* | --- |
* | "Browse all tags" |
*
* @param {Submenu_Tags_Map_DescInputs} inputs
* @param {{ locale?: "en" | "pl" }} options
* @returns {LocalizedString}
*/
const submenu_tags_map_desc = /** @type {((inputs?: Submenu_Tags_Map_DescInputs, options?: { locale?: "en" | "pl" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Submenu_Tags_Map_DescInputs, { locale?: "en" | "pl" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_submenu_tags_map_desc()
	return pl_submenu_tags_map_desc()
});

/* eslint-disable */

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Home_TaglineInputs */

const en_home_tagline = /** @type {(inputs: Home_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`a collection of thoughts, essays and service notes`)
};

const pl_home_tagline = /** @type {(inputs: Home_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`kolekcja myśli, esejów i notatek serwisowych`)
};

/**
* | output |
* | --- |
* | "a collection of thoughts, essays and service notes" |
*
* @param {Home_TaglineInputs} inputs
* @param {{ locale?: "en" | "pl" }} options
* @returns {LocalizedString}
*/
const home_tagline = /** @type {((inputs?: Home_TaglineInputs, options?: { locale?: "en" | "pl" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_TaglineInputs, { locale?: "en" | "pl" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_tagline()
	return pl_home_tagline()
});

/* eslint-disable */

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Home_Nav_StreamInputs */

const en_home_nav_stream = /** @type {(inputs: Home_Nav_StreamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`stream`)
};

const pl_home_nav_stream = /** @type {(inputs: Home_Nav_StreamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`strumień`)
};

/**
* | output |
* | --- |
* | "stream" |
*
* @param {Home_Nav_StreamInputs} inputs
* @param {{ locale?: "en" | "pl" }} options
* @returns {LocalizedString}
*/
const home_nav_stream = /** @type {((inputs?: Home_Nav_StreamInputs, options?: { locale?: "en" | "pl" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_Nav_StreamInputs, { locale?: "en" | "pl" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_nav_stream()
	return pl_home_nav_stream()
});

/* eslint-disable */

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Home_Nav_LongformInputs */

const en_home_nav_longform = /** @type {(inputs: Home_Nav_LongformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`thoughts`)
};

const pl_home_nav_longform = /** @type {(inputs: Home_Nav_LongformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`myśli`)
};

/**
* | output |
* | --- |
* | "thoughts" |
*
* @param {Home_Nav_LongformInputs} inputs
* @param {{ locale?: "en" | "pl" }} options
* @returns {LocalizedString}
*/
const home_nav_longform = /** @type {((inputs?: Home_Nav_LongformInputs, options?: { locale?: "en" | "pl" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_Nav_LongformInputs, { locale?: "en" | "pl" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_nav_longform()
	return pl_home_nav_longform()
});

function Header($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let {
			currentPath,
			currentLocale,
			thoughtsYears = [],
			secondaryNavConfig
		} = $$props;

		// URL helper to reduce repetition
		let urls = derived(() => ({
			home: getRelativeLocaleUrl(currentLocale, ''),
			about: getRelativeLocaleUrl(currentLocale, 'about'),
			thoughts: getRelativeLocaleUrl(currentLocale, 'thoughts'),
			tagsMap: getRelativeLocaleUrl(currentLocale, 'thoughts/tags-map'),
			year: (y) => getRelativeLocaleUrl(currentLocale, `thoughts/year/${y}`)
		}));

		// Thoughts submenu for mobile menu
		let thoughtsSubmenu = derived(() => [
			{
				title: submenu_browse({}, { locale: currentLocale }),
				items: [
					{
						label: submenu_all_posts({}, { locale: currentLocale }),
						href: urls().thoughts,
						description: submenu_all_posts_desc({}, { locale: currentLocale })
					},

					{
						label: submenu_tags_map({}, { locale: currentLocale }),
						href: urls().tagsMap,
						description: submenu_tags_map_desc({}, { locale: currentLocale })
					}
				]
			},

			...thoughtsYears.length > 0
				? [
					{
						title: submenu_archive({}, { locale: currentLocale }),
						items: thoughtsYears.map((year) => ({ label: year.toString(), href: urls().year(year) }))
					}
				]
				: []
		]);

		// Navigation items configuration
		// Note: submenuSections for thoughts are only shown in mobile menu - desktop uses dedicated secondary nav
		let navigationItems = derived(() => [
			{
				href: urls().home,
				label: header_home({}, { locale: currentLocale })
			},

			...[
					{
						href: urls().about,
						label: header_about({}, { locale: currentLocale })
					}
				]
				,

			{
				href: urls().thoughts,
				label: header_thoughts({}, { locale: currentLocale }),
				submenuSections: thoughtsSubmenu(),
				mobileOnly: true // Submenu only shows on mobile
			}
		]);

		let lightFragments = derived(() => [
			{
				className: 'light-fragment--home',
				active: currentPath === urls().home
			},

			...[
					{
						className: 'light-fragment--about',
						active: currentPath === urls().about
					}
				]
				,

			{
				className: 'light-fragment--thoughts',
				active: currentPath === urls().thoughts
			}
		]);

		let logoText = derived(() => header_logo_alt({}, { locale: currentLocale }));
		let logoHref = derived(() => urls().home);
		let mobileMenuLabel = derived(() => header_mobile_menu_toggle({}, { locale: currentLocale }));

		$$renderer.push(`<header class="header svelte-4b3o1e">`);

		Navigation($$renderer, {
			items: navigationItems(),
			currentPath,
			currentLocale,
			logoText: logoText(),
			logoHref: logoHref(),
			mobileMenuLabel: mobileMenuLabel()
		});

		$$renderer.push(`<!----> `);

		if (secondaryNavConfig) {
			$$renderer.push('<!--[0-->');

			SecondaryNav($$renderer, {
				links: secondaryNavConfig.links,
				groups: secondaryNavConfig.groups,
				dropdowns: secondaryNavConfig.dropdowns,
				title: secondaryNavConfig.title,
				currentPath
			});
		} else {
			$$renderer.push('<!--[-1-->');
		}

		$$renderer.push(`<!--]--> <div class="header-light-bar svelte-4b3o1e"><!--[-->`);

		const each_array = ensure_array_like(lightFragments());

		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let fragment = each_array[$$index];

			$$renderer.push(`<div${attr_class(`light-fragment ${fragment.className}`, 'svelte-4b3o1e')}${attr('data-active', fragment.active)}></div>`);
		}

		$$renderer.push(`<!--]--></div></header>`);
	});
}

function Topbar($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { locale, currentPath = '' } = $$props;

		let nav = derived(() => [
			{
				key: 'stream',
				label: home_nav_stream({}, { locale }),
				href: getRelativeLocaleUrl(locale, '')
			},

			{
				key: 'long',
				label: home_nav_longform({}, { locale }),
				href: getRelativeLocaleUrl(locale, 'thoughts')
			}
		]);

		let localeLinkPl = derived(() => getRelativeLocaleUrl('pl', ''));
		let localeLinkEn = derived(() => getRelativeLocaleUrl('en', ''));

		$$renderer.push(`<header class="topbar svelte-hgqu30"><div class="topbar__inner svelte-hgqu30"><div class="brand svelte-hgqu30"><a${attr('href', getRelativeLocaleUrl(locale, ''))} class="logo svelte-hgqu30">Karpaty<span class="dot svelte-hgqu30">.</span></a> <div class="tag svelte-hgqu30"><em class="svelte-hgqu30">${escape_html(home_tagline({}, { locale }))}</em></div></div> <nav class="nav svelte-hgqu30"><!--[-->`);

		const each_array = ensure_array_like(nav());

		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let item = each_array[$$index];

			$$renderer.push(`<a${attr('href', item.href)}${attr_class('svelte-hgqu30', void 0, {
				'active': currentPath === item.href || item.key !== 'stream' && currentPath.startsWith(item.href)
			})}>${escape_html(item.label)}</a>`);
		}

		$$renderer.push(`<!--]--></nav> <div class="lang svelte-hgqu30"><a${attr('href', localeLinkPl())}${attr_class('svelte-hgqu30', void 0, { 'active': locale === 'pl' })}>PL</a> <a${attr('href', localeLinkEn())}${attr_class('svelte-hgqu30', void 0, { 'active': locale === 'en' })}>EN</a> <a${attr('href', `/${locale}/rss.xml`)} class="rss svelte-hgqu30" title="RSS" aria-label="RSS feed"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="svelte-hgqu30"><circle cx="5" cy="19" r="3" class="svelte-hgqu30"></circle><path d="M4 4a16 16 0 0 1 16 16h-3A13 13 0 0 0 4 7z" class="svelte-hgqu30"></path><path d="M4 11a9 9 0 0 1 9 9H10a6 6 0 0 0-6-6z" class="svelte-hgqu30"></path></svg></a></div></div></header>`);
	});
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://blog.palczew.ski");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description = "Strona Karpaty", pageType = "home", secondaryNavConfig } = Astro2.props;
  const currentLocale = Astro2.currentLocale || "en";
  const currentPath = Astro2.url.pathname;
  const allPosts = await getCollection("thoughts");
  const posts = getPostsForLocale(allPosts, currentLocale, false);
  const thoughtsYears = [...new Set(posts.map((post) => post.data.date.getFullYear()))].sort((a, b) => b - a);
  const siteTitle = title;
  const siteDescription = description;
  const siteUrl = Astro2.url.origin;
  const ogTitle = title;
  const ogDescription = description;
  const ogImage = `${siteUrl}/og-image.jpg`;
  const ogUrl = Astro2.url.href;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteTitle,
    "description": siteDescription,
    "url": siteUrl,
    "inLanguage": currentLocale === "pl" ? "pl-PL" : "en-US"
  };
  return renderTemplate(_a || (_a = __template(["<html", '> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="sitemap" href="/sitemap-index.xml"><meta name="generator"', "><!-- SEO Meta Tags --><title>", '</title><meta name="description"', '><meta name="robots" content="index, follow"><!-- Open Graph Meta Tags --><meta property="og:title"', '><meta property="og:description"', '><meta property="og:url"', '><meta property="og:type" content="website"><meta property="og:image"', '><meta property="og:image:alt"', '><meta property="og:locale"', '><!-- Twitter Card Meta Tags --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><!-- Canonical URL --><link rel="canonical"', '><!-- Analytics via Partytown --><script type="text/partytown" data-goatcounter="https://jpalczewski.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script><!-- JSON-LD Structured Data --><script type="application/ld+json">', '</script><!-- Preconnect for performance --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400;1,6..72,500&family=JetBrains+Mono:wght@400;500&family=Brygada+1918:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap" rel="stylesheet"><!-- View Transitions for smooth page navigation -->', "", "</head> <body", "", "> ", " ", " <main> ", " </main> </body></html>"])), addAttribute(currentLocale === "pl" ? "pl-PL" : "en-US", "lang"), addAttribute(Astro2.generator, "content"), siteTitle, addAttribute(siteDescription, "content"), addAttribute(ogTitle, "content"), addAttribute(ogDescription, "content"), addAttribute(ogUrl, "content"), addAttribute(ogImage, "content"), addAttribute(ogTitle, "content"), addAttribute(currentLocale === "pl" ? "pl_PL" : "en_US", "content"), addAttribute(ogTitle, "content"), addAttribute(ogDescription, "content"), addAttribute(ogImage, "content"), addAttribute(ogUrl, "href"), unescapeHTML(JSON.stringify(structuredData)), renderComponent($$result, "ViewTransitions", $$ClientRouter, {}), renderHead(), addAttribute(pageType, "data-page"), addAttribute(pageType === "home" || pageType === "thoughts" ? "nocturne" : void 0, "data-theme"), pageType === "thoughts" && renderTemplate`${renderComponent($$result, "Topbar", Topbar, { "locale": currentLocale, "otherLang": currentLocale === "pl" ? "en" : "pl", "currentPath": currentPath, "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/home/Topbar.svelte", "client:component-export": "default" })}`, pageType === "about" && renderTemplate`${renderComponent($$result, "Header", Header, { "currentLocale": currentLocale, "currentPath": currentPath, "thoughtsYears": thoughtsYears, "secondaryNavConfig": secondaryNavConfig, "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/layout/Header.svelte", "client:component-export": "default" })}`, renderSlot($$result, $$slots["default"]));
}, "/home/runner/work/karpaty/karpaty/src/layouts/Layout.astro", void 0);

export { $$Layout as $, getRelativeLocaleUrl as a, getLocale as g, html as h };

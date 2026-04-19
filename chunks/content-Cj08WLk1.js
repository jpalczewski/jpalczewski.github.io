import { escape } from 'html-escaper';
import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { z } from 'zod';
import { removeBase, isRemotePath, prependForwardSlash } from '@astrojs/internal-helpers/path';
import { A as AstroError, U as UnknownContentCollectionError, a as createComponent, R as RenderUndefinedEntryError, u as unescapeHTML, b as renderTemplate, h as renderUniqueStylesheet, i as renderScriptElement, j as createHeadAndContent, r as renderComponent } from './astro-server-CNTtBI_2.js';
import 'piccolore';
import * as devalue from 'devalue';

const VALID_INPUT_FORMATS = [
  "jpeg",
  "jpg",
  "png",
  "tiff",
  "webp",
  "gif",
  "svg",
  "avif"
];
const VALID_SUPPORTED_FORMATS = [
  "jpeg",
  "jpg",
  "png",
  "tiff",
  "webp",
  "gif",
  "svg",
  "avif"
];
const DEFAULT_OUTPUT_FORMAT = "webp";
const DEFAULT_HASH_PROPS = [
  "src",
  "width",
  "height",
  "format",
  "quality",
  "fit",
  "position",
  "background"
];

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1)?.toLowerCase();
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class ImmutableDataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content-10C5VwXw.js');
      if (data.default instanceof Map) {
        return ImmutableDataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return ImmutableDataStore.fromMap(map);
    } catch {
    }
    return new ImmutableDataStore();
  }
  static async fromMap(data) {
    const store = new ImmutableDataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = ImmutableDataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "ENABLE_ABOUT": "true", "MODE": "production", "PROD": true, "SITE": "https://blog.palczew.ski", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
z.object({
  tags: z.array(z.string()).optional(),
  lastModified: z.date().optional()
});
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection,
  liveCollections
}) {
  return async function getCollection(collection, filter) {
    if (collection in liveCollections) {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `Collection "${collection}" is a live collection. Use getLiveCollection() instead of getCollection().`
      });
    }
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./content-assets-DleWbedO.js');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        let entry = {
          ...rawEntry,
          data,
          collection
        };
        if (entry.legacyId) {
          entry = emulateLegacyEntry(entry);
        }
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Please check your content config file for errors.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function emulateLegacyEntry({ legacyId, ...entry }) {
  const legacyEntry = {
    ...entry,
    id: legacyId,
    slug: entry.id
  };
  return {
    ...legacyEntry,
    // Define separately so the render function isn't included in the object passed to `renderEntry()`
    render: () => renderEntry(legacyEntry)
  };
}
function createGetEntry({
  getEntryImport,
  getRenderEntryImport,
  collectionNames,
  liveCollections
}) {
  return async function getEntry(collectionOrLookupObject, lookup) {
    let collection, lookupId;
    if (typeof collectionOrLookupObject === "string") {
      collection = collectionOrLookupObject;
      if (!lookup)
        throw new AstroError({
          ...UnknownContentCollectionError,
          message: "`getEntry()` requires an entry identifier as the second argument."
        });
      lookupId = lookup;
    } else {
      collection = collectionOrLookupObject.collection;
      lookupId = "id" in collectionOrLookupObject ? collectionOrLookupObject.id : collectionOrLookupObject.slug;
    }
    if (collection in liveCollections) {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `Collection "${collection}" is a live collection. Use getLiveEntry() instead of getEntry().`
      });
    }
    if (typeof lookupId === "object") {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `The entry identifier must be a string. Received object.`
      });
    }
    const store = await globalDataStore.get();
    if (store.hasCollection(collection)) {
      const entry2 = store.get(collection, lookupId);
      if (!entry2) {
        console.warn(`Entry ${collection} → ${lookupId} was not found.`);
        return;
      }
      const { default: imageAssetMap } = await import('./content-assets-DleWbedO.js');
      entry2.data = updateImageReferencesInData(entry2.data, entry2.filePath, imageAssetMap);
      if (entry2.legacyId) {
        return emulateLegacyEntry({ ...entry2, collection });
      }
      return {
        ...entry2,
        collection
      };
    }
    if (!collectionNames.has(collection)) {
      console.warn(
        `The collection ${JSON.stringify(collection)} does not exist. Please ensure it is defined in your content config.`
      );
      return void 0;
    }
    const entryImport = await getEntryImport(collection, lookupId);
    if (typeof entryImport !== "function") return void 0;
    const entry = await entryImport();
    if (entry._internal.type === "content") {
      return {
        id: entry.id,
        slug: entry.slug,
        body: entry.body,
        collection: entry.collection,
        data: entry.data,
        async render() {
          return render({
            collection: entry.collection,
            id: entry.id,
            renderEntryImport: await getRenderEntryImport(collection, lookupId)
          });
        }
      };
    } else if (entry._internal.type === "data") {
      return {
        id: entry.id,
        collection: entry.collection,
        data: entry.data
      };
    }
    return void 0;
  };
}
const CONTENT_LAYER_IMAGE_REGEX = /__ASTRO_IMAGE_="([^"]+)"/g;
async function updateImageReferencesInBody(html, fileName) {
  const { default: imageAssetMap } = await import('./content-assets-DleWbedO.js');
  const imageObjects = /* @__PURE__ */ new Map();
  const { getImage } = await import('./_astro_assets-7upKxtBB.js').then(n => n._);
  for (const [_full, imagePath] of html.matchAll(CONTENT_LAYER_IMAGE_REGEX)) {
    try {
      const decodedImagePath = JSON.parse(imagePath.replaceAll("&#x22;", '"'));
      let image;
      if (URL.canParse(decodedImagePath.src)) {
        image = await getImage(decodedImagePath);
      } else {
        const id = imageSrcToImportId(decodedImagePath.src, fileName);
        const imported = imageAssetMap.get(id);
        if (!id || imageObjects.has(id) || !imported) {
          continue;
        }
        image = await getImage({ ...decodedImagePath, src: imported });
      }
      imageObjects.set(imagePath, image);
    } catch {
      throw new Error(`Failed to parse image reference: ${imagePath}`);
    }
  }
  return html.replaceAll(CONTENT_LAYER_IMAGE_REGEX, (full, imagePath) => {
    const image = imageObjects.get(imagePath);
    if (!image) {
      return full;
    }
    const { index, ...attributes } = image.attributes;
    return Object.entries({
      ...attributes,
      src: image.src,
      srcset: image.srcSet.attribute,
      // This attribute is used by the toolbar audit
      ...Object.assign(__vite_import_meta_env__, { _: process.env._ }).DEV ? { "data-image-component": "true" } : {}
    }).map(([key, value]) => value ? `${key}="${escape(value)}"` : "").join(" ");
  });
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function renderEntry(entry) {
  if (!entry) {
    throw new AstroError(RenderUndefinedEntryError);
  }
  if ("render" in entry && !("legacyId" in entry)) {
    return entry.render();
  }
  if (entry.deferredRender) {
    try {
      const { default: contentModules } = await import('./content-modules-BAG236SW.js');
      const renderEntryImport = contentModules.get(entry.filePath);
      return render({
        collection: "",
        id: entry.id,
        renderEntryImport
      });
    } catch (e) {
      console.error(e);
    }
  }
  const html = entry?.rendered?.metadata?.imagePaths?.length && entry.filePath ? await updateImageReferencesInBody(entry.rendered.html, entry.filePath) : entry?.rendered?.html;
  const Content = createComponent(() => renderTemplate`${unescapeHTML(html)}`);
  return {
    Content,
    headings: entry?.rendered?.metadata?.headings ?? [],
    remarkPluginFrontmatter: entry?.rendered?.metadata?.frontmatter ?? {}
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: isRemotePath(link) ? link : prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const liveCollections = {};

const contentDir = '/src/content/';

const contentEntryGlob = "";
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = "";
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {};

const collectionNames = new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = "";
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
	liveCollections,
});

const getEntry = createGetEntry({
	getEntryImport: createGlobLookup(collectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	collectionNames,
	liveCollections,
});

function getCurrentLang(postId) {
  const lang = postId.split("/")[0];
  return lang === "pl" || lang === "en" ? lang : "en";
}
async function getTranslation(post, targetLang) {
  const translationKey = post.data.translationKey;
  if (!translationKey) return null;
  const currentLang = getCurrentLang(post.id);
  if (currentLang === targetLang) return post;
  const allPosts = await getCollection("thoughts");
  const translation = allPosts.find(
    (p) => p.data.translationKey === translationKey && getCurrentLang(p.id) === targetLang
  );
  return translation || null;
}
function formatDate(date, locale) {
  if (locale === "pl") {
    const months = [
      "stycznia",
      "lutego",
      "marca",
      "kwietnia",
      "maja",
      "czerwca",
      "lipca",
      "sierpnia",
      "września",
      "października",
      "listopada",
      "grudnia"
    ];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  } else {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  }
}
function formatDateTime(date, locale) {
  const dateStr = formatDate(date, locale);
  const utcHours = date.getUTCHours();
  const utcMinutes = date.getUTCMinutes();
  if (utcHours === 0 && utcMinutes === 0) {
    return dateStr;
  }
  const hoursStr = String(utcHours).padStart(2, "0");
  const minutesStr = String(utcMinutes).padStart(2, "0");
  return `${dateStr}, ${hoursStr}:${minutesStr}`;
}
function getMonthName(month, locale) {
  const monthsPl = [
    "Styczeń",
    "Luty",
    "Marzec",
    "Kwiecień",
    "Maj",
    "Czerwiec",
    "Lipiec",
    "Sierpień",
    "Wrzesień",
    "Październik",
    "Listopad",
    "Grudzień"
  ];
  const monthsEn = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const months = locale === "pl" ? monthsPl : monthsEn;
  return months[month - 1] || "";
}
function estimateReadingTime(content) {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return Math.max(1, minutes);
}
function parsePostId(postId) {
  const parts = postId.split("/");
  const lang = parts[0] === "pl" || parts[0] === "en" ? parts[0] : "en";
  const year = parts[1] || "";
  const month = parts[2] || "";
  const slug = parts[3]?.replace(".md", "") || "";
  return { lang, year, month, slug };
}
function buildPostUrl(lang, year, month, slug) {
  return `/${lang}/thoughts/year/${year}/${month}/${slug}`;
}
function getPostUrl(post) {
  const { lang, year, month, slug } = parsePostId(post.id);
  return buildPostUrl(lang, year, month, slug);
}
async function getTranslationInfo(post, currentLocale) {
  const otherLocale = currentLocale === "pl" ? "en" : "pl";
  const translation = await getTranslation(post, otherLocale);
  if (!translation) {
    return {};
  }
  return {
    url: getPostUrl(translation),
    label: currentLocale === "pl" ? "Read in English" : "Czytaj po polsku"
  };
}

function parseTag(tag) {
  return tag.split("/").filter(Boolean);
}
function getTagBreadcrumbs(tag, locale) {
  const segments = parseTag(tag);
  const breadcrumbs = [];
  let currentPath = "";
  for (const segment of segments) {
    currentPath = currentPath ? `${currentPath}/${segment}` : segment;
    breadcrumbs.push({
      name: segment,
      path: currentPath,
      url: `/${locale}/tags/${currentPath}`
    });
  }
  return breadcrumbs;
}
function matchesTag(postTag, filterTag) {
  if (postTag === filterTag) return true;
  return postTag.startsWith(filterTag + "/");
}
function buildTagHierarchy(allTags) {
  const hierarchySet = /* @__PURE__ */ new Set();
  for (const tag of allTags) {
    const segments = parseTag(tag);
    let currentPath = "";
    for (const segment of segments) {
      currentPath = currentPath ? `${currentPath}/${segment}` : segment;
      hierarchySet.add(currentPath);
    }
  }
  return Array.from(hierarchySet).sort();
}
function extractAllTags(posts) {
  const tagsSet = /* @__PURE__ */ new Set();
  for (const post of posts) {
    for (const tag of post.data.tags || []) {
      tagsSet.add(tag);
    }
  }
  return Array.from(tagsSet);
}
function filterPostsByTag(posts, tag) {
  return posts.filter(
    (post) => post.data.tags?.some((postTag) => matchesTag(postTag, tag))
  );
}

function generateExcerpt(content, maxLength = 150) {
  let text = content.replace(/^(import|export)\s+.*$/gm, "").replace(/<[A-Z][a-zA-Z]*[^>]*\/>/g, "").replace(/<[A-Z][a-zA-Z]*[^>]*>[\s\S]*?<\/[A-Z][a-zA-Z]*>/g, "").replace(/^#{1,6}\s+/gm, "").replace(/[*_]{1,3}([^*_]+)[*_]{1,3}/g, "$1").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/!\[([^\]]*)\]\([^)]+\)/g, "").replace(/```[\s\S]*?```/g, "").replace(/`([^`]+)`/g, "$1").replace(/^>\s+/gm, "").replace(/^[-*_]{3,}$/gm, "").replace(/\n{2,}/g, " ").trim();
  if (text.length > maxLength) {
    text = text.substring(0, maxLength).trim();
    const lastSpace = text.lastIndexOf(" ");
    if (lastSpace > maxLength * 0.8) {
      text = text.substring(0, lastSpace);
    }
    text += "...";
  }
  return text;
}
function getPostExcerpt(post) {
  if (post.data.excerpt) {
    return post.data.excerpt;
  }
  return generateExcerpt(post.body || "");
}
function filterByLanguage(posts, locale) {
  return posts.filter((post) => getCurrentLang(post.id) === locale);
}
function filterDrafts(posts, isDev = false) {
  if (isDev) {
    return posts;
  }
  return posts.filter((post) => !post.data.draft);
}
function sortByDateDesc(posts) {
  return [...posts].sort((a, b) => {
    const dateA = a.data.date.getTime();
    const dateB = b.data.date.getTime();
    return dateB - dateA;
  });
}
function getPostsForLocale(allPosts, locale, isDev = false) {
  let posts = filterByLanguage(allPosts, locale);
  posts = filterDrafts(posts, isDev);
  posts = sortByDateDesc(posts);
  return posts;
}
function groupByYearMonth(posts) {
  const groups = /* @__PURE__ */ new Map();
  for (const post of posts) {
    const year = post.data.date.getFullYear();
    const month = String(post.data.date.getMonth() + 1).padStart(2, "0");
    const key = `${year}-${month}`;
    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key).push(post);
  }
  return groups;
}
function filterByYear(posts, year) {
  return posts.filter((post) => post.data.date.getFullYear() === year);
}
function filterByYearMonth(posts, year, month) {
  return posts.filter((post) => {
    const postYear = post.data.date.getFullYear();
    const postMonth = post.data.date.getMonth() + 1;
    return postYear === year && postMonth === month;
  });
}
function getUniqueYears(posts) {
  const years = /* @__PURE__ */ new Set();
  for (const post of posts) {
    years.add(post.data.date.getFullYear());
  }
  return Array.from(years).sort((a, b) => b - a);
}
function getUniqueYearMonths(posts) {
  const yearMonths = /* @__PURE__ */ new Set();
  for (const post of posts) {
    const year = post.data.date.getFullYear();
    const month = post.data.date.getMonth() + 1;
    yearMonths.add(`${year}-${String(month).padStart(2, "0")}`);
  }
  return Array.from(yearMonths).sort((a, b) => b.localeCompare(a)).map((ym) => {
    const [year, month] = ym.split("-").map(Number);
    return { year, month };
  });
}
function getUniqueTags(posts) {
  const tags = /* @__PURE__ */ new Set();
  for (const post of posts) {
    for (const tag of post.data.tags) {
      tags.add(tag);
    }
  }
  return Array.from(tags).sort();
}
function getTagCounts(posts) {
  const tagCounts = /* @__PURE__ */ new Map();
  for (const post of posts) {
    for (const tag of post.data.tags) {
      tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
    }
  }
  return tagCounts;
}
function generateTagBreadcrumbs(tag, lang) {
  const parts = tag.split("/");
  const breadcrumbs = [];
  let currentPath = "";
  for (let i = 0; i < parts.length; i++) {
    currentPath = currentPath ? `${currentPath}/${parts[i]}` : parts[i];
    breadcrumbs.push({
      name: parts[i],
      path: currentPath,
      url: `/${lang}/tags/${currentPath}`
    });
  }
  return breadcrumbs;
}
function getTagsWithMetadata(posts, lang) {
  const tagCounts = getTagCounts(posts);
  const uniqueTags = getUniqueTags(posts);
  return uniqueTags.map((tag) => ({
    tag,
    count: tagCounts.get(tag) || 0,
    breadcrumbs: generateTagBreadcrumbs(tag, lang)
  })).sort((a, b) => a.tag.localeCompare(b.tag));
}
async function preparePostForDisplay(post, locale) {
  const excerpt = getPostExcerpt(post);
  const url = getPostUrl(post);
  const formattedDate = formatDateTime(post.data.date, locale);
  const readingTime = estimateReadingTime(post.body);
  const readingTimeLabel = locale === "pl" ? `${readingTime} min czytania` : `${readingTime} min read`;
  const tagsWithSegments = post.data.tags.map((tag) => ({
    tag,
    segments: getTagBreadcrumbs(tag, locale)
  }));
  const { url: translationUrl, label: translationLabel } = await getTranslationInfo(post, locale);
  return {
    title: post.data.title,
    url,
    excerpt,
    date: formattedDate,
    tags: tagsWithSegments,
    readingTime,
    readingTimeLabel,
    isDraft: post.data.draft,
    draftLabel: locale === "pl" ? "Szkic" : "Draft",
    translationUrl,
    translationLabel
  };
}
async function getOutgoingRelationsForDisplay(post, locale) {
  if (!post.data.relations || post.data.relations.length === 0) {
    return [];
  }
  const results = await Promise.all(
    post.data.relations.map(async (relation) => {
      const relatedPostRef = relation.post;
      let relatedPost;
      if (relatedPostRef && relatedPostRef.id && relatedPostRef.collection) {
        relatedPost = await getEntry(relatedPostRef.collection, relatedPostRef.id);
      } else {
        relatedPost = relatedPostRef;
      }
      if (!relatedPost || !relatedPost.data) {
        console.warn(`Could not resolve relation reference in post ${post.id}:`, relation);
        return null;
      }
      const relatedUrl = getPostUrl(relatedPost);
      const relatedDate = formatDateTime(relatedPost.data.date, locale);
      return {
        type: relation.type,
        title: relatedPost.data.title,
        url: relatedUrl,
        date: relatedDate
      };
    })
  );
  return results.filter((r) => r !== null);
}
async function getIncomingRelationsForDisplay(post, allPosts, locale) {
  const incomingPosts = allPosts.filter((otherPost) => {
    if (!otherPost.data.relations) return false;
    return otherPost.data.relations.some((rel) => {
      if (!rel.post || !rel.post.id) return false;
      return rel.post.id === post.id;
    });
  });
  const results = await Promise.all(
    incomingPosts.flatMap(async (otherPost) => {
      const matchingRelations = (otherPost.data.relations || []).filter((rel) => {
        if (!rel.post || !rel.post.id) return false;
        return rel.post.id === post.id;
      });
      return Promise.all(matchingRelations.map(async (relation) => {
        const otherUrl = getPostUrl(otherPost);
        const otherDate = formatDateTime(otherPost.data.date, locale);
        return {
          type: relation.type,
          title: otherPost.data.title,
          url: otherUrl,
          date: otherDate
        };
      }));
    })
  );
  return results.flat().filter((r) => r !== null);
}
async function getAllRelatedPosts(post, allPosts, locale) {
  const outgoing = await getOutgoingRelationsForDisplay(post, locale);
  const incoming = await getIncomingRelationsForDisplay(post, allPosts, locale);
  const outgoingRelated = outgoing.filter((r) => r.type === "related");
  const incomingRelated = incoming.filter((r) => r.type === "related");
  const combined = [...outgoingRelated, ...incomingRelated];
  const seen = /* @__PURE__ */ new Set();
  const deduplicated = combined.filter((rel) => {
    if (seen.has(rel.url)) {
      return false;
    }
    seen.add(rel.url);
    return true;
  });
  return deduplicated;
}

export { getUniqueYears as A, getUniqueYearMonths as B, DEFAULT_HASH_PROPS as C, DEFAULT_OUTPUT_FORMAT as D, VALID_SUPPORTED_FORMATS as V, getPostUrl as a, formatDate as b, getCurrentLang as c, generateExcerpt as d, getTagBreadcrumbs as e, filterDrafts as f, getCollection as g, filterPostsByTag as h, getPostsForLocale as i, extractAllTags as j, buildTagHierarchy as k, getTagsWithMetadata as l, groupByYearMonth as m, preparePostForDisplay as n, filterByYear as o, parsePostId as p, getMonthName as q, renderEntry as r, sortByDateDesc as s, filterByYearMonth as t, getTranslationInfo as u, estimateReadingTime as v, getOutgoingRelationsForDisplay as w, getIncomingRelationsForDisplay as x, getAllRelatedPosts as y, formatDateTime as z };

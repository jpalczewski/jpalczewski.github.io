import { c as createAstro, a as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, b as renderTemplate } from './astro-server-B4qyNKwf.js';
import 'piccolore';
import { r as renderEntry, a as getPostUrl, z as formatDateTime, v as estimateReadingTime, d as getTagBreadcrumbs, t as getTranslationInfo, g as getCollection, f as filterDrafts, w as getOutgoingRelationsForDisplay, x as getIncomingRelationsForDisplay } from './content-BCsZ7oNt.js';
import { a as PostMeta } from './PostMeta-C5Lje3Jf.js';
import { C as ContinuationNote, U as UpdateNote } from './UpdateNote-Kq48inKo.js';
/* empty css                         */

const $$Astro = createAstro("https://blog.palczew.ski");
const $$ThoughtListItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ThoughtListItem;
  const { post, locale, showFullContent = true } = Astro2.props;
  const { Content } = showFullContent ? await renderEntry(post) : { Content: null };
  const url = getPostUrl(post);
  const formattedDate = formatDateTime(post.data.date, locale);
  const readingTime = estimateReadingTime(post.body);
  const readingTimeLabel = locale === "pl" ? `${readingTime} min czytania` : `${readingTime} min read`;
  const tagsWithSegments = post.data.tags.map((tag) => ({
    tag,
    segments: getTagBreadcrumbs(tag, locale)
  }));
  const { url: translationUrl, label: translationLabel } = await getTranslationInfo(post, locale);
  const readMoreLabel = locale === "pl" ? "Otwórz w nowej karcie" : "Open in new tab";
  const draftLabel = locale === "pl" ? "Szkic" : "Draft";
  let outgoingRelationsData = [];
  let incomingRelationsData = [];
  if (showFullContent && (post.data.relations || []).length > 0) {
    const allPosts = await getCollection("thoughts").then(
      (posts) => filterDrafts(posts, false)
    );
    outgoingRelationsData = await getOutgoingRelationsForDisplay(post, locale);
    incomingRelationsData = await getIncomingRelationsForDisplay(post, allPosts, locale);
  }
  return renderTemplate`${maybeRenderHead()}<article class="thought-list-item" data-astro-cid-r3pq7cbe> <a${addAttribute(url, "href")} class="thought-list-item__title-link" data-astro-cid-r3pq7cbe> <h2 class="thought-list-item__title" data-astro-cid-r3pq7cbe> ${post.data.title} </h2> </a> ${renderComponent($$result, "PostMeta", PostMeta, { "date": formattedDate, "tags": tagsWithSegments, "locale": locale, "readingTime": readingTime, "readingTimeLabel": readingTimeLabel, "isDraft": post.data.draft, "draftLabel": draftLabel, "translationUrl": translationUrl, "translationLabel": translationLabel, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/runner/work/karpaty/karpaty/src/components/thoughts/PostMeta.svelte", "client:component-export": "default", "data-astro-cid-r3pq7cbe": true })} ${showFullContent && outgoingRelationsData.length > 0 && renderTemplate`${renderComponent($$result, "ContinuationNote", ContinuationNote, { "posts": outgoingRelationsData, "locale": locale, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/runner/work/karpaty/karpaty/src/components/thoughts/ContinuationNote.svelte", "client:component-export": "default", "data-astro-cid-r3pq7cbe": true })}`} ${showFullContent && Content && renderTemplate`<div class="thought-list-item__content" data-astro-cid-r3pq7cbe> ${renderComponent($$result, "Content", Content, { "data-astro-cid-r3pq7cbe": true })} </div>`} ${showFullContent && incomingRelationsData.length > 0 && renderTemplate`${renderComponent($$result, "UpdateNote", UpdateNote, { "posts": incomingRelationsData, "locale": locale, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/runner/work/karpaty/karpaty/src/components/thoughts/UpdateNote.svelte", "client:component-export": "default", "data-astro-cid-r3pq7cbe": true })}`} <a${addAttribute(url, "href")} class="thought-list-item__read-more" target="_blank" rel="noopener noreferrer" data-astro-cid-r3pq7cbe> <span class="thought-list-item__read-more-text" data-astro-cid-r3pq7cbe>${readMoreLabel}</span> <span class="thought-list-item__arrow" aria-hidden="true" data-astro-cid-r3pq7cbe>→</span> </a> </article> `;
}, "/home/runner/work/karpaty/karpaty/src/components/thoughts/ThoughtListItem.astro", void 0);

export { $$ThoughtListItem as $ };

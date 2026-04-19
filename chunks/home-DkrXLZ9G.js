import { p as parsePostId, r as renderEntry, d as generateExcerpt, a as getPostUrl, c as getCurrentLang } from './content-DeT_LGmN.js';

const THREADS = {
  tech: {
    id: "tech",
    label: { pl: "tech", en: "tech" },
    full: { pl: "Tech / meta-blog", en: "Tech / meta-blog" },
    color: "#ffa64a"
  },
  travel: {
    id: "travel",
    label: { pl: "podróże", en: "travel" },
    full: { pl: "Podróże / Pociągi", en: "Travel / Trains" },
    color: "#ffa64a"
  },
  academia: {
    id: "academia",
    label: { pl: "akademia", en: "academia" },
    full: { pl: "Akademia / Mgr", en: "Academia / Thesis" },
    color: "#ff3d8a"
  },
  health: {
    id: "health",
    label: { pl: "zdrowie", en: "health" },
    full: { pl: "Zdrowie / Udar", en: "Health / Stroke" },
    color: "#ff3d8a"
  },
  kultura: {
    id: "kultura",
    label: { pl: "kultura", en: "culture" },
    full: { pl: "Kultura / Sztuka", en: "Culture / Arts" },
    color: "#4ad9d9"
  },
  protipy: {
    id: "protipy",
    label: { pl: "protipy", en: "protips" },
    full: { pl: "Protipy", en: "Protips" },
    color: "#4ad9d9"
  },
  rave: {
    id: "rave",
    label: { pl: "rave", en: "rave" },
    full: { pl: "Rave", en: "Rave" },
    color: "#ff3d8a"
  },
  meta: {
    id: "meta",
    label: { pl: "meta", en: "meta" },
    full: { pl: "Meta", en: "Meta" },
    color: "#8a8270"
  },
  design: {
    id: "design",
    label: { pl: "design", en: "design" },
    full: { pl: "Design / Design Thinking", en: "Design / Design Thinking" },
    color: "#4ad9d9"
  }
};
const TAG_TO_THREAD = {
  tech: "tech",
  "podróże": "travel",
  podroze: "travel",
  travel: "travel",
  akademia: "academia",
  academia: "academia",
  zdrowie: "health",
  health: "health",
  kultura: "kultura",
  culture: "kultura",
  protipy: "protipy",
  protips: "protipy",
  rave: "rave",
  meta: "meta"
};
function threadForTags(tags) {
  for (const tag of tags) {
    const head = tag.split("/")[0]?.toLowerCase();
    if (head && TAG_TO_THREAD[head]) return TAG_TO_THREAD[head];
  }
  return "meta";
}

const SERIES = [
  {
    id: "meta-blog",
    name: { pl: "Budowa tego bloga", en: "Building this blog" },
    thread: "tech",
    tagPrefixes: ["meta", "tech/astro"]
  },
  {
    id: "trains",
    name: { pl: "Pociągami po Europie", en: "Europe by train" },
    thread: "travel",
    tagPrefixes: ["podróże/pociągi", "travel/trains"]
  },
  {
    id: "mgr",
    name: { pl: "Wokół pracy magisterskiej", en: "Around the thesis" },
    thread: "academia",
    tagPrefixes: ["akademia/mgr", "akademia/zotero", "academia/thesis"]
  },
  {
    id: "nfz",
    name: { pl: "NFZ i zdrowie", en: "NFZ and health" },
    thread: "health",
    tagPrefixes: ["zdrowie/nfz", "health/nfz"]
  }
];
function postMatchesSeries(post, series) {
  return post.data.tags.some(
    (tag) => series.tagPrefixes.some((prefix) => tag === prefix || tag.startsWith(prefix + "/"))
  );
}
function seriesForPost(post) {
  return SERIES.filter((s) => postMatchesSeries(post, s));
}

async function mapPostsToHomePosts(posts, locale) {
  return Promise.all(posts.map(async (post) => {
    const { slug } = parsePostId(post.id);
    const threadId = post.data.thread ?? threadForTags(post.data.tags);
    const postSeries = seriesForPost(post).map((s) => ({
      id: s.id,
      name: s.name[locale]
    }));
    return {
      id: post.id,
      slug,
      date: post.data.date.toISOString().slice(0, 10),
      lang: getCurrentLang(post.id),
      thread: threadId,
      kind: post.data.kind ?? "thought",
      draft: post.data.draft,
      title: post.data.title,
      url: getPostUrl(post),
      excerpt: generateExcerpt(post.body ?? "", 200),
      bodyHtml: (await renderEntry(post)).remarkPluginFrontmatter.previewHtml ?? "",
      tags: post.data.tags,
      rel: (post.data.relations ?? []).map((r) => ({
        to: r.post.id,
        type: r.type
      })),
      series: postSeries
    };
  }));
}
function buildThreadsMeta(locale) {
  return Object.values(THREADS).map((t) => ({
    id: t.id,
    label: t.label[locale],
    full: t.full[locale],
    color: t.color
  }));
}
function buildSeriesMeta(posts, locale) {
  return SERIES.map((s) => ({
    id: s.id,
    name: s.name[locale],
    thread: s.thread,
    count: posts.filter((p) => p.series.some((ps) => ps.id === s.id)).length
  }));
}

export { buildSeriesMeta as a, buildThreadsMeta as b, mapPostsToHomePosts as m };

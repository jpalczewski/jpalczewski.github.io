import{c as i,s as r,r as l,m as c}from"./_astro_assets.e9bf66b2.js";import{u as d}from"./ProjectList.a087b438.js";import"./astro-assets-services.9646dcd1.js";import"./index.7db25182.js";/* empty css                          */const u=async function(){return{}};async function p(n){return u().then(t=>n.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(s,e)=>r({src:t[e].src,...t[e].attributes})))}const a=await p(`<p>As mentioned in a related insight, the backend of this blog is written in <a href="https://astro.build/">astro</a><sup><a href="#user-content-fn-1" id="user-content-fnref-1" data-footnote-ref="" aria-describedby="footnote-label">1</a></sup>.</p>
<p>I have merged two things that I am proud of:</p>
<ul>
<li>Content collections: Schema-based posts provides excellent flexibility<sup><a href="#user-content-fn-2" id="user-content-fnref-2" data-footnote-ref="" aria-describedby="footnote-label">2</a></sup></li>
<li>Internationalization: Certain posts will target a Polish audience due to their nature, some might be bilingual, while technical posts will primarily be in English.</li>
</ul>
<section data-footnotes="" class="footnotes"><h2 class="sr-only" id="footnote-label">Footnotes</h2>
<ol>
<li id="user-content-fn-1">
<p>After an extensive research phase, I found that Astro was the ideal choice. Its robust TypeScript support and positive feedback on Reddit convinced me. <a href="#user-content-fnref-1" data-footnote-backref="" class="data-footnote-backref" aria-label="Back to content">↩</a></p>
</li>
<li id="user-content-fn-2">
<p>This post is a test-case for those hand-made addons. <a href="#user-content-fnref-2" data-footnote-backref="" class="data-footnote-backref" aria-label="Back to content">↩</a></p>
</li>
</ol>
</section>`),f={title:"Multiple post types and languages in astro",language:"en",date:"2023-08-15T12:23:43-02:00",tags:["astro","typescript","entuzjazm"],relatedInsights:["en/post-1"],referencedUrls:[{description:"Github repo with astro code",url:"https://github.com/jpalczewski/entuzjazm"}],relatedProjects:["entuzjazm"]},h="/home/runner/work/entuzjazm/entuzjazm/src/content/insight/en/post-2.md",m=void 0;function I(){return`
As mentioned in a related insight, the backend of this blog is written in [astro](https://astro.build/)[^1].

I have merged two things that I am proud of:

- Content collections: Schema-based posts provides excellent flexibility[^2]
- Internationalization: Certain posts will target a Polish audience due to their nature, some might be bilingual, while technical posts will primarily be in English.

[^1]: After an extensive research phase, I found that Astro was the ideal choice. Its robust TypeScript support and positive feedback on Reddit convinced me.
[^2]: This post is a test-case for those hand-made addons.
`}function k(){return a}function v(){return[{depth:2,slug:"footnote-label",text:"Footnotes"}]}const A=i((n,t,s)=>{const{layout:e,...o}=f;return o.file=h,o.url=m,l`${c()}${d(a)}`});export{A as Content,k as compiledContent,A as default,h as file,f as frontmatter,v as getHeadings,I as rawContent,m as url};

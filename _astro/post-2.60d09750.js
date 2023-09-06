import{c as i,s as r,r as l}from"./_astro_assets.947b5031.js";import{u as c}from"./ProjectList.645df4b6.js";import"./index.7db25182.js";/* empty css                          */const o={};function d(t){return t.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(s,e)=>r({src:o[e].src,...o[e].attributes}))}const a=d(`<p>As mentioned in a related insight, the backend of this blog is written in <a href="https://astro.build/">astro</a><sup><a href="#user-content-fn-1" id="user-content-fnref-1" data-footnote-ref="" aria-describedby="footnote-label">1</a></sup>.</p>
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
</section>`),u={title:"Multiple post types and languages in astro",language:"en",date:"2023-08-15T12:23:43-02:00",tags:["astro","typescript","entuzjazm"],relatedInsights:["en/post-1"],referencedUrls:[{description:"Github repo with astro code",url:"https://github.com/jpalczewski/entuzjazm"}],relatedProjects:["entuzjazm"]},p="/home/runner/work/entuzjazm/entuzjazm/src/content/insight/en/post-2.md",f=void 0;function z(){return`
As mentioned in a related insight, the backend of this blog is written in [astro](https://astro.build/)[^1].

I have merged two things that I am proud of:

- Content collections: Schema-based posts provides excellent flexibility[^2]
- Internationalization: Certain posts will target a Polish audience due to their nature, some might be bilingual, while technical posts will primarily be in English.

[^1]: After an extensive research phase, I found that Astro was the ideal choice. Its robust TypeScript support and positive feedback on Reddit convinced me.
[^2]: This post is a test-case for those hand-made addons.
`}function I(){return a}function k(){return[{depth:2,slug:"footnote-label",text:"Footnotes"}]}const h=i((t,s,e)=>{const{layout:m,...n}=u;return n.file=p,n.url=f,l`${c(a)}`});h[Symbol.for("astro.needsHeadRendering")]=!0;export{h as Content,I as compiledContent,h as default,p as file,u as frontmatter,k as getHeadings,o as images,z as rawContent,f as url};

import{c as i,s as r,r as l}from"./_astro_assets.355ebe8b.js";import{u as h}from"./ProjectList.92e4d5f1.js";import"./index.7db25182.js";/* empty css                          */const n={};function d(t){return t.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(s,e)=>r({src:n[e].src,...n[e].attributes}))}const a=d(`<p>Years ago I had a thought to seperate repo with hugo theme and the one with rendered page due to possible use of <a href="https://utteranc.es/">utterances</a><sup><a href="#user-content-fn-1" id="user-content-fnref-1" data-footnote-ref="" aria-describedby="footnote-label">1</a></sup>. There are my experiences with both approaches:</p>
<h2 id="deploying-page-to-the-same-repo">deploying page to the same repo</h2>
<ul>
<li>Astro docs provides a <a href="https://docs.astro.build/en/guides/deploy/github/">good starting point</a></li>
</ul>
<h2 id="deploying-site-elsewhere">deploying site elsewhere</h2>
<ul>
<li>There is a a <a href="https://cpina.github.io/push-to-another-repository-docs/index.html">convinient github-action</a></li>
<li>Can you reuse <code>withastro/action@v0</code> to build it? You might, but it is designed for scenario above, this action creates an <a href="https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts">artifact</a> that is consumed by <code>actions/deploy-pages@v1</code> action.
<ul>
<li>tl;dr: there are better ways</li>
</ul>
</li>
</ul>
<h3 id="example-of-deploying-astro-blog-to-github-pages">Example of deploying astro blog to github pages</h3>
<p><a href="https://github.com/jpalczewski/entuzjazm/blob/6bd91f3a1d60714ab80836c2125b2a654d3a1b63/.github/workflows/deploy.yml">There is my example</a> of working github action.</p>
<p>Things worth to note:</p>
<ul>
<li>By using actions to install node and pnpm there is huge time savings due to caching.</li>
<li>There should be a <code>.nojekyll</code> file in blog root - otherwise css is messed up<sup><a href="#user-content-fn-2" id="user-content-fnref-2" data-footnote-ref="" aria-describedby="footnote-label">2</a></sup></li>
</ul>
<section data-footnotes="" class="footnotes"><h2 class="sr-only" id="footnote-label">Footnotes</h2>
<ol>
<li id="user-content-fn-1">
<p>Is it a good idea? One of tutorials on integrating utterances with astro doesn’t have it either. I hope not to see it as a opinion whether this is good option, but someday I will give it a try. <a href="#user-content-fnref-1" data-footnote-backref="" class="data-footnote-backref" aria-label="Back to content">↩</a></p>
</li>
<li id="user-content-fn-2">
<p><a href="https://stackoverflow.com/questions/74489844/astro-js-deployment-media-files-not-rendering">Source</a> <a href="#user-content-fnref-2" data-footnote-backref="" class="data-footnote-backref" aria-label="Back to content">↩</a></p>
</li>
</ol>
</section>`),p={title:"Implication of deploying github page to another repo",language:"en",date:"2023-08-17T11:39:43-02:00",tags:["astro","github","cd","github-actions","devops"]},u="/home/runner/work/entuzjazm/entuzjazm/src/content/insight/en/post-3.md",c=void 0;function k(){return`
Years ago I had a thought to seperate repo with hugo theme and the one with rendered page due to possible use of [utterances](https://utteranc.es/)[^1]. There are my experiences with both approaches:

## deploying page to the same repo

- Astro docs provides a [good starting point](https://docs.astro.build/en/guides/deploy/github/)

## deploying site elsewhere

- There is a a [convinient github-action](https://cpina.github.io/push-to-another-repository-docs/index.html)
- Can you reuse \`withastro/action@v0\` to build it? You might, but it is designed for scenario above, this action creates an [artifact](https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts) that is consumed by \`actions/deploy-pages@v1\` action.
  - tl;dr: there are better ways

### Example of deploying astro blog to github pages

[There is my example](https://github.com/jpalczewski/entuzjazm/blob/6bd91f3a1d60714ab80836c2125b2a654d3a1b63/.github/workflows/deploy.yml) of working github action.

Things worth to note:

- By using actions to install node and pnpm there is huge time savings due to caching.
- There should be a \`.nojekyll\` file in blog root - otherwise css is messed up[^2]

[^1]: Is it a good idea? One of tutorials on integrating utterances with astro doesn't have it either. I hope not to see it as a opinion whether this is good option, but someday I will give it a try.
[^2]: [Source](https://stackoverflow.com/questions/74489844/astro-js-deployment-media-files-not-rendering)
`}function v(){return a}function x(){return[{depth:2,slug:"deploying-page-to-the-same-repo",text:"deploying page to the same repo"},{depth:2,slug:"deploying-site-elsewhere",text:"deploying site elsewhere"},{depth:3,slug:"example-of-deploying-astro-blog-to-github-pages",text:"Example of deploying astro blog to github pages"},{depth:2,slug:"footnote-label",text:"Footnotes"}]}const g=i((t,s,e)=>{const{layout:f,...o}=p;return o.file=u,o.url=c,l`${h(a)}`});g[Symbol.for("astro.needsHeadRendering")]=!0;export{g as Content,v as compiledContent,g as default,u as file,p as frontmatter,x as getHeadings,n as images,k as rawContent,c as url};

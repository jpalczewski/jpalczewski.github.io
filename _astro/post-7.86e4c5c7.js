import{c as l,s as p,r}from"./_astro_assets.947b5031.js";import{u as c}from"./ProjectList.645df4b6.js";import"./index.7db25182.js";/* empty css                          */const e={};function i(n){return n.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,s)=>p({src:e[s].src,...e[s].attributes}))}const o=i(`<p>My hyperfixation havbe recently took me over and I’m now coding alot.</p>
<p>To achieve interactivity in Projects tab I plan to use Svelte, while sticking to Astro in other areas.</p>
<p>In order to maintain same effect of tags<sup><a href="#user-content-fn-1" id="user-content-fnref-1" data-footnote-ref="" aria-describedby="footnote-label">1</a></sup> in both context, I have created a separate css file:</p>
<pre is:raw="" class="astro-code github-dark" style="background-color: #24292e; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color: #F97583">@tailwind</span><span style="color: #E1E4E8"> base;</span></span>
<span class="line"><span style="color: #F97583">@tailwind</span><span style="color: #E1E4E8"> components;</span></span>
<span class="line"><span style="color: #F97583">@tailwind</span><span style="color: #E1E4E8"> utilities;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F97583">@layer</span><span style="color: #E1E4E8"> components {</span></span>
<span class="line"><span style="color: #E1E4E8">  </span><span style="color: #B392F0">.tag</span><span style="color: #E1E4E8"> {</span></span>
<span class="line"><span style="color: #E1E4E8">    @</span><span style="color: #79B8FF">apply</span><span style="color: #E1E4E8"> </span><span style="color: #79B8FF">no-underline</span><span style="color: #E1E4E8"> </span><span style="color: #79B8FF">px-</span><span style="color: #E1E4E8">1 </span><span style="color: #79B8FF">font-normal</span><span style="color: #E1E4E8"> </span><span style="color: #79B8FF">font-mono</span><span style="color: #E1E4E8">;</span></span>
<span class="line"><span style="color: #E1E4E8">  }</span></span>
<span class="line"><span style="color: #E1E4E8">}</span></span></code></pre>
<p>Then we can import that file from Astro component, as mentioned in docs:</p>
<pre is:raw="" class="astro-code github-dark" style="background-color: #24292e; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color: #F97583">---</span></span>
<span class="line"><span style="color: #6A737D">// removed for breivity</span></span>
<span class="line"><span style="color: #F97583">import</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">'../styles/tag.css'</span><span style="color: #E1E4E8">;</span></span>
<span class="line"><span style="color: #6A737D">//...</span></span>
<span class="line"><span style="color: #F97583">---</span></span>
<span class="line"><span style="color: #6A737D">// ...</span></span>
<span class="line"><span style="color: #E1E4E8">      </span><span style="color: #F97583">&#x3C;</span><span style="color: #E1E4E8">a class</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">"tag"</span><span style="color: #F97583">></span></span>
<span class="line"><span style="color: #6A737D">// ...</span></span></code></pre>
<p>And the same trick goes in Svelte:</p>
<pre is:raw="" class="astro-code github-dark" style="background-color: #24292e; overflow-x: auto;" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color: #F97583">&#x3C;</span><span style="color: #E1E4E8">script lang</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">"ts"</span><span style="color: #F97583">></span></span>
<span class="line"><span style="color: #E1E4E8">    </span><span style="color: #F97583">export</span><span style="color: #E1E4E8"> </span><span style="color: #F97583">let</span><span style="color: #E1E4E8"> tags</span><span style="color: #F97583">:</span><span style="color: #E1E4E8"> </span><span style="color: #79B8FF">string</span><span style="color: #E1E4E8">[];</span></span>
<span class="line"><span style="color: #E1E4E8">    </span><span style="color: #F97583">import</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">'../styles/tag.css'</span><span style="color: #E1E4E8">;</span></span>
<span class="line"><span style="color: #F97583">&#x3C;/</span><span style="color: #E1E4E8">script</span><span style="color: #F97583">></span></span>
<span class="line"></span>
<span class="line"><span style="color: #E1E4E8">{#each tags </span><span style="color: #F97583">as</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">tag</span><span style="color: #E1E4E8">}</span></span>
<span class="line"><span style="color: #F97583">&#x3C;</span><span style="color: #E1E4E8">span class</span><span style="color: #F97583">=</span><span style="color: #9ECBFF">"tag"</span><span style="color: #F97583">></span></span>
<span class="line"><span style="color: #E1E4E8">    #{tag}</span></span>
<span class="line"><span style="color: #F97583">&#x3C;/</span><span style="color: #E1E4E8">span</span><span style="color: #F97583">></span></span>
<span class="line"><span style="color: #E1E4E8">{</span><span style="color: #F97583">/</span><span style="color: #E1E4E8">each}</span></span>
<span class="line"></span></code></pre>
<p>No messing with both <code>svelte-preprocess</code> and <code>vitePreprocess</code> in the same time needed.</p>
<section data-footnotes="" class="footnotes"><h2 class="sr-only" id="footnote-label">Footnotes</h2>
<ol>
<li id="user-content-fn-1">
<p>Like those visible in top part of this insight. <a href="#user-content-fnref-1" data-footnote-backref="" class="data-footnote-backref" aria-label="Back to content">↩</a></p>
</li>
</ol>
</section>`),E={title:"How to share tailwind classes between Astro and Svelte?",language:"en",date:"2023-09-06T20:48:05-02:00",tags:["svelte","astro","webdev","tailwind","css"]},y="/home/runner/work/entuzjazm/entuzjazm/src/content/insight/en/post-7.md",d=void 0;function b(){return`
My hyperfixation havbe recently took me over and I'm now coding alot.

To achieve interactivity in Projects tab I plan to use Svelte, while sticking to Astro in other areas.

In order to maintain same effect of tags[^1] in both context, I have created a separate css file:

\`\`\`css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .tag {
    @apply no-underline px-1 font-normal font-mono;
  }
}
\`\`\`

Then we can import that file from Astro component, as mentioned in docs:

\`\`\`typescript
---
// removed for breivity
import '../styles/tag.css';
//...
---
// ...
      <a class="tag">
// ...
\`\`\`

And the same trick goes in Svelte:

\`\`\`typescript

<script lang="ts">
    export let tags: string[];
    import '../styles/tag.css';
<\/script>

{#each tags as tag}
<span class="tag">
    #{tag}
</span>
{/each}

\`\`\`

No messing with both \`svelte-preprocess\` and \`vitePreprocess\` in the same time needed.

[^1]: Like those visible in top part of this insight.
`}function v(){return o}function w(){return[{depth:2,slug:"footnote-label",text:"Footnotes"}]}const f=l((n,t,s)=>{const{layout:m,...a}=E;return a.file=y,a.url=d,r`${c(o)}`});f[Symbol.for("astro.needsHeadRendering")]=!0;export{f as Content,v as compiledContent,f as default,y as file,E as frontmatter,w as getHeadings,e as images,b as rawContent,d as url};

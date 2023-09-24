import{c as l,s as p,r,m as c}from"./_astro_assets.6f478728.js";import{u as i}from"./ProjectList.38068c35.js";import"./astro-assets-services.9bc8d607.js";import"./index.aa289c0f.js";/* empty css                          */const E=async function(){return{}};async function y(a){return E().then(s=>a.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(t,n)=>p({src:s[n].src,...s[n].attributes})))}const o=await y(`<p>My hyperfixation havbe recently took me over and I’m now coding alot.</p>
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
</section>`),d={title:"How to share tailwind classes between Astro and Svelte?",language:"en",date:"2023-09-06T20:48:05-02:00",tags:["svelte","astro","webdev","tailwind","css"]},f="/home/runner/work/entuzjazm/entuzjazm/src/content/insight/en/post-7.md",m=void 0;function v(){return`
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
`}function w(){return o}function x(){return[{depth:2,slug:"footnote-label",text:"Footnotes"}]}const k=l((a,s,t)=>{const{layout:n,...e}=d;return e.file=f,e.url=m,r`${c()}${i(o)}`});export{k as Content,w as compiledContent,k as default,f as file,d as frontmatter,x as getHeadings,v as rawContent,m as url};

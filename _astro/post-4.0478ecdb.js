import{c as l,s as p,r,m as c}from"./_astro_assets.6f478728.js";import{u as i}from"./ProjectList.38068c35.js";import"./astro-assets-services.9bc8d607.js";import"./index.aa289c0f.js";/* empty css                          */const E=async function(){return{}};async function d(e){return E().then(s=>e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(o,n)=>p({src:s[n].src,...s[n].attributes})))}const a=await d(`<p>To speed up <del>shitpost</del> sharing knowledge, I had a thought - could I leverage snippets for this purpose? Answer is: <em>yes, of course</em>.</p>
<p>Merging both articles I have ended up with following template:</p>
<pre is:raw="" class="astro-code github-dark" style="background-color: #24292e; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color: #E1E4E8">  </span><span style="color: #9ECBFF">"Insight frontmatter"</span><span style="color: #E1E4E8">: {</span></span>
<span class="line"><span style="color: #E1E4E8">    </span><span style="color: #79B8FF">"prefix"</span><span style="color: #E1E4E8">: </span><span style="color: #9ECBFF">"insight"</span><span style="color: #E1E4E8">,</span></span>
<span class="line"><span style="color: #E1E4E8">    </span><span style="color: #79B8FF">"body"</span><span style="color: #E1E4E8">: [</span></span>
<span class="line"><span style="color: #E1E4E8">      </span><span style="color: #9ECBFF">"---"</span><span style="color: #E1E4E8">,</span></span>
<span class="line"><span style="color: #E1E4E8">      </span><span style="color: #9ECBFF">"title: </span><span style="color: #79B8FF">\\"</span><span style="color: #9ECBFF">$1</span><span style="color: #79B8FF">\\"</span><span style="color: #9ECBFF">"</span><span style="color: #E1E4E8">,</span></span>
<span class="line"><span style="color: #E1E4E8">      </span><span style="color: #9ECBFF">"language: \${2|en,pl|}"</span><span style="color: #E1E4E8">,</span></span>
<span class="line"><span style="color: #E1E4E8">      </span><span style="color: #9ECBFF">"date: </span><span style="color: #79B8FF">\\"</span><span style="color: #9ECBFF">$CURRENT_YEAR-$CURRENT_MONTH-\${CURRENT_DATE}T$CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND-02:00</span><span style="color: #79B8FF">\\"</span><span style="color: #9ECBFF">"</span><span style="color: #E1E4E8">,</span></span>
<span class="line"><span style="color: #E1E4E8">      </span><span style="color: #9ECBFF">"tags:"</span><span style="color: #E1E4E8">,</span></span>
<span class="line"><span style="color: #E1E4E8">      </span><span style="color: #9ECBFF">"  - $3"</span><span style="color: #E1E4E8">,</span></span>
<span class="line"><span style="color: #E1E4E8">      </span><span style="color: #9ECBFF">""</span><span style="color: #E1E4E8">,</span></span>
<span class="line"><span style="color: #E1E4E8">      </span><span style="color: #9ECBFF">"#relatedInsights:"</span><span style="color: #E1E4E8">,</span></span>
<span class="line"><span style="color: #E1E4E8">      </span><span style="color: #9ECBFF">"#  - </span><span style="color: #79B8FF">\\"\\"</span><span style="color: #9ECBFF">"</span><span style="color: #E1E4E8">,</span></span>
<span class="line"><span style="color: #E1E4E8">      </span><span style="color: #9ECBFF">"#urlsDescription: "</span><span style="color: #E1E4E8">,</span></span>
<span class="line"><span style="color: #E1E4E8">      </span><span style="color: #9ECBFF">"#referencedUrls:"</span><span style="color: #E1E4E8">,</span></span>
<span class="line"><span style="color: #E1E4E8">      </span><span style="color: #9ECBFF">"#  - description: </span><span style="color: #79B8FF">\\"\\"</span><span style="color: #9ECBFF">"</span><span style="color: #E1E4E8">,</span></span>
<span class="line"><span style="color: #E1E4E8">      </span><span style="color: #9ECBFF">"#   url: </span><span style="color: #79B8FF">\\"\\"</span><span style="color: #9ECBFF">"</span><span style="color: #E1E4E8">,</span></span>
<span class="line"><span style="color: #E1E4E8">      </span><span style="color: #9ECBFF">"---"</span><span style="color: #E1E4E8">,</span></span>
<span class="line"><span style="color: #E1E4E8">    ],</span></span>
<span class="line"><span style="color: #E1E4E8">    </span><span style="color: #79B8FF">"description"</span><span style="color: #E1E4E8">: </span><span style="color: #9ECBFF">"Insight frontmatter"</span></span>
<span class="line"><span style="color: #E1E4E8">  }</span></span></code></pre>
<p>Of course this snipped is tailored to my <a href="https://github.com/jpalczewski/entuzjazm/blob/1eda4f83530ca38d71bd37e36817d795571e3e26/src/content/config.ts">constantly changing schema</a>. First referenced article mentions <a href="https://snippet-generator.app/">a great tool which eases writing one</a>.</p>
<p><strong>Important.</strong> Zod, by default, doesn’t support timezones, which forces them to be in UTC<sup><a href="#user-content-fn-1" id="user-content-fnref-1" data-footnote-ref="" aria-describedby="footnote-label">1</a></sup>. So it might be necessary to change your schema accordingly<sup><a href="#user-content-fn-2" id="user-content-fnref-2" data-footnote-ref="" aria-describedby="footnote-label">2</a></sup></p>
<p>As a closing thought and quality of life (QoL) suggestion: <a href="https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one">this extensions</a> fixes list completion that makes adding new tags less painful.</p>
<section data-footnotes="" class="footnotes"><h2 class="sr-only" id="footnote-label">Footnotes</h2>
<ol>
<li id="user-content-fn-1">
<p>and astro perfectly handles this fact shifting them to your timezone. <a href="#user-content-fnref-1" data-footnote-backref="" class="data-footnote-backref" aria-label="Back to content">↩</a></p>
</li>
<li id="user-content-fn-2">
<p><a href="https://zod.dev/?id=iso-datetimes">Zod documentation</a> explains it nicely. <a href="#user-content-fnref-2" data-footnote-backref="" class="data-footnote-backref" aria-label="Back to content">↩</a></p>
</li>
</ol>
</section>`),y={title:"Using vscode snippets to template Astro posts",language:"en",date:"2023-08-20T21:31:57-02:00",tags:["astro","vscode","markdown"],urlsDescription:"Related URLs",referencedUrls:[{description:"General idea of using snippets to generate markdown",url:"https://dev.to/ceceliacreates/use-vs-code-snippets-to-generate-markdown-front-matter-fpc"},{description:"Time variables in snippets",url:"https://mattferderer.com/create-a-snippet-or-shortcut-in-vs-code-to-insert-the-current-date-time"}]},f="/home/runner/work/entuzjazm/entuzjazm/src/content/insight/en/post-4.md",u=void 0;function b(){return`
To speed up ~~shitpost~~ sharing knowledge, I had a thought - could I leverage snippets for this purpose? Answer is: _yes, of course_.

Merging both articles I have ended up with following template:

\`\`\`json
  "Insight frontmatter": {
    "prefix": "insight",
    "body": [
      "---",
      "title: \\"$1\\"",
      "language: \${2|en,pl|}",
      "date: \\"$CURRENT_YEAR-$CURRENT_MONTH-\${CURRENT_DATE}T$CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND-02:00\\"",
      "tags:",
      "  - $3",
      "",
      "#relatedInsights:",
      "#  - \\"\\"",
      "#urlsDescription: ",
      "#referencedUrls:",
      "#  - description: \\"\\"",
      "#   url: \\"\\"",
      "---",
    ],
    "description": "Insight frontmatter"
  }
\`\`\`

Of course this snipped is tailored to my [constantly changing schema](https://github.com/jpalczewski/entuzjazm/blob/1eda4f83530ca38d71bd37e36817d795571e3e26/src/content/config.ts). First referenced article mentions [a great tool which eases writing one](https://snippet-generator.app/).

**Important.** Zod, by default, doesn't support timezones, which forces them to be in UTC[^1]. So it might be necessary to change your schema accordingly[^2]

As a closing thought and quality of life (QoL) suggestion: [this extensions](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) fixes list completion that makes adding new tags less painful.

[^1]: and astro perfectly handles this fact shifting them to your timezone.
[^2]: [Zod documentation](https://zod.dev/?id=iso-datetimes) explains it nicely.
`}function B(){return a}function R(){return[{depth:2,slug:"footnote-label",text:"Footnotes"}]}const T=l((e,s,o)=>{const{layout:n,...t}=y;return t.file=f,t.url=u,r`${c()}${i(a)}`});export{T as Content,B as compiledContent,T as default,f as file,y as frontmatter,R as getHeadings,b as rawContent,u as url};

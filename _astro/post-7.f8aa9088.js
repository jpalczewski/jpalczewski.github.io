const n="en/post-7.md",t="insight",e="en/post-7",s=`
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
`,a={title:"How to share tailwind classes between Astro and Svelte?",tags:["svelte","astro","webdev","tailwind","css"],language:"en",date:new Date(1694040485e3)},i={type:"content",filePath:"/home/runner/work/entuzjazm/entuzjazm/src/content/insight/en/post-7.md",rawData:`
title: "How to share tailwind classes between Astro and Svelte?"
language: en
date: "2023-09-06T20:48:05-02:00"
tags:
  - svelte
  - astro
  - webdev
  - tailwind
  - css
#relatedInsights:
#  - ""
#urlsDescription:
#referencedUrls:
#  - description: ""
#   url: ""`};export{i as _internal,s as body,t as collection,a as data,n as id,e as slug};

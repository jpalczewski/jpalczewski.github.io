const L="modulepreload",$=function(e){return"/"+e},u={},I=function(e,t,r){if(!t||t.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(t.map(s=>{if(s=$(s),s in u)return;u[s]=!0;const a=s.endsWith(".css"),n=a?'[rel="stylesheet"]':"";if(r)for(let c=i.length-1;c>=0;c--){const l=i[c];if(l.href===s&&(!a||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${n}`))return;const o=document.createElement("link");if(o.rel=a?"stylesheet":L,!a&&(o.as="script",o.crossOrigin=""),o.href=s,document.head.appendChild(o),a)return new Promise((c,l)=>{o.addEventListener("load",c),o.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s})},Q={name:"InvalidComponentArgs",title:"Invalid component arguments.",message:e=>`Invalid arguments passed to${e?` <${e}>`:""} component.`,hint:"Astro components cannot be rendered directly via function call, such as `Component()` or `{items.map(Component)}`."},K={name:"ImageMissingAlt",title:"Missing alt property.",message:"The alt property is required.",hint:"The `alt` property is important for the purpose of accessibility, without it users using screen readers or other assistive technologies won't be able to understand what your image is supposed to represent. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-alt for more information."},O={name:"InvalidImageService",title:"Error while loading image service.",message:"There was an error loading the configured image service. Please see the stack trace for more information."},d={name:"MissingImageDimension",title:"Missing image dimensions",message:(e,t)=>`Missing ${e==="both"?"width and height attributes":`${e} attribute`} for ${t}. When using remote images, both dimensions are always required in order to avoid CLS.`,hint:"If your image is inside your `src` folder, you probably meant to import it instead. See [the Imports guide for more information](https://docs.astro.build/en/guides/imports/#other-assets)."},p={name:"UnsupportedImageFormat",title:"Unsupported image format",message:(e,t,r)=>`Received unsupported format \`${e}\` from \`${t}\`. Currently only ${r.join(", ")} are supported by our image services.`,hint:"Using an `img` tag directly instead of the `Image` component might be what you're looking for."},y={name:"ExpectedImage",title:"Expected src to be an image.",message:(e,t,r)=>`Expected \`src\` property for \`getImage\` or \`<Image />\` to be either an ESM imported image or a string with the path of a remote image. Received \`${e}\` (type: \`${t}\`).

Full serialized options received: \`${r}\`.`,hint:"This error can often happen because of a wrong path. Make sure the path to your image is correct. If you're passing an async function, make sure to call and await it."},b={name:"ExpectedImageOptions",title:"Expected image options.",message:e=>`Expected getImage() parameter to be an object. Received \`${e}\`.`},v={name:"LocalImageUsedWrongly",title:"Local images must be imported.",message:e=>`\`Image\`'s and \`getImage\`'s \`src\` parameter must be an imported image or an URL, it cannot be a string filepath. Received \`${e}\`.`,hint:"If you want to use an image from your `src` folder, you need to either import it or if the image is coming from a content collection, use the [image() schema helper](https://docs.astro.build/en/guides/images/#images-in-content-collections) See https://docs.astro.build/en/guides/images/#src-required for more information on the `src` property."},X={name:"AstroGlobUsedOutside",title:"Astro.glob() used outside of an Astro file.",message:e=>`\`Astro.glob(${e})\` can only be used in \`.astro\` files. \`import.meta.glob(${e})\` can be used instead to achieve a similar result.`,hint:"See Vite's documentation on `import.meta.glob` for more information: https://vitejs.dev/guide/features.html#glob-import"},Y={name:"AstroGlobNoMatch",title:"Astro.glob() did not match any files.",message:e=>`\`Astro.glob(${e})\` did not return any matching files. Check the pattern for typos.`},R={name:"MissingSharp",title:"Could not find Sharp.",message:"Could not find Sharp. Please install Sharp (`sharp`) manually into your project or migrate to another image service.",hint:"See Sharp's installation instructions for more information: https://sharp.pixelplumbing.com/install. If you are not relying on `astro:assets` to optimize, transform, or process any images, you can configure a passthrough image service instead of installing Sharp. See https://docs.astro.build/en/reference/errors/missing-sharp for more information.\n\nSee https://docs.astro.build/en/guides/images/#default-image-service for more information on how to migrate to another image service."};function T(e){return e.replace(/\r\n|\r(?!\n)|\n/g,`
`)}function M(e,t){if(!t||t.line===void 0||t.column===void 0)return"";const r=T(e).split(`
`).map(n=>n.replace(/\t/g,"  ")),i=[];for(let n=-2;n<=2;n++)r[t.line+n]&&i.push(t.line+n);let s=0;for(const n of i){let o=`> ${n}`;o.length>s&&(s=o.length)}let a="";for(const n of i){const o=n===t.line-1;a+=o?"> ":"  ",a+=`${n+1} | ${r[n]}
`,o&&(a+=`${Array.from({length:s}).join(" ")}  | ${Array.from({length:t.column}).join(" ")}^
`)}return a}class m extends Error{loc;title;hint;frame;type="AstroError";constructor(t,...r){super(...r);const{name:i,title:s,message:a,stack:n,location:o,hint:c,frame:l}=t;this.title=s,this.name=i,a&&(this.message=a),this.stack=n||this.stack,this.loc=o,this.hint=c,this.frame=l}setLocation(t){this.loc=t}setName(t){this.name=t}setMessage(t){this.message=t}setHint(t){this.hint=t}setFrame(t,r){this.frame=M(t,r)}static is(t){return t.type==="AstroError"}}function U(e){return e.endsWith("/")?e.slice(0,e.length-1):e}function P(e){return e.startsWith("/")?e.substring(1):e}function _(e){return e.replace(/^\/|\/$/g,"")}function W(e){return typeof e=="string"||e instanceof String}function j(...e){return e.filter(W).map((t,r)=>r===0?U(t):r===e.length-1?P(t):_(t)).join("/")}function A(e){return/^(http|ftp|https|ws):?\/\//.test(e)||e.startsWith("data:")}const w=["jpeg","jpg","png","tiff","webp","gif","svg","avif"];function k(e){return e?"transform"in e:!1}function q(e){let t=parseInt(e);return Number.isNaN(t)?e:t}const h={validateOptions(e){if(!e.src||typeof e.src!="string"&&typeof e.src!="object")throw new m({...y,message:y.message(JSON.stringify(e.src),typeof e.src,JSON.stringify(e,(t,r)=>r===void 0?null:r))});if(g(e.src)){if(!w.includes(e.src.format))throw new m({...p,message:p.message(e.src.format,e.src.src,w)});e.src.format==="svg"&&(e.format="svg")}else{if(e.src.startsWith("/@fs/")||!A(e.src)&&!e.src.startsWith("/"))throw new m({...v,message:v.message(e.src)});let t;if(!e.width&&!e.height?t="both":!e.width&&e.height?t="width":e.width&&!e.height&&(t="height"),t)throw new m({...d,message:d.message(t,e.src)})}return e.format||(e.format="webp"),e},getHTMLAttributes(e){let t=e.width,r=e.height;if(g(e.src)){const l=e.src.width/e.src.height;r&&!t?t=Math.round(r*l):t&&!r?r=Math.round(t/l):!t&&!r&&(t=e.src.width,r=e.src.height)}const{src:i,width:s,height:a,format:n,quality:o,...c}=e;return{...c,width:t,height:r,loading:c.loading??"lazy",decoding:c.decoding??"async"}},getURL(e,t){const r=new URLSearchParams;if(g(e.src))r.append("href",e.src.src);else if(z(e.src,t))r.append("href",e.src);else return e.src;return Object.entries({w:"width",h:"height",q:"quality",f:"format"}).forEach(([a,n])=>{e[n]&&r.append(a,e[n].toString())}),`${j("/","/_image")}?${r}`},parseURL(e){const t=e.searchParams;return t.has("href")?{src:t.get("href"),width:t.has("w")?parseInt(t.get("w")):void 0,height:t.has("h")?parseInt(t.get("h")):void 0,format:t.get("f"),quality:t.get("q")}:void 0}};function C(e,t){return N(e,t.protocol)&&E(e,t.hostname,!0)&&x(e,t.port)&&F(e,t.pathname,!0)}function x(e,t){return!t||t===e.port}function N(e,t){return!t||t===e.protocol.slice(0,-1)}function E(e,t,r){if(t){if(!r||!t.startsWith("*"))return t===e.hostname;if(t.startsWith("**.")){const i=t.slice(2);return i!==e.hostname&&e.hostname.endsWith(i)}else if(t.startsWith("*.")){const i=t.slice(1);return e.hostname.replace(i,"").split(".").filter(Boolean).length===1}}else return!0;return!1}function F(e,t,r){if(t){if(!r||!t.endsWith("*"))return t===e.pathname;if(t.endsWith("/**")){const i=t.slice(0,-2);return i!==e.pathname&&e.pathname.startsWith(i)}else if(t.endsWith("/*")){const i=t.slice(0,-1);return e.pathname.replace(i,"").split("/").filter(Boolean).length===1}}else return!0;return!1}function g(e){return typeof e=="object"}function H(e){return typeof e=="string"}function z(e,{domains:t=[],remotePatterns:r=[]}){if(!A(e))return!1;const i=new URL(e);return t.some(s=>E(i,s))||r.some(s=>C(i,s))}async function D(){if(!globalThis?.astroAsset?.imageService){const{default:e}=await I(()=>Promise.resolve().then(()=>J),void 0).catch(t=>{const r=new m(O);throw r.cause=t,r});return globalThis.astroAsset||(globalThis.astroAsset={}),globalThis.astroAsset.imageService=e,e}return globalThis.astroAsset.imageService}async function Z(e,t){if(!e||typeof e!="object")throw new m({...b,message:b.message(JSON.stringify(e))});const r=await D(),i={...e,src:typeof e.src=="object"&&"then"in e.src?(await e.src).default??await e.src:e.src},s=r.validateOptions?await r.validateOptions(i,t):i;let a=await r.getURL(s,t);return k(r)&&globalThis.astroAsset.addStaticImage&&!(H(s.src)&&a===s.src)&&(a=globalThis.astroAsset.addStaticImage(s)),{rawOptions:i,options:s,src:a,attributes:r.getHTMLAttributes!==void 0?r.getHTMLAttributes(s,t):{}}}let f;const S={low:25,mid:50,high:80,max:100};async function G(){let e;try{e=(await I(()=>import("./index.d10f0f49.js").then(t=>t.i),[])).default}catch{throw new m(R)}return e}const V={validateOptions:h.validateOptions,getURL:h.getURL,parseURL:h.parseURL,getHTMLAttributes:h.getHTMLAttributes,async transform(e,t){f||(f=await G());const r=t;if(r.format==="svg")return{data:e,format:"svg"};let i=f(e,{failOnError:!1,pages:-1});if(i.rotate(),r.height&&!r.width?i.resize({height:r.height}):r.width&&i.resize({width:r.width}),r.format){let n;if(r.quality){const o=q(r.quality);typeof o=="number"?n=o:n=r.quality in S?S[r.quality]:void 0}i.toFormat(r.format,{quality:n})}const{data:s,info:a}=await i.toBuffer({resolveWithObject:!0});return{data:s,format:a.format}}};var B=V;const J=Object.freeze(Object.defineProperty({__proto__:null,default:B},Symbol.toStringTag,{value:"Module"}));export{m as A,Q as I,I as _,X as a,Y as b,K as c,Z as g};

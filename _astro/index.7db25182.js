function N(){}function z(t,e){for(const n in e)t[n]=e[n];return t}function at(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function k(t){return t()}function M(){return Object.create(null)}function g(t){t.forEach(k)}function O(t){return typeof t=="function"}function dt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function F(t){return Object.keys(t).length===0}function _t(t,e,n,i){if(t){const r=P(t,e,n,i);return t[0](r)}}function P(t,e,n,i){return t[1]&&i?z(n.ctx.slice(),t[1](i(e))):n.ctx}function ht(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const f=[],l=Math.max(e.dirty.length,r.length);for(let o=0;o<l;o+=1)f[o]=e.dirty[o]|r[o];return f}return e.dirty|r}return e.dirty}function mt(t,e,n,i,r,f){if(r){const l=P(e,n,i,f);t.p(l,r)}}function pt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let $=!1;function R(){$=!0}function J(){$=!1}function K(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function V(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let c=0;c<e.length;c++){const a=e[c];a.claim_order!==void 0&&s.push(a)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const c=e[s].claim_order,a=(r>0&&e[n[r]].claim_order<=c?r+1:K(1,r,x=>e[n[x]].claim_order,c))-1;i[s]=n[a]+1;const u=a+1;n[u]=s,r=Math.max(u,r)}const f=[],l=[];let o=e.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(f.push(e[s-1]);o>=s;o--)l.push(e[o]);o--}for(;o>=0;o--)l.push(e[o]);f.reverse(),l.sort((s,c)=>s.claim_order-c.claim_order);for(let s=0,c=0;s<l.length;s++){for(;c<f.length&&l[s].claim_order>=f[c].claim_order;)c++;const a=c<f.length?f[c]:null;t.insertBefore(l[s],a)}}function W(t,e){if($){for(V(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Q(t,e,n){t.insertBefore(e,n||null)}function U(t,e,n){$&&!n?W(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function b(t){t.parentNode&&t.parentNode.removeChild(t)}function yt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function I(t){return document.createElement(t)}function X(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function A(t){return document.createTextNode(t)}function gt(){return A(" ")}function xt(){return A("")}function wt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function bt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $t(t){return t.dataset.svelteH}function Y(t){return Array.from(t.childNodes)}function D(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function G(t,e,n,i,r=!1){D(t);const f=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const o=t[l];if(e(o)){const s=n(o);return s===void 0?t.splice(l,1):t[l]=s,r||(t.claim_info.last_index=l),o}}for(let l=t.claim_info.last_index-1;l>=0;l--){const o=t[l];if(e(o)){const s=n(o);return s===void 0?t.splice(l,1):t[l]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,o}}return i()})();return f.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,f}function Z(t,e,n,i){return G(t,r=>r.nodeName===e,r=>{const f=[];for(let l=0;l<r.attributes.length;l++){const o=r.attributes[l];n[o.name]||f.push(o.name)}f.forEach(l=>r.removeAttribute(l))},()=>i(e))}function Et(t,e,n){return Z(t,e,n,I)}function tt(t,e){return G(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>A(e),!0)}function Nt(t){return tt(t," ")}function j(t,e,n){for(let i=n;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===e)return i}return-1}function Tt(t,e){const n=j(t,"HTML_TAG_START",0),i=j(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new H(e);D(t);const r=t.splice(n,i-n+1);b(r[0]),b(r[r.length-1]);const f=r.slice(1,r.length-1);for(const l of f)l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new H(e,f)}function vt(t,e){e=""+e,t.data!==e&&(t.data=e)}class et{is_svg=!1;e=void 0;n=void 0;t=void 0;a=void 0;constructor(e=!1){this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=X(n.nodeName):this.e=I(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Q(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(b)}}class H extends et{l=void 0;constructor(e=!1,n){super(e),this.e=this.n=null,this.l=n}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)U(this.t,this.n[n],e)}}let y;function p(t){y=t}function At(){if(!y)throw new Error("Function called outside component initialization");return y}const h=[],C=[];let m=[];const B=[],nt=Promise.resolve();let T=!1;function it(){T||(T=!0,nt.then(q))}function v(t){m.push(t)}const E=new Set;let _=0;function q(){if(_!==0)return;const t=y;do{try{for(;_<h.length;){const e=h[_];_++,p(e),rt(e.$$)}}catch(e){throw h.length=0,_=0,e}for(p(null),h.length=0,_=0;C.length;)C.pop()();for(let e=0;e<m.length;e+=1){const n=m[e];E.has(n)||(E.add(n),n())}m.length=0}while(h.length);for(;B.length;)B.pop()();T=!1,E.clear(),p(t)}function rt(t){if(t.fragment!==null){t.update(),g(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(v)}}function lt(t){const e=[],n=[];m.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),m=e}const w=new Set;let d;function St(){d={r:0,c:[],p:d}}function Lt(){d.r||g(d.c),d=d.p}function st(t,e){t&&t.i&&(w.delete(t),t.i(e))}function Mt(t,e,n,i){if(t&&t.o){if(w.has(t))return;w.add(t),d.c.push(()=>{w.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function jt(t){t&&t.c()}function Ht(t,e){t&&t.l(e)}function ct(t,e,n){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),v(()=>{const f=t.$$.on_mount.map(k).filter(O);t.$$.on_destroy?t.$$.on_destroy.push(...f):g(f),t.$$.on_mount=[]}),r.forEach(v)}function ot(t,e){const n=t.$$;n.fragment!==null&&(lt(n.after_update),g(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ft(t,e){t.$$.dirty[0]===-1&&(h.push(t),it(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ct(t,e,n,i,r,f,l,o=[-1]){const s=y;p(t);const c=t.$$={fragment:null,ctx:[],props:f,update:N,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:M(),dirty:o,skip_bound:!1,root:e.target||s.$$.root};l&&l(c.root);let a=!1;if(c.ctx=n?n(t,e.props||{},(u,x,...S)=>{const L=S.length?S[0]:x;return c.ctx&&r(c.ctx[u],c.ctx[u]=L)&&(!c.skip_bound&&c.bound[u]&&c.bound[u](L),a&&ft(t,u)),x}):[],c.update(),a=!0,g(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){R();const u=Y(e.target);c.fragment&&c.fragment.l(u),u.forEach(b)}else c.fragment&&c.fragment.c();e.intro&&st(t.$$.fragment),ct(t,e.target,e.anchor),J(),q()}p(s)}class Bt{$$=void 0;$$set=void 0;$destroy(){ot(this,1),this.$destroy=N}$on(e,n){if(!O(n))return N;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!F(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ut="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ut);export{N as A,yt as B,A as C,tt as D,vt as E,jt as F,Ht as G,H,Tt as I,ct as J,ot as K,Bt as S,gt as a,xt as b,Et as c,Nt as d,I as e,bt as f,$t as g,U as h,Ct as i,Mt as j,Lt as k,wt as l,b as m,_t as n,Y as o,W as p,pt as q,ht as r,dt as s,st as t,mt as u,St as v,at as w,At as x,p as y,q as z};

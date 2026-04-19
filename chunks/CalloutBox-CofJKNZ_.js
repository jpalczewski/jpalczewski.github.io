import { c as createAstro, a as createComponent, m as maybeRenderHead, d as addAttribute, b as renderTemplate, e as renderSlot } from './astro-server-82cx7PaZ.js';
import 'piccolore';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro("https://blog.palczew.ski");
const $$CalloutBox = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CalloutBox;
  const { type = "info", title, icon = true, class: className } = Astro2.props;
  const icons = {
    wip: "\u{1F6A7}",
    info: "\u2139\uFE0F",
    warning: "\u26A0\uFE0F",
    error: "\u274C"
  };
  const typeColors = {
    wip: { primary: "#f4e04d", secondary: "#f4c430", rgb: "244, 228, 77" },
    info: { primary: "#3d5af1", secondary: "#5a7fff", rgb: "61, 90, 241" },
    warning: { primary: "#9d4edd", secondary: "#8b5fbf", rgb: "157, 78, 237" },
    error: { primary: "#ff1053", secondary: "#ff4d7a", rgb: "255, 16, 83" }
  };
  const currentType = typeColors[type];
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["callout-box", `callout-box--${type}`, className], "class:list")}${addAttribute(type, "data-type")}${addAttribute(`--callout-primary: ${currentType.primary}; --callout-secondary: ${currentType.secondary}; --callout-rgb: ${currentType.rgb};`, "style")} data-astro-cid-7dd6j7xo> <!-- Neon orbs background (independent from page parallax) --> <div class="callout-box__orbs" data-astro-cid-7dd6j7xo> <div class="callout-box__orb callout-box__orb--1" data-astro-cid-7dd6j7xo></div> <div class="callout-box__orb callout-box__orb--2" data-astro-cid-7dd6j7xo></div> <div class="callout-box__orb callout-box__orb--3" data-astro-cid-7dd6j7xo></div> </div> <div class="callout-box__content" data-astro-cid-7dd6j7xo> ${(title || icon) && renderTemplate`<div class="callout-box__header" data-astro-cid-7dd6j7xo> ${icon && renderTemplate`<span class="callout-box__icon" data-astro-cid-7dd6j7xo>${icons[type]}</span>`} ${title && renderTemplate`<h3 class="callout-box__title" data-astro-cid-7dd6j7xo>${title}</h3>`} </div>`} <div class="callout-box__body" data-astro-cid-7dd6j7xo> ${renderSlot($$result, $$slots["default"])} </div> </div> </div> `;
}, "/home/runner/work/karpaty/karpaty/src/components/ui/CalloutBox.astro", void 0);

export { $$CalloutBox as $ };

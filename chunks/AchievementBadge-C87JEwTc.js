import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from './astro-server-61wKoaru.js';
import 'piccolore';
/* empty css                               */

const $$Astro = createAstro("https://blog.palczew.ski");
const $$AchievementBadge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AchievementBadge;
  const { title, description, year, status, link, icon = "\u{1F3C6}" } = Astro2.props;
  const CardTag = link ? "a" : "div";
  const cardProps = link ? { href: link, target: "_blank", rel: "noopener noreferrer" } : {};
  return renderTemplate`${renderComponent($$result, "CardTag", CardTag, { "class": "achievement-badge", ...cardProps, "data-astro-cid-yhsl34gf": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="achievement-badge__icon-wrapper" data-astro-cid-yhsl34gf> <span class="achievement-badge__icon" data-astro-cid-yhsl34gf>${icon}</span> </div> <div class="achievement-badge__content" data-astro-cid-yhsl34gf> <div class="achievement-badge__header" data-astro-cid-yhsl34gf> <h3 class="achievement-badge__title" data-astro-cid-yhsl34gf>${title}</h3> ${year && renderTemplate`<span class="achievement-badge__year" data-astro-cid-yhsl34gf>${year}</span>`} </div> <p class="achievement-badge__description" data-astro-cid-yhsl34gf>${description}</p> ${status && renderTemplate`<div class="achievement-badge__footer" data-astro-cid-yhsl34gf> <span class="achievement-badge__status" data-astro-cid-yhsl34gf>${status}</span> </div>`} ${link && renderTemplate`<div class="achievement-badge__link-indicator" data-astro-cid-yhsl34gf> <span data-astro-cid-yhsl34gf>View Details →</span> </div>`} </div> ` })} `;
}, "/home/runner/work/karpaty/karpaty/src/components/about/AchievementBadge.astro", void 0);

export { $$AchievementBadge as $ };

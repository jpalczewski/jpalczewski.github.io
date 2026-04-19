import { e as escape_html, c as attr, d as attr_style, s as stringify, a as ensure_array_like } from './_at-astro-renderers-DzRu7pEN.js';
/* empty css                         */

function SkillBar($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { skillName, level, subcategories = [], description } = $$props;

		// Level to color mapping (purple-gold gradient)
		const levelToColor = {
			'Expert': 'linear-gradient(90deg, #9d4edd 0%, #f4c430 100%)',
			'Advanced': 'linear-gradient(90deg, #9d4edd 0%, #c77dff 100%)',
			'Intermediate': 'linear-gradient(90deg, #6a3d9a 0%, #9d4edd 100%)'
		};
		const gradient = levelToColor[level];

		$$renderer.push(`<div class="skill-bar svelte-11xmizc"><div class="skill-bar__header svelte-11xmizc"><h3 class="skill-bar__name svelte-11xmizc">${escape_html(skillName)}</h3> <span class="skill-bar__level svelte-11xmizc"${attr('data-level', level.toLowerCase())}>${escape_html(level)}</span></div> `);

		if (description) {
			$$renderer.push('<!--[-->');
			$$renderer.push(`<p class="skill-bar__description svelte-11xmizc">${escape_html(description)}</p>`);
		} else {
			$$renderer.push('<!--[!-->');
		}

		$$renderer.push(`<!--]--> <div class="skill-bar__progress svelte-11xmizc"><div class="skill-bar__fill svelte-11xmizc"${attr_style(`width: ${stringify(0)}%; background: ${stringify(gradient)};`)}></div></div> `);

		if (subcategories.length > 0) {
			$$renderer.push('<!--[-->');
			$$renderer.push(`<div class="skill-bar__subcategories svelte-11xmizc"><!--[-->`);

			const each_array = ensure_array_like(subcategories);

			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let sub = each_array[$$index];

				$$renderer.push(`<span class="skill-bar__tag svelte-11xmizc">${escape_html(sub)}</span>`);
			}

			$$renderer.push(`<!--]--></div>`);
		} else {
			$$renderer.push('<!--[!-->');
		}

		$$renderer.push(`<!--]--></div>`);
	});
}

export { SkillBar as S };

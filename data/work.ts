const work: Array<Experience> = [
	{
		title: 'Open Source Contributions',
		location: 'Freelance',
		date: {
			start: new Date(`May 2022`),
			ongoing: true
		},
		points: [
			`Created & maintain [Simple Shader Component](https://www.npmjs.com/package/@svey-xyz/simple-shader-component) - a simple to use webgl shader component, with included framework wrappers and strong typing.`,
			`Created [vldx](https://www.npmjs.com/package/vldx) -  an open-srouce javascript based HTML form validator that's easy to use, reduces API calls, and supports custom rules.`,
			`Open sourced my personal [Next.js template](https://github.com/svey-xyz/site-template) - with highly configurable base components and schemas.`,
			`Received positive community & maintainer feedback when [contributing to an open source Sanity plugin](https://github.com/ndimatteo/sanity-plugin-note-field/pull/5).`,
		]
	},
	{
		title: 'Lecturing in Web Design',
		location: 'Freelance',
		date: {
			start: new Date(`January 2021`),
			ongoing: true
		},
		points: [
			`Created an introduction to web design workshop for a class of 4th year students at TMU. A 3 hour lexture with hands - on compoennts that has been highly requested by students and proffessors. 2025 will mark my 4th year running of conducting this workshop at TMU.`,
			`Positive feedback from TMU lead to the creation of an asynchronous Wordpress workshop for the University of North Carolina at Greensboro(UNCG), that has been used to teach a large number of students over the years.`,
			`Was invited to present artist talks at TMU and UNCG, on- web design, web development, interactive web installations, and working as a contractor.`,
		]
	},
	{
		title: 'Web Development Freelance',
		location: 'Freelance',
		date: {
			start: new Date(`March 2020`),
			ongoing: true
		},
		points: [
			`Clients include [Victory Social Club (VSC)](https://victorysocialclub.com/), [LPT BIA](https://lptbia.com/), Toronto Metropolitan University (TMU), the city of Toronto, and more.`,
			`Reduced overhead by creating bespoke management interfaces using Sanity and Nextjs; resulting in hours of work saved for clients.`,
			`Increased Lighthouse scores by up to 30pts by reducing CSR and SSR, where applicable, in favour of SSG.`,
			`Provided intuitive documentation for a custom client interface, making onboarding new developers to the project easier.`,
		]
	},
	{
		title: 'Interactive Art Exhibition',
		location: 'City of Toronto',
		date: {
			start: new Date(`September 2021`),
			end: new Date(`December 2021`)
		},
		points: [
			`Used front & backend web technologies to create a large scale interactive art exhibition, that was deployed on the streets of Toronto with local rpis hosting the web servers.`,
			`Increased participation with the exhibition by clearly communicating the multifaceted thoughts of an interdisciplinary team.`,
		]
	},
]

export default work
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
			`Created [vldx](https://www.npmjs.com/package/vldx) -  an open-source javascript based HTML form validator that is easy to use, reduces API calls, and supports custom rules.`,
			`Open sourced my personal [Next.js template](https://github.com/svey-xyz/site-template) - with highly configurable base components and schemas.`,
			`Received positive community & maintainer feedback when [contributing to an open source Sanity plugin](https://github.com/ndimatteo/sanity-plugin-note-field/pull/5).`,
		]
	},
	{
		title: 'Web Design Lectures',
		location: 'Freelance',
		date: {
			start: new Date(`January 2021`),
			ongoing: true
		},
		points: [
			`Created an introduction to web design workshop for a class of 4th year students. The 3 hour lecture with hands-on components has been highly requested by students and professors; 2025 will mark my 4th year conducting this workshop at Toronto Metropolitan University (TMU).`,
			`Positive feedback from TMU lead to the creation of an asynchronous Wordpress workshop for the University of North Carolina at Greensboro (UNCG), that has been used to teach a large number of students over the years.`,
			`Presented artist talks at TMU and UNCG, on- web design, web development, interactive web installations, and working as a contractor.`,
		]
	},
	{
		title: 'Full Stack Web Development',
		location: 'Freelance',
		date: {
			start: new Date(`March 2020`),
			ongoing: true
		},
		points: [
			`Clients include [Victory Social Club (VSC)](https://victorysocialclub.com/), [LPT BIA](https://lptbia.com/), TMU, the City of Toronto, and more.`,
			`Reduced overhead by creating bespoke management interfaces using Sanity and Nextjs; resulting in hours of work saved for clients.`,
			`Increased Lighthouse scores by up to 30pts by reducing CSR and SSR, where applicable, in favour of SSG.`,
			`Provided intuitive documentation for a custom client interface, making onboarding new developers to the project easier.`,
			`Fully automatic CI/CD with Cloudflare Workers, GitHub Actions, and/or Vercel provides a seamless deployment strategy for any project.`
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
			`The exhibition was a series of building sized projections along the streets of Toronto; viewers could approach a box, housing a Raspberry Pi (RPi), to interact with the piece in realtime.`,
			`Created the frontend user interface with 11ty for SSG, and used Node and NGINX  to deploy local web servers to RPis with custom tooling to scan the QR codes generated by users.`,
			`Clearly communicated the thoughts of an interdisciplinary team; increasing participation with the exhibition.`,
		]
	},
]

export default work
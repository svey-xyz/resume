const personal: personal = {
	name: 'Hayden Soule',
	socials: [
		{
			text: `x@svey.xyz`,
			link: 'mailto:x@svey.xyz'
		},
		{
			text: `svey.xyz`,
			link: 'https://svey.xyz'
		},
		{
			text: `github.com/svey-xyz`,
			link: 'https://github.com/svey-xyz'
		},
		{
			text: `(613) 806-7643`,
			link: 'tel:+16138067643'
		},
	],
	blurb: `I am a full stack web developer, and homelab enthusiast, working to create robust web experiences. My unique background in tech and the arts inﬂuences my approach to projects and leads to innovative solutions.`,
	technologies: [
		{
			type: 'Languages',
			tools: ["Javascript", "Typescript", "Python", "Java", "PHP"]
		},
		{
			type: 'Frontend',
			tools: ["React", "Tailwindcss", "Next.js", "HTML5", "11ty", "Wordpress", "Shopify"]
		},
		{
			type: 'Javascript Env',
			tools: ["Prisma", "Cloudflare Workers", "Sanity", "Webpack", "PostCSS", "Node", "Bun"]
		},
		{
			type: 'Other',
			tools: ["Git", "Linux", "Docker", "Kubernetes", "GraphQL", "SQL", "SQLite", "REST"]
		}
	],
	projects: [
		{
			title: 'Homelab',
			points: [
				`Deployed an enterprise class network stack to manage self-hostable applications.`
			]
		},
		{
			title: 'simpledotdash',
			points: [
				`[An open source dashboard project for the homelab](https://github.com/svey-xyz/simpledotdash). Built to manage my own homelab, as well as to learn new skills for frontend and backend.`,
				`Built with Next.js, Prisma, Tailwindcss. Authentication allows for multiple users.`,
			]
		}
	]
}

export default personal
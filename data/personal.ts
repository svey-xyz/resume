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
	blurb: `I am a full stack web developer, and homelab enthusiast, working to create robust web experiences. My unique background in tech and the arts influences my approach to projects and leads to innovative solutions.`,
	technologies: [
		{
			type: 'Languages',
			tools: ["Javascript", "Typescript", "Python", "Java", "PHP"]
		},
		{
			type: 'Frontend',
			tools: ["React", "Tailwindcss", "Next.js", "Astro", "HTML5", "11ty", "Wordpress", "Shopify", "Bootstrap", "Sass", "CSS3", "WebGL", "Three.js"]
		},
		{
			type: 'Javascript Env',
			tools: ["Prisma", "Cloudflare Workers", "Sanity", "Webpack", "PostCSS", "Node", "Bun", "Vite", "ESBuild"]
		},
		{
			type: 'Other',
			tools: ["Git", "Linux", "Docker", "Kubernetes", "Helm", "GraphQL", "SQL", "SQLite", "REST", "GitHub Actions", "Claude AI", "OpenCode", "Moonshot AI", "Vercel", "NGINX"]
		}
	],
	projects: [
		{
			title: 'Homelab',
			points: [
				`Deployed an enterprise class network stack to manage self-hostable applications.`,
				`Managed hardware installations, and created custom tooling to manage the stack.`,
				`More recently I have expanded my deployment to include a portable Raspberry Pi cluster.`,
			]
		},
		{
			title: 'AzerothChatter',
			points: [
				`[An open source project for AzerothCore](https://github.com/svey-xyz/azerothchatter). Low computational cost realistic in world chatter for locally hosted game servers.`,
				`Built with Python, Lua, and Claude AI.`,
			]
		}
	]
}

export default personal
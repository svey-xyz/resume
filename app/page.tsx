import { Header } from "@/components/Header";
import { Experience } from "@/components/Experience"
import { personal, work, education } from "@/data";
import { Section } from "@/components/Section";
import crypto from 'crypto'

const Home = () => {
  return (
		<div className="">
			<Header personal={personal}/>

			<Section title="Professional Experience">
				{ work.flatMap((exp) => {
					const key = crypto.createHash('md5').update(exp.title).digest('hex');
					return <Experience exp={exp} className="mb-2" key={key} />
				})}
			</Section>

			<Section title="Education">
				{ education.flatMap((exp) => {
					const key = crypto.createHash('md5').update(exp.title).digest('hex');
					return <Experience exp={exp} className="mb-2" key={key} />
				})}
			</Section>


			<Section title={`Technologies`} >
				<span className="">
					<strong>Languages:</strong>
					Javascript Typescript Python Java PHP
				</span>
				<span className="">
					<strong>Frontend:</strong>
					React Tailwind Next.js HTML5 11ty Wordpress Shopify
				</span>
				<span className="">
					<strong>Javascript:</strong>
					Prisma Cloudflare Workers Webpack eslint postcss node bun
				</span>
				<span className="">
					<strong>Other:</strong>
					Git Linux Docker Kubernetes GraphQL SQL SQLite REST Proxmox
				</span>
			</Section>

			<Section title={`Projects`} >
				<p>Projects  - homelab / private cloud what skills were used</p>
			</Section>
			
		</div>
  );
}

export default Home

import { Header } from "@/components/Header";
import { Experience } from "@/components/Experience"
import { personal, work, education } from "@/data";
import { Section } from "@/components/Section";
import crypto from 'crypto'
import { Technologies } from "@/components/Technologies";

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
				<Technologies
					title="Languages"
					technologies={["Javascript", "Typescript", "Python", "Java", "PHP"]}
				/>
				<span className="">
					<strong>Frontend:</strong>
					React Tailwind Next.js HTML5 11ty Wordpress Shopify
				</span>
				<span className="">
					<strong>Backend:</strong>
					Prisma Cloudflare Workers Sanity Webpack eslint postcss node bun
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

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


			<Section title={`Skills`} >
				<p>Linux | Virtualization | Containerization | Git | Network Infrastructure | Relational Databases | SQL | REST | GraphQL | Web Development | Unit testing | JavaScript | TypeScript | Node.js | Bun  | PHP | Wordpress | React | Nextjs</p>
			</Section>

			<Section title={`Projects`} >
				<p>Projects  - homelab / private cloud what skills were used</p>
			</Section>
			
		</div>
  );
}

export default Home

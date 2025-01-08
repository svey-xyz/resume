import { Header } from "@/components/Header";
import { Experience } from "@/components/Experience"
import { personal, work, education } from "@/data";

const Home = () => {
  return (
		<section className="">
			<Header personal={personal}/>
			
			<hr />

			<div>
				<h2>Professional Experience</h2>
				{work.flatMap((exp) => {
					return <Experience exp={exp} className="mb-2"/>
				})}
			</div>

			<hr />

			<div>
				<h2>Education</h2>
				{education.flatMap((exp) => {
					return <Experience exp={exp} className="mb-2" />
				})}
			</div>
			{/* <h3>BFA in Integrated Digital, with distinction</h3>
			<p><em>Toronto Metropolitan University</em> | <em>2020</em>
				relevant courses, grades
				thesis - 2d platformer</p> */}

			<hr />

			<h2>Skills</h2>
			<p>Linux | Virtualization | Containerization | Git | Network Infrastructure | Relational Databases | SQL | REST | GraphQL | Web Development | Unit testing | JavaScript | TypeScript | Node.js | Bun  | PHP | Wordpress | React | Nextjs</p>
			<p>Projects  - homelab / private cloud what skills were used</p>
		</section>
  );
}

export default Home

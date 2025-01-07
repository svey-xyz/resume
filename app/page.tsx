import { Header } from "@/components/Header";
import { WorkExperience } from "@/components/WorkExperience"
import { personal, work } from "@/data";

const Home = () => {
  return (
		<section className="">
			<Header personal={personal}/>
			
			<hr />

			<h2>Professional Experience</h2>

			<div>
				{work.flatMap((exp) => {
					return <WorkExperience exp={exp} className="mb-2"/>
				})}
			</div>

			<hr />

			<h2>Education</h2>
			<h3>Bachelor's Degree of Fine Arts with a specialization in Integrated Digital and with distinction</h3>
			<p><em>Toronto Metropolitan University</em> | <em>2020</em>
				relevant courses, grades
				thesis - 2d platformer</p>

			<hr />

			<h2>Skills</h2>
			<p>Linux | Virtualization | Containerization | Git | Network Infrastructure | Relational Databases | SQL | REST | GraphQL | Web Development | Unit testing | JavaScript | TypeScript | Node.js | Bun  | PHP | Wordpress | React | Nextjs</p>
			<p>Projects  - homelab / private cloud what skills were used</p>
		</section>
  );
}

export default Home

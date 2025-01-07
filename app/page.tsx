import { WorkExperience } from "@/components/WorkExperience"
import workExperiences from "@/data/work";

const Home = () => {
  return (
		<section className="">
			<div className="flex flex-row justify-between items-baseline">
				<h1>Hayden Soule</h1>
				<p><a href="mailto:x@svey.xyz">x@svey.xyz</a> | <a href="https://svey.xyz" title="Personal Site">svey.xyz</a> | <a href="https://github.com/svey-xyz" title="Personal GitHub">github.com/svey-xyz</a> | <a href="tel:+16138067643">(613) 806-7643</a></p>
			</div>
			
			<p>I am a full stack web developer, and homelab enthusiast, working to create robust web experiences. My unique background in tech and the arts inﬂuences my approach to projects and leads to innovative solutions.</p>
			
			<hr />

			<h2>Professional Experience</h2>

			<div>
				{workExperiences.flatMap((exp) => {
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

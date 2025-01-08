import { Header } from "@/components/Header";
import { Experience } from "@/components/Experience"
import { personal, work, education } from "@/data";
import { Section } from "@/components/Section";
import crypto from 'crypto'
import { Technology } from "@/components/Technology";

const Home = () => {
  return (
		<div className="">
			<Header personal={personal}/>

			<Section title="Professional Experience">
				{ work.flatMap((exp) => {
					const key = crypto.createHash('md5').update(exp.title).digest('hex');
					return <Experience exp={exp} key={key} />
				})}
			</Section>

			<Section title="Education">
				{ education.flatMap((exp) => {
					const key = crypto.createHash('md5').update(exp.title).digest('hex');
					return <Experience exp={exp}  key={key} />
				})}
			</Section>


			<Section title={`Technologies`} >
				{ personal.technologies?.flatMap((tech) => {
					return (
						<Technology
							type={tech.type}
							tools={tech.tools}
						/>
					)
				})
				}
				
			</Section>

			{ personal.projects &&
				<Section title={`Projects`} >
					{personal.projects.flatMap((exp) => {
						const key = crypto.createHash('md5').update(exp.title).digest('hex');
						return <Experience exp={exp} key={key} />
					})
					}
				</Section>
			}

			
			
		</div>
  );
}

export default Home

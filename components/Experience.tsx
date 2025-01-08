import MDX from '@/components/MDX';
import React from 'react';
import crypto from 'crypto'
import { readableDate } from '@/lib/stringFunctions';

type Props = {
	exp: Experience,
	className?: string
}

export const Experience = ({exp, className}: Props) => {
	const { title, location, date, points } = exp

	return (
		<div className={`${className}`}>
			<div className="flex flex-row justify-between items-baseline flex-wrap">
				<h3>{ title }</h3>
				<span className='font-extralight'>
					<em>{location}</em> | <em>{readableDate(date)}</em>
				</span>
			</div>
			<ul className='pl-5 list-disc'>
				{ points.flatMap((point) => {
					const key = crypto.createHash('md5').update(point).digest('hex');
					return (
						<li key={key}>
							<MDX text={point} />
						</li>
					)
				})}
			</ul>
		</div>
	);
};

// export default WorkExperience;
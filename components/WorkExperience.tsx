import MDX from '@/components/MDX';
import React from 'react';
import crypto from 'crypto'
import { readableDate } from '@/lib/stringFunctions';

export const WorkExperience = ({exp}: {exp: workExperience}) => {
	const { title, business, date, points } = exp

	return (
		<div className=''>
			<div className="flex flex-row justify-between items-baseline">
				<h3>{ title }</h3>
				<span><em>{business}</em> | <em>{readableDate(date, 'Month YYYY')}</em></span>
			</div>
			<ul>
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
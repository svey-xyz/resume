'use client'

import React, { PropsWithChildren } from 'react';
import { Icon, iconExists } from '@iconify/react';

type Props = {
	title: string
	technologies: Array<string>
}

const getIconName = (tech: string) => {
	const techName = tech.toLowerCase()
	const nameWithIcon = `logos:${techName}-icon`
	const namePlain = `logos:${techName}`
	const iconName = iconExists(nameWithIcon) ? nameWithIcon : namePlain

	return iconName
};

export const Technologies = ({title, technologies}:PropsWithChildren<Props>) => {
	return (
		<span className=''>
			<strong>{title}: </strong>
			{technologies.flatMap((tech, i, arr) => {
				return (
					<span>
						<Icon icon={getIconName(tech)} className='inline'/> { tech }
						{ (i < arr.length - 1) && <>, </> }
					</span>
				)
			})}
		</span>
	);
};

// export default Technologies;
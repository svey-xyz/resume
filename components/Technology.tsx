'use client'

import React, { PropsWithChildren } from 'react';
import { Icon, iconExists } from '@iconify/react';
import crypto from 'crypto'

type Props = {
	type: string
	tools: Array<string>
}

const getIconName = (tech: string) => {
	const techName = tech.toLowerCase()
	const nameWithIcon = `logos:${techName}-icon`
	const namePlain = `logos:${techName}`
	const iconName = iconExists(nameWithIcon) ? nameWithIcon : namePlain

	return iconName
};

export const Technology = ({type, tools}:PropsWithChildren<Props>) => {
	return (
		<span className=''>
			<strong>{type}: </strong>
			{tools.flatMap((tool, i, arr) => {
				const key = crypto.createHash('md5').update(tool).digest('hex');
				
				return (
					<span key={tool}>
						{/* <Icon icon={getIconName(tech)} className='inline'/> //TODO: add icons */}
						{tool }
						{ (i < arr.length - 1) && <>, </> }
					</span>
				)
			})}
		</span>
	);
};

// export default Technologies;
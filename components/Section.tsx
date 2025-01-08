import React, { PropsWithChildren } from 'react';

type Props = {
	title: string
	className?: string
}

export const Section = ({title, children, className}:PropsWithChildren<Props>) => {

	return (
		<section className={`${className}`}>
			<hr />
			<h2>{title}</h2>
			{children}
		</section>
	);
};

// export default Section;
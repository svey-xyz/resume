import React, { PropsWithChildren } from 'react';

type Props = {
	title: string
	className?: string
}

export const Section = ({title, children, className}:PropsWithChildren<Props>) => {

	return (
		<section className={`${className} flex flex-col border-t border-solid border-bg-secondary/70 mt-2 pt-1`}>
			<h2>{title}</h2>
			{children}
		</section>
	);
};

// export default Section;
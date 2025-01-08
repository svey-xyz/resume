import Link from 'next/link';
import React from 'react';

const Footer = ({}: {}) => {
	return (
		<section className='relative w-full mt-2'>
			<div className='flex flex-row justify-between text-xs'>
				<Link href={`https://github.com/svey-xyz/resume`}>checkout the template for this resume</Link>
			</div>
		</section>
	);
};

export default Footer;
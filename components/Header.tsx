import React from 'react';
import crypto from 'crypto'
import MDX from '@/components/MDX';

type Props = {
	personal: personal
	className?: string
}

export const Header = ({personal, className}:Props) => {
	const {name, socials, blurb} = personal

	return (
		<section className={`${className}`}>
			<div className="flex flex-row justify-between items-baseline">
				<h1>{name}</h1>
				<p>
					{socials.flatMap((social, i, arr) => {
						const key = crypto.createHash('md5').update(social.text).digest('hex');

						return (
							<>
								<a href={social.link} key={key}>{social.text}</a>
								{ i < arr.length - 1 &&
									<> | </>
								}
							</>
						)
					})
					}
				</p>
			</div>
			<MDX text={personal.blurb} />
		</section>
	);
};

// export default Header;
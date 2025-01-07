export interface _workExperience {
	title: string
	business: string
	date: _Date
	points: Array<string>
}

export interface _personal {
	name: string
	socials: Array<_social>
	blurb: string
}

export interface _social {
	text: string
	link: string
}

export interface _Date {
	start: Date
	end?: Date
	locales?: Intl.LocalesArgument
	options?: Intl.DateTimeFormatOptions

}
export interface _Experience {
	title: string
	location: string
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
	ongoing?: boolean
	locales?: Intl.LocalesArgument
	options?: Intl.DateTimeFormatOptions

}
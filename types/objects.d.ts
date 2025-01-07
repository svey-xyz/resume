export interface _workExperience {
	title: string
	business: string
	date: _Date
	points: Array<string>
}

export interface _Date {
	start: Date
	end?: Date
	locales?: Intl.LocalesArgument
	options?: Intl.DateTimeFormatOptions

}
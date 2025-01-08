import { plural } from 'pluralize'
import { ReactNode } from 'react'
import slugify from 'slugify'


export const slugOptions = {
	replacement: '-',  // replace spaces with replacement character, defaults to `-`
	remove: undefined, // remove characters that match regex, defaults to `undefined`
	lower: true,      // convert to lower case, defaults to `false`
	strict: true,     // strip special characters except replacement, defaults to `false`
	locale: 'en',      // language code of the locale to use
	trim: true         // trim leading and trailing replacement chars, defaults to `true`
}

export const camelCaseToWords = (string: string) => {
	var words = string.match(/[A-Za-z][a-z]*/g) || [];

	return words.map(capitalize).join(" ");
}

export const pluralize = (string: string) => {
	return plural(string)
}

export const slugifyWithOptions = (string: string) => {
	if (!string) return
	return slugify(String(string), slugOptions)
}

export const capitalize = (word: string) => {
	return word.charAt(0).toUpperCase() + word.substring(1);
}

type readableDateProps = {
	date: CustomDate,
	locales?: Intl.LocalesArgument,
	options?: Intl.DateTimeFormatOptions
}

export const readableDate = (date: CustomDate): ReactNode => {
	const locales = date.locales ?? 'en-ca'
	const options = date.options ?? {
		year: 'numeric',
		month: 'long',
	}

	const ongoingText = `Present`

	const startDateText = date.start.toLocaleDateString(locales, options)
	const endDateText = date.end?.toLocaleDateString(locales, options)

	const dateAppend = endDateText ? ` - ${endDateText}` : date.ongoing ? ` - ${ongoingText}` : ''

	return startDateText + dateAppend
}
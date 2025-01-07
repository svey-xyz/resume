export interface _workExperience {
	title: string;
	business: string;
	date: {
		start: Date,
		end?: Date
	};
	points: Array<string>
}
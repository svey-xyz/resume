import {
	_workExperience,
	_Date
} from './objects'

declare global {
	type displayDateSpecificity = "YYYY-MM-DD, HH:mm" | "YYYY-MM-DD" | "YYYY.MM" | "YYYY" | "YY-MM-DD" | "LL" | string;
	type CustomDate = _Date
	type workExperience = _workExperience

}
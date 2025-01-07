import {
	_workExperience,
	_Date,
	_personal
} from './objects'

declare global {
	type displayDateSpecificity = "YYYY-MM-DD, HH:mm" | "YYYY-MM-DD" | "YYYY.MM" | "YYYY" | "YY-MM-DD" | "LL" | string;
	type CustomDate = _Date
	type workExperience = _workExperience
	type personal = _personal

}
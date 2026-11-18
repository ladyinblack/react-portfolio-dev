import developerIcon from "../assets/about/code-meets-play.png";
import technauthorIcon from "../assets/about/open-book-shared-learning.png";

export interface AboutItem {
	title: string;
	duration: string;
	icon: string;
}

export const about: AboutItem[] = [
	{
		title: "Game & Web Developer",
		duration: "2014 - Present",
		icon: developerIcon,
	},
	{
		title: "Technical Author & Instructor",
		duration: "Learning Portal Hub",
		icon: technauthorIcon,
	},
];
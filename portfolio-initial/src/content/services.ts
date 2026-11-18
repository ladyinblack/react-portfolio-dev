import gamedevIcon from "../assets/services/game-controller-on-a-golden-level-tile.png";
import fullstackIcon from "../assets/services/browser-server-and-api-link.png";
import coursewareIcon from "../assets/services/interactive-lessons-and-quizzes.png";

export interface ServiceItem {
	icon: string;
	title: string;
	description: string;
}

export const services: ServiceItem[] = [
	{
		icon: gamedevIcon,
		title: "Game Development & Design",
		description: "Custom game mechanics, interactive web experiences, and immersive visual storytelling.",
	},
	{
		icon: fullstackIcon,
		title: "Full-Stack Web APIs",
		description: "Robust C# and ASP.NET backend integration paired with modern React/TypeScript frontends.",
	},
	{
		icon: coursewareIcon,
		title: "Developer Courseware",
		description: "Structured learning portals, tutorials, and technical training resources for developers.",
	},
];
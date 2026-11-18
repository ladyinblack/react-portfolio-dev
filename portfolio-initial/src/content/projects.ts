import learningportalIcon from "../assets/projects/csharp-learning-portal.png";
import gamejamIcon from "../assets/projects/pre-jam-creative-toolkit.png";

export interface ProjectItem {
	title: string;
	description: string;
	image: string;
}

export const projects: ProjectItem[] = [
	{
		title: "Learning Portal",
		description: "Interactive learning platform and courseware hub hosted on GitHub Pages.",
		image: learningportalIcon,
	},
	{
		title: "Game Jam Toolkit",
		description: "Automation tools and workflow managers for indie game development jams.",
		image: gamejamIcon,
	},
];
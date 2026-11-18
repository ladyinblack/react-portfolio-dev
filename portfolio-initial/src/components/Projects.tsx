import React from "react";
import styles from "./Projects.module.css";
import { projects, type ProjectItem } from "../content/projects";

export const Projects: React.FC = () => {
	return (
		<section id="projects" className={styles.wrapper}>
		{projects.map((project: ProjectItem, index: number) => (
			<div className={styles.card} key={index}>
				<div className={styles.info}>
					<img className={styles.image} src={project.image} alt={project.title} />
				</div>
				
				<div className={styles.info}>
					<h3 className={styles.title}>{project.title}</h3>
					<p className={styles.description}>{project.description}</p>
				</div>
			</div>
		))}
		</section>
	);
};
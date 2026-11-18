import React from "react";
import profileIcon from "../assets/profile.png";
import styles from "./HeroArea.module.css";

export const HeroArea: React.FC = () => {
	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};
	
	return (
		<section className={styles.wrapper}>
			<img className={styles.profile} src={profileIcon} alt="Game Dev Studio & Learning Portal" />
			<h1 className="title">Game Dev & Learning Hub</h1>
			<p className="description">
				Crafting indie games, custom web software, and interactive developer courseware.
			</p>
			
			<div className={styles.buttonBox}>
				<button className={`${styles.button} ${styles.project}`} onClick={() => scrollToSection("projects")}>
					My Projects
				</button>
				<button className={`${styles.button} ${styles.hire}`} onClick={() => scrollToSection("contact")}>
					Contract / Hire
				</button>
			</div>
		</section>
	);
};
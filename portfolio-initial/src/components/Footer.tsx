import React from "react";
import twitterIcon from "../assets/socials/twitter.png";
import linkedinIcon from "../assets/socials/linkedin.png";
import githubIcon from "../assets/socials/github.png";
import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
	return (
		<footer className={styles.wrapper}>
			<h2 className={styles.title}>Studio Hub & Learning Portal</h2>
			<p className={styles.contactInfo}>Durban, South Africa</p>
			<p className={styles.contactInfo}>contact@studiohubportal.com</p>
			
			<div className={styles.socials}>
				<a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter profile">
					<img src={twitterIcon} alt="Twitter" className={styles.icon} />
				</a>
				<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
					<img src={linkedinIcon} alt="LinkedIn" className={styles.icon} />
				</a>
				<a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
					<img src={githubIcon} alt="GitHub" className={styles.icon} />
				</a>
			</div>
		</footer>
	);
};
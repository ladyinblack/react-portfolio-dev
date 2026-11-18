import React from "react";
import styles from "./About.module.css";
import { about, type AboutItem } from "../content/about";

export const About: React.FC = () => {
	return (
		<section id="about" className={styles.wrapper}>
		{about.map((item: AboutItem, index: number) => (
			<div className={styles.card} key={index}>
				<div className={styles.info}>
					<h2 className={styles.title}>{item.title}</h2>
					<p className={styles.description}>{item.duration}</p>
				</div>
				<div className={styles.info}>
					<img className={styles.icon} src={item.icon} alt={item.title} />
				</div>
			</div>
		))}
		</section>
	);
};
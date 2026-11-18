import React, { useState } from "react";
import leftarrowIcon from "../assets/actions/left-arrow.png";
import rightarrowIcon from "../assets/actions/right-arrow.png";
import styles from "./Activities.module.css";
import { activities, type ActivityItem } from "../content/activities";

export const Activities: React.FC = () => {
	const [activeSlide, setActiveSlide] = useState<number>(0);
	
	const handlePrev = () => {
		setActiveSlide((prev) => (prev > 0 ? prev - 1 : activities.length - 1));
	};
	
	const handleNext = () => {
		setActiveSlide((prev) => (prev < activities.length - 1 ? prev + 1 : 0));
	};
	
	const currentItem: ActivityItem = activities[activeSlide];
	
	return (
		<section id="activities" className={styles.wrapper}>
			<button className={styles.button} onClick={handlePrev} aria-label="Previous activity">
				<img className={styles.icon} src={leftarrowIcon} alt="Previous" />
			</button>
			
			<div className={styles.content}>
				<div className={styles.slideInfo}>
					<h3 className={styles.title}>{currentItem.title}</h3>
					<p className={styles.text}>{currentItem.text}</p>
				</div>
			</div>
			
			<button className={styles.button} onClick={handleNext} aria-label="Next activity">
				<img className={styles.icon} src={rightarrowIcon} alt="Next" />
			</button>
		</section>
	);
};
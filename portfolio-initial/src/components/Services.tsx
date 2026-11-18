import React from "react";
import styles from "./Services.module.css";
import { services, type ServiceItem } from "../content/services";

export const Services: React.FC = () => {
	return (
		<section id="services" className={styles.wrapper}>
		{services.map((service: ServiceItem, index: number) => (
			<div className={styles.card} key={index}>
				<img className={styles.icon} src={service.icon} alt={service.title} />
				<h3 className={styles.title}>{service.title}</h3>
				<p className={styles.description}>{service.description}</p>
			</div>
		))}
		</section>
	);
};
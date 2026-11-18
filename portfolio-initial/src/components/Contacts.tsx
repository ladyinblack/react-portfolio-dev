import React from "react";
import sendIcon from "../assets/actions/send.png";
import styles from "./Contacts.module.css";

export const Contacts: React.FC = () => {
	return (
		<form id="contact" className={styles.wrapper} target="_blank" action="https://formsubmit.co/your@email.com" method="POST">
			<div className={styles.inputs}>
				<input className={styles.input} type="text" name="name" placeholder="Your name" required />
				<input className={styles.input} type="email" name="email" placeholder="Your email" required />
			</div>
			<div className={styles.textareas}>
				<textarea className={styles.textarea} name="message" placeholder="Your message" required />
				<button className={styles.send} type="submit" aria-label="Send message">
					<img className={styles.icon} src={sendIcon} alt="Send" />
				</button>
			</div>
		</form>
	);
};
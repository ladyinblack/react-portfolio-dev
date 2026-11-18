import React, { useState, useEffect } from "react";
import profileIcon from "../assets/profile.png";
import styles from "./Header.module.css";
import { navbar, type NavItem } from "../content/navbar";

export const Header: React.FC = () => {
	const [mobileNavigation, setMobileNavigation] = useState<boolean>(false);
	const [windowDimension, setWindowDimension] = useState<number>(
	typeof window !== "undefined" ? window.innerWidth : 0
);

useEffect(() => {
	function handleResize() {
		setWindowDimension(window.innerWidth);
	}
	
	window.addEventListener("resize", handleResize);
	return () => window.removeEventListener("resize", handleResize);
}, []);

const isMobile = windowDimension <= 700;

const handleNavClick = (targetId: string) => {
	const element = document.getElementById(targetId.toLowerCase());
	if (element) {
		element.scrollIntoView({ behavior: "smooth" });
	}
	setMobileNavigation(false);
	document.body.style.overflow = "auto";
};

return (
	<header className={styles.wrapper}>
		<div className={styles.brand}>
			<img className={styles.icon} src={profileIcon} alt="Profile" />
			<h1 className={styles.logo}>Studio Hub</h1>
		</div>
		
		{!mobileNavigation && isMobile ? (
		<img 
			className={styles.toggle}
			onClick={() => {
				setMobileNavigation(true);
				document.body.style.overflow = "hidden";
			}}
			src="/assets/actions/hamburger.png"
			alt="Open menu"
		/>
		) : (
		<nav className={`${styles.navigation} ${mobileNavigation && isMobile ? styles.mobileOpen : ""}`}>
			{navbar.map((item: NavItem, index: number) => (
			<p key={index} className={styles.item} onClick={() => 
				handleNavClick(item.title)}>
				{item.title}
			</p>
			))}
		</nav>
		)}
	</header>
  );
};
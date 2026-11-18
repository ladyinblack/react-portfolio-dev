import React from "react";
import { Header } from "./components/Header";
import { HeroArea } from "./components/HeroArea";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Activities } from "./components/Activities";
import { Contacts } from "./components/Contacts";
import { Footer } from "./components/Footer";

import "./index.css";

export default function App(): React.JSX.Element {
	return (
		<div className="App">
			<Header />
			<HeroArea />
			
			<h2 id="about" className="title">About Me</h2>
			<p className="description">My experience and education</p>
			<About />
			
			<h2 id="services" className="title">My Services</h2>
			<p className="description">How I can add value to your team</p>
			<Services />
			
			<h2 id="projects" className="title">Featured Projects</h2>
			<p className="description">Highlights of my technical & game dev work</p>
			<Projects />
			
			<h2 id="activities" className="title">Activities & Community</h2>
			<p className="description">My interests, authoring, and organizing</p>
			<Activities />
			
			<h2 id="contact" className="title">Let's Connect</h2>
			<p className="description">I'm available for new opportunities & collaborations</p>
			<Contacts />
			
			<Footer />
		</div>
	);
}
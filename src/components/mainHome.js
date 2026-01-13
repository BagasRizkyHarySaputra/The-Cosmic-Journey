import React, { useEffect, useState } from 'react';
import '../static/css/mainHome.css';
import '../static/js/mainHomejs.js';
function MainHome() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			const viewportHeight = window.innerHeight;
			
			// Fade out when scrolled more than 15% of viewport height
			if (scrollPosition > viewportHeight * 0.10) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
<main className="main-home">
	<div className="main-container">
		<p className="greeting-text">Dear passanger, welcome to</p>
		<h1 className="main-title">
			The Cosmic<br />
			<span className="underline">Journey</span>
		</h1>
		<p className="main-description">
			Let's dive into the world we barely known
		</p>
		<div className={`scroll-indicator ${isScrolled ? 'fade-out' : ''}`}>
			<div className="scroll-icon">
				<span>&#8964;</span>
				<span>&#8964;</span>
			</div>
		</div>
	</div>
</main>
);
}

export default MainHome;

import React, { useEffect } from 'react';
import '../static/css/backgroundSet.css';

function BackgroundSet({ hideLightBeam }) {
	// Calculate dynamic height based on items' Y positions (in vh)
	useEffect(() => {
		// Get all CSS variables for Y positions
		const root = document.documentElement;
		let maxY = 200; // Default minimum in vh (roughly 2 viewport heights)
		
		// Check all 56 items for their Y position
		for (let i = 1; i <= 56; i++) {
			const yValue = getComputedStyle(root).getPropertyValue(`--item${i}-y`);
			if (yValue) {
				// Parse vh value (e.g., "55vh" -> 55)
				const numericValue = parseFloat(yValue);
				if (!isNaN(numericValue)) {
					maxY = Math.max(maxY, numericValue);
				}
			}
		}
		
		// Add buffer (100vh) and set dynamic height in vh units
		const dynamicHeight = maxY + 100;
		root.style.setProperty('--dynamic-bg-height', `${dynamicHeight}vh`);
	}, []);
	
	// Array of background items - easy to add/edit
	const backgroundItems = [
		{ id: 'item1', src: '/headerHome/Ellipse 11.png' },	
		{ id: 'item4', src: '/headerHome/Ellipse 17.svg' },
		{ id: 'item2', src: '/headerHome/LightBeam.png' },
		{ id: 'item3', src: '/headerHome/LightBeam.png' },
		{ id: 'item5', src: '/headerHome/Ellipse 18.svg' },

		{ id: 'item6', src: '/background/Ellipse 33.svg' },
		{ id: 'item7', src: '/background/Ellipse 22.svg' },
		{ id: 'item8', src: '/background/Star1.svg' },
		{ id: 'item9', src: '/background/Star2.svg' },
		{ id: 'item10', src: '/background/Star3.svg' },
		{ id: 'item11', src: '/background/Star4.svg' },
	
		
	];

	const filteredItems = hideLightBeam
		? backgroundItems.filter(item => item.id !== 'item2' && item.id !== 'item3')
		: backgroundItems;

	return (
		<div className="background-set">
			{filteredItems.map((item) => (
				<img
					key={item.id}
					className={`bg-item ${item.id}`}
					src={item.src}
					alt=""
				/>
			))}
		</div>
	);
}

export default BackgroundSet;
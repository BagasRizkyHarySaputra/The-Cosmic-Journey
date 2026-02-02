import React, { useEffect } from 'react';
import '../static/css/backgroundSet.css';

function BackgroundSet() {
	// Calculate dynamic height based on items' Y positions
	useEffect(() => {
		// Get all CSS variables for Y positions
		const root = document.documentElement;
		let maxY = 200; // Default minimum in vh
		
		// Check all 50 items for their Y position
		for (let i = 1; i <= 50; i++) {
			const yValue = getComputedStyle(root).getPropertyValue(`--item${i}-y`);
			if (yValue) {
				const numericValue = parseFloat(yValue);
				if (!isNaN(numericValue)) {
					maxY = Math.max(maxY, numericValue);
				}
			}
		}
		
		// Add buffer (50vh) and set dynamic height
		const dynamicHeight = maxY + 50;
		root.style.setProperty('--dynamic-bg-height', `${dynamicHeight}vh`);
	}, []);

	// Array of background items - easy to add/edit
	const backgroundItems = [
		{ id: 'item1', src: '/logo/LightBeam.png' },
		{ id: 'item2', src: '/logo/LightBeam.png' },
		{ id: 'item3', src: '/img/keyboard_arrow_down.png' },
		{ id: 'item4', src: '/img/star3.png' },
		{ id: 'item5', src: '/img/planet2.png' },
		{ id: 'item6', src: '/img/star4.png' },
		{ id: 'item7', src: '/img/nebula1.png' },
		{ id: 'item8', src: '/img/star5.png' },
		{ id: 'item9', src: '/img/planet3.png' },
		{ id: 'item10', src: '/img/star6.png' },
		{ id: 'item11', src: '/img/comet1.png' },
		{ id: 'item12', src: '/img/star7.png' },
		{ id: 'item13', src: '/img/planet4.png' },
		{ id: 'item14', src: '/img/star8.png' },
		{ id: 'item15', src: '/img/asteroid1.png' },
		{ id: 'item16', src: '/img/star9.png' },
		{ id: 'item17', src: '/img/planet5.png' },
		{ id: 'item18', src: '/img/star10.png' },
		{ id: 'item19', src: '/img/nebula2.png' },
		{ id: 'item20', src: '/img/star11.png' },
		{ id: 'item21', src: '/img/planet6.png' },
		{ id: 'item22', src: '/img/star12.png' },
		{ id: 'item23', src: '/img/comet2.png' },
		{ id: 'item24', src: '/img/star13.png' },
		{ id: 'item25', src: '/img/planet7.png' },
		{ id: 'item26', src: '/img/star14.png' },
		{ id: 'item27', src: '/img/asteroid2.png' },
		{ id: 'item28', src: '/img/star15.png' },
		{ id: 'item29', src: '/img/planet8.png' },
		{ id: 'item30', src: '/img/star16.png' },
		{ id: 'item31', src: '/img/nebula3.png' },
		{ id: 'item32', src: '/img/star17.png' },
		{ id: 'item33', src: '/img/planet9.png' },
		{ id: 'item34', src: '/img/star18.png' },
		{ id: 'item35', src: '/img/comet3.png' },
		{ id: 'item36', src: '/img/star19.png' },
		{ id: 'item37', src: '/img/planet10.png' },
		{ id: 'item38', src: '/img/star20.png' },
		{ id: 'item39', src: '/img/asteroid3.png' },
		{ id: 'item40', src: '/img/star21.png' },
		{ id: 'item41', src: '/img/nebula4.png' },
		{ id: 'item42', src: '/img/star22.png' },
		{ id: 'item43', src: '/img/planet11.png' },
		{ id: 'item44', src: '/img/star23.png' },
		{ id: 'item45', src: '/img/comet4.png' },
		{ id: 'item46', src: '/img/star24.png' },
		{ id: 'item47', src: '/img/planet12.png' },
		{ id: 'item48', src: '/img/star25.png' },
		{ id: 'item49', src: '/img/asteroid4.png' },
		{ id: 'item50', src: '/img/star26.png' },
		{ id: 'item51', src: '/img/Ellipse1.png' },
		{ id: 'item52', src: '/img/Ellipse2.png' },
		{ id: 'item53', src: '/img/Ellipse3.png' },
		{ id: 'item54', src: '/img/MiniStar1.png' },
		{ id: 'item55', src: '/img/MiniStar2.png' },
		{ id: 'item56', src: '/img/Ellipse4.png' },
	];

	return (
		<div className="background-set">
			{backgroundItems.map((item) => (
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
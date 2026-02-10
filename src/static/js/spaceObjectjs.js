import { useState } from 'react';

export const spaceObjectsData = [
	{
		id: 'nebula',
		name: 'Nebula',
		image: '/img/nebula.jpg',
		description: 'A nebula is a giant cloud of dust and gas in space. Some nebulae come from the gas and dust thrown out by the explosion of a dying star. Other nebulae are regions where new stars are beginning to form. Nebulae are often called "star nurseries."'
	},
	{
		id: 'moon',
		name: 'The Moon',
		image: '/img/moon.jpg',
		description: 'The Moon is Earth\'s only natural satellite and the closest celestial body to our planet. It is a rocky, airless world covered in craters, mountains, and ancient lava plains called maria, which appear as dark patches when viewed from Earth. The Moon reflects sunlight, which is why it appears bright in the night sky, and its changing position relative to the Sun creates the familiar phases such as the new moon, crescent, and full moon.'
	},
	{
		id: 'comet',
		name: 'Comet',
		image: '/img/comet.jpg',
		description: 'A comet is a small icy body that orbits the Sun and becomes bright when it gets close to the Sun. Comets are made of ice, dust, and rock, often called "dirty snowballs." When a comet approaches the Sun, heat causes its ice to evaporate, creating a glowing coma (a cloud of gas and dust) and one or more tails that always point away from the Sun due to solar wind.'
	},
	{
		id: 'asteroid',
		name: 'Asteroid',
		image: '/img/asteroid.jpg',
		description: 'Asteroids are rocky, airless remnants left over from the early formation of our solar system about 4.6 billion years ago. Most asteroids are found in the asteroid belt, a region between Mars and Jupiter. They range in size from tiny pebbles to objects hundreds of kilometers across.'
	},
	{
		id: 'blackhole',
		name: 'Black Hole',
		image: '/img/blackhole.jpg',
		description: 'A black hole is a region of spacetime where gravity is so strong that nothing, not even light or other electromagnetic waves, can escape once it crosses the event horizon. Black holes are formed when massive stars collapse at the end of their life cycle.'
	},
	{
		id: 'galaxy',
		name: 'Galaxy',
		image: '/img/galaxy.jpg',
		description: 'A galaxy is a huge collection of gas, dust, and billions of stars and their solar systems, all held together by gravity. Our solar system is part of the Milky Way galaxy, which contains over 100 billion stars. There are billions of galaxies in the universe.'
	}
];

export const useSpaceObjectCarousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [slideDirection, setSlideDirection] = useState(null);
	const [isAnimating, setIsAnimating] = useState(false);

	const getVisibleObjects = () => {
		const total = spaceObjectsData.length;
		const farLeftIndex = (currentIndex - 2 + total) % total;
		const prevIndex = (currentIndex - 1 + total) % total;
		const nextIndex = (currentIndex + 1) % total;
		const farRightIndex = (currentIndex + 2) % total;
		
		return {
			farLeft: spaceObjectsData[farLeftIndex],
			left: spaceObjectsData[prevIndex],
			center: spaceObjectsData[currentIndex],
			right: spaceObjectsData[nextIndex],
			farRight: spaceObjectsData[farRightIndex]
		};
	};

	const handlePrev = () => {
		if (isAnimating) return;
		setIsAnimating(true);
		setSlideDirection('prev');
		
		setTimeout(() => {
			setCurrentIndex((prev) => (prev - 1 + spaceObjectsData.length) % spaceObjectsData.length);
			setSlideDirection(null);
			setIsAnimating(false);
		}, 500);
	};

	const handleNext = () => {
		if (isAnimating) return;
		setIsAnimating(true);
		setSlideDirection('next');
		
		setTimeout(() => {
			setCurrentIndex((prev) => (prev + 1) % spaceObjectsData.length);
			setSlideDirection(null);
			setIsAnimating(false);
		}, 500);
	};

	// Get animation class for each card position
	const getCardAnimationClass = (position) => {
		if (!slideDirection) return '';
		
		if (slideDirection === 'next') {
			if (position === 'left') return 'animate-exit-left';
			if (position === 'center') return 'animate-center-to-left';
			if (position === 'right') return 'animate-right-to-center';
			if (position === 'far-right') return 'animate-far-right-to-right';
		} else if (slideDirection === 'prev') {
			if (position === 'far-left') return 'animate-far-left-to-left';
			if (position === 'left') return 'animate-left-to-center';
			if (position === 'center') return 'animate-center-to-right';
			if (position === 'right') return 'animate-exit-right';
		}
		return '';
	};

	return {
		currentIndex,
		visibleObjects: getVisibleObjects(),
		slideDirection,
		isAnimating,
		handlePrev,
		handleNext,
		getCardAnimationClass
	};
};

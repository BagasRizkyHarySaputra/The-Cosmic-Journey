import { useState, useEffect, useRef } from 'react';

export const spaceObjectsData = [
	{
		id: 'nebula',
		name: 'Nebula',
		image: '/Space Objects/nebula.png',
		description: 'A nebula is a giant cloud of dust and gas in space. Some nebulae come from the gas and dust thrown out by the explosion of a dying star. Other nebulae are regions where new stars are beginning to form. Nebulae are often called "star nurseries."'
	},
	{
		id: 'moon',
		name: 'The Moon',
		image: '/Space Objects/moon.png',
		description: "The Moon is Earth’s only natural satellite and the closest celestial body to our planet. It is a rocky, airless world covered in craters, mountains, and ancient lava plains called maria, which appear as dark patches when viewed from Earth. The Moon reflects sunlight, which is why it appears bright in the night sky, and its changing position relative to the Sun creates the familiar phases such as the new moon, crescent, and full moon."
	},
	{
		id: 'comet',
		name: 'Comet',
		image: '/Space Objects/comet.png',
		description: 'A comet is a small icy body that orbits the Sun and becomes bright when it gets close to the Sun. Comets are made of ice, dust, and rock, often called "dirty snowballs." When a comet approaches the Sun, heat causes its ice to evaporate, creating a glowing coma (a cloud of gas and dust) and one or more tails that always point away from the Sun due to solar wind.'
	}
];

export const useSpaceObjectCarousel = () => {
	// positions array holds the position of each card (0=left, 1=center, 2=right)
	const [positions, setPositions] = useState([0, 1, 2]);
	const [isAnimating, setIsAnimating] = useState(false);
	const [animationSpeed, setAnimationSpeed] = useState(700); // Default 700ms
	
	const lastActionTime = useRef(Date.now());
	const animationTimeout = useRef(null);
	const wheelTimeout = useRef(null);

	const getVisibleObjects = () => {
		return {
			left: spaceObjectsData[positions.indexOf(0)],
			center: spaceObjectsData[positions.indexOf(1)],
			right: spaceObjectsData[positions.indexOf(2)]
		};
	};

	const calculateSpeed = () => {
		const now = Date.now();
		const timeSinceLastAction = now - lastActionTime.current;
		
		// Jika action dilakukan dalam 500ms, percepat animasi
		if (timeSinceLastAction < 500) {
			// Semakin cepat spam, semakin cepat animasi (minimum 200ms)
			return Math.max(200, 700 - (500 - timeSinceLastAction));
		}
		
		// Reset ke kecepatan normal jika sudah lama tidak ada action
		return 700;
	};

	const handlePrev = () => {
		if (isAnimating) {
			// Jika sedang animasi dan user klik lagi, percepat
			const newSpeed = Math.max(200, animationSpeed - 100);
			setAnimationSpeed(newSpeed);
			return;
		}
		
		const speed = calculateSpeed();
		setAnimationSpeed(speed);
		setIsAnimating(true);
		lastActionTime.current = Date.now();
		
		// Shift positions to the right (increase index)
		setPositions(prevPositions => 
			prevPositions.map(pos => (pos + 1) % 3)
		);
		
		if (animationTimeout.current) clearTimeout(animationTimeout.current);
		animationTimeout.current = setTimeout(() => {
			setIsAnimating(false);
		}, speed);
	};

	const handleNext = () => {
		if (isAnimating) {
			// Jika sedang animasi dan user klik lagi, percepat
			const newSpeed = Math.max(200, animationSpeed - 100);
			setAnimationSpeed(newSpeed);
			return;
		}
		
		const speed = calculateSpeed();
		setAnimationSpeed(speed);
		setIsAnimating(true);
		lastActionTime.current = Date.now();
		
		// Shift positions to the left (decrease index)
		setPositions(prevPositions => 
			prevPositions.map(pos => (pos - 1 + 3) % 3)
		);
		
		if (animationTimeout.current) clearTimeout(animationTimeout.current);
		animationTimeout.current = setTimeout(() => {
			setIsAnimating(false);
		}, speed);
	};

	// Handle wheel/scroll event
	const handleWheel = (event) => {
		event.preventDefault();
		
		// Clear previous timeout
		if (wheelTimeout.current) clearTimeout(wheelTimeout.current);
		
		// Debounce scroll events (tunggu 100ms sebelum action)
		wheelTimeout.current = setTimeout(() => {
			if (event.deltaY < 0) {
				// Scroll up = geser ke kiri (prev)
				handlePrev();
			} else if (event.deltaY > 0) {
				// Scroll down = geser ke kanan (next)
				handleNext();
			}
		}, 50);
	};

	// Get position class for each card
	const getCardPosition = (index) => {
		const pos = positions[index];
		if (pos === 0) return 'position-left';
		if (pos === 1) return 'position-center';
		if (pos === 2) return 'position-right';
		return '';
	};

	// Cleanup on unmount
	useEffect(() => {
		return () => {
			if (animationTimeout.current) clearTimeout(animationTimeout.current);
			if (wheelTimeout.current) clearTimeout(wheelTimeout.current);
		};
	}, []);

	return {
		visibleObjects: getVisibleObjects(),
		isAnimating,
		handlePrev,
		handleNext,
		handleWheel,
		getCardPosition,
		positions,
		animationSpeed
	};
};

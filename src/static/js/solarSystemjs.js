import { useState } from 'react';
import React from 'react';

// Helper function to parse text with *bold* formatting
export const formatText = (text) => {
	if (!text) return text;
	
	const parts = text.split(/(\*[^*]+\*)/);
	
	return parts.map((part, index) => {
		if (part.startsWith('*') && part.endsWith('*')) {
			// Remove asterisks and wrap in <strong>
			return <strong key={index}>{part.slice(1, -1)}</strong>;
		}
		return part;
	});
};

export const planetsData = {
	sun: {
		name: "The Sun",
		knownAs: "The star at *the heart of our solar system*.",
		about: [
			"The Sun is a huge, glowing ball of hot gases that sits at the center of our solar system. It gives us light, warmth, and energy, making life on Earth possible. The Sun is mostly made of hydrogen and helium, and it produces energy through a process called nuclear fusion. This process happens deep inside the Sun, where extreme pressure and temperature cause hydrogen atoms to join together and form helium, releasing large amounts of energy in the form of heat and light.",
			"The Sun's gravity keeps the planets, including Earth, in orbit around it, forming our solar system. It also affects Earth's weather, ocean currents, and climate. Without the Sun, there would be no life, no warmth, and no light on our planet."
		],
		diameter: "about 1,392,700 km",
		mass: "about 1,989 × 10³⁰ kg",
		distance: "149.6 million km",
		age: "Our Sun is a 4.5 billion-year old yellow dwarf star a hot glowing ball of hydrogen and helium.",
		discovery: "The Sun has been known since prehistoric times and has been central to many ancient cultures and mythologies.",
		expedition: {
			name: "Parker Solar Probe",
			description: ", which launched in 2018 with the mission to study the sun's corona"
		},
		image: "/planet/noname/Sun_noname.png"
	},
	mercury: {
		name: "Mercury",
		knownAs: "The smallest planet in our solar system.",
		about: [
			"Mercury is the smallest planet in our solar system and the closest to the Sun. It's only slightly larger than Earth's Moon. Mercury has a very thin atmosphere, which means it can't retain heat. This causes extreme temperature differences between day and night.",
			"During the day, temperatures can reach up to 430°C (800°F), but at night, they can drop to -180°C (-290°F). Mercury has a heavily cratered surface, similar to the Moon, because it has no atmosphere to protect it from space debris."
		],
		diameter: "about 4,879 km",
		mass: "about 3.285 × 10²³ kg",
		distance: "57.9 million km",
		age: "Mercury formed about 4.5 billion years ago, making it one of the oldest planets in our solar system.",
		discovery: "Mercury was first observed by Sumerian astronomers around 3,000 BCE, and later viewed through a telescope by Galileo Galilei in the early 1600s.",
		expedition: {
			name: "MESSENGER",
			description: " spacecraft, which orbited Mercury from 2011 to 2015"
		},
		image: "/planet/noname/Mercury_noname.png"
	},
	venus: {
		name: "Venus",
		knownAs: "Earth's twin planet, but with a toxic atmosphere.",
		about: [
			"Venus is often called Earth's sister planet because it's similar in size and structure. However, Venus is very different from Earth in other ways. It has a thick atmosphere made mostly of carbon dioxide, with clouds of sulfuric acid. This creates a runaway greenhouse effect, making Venus the hottest planet in our solar system.",
			"Surface temperatures on Venus can reach up to 465°C (870°F), hot enough to melt lead. Venus also rotates very slowly and in the opposite direction to most other planets, meaning the Sun rises in the west and sets in the east."
		],
		diameter: "about 12,104 km",
		mass: "about 4.867 × 10²⁴ kg",
		distance: "108.2 million km",
		age: "Venus is approximately 4.5 billion years old, similar to other planets in our solar system.",
		discovery: "Venus has been known since ancient times. It was first viewed through a telescope by Galileo in 1610, who observed its phases.",
		expedition: {
			name: "Magellan",
			description: " spacecraft, which mapped Venus's surface using radar from 1990 to 1994"
		},
		image: "/planet/noname/Venus_noname.png"
	},
	earth: {
		name: "Earth",
		knownAs: "Our home planet, the only known world with life.",
		about: [
			"Earth is the third planet from the Sun and the only known planet to harbor life. It has a unique atmosphere composed mainly of nitrogen and oxygen, which protects life from harmful solar radiation. Earth's surface is covered by water (about 71%), which is essential for all known forms of life.",
			"Our planet has a moderate climate, a protective magnetic field, and a large moon that helps stabilize its rotation. Earth is also geologically active, with tectonic plates that shape its surface through earthquakes, volcanoes, and mountain formation."
		],
		diameter: "about 12,742 km",
		mass: "about 5.972 × 10²⁴ kg",
		distance: "0 km (We're here!)",
		age: "Earth is approximately 4.5 billion years old, formed from the solar nebula.",
		discovery: "Earth has been our home planet throughout human history. Ancient civilizations understood Earth as a distinct celestial body.",
		expedition: {
			name: "Countless satellites and space stations",
			description: ", including the International Space Station (ISS)"
		},
		image: "/planet/noname/Earth_noname.png"
	},
	mars: {
		name: "Mars",
		knownAs: "The Red Planet, a cold desert world.",
		about: [
			"Mars is the fourth planet from the Sun and is often called the Red Planet because of its reddish appearance, caused by iron oxide (rust) on its surface. Mars has the largest volcano in the solar system, Olympus Mons, and a massive canyon system called Valles Marineris.",
			"Mars has a thin atmosphere made mostly of carbon dioxide, and its surface temperature averages around -60°C (-80°F). Scientists believe Mars once had liquid water on its surface, and it's currently being explored for signs of past or present life."
		],
		diameter: "about 6,779 km",
		mass: "about 6.39 × 10²³ kg",
		distance: "227.9 million km",
		age: "Mars formed about 4.5 billion years ago, similar to other terrestrial planets.",
		discovery: "Mars has been observed since ancient times by Egyptian and Babylonian astronomers. It was first viewed through a telescope by Galileo in 1610.",
		expedition: {
			name: "Perseverance rover",
			description: ", which landed on Mars in 2021 to search for signs of ancient microbial life"
		},
		image: "/planet/noname/Mars_noname.png"
	},
	jupiter: {
		name: "Jupiter",
		knownAs: "The largest planet in our solar system.",
		about: [
			"Jupiter is the fifth planet from the Sun and the largest planet in our solar system. It's a gas giant made mostly of hydrogen and helium. Jupiter is known for its Great Red Spot, a giant storm that has been raging for at least 300 years.",
			"Jupiter has at least 79 known moons, including the four large Galilean moons: Io, Europa, Ganymede, and Callisto. Its strong magnetic field and rapid rotation (a day on Jupiter lasts only about 10 hours) create spectacular auroras at its poles."
		],
		diameter: "about 139,820 km",
		mass: "about 1.898 × 10²⁷ kg",
		distance: "778.5 million km",
		age: "Jupiter formed about 4.5 billion years ago, shortly after the Sun.",
		discovery: "Jupiter has been known since ancient times. Galileo Galilei first observed Jupiter's four largest moons in 1610.",
		expedition: {
			name: "Juno spacecraft",
			description: ", which has been orbiting Jupiter since 2016 to study its composition and magnetic field"
		},
		image: "/planet/noname/Jupiter_noname.png"
	},
	saturn: {
		name: "Saturn",
		knownAs: "The ringed planet, famous for its spectacular rings.",
		about: [
			"Saturn is the sixth planet from the Sun and is best known for its stunning ring system, made up of billions of pieces of ice and rock. Saturn is a gas giant, composed mainly of hydrogen and helium, similar to Jupiter.",
			"Saturn has at least 82 known moons, with Titan being the largest. Titan is unique because it has a thick atmosphere and liquid lakes on its surface, though these lakes are made of methane and ethane instead of water."
		],
		diameter: "about 116,460 km",
		mass: "about 5.683 × 10²⁶ kg",
		distance: "1.43 billion km",
		age: "Saturn formed approximately 4.5 billion years ago, along with the rest of our solar system.",
		discovery: "Saturn has been known since prehistoric times. Galileo first observed its rings in 1610, though he didn't understand what they were.",
		expedition: {
			name: "Cassini spacecraft",
			description: ", which orbited Saturn from 2004 to 2017 and provided incredible insights"
		},
		image: "/planet/noname/Saturn_noname.png"
	},
	uranus: {
		name: "Uranus",
		knownAs: "The tilted ice giant.",
		about: [
			"Uranus is the seventh planet from the Sun and is classified as an ice giant. It's made mostly of water, methane, and ammonia ices surrounding a small rocky core. Uranus is unique because it rotates on its side, with an axial tilt of about 98 degrees.",
			"This unusual tilt means that Uranus essentially rolls around the Sun on its side. The methane in its atmosphere gives Uranus its blue-green color. Uranus has at least 27 known moons and a faint ring system."
		],
		diameter: "about 50,724 km",
		mass: "about 8.681 × 10²⁵ kg",
		distance: "2.87 billion km",
		age: "Uranus formed about 4.5 billion years ago during the early formation of our solar system.",
		discovery: "Uranus was discovered by William Herschel on March 13, 1781, making it the first planet discovered with a telescope.",
		expedition: {
			name: "Voyager 2",
			description: ", which flew by Uranus in 1986 and remains the only spacecraft to visit"
		},
		image: "/planet/noname/Uranus_noname.png"
	},
	neptune: {
		name: "Neptune",
		knownAs: "The windiest planet in our solar system.",
		about: [
			"Neptune is the eighth and farthest planet from the Sun in our solar system. Like Uranus, it's an ice giant composed mainly of water, methane, and ammonia ices. Neptune has the strongest winds in the solar system, with speeds reaching up to 2,100 km/h (1,300 mph).",
			"Neptune has a beautiful deep blue color due to methane in its atmosphere. It has at least 14 known moons, with Triton being the largest. Triton is unique because it orbits Neptune in the opposite direction to the planet's rotation."
		],
		diameter: "about 49,244 km",
		mass: "about 1.024 × 10²⁶ kg",
		distance: "4.5 billion km",
		age: "Neptune formed approximately 4.5 billion years ago, similar to other outer planets.",
		discovery: "Neptune was discovered on September 23, 1846, by Johann Galle and Heinrich d'Arrest based on mathematical predictions.",
		expedition: {
			name: "Voyager 2",
			description: ", which flew by Neptune in 1989 and is still the only spacecraft to visit"
		},
		image: "/planet/noname/Neptune_noname.png"
	}
};

export const planetOrder = ['neptune', 'uranus', 'saturn', 'jupiter', 'mars', 'earth', 'venus', 'mercury', 'sun'];

export const usePlanetPopup = () => {
	const [selectedPlanet, setSelectedPlanet] = useState(null);
	const [isPopupActive, setIsPopupActive] = useState(false);

	const handlePlanetClick = (planetKey) => {
		setSelectedPlanet(planetKey);
		setIsPopupActive(true);
	};

	const handleClosePopup = () => {
		setIsPopupActive(false);
		setTimeout(() => setSelectedPlanet(null), 400);
	};

	const handleNavigate = (direction) => {
		const currentIndex = planetOrder.indexOf(selectedPlanet);
		let newIndex;
		
		if (direction === 'prev') {
			newIndex = currentIndex > 0 ? currentIndex - 1 : planetOrder.length - 1;
		} else {
			newIndex = currentIndex < planetOrder.length - 1 ? currentIndex + 1 : 0;
		}
		
		setSelectedPlanet(planetOrder[newIndex]);
	};

	const currentPlanetData = selectedPlanet ? planetsData[selectedPlanet] : null;

	return {
		selectedPlanet,
		isPopupActive,
		currentPlanetData,
		handlePlanetClick,
		handleClosePopup,
		handleNavigate
	};
};

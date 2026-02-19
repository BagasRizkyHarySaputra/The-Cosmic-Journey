import { useState, useEffect } from 'react';

// Data ekspedisi luar angkasa
export const expeditionData = [
	{
		label: 'Voyager 1',
		image: '/space Expedition/voyager1.png',
		info: `Voyager 1 is a robotic spacecraft launched by NASA on September 5, 1977, as part of the Voyager program. Its primary mission was to explore the outer planets during a rare planetary alignment. Voyager 1 successfully conducted close flybys of Jupiter in 1979 and Saturn in 1980, capturing high-resolution images and groundbreaking data. It discovered active volcanoes on Io, observed Jupiter’s Great Red Spot in detail, studied Saturn’s rings, and examined the atmospheres and magnetic fields of both planets.\nAfter its encounters, Voyager 1 followed a trajectory that sent it upward out of the ecliptic plane. It became the most distant human-made object, surpassing all other spacecraft in distance from Earth. On August 25, 2012, it crossed the heliopause and entered interstellar space, where it continues to measure cosmic rays, magnetic fields, and plasma density—providing humanity’s first direct data from this region.\nAboard Voyager 1 is the iconic Golden Record, curated by Carl Sagan’s team, containing 116 images, greetings in 55 languages, natural sounds of Earth (wind, thunder, animals), and music from various cultures. It serves as a message for any possible extraterrestrial intelligence that might encounter the craft millions of years in the future.`
	},
	{
		label: 'Voyager 2',
		image: '/space Expedition/voyager2.png',
		info: 'Voyager 2 is a robotic spacecraft launched by NASA on August 20, 1977, as part of the Voyager program. It was designed to take advantage of a rare planetary alignment that occurs roughly every 176 years, allowing a single spacecraft to visit multiple outer planets using gravitational assists. Although Voyager 2 launched before Voyager 1, its trajectory was slower and more flexible, enabling extended exploration beyond Saturn.\nVoyager 2 conducted a close flyby of Jupiter in July 1979, capturing detailed images of the planet’s atmosphere, rings, and moons. It studied volcanic activity on Io, examined Europa’s icy surface, and analyzed Jupiter’s magnetosphere. In August 1981, it flew past Saturn, studying its rings and discovering additional moons.\nUnlike Voyager 1, Voyager 2 continued outward to Uranus in January 1986, becoming the first spacecraft to visit the planet. It revealed Uranus’s tilted magnetic field, faint ring system, and new moons. In August 1989, it performed the first and only flyby of Neptune, discovering the Great Dark Spot and studying Triton’s active geysers.\nAfter completing its planetary mission, Voyager 2 entered the heliosheath and eventually crossed the heliopause on November 5, 2018, becoming the second spacecraft to enter interstellar space. It continues transmitting data about cosmic rays, plasma density, and magnetic fields from beyond the Sun’s protective bubble. Like its twin, it carries a Golden Record containing images, sounds, and greetings from Earth.'
	},
	{
		label: 'Mariner 1',
		image: '/space Expedition/mariner1.png',
		info: 'Mariner 1 was an early interplanetary spacecraft developed by NASA under the Mariner program, which aimed to explore Venus and Mars. It was launched on July 22, 1962, aboard an Atlas-Agena rocket from Cape Canaveral. The mission’s objective was to perform a flyby of Venus and collect data on its atmosphere and environment.\nShortly after liftoff, the rocket’s guidance system began receiving incorrect signals due to an error in the mathematical guidance equations transmitted from ground control. The tracking system failed to smooth out minor fluctuations, causing the vehicle to drift from its intended trajectory.\nTo prevent potential danger to populated areas, range safety officers destroyed the rocket 293 seconds after launch. The failure was later traced to a missing or improperly handled symbol in the guidance system’s data processing logic. Although Mariner 1 did not complete its mission, the analysis of the failure significantly improved reliability in future space navigation systems and directly contributed to the success of subsequent missions.'
	},
	{
		label: 'Mariner 2',
		image: '/space Expedition/mariner2.png',
		info: 'Mariner 2 was launched by NASA on August 27, 1962, as a follow-up to the failed Mariner 1 mission. Its objective was to conduct a flyby of Venus and gather scientific data about the planet’s atmosphere, temperature, and magnetic environment. The spacecraft carried instruments to measure microwave and infrared radiation, solar wind, cosmic rays, and interplanetary magnetic fields.\nDuring its journey to Venus, Mariner 2 performed mid-course corrections and transmitted valuable data about the solar wind, providing some of the earliest direct measurements of this phenomenon. Despite experiencing overheating issues and temporary system malfunctions, the spacecraft remained operational.\nOn December 14, 1962, Mariner 2 successfully flew within approximately 34,000 kilometers of Venus. Its instruments confirmed that Venus has extremely high surface temperatures, supporting the theory of a runaway greenhouse effect. It also found no significant intrinsic magnetic field around the planet.\nThe success of Mariner 2 marked the first successful interplanetary mission in history and established the United States as a capable participant in planetary exploration during the early Space Age.'
	}
];

// Hook animasi buka/tutup detail popup
export function useExpeditionDetailAnimation(activeIdx) {
	const [animatingIdx, setAnimatingIdx] = useState(null);
	const [showDetail, setShowDetail] = useState(false);

	useEffect(() => {
		if (activeIdx !== null) {
			setAnimatingIdx(activeIdx);
			setShowDetail(false); // Start with hide
			const openTimeout = setTimeout(() => {
				setShowDetail(true); // Switch to show after short delay
			}, 20);
			return () => clearTimeout(openTimeout);
		} else if (animatingIdx !== null) {
			setShowDetail(false);
			const closeTimeout = setTimeout(() => {
				setAnimatingIdx(null);
			}, 300);
			return () => clearTimeout(closeTimeout);
		}
	}, [activeIdx, animatingIdx]);

	// Handler for closing detail with animation
	const handleCloseDetail = () => {
		setShowDetail(false); // trigger hide animation
		setTimeout(() => {
			// parent should setActiveIdx(null)
		}, 700); // match CSS transition duration (0.7s)
	};

	return { animatingIdx, showDetail, setShowDetail, setAnimatingIdx, handleCloseDetail };
}

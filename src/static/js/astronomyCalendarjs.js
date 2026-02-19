import { useState } from 'react';
// List of special dates (month is 0-based)
export const specialDates2025 = [
	{
		day: 3,
		month: 0,
		title: 'Quadrantid Meteor Shower Peak',
		img: 'image 15.png',
		desc: 'The Quadrantid meteor shower peaks in early January each year, with a very short but intense maximum lasting only a few hours. During the peak, observers under dark skies can see around 60–120 meteors per hour, sometimes including bright fireballs. The best viewing time is usually in the pre-dawn hours when the radiant in Boötes is highest. Because the peak is brief, timing and dark skies matter most for getting a good view.'
	},
	{
		day: 14,
		month: 2,
		title: 'Total Lunar Eclipse',
		img: 'total-lunar-eclipse.png',
		desc: 'A total lunar eclipse occurs when the Earth passes directly between the Sun and the Moon, casting a shadow that turns the Moon a reddish color due to Rayleigh scattering. This eclipse is visible from parts of Europe, Asia, Australia, Africa, and the Americas depending on local time. During totality, the Moon may appear copper-red for over an hour.'
	},
	{
		day: 29,
		month: 2,
		title: 'Partial Solar Eclipse',
		img: 'partial-solar-eclipse.png',
		desc: 'A partial solar eclipse occurs when the Moon partially covers the Sun as seen from Earth. This event is visible from parts of Europe, northern Asia, northern Africa, and Greenland. Observers must use certified solar filters or indirect viewing methods to safely observe the eclipse.'
	},
	{
		day: 22,
		month: 3,
		title: 'Lyrid Meteor Shower Peak',
		img: 'lyrid-meteor-shower-peak.png',
		desc: 'The Lyrids typically produce 10–20 meteors per hour at peak. Originating from debris of Comet C/1861 G1 (Thatcher), the radiant lies near the constellation Lyra. Best viewing occurs after midnight under dark skies.'
	},
	{
		day: 6,
		month: 4,
		title: 'Eta Aquarid Meteor Shower Peak',
		img: 'eta-aquarid-meteor-shower-peak.png',
		desc: 'The Eta Aquarids are best viewed just before dawn in early May, with fast meteors and occasional fireballs.'
	},
	{
		day: 12,
		month: 7,
		title: 'Perseid Meteor Shower Peak',
		img: 'perseid-meteor-shower-peak.png',
		desc: 'The Perseids are one of the most popular meteor showers, peaking in mid-August with up to 100 meteors per hour.'
	},
	{
		day: 7,
		month: 8,
		title: '(2nd)Total Lunar Eclipse',
		img: 'total-lunar-eclipse.png',
		desc: 'A second total lunar eclipse occurs in 2025. This eclipse is visible from Asia, Australia, Africa, and Europe. During totality, the Moon will take on a reddish hue as it passes through Earth’s umbral shadow.'   
	},
	{
		day: 8,
		month: 9,
		title: 'Draconid Meteor Shower Peak',
		img: 'draconid-meteor-shower-peak.png',
		desc: 'The Draconids are a minor meteor shower, but can produce outbursts of activity in early October.'
	},
	{
		day: 21,
		month: 9,
		title: 'Orionid Meteor Shower Peak',
		img: 'orionid-meteor-shower-peak.png',
		desc: 'The Orionids are associated with Comet 1P/Halley and can produce around 15–25 meteors per hour at peak. The radiant lies near Orion. Best viewing occurs after midnight.'
	},
	{
		day: 17,
		month: 10,
		title: 'Leonid Meteor Shower Peak',
		img: 'leonid-meteor-shower-peak.png',
		desc: 'The Leonids are famous for producing meteor storms, though typical rates are modest in most years.'
	},
	{
		day: 14,
		month: 11,
		title: 'Geminid Meteor Shower Peak',
		img: 'geminid-meteor-shower-peak.png',
		desc: 'The Geminids are the strongest meteor shower of the year, peaking in mid-December with bright, colorful meteors.'
	}
];

// Helper to check if a date is special
export function isSpecialDate(day, month) {
	return specialDates2025.some(d => d.day === day && d.month === month);
}

// Custom hook for calendar month state and logic (2025 only)
export function useCalendarMonth() {
	const [month, setMonth] = useState(0); // 0=Jan, 11=Dec
	const year = 2025;
	const monthNames = [
		'January', 'February', 'March', 'April', 'May', 'June',
		'July', 'August', 'September', 'October', 'November', 'December'
	];
	const handlePrevMonth = () => {
		setMonth((prev) => (prev === 0 ? 11 : prev - 1));
	};
	const handleNextMonth = () => {
		setMonth((prev) => (prev === 11 ? 0 : prev + 1));
	};
	return { month, setMonth, year, monthNames, handlePrevMonth, handleNextMonth };
}

// Utility to generate a 7x5 grid for a given month and year
export function getCalendarGrid(year, month) {
	// month: 0-based (0=January)
	const daysInMonth = new Date(year, month + 1, 0).getDate();
	const firstDayOfWeek = new Date(year, month, 1).getDay();
	const grid = [];
	let currentDate = 1;
	for (let row = 0; row < 5; row++) {
		const week = [];
		for (let col = 0; col < 7; col++) {
			const cellIndex = row * 7 + col;
			if (cellIndex >= firstDayOfWeek && currentDate <= daysInMonth) {
				week.push(currentDate);
				currentDate++;
			} else {
				week.push(null);
			}
		}
		grid.push(week);
	}
	return grid;
}

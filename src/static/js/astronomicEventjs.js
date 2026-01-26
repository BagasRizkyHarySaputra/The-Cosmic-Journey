// astronomicEventjs.js
// JavaScript logic for Astronomic Events section

// Event data for future expansion
export const astronomicEventsData = {
	spaceExpedition: {
		title: 'Space Expedition',
		image: '/Space Expeditions/1.png',
		description: 'Explore the history of space expeditions'
	},
	astronomyCalendar: {
		title: 'Astronomy Calendar',
		image: '/Astronomy Calendar/1.png',
		description: 'Upcoming astronomical events calendar'
	}
};

// Hook for handling card interactions (for future use)
export const useAstronomicEvents = () => {
	const handleCardClick = (eventType) => {
		console.log(`Clicked on: ${eventType}`);
		// Add navigation or modal logic here
	};

	return {
		handleCardClick,
		eventsData: astronomicEventsData
	};
};

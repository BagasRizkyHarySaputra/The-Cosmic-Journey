// aboutUSjs.js
// JavaScript logic for About Us section

// Developer data
export const developersData = [
	{
		name: 'Hanin',
		role: 'UI/UX Designer',
		image: '/aboutUs/hanin.png',
		quote: '"Happiness depends upon<br />ourselves."'
	},
	{
		name: 'Bagas',
		role: 'Front End Developer',
		image: '/aboutUs/bagas.png',
		quote: '"Hell yeah."'
	},
	{
		name: 'Bima',
		role: 'Front End Developer',
		image: '/aboutUs/bima.png',
		quote: '"In the middle of difficulty<br />lies opportunity."'
	},
	{
		name: 'Amelia',
		role: 'UI/UX Designer',
		image: '/aboutUs/amel.png',
		quote: '"The only way to do great<br />work is to love what you do."'
	}
];

// Hook for handling developer card interactions (for future use)
export const useAboutUS = () => {
	const handleCardClick = (developerName) => {
		console.log(`Clicked on developer: ${developerName}`);
		// Add modal or navigation logic here
	};

	return {
		handleCardClick,
		developers: developersData
	};
};

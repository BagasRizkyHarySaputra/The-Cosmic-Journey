// aboutUSjs.js
// JavaScript logic for About Us section

// Developer data
export const developersData = [
	{
		name: 'Amelia',
		role: 'UI/UX Designer',
		image: '/Anggota Kelompok/Amel.png',
		quote: '"The only way to do great work is to love what you do."'
	},
	{
		name: 'Bagas',
		role: 'Front End Developer',
		image: '/Anggota Kelompok/Bagas.png',
		quote: '"Hell yeah."'
	},
	{
		name: 'Bima',
		role: 'Front End Developer',
		image: '/Anggota Kelompok/Bima.png',
		quote: '"In the middle of difficulty lies opportunity."'
	},
	{
		name: 'Hanin',
		role: 'UI/UX Designer',
		image: '/Anggota Kelompok/Hanin.png',
		quote: '"Happiness depends upon ourselves."'
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

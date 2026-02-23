// contactjs.js
// JavaScript logic for Contact section

// Contact information data
export const contactData = {
	email: 'contact@thecosmicjourney.com',
	social: {
		twitter: '',
		instagram: 'https://www.instagram.com/bagasrizky.hss/',
		facebook: 'https://www.facebook.com/smknegeri7semarang/?locale=id_ID',
		linkedin: '#'
	}
};

// Hook for handling contact interactions (for future use)
export const useContact = () => {
	const handleSubmit = (formData) => {
		console.log('Contact form submitted:', formData);
		// Add form submission logic here
	};

	return {
		handleSubmit,
		contact: contactData
	};
};
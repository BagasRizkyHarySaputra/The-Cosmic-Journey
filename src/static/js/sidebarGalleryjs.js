// sidebarGalleryjs.js
// JavaScript logic for Sidebar Gallery

import { useState } from 'react';

// Gallery images data
export const galleryImagesData = [
	{ id: 1, src: '/Space Dump/1.png', alt: 'Galaxy', title: 'Spiral Galaxy' },
	{ id: 2, src: '/Space Dump/2.png', alt: 'Black Hole', title: 'Black Hole' },
	{ id: 3, src: '/Space Dump/3.png', alt: 'Nebula', title: 'Stellar Nebula' },
	{ id: 4, src: '/Space Dump/4.png', alt: 'Saturn', title: 'Saturn' },
	{ id: 5, src: '/Space Dump/5.png', alt: 'Moon', title: 'Full Moon' },
	{ id: 6, src: '/Space Dump/6.png', alt: 'Uranus', title: 'Uranus' },
	{ id: 7, src: '/Space Dump/7.png', alt: 'Comet', title: 'Comet' },
	{ id: 8, src: '/Space Dump/8.png', alt: 'Spiral Galaxy', title: 'Whirlpool Galaxy' },
	{ id: 9, src: '/Space Dump/9.png', alt: 'Cosmic Cloud', title: 'Butterfly Nebula' }
];

// Hook for handling gallery state
export const useGallery = () => {
	const [isGalleryOpen, setIsGalleryOpen] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);

	const openGallery = () => setIsGalleryOpen(true);
	const closeGallery = () => {
		setIsGalleryOpen(false);
		setSelectedImage(null);
	};

	const selectImage = (image) => setSelectedImage(image);
	const clearSelectedImage = () => setSelectedImage(null);

	return {
		isGalleryOpen,
		selectedImage,
		openGallery,
		closeGallery,
		selectImage,
		clearSelectedImage,
		galleryImages: galleryImagesData
	};
};

// sidebarNewsjs.js
// JavaScript logic for Sidebar News

import { useState } from 'react';

// News data
export const newsData = [
	{
		id: 1,
		image: '/What Happens Recently/1.png',
		title: 'Sunday Night Doubleheader: Catch the 2025 Leonid Meteors and an Aurora Encore',
		highlights: ['Sunday Night', '2025', 'Aurora'],
		date: '2025-11-17',
		link: '#'
	},
	{
		id: 2,
		image: '/What Happens Recently/2.png',
		title: 'The Seven Sisters Have Thousands of Hidden Siblings',
		highlights: ['Seven', 'Have', 'Hidden Siblings'],
		date: '2025-11-15',
		link: '#'
	},
	{
		id: 3,
		image: '/What Happens Recently/3.png',
		title: 'The Impossible Black Holes That Shouldn\'t Exist',
		highlights: ['Impossible', 'Holes', 'Exist'],
		date: '2025-11-10',
		link: '#'
	}
];

// Hook for handling news state
export const useNews = () => {
	const [isNewsOpen, setIsNewsOpen] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [selectedNews, setSelectedNews] = useState(null);
	const itemsPerPage = 3;

	const openNews = () => setIsNewsOpen(true);
	const closeNews = () => {
		setIsNewsOpen(false);
		setSelectedNews(null);
	};

	const selectNews = (news) => setSelectedNews(news);
	const clearSelectedNews = () => setSelectedNews(null);

	const goToPage = (page) => setCurrentPage(page);

	return {
		isNewsOpen,
		currentPage,
		selectedNews,
		openNews,
		closeNews,
		selectNews,
		clearSelectedNews,
		goToPage,
		newsItems: newsData,
		itemsPerPage
	};
};

// sidebarNewsjs.js
// JavaScript logic for Sidebar News

import { useState } from 'react';

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

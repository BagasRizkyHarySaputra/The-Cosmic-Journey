import React, { useState } from 'react';
import '../static/css/sidebarNews.css';

function SidebarNews({ isOpen, onClose }) {
	const [currentPage, setCurrentPage] = useState(1);

	const newsData = [
		{
			id: 1,
			image: '/What Happens Recently/1.png',
			title: ['Sunday Night Doubleheader:', 'Catch the 2025 Leonid Meteors', 'and an Aurora Encore'],
			highlights: ['Sunday Night', '2025', 'Aurora'],
			link: '#'
		},
		{
			id: 2,
			image: '/What Happens Recently/2.png',
			title: ['The Seven', 'Sisters Have', 'Thousands of', 'Hidden Siblings'],
			highlights: ['Seven', 'Have', 'Hidden Siblings'],
			link: '#'
		},
		{
			id: 3,
			image: '/What Happens Recently/3.png',
			title: ['The Impossible', 'Black Holes', 'That Shouldn\'t', 'Exist'],
			highlights: ['Impossible', 'Holes', 'Exist'],
			link: '#'
		}
	];

	const renderTitle = (titleParts, highlights) => {
		return titleParts.map((part, index) => {
			const words = part.split(' ');
			return (
				<span key={index}>
					{words.map((word, wordIndex) => {
						const isHighlight = highlights.some(h => 
							word.toLowerCase().includes(h.toLowerCase()) || 
							h.toLowerCase().includes(word.toLowerCase())
						);
						return (
							<span key={wordIndex}>
								{isHighlight ? (
									<span className="highlight">{word}</span>
								) : (
									word
								)}
								{wordIndex < words.length - 1 ? ' ' : ''}
							</span>
						);
					})}
					{index < titleParts.length - 1 ? <br /> : ''}
				</span>
			);
		});
	};

	const renderPagination = () => {
		const pages = [];
		
		for (let i = 1; i <= 3; i++) {
			pages.push(
				<span 
					key={i}
					className={`pagination-item ${currentPage === i ? 'active' : ''}`}
					onClick={() => setCurrentPage(i)}
				>
					{i}
				</span>
			);
		}
		
		pages.push(<span key="dots" className="pagination-dots">...</span>);
		
		for (let i = 9; i <= 10; i++) {
			pages.push(
				<span 
					key={i}
					className={`pagination-item ${currentPage === i ? 'active' : ''}`}
					onClick={() => setCurrentPage(i)}
				>
					{i}
				</span>
			);
		}
		
		return pages;
	};

	if (!isOpen) return null;

	return (
		<div className="news-overlay">
			<div className="news-container">
				{/* Header */}
				<div className="news-header">
					<div className="news-title-section">
						<h2 className="news-title">What Happens Recently?</h2>
						<p className="news-subtitle">Let's take a look!</p>
					</div>
					<button className="news-close-btn" onClick={onClose}>
						×
					</button>
				</div>

				{/* News Cards Grid */}
				<div className="news-grid">
					{newsData.map((news) => (
						<div className="news-card" key={news.id}>
							<div className="news-card-image-wrapper">
								<img 
									src={news.image} 
									alt="News" 
									className="news-card-image"
								/>
							</div>
							<div className="news-card-content">
								<h3 className="news-card-title">
									{renderTitle(news.title, news.highlights)}
								</h3>
								<a href={news.link} className="news-read-more">
									Read More...
								</a>
							</div>
						</div>
					))}
				</div>

				{/* Pagination */}
				<div className="news-pagination">
					{renderPagination()}
				</div>
			</div>
		</div>
	);
}

export default SidebarNews;

import React, { useState } from 'react';
import '../static/css/sidebarNews.css';
import BackgroundSet from './backgroundSet';

function SidebarNews({ isOpen, onClose }) {
	const [currentPage, setCurrentPage] = useState(1);

	const newsData = [
		{
			id: 1,
			image: '/Sidebar News/sunday-night.png',
			title: ['Sunday Night', 'Doubleheader:', 'Catch the 2025','Leonid Meteors', 'and an Aurora', 'Encore'],
			link: 'https://www.universetoday.com/articles/sunday-night-doubleheader-catch-the-2025-leonid-meteors-and-an-aurora-encore'
		},
		{
			id: 2,
			image: '/Sidebar News/the-seven.png',
			title: ['The Seven', 'Sisters Have', 'Thousands of', 'Hidden Siblings'],
			link: 'https://www.universetoday.com/articles/the-seven-sisters-have-thousands-of-hidden-siblings'
		},
		{
			id: 3,
			image: '/Sidebar News/the-impossible.png',
			title: ['The Impossible', 'Black Holes', 'That Shouldn\'t', 'Exist'],
			highlights: ['Impossible', 'Holes', 'Exist'],
			link: 'https://www.universetoday.com/articles/the-impossible-black-holes-that-shouldnt-exist'
		}
	];

	// Render the news title as separate lines/blocks, unified style
	const renderTitle = (titleParts) => {
		return (
			<span>
				{titleParts.map((part, idx) => (
					<span key={idx} className="news-title-part">{part}{idx < titleParts.length - 1 ? <br /> : null}</span>
				))}
			</span>
		);
	};

	const renderPagination = () => {
		return newsData.map((news, idx) => (
			<a
				key={idx}
				className={`pagination-item${currentPage === idx + 1 ? ' active' : ''}`}
				href={news.link}
				target="_blank"
				rel="noopener noreferrer"
				onClick={() => setCurrentPage(idx + 1)}
			>
				{idx + 1}
			</a>
		));
	};

	if (!isOpen) return null;

	return (
		<div className="news-overlay">
			<div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh', overflow: 'hidden', zIndex: 1 }}>
				<BackgroundSet hideLightBeam />
			</div>
			<div className="news-container" style={{ position: 'relative', zIndex: 2 }}>
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
									{renderTitle(news.title)}
								</h3>
								<a href={news.link} className="news-read-more cursor-target">
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

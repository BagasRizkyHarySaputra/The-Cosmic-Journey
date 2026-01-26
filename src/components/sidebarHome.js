
import React, { useState } from 'react';
import '../static/css/sidebarHome.css';
import SidebarGallery from './sidebarGallery';
import SidebarNews from './sidebarNews';
import SidebarFAQ from './sidebarFAQ';

function SidebarHome() {
	const [open, setOpen] = useState(true); // Always open for now
	const [isGalleryOpen, setIsGalleryOpen] = useState(false);
	const [isNewsOpen, setIsNewsOpen] = useState(false);
	const [isFAQOpen, setIsFAQOpen] = useState(false);

	const handleGalleryClick = () => {
		if (isGalleryOpen) {
			setIsGalleryOpen(false);
		} else {
			setIsGalleryOpen(true);
			setIsNewsOpen(false);
			setIsFAQOpen(false);
		}
	};

	const handleCloseGallery = () => {
		setIsGalleryOpen(false);
	};

	const handleNewsClick = () => {
		if (isNewsOpen) {
			setIsNewsOpen(false);
		} else {
			setIsNewsOpen(true);
			setIsGalleryOpen(false);
			setIsFAQOpen(false);
		}
	};

	const handleCloseNews = () => {
		setIsNewsOpen(false);
	};

	const handleFAQClick = () => {
		if (isFAQOpen) {
			setIsFAQOpen(false);
		} else {
			setIsFAQOpen(true);
			setIsGalleryOpen(false);
			setIsNewsOpen(false);
		}
	};

	const handleCloseFAQ = () => {
		setIsFAQOpen(false);
	};

	return (
		<>
			<div className={`sidebar${open ? ' open' : ''}`}>
				<div className="sidebar-center-wrapper">
					<div className="sidebar-hamburger" onClick={() => setOpen(!open)}>
						<div className="bar"></div>
						<div className="bar"></div>
						<div className="bar"></div>
					</div>
					<div className="sidebar-row">
						<div className="sidebar-vertical-line"></div>
						<div className="sidebar-menu">
							<div 
								className={`sidebar-menu-item ${isGalleryOpen ? 'active' : ''}`}
								onClick={handleGalleryClick}
							>
								Gallery
							</div>
							<div 
								className={`sidebar-menu-item sidebar-news ${isNewsOpen ? 'active' : ''}`}
								onClick={handleNewsClick}
							>
								News
							</div>
							<div 
								className={`sidebar-menu-item ${isFAQOpen ? 'active' : ''}`}
								onClick={handleFAQClick}
							>
								FAQ
							</div>
						</div>
					</div>
				</div>
			</div>
			<SidebarGallery isOpen={isGalleryOpen} onClose={handleCloseGallery} />
			<SidebarNews isOpen={isNewsOpen} onClose={handleCloseNews} />
			<SidebarFAQ isOpen={isFAQOpen} onClose={handleCloseFAQ} />
		</>
	);
}

export default SidebarHome;

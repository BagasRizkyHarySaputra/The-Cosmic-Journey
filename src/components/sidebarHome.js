
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import '../static/css/sidebarHome.css';
import SidebarGallery from './sidebarGallery';
import SidebarNews from './sidebarNews';
import SidebarFAQ from './sidebarFAQ';

function SidebarHome() {
	const [open, setOpen] = useState(true); // Sidebar open/close state
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
					 <div className="sidebar-hamburger cursor-target" onClick={() => setOpen(!open)}>
						 <div className="bar"></div>
						 <div className="bar"></div>
						 <div className="bar"></div>
					 </div>
					 <div className="sidebar-row">
						 <div
							 className="sidebar-vertical-line"
							 style={{ opacity: open ? 1 : 0.7 }}
						 ></div>
						 <AnimatePresence>
							 {open && (
								 <motion.div
									 className="sidebar-menu"
									 key="sidebar-menu"
									 initial={{ opacity: 0, x: -30 }}
									 animate={{ opacity: 1, x: 0 }}
									 exit={{ opacity: 0, x: -30 }}
									 transition={{ duration: 0.3 }}
								 >
									 <motion.div
										 className={`sidebar-menu-item cursor-target ${isGalleryOpen ? 'active' : ''}`}
										 onClick={handleGalleryClick}
										 initial={{ opacity: 0, x: -20 }}
										 animate={{ opacity: 1, x: 0 }}
										 exit={{ opacity: 0, x: -20 }}
										 transition={{ duration: 0.2, delay: 0.05 }}
									 >
										 Gallery
									 </motion.div>
									 <motion.div
										 className={`sidebar-menu-item sidebar-news cursor-target ${isNewsOpen ? 'active' : ''}`}
										 onClick={handleNewsClick}
										 initial={{ opacity: 0, x: -20 }}
										 animate={{ opacity: 1, x: 0 }}
										 exit={{ opacity: 0, x: -20 }}
										 transition={{ duration: 0.2, delay: 0.1 }}
									 >
										 News
									 </motion.div>
									 <motion.div
										 className={`sidebar-menu-item cursor-target ${isFAQOpen ? 'active' : ''}`}
										 onClick={handleFAQClick}
										 initial={{ opacity: 0, x: -20 }}
										 animate={{ opacity: 1, x: 0 }}
										 exit={{ opacity: 0, x: -20 }}
										 transition={{ duration: 0.2, delay: 0.15 }}
									 >
										 FAQ
									 </motion.div>
								 </motion.div>
							 )}
						 </AnimatePresence>
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

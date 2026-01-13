
import React, { useState } from 'react';
import '../static/css/sidebarHome.css';

function SidebarHome() {
	const [open, setOpen] = useState(true); // Always open for now

	return (
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
						<div className="sidebar-menu-item">Gallery</div>
						<div className="sidebar-menu-item sidebar-news">
							News
						</div>
						<div className="sidebar-menu-item">FAQ</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SidebarHome;

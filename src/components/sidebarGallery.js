import React from 'react';
import '../static/css/sidebarGallrey.css';

function SidebarGallery({ isOpen, onClose }) {
	const galleryImages = [
		{ id: 1, src: '/Space Dump/1.png', alt: 'Galaxy' },
		{ id: 2, src: '/Space Dump/2.png', alt: 'Black Hole' },
		{ id: 3, src: '/Space Dump/3.png', alt: 'Nebula' },
		{ id: 4, src: '/Space Dump/4.png', alt: 'Saturn' },
		{ id: 5, src: '/Space Dump/5.png', alt: 'Moon' },
		{ id: 6, src: '/Space Dump/6.png', alt: 'Uranus' },
		{ id: 7, src: '/Space Dump/7.png', alt: 'Comet' },
		{ id: 8, src: '/Space Dump/8.png', alt: 'Spiral Galaxy' },
		{ id: 9, src: '/Space Dump/9.png', alt: 'Cosmic Cloud' }
	];

	if (!isOpen) return null;

	return (
		<div className="gallery-overlay">
			<div className="gallery-container">
				{/* Header */}
				<div className="gallery-header">
					<div className="gallery-title-section">
						<h2 className="gallery-title">Space's Dump</h2>
						<p className="gallery-subtitle">What a nice view over here!</p>
					</div>
					<button className="gallery-close-btn" onClick={onClose}>
						×
					</button>
				</div>

				{/* Gallery Grid */}
				<div className="gallery-grid">
					{galleryImages.map((image) => (
						<div className="gallery-item" key={image.id}>
							<img 
								src={image.src} 
								alt={image.alt} 
								className="gallery-image"
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default SidebarGallery;

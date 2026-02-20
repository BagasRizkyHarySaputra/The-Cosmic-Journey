import React, { useState } from 'react';
import '../static/css/sidebarGallrey.css';
import BackgroundSet from './backgroundSet';

function SidebarGallery({ isOpen, onClose }) {
	const [selectedImage, setSelectedImage] = useState(null);
	const galleryImages = [
		{ id: 1, src: '/Sidebar Gallery/galaxy.png', alt: 'Galaxy' },
		{ id: 2, src: '/Sidebar Gallery/black-hole.png', alt: 'Black Hole' },
		{ id: 3, src: '/Sidebar Gallery/nebula.png', alt: 'Nebula' },
		{ id: 4, src: '/Sidebar Gallery/saturn.png', alt: 'Saturn' },
		{ id: 5, src: '/Sidebar Gallery/moon.png', alt: 'Moon' },
		{ id: 6, src: '/Sidebar Gallery/uranus.png', alt: 'Uranus' },
		{ id: 7, src: '/Sidebar Gallery/comet.png', alt: 'Comet' },
		{ id: 8, src: '/Sidebar Gallery/spiral-galaxy.png', alt: 'Spiral Galaxy' },
		{ id: 9, src: '/Sidebar Gallery/cosmic-cloud.png', alt: 'Cosmic Cloud' }
	];

   if (!isOpen) return null;

   return (
       <div className="gallery-overlay">
           <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh', overflow: 'hidden', zIndex: 1 }}>
               <BackgroundSet hideLightBeam />
           </div>
           <div className="gallery-container" style={{ position: 'relative', zIndex: 2 }}>
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
                       <div className="gallery-item" key={image.id} onClick={() => setSelectedImage(image)} style={{ cursor: 'zoom-in' }}>
                           <img 
                               src={image.src} 
                               alt={image.alt} 
                               className="gallery-image"
                           />
                       </div>
                   ))}
               </div>
           </div>

           {/* Fullscreen Image Modal */}
           {selectedImage && (
               <div className="gallery-fullscreen-modal" onClick={() => setSelectedImage(null)}>
                   <div className="gallery-fullscreen-bg-blur" />
                   <div className="gallery-fullscreen-img-wrapper" onClick={e => e.stopPropagation()}>
                       <img
                           src={selectedImage.src}
                           alt={selectedImage.alt}
                           className="gallery-fullscreen-img"
                           style={{ maxWidth: '90vw', maxHeight: '90vh', objectFit: 'contain', cursor: 'zoom-out' }}
                       />
                   </div>
               </div>
           )}
       </div>
   );
}

export default SidebarGallery;

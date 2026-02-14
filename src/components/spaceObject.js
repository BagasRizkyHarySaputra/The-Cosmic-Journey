import React, { useRef, useEffect } from 'react';
import '../static/css/spaceObject.css';
import { useSpaceObjectCarousel, spaceObjectsData } from '../static/js/spaceObjectjs';

function SpaceObject() {
	const { handlePrev, handleNext, handleWheel, isAnimating, getCardPosition, animationSpeed } = useSpaceObjectCarousel();
	const cardRefs = useRef([]);

	// Add wheel event listener to each individual card
	useEffect(() => {
		const cards = cardRefs.current;
		
		cards.forEach(card => {
			if (card) {
				card.addEventListener('wheel', handleWheel, { passive: false });
			}
		});

		return () => {
			cards.forEach(card => {
				if (card) {
					card.removeEventListener('wheel', handleWheel);
				}
			});
		};
	}, [handleWheel]);

	return (
		<section id="spaceObject" className="space-objects">
			<div className="space-objects-boundary top"></div>
			
			<div className="space-objects-header">
				<h2 className="space-objects-title">Space Objects</h2>
				<p className="space-objects-subtitle">You May Know!</p>
			</div>

			<div className="space-objects-carousel">
				<button className="carousel-arrow left" onClick={handlePrev} disabled={isAnimating}>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
						<polyline points="15 18 9 12 15 6"></polyline>
					</svg>
				</button>

				<div className="cards-wrapper">
					{spaceObjectsData.slice(0, 3).map((object, index) => (
						<div 
							key={object.id} 
							ref={el => cardRefs.current[index] = el}
							className={`object-card ${getCardPosition(index)}`}
							style={{
								transition: `all ${animationSpeed}ms cubic-bezier(0.4, 0, 0.2, 1)`
							}}
						>
							<div className="object-card-light"></div>
							<div className="object-card-screen">
								<div className="object-card-image-wrapper">
									<img 
										src={process.env.PUBLIC_URL + object.image}
										alt={object.name} 
										className="object-card-image"
									/>
								</div>
								<h3 className="object-card-name">{object.name}</h3>
								<p className="object-card-description">{object.description}</p>
							</div>
						</div>
					))}
				</div>

				<button className="carousel-arrow right" onClick={handleNext} disabled={isAnimating}>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
						<polyline points="9 18 15 12 9 6"></polyline>
					</svg>
				</button>
			</div>

			<div className="space-objects-boundary bottom"></div>
		</section>
	);
}

export default SpaceObject;

import React from 'react';
import '../static/css/spaceObject.css';
import { useSpaceObjectCarousel } from '../static/js/spaceObjectjs';

function SpaceObject() {
	const { visibleObjects, isAnimating, handlePrev, handleNext, getCardAnimationClass } = useSpaceObjectCarousel();

	return (
		<section className="space-objects">
			<div className="space-objects-boundary top"></div>
			
			<div className="space-objects-header">
				<h2 className="space-objects-title">Space Objects</h2>
				<p className="space-objects-subtitle">You May Know!</p>
			</div>

			<div className="space-objects-carousel">
				<button className="carousel-arrow left" onClick={handlePrev} disabled={isAnimating}>
					«
				</button>

				<div className="cards-wrapper">
					{/* Left Card */}
					<div className={`object-card left ${getCardAnimationClass('left')}`}>
						<div className="object-card-image-wrapper">
							<img 
								src={visibleObjects.left.image} 
								alt={visibleObjects.left.name} 
								className="object-card-image"
							/>
						</div>
						<h3 className="object-card-name">{visibleObjects.left.name}</h3>
						<p className="object-card-description">{visibleObjects.left.description}</p>
					</div>

					{/* Center Card */}
					<div className={`object-card center ${getCardAnimationClass('center')}`}>
						<div className="object-card-image-wrapper">
							<img 
								src={visibleObjects.center.image} 
								alt={visibleObjects.center.name} 
								className="object-card-image"
							/>
						</div>
						<h3 className="object-card-name">{visibleObjects.center.name}</h3>
						<p className="object-card-description">{visibleObjects.center.description}</p>
					</div>

					{/* Right Card */}
					<div className={`object-card right ${getCardAnimationClass('right')}`}>
						<div className="object-card-image-wrapper">
							<img 
								src={visibleObjects.right.image} 
								alt={visibleObjects.right.name} 
								className="object-card-image"
							/>
						</div>
						<h3 className="object-card-name">{visibleObjects.right.name}</h3>
						<p className="object-card-description">{visibleObjects.right.description}</p>
					</div>
				</div>

				<button className="carousel-arrow right" onClick={handleNext} disabled={isAnimating}>
					»
				</button>
			</div>

			<div className="space-objects-boundary bottom"></div>
		</section>
	);
}

export default SpaceObject;

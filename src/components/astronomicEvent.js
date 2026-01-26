import React from 'react';
import '../static/css/astronomicEvent.css';

function AstronomicEvent() {
	return (
		<section className="astronomic-events">
			<div className="astronomic-events-boundary top"></div>
			
			<div className="astronomic-events-header">
				<h2 className="astronomic-events-title">Astronomical</h2>
				<p className="astronomic-events-subtitle">Events</p>
			</div>

			<div className="astronomic-events-cards">
				{/* Space Expedition Card */}
				<div className="event-card">
					<div className="event-card-glow"></div>
					<div className="event-card-content">
						<div className="event-card-image-wrapper">
							<img 
								src="/Space Expeditions/1.png" 
								alt="Space Expedition" 
								className="event-card-image"
							/>
						</div>
						<h3 className="event-card-title">Space<br/>Expedition</h3>
					</div>
				</div>

				{/* Astronomy Calendar Card */}
				<div className="event-card">
					<div className="event-card-glow"></div>
					<div className="event-card-content">
						<div className="event-card-image-wrapper">
							<img 
								src="/Astronomy Calendar/1.png" 
								alt="Astronomy Calendar" 
								className="event-card-image"
							/>
						</div>
						<h3 className="event-card-title">Astronomy<br/>Calendar</h3>
					</div>
				</div>
			</div>

			<div className="astronomic-events-boundary bottom"></div>
		</section>
	);
}

export default AstronomicEvent;

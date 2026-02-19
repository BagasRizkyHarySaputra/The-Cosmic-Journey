import React from 'react';
import '../static/css/astronomicEvent.css';

function AstronomicEvent() {
	return (
		<section id="astronomicEvent" className="astronomic-events">
			<div className="ellipse18-container">
				<img 
					src="/Astronomy Events/Ellipse 18.svg" 
					alt="Ellipse 18" 
					className="ellipse18-img"
				/>
			</div>
			<h1 className="astronomy-events-title">
				Astronomy Events
			</h1>
			<div className='wrapper'>
				<a className='event-item' href="/space-expedition">
					<img src="/Astronomy Events/1.png" alt="Space Expedition" />
				</a>
				<a className='event-item' href="/astronomy-calendar">
					<img src="/Astronomy Events/2.png" alt="Astronomy Calendar" />
				</a>
			</div>
		</section>
	);
}

export default AstronomicEvent;

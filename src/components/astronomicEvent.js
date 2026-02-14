import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../static/css/astronomicEvent.css';

function AstronomicEvent() {
	const navigate = useNavigate();

	const handleSpaceExpeditionClick = () => {
		navigate('/space-expedition');
	};

	const handleAstronomyCalendarClick = () => {
		navigate('/astronomy-calendar');
	};

	return (
		<section id="astronomicEvent" className="astronomic-events">
			<div className='wrapper'>
				<div className='event-item' onClick={handleSpaceExpeditionClick}>
					<img src="/Astronomy Events/1.png" alt="Space Expedition" />
				</div>
				<div className='event-item' onClick={handleAstronomyCalendarClick}>
					<img src="/Astronomy Events/2.png" alt="Astronomy Calendar" />
				</div>
			</div>
		</section>
	);
}

export default AstronomicEvent;

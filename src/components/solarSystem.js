import React from 'react';
import '../static/css/solarSystem.css';

function SolarSystem() {
	return (
		<section className="solar-system">
			<div className="boundary-line top"></div>
			<div className="solar-system-content">
				<div className="solar-system-text">
					<h2 className="solar-system-title">
						<span className="title-solar">Solar</span><br />
						<span className="title-system">System</span>
					</h2>
					<p className="solar-system-description">
						What in our Solar System?
					</p>
				</div>
			</div>
			<div className="boundary-line bottom"></div>
		</section>
	);
}

export default SolarSystem;
import React from 'react';
import '../static/css/solarSystem.css';
import '../static/css/solarSystemPopUp.css';
import '../static/css/planetData.css';
import { usePlanetPopup, formatText } from '../static/js/solarSystemjs';

function SolarSystem() {
	const {
		selectedPlanet,
		isPopupActive,
		currentPlanetData,
		handlePlanetClick,
		handleClosePopup,
		handleNavigate
	} = usePlanetPopup();

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

				{/* Planets wrapper - fixed size, scrollable if needed */}
				<div className="planets-wrapper">
					<img src="/planet/Neptune.png" alt="Neptune" className="planet neptune" onClick={() => handlePlanetClick('neptune')} />
					<img src="/planet/Uranus.png" alt="Uranus" className="planet uranus" onClick={() => handlePlanetClick('uranus')} />
					<img src="/planet/Saturn.png" alt="Saturn" className="planet saturn" onClick={() => handlePlanetClick('saturn')} />
					<img src="/planet/Jupiter.png" alt="Jupiter" className="planet jupiter" onClick={() => handlePlanetClick('jupiter')} />
					<img src="/planet/Mars.png" alt="Mars" className="planet mars" onClick={() => handlePlanetClick('mars')} />
					<img src="/planet/Earth.png" alt="Earth" className="planet earth" onClick={() => handlePlanetClick('earth')} />
					<img src="/planet/Mercury.png" alt="Mercury" className="planet mercury" onClick={() => handlePlanetClick('mercury')} />
					<img src="/planet/Venus.png" alt="Venus" className="planet venus" onClick={() => handlePlanetClick('venus')} />
					<img src="/planet/Sun.png" alt="The Sun" className="planet sun" onClick={() => handlePlanetClick('sun')} />
				</div>
			</div>
			<div className="boundary-line bottom"></div>

			{/* Planet Popup */}
			{selectedPlanet && (
				<div className={`planet-popup-overlay ${isPopupActive ? 'active' : ''}`} onClick={handleClosePopup}>
					<div className={`planet-popup ${isPopupActive ? 'active' : ''}`} onClick={(e) => e.stopPropagation()}>
						<button className="popup-close" onClick={handleClosePopup}>×</button>
						
						<div className="popup-content-wrapper">
							<div className="popup-left">
								<div className="known-as-box">
									<h3 className="known-as-title">Known As</h3>
									<p className="known-as-text">{formatText(currentPlanetData.knownAs)}</p>
								</div>

								<div className="about-section">
									<h3 className="about-title">About {currentPlanetData.name}</h3>
									{currentPlanetData.about.map((paragraph, index) => (
										<p key={index} className="about-text">{formatText(paragraph)}</p>
									))}
								</div>

								<div className="info-boxes">
									<div className="info-box">
										<h4 className="info-box-title">Measurement</h4>
										<div className="info-item">
											<p className="info-label">Diameter:</p>
											<p className="info-value">{currentPlanetData.diameter}</p>
										</div>
										<div className="info-item">
											<p className="info-label">Mass:</p>
											<p className="info-value">{currentPlanetData.mass}</p>
										</div>
										<div className="info-item">
											<p className="info-label">Distance from Sun:</p>
											<p className="info-value">{currentPlanetData.distance}</p>
										</div>
									</div>

									<div className="info-box">
										<h4 className="info-box-title">Discovery</h4>
										<p className="info-value discovery-text">{currentPlanetData.discovery}</p>
									</div>
								</div>

								<div className="expedition-box">
									<h3 className="expedition-title">Expedition</h3>
									<p className="expedition-text">
										Explored by <strong>{currentPlanetData.expedition.name}</strong>
										{currentPlanetData.expedition.description}
									</p>
								</div>
							</div>

							<div className="popup-right">
								<img src={currentPlanetData.image} alt={currentPlanetData.name} className="popup-planet-image" />
								<h2 className="popup-planet-name">{currentPlanetData.name}</h2>
							</div>
						</div>
					</div>
					<div className="popup-navigation">
						<button className="nav-arrow" onClick={(e) => { e.stopPropagation(); handleNavigate('prev'); }}>«</button>
						<button className="nav-arrow" onClick={(e) => { e.stopPropagation(); handleNavigate('next'); }}>»</button>
					</div>
				</div>
			)}
		</section>
	);
}

export default SolarSystem;
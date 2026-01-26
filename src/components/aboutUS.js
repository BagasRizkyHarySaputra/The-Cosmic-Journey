import React from 'react';
import '../static/css/aboutUS.css';

function AboutUS() {
	const developers = [
		{
			name: 'Amelia',
			role: 'UI/UX Designer',
			image: '/Anggota Kelompok/Amel.png',
			quote: '"The only way to do great work is to love what you do."'
		},
		{
			name: 'Bagas',
			role: 'Front End Developer',
			image: '/Anggota Kelompok/Bagas.png',
			quote: '"Hell yeah."'
		},
		{
			name: 'Bima',
			role: 'Front End Developer',
			image: '/Anggota Kelompok/Bima.png',
			quote: '"In the middle of difficulty lies opportunity."'
		},
		{
			name: 'Hanin',
			role: 'UI/UX Designer',
			image: '/Anggota Kelompok/Hanin.png',
			quote: '"Happiness depends upon ourselves."'
		}
	];

	return (
		<section className="about-us">
			<div className="about-us-boundary top"></div>
			
			{/* Header Section */}
			<div className="about-us-header">
				<span className="about-us-label">About Us</span>
				<h2 className="about-us-title">Stories Written in the</h2>
				<h2 className="about-us-title-highlight">Stars</h2>
				<p className="about-us-tagline">Together we explore, learn, and dream</p>
			</div>

			{/* Story Box */}
			<div className="about-us-story-container">
				<div className="about-us-story-box">
					<p className="story-text">
						<strong>Every journey</strong> begins with a spark, a question, a curiosity, a longing to understand what lies beyond. Our story is no different. We were founded on a simple belief: that the universe is not just something to look at, but something to explore, study, and share.
					</p>
					<p className="story-text">
						From the quiet glow of distant galaxies to the hidden secrets of the planets around us, <strong>we exist to bring the wonders of space closer to everyone</strong>. We combine passion, knowledge, and imagination to create experiences, insights, and discoveries that inspire people of all ages to look up and dream bigger.
					</p>
					<p className="story-text">
						Whether you are a lifelong stargazer, a student searching for answers, or someone who wonders what lies beyond the night sky, you are part of this journey with us.
					</p>
					<p className="story-closing">
						<em>Because every star has a story.</em><br/>
						<em>And together, we are here to tell it.</em>
					</p>
				</div>
			</div>

			{/* Developers Section */}
			<div className="developers-section">
				<h2 className="developers-title">Hi there, We are The</h2>
				<h2 className="developers-title-highlight">Developers!</h2>
				<p className="developers-subtitle">Nice to meet you, passenger!</p>

				<div className="developers-grid">
					{/* Top Row */}
					<div className="developers-row top-row">
						{developers.slice(0, 2).map((dev, index) => (
							<div className="developer-card" key={index}>
								<div className="developer-card-glow"></div>
								<div className="developer-card-content">
									<div className="developer-image-wrapper">
										<img 
											src={dev.image} 
											alt={dev.name} 
											className="developer-image"
										/>
									</div>
									<div className="developer-info">
										<h3 className="developer-name">{dev.name}</h3>
										<p className="developer-role">{dev.role}</p>
									</div>
									<p className="developer-quote">{dev.quote}</p>
								</div>
							</div>
						))}
					</div>

					{/* Bottom Row */}
					<div className="developers-row bottom-row">
						{developers.slice(2, 4).map((dev, index) => (
							<div className="developer-card" key={index}>
								<div className="developer-card-glow"></div>
								<div className="developer-card-content">
									<div className="developer-image-wrapper">
										<img 
											src={dev.image} 
											alt={dev.name} 
											className="developer-image"
										/>
									</div>
									<div className="developer-info">
										<h3 className="developer-name">{dev.name}</h3>
										<p className="developer-role">{dev.role}</p>
									</div>
									<p className="developer-quote">{dev.quote}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="about-us-boundary bottom"></div>
		</section>
	);
}

export default AboutUS;

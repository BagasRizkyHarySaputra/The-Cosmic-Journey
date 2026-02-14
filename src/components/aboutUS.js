import React from 'react';
import '../static/css/aboutUS.css';
import { developersData } from '../static/js/aboutUSjs';

function AboutUS() {
	return (
		<section id="aboutUS" className="about-us">
			<div className="about-header">
				<h3 className="about-us-subtitle">About Us</h3>
				<h1 className="about-us-main-title">
					Stories Written in the<br />
					Stars
				</h1>
				<p className="about-us-tagline">Together we explore, learn, and dream</p>
			</div>

			<div className="story-container">
				<div className="story-box-back">
					<div className="story-box-front">
						<p className="story-text">
							<strong>Every journey</strong> begins with a spark, a question, a curiosity, a longing to understand what lies beyond. Our story is no different. We were founded on a simple belief that the universe is not just something to look at, but something to explore, study, and share.
						</p>
						<p className="story-text">
							From the quiet glow of distant galaxies to the hidden secrets of the planets around us, <strong>we exist to bring the wonders of space closer to everyone.</strong> We combine passion, knowledge, and imagination to create experiences, insights, and discoveries that inspire people of all ages to look up and dream bigger.
						</p>
						<p className="story-text">
							Whether you are a lifelong stargazer, a student searching for answers, or someone who wonders what lies beyond the night sky, you are part of this journey with us.
						</p>
						<p className="story-closing">
							Because every star has a story.<br />
							And together, we are here to tell it.
						</p>
						<img src="/img/MiniStar1.png" alt="" className="story-star" />
					</div>
				</div>
			</div>

			<div className="developer-greeting">
				<h2 className="developer-title">
					Hi there, We are The<br />
					Developers!
				</h2>
				<p className="developer-subtitle">Nice to meet you, passenger!</p>
			</div>

		<div className="developers-grid">
			{developersData.map((dev, index) => (
				<div key={index} className="developer-card">
					<div className="developer-card-inner">
					<img 
						src={dev.image} 
						alt={dev.name} 
						className={`developer-photo-${dev.name.toLowerCase()}`}
					/>
						<div className="developer-info-box">
							<h3 className="developer-name">{dev.name}</h3>
							<p className="developer-role">{dev.role}</p>
						</div>
						<div className="developer-quote">
						<p dangerouslySetInnerHTML={{ __html: dev.quote }}></p>
						</div>
					</div>
				</div>
			))}
		</div>
	</section>
	);
}

export default AboutUS;
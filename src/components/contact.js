import React from 'react';
import '../static/css/contact.css';

function Contact() {
	return (
		<section className="contact">
			<div className="contact-header">
				<p className="contact-intro">we'd like to hear from you!</p>
				<h1 className="contact-title">How was your<br />journey?</h1>
				<p className="contact-subtitle">Please fill the form with your<br />response!</p>
				<div className="contact-email">
					<svg className="email-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
						<path d="M22 6L12 13L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
					<span className="email-text">anomalisjia@gmail.com</span>
				</div>
			</div>
			
			<div className="contact-form">
				<div className="form-row">
					<div className="form-group">
						<label className="form-label">First name</label>
						<div className="input-wrapper">
							<input 
								type="text" 
								className="form-input" 
								placeholder="Your first name..."
							/>
						</div>
					</div>
					
					<div className="form-group">
						<label className="form-label">Last name</label>
						<div className="input-wrapper">
							<input 
								type="text" 
								className="form-input" 
								placeholder="Your last name..."
							/>
						</div>
					</div>
				</div>
				
				<div className="form-group full-width">
					<label className="form-label">Email *</label>
					<div className="input-wrapper">
						<input 
							type="email" 
							className="form-input" 
							placeholder="Type your email..."
							required
						/>
					</div>
				</div>
				
				<div className="form-group full-width">
					<label className="form-label">Message</label>
					<div className="input-wrapper textarea-wrapper">
						<textarea 
							className="form-input form-textarea" 
							placeholder="Write your message..."
							rows="6"
						></textarea>
					</div>
				</div>
				
				<div className="send-button-wrapper">
					<div className="send-button-border">
						<button className="send-button">
							<span className="send-text">Send</span>
							<img src="/contact/send.png" alt="Send" className="send-icon" />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
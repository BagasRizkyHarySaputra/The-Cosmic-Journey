import React from 'react';
import '../static/css/sidebarFAQ.css';
import BackgroundSet from './backgroundSet';

function SidebarFAQ({ isOpen, onClose }) {
	const faqData = [
		{
			category: 'About the Website',
			questions: [
				{
					question: 'What is this website about?',
					answer: 'It\'s a space-themed platform that shares cosmic stories, facts, and discoveries in a clear and inspiring way.'
				},
				{
					question: 'Can I request a topic?',
					answer: 'Yes! You can request any space-related topic through our contact page.'
				}
			]
		},
		{
			category: 'Using our Content',
			questions: [
				{
					question: 'Can I use your content for school projects?',
					answer: 'Yes! You can use it for school projects'
				}
			]
		}
	];

	if (!isOpen) return null;

	return (
		<div className="faq-overlay">
			<div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh', overflow: 'hidden', zIndex: 1 }}>
				<BackgroundSet hideLightBeam />
			</div>
			<div className="faq-container" style={{ position: 'relative', zIndex: 2 }}>
				{/* Header */}
				<div className="faq-header">
					<div className="faq-title-section">
						<h2 className="faq-title">Frequently Asked Questions</h2>
						<p className="faq-subtitle">Get to know the answers</p>
					</div>
					<button className="faq-close-btn" onClick={onClose}>
						×
					</button>
				</div>

				{/* FAQ Content */}
				<div className="faq-content">
					{faqData.map((section, sectionIndex) => (
						<div className="faq-section" key={sectionIndex}>
							<h3 className="faq-category-title">{section.category}</h3>
							
							<div className="faq-questions">
								{section.questions.map((item, questionIndex) => (
									<div className="faq-item" key={questionIndex}>
										<div className="faq-question-box">
											<span className="faq-q-label">Q:</span>
											<span className="faq-question-text">{item.question}</span>
										</div>
										<div className="faq-answer">
											<div className="faq-answer-line"></div>
											<p className="faq-answer-text">{item.answer}</p>
										</div>
									</div>
								))}
							</div>

							<div className="faq-chevron">
								<span className="chevron-icon">»</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default SidebarFAQ;

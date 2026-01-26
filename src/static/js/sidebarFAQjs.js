// sidebarFAQjs.js
// JavaScript logic for Sidebar FAQ

import { useState } from 'react';

// FAQ data
export const faqData = [
	{
		category: 'About the Website',
		questions: [
			{
				id: 1,
				question: 'What is this website about?',
				answer: 'It\'s a space-themed platform that shares cosmic stories, facts, and discoveries in a clear and inspiring way.'
			},
			{
				id: 2,
				question: 'Can I request a topic?',
				answer: 'Yes! You can request any space-related topic through our contact page.'
			}
		]
	},
	{
		category: 'Using our Content',
		questions: [
			{
				id: 3,
				question: 'Can I use your content for school projects?',
				answer: 'Yes! You can use it for school projects'
			}
		]
	}
];

// Hook for handling FAQ state
export const useFAQ = () => {
	const [isFAQOpen, setIsFAQOpen] = useState(false);
	const [expandedQuestions, setExpandedQuestions] = useState([]);

	const openFAQ = () => setIsFAQOpen(true);
	const closeFAQ = () => {
		setIsFAQOpen(false);
		setExpandedQuestions([]);
	};

	const toggleQuestion = (questionId) => {
		setExpandedQuestions(prev => 
			prev.includes(questionId) 
				? prev.filter(id => id !== questionId)
				: [...prev, questionId]
		);
	};

	const isQuestionExpanded = (questionId) => expandedQuestions.includes(questionId);

	return {
		isFAQOpen,
		expandedQuestions,
		openFAQ,
		closeFAQ,
		toggleQuestion,
		isQuestionExpanded,
		faqItems: faqData
	};
};

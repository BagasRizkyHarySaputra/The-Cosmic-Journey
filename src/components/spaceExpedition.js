import React, { useState } from 'react';
import '../static/css/spaceExpedition.css';
import SidebarHome from './sidebarHome';
import { expeditionData, useExpeditionDetailAnimation } from '../static/js/spaceExpeditionjs';

function SpaceExpedition() {

    const [activeIdx, setActiveIdx] = useState(null);
    const { animatingIdx, showDetail, setShowDetail } = useExpeditionDetailAnimation(activeIdx);

    // Handler for closing detail with animation
    const handleCloseDetail = () => {
        setShowDetail(false); // trigger hide animation
        setTimeout(() => {
            setActiveIdx(null);
        }, 700); // match CSS transition duration (0.7s)
    };

    // Pagination logic
    const totalPages = expeditionData.length;
    const renderPagination = () => {
        const numbers = [];
        for (let i = 0; i < totalPages; i++) {
            numbers.push(
                <span
                    key={i}
                    className={`pagination-number${activeIdx === i ? ' active' : ''}`}
                    onClick={() => setActiveIdx(i)}
                >
                    {i + 1}
                </span>
            );
        }
        // Example: add ellipsis and last pages if more than 5
        if (totalPages > 5) {
            return [
                numbers[0],
                numbers[1],
                numbers[2],
                <span key="ellipsis" className="pagination-ellipsis">...</span>,
                numbers[totalPages - 2],
                numbers[totalPages - 1]
            ];
        }
        return numbers;
    };

    return (
        <section className="space-expedition-page">
            <SidebarHome />
            <div className="space-expedition-center-group">
                <h1 className="space-expedition-title">Space Expeditions</h1>
                <h2 className="space-expedition-subtitle">You Should Read</h2>
                <img
                    src="/space Expedition/keyboard_return.svg"
                    alt="->>"
                    className="keyboard-return-svg cursor-target"
                    onClick={() => {
                        // Make sure the Events link in headerHome has id="header-events-link"
                        const eventsLink = document.getElementById('header-events-link');
                        if (eventsLink) {
                            eventsLink.click();
                        }
                    }}
                />
            </div>
            <div className="space-expedition-list-group">
                {activeIdx === null
                    ? (
                        <>
                        {expeditionData.map((item, idx) => (
                            <div key={item.label} className="space-expedition-item-container">
                                <div
                                    className={`space-expedition-item${activeIdx === idx ? ' active' : ''}`}
                                    onClick={() => setActiveIdx(idx)}
                                    style={{ display: 'flex' }}
                                >
                                    <span className="space-expedition-item-label">{item.label}</span>
                                    <span className="space-expedition-item-arrow">
                                        <img src="/space Expedition/Group 10.svg" alt="arrow" />
                                    </span>
                                </div>
                            </div>
                        ))}
                        {/* Pagination numbering UI below list */}
                        <div className="space-expedition-pagination">
                            {renderPagination()}
                        </div>
                        </>
                    )
                    : (
                        <div className="space-expedition-item-container">
                            {animatingIdx !== null && (
                                <div className="space-expedition-detail-popup">
                                    <div className={`space-expedition-detail ${showDetail ? 'show' : 'hide'}`}> 
                                        <img className="space-expedition-detail-img" src={expeditionData[animatingIdx].image} alt={expeditionData[animatingIdx].label} />
                                        <div className="space-expedition-detail-info">
                                            {expeditionData[animatingIdx].info.split('\n').map((p, i) => <p key={i}>{p}</p>)}
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div
                                className={`space-expedition-item active`}
                                onClick={handleCloseDetail}
                                style={{ display: 'flex' }}
                            >
                                <span className="space-expedition-item-label">{expeditionData[activeIdx].label}</span>
                                <span className="space-expedition-item-arrow">
                                    <img src="/space Expedition/Group 10.svg" alt="arrow" />
                                </span>
                            </div>
                            {/* Pagination numbering UI below header */}
                            <div className="space-expedition-pagination active-pagination">
                                {renderPagination()}
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    );
}

export default SpaceExpedition;

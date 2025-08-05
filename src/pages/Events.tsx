import React from 'react';

const Events: React.FC = () => {
    return (
        <div id="content">
            <div className="event">
                <img src="/South Pool Skeptics in the Pub.png" alt="Skeptics in the Pub" />
                <h2>Skeptics in the Pub</h2>
                <p>Inspired by the global <a href="https://skepticsinthepub.org" target="_blank">'Skeptics in the Pub'</a> events, we meet sporadically and welcome everyone — from curious newcomers to seasoned skeptics to discuss current events, interesting science and general topics of interest, all over a pint. No jargon, no preaching — just thoughtful conversation in good company.</p>
                <h3>Next Meeting</h3>
                <ul>
                    <li>Where: The Millbrook Inn, South Pool</li>
                    <li>When: October 8th, 20:00</li>
                    <li>What: Introduction to Scientific Skepticism / Discussion: Fact checking the fact-checkers / Pints</li>
                </ul>
            </div>
        </div>
    );
};

export default Events;
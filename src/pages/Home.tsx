import React from 'react';

const Home: React.FC = () => {
  return (
    <div id="content">
      <p><i>“Extraordinary claims require extraordinary evidence”</i> - Carl Sagan</p>
      <p>
        We are a new local group meeting sporadically at the Millbrook Inn in South Pool (and other
        local pubs) to explore science, critical thinking, and rational inquiry over a friendly pint. Inspired by the
        global <a href="https://skepticsinthepub.org" target="_blank" rel="noopener noreferrer">'Skeptics in the Pub'</a> movement, we welcome
        everyone — from curious newcomers to seasoned skeptics. No jargon, no preaching — just thoughtful conversation in
        good company.
      </p>

      <section>
        <h2 className='gapped'>Next meeting</h2>
        <ul>
          <li><strong>Where:</strong> Millbrook Inn, South Pool</li>
          <li><strong>When:</strong> Wednesday, October 8th, 20:00</li>
          <li><strong>What:</strong> Introduction to scientific skepticism & pints.</li>
        </ul>
      </section>

      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2522.123456789!2d-3.123456789!3d50.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x123456789abcdef:0x123456789abcdef!2sSouth%20Pool,%20Devon,%20UK!5e0!3m2!1sen!2suk!4v123456789"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default Home;
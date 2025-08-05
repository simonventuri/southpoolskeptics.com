import React from 'react';

const Skepticism: React.FC = () => {
  return (
    <div id="content">
      <p>
        Scientific skepticism is a method of evaluating claims based on empirical evidence and logical reasoning. It
        involves questioning beliefs and ideas, testing them through observation and experiment, and maintaining an open
        mind — ready to revise opinions as new evidence emerges.
      </p>
      <p>Want to learn more? Here are some excellent books to get started:</p>
      <ul>
        <li>
          <a href="https://www.goodreads.com/book/show/17349.The_Demon_Haunted_World" target="_blank" rel="noopener noreferrer">
            *The Demon-Haunted World* by Carl Sagan
          </a>
        </li>
        <li>
          <a href="https://www.goodreads.com/book/show/35781.The_Skeptic_s_Dictionary" target="_blank" rel="noopener noreferrer">
            *The Skeptic's Dictionary* by Robert Todd Carroll
          </a>
        </li>
        <li>
          <a href="https://www.goodreads.com/book/show/522525.Mistakes_Were_Made_But_Not_by_Me_" target="_blank" rel="noopener noreferrer">
            *Mistakes Were Made (but Not by Me)* by Carol Tavris and Elliot Aronson
          </a>
        </li>
        <li>
          <a href="https://www.goodreads.com/book/show/38485991-the-skeptics-guide-to-the-universe" target="_blank" rel="noopener noreferrer">
            *The Skeptic's Guide to the Universe* by Steven Novella
          </a>. Podcast also available <a href="https://www.theskepticsguide.org/podcasts" target="_blank" rel="noopener noreferrer">here</a>.
        </li>
      </ul>
    </div>
  );
};

export default Skepticism;
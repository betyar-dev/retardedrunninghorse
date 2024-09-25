// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';

function youtube_parser(url){
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return (match&&match[7].length==11)? match[7] : false;
}

const youtubeVideoId = youtube_parser('https://www.youtube.com/watch?v=dyMXYE_50Ts');
const youtubeVideoUrl = `https://www.youtube.com/embed/${youtubeVideoId}`;

const App = () => {
  const [timeSincePosted, setTimeSincePosted] = useState('');

  useEffect(() => {
    const videoPostedDate = new Date('2007-12-14T00:00:00');
    const interval = setInterval(() => {
      const now = new Date();
      const timeDiff = Math.abs(now - videoPostedDate);
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
      const seconds = Math.floor((timeDiff / 1000) % 60);
      setTimeSincePosted(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      <div className="social-links">
        <a href="https://twitter.com/youraccount" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="t.me/retardhorse" target="_blank" rel="noopener noreferrer">Telegram</a>
        <a href="https://dexscreener.com/solana/clrxq7bd96wvkjjhdtdqzqkthfok9tctdsh1qa8mado9" target="_blank" rel="noopener noreferrer">DexScreener</a>
      </div>
      <div className="content">
        <div className="xp-window video-section">
          <div className="title-bar">
            <span className="title">Retarded Horse</span>
            <div className="window-controls">
              <button className="minimize"></button>
              <button className="maximize"></button>
              <button className="close"></button>
            </div>
          </div>
          <div className="video-box">
            <iframe
              width="560"
              height="315"
              src={youtubeVideoUrl}
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="time-since-posted">
          <h2>Time Since Horse is Running:</h2>
          <p>{timeSincePosted}</p>
        </div>

        {/* Token Contract Address and Tokenomics Section */}
        <div className="xp-window token-info">
          <div className="title-bar">
            <span className="title">Token Information</span>
          </div>
          <div className="content-box">
            <h3>Token Contract Address:</h3>
            <p>3omE6uvekcdM716wFS4mUchgB9n11maAVyAh5raspump</p>
            <br />

            <h3>Tokenomics:</h3>
            <ul>
              <li>Total Supply: 969,292,307.48 Tokens on the Solana blockchain</li>
              <li>Tax: 0%</li>
            </ul>
          </div>
        </div>

        {/* Memes Section */}
        <div className="xp-window meme-section">
          <div className="title-bar">
            <span className="title">Memes</span>
          </div>
          <div className="content-box meme-grid">
            <img src="/meme1.jpg" alt="Meme 1" />
            <img src="/meme2.jpg" alt="Meme 2" />
            <img src="/meme3.jpg" alt="Meme 3" />
            <img src="/meme4.jpg" alt="Meme 4" />
            <img src="/meme5.jpg" alt="Meme 5" />
            <img src="/meme6.jpg" alt="Meme 6" />
            <img src="/meme7.jpg" alt="Meme 7" />
            <img src="/meme8.jpg" alt="Meme 8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

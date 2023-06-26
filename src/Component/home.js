import React from 'react';
import GifPlayer from 'react-gif-player';
import { useNavigate } from 'react-router-dom';
import './home.css';
import gifImage from '../img/Animation.gif';

const Home = () => {
  const navigate = useNavigate();

  const login = () => {
    navigate('/login');
  };

  const handleLocal = () => {
    window.location.href = "http://badamap.com/map";
  }

  return (
    <div className="container">
      <div className="background">
        <img src={gifImage} alt="Animated GIF" />
      </div>
      <div className="button-group">
        <button className="login-button" onClick={login}>Login</button>
        <button className="start-button" onClick={handleLocal}>Start</button>
      </div>
    </div>
  );

}

export default Home;

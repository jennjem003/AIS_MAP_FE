import React from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';
import gifImage from 'D:/LJH/REstart_FE/ais_fe/src/img/Animation.gif';

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    // 회원가입 처리 로직 구현
    // ...

    // 회원가입 완료 시 메인 페이지로 이동
    navigate('/');
  };

  return (
    <div className="container">
      <div className="background">
        <img src={gifImage} alt="Animated GIF" />
      </div>
      <div className="signup-form">
        <h2>Signup</h2>
        <form>
          <input type="text" placeholder="ID" />
          <input type="password" placeholder="Password" />
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Birthdate" />
          <input type="email" placeholder="E-mail" />
          <input type="tel" placeholder="Phone Number" />
          <button type="button" onClick={handleSignup}>Signup</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;

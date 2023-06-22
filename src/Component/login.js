import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import gifImage from 'D:/LJH/REstart_FE/ais_fe/src/img/Animation.gif';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // 로그인 처리 로직 구현
    // ...

    // 로그인 성공 시 메인 페이지로 이동
    navigate('/');
  };

  const handleSignup = () => {
    // 회원가입 페이지로 이동
    navigate('/signup');
  };

  return (
    <div className="container">
      <div className="background">
        <img src={gifImage} alt="Animated GIF" />
      </div>
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <input type="text" placeholder="ID" />
          <input type="password" placeholder="Password" />
          <button type="button" onClick={handleLogin}>Login</button>
        </form>
        <div className="signup-link">
          Don't have an account? <button onClick={handleSignup}>Sign up</button>
        </div>
      </div>
    </div>
  );
}

export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import gifImage from '../img/Animation.gif';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // 입력된 로그인 정보를 서버로 전송하여 처리하는 로직
    fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        // 서버로부터 받은 응답을 처리
        if (data.success) {
          // 로그인 성공 시 메인 페이지로 이동
          navigate('/');
        } else {
          // 로그인 실패 처리
          alert('로그인에 실패했습니다.');
        }
      })
      .catch(error => {
        // 에러 처리
        console.error('로그인 중 에러 발생:', error);
        alert('로그인 중 에러가 발생했습니다.');
      });
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
          <input type="text" placeholder="ID" value={username} onChange={e => setUsername(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
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

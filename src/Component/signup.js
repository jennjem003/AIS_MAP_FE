import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';
import gifImage from '../img/Animation.gif';

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSignup = () => {
    const signupData = {
      username,
      password,
      name,
      birthdate,
      email,
      phoneNumber,
    };

    fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify(signupData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          navigate('/');
        } else {
          alert('회원가입에 실패했습니다.');
        }
      })
      .catch(error => {
        console.error('회원가입 중 에러 발생:', error);
        alert('회원가입 중 에러가 발생했습니다. 회원가입 실패');
      });
  };

  return (
    <div className="container">
      <div className="background">
        <img src={gifImage} alt="Animated GIF" />
      </div>
      <div className="signup-form">
        <h2>회원가입</h2>
        <form>
          <input
            type="text"
            placeholder="ID"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Birthdate"
            value={birthdate}
            onChange={e => setBirthdate(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
          />
          <button type="button" onClick={handleSignup}>
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

import React from 'react';

import { createRoot } from 'react-dom';
import './index.css';
import App from './App';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function MyComponent() {
  const sendData = () => {
    // POST 요청을 보낼 엔드포인트 URL
    const url = 'https://10.125.121.215.:5000/api05/predict';

    // POST 요청에 전달할 데이터
    const data = {

    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(responseData => {
        // 서버 응답 처리
        console.log(responseData);
      })
      .catch(error => {
        // 오류 처리
        console.error(error);
      });
  };

  return (
    <div>
      <button onClick={sendData}>Send POST Request</button>
    </div>
  );
}

export default MyComponent;


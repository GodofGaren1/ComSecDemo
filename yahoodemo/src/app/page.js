"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function Home() {

  const router = useRouter()

  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handleUsernameChange = (event) => {
    setUsernameValue(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value)
  }

  const handleLogin = () => {
    setUsernameValue('')
    setPasswordValue('')
    router.push('/home');
  }

  return (
    <div>
      <div style ={{display: 'flex', flexDirection: "column", alignItems: "center"}}>
        <div style = {{margin: '200px 0px 100px 0px', fontSize: '60px'}}>Yahoo Login</div>
        <div style={{marginBottom: '10px'}}>Username</div>
        <input
          type="text"
          style = {{height: '50px', width: '500px', fontSize: '40px', marginBottom: '20px'}}
          value={usernameValue}
          onChange={handleUsernameChange}
        />
        <div style={{marginBottom: '10px'}}>Password</div>
        <input
          type="text"
          style = {{height: '50px', width: '500px', fontSize: '40px', marginBottom: '20px'}}
          value={passwordValue}
          onChange={handlePasswordChange}
        />
        <button onClick = {handleLogin} style={{ marginTop: '20px', padding: '10px 20px', fontSize: '24px', backgroundColor: 'black', color: 'white' }}>Login</button>
      </div>
    </div>
  );
}

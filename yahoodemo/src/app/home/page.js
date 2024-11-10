"use client";
import { useUser } from "../context/context";
import { useState, useEffect } from 'react';


export default function Home() {
  const {usernameValue, passwordValue} = useUser();
  const [localUsernameValue, setLocalUsernameValue] = useState('');
  const [localPasswordValue, setLocalPasswordValue] = useState('');


  useEffect(() => {
    fetchRecord(usernameValue)
    
  }, []);

  const fetchRecord = (usernameValue) => {
    fetch("/api/user", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: usernameValue }),
    })
    .then((res) => {
        if (!res.ok) {
            return res.json().then((error) => {
                throw new Error(error.Error);
            });
        }
        return res.json(); // Parse JSON if the response is successful
    })
    .then((data) => {
        console.log("Fetched record:", data.username);
        setLocalUsernameValue(data.record.username)
        setLocalPasswordValue(data.record.password)
        // Use the data here, for example, set it in state if you’re using React
    })
    .catch((error) => {
        console.error("Error:", error);
    });
  };
  return (
    <div>
      <div style ={{display: 'flex', flexDirection: "column", alignItems: "center", justifyContent: 'center', height:'100vh'}}>
          <div>Successfully Login!</div>
          <h1>{localUsernameValue}</h1>
          <h1>{localPasswordValue}</h1>
      </div>
    </div>
  );
}
  
import { useState } from 'react';
import React from 'react'
import './App.css';
import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../src/config/firebase.config"
import Home from './components/Home';
import ConnectModal from './components/ConnectModal';


function App() {
  const [user, setUser] = useState(null)

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const handleLogOut = async() => {
    await signOut(auth)
  }

  return (
    <div className="App">
      <div className='user-connected'>

      {user && (
        <div className='user-infos'>
            <h1 className='user-name'> Bonjour {user.displayName}<span className="logged-in">●</span></h1>
            <button className="button-9"><i onClick={() => handleLogOut()}>Déconnecter</i></button>
          </div>
      )}
        
        {user ? (
          <Home />
        ) : (<ConnectModal />) }

      </div>
    </div>
  );
}

export default App;

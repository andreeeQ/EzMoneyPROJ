import React from 'react'
import "./App.css"
import Navbar from './components/Navbar';
import EntryPage from './pages/Entrypage';
import { useEffect } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

const auth = getAuth();


const App = () => {
  const navigate = useNavigate();
  const user = useAuthState(auth);
  useEffect(() => {

    
    if (user) navigate("/dashboard");
    if (!user) navigate("/");

  })
    return (
        <div className="App">
          <Navbar/>
          <EntryPage/>
        
          
        </div>
    );
    
    
}

 
export default App;
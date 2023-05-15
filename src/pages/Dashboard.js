import React from 'react'
import "../App.css"
import Navbar from '../components/Navbar';
import MoneyManager from '../components/MoneyManager';


const Dashboard = () => {
    return (
        <div className="App">
          <Navbar/>
          <MoneyManager />
       
        </div>
    );
}

export default Dashboard;
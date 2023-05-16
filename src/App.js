import React from 'react'
import "./App.css"
import NavbarEntry from './components/NavbarEntry';
import EntryPage from './pages/Entrypage';


const App = () => {

    return (
        <div className="App">
          <NavbarEntry/>
          <EntryPage/>
        
          
        </div>
    );
    
    
}

 
export default App;
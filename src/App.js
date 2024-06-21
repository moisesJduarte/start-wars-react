import React from 'react';
import './App.css';
import StarWars from './components/StarWars';
import NavBar from './components/nav/Navbar';
import Detail from './components/detail/detail';
// import Counter from './Counter';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <StarWars />
        <Detail />
        {/* <Counter /> */}

      </header>
    </div>
  );
}

export default App;



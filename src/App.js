import React from 'react';
import './App.css';
import StarWars from './components/StarWars';
import NavBar from './components/nav/Navbar';
import Detail from './components/detail/detail';
import { Route, Routes } from 'react-router-dom';
// import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <NavBar />
        <Routes>
          <Route path="/" element={<StarWars />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>

        {/* <Counter /> */}
      </header>
    </div>
  );
}

export default App;
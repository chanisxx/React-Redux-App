import React from 'react';
import './App.css';
import WordSearch from './components/WordSearch';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <nav>
          <h1 className='header'>DICTIONARY</h1>
        </nav>

        <WordSearch />
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';

import { Toggles } from './components/toggles/toggles';
import { useToggles } from './hooks/useToggles';

function App() {
  const { state, flipToggle } = useToggles()

  return (
    <div className="App">
      <header className="App__header">
        Good, fast or cheap? Pick two!
      </header>
      <main className="App__main">
        <Toggles state={state} onToggle={flipToggle} />
      </main>
    </div>
  );
}

export default App;

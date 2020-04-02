import React, { createContext } from 'react';
import './App.css';

import { Toggles } from './components/toggles/toggles';
import { useToggles, TogglesState, ToggleKey } from './hooks/useToggles';

export interface AppContextProps {
  state: TogglesState,
  flipToggle: (key: ToggleKey) => void
}

export const AppContext = createContext<AppContextProps|null>(null)

function App() {
  const { state, flipToggle } = useToggles()

  const context: AppContextProps = {
    state,
    flipToggle
  }

  return (
    <div className="App">
      <header className="App__header">
        How do you want it?
      </header>
      <main className="App__main">
        <AppContext.Provider value={context}>
          <Toggles />
        </AppContext.Provider>
      </main>
    </div>
  );
}

export default App;

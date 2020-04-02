import React from 'react'

import { ToggleKey, TogglesState } from '../../hooks/useToggles'

interface TogglesProps {
  state: TogglesState
  onToggle: (stateKey: ToggleKey) => void
}

export const Toggles: React.FC<TogglesProps> = ({ state, onToggle}) => {
  const keys = Object.keys(state) as ToggleKey[]

  return (
    <div className="Toggles">
      {keys.map((k, index) => (
        <div className="Toggles__toggle" key={k}>
          <input type="checkbox" checked={state[k]} onChange={() => onToggle(k)} />
          <span>{k}</span>
        </div>
      ))}
    </div>
  )
}

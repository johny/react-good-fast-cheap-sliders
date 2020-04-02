import React from 'react'

import Toggle from 'react-toggle'
import 'react-toggle/style.css'

import { ToggleKey, TogglesState } from '../../hooks/useToggles'

import './toggles.css'

interface TogglesProps {
  state: TogglesState
  onToggle: (stateKey: ToggleKey) => void
}

export const Toggles: React.FC<TogglesProps> = ({ state, onToggle}) => {
  const keys = Object.keys(state) as ToggleKey[]

  return (
    <div className="Toggles">
      {keys.map((k, index) => (
        <div className="Toggles__item" key={k}>
          <Toggle className={`Toggles__checkbox Toggles__checkbox--${k}`}
            icons={false}
            checked={state[k]}
            onChange={() => onToggle(k)} />
          <span className="Toggles__label">{k}</span>
        </div>
      ))}
    </div>
  )
}

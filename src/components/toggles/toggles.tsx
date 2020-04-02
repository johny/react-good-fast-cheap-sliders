import React, { useContext } from 'react'

import Toggle from 'react-toggle'
import 'react-toggle/style.css'

import { ToggleKey } from '../../hooks/useToggles'
import { AppContext } from '../../App'

import './toggles.css'

export const Toggles: React.FC = () => {
  const context = useContext(AppContext)
  if (!context) {
    return null
  }

  const { state, flipToggle } = context

  const keys = Object.keys(state) as ToggleKey[]

  return (
    <div className="Toggles">
      {keys.map((k, index) => (
        <div className="Toggles__item" key={k}>
          <Toggle className={`Toggles__checkbox Toggles__checkbox--${k}`}
            icons={false}
            checked={state[k]}
            onChange={() => flipToggle(k)} />
          <span className="Toggles__label">{k}</span>
        </div>
      ))}
    </div>
  )
}

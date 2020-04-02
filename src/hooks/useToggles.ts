import { useReducer } from 'react'
import produce from 'immer'

export type ToggleKey = 'good' | 'fast' | 'cheap'

export interface TogglesState {
  good: boolean,
  fast: boolean,
  cheap: boolean
}

export interface ToggleAction {
  type: string
  toggleKey: ToggleKey
}

const initialState: TogglesState = {
  good: false,
  fast: false,
  cheap: false
}

const isValidState = (state: TogglesState) => !(state.good && state.fast && state.cheap)

const adjustState = (draftState: TogglesState, key: ToggleKey) => {
  // find previous key to flip
  const keyToUpdate = key === 'good' ? 'cheap' : key === 'fast' ? 'good' : 'fast'

  // flip it
  draftState[keyToUpdate] = !draftState[keyToUpdate]

  return draftState
}

const togglesReducer = produce((draftState: TogglesState, action: ToggleAction) => {
  const { toggleKey } = action

  // flip target key
  draftState[toggleKey] = !draftState[toggleKey]

  // if state is valid, return it otherwise flip one of other keys
  return isValidState(draftState) ? draftState : adjustState(draftState, toggleKey)
})

export const useToggles = () => {
  const [state, dispatch] = useReducer(togglesReducer, initialState)

  const flipToggle = (toggleKey: ToggleKey) => {
    dispatch({type: 'toggleState', toggleKey})
  }

  return {
    state,
    flipToggle
  }
}

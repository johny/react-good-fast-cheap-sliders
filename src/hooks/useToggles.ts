import { useReducer } from 'react'

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

export const isValidState = (state: TogglesState) => !(state.good && state.fast && state.cheap)

export const adjustState = (draftState: TogglesState, key: ToggleKey) => {
  // find previous key to flip
  const keyToUpdate = key === 'good' ? 'cheap' : key === 'fast' ? 'good' : 'fast'

  // flip it
  draftState[keyToUpdate] = !draftState[keyToUpdate]

  return draftState
}

const togglesReducer = (prevState: TogglesState, action: ToggleAction) => {
  const { toggleKey } = action
  // flip target key
  const draftState = {
    ...prevState,
    [toggleKey]: !prevState[toggleKey]
  }

  // if state is valid, return it otherwise flip one of other keys
  return isValidState(draftState) ? draftState : adjustState(draftState, toggleKey)
}

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

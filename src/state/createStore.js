import { createStore as reduxCreateStore } from 'redux'

const reducer = (state, action) => {
  if (action.type === `SHOW_ICON`) {
    return Object.assign({}, state, {
      showIcon: action.payload,
    })
  }
  if (action.type === `SHOW_LEVEL`) {
    return Object.assign({}, state, {
      showLevel: action.payload,
    })
  }
  return state
}

const initialState = { showIcon: true, showLevel: false }

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore

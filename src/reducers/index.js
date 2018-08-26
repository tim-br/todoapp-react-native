import { combineReducers } from 'redux'
import Foo from './LibraryReducer'
import data from './LibraryList.json'

const INITIAL_STATE = {
  libraries: data,
  candy: 101
}

function reduceItem(item, payload) {
  if (item.id != payload.id) return item
  return Object.assign({}, item, { finished: payload.finished })
}

function LibReducer(state = INITIAL_STATE, action) {
  console.log('the action is ', action)
  car = action
  if (action.type == 'changeCandy') {
    //return { ...state, candy: 432}
    return { ...state, candy: 432 }
  }
  if (action.type === 'changedFinishedValue') {
    return {
      ...state,
      libraries: state.libraries.map(item => reduceItem(item, action.payload))
    }
  }
  if (action.type === 'addNewItem') {
    return {
      ...state,
      libraries: [].concat(state.libraries, {
        id: 4,
        title: action.payload,
        finished: false
      })
    }
  } else {
    return state
  }
}

export default combineReducers({
  libraries: LibReducer,
  candy: () => 42
})

// console.log(store.getState())
// {libraries: []}

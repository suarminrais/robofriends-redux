import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS
} from './constants'

const initialSearchState = {
  searchField: ''
}

export const searchRobot = (state = initialSearchState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return Object.assign({}, state, {
        searchField: action.payload
      })
    default:
      return state
  }
}

const initialRobotsState = {
  robots: [],
  isPending: true
}

export const requestRobots = (state = initialRobotsState, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return Object.assign({}, state, {
        isPending: true
      })
    case REQUEST_ROBOTS_SUCCESS:
      return Object.assign({}, state, {
        robots: action.payload,
        isPending: false
      })
    case REQUEST_ROBOTS_FAILED:
      return Object.assign({}, state, {
        error: action.payload
      })
    default:
      return state
  }
}
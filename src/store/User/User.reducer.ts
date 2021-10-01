import {Action} from './User.actions'

export interface UsersState {
  users: User[],
  isLoading?: boolean
}

const initialState = {
  users: [],
  isLoading: false
}


const userReducer = (state: UsersState = initialState, action: Action):UsersState=> {
  // console.log(action.payload)
  switch (action.type) {
  case "SET_USERS":
    return {...state, ...action.payload} as UsersState

  default:
    return state
  }
}

export default userReducer
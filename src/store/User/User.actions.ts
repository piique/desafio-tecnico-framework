// import { createAction } from "@reduxjs/toolkit";
import { UsersState } from "./User.reducer";
// import { AnyAction } from "redux";


// export const myAction = createAction<{ payload: UsersState }>("SET_USERS");

export type Action = {
    type: "SET_USERS"
    payload?: UsersState
}


// export const setUsers = createAction('SET_USERS', (users: UsersState) => {
//   return {
//     payload: users,
//   }
// })

export const setUsers = (users:User[]):Action => {
  // console.log(users)
  return {
    type: "SET_USERS",
    payload: {users: users}
  }
}


// const myAction = createAction<{ value: string }>("my/action");
import {createStore, combineReducers} from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'

import userReducer from './User/User.reducer'

const rootReducer = combineReducers({
  user: userReducer
})

const store = createStore(rootReducer, devToolsEnhancer({}))

export type RootState = ReturnType<typeof rootReducer>

export default store

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
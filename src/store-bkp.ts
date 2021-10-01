export {}
// import allReducers from "./store/reducers";
// import { createStore } from 'redux';

// const store = createStore(
//   allReducers,
//   // eslint-disable-next-line no-underscore-dangle
//   (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
// );

// export default store;

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch


// // example with configureStore: 
// // import { configureStore } from '@reduxjs/toolkit'
// // // ...

// // export const store = configureStore({
// //   reducer: {
// //     posts: postsReducer,
// //     comments: commentsReducer,
// //     users: usersReducer
// //   }
// // })

// // // Infer the `RootState` and `AppDispatch` types from the store itself
// // export type RootState = ReturnType<typeof store.getState>
// // // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// // export type AppDispatch = typeof store.dispatch
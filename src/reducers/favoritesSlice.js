import { createSlice } from '@reduxjs/toolkit'

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: []
  },
  reducers: {
    add: (state, action) => {
      state.favorites.push(action.payload)
    },
    remove: (state, action) => {
      state.favorites.splice(action.payload, 1)
    }
  }
})

export const { add, remove } = favoritesSlice.actions

export default favoritesSlice.reducer












// Expenses Reducer

// const favoritesReducerDefaultState = [];

// export default (state = expensesReducerDefaultState, action) => {
//   switch (action.type) {
//     case 'ADD_TRACK_TO_FAVORITE':
//       return [
//         ...state,
//         action.track
//       ];
//     case 'REMOVE_TRACK_FROM_FAVORITE':
//       return state.filter(({ id }) => id !== action.id);
//     default:
//       return state;
//   }
// };

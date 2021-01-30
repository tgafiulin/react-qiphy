import { createSlice } from '@reduxjs/toolkit';

const initialState = { 
    giphs: []
}

const tagSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    addGiphs(state, action) {
      state.giphs.push({
          tag: action.payload.tags,
          giphs: action.payload.giphs
      })
      console.log(action.payload.giphs)
    }
  },
})

export const { addGiphs } = tagSlice.actions
export default tagSlice.reducer


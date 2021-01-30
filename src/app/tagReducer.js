import { createSlice } from '@reduxjs/toolkit';

const initialState = { tags: '' }

const tagSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    editTags(state, action) {
      state.login = action.payload
      console.log(state.login)
    },
  },
})

export const { editTags } = tagSlice.actions
export default tagSlice.reducer


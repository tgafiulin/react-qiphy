import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGiphs = createAsyncThunk(
    'tags/fetchGiphsByTag',
    async (tag) => {
      const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=gTJAO48YcpmrADUyo4opy4ES4g7iDBxx&tag=${tag}`)
      return {
          tag: tag,
          giphs: await response.json()
      }
    }
)

const tagSlice = createSlice({
  name: 'tags',
  initialState: {giphs: [], loading: false},
  reducers: {
      
  },
  extraReducers: {
    [fetchGiphs.fulfilled]: (state, action) => {
        state.giphs.push({
            tag: action.payload.tag,
            url: action.payload.giphs.data.image_url
        })
    }
  }
})

export default tagSlice.reducer


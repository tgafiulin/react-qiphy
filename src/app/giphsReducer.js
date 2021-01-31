import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGiphs = createAsyncThunk(
    'giphs/fetchGiphsByTag',
    async (tag) => {
      const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=gTJAO48YcpmrADUyo4opy4ES4g7iDBxx&tag=${tag}`)
      return {
          tag: tag,
          giphs: await response.json()
      }
    }
)

const giphsSlice = createSlice({
  name: 'giphs',
  initialState: {giphs: [], groupGiphs: {}, loading: false},
  reducers: {
      clearGiphs: (state) => {
        state.giphs = []
      }
  },
  extraReducers: {
    [fetchGiphs.fulfilled]: (state, action) => {
        const tag = action.payload.tag;
        const giphsUrl = action.payload.giphs.data.image_url;
        state.giphs.push({
            tag: tag,
            url: giphsUrl
        })
        if (state.groupGiphs[tag]) {
          state.groupGiphs[tag].push(giphsUrl);
        } else {
          state.groupGiphs[tag] = [];
          state.groupGiphs[tag].push(giphsUrl);
        }
    }
  }
})

export const { clearGiphs } = giphsSlice.actions
export default giphsSlice.reducer


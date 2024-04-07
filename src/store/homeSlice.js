import { createSlice } from '@reduxjs/toolkit'


export const homeSlice = createSlice({
  name: 'home',
  initialState :{
    url : {},
    genres : {},
  },
  //Defines the reducers for handling state updates.
  reducers: {
    getApiConfigaration : (state, action) =>{
        state.url = action.payload;
    },
    getGenres : (state, action) =>{
        state.genres = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { getApiConfigaration, getGenres} = homeSlice.actions;

export default homeSlice.reducer;
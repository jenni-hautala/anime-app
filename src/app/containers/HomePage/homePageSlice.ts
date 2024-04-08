import { createSlice } from '@reduxjs/toolkit';

// All the magic happens in this file.

const initialState = {
    animeList: [],
};

const HomePageSlice = createSlice({
    name: 'homePage',
    initialState,
    reducers: {
       
    }
});

export const {  }  = HomePageSlice.actions;
export default HomePageSlice.reducer;
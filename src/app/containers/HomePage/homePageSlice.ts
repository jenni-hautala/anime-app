import { createSlice } from '@reduxjs/toolkit';

// All the magic happens in this file.

const initialState = {
    counter: 0,
};

const HomePageSlice = createSlice({
    name: 'homePage',
    initialState,
    reducers: {
        incrementCounter: (state, action) => {
            state.counter += 1;
        }
    }
});

export const { incrementCounter }  = HomePageSlice.actions;
export default HomePageSlice.reducer;
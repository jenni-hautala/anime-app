import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import homePageReducer from "./containers/HomePage/homePageSlice";

// The store setup is wrapped in `store` to allow reuse
// when setting up tests that need the same store config
export const store = configureStore({
    reducer:  {
      homePage: homePageReducer
    }
});

// Infer the `AppDispatch` type from the store itself
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

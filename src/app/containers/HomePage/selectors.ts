import { createSelector } from "reselect";
import type { IRootState } from "../../types";

const selectHomePage = (state: IRootState) => state.homePage;

export const makeSelectAnimePage = createSelector(
    selectHomePage, 
    (homePage) => homePage.animePage
);
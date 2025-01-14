import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todoSlice";
import themeReducer from "./reducers/themeSlice";

export const store = configureStore({
    reducer: {
        todo: todoReducer,
        theme: themeReducer
    }
});
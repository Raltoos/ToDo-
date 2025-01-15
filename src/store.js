import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todoSlice";
import themeReducer from "./reducers/themeSlice";
import modalReducer from "./reducers/modalSlice";
import authReducer from "./reducers/authSlice";

export const store = configureStore({
    reducer: {
        todo: todoReducer,
        theme: themeReducer,
        modal: modalReducer,
        auth: authReducer,
    }
});
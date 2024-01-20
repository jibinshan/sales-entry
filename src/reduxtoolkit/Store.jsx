import { configureStore } from "@reduxjs/toolkit";
import Stateredux from "./Stateredux";

const store = configureStore({
    reducer : {
        State:Stateredux,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
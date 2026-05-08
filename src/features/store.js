import { configureStore } from "@reduxjs/toolkit";
import todos from "./todds/todoSlice.js"
const store = configureStore({
    reducer: {
        todos: todos
    }
})

export default store
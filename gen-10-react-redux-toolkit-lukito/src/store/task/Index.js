import { configureStore } from "@reduxjs/toolkit"

import userReducer from "./Slicer.js"

const store = configureStore({
    reducer: {
        userData: userReducer
    }
})

export default store
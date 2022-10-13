import { configureStore } from "@reduxjs/toolkit"

import orangReducer from "./orangSlice.js"

const store = configureStore({
	reducer: {
		orang: orangReducer
	}
})

export default store
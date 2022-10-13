import { combineReducers, createStore } from "redux"

import {loginReducer, roleReducer, userReducer} from "./reducer.js"

const rootReducer = combineReducers({
	user: userReducer,
	role: roleReducer,
	isLogin: loginReducer
})

const store = createStore(rootReducer)

export default store
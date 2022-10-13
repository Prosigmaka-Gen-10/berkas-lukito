export const initialState = {
	user:
		{
			name: 'Mas To',
		username: "Ito",
		password: "1234"
		},
	role: { rolename:"Admin"},
	isLogin: {status: false}
}

export function userReducer (state = initialState.user, action) {
	function userParam(){
		return state
	}
	switch (action.type) {
		case 'changeName':
			return { ...userParam(), name: action.value }
		case 'changeUsername':
			return { ...userParam(), username: action.value }
		case 'changePassword':
			return { ...userParam(), password: action.value }
		default:
			return userParam()
	}
}

export function roleReducer (state = initialState.role, action) {
	function roleParam(){
		return state
	}
	switch (action.type) {
		case 'changeRole':
			return { ...roleParam(), rolename: action.value }
		default:
			return state
	}
}

export function loginReducer (state = initialState.isLogin, action) {
	function loginParam(){
		return state
	}
	switch (action.type) {
		case 'changeStatusLogin':
			return { ...loginParam(), status: action.value }
		default:
			return state
	}
}

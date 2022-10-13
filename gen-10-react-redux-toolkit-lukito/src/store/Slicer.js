import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: 'userData',
    initialState: {
        user:
            {
                name: 'Mas To',
                username: "Ito",
                password: "1234"
            },
        role: { nameRole:"Admin"},
        isLogin: {status: false}
    },
    reducers: {
        changeName (state, action) {
            state.user.name = action.payload
        },
        changeUsername (state, action) {
            state.user.username = action.payload
        },
        changePassword (state, action) {
            state.user.password = action.payload
        },
        changeRole (state, action) {
            state.role.nameRole = action.payload
        },
        changeStatusLogin (state, action) {
            state.isLogin.status = action.payload
        },
        changeAllExceptLogin (state, action) {
            state.user.name = action.payload.newName,
                state.user.username = action.payload.newUsername,
                state.user.password = action.payload.newPassword,
                state.role.nameRole = action.payload.newNameRole
        }
    }
})

export const { changeName,changeUsername,changePassword,changeRole,changeStatusLogin, changeAllExceptLogin } = userSlice.actions

export default userSlice.reducer
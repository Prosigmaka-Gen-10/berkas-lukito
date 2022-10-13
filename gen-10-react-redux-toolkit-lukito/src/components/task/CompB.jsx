import { useSelector, useDispatch } from "react-redux"
import {
    changeAllExceptLogin,
    changeName,
    changePassword,
    changeRole,
    changeUsername
} from "../../store/task/Slicer.js";

export default function CompB () {
    const dispatch = useDispatch()

    const { name, username, password } = useSelector(state => state.userData.user)
    const { nameRole } = useSelector(state => state.userData.role)
    const { status } = useSelector(state => state.userData.isLogin)
    let count = 0

    function handleChangeName () {
        if(status === true){
            count = count + 1
            if(count % 2 !== 0){
                dispatch(changeName('To Ito'))
            }else{
                dispatch(changeName('Mas Ito'))
            }
        }else{
            alert("Anda belum login")
        }
    }

    function handleChangeUsername () {
        if(status === true){
            count = count + 1
            if(count % 2 !== 0){
                dispatch(changeUsername('Lukito'))
            }else{
                dispatch(changeUsername('Ito'))
            }
        }else{
            alert("Anda belum login")
        }
    }

    function handleChangePassword () {
        if(status === true){
            count = count + 1
            if(count % 2 !== 0){
                dispatch(changePassword('12345678'))
            }else{
                dispatch(changePassword('1234'))
            }
        }else{
            alert("Anda belum login")
        }
    }

    function handleChangeRole () {
        if(status === true){
            count = count + 1
            if(count % 2 !== 0){
                dispatch(changeRole('User'))
            }else{
                dispatch(changeRole('Admin'))
            }
        }else{
            alert("Anda belum login")
        }
    }

    function handleAllExceptLogin () {
        if(status === true){
            count = count + 1
            if(count % 2 !== 0){
                dispatch(changeAllExceptLogin({
                    newName: "Lukito Andriansyah",
                    newUsername: "eLA99",
                    newPassword:"211215",
                    newNameRole: "Rest"
                }))
            }else{
                dispatch(changeAllExceptLogin({
                    newName: "Mas To",
                    newUsername: "Ito",
                    newPassword:"1234",
                    newNameRole: "Admin"
                }))
            }
        }else{
            alert("Anda belum login")
        }
    }

    return <>
        <h3>After Change Data</h3>
        name: {name}
        &nbsp;&nbsp;&nbsp;
        <button onClick={()=>handleChangeName()}>
            Change Name
        </button>

        <br />

        role: {nameRole}
        &nbsp;&nbsp;&nbsp;
        <button onClick={()=>handleChangeRole()}>
            Change Role
        </button>

        <br />

        password: {password}
        &nbsp;&nbsp;&nbsp;
        <button onClick={()=>handleChangePassword()}>
            Change Password
        </button>

        <br />


        username: {username}

        &nbsp;&nbsp;&nbsp;
        <button onClick={()=>handleChangeUsername()}>
            Change Username
        </button>

        <br />

        <button onClick={()=>handleAllExceptLogin()}>
            Change All Except Login
        </button>
    </>
}
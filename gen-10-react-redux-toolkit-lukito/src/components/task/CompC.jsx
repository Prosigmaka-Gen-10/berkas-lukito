import {useDispatch, useSelector} from 'react-redux'
import {changeName, changePassword, changeRole, changeStatusLogin, changeUsername} from "../../store/task/Slicer.js";

export default function CompC () {
    const dispatch = useDispatch()

    const { name, username, password } = useSelector(state => state.userData.user)
    const { nameRole } = useSelector(state => state.userData.role)
    const { status } = useSelector(state => state.userData.isLogin)

    function handlingLogOut(event){
        event.preventDefault()
        if(status === true){
            let text = "Are you sure want to  log out?\n" +
                "your initial state would be change base on your update\n" +
                "Press OK if you want logout with save your update to your state\n" +
                "Press Cancel if you won't";
            if (confirm(text) === true) {
                dispatch(changeStatusLogin(false))
            } else {
                dispatch(changeName(localStorage.getItem("name")))
                dispatch(changeUsername(localStorage.getItem("uname")))
                dispatch(changePassword(localStorage.getItem("pass")))
                dispatch(changeRole(localStorage.getItem("role")))
                dispatch(changeStatusLogin(false))
                localStorage.clear()
            }
        }else{
            alert("Anda belum login")
        }
    }

    return <>
        <button onClick={event => handlingLogOut(event)}>Log Out</button>
    </>
}
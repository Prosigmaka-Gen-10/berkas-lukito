import store from "./store"
import {useSelector} from 'react-redux'
import {initialState} from "./reducer.js";

export default function ComponentD() {
    const yourRoleAcc = useSelector(state => state.role.rolename)
    const yourUserNameAcc = useSelector(state => state.user.username)
    const yourNameAcc = useSelector(state => state.user.name)
    const yourPassACC = useSelector(state => state.user.password)
    const yourLoginAcc = useSelector(state => state.isLogin.status)

	function handlingLogOut(event){
		event.preventDefault()
        if(yourLoginAcc === true){
            let text = "Are you sure want to  log out?\n" +
                "your initial state would be change base on your update\n" +
                "Press OK if you want logout with save your update to your state\n" +
                "Press Cancel if you won't";
            if (confirm(text) == true) {
                initialState.user.name=yourNameAcc
                initialState.user.username = yourUserNameAcc
                initialState.user.password = yourPassACC
                initialState.role.rolename = yourRoleAcc
                store.dispatch({
                    type: 'changeStatusLogin',
                    value: false
                })
                initialState.isLogin.status=yourLoginAcc
            } else {
                store.dispatch({
                    type: 'changeStatusLogin',
                    value: false
                })
                initialState.isLogin.status=yourLoginAcc
            }
        }else{
            alert("Anda belum login")
        }
	}

    return <>
        <button onClick={event => handlingLogOut(event)}>Log Out</button>
    </>
}
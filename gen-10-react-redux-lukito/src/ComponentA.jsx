import store from "./store"
import { useSelector } from "react-redux"
import {initialState} from "./reducer.js";

export default function ComponentA () {
	const yourUserNameAcc = useSelector(state => state.user.username)
	const yourLoginAcc = useSelector(state => state.isLogin.status)
	let count = 0

	function handleChangeName (event, count) {
		event.preventDefault()
		if(yourLoginAcc === true){
			if(count % 2 !== 0){
				store.dispatch({
					type: 'changeName',
					value: 'Ito'
				})
			}else{
				store.dispatch({
					type: 'changeName',
					value: "Mas to"
				})
			}
		}else{
			alert("Anda belum login")
		}

	}

	function handlePassChange (event) {
		event.preventDefault()
		if(yourLoginAcc === true){
			count = count + 1
			if(count % 2 !== 0){
				store.dispatch({
					type: 'changePassword',
					value: "123345678"
				})
				handleChangeName(event, count)
			}else{
				store.dispatch({
					type: 'changePassword',
					value: "1234"
				})
				handleChangeName(event, count)
			}

		}else {
			handleChangeName(event, count)
		}

	}

	function handlingLoginStatus(){
		const a = "Belum login"
		const b = "Sudah login"
		if (yourLoginAcc === false){return a}
		if (yourLoginAcc === true) {return b}
	}

	return <>
		My Component A <br /><br/>
		My Username : {yourUserNameAcc} <br />
		Login Status : {handlingLoginStatus()}
		<br />
		<br />
		<button onClick={(event) => {handlePassChange(event, count)}}>change pass and name</button>
	</>
}
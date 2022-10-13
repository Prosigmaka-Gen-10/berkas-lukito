import store from "../reducer/store.js"
import { useSelector } from "react-redux"



export default function ComponentB () {
	const yourNameAcc = useSelector(state => state.user.name)
	const yourPassACC = useSelector(state => state.user.password)
	const yourLoginAcc = useSelector(state => state.isLogin.status)
	let count = 0

	function handleChangeRole (event) {
		event.preventDefault()
		if(yourLoginAcc === true){
			count = count + 1
			if(count % 2 !== 0){
				store.dispatch({
					type: 'changeRole',
					value: "User"
				})
			}else{
				store.dispatch({
					type: 'changeRole',
					value: "Admin"
				})
			}
		}else{
			alert("Anda belum login")
		}
	}

	return <>
		My Component B <br /><br/>
		My Name: {yourNameAcc}<br />
		My Pass: {yourPassACC}<br />
		<br />
		<button onClick={event => handleChangeRole(event)}>change my role</button>
	</>
}
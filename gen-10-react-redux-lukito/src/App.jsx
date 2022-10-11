import store from "./store"

import ComponentB from "./ComponentB.jsx"
import ComponentC from "./ComponentC.jsx"
import {useState} from "react";
import {initialState} from "./reducer";
import ComponentA from "./ComponentA.jsx";
import ComponentD from "./ComponentD.jsx";
import {useSelector} from "react-redux";

export default function App () {
    const yourLoginAcc = useSelector(state => state.isLogin.status)
    const [formInput, setFormInput] = useState({
        username: '',
        password: '',
    })

    function handleInput(event, inputName) {
        const copyFormInput = {...formInput}
        copyFormInput[inputName] = event.target.value
        setFormInput(copyFormInput)
    }

    function viewStore () {
        console.log(store.getState())
    }

    async function handleSubmit(event) {
        event.preventDefault()
        if(yourLoginAcc === false){
            if(formInput.username !== initialState.user.username) {
                alert("Login failed!!! Wrong username")
            }else{
                if(formInput.password !== initialState.user.password) {
                    alert("login failed!!! Wrong password")
                }else{
                    alert("login succeeded")
                    handleChangeIsLogin()
                }
            }
        }else {
            alert("You has been being login now")
        }
    }

    function handleChangeIsLogin(){
        store.dispatch({
            type: 'changeStatusLogin',
            value: true
        })
    }

    return <>
        <h1>Trial Login</h1>
        <button onClick={viewStore}>View Store Contain</button>
        <br /><br/>
        <form onSubmit={(event)=>handleSubmit(event)}>
            <label>username: <br/></label>
            <input
                type={"text"}
                value={formInput.username}
                required
                onChange={(event)=>handleInput(event, "username")}
            />
            <br/>
            <label>password: <br/></label>
            <input
                type={"password"}
                value={formInput.password}
                onChange={(event)=>handleInput(event, "password")}
                required
            />
            <br/>
            <label><br/></label>
            <button>Log In</button>

        </form>

        <br /><hr /><br />

        <ComponentA />

        <br /><hr /><br />

        <ComponentB />

        <br /><hr /><br />

        <ComponentC />

        <br /><hr /><br />

        <ComponentD />
    </>
}
import CompA from "./components/CompA.jsx"
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {changeStatusLogin} from "./store/Slicer.js";
import CompB from "./components/CompB.jsx"
import CompC from "./components/CompC.jsx";

function App() {
    const dispatch = useDispatch()
    const { status } = useSelector(state => state.userData.isLogin)
    const { name, username, password } = useSelector(state => state.userData.user)
    const { nameRole } = useSelector(state => state.userData.role)
    const [formInput, setFormInput] = useState({username: '', password: ''})

    function handleInput(event, inputName) {
        const copyFormInput = {...formInput}
        copyFormInput[inputName] = event.target.value
        setFormInput(copyFormInput)
    }

    async function handleSubmit(event) {
        event.preventDefault()
        if(status === false){
            if(formInput.username !== username) {
                alert("Login failed!!! Wrong username")
            }else{
                if (formInput.password === password) {
                    alert("login succeeded")
                    localStorage.setItem("name", name)
                    localStorage.setItem("uname", username)
                    localStorage.setItem("pass", password)
                    localStorage.setItem("role", nameRole)
                    handleChangeIsLogin()
                } else {
                    alert("login failed!!! Wrong password")
                }
            }
        }else {
            alert("You has been being login now")
        }
    }

    function handleChangeIsLogin(){
        dispatch(changeStatusLogin(true))
    }
    return (
        <div>
            Trial Login

            <br/><hr/>

            <CompA />

            <br/><hr/>

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

            <br/><hr/>

            <CompB />

            <br/><hr/>

            <CompC />
        </div>
    )
}

export default App

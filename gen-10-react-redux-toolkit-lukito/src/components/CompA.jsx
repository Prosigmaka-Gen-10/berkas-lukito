import { useSelector } from "react-redux"

export default function CompA () {
    const { name, username, password } = useSelector(state => state.userData.user)
    const { nameRole } = useSelector(state => state.userData.role)
    const { status } = useSelector(state => state.userData.isLogin)

    return <>
        <h3>Initial Data</h3>
        name: {name} <br />
        role: {nameRole} <br />
        password: {password} <br />
        username: {username} <br />
        status: {status===true?"has login":"not login"} <br />
    </>
}

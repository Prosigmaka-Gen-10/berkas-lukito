import store from "./store"
import { useSelector } from 'react-redux'

export default function ComponentC () {
	const yourRoleAcc = useSelector(state => state.role.rolename)

	return <>
		My Component C<br/><br/>
		My Role: {yourRoleAcc}
	</>
}
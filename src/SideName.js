import { useContext } from "react"
import MyContext from "./contextManager"

export default function SideName() {
    const {userDetails} = useContext(MyContext);
    return (
        <div className='sideName'>
            <div>First Name: {userDetails.firstName}</div>
            <div>Last Name: {userDetails.lastName}</div>
        </div>
    )
}
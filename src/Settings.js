import {useState, useContext} from 'react'
import "./App.css"
import SideName from './SideName';
import MyContext from './contextManager'; 


export default function Settings() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const { setUserDetails } = useContext(MyContext);

    const handleFirstNameInput = (e) => {
        setFirstName(e.target.value);
    }
    const handleLastNameInput = (e) => {
        setLastName(e.target.value);
    }
    const handleSubmitClick = () => {
        setUserDetails({firstName, lastName});
    }
    return (
        <div>
            <SideName />
            This is Settings Page.
            
            <div>
                <label>First Name: </label>
                <input onChange={handleFirstNameInput} value={firstName} />
            </div>
            <div>
                <label>Last Name: </label>
                <input onChange={handleLastNameInput} value={lastName} />
            </div>
            <button onClick={handleSubmitClick}>Submit</button>
        </div>
    )
}
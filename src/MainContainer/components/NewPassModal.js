import React from 'react'
//import './NewPassModal.css'
import {useInput} from '../../Functions/useInput'

const LoginModal = (props) => {

    const { value, bind, reset } = useInput('');


    const clicked = (e) => {
        e.preventDefault()
        if (value != "") {
            const service = value
            props.addToList(service)
            props.closeModal()
        }
    }

    return(
        <div className="modalBackground">
            <div className="loginModalContainer">
                <form id="loginForm" onSubmit={clicked}>
                    <table id="loginTable">
                        <tr>
                            <td style={{width: "100%", borderBottom: "1px solid #888", fontSize: "120%"}}>
                                <div>Add a new item</div>
                            </td> 
                        </tr>
                        <tr>
                            <td>
                                <input className="loginInput" placeholder="Service name" type="text" {...bind} autoFocus={true} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button id="loginButton" onClick="submit">Create</button>
                                <button id="loginButton" onClick={props.closeModal}>Cancel</button>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    )
}

export default LoginModal
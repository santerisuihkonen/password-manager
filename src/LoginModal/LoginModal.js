import React from 'react'
import './LoginModal.css'
import {useInput} from '../Functions/useInput'

const LoginModal = (props) => {

    const { value, bind, reset } = useInput('');


    const clicked = (e) => {
        e.preventDefault()
        const pass = value
        props.logIn(pass)
    }

    return(
        <div className="modalBackground">
            <div className="loginModalContainer">
                <form id="loginForm" onSubmit={clicked}>
                    <table id="loginTable">
                        <tr>
                            <td style={{width: "100%", borderBottom: "1px solid #888", fontSize: "120%"}}>
                                <div>Logga in</div>
                            </td> 
                        </tr>
                        <tr>
                            <td>
                                <input className="loginInput" placeholder="Password..." type="password" {...bind} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button id="loginButton" onClick="submit">Log in</button>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    )
}

export default LoginModal
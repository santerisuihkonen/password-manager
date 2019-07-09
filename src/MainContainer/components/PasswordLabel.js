import React, {useState} from 'react'
import './PasswordLabel.css'

const PasswordLabel = (props) => {

    const [copySuccess, setCopySuccess] = useState("");
    
    const delay = ms => new Promise(res => setTimeout(res, ms));

    const copyToClipboard = async () => {
        const hash = props.getHash(props.index)
        const encoded = window.btoa(hash)
        let password = ""
        for (let i = 0; i < props.passLen; i++) {
            password += encoded[i]
        }
        navigator.clipboard.writeText(password)
        setCopySuccess("Copied!")
        await delay(20000)
        navigator.clipboard.writeText("menijo")
    }

    return(
        <div className="passLabel">
            {props.item}
                <div>
                    <button onClick={copyToClipboard}>Copy</button> 
                    {copySuccess}
                </div>
        </div>
    )
}

export default PasswordLabel
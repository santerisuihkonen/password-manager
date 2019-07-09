import React, {useState} from 'react'
import PasswordLabel from './components/PasswordLabel'

const MainContainer = (props) => {

    return(
        <div>
            <div>
                {props.list.map((item, index) => <PasswordLabel item={item} index={index} getHash={props.getHash} passLen={props.passLen}/>)}
            </div>
            <button>Uusi</button>
            <button onClick={props.logOut}>Ulos</button>
        </div>
    )
}

export default MainContainer
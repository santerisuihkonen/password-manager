import React, {useState} from 'react'
import PasswordLabel from './components/PasswordLabel'
import NewPassModal from './components/NewPassModal'

const MainContainer = (props) => {

    const [modalOpen, setModalOpen] = useState(false)

    const openModal = () => {
        if (!modalOpen) {
            setModalOpen(true)
        }
    }

    const closeModal = (str) => {
        if (modalOpen) {
            setModalOpen(false)
        }
    }

    return(
        <div>
            {
                modalOpen && <NewPassModal closeModal={closeModal} addToList={props.addToList}/>
            }
            <div>
                {props.list.map((item, index) => <PasswordLabel item={item} index={index} getHash={props.getHash} passLen={props.passLen}/>)}
            </div>
            <button onClick={openModal}>Uusi</button>
            <button onClick={props.logOut}>Ulos</button>

        </div>
    )
}

export default MainContainer
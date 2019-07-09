import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import MainContainer from './MainContainer/MainContainer'
import sha1 from 'sha1'
import LoginModal from './LoginModal/LoginModal';

//Nämä esittävät jonkin palvelun nimeä, esim "facebook", "google". Ihanteellisesti tämä lista haettaisiin kryptattuna kannasta
const list = ["aaaaa", "bbbbb", "ccccc"]
//Tämä esittää käyttäjän antamaa salasanaa, jota kysytään alkuruudussa
let superDuperSecret = "kissa123"
//Salasanan pituus, jonka ohjelma oksentaa
const passLen = 20

function App() {
  const getHash = (index) => {
    const strToHash = list[index]+superDuperSecret
    const hash = sha1(strToHash)
    return hash
  }
  
  const addToList = (str) => {
    list.push(str)
  }

  const [loggedIn, setLoggedIn] = useState(false)

  const logIn = (str) => {
    if (str != "") {
      superDuperSecret = str
      setLoggedIn(true)
    }
  }

  const logOut = () => {
    setLoggedIn(false)
    superDuperSecret = ""
  }

  return (
    <div className="App">
      {
        (loggedIn) ?
        <MainContainer list={list} getHash={getHash} passLen={passLen} addToList={addToList} logOut={logOut} />
        : <LoginModal logIn={logIn} />
      }
    </div>
  );
}

export default App;

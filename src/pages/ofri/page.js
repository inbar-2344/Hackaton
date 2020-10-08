import React, { useState } from 'react';
import styles from './Page.module.css';
import {Link } from 'react-router-dom';
//import YuvalPage from '../yuval/page'



export default function Privacy() {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const changeName = function (event) {
        setUserName(event.target.value)
    }
    const changePassword = function (event) {
        setPassword(event.target.value)
    }
    // const nextPage = function(event) {  <Route exact component={} path="/page1" />}

    return (
        <div className={styles.container}>
            <div>
            <h1>I am Aware </h1>
            <h3> log in to share</h3>
            </div>
            <div id= "input">  <form>
                <label>
                Enter username:          
                <input placeholder="" type="username" onChange={changeName} name="name" value={username} />
                </label>
            </form></div>
            <div id = "input"><form>
                <label>
                Enter password:       
                <input type="password" onChange={changePassword} name="name" value={password} />
                </label>
            </form> </div>
            <div>
                <Link to='/page1'>submit </Link>
            </div>
            <img 
      src="https://purepng.com/public/uploads/large/purepng.com-fresh-artichokevegetables-artichoke-9415247242087yoj7.png"
      alt="new"
      />
        </div>
    )
}
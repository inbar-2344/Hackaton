import React, { useState } from 'react';
import styles from './Page.module.css';

export default function Privacy() {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const changeText = function (event) {
        setUserName(event.target.value)
    }

    return (
        <div className={styles.container}>
            <form>
                <label>
                    Name:
                <input placeholder="enter username..." type="text" onChange={changeText} name="name" value={username} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <h1>This is yuval page</h1>
        </div>
    )
}
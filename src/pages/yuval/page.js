import React, { Component, useState } from 'react';
import styles from './Page.module.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { useAlert } from 'react-alert'

export default function Privacy() {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const changeTitle = function (event) {
        setTitle(event.target.value)
    }

    const changeBody = function (event) {
        setBody(event.target.value)
    }


    //const alert = useAlert()

    const handleSubmit = function () {
        alert('Thank you for sharing!\n your request is in progress \n and will be handled soon.')
    }

    

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} > 
            <h1>This is yuval page</h1>
                <label>
                    Subject:
                    </label>
                <br />
                <textarea placeholder="tl;nr" type="text" onChange={changeTitle} name="name" value={title}>
                </textarea>
                <br />
                <label>
                    Body:
                    </label>
                    <br />
                <textarea rows={20} cols={70} placeholder="please tell us in details..."  type="text" onChange={changeBody} name="name" value={body} >
                    </textarea>
                    <br />
                
                <input type="submit" value="Publish" />
                <br />
                <h1>Posted earlier</h1>
            </form>
        </div>
    )
    }

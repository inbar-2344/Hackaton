import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

export default () => {
  return (
    <div className={styles.topnav}>
      <div style={{width: '10%'}}></div>
      <NavLink className={styles.levomLogo} to="/">Main</NavLink>
      <div style={{width: '20%'}}></div>
      <NavLink activeClassName={styles.activeNav} to="/page1">Page1</NavLink>
      <div style={{width: '20%'}}></div>
      <NavLink activeClassName={styles.activeNav} to="/page2">Page2</NavLink>
    </div>
  )
}
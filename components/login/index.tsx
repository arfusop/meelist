import React from 'react'
import styles from './Login.module.scss'

const Login = () => {
    return (
        <div className={styles.loginForm}>
            <h1 className={styles.header}>Login</h1>
            <div>
                <label>Username</label>
                <input />
            </div>
            <div>
                <label>Password</label>
                <input />
            </div>
            <div>
                <button>Rogin</button>
                <button>Forgot PW</button>
            </div>
            <div>Ya boii forgot ?</div>
        </div>
    )
}

export default Login

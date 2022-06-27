import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import './css/login.css'

export default function Login(props) {

    const [colorBorderInputLogin, setBorderInputLogin] = React.useState({ borderColor: 'rgba(174, 174, 174, 1)' });
    const [colorBorderInputPassword, setBorderInputPassword] = React.useState({ borderColor: 'rgba(174, 174, 174, 1)' });
    const [redirect, setRedirect] = React.useState(false);
    const [username, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = e => {
        e.preventDefault()
        props.logIn(
            {
                username,
                password,
            },
            () => setRedirect({ redirect: true })
        )
    }

    const handleChangeLogin = (e) => {
        setUserName(e.currentTarget.value)
        props.deleteErrorMessage()
    }

    const handleChangePassword = (e) => {
        setPassword(e.currentTarget.value)
        props.deleteErrorMessage()
    }

    const focusLogin = () => setBorderInputLogin({ borderColor: 'rgba(82, 186, 0, 1)' })

    const blurLogin = () => setBorderInputLogin({ borderColor: 'rgba(174, 174, 174, 1)' })

    const focusPassword = () => setBorderInputPassword({ borderColor: 'rgba(82, 186, 0, 1)' })

    const blurPassword = () => setBorderInputPassword({ borderColor: 'rgba(174, 174, 174, 1)' })

    const { errorType, errorMsg } = props

    if (redirect) {
        return <Navigate to={'/list'} />
    }

    return (
        <div className="loginFormStyle">
            <form className="formStyle" onSubmit={handleSubmit}>
                <div className="textFormFieldStyle">Кто ты, путник?</div>
                <input
                    data-field-name={'username'}
                    type={'text'}
                    onChange={handleChangeLogin}
                    placeholder={'Логин'}
                    value={username}
                    style={(errorType == 'loginError') ? { borderColor: 'red' } : colorBorderInputLogin}
                    onFocus={focusLogin}
                    onBlur={blurLogin}
                />
                <input
                    data-field-name={'password'}
                    type={'text'}
                    onChange={handleChangePassword}
                    placeholder={'Пароль'}
                    value={password}
                    style={(errorType == 'passwordError') ? { borderColor: 'red' } : colorBorderInputPassword}
                    onFocus={focusPassword}
                    onBlur={blurPassword}
                />
                <div className="errorMsg">{errorMsg}</div>
                <button type="submit">Погнали!</button>
            </form>
        </div>
    )
}

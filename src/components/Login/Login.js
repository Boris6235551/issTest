import React from 'react'
import { Navigate } from 'react-router-dom'
import './css/login.css'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colorBorderInputLogin: { borderColor: 'rgba(174, 174, 174, 1)' },
            colorBorderInputPassword: { borderColor: 'rgba(174, 174, 174, 1)' },
            redirect: false,
            username: '',
            password: '',
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        const { username, password } = this.state
        this.props.logIn(
            {
                username,
                password,
            },
            () => {
                this.setState({ redirect: true })
            }
        )
    }

    handleChange = e => {
        const value = e.currentTarget.value
        const fieldName = e.currentTarget.dataset.fieldName
        this.props.deleteErrorMessage()
        this.setState(prev => (
            {
                ...prev,
                [fieldName]: value,
            }))
    }

    focusLogin = () => {
        this.setState(prev => (
            {
                ...prev,
                colorBorderInputLogin: { borderColor: 'rgba(82, 186, 0, 1)' }
            }))
    }

    blurLogin = () => {
        this.setState(prev => (
            {
                ...prev,
                colorBorderInputLogin: { borderColor: 'rgba(174, 174, 174, 1)' }
            }))
    }

    focusPassword = () => {
        this.setState(prev => (
            {
                ...prev,
                colorBorderInputPassword: { borderColor: 'rgba(82, 186, 0, 1)' }
            }))
    }

    blurPassword = () => {
        this.setState(prev => (
            {
                ...prev,
                colorBorderInputPassword: { borderColor: 'rgba(174, 174, 174, 1)' }
            }))
    }

    render() {
        const { errorType, errorMsg } = this.props
        const { username, password, redirect } = this.state

        if (redirect) {
            return <Navigate to={'/list'} />
        }

        return (
            <div className="loginFormStyle">
                <form className="formStyle" onSubmit={this.handleSubmit}>
                    <div className="textFormFieldStyle">Кто ты, путник?</div>
                    <input
                        data-field-name={'username'}
                        type={'text'}
                        onChange={this.handleChange}
                        placeholder={'Логин'}
                        value={username}
                        style={(errorType == 'loginError') ? { borderColor: 'red' } : this.state.colorBorderInputLogin}
                        onFocus={this.focusLogin}
                        onBlur={this.blurLogin}
                    />
                    <input
                        data-field-name={'password'}
                        type={'text'}
                        onChange={this.handleChange}
                        placeholder={'Пароль'}
                        value={password}
                        style={(errorType == 'passwordError') ? { borderColor: 'red' } : this.state.colorBorderInputPassword}
                        onFocus={this.focusPassword}
                        onBlur={this.blurPassword}
                    />
                    <div className="errorMsg">{errorMsg}</div>
                    <button type="submit">Погнали!</button>
                </form>
            </div>
        )
    }
}

export default Login

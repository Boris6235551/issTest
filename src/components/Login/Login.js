import React from 'react'
import { Navigate } from 'react-router-dom'
import './css/login.css'

class Login extends React.Component {
    state = {
        redirect: false,
        username: '',
        password: '',
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
        console.log(fieldName)
        this.setState(prev => ({
            ...prev,
            [fieldName]: value,
        }))
    }

    render() {
        const { errorMsg } = this.props
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
                    />
                    <input
                        data-field-name={'password'}
                        type={'text'}
                        onChange={this.handleChange}
                        placeholder={'Пароль'}
                        value={password}
                    />
                     <div className="errorMsg">{errorMsg}</div>
                    <button type="submit">Погнали!</button>
                </form>
            </div>
        )
    }
}

export default Login
